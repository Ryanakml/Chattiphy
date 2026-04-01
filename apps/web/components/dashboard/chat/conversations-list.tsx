import { Check, Edit, Filter, Loader2, Search, Sparkles } from "lucide-react";
import type { ReactNode } from "react";
import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar";
import { Button } from "@workspace/ui/components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";
import { Input } from "@workspace/ui/components/input";
import { ScrollArea } from "@workspace/ui/components/scroll-area";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs";
import { cn } from "@workspace/ui/lib/utils";
import { Separator } from "@workspace/ui/components/separator";

type ConversationTab = "my-testing" | "visitor-chats";
type ConversationFilter = "all" | "active" | "closed";
type ConversationListItem = {
  _id: string;
  topic?: string;
  status?: string;
  last_message_at?: number;
  lastMessage?: {
    content?: string;
    role?: string;
  } | null;
  user?: {
    name?: string;
  } | null;
};

interface ConversationsListProps {
  activeTab: ConversationTab;
  onActiveTabChange: (value: ConversationTab) => void;
  searchQuery: string;
  onSearchQueryChange: (value: string) => void;
  filterStatus: ConversationFilter;
  onFilterStatusChange: (value: ConversationFilter) => void;
  conversations: ConversationListItem[] | null | undefined;
  selectedId: string | null;
  onSelectConversation: (id: string) => void;
  botProfileLoaded: boolean;
  emptyMessage?: ReactNode;
}

export function ConversationsList({
  activeTab,
  onActiveTabChange,
  searchQuery,
  onSearchQueryChange,
  filterStatus,
  onFilterStatusChange,
  conversations,
  selectedId,
  onSelectConversation,
  botProfileLoaded,
  emptyMessage,
}: ConversationsListProps) {
  return (
    <aside className="flex h-full w-full flex-col overflow-hidden bg-[#09090b] text-zinc-100 md:max-w-[340px]">
      <Tabs
        value={activeTab}
        onValueChange={(value) => onActiveTabChange(value as ConversationTab)}
        className="flex flex-1 flex-col overflow-hidden"
      >
        <TabsContent value={activeTab} className="flex flex-1 flex-col overflow-hidden">
          <div className="sticky top-0 z-10 bg-[#09090b] px-1 pb-4 pt-2">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <h1 className="text-3xl font-semibold tracking-tight text-zinc-100">Inbox</h1>
                <Sparkles className="h-4 w-4 text-blue-400/70" />
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-xl text-zinc-400 hover:bg-blue-950/40 hover:text-blue-200"
              >
                <Edit className="h-4 w-4" />
              </Button>
            </div>

            <TabsList className="mb-3 h-auto w-full justify-start gap-2 rounded-xl border border-zinc-800 bg-[#101625] p-1">
              <TabsTrigger
                value="my-testing"
                className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-400 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                My Testing
              </TabsTrigger>
              <TabsTrigger
                value="visitor-chats"
                className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-400 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                Visitor Chats
              </TabsTrigger>
            </TabsList>

            <label
              className={cn(
                "mb-3 flex h-11 items-center rounded-xl border border-zinc-800 bg-[#111827] pl-3",
                "focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600/40",
              )}
            >
              <Search className="mr-2 h-4 w-4 text-zinc-500" />
              <Input
                placeholder="Search chat..."
                className="h-full border-0 bg-transparent px-0 text-sm text-zinc-100 placeholder:text-zinc-500 focus-visible:ring-0"
                value={searchQuery}
                onChange={(event) => onSearchQueryChange(event.target.value)}
              />
            </label>

            <div className="flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="h-10 flex-1 justify-between rounded-xl border border-zinc-800 bg-[#111827] px-3 text-zinc-100 hover:bg-blue-950/40 hover:text-blue-100"
                  >
                    <div className="flex items-center">
                      <Filter className="mr-2 h-4 w-4" />
                      <span className="capitalize">
                        {filterStatus === "all" ? "All Chats" : filterStatus}
                      </span>
                    </div>
                    {filterStatus !== "all" && (
                      <span className="flex h-2 w-2 rounded-full bg-blue-500" />
                    )}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="w-[280px] rounded-xl border-zinc-800 bg-[#0c0c0e] text-zinc-200"
                >
                  <DropdownMenuLabel className="text-xs font-normal uppercase tracking-wider text-zinc-500">
                    Filter by Status
                  </DropdownMenuLabel>
                  <DropdownMenuItem
                    onClick={() => onFilterStatusChange("all")}
                    className="cursor-pointer justify-between focus:bg-blue-950/40 focus:text-blue-100"
                  >
                    All Chats
                    {filterStatus === "all" && <Check className="h-4 w-4 text-blue-400" />}
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => onFilterStatusChange("active")}
                    className="cursor-pointer justify-between focus:bg-blue-950/40 focus:text-blue-100"
                  >
                    Open / Active
                    {filterStatus === "active" && <Check className="h-4 w-4 text-blue-400" />}
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => onFilterStatusChange("closed")}
                    className="cursor-pointer justify-between focus:bg-blue-950/40 focus:text-blue-100"
                  >
                    Closed
                    {filterStatus === "closed" && <Check className="h-4 w-4 text-blue-400" />}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <ScrollArea className="flex-1 pr-1">
            <div className="flex w-full flex-col pt-2">
              {!botProfileLoaded || conversations === undefined ? (
                <div className="flex items-center justify-center py-8">
                  <Loader2 className="h-4 w-4 animate-spin text-blue-500" />
                </div>
              ) : conversations === null || conversations.length === 0 ? (
                <div className="p-4 text-center">
                  {emptyMessage ?? (
                    <p className="text-sm text-zinc-500">No conversations yet</p>
                  )}
                </div>
              ) : (
                conversations.map((conversation) => {
                  const isClosed = conversation.status === "closed";

                  return (
                    <div key={conversation._id}>
                      <button
                        type="button"
                        onClick={() => onSelectConversation(conversation._id)}
                        className={cn(
                          "group flex w-full items-start gap-3 rounded-2xl px-3 py-3 text-left transition-colors",
                          selectedId === conversation._id
                            ? "border border-blue-600/30 bg-blue-950/30 text-white"
                            : "hover:bg-zinc-900/80",
                          isClosed && selectedId !== conversation._id
                            ? "opacity-50"
                            : "opacity-100",
                        )}
                      >
                        <Avatar className="mt-0.5 h-12 w-12">
                          <AvatarFallback
                            className={cn(
                              "text-sm font-semibold text-white",
                              isClosed
                                ? "bg-zinc-800 text-zinc-400"
                                : activeTab === "visitor-chats"
                                  ? "bg-blue-700"
                                  : "bg-blue-600",
                            )}
                          >
                            {conversation.user?.name?.[0]?.toUpperCase() || "U"}
                          </AvatarFallback>
                        </Avatar>

                        <div className="min-w-0 flex-1">
                          <div className="mb-1 flex items-start justify-between gap-3">
                            <span className="truncate text-base font-semibold text-zinc-100">
                              {conversation.user?.name || "Anonymous"}
                            </span>
                            <span className="shrink-0 text-xs text-zinc-500">
                              {formatConversationTimestamp(conversation.last_message_at)}
                            </span>
                          </div>
                          <p className="line-clamp-2 text-sm leading-6 text-zinc-400">
                            {getConversationPreview(conversation)}
                          </p>
                        </div>
                      </button>
                      <Separator className="my-1 bg-zinc-800/70" />
                    </div>
                  );
                })
              )}
            </div>
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </aside>
  );
}

function getConversationPreview(conversation: ConversationListItem) {
  if (conversation.lastMessage?.content) {
    return conversation.lastMessage.role === "user"
      ? `You: ${conversation.lastMessage.content}`
      : conversation.lastMessage.content;
  }

  return conversation.topic || "No topic";
}

function formatConversationTimestamp(value?: number) {
  if (!value) {
    return "Just now";
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(value));
}

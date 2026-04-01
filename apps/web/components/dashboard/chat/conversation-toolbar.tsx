import { ArrowLeft, MoreVertical, Phone, Video } from "lucide-react";
import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar";
import { Button } from "@workspace/ui/components/button";
import { cn } from "@workspace/ui/lib/utils";

type ConversationToolbarItem = {
  topic?: string;
  messageCount?: number;
  user?: {
    name?: string;
  } | null;
  status?: string;
};

interface ConversationToolbarProps {
  conversation: ConversationToolbarItem;
  onBack?: () => void;
  showBackButton?: boolean;
}

export function ConversationToolbar({
  conversation,
  onBack,
  showBackButton = false,
}: ConversationToolbarProps) {
  return (
    <header className="flex items-center justify-between border-b border-zinc-800 bg-[#0d1728] px-5 py-4 sm:px-6">
      <div className="flex min-w-0 items-center gap-3">
        {showBackButton && onBack ? (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={onBack}
            className="rounded-full text-zinc-400 hover:bg-blue-950/40 hover:text-blue-100 md:hidden"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Back to inbox</span>
          </Button>
        ) : null}
        <Avatar className="h-12 w-12 border border-zinc-700">
          <AvatarFallback className="bg-blue-600 text-sm font-semibold text-white">
            {conversation.user?.name?.[0]?.toUpperCase() || "U"}
          </AvatarFallback>
        </Avatar>
        <div className="min-w-0">
          <h1 className="truncate text-xl font-semibold text-zinc-100">
            {conversation.user?.name || "Anonymous"}
          </h1>
          <p className="truncate text-sm text-zinc-400">
            {conversation.topic || "Conversation"} · {conversation.messageCount || 0} messages
          </p>
        </div>
      </div>
      <div className="flex items-center gap-1 sm:gap-2">
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "hidden rounded-full text-zinc-400 hover:bg-blue-950/40 hover:text-blue-100 sm:inline-flex",
            showBackButton && "md:inline-flex",
          )}
        >
          <Video className="h-5 w-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "hidden rounded-full text-zinc-400 hover:bg-blue-950/40 hover:text-blue-100 sm:inline-flex",
            showBackButton && "md:inline-flex",
          )}
        >
          <Phone className="h-5 w-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full text-zinc-400 hover:bg-blue-950/40 hover:text-blue-100"
        >
          <MoreVertical className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
}

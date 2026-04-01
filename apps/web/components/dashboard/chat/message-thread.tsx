import { ImagePlus, Loader2, Paperclip, Plus, Send } from "lucide-react";
import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar";
import { Button } from "@workspace/ui/components/button";
import { cn } from "@workspace/ui/lib/utils";
import type { Message } from "@/lib/convex-client";

interface MessageThreadProps {
  messages: Message[] | null | undefined;
  botName: string;
}

export function MessageThread({ messages, botName }: MessageThreadProps) {
  const groupedMessages =
    messages?.reduce<Record<string, Message[]>>((acc, message) => {
      const key = formatMessageDate(message.created_at);
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(message);
      return acc;
    }, {}) ?? null;

  return (
    <div className="flex h-full min-h-0 flex-1 flex-col bg-[#0b1220] px-4 pb-4 sm:px-6">
      {messages === undefined ? (
        <div className="flex flex-1 items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <Loader2 className="h-5 w-5 animate-spin text-blue-500" />
            <p className="text-sm text-zinc-400">Loading messages...</p>
          </div>
        </div>
      ) : messages === null || messages.length === 0 ? (
        <div className="flex flex-1 items-center justify-center">
          <p className="text-center text-zinc-400">No messages in this conversation</p>
        </div>
      ) : (
        <>
          <div className="min-h-0 flex-1 overflow-y-auto py-5">
            <div className="mx-auto flex max-w-5xl flex-col gap-6">
              {groupedMessages &&
                Object.entries(groupedMessages).map(([dateKey, dateMessages]) => (
                  <div key={dateKey} className="space-y-5">
                    <div className="flex items-center justify-center">
                      <span className="rounded-full border border-zinc-800 bg-[#101625] px-3 py-1 text-xs text-zinc-400">
                        {dateKey}
                      </span>
                    </div>
                    {dateMessages.map((message, index) => (
                      <MessageBubble
                        key={message._id || index}
                        message={message}
                        botName={botName}
                      />
                    ))}
                  </div>
                ))}
            </div>
          </div>

          <form className="mx-auto flex w-full max-w-5xl flex-none gap-2 border-t border-zinc-800 pt-4">
            <div className="flex flex-1 items-center gap-2 rounded-2xl border border-zinc-800 bg-[#111827] px-2 py-2">
              <div className="flex items-center gap-1">
                <Button
                  size="icon"
                  type="button"
                  variant="ghost"
                  className="h-9 rounded-xl text-zinc-400 hover:bg-blue-950/40 hover:text-blue-100"
                >
                  <Plus className="h-5 w-5" />
                </Button>
                <Button
                  size="icon"
                  type="button"
                  variant="ghost"
                  className="hidden h-9 rounded-xl text-zinc-400 hover:bg-blue-950/40 hover:text-blue-100 lg:inline-flex"
                >
                  <ImagePlus className="h-5 w-5" />
                </Button>
                <Button
                  size="icon"
                  type="button"
                  variant="ghost"
                  className="hidden h-9 rounded-xl text-zinc-400 hover:bg-blue-950/40 hover:text-blue-100 lg:inline-flex"
                >
                  <Paperclip className="h-5 w-5" />
                </Button>
              </div>
              <label className="flex-1">
                <span className="sr-only">Chat Text Box</span>
                <input
                  type="text"
                  placeholder="Type your messages..."
                  readOnly
                  className="h-10 w-full bg-transparent px-2 text-sm text-zinc-100 outline-none placeholder:text-zinc-500"
                />
              </label>
              <Button
                variant="ghost"
                size="icon"
                type="button"
                className="hidden rounded-xl text-zinc-400 hover:bg-blue-950/40 hover:text-blue-100 sm:inline-flex"
              >
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}

interface MessageBubbleProps {
  message: Message;
  botName: string;
}

function MessageBubble({ message, botName }: MessageBubbleProps) {
  const isBot = message.role === "bot";
  const timestamp = formatMessageTime(message.created_at);

  return (
    <div
      className={cn(
        "flex w-full gap-3 animate-in fade-in slide-in-from-bottom-2 duration-300",
        isBot ? "flex-row" : "flex-row-reverse",
      )}
    >
      {isBot && (
        <Avatar className="mt-1 h-10 w-10 flex-shrink-0">
          <AvatarFallback className="bg-blue-600 text-sm font-semibold text-white">
            {botName.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      )}

      <div className={cn("flex max-w-[78%] flex-col gap-2", isBot ? "items-start" : "items-end")}>
        <span
          className={cn(
            "px-2 text-xs font-medium uppercase tracking-[0.18em] text-zinc-500",
            isBot ? "text-left" : "text-right",
          )}
        >
          {isBot ? botName : "You"}
        </span>
        <div
          className={cn(
            "break-words rounded-[22px] px-5 py-4 text-base leading-8 shadow-sm",
            isBot
              ? "rounded-bl-md bg-[#111827] text-zinc-100"
              : "rounded-br-md bg-blue-600 text-white",
          )}
        >
          {message.content}
        </div>
        <span
          className={cn(
            "px-2 text-xs italic text-zinc-500",
            isBot ? "text-left" : "text-right",
          )}
        >
          {timestamp}
        </span>
      </div>
    </div>
  );
}

function formatMessageDate(value: number) {
  return new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(value));
}

function formatMessageTime(value: number) {
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(new Date(value));
}

import type { ReactNode } from "react";
import { MessagesSquare, Loader2 } from "lucide-react";

type ConversationDetailItem = {
  _id: string;
  topic?: string;
  status?: string;
  created_at?: number;
  last_message_at?: number;
  user?: {
    name?: string;
  } | null;
};

interface ConversationDetailProps {
  conversation?: ConversationDetailItem;
  toolbar?: ReactNode;
  thread?: ReactNode;
  loadingConversations?: boolean;
  hasConversations?: boolean;
  mobileDetailOpen?: boolean;
}

export function ConversationDetail({
  conversation,
  toolbar,
  thread,
  loadingConversations = false,
  hasConversations = true,
  mobileDetailOpen = false,
}: ConversationDetailProps) {
  return (
    <main className="flex min-w-0 flex-1 flex-col overflow-hidden rounded-[28px] border border-zinc-800 bg-[#0b1220] text-zinc-100 shadow-sm shadow-blue-950/10">
      {conversation ? (
        <>
          {toolbar}
          <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-3 text-sm text-zinc-400">
            <div className="flex min-w-0 items-center gap-3">
              <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-blue-300">
                {conversation.status || "active"}
              </span>
              <span className="truncate">
                {conversation.last_message_at
                  ? `Last activity ${new Date(conversation.last_message_at).toLocaleDateString(
                      "en-US",
                      {
                        month: "short",
                        day: "numeric",
                        hour: "numeric",
                        minute: "2-digit",
                      },
                    )}`
                  : "No recent activity"}
              </span>
            </div>
            <span className="hidden truncate text-xs text-zinc-500 lg:block">
              {conversation._id}
            </span>
          </div>

          <div className="min-h-0 flex-1 overflow-hidden">{thread}</div>
        </>
      ) : loadingConversations ? (
        <div className="flex flex-1 items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <Loader2 className="h-5 w-5 animate-spin text-blue-500" />
            <p className="text-sm text-zinc-400">Loading conversations...</p>
          </div>
        </div>
      ) : !hasConversations ? (
        <div className="flex flex-1 items-center justify-center px-6">
          <div className="flex flex-col items-center space-y-6 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-zinc-800 bg-blue-500/5">
              <MessagesSquare className="h-8 w-8 text-blue-400" />
            </div>
            <div className="space-y-2">
              <h1 className="text-xl font-semibold text-zinc-100">Your messages</h1>
              <p className="text-sm text-zinc-400">
                Conversations will appear here when users chat with your bot.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-1 items-center justify-center px-6">
          <div className="flex flex-col items-center space-y-6 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-zinc-800 bg-blue-500/5">
              <MessagesSquare className="h-8 w-8 text-blue-400" />
            </div>
            <div className="space-y-2">
              <h1 className="text-xl font-semibold text-zinc-100">
                {mobileDetailOpen ? "Loading conversation" : "Select a conversation"}
              </h1>
              <p className="text-sm text-zinc-400">
                {mobileDetailOpen
                  ? "Preparing the selected thread."
                  : "Choose a chat from the inbox to open the thread."}
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

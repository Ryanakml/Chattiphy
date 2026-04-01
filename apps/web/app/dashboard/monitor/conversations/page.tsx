"use client";

import { useEffect, useState } from "react";
import {
  type Conversation,
  useBotProfile,
  useConversationMessages,
  useAdminConversations,
  usePublicConversations,
} from "@/lib/convex-client";
import type { Id } from "@workspace/backend/convex/_generated/dataModel";
import { ConversationDetail } from "@/components/dashboard/chat/conversation-detail";
import { ConversationToolbar } from "@/components/dashboard/chat/conversation-toolbar";
import { ConversationsList } from "@/components/dashboard/chat/conversations-list";
import { ConversationsShell } from "@/components/dashboard/chat/conversations-shell";
import { MessageThread } from "@/components/dashboard/chat/message-thread";

export default function ConversationsPage() {
  const botProfile = useBotProfile();
  const adminConversations = useAdminConversations(botProfile?._id);
  const publicConversations = usePublicConversations(botProfile?._id);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"my-testing" | "visitor-chats">(
    "my-testing",
  );
  const [filterStatus, setFilterStatus] = useState<"all" | "active" | "closed">(
    "all",
  );

  const rawConversations =
    activeTab === "my-testing" ? adminConversations : publicConversations;

  const conversations = rawConversations
    ? [...rawConversations]
        .filter(
          (c) =>
            c.user?.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            c.topic?.toLowerCase().includes(searchQuery.toLowerCase()),
        )
        .filter((c) => {
          if (filterStatus === "all") return true;
          if (filterStatus === "active")
            return c.status === "active" || c.status === "paused";
          return c.status === filterStatus;
        })
        .sort((a, b) => (b.last_message_at || 0) - (a.last_message_at || 0))
    : rawConversations;

  const selectedConversation = selectedId
    ? conversations?.find((c) => c._id === selectedId)
    : conversations?.[0];
  const effectiveSelectedId = selectedConversation?._id ?? null;

  useEffect(() => {
    if (selectedId && conversations && !conversations.some((c) => c._id === selectedId)) {
      setSelectedId(null);
    }
  }, [conversations, selectedId]);

  const messages = useConversationMessages(
    selectedConversation?._id
      ? (selectedConversation._id as Id<"conversations">)
      : "skip",
  );

  const loadingConversations = !botProfile || conversations === undefined;
  const hasConversations = !!conversations && conversations.length > 0;

  return (
    <ConversationsShell
      detailOpen={selectedId !== null}
      sidebar={
        <ConversationsList
          activeTab={activeTab}
          onActiveTabChange={setActiveTab}
          searchQuery={searchQuery}
          onSearchQueryChange={setSearchQuery}
          filterStatus={filterStatus}
          onFilterStatusChange={setFilterStatus}
          conversations={conversations as Conversation[] | null | undefined}
          selectedId={effectiveSelectedId}
          onSelectConversation={setSelectedId}
          botProfileLoaded={!!botProfile}
        />
      }
      detail={
        <ConversationDetail
          conversation={selectedConversation}
          loadingConversations={loadingConversations}
          hasConversations={hasConversations}
          mobileDetailOpen={selectedId !== null}
          toolbar={
            selectedConversation ? (
              <ConversationToolbar
                conversation={selectedConversation}
                onBack={() => setSelectedId(null)}
                showBackButton={selectedId !== null}
              />
            ) : null
          }
          thread={
            selectedConversation ? (
              <MessageThread
                messages={messages}
                botName={botProfile?.bot_names || "Bot"}
              />
            ) : null
          }
        />
      }
    />
  );
}

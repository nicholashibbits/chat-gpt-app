"use server";
import { getServerSession } from "next-auth";

import { createChat, updateChat as updateChatMessages } from "@/db";

export const updateChat = async (
  chatId: string | null,
  messages: {
    role: "user" | "assistant";
    content: string;
  }[]
) => {
  const session = await getServerSession();
  if (!chatId) {
    return await createChat(
      session?.user?.email!,
      messages[0].content,
      messages
    );
  } else {
    await updateChatMessages(chatId, messages);
    return chatId;
  }
};

"use client";

import { useState, useRef } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { getCompletion } from "@/app/server-actions/getCompletion";
import { Message } from "@/types";

import Transcript from "./Transcript";

export default function Chat({
  id = null,
  messages: initialMessages = [],
}: {
  id?: string | null;
  messages?: Message[];
}) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [message, setMessage] = useState("");
  const chatId = useRef<string | null>(id);

  const router = useRouter();

  const onClick = async () => {
    const completions = await getCompletion(chatId.current, [
      ...messages,
      {
        role: "user",
        content: message,
      },
    ]);
    if (!chatId.current) {
      router.push(`/chats/${completions.id}`);
      router.refresh();
    }
    chatId.current = completions.id;
    setMessage("");
    setMessages(completions.messages);
  };

  return (
    <div className="flex flex-col">
      <Transcript messages={messages} truncate={false} />
      <div className="flex pt-3 mt-3">
        <Input
          className="flex-grow text-xl"
          placeholder="Question"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              onClick();
            }
          }}
        />
        <Button onClick={onClick} className="ml-3 text-xl">
          Send
        </Button>
      </div>
    </div>
  );
}

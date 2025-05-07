import Chat from "@/app/components/Chat";
import { getChat } from "@/db";

export const dynamic = "force-dynamic";

export default async function ChatDetail({
  params,
}: {
  params: { chatId: string };
}) {
  const { chatId } = await params;

  const chat = await getChat(chatId);
  return (
    <main className="pt-5">
      <Chat id={chatId} messages={chat?.messages} />
    </main>
  );
}

import Chat from "@/app/components/Chat";
import { getChat } from "@/db";

export default async function ChatDetail({
  params,
}: {
  params: { chatId: string };
}) {
  const chat = await getChat(parseInt(params.chatId));
  return (
    <main className="pt-5">
      <Chat id={parseInt(params.chatId)} messages={chat?.messages} />
    </main>
  );
}

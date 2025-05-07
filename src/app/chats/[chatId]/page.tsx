import { notFound, redirect } from "next/navigation";
import { getServerSession } from "next-auth";
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
  if (!chat) {
    return notFound();
  }
  const session = await getServerSession();
  if (!session?.user?.email || chat.user_email !== session.user.email) {
    return redirect("/");
  }
  return (
    <main className="pt-5">
      <Chat id={chatId} messages={chat?.messages} />
    </main>
  );
}

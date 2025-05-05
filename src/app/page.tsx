import { Separator } from "@/components/ui/separator";
import { getServerSession } from "next-auth";
import Chat from "./components/Chat";
import { neon } from "@neondatabase/serverless";

export default async function Home() {
  const session = await getServerSession();
  const db = neon(`${process.env.DATABASE_URL}`);

  return (
    <main className="p-5">
      <h1 className="text-4xl font-bold">Welcome To GPT Chat</h1>
      {!session?.user?.name && (
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl">Please sign in to continue</p>
        </div>
      )}
      {session?.user?.name && (
        <>
          <Separator className="my-5" />
          <Chat />
        </>
      )}
    </main>
  );
}

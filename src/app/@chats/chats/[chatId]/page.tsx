import { getServerSession } from "next-auth";

import ChatMenu from "@/app/components/ChatMenu";

export default async function ChatMenuColumn() {

  const session = await getServerSession();

  // TODO: reconfigure OAuth for real authentication
  const authenticated = session?.user?.name === "Nicholas Hibbits";
  // const authenticated = !!session?.user?.email;

  return authenticated ? (
    <div className="md:w-1/3 md:min-w-1/3 pr-5 w-full text-nowrap">
      <ChatMenu />
    </div>
  ) : null;
}

import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Suspense } from "react";

async function AuthRedirect(): Promise<null> {
  const { userId } = await auth();
  redirect(userId ? "/editor" : "/sign-in");
  return null;
}

export default function Home() {
  return (
    <Suspense fallback={null}>
      <AuthRedirect />
    </Suspense>
  );
}

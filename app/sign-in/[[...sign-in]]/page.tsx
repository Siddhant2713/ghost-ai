import { SignIn } from "@clerk/nextjs";
import { Suspense } from "react";

import { AuthLayout } from "@/components/auth/auth-layout";

export default function SignInPage() {
  return (
    <AuthLayout>
      <Suspense fallback={null}>
        <SignIn />
      </Suspense>
    </AuthLayout>
  );
}

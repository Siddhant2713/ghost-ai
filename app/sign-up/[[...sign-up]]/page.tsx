import { SignUp } from "@clerk/nextjs";
import { Suspense } from "react";

import { AuthLayout } from "@/components/auth/auth-layout";

export default function SignUpPage() {
  return (
    <AuthLayout>
      <Suspense fallback={null}>
        <SignUp />
      </Suspense>
    </AuthLayout>
  );
}

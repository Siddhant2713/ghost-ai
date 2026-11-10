import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Public paths come from Clerk's sign-in / sign-up env vars (with Clerk's defaults).
const signInPath = process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL ?? "/sign-in";
const signUpPath = process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL ?? "/sign-up";

// The env vars may hold full URLs; route matching needs only the pathname.
const toPathname = (value: string) =>
  value.startsWith("/") ? value : new URL(value).pathname;

const isPublicRoute = createRouteMatcher([
  `${toPathname(signInPath)}(.*)`,
  `${toPathname(signUpPath)}(.*)`,
]);

export default clerkMiddleware(
  async (auth, request) => {
    if (!isPublicRoute(request)) {
      await auth.protect();
    }
  },
  // Tell Clerk to redirect to the local auth pages, not its hosted ones.
  { signInUrl: signInPath, signUpUrl: signUpPath },
);

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};

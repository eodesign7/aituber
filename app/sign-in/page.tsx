import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <SignIn
        appearance={{
          elements: {
            formButtonPrimary: "bg-red-500 hover:bg-red-600",
            footerActionLink: "text-red-500 hover:text-red-600",
          },
        }}
        afterSignInUrl="/video"
        redirectUrl="/video"
      />
    </div>
  );
}

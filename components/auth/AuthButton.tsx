"use client";

import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import { SignInButton, UserButton } from "@clerk/nextjs";

interface AuthButtonProps {
  userId?: string | null;
}

export default function AuthButton({ userId }: AuthButtonProps) {
  return (
    <div className="flex items-center gap-4">
      {!userId ? (
        <SignInButton mode="modal">
          <Button variant="outline">
            <LogIn className="w-4 h-4 mr-2" />
            Sign In
          </Button>
        </SignInButton>
      ) : (
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: "w-10 h-10",
            },
          }}
        />
      )}
    </div>
  );
}

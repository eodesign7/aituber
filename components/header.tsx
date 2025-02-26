import Link from "next/link";
import React from "react";
import { auth } from "@clerk/nextjs/server";
import AuthButton from "./auth/AuthButton";

export default async function Header() {
  const { userId } = await auth();

  return (
    <div className="flex items-center justify-between mx-auto border-b px-16 py-4 w-full sticky top-0 bg-background z-50">
      <div className="flex items-center justify-between">
        <Link href="/">
          <h1 className="text-2xl font-bold">
            <span className="text-red-500">AI.</span>TUBER.
          </h1>
        </Link>
      </div>
      <AuthButton userId={userId} />
    </div>
  );
}

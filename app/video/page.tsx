import React from "react";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function VideoPage() {
  const { userId } = await auth();
  
  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="aspect-video w-full rounded-lg overflow-hidden bg-black/40">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/VIDEO_ID"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <div className="mt-8">
        <h1 className="text-3xl font-bold">Video Analysis</h1>
        <p className="text-muted-foreground mt-2">
          Your video is being analyzed. Results will appear here shortly.
        </p>
      </div>
    </div>
  );
} 
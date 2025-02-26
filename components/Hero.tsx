"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import Features from "./Features";
import Testimonials from "./Testimonials";

export default function Hero() {
  const router = useRouter();

  const handleAnalyze = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/sign-in");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="min-h-[70vh] flex flex-col justify-center items-center text-center">
        <h1 className="text-7xl font-bold mb-6">
          Transform Your <span className="text-red-500">YouTube</span> Content
        </h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl">
          Your AI-powered YouTube assistant for seamless content creation
        </p>

        {/* URL Input Section */}
        <form
          onSubmit={handleAnalyze}
          className="w-full max-w-2xl mx-auto flex gap-4">
          <Input
            type="url"
            placeholder="Paste your YouTube video URL..."
            className="flex-1"
            required
          />
          <Button type="submit" size="lg">
            Analyze Video
          </Button>
        </form>
      </div>

      <Features />
      <Testimonials />
    </div>
  );
}

import React from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Content Creator",
    initials: "AJ",
    content:
      "AI.TUBER completely transformed my content creation workflow. The video analysis and script generation features are game-changing!",
  },
  {
    name: "Sarah Chen",
    role: "YouTuber",
    initials: "SC",
    content:
      "The automated transcription and thumbnail generation save me hours of work. This tool is a must-have for any serious content creator.",
  },
  {
    name: "Mike Brown",
    role: "Video Producer",
    initials: "MB",
    content:
      "I've tried many AI tools, but AI.TUBER stands out with its accuracy and ease of use. It's become an essential part of my production process.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Creators Say</h2>
          <p className="text-muted-foreground text-lg">
            Join thousands of content creators who trust AI.TUBER
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-black/20 border-none">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="border-2 border-red-500">
                    <AvatarFallback className="bg-black/40">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

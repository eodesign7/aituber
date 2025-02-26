import React from "react";
import { Button } from "@/components/ui/button";
import { VideoIcon, FileAudio, PenTool, Wand2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Features() {
  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
        <p className="text-muted-foreground text-lg">
          Everything you need to create amazing content
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="hover:shadow-lg transition-all border-none bg-black/40">
          <CardHeader>
            <VideoIcon className="w-8 h-8 mb-2 text-red-500" />
            <CardTitle>Analyze Video</CardTitle>
            <CardDescription>
              Get deep insights and analytics about your video content
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">
              Learn More
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all border-none bg-black/40">
          <CardHeader>
            <FileAudio className="w-8 h-8 mb-2 text-blue-500" />
            <CardTitle>Transcribe Video</CardTitle>
            <CardDescription>
              Convert your video content into accurate text transcriptions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">
              Learn More
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all border-none bg-black/40">
          <CardHeader>
            <PenTool className="w-8 h-8 mb-2 text-green-500" />
            <CardTitle>Generate Script & Thumbnail</CardTitle>
            <CardDescription>
              Create engaging scripts and eye-catching thumbnails
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">
              Learn More
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all border-none bg-black/40">
          <CardHeader>
            <Wand2 className="w-8 h-8 mb-2 text-purple-500" />
            <CardTitle>Create Your Own</CardTitle>
            <CardDescription>
              Customize and create content your way
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">
              Learn More
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

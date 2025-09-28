"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import {
  Camera,
  Smartphone,
  Apple,
  Download,
  Zap,
  Target,
  Brain,
  Heart,
  ChevronRight,
  Star,
  Users,
  TrendingUp,
} from "lucide-react";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { cn } from "@/lib/utils";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { DotPattern } from "@/components/ui/dot-pattern";
import { SparklesText } from "@/components/ui/sparkles-text";

export default function BiteBuddyLanding() {
  const [showAppleDialog, setShowAppleDialog] = useState(false);

  const features = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Snap & Analyze",
      description:
        "Just take a photo of your meal and get instant nutritional insights powered by advanced AI",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Smart Recognition",
      description:
        "Our hybrid CNN + ViT model identifies every ingredient on your plate with incredible accuracy",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Personalized Suggestions",
      description:
        "Get tailored recommendations for healthier alternatives based on your current meal",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Health Focused",
      description:
        "Reduce risk of lifestyle diseases with informed dietary choices and nutritional awareness",
    },
  ];

  const stats = [
    {
      icon: <Users className="w-6 h-6" />,
      label: "Active Users",
      value: "--",
    },
    { icon: <Star className="w-6 h-6" />, label: "App Rating", value: "--" },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      label: "Accuracy",
      value: "95%",
    },
  ];

  return (
    <div className="min-h-screen text-black">
      
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/50 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2">
                <Image className="w-10 h-10 rounded-xl" src="/logo.png" alt="Bite Buddy" width={30} height={30} />
                {/* <Image className="w-5 h-5 text-white" src="/logo.png" alt="Bite Buddy" /> */}
              
              <SparklesText className="text-2xl" sparklesCount={5}>Bite Buddy</SparklesText>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-sm font-medium hover:text-gray-600 transition-colors"
              >
                Features
              </a>
              <a
                href="#download"
                className="text-sm font-medium hover:text-gray-600 transition-colors"
              >
                Download
              </a>
              {/* <Button variant="outline" size="sm">Sign In</Button> */}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 min-h-[90vh] flex items-center justify-center">
        <div className="container mx-auto text-center">
          <div className="group relative mx-auto min-w-[250px] max-w-min flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]">
            <span
              className={cn(
                "animate-gradient absolute inset-0 block h-full w-full rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]"
              )}
              style={{
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "destination-out",
                mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                maskComposite: "subtract",
                WebkitClipPath: "padding-box",
              }}
            />
            🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
            <AnimatedGradientText className="text-sm font-medium">
              Introducing Magic UI
            </AnimatedGradientText>
            <ChevronRight className="ml-1 size-4 stroke-neutral-500 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 mt-10 leading-tight">
            AI that decodes your plate into
            <span className="block bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              calories, macros & healthier choices
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Transform your nutritional awareness with instant meal analysis.
            Simply snap a photo and get comprehensive insights into what you're
            eating.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            {/* Android Download */}
            <RainbowButton
              size="lg"
              onClick={() => window.location.href = "/BiteBuddy.apk"}
              className="bg-black hover:bg-gray-800 text-white rounded-2xl px-8"
            >
              <Smartphone className="w-5 h-5 mr-2" />
              Download for Android
            </RainbowButton>

            {/* iOS "Download" */}
            <Button
              size="lg"
              variant="outline"
              className="border-black rounded-2xl text-black hover:bg-gray-50 px-8"
              onClick={() => setShowAppleDialog(true)}
            >
              <Apple className="w-5 h-5 mr-2" />
              Download for iOS
            </Button>
          </div>

          {/* Apple Dialog */}
          {showAppleDialog && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
              <Card className="max-w-md w-full">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <Apple className="w-16 h-16 mx-auto text-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">
                    Hold up there, Apple user! 🍎
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Do you seriously think we'd pay Apple's $99 developer fee
                    just to let you download our hackathon app? We're broke
                    college students, not tech billionaires! 😅
                  </p>
                  <p className="text-sm text-gray-500 mb-6">
                    Maybe try it on your friend's Android phone? We promise it's
                    worth the friendship drama.
                  </p>
                  <Button
                    onClick={() => setShowAppleDialog(false)}
                    className="bg-black hover:bg-gray-800 text-white"
                  >
                    Fair enough, close this
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center space-x-2">
                {stat.icon}
                <div>
                  <div className="font-bold text-lg">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powerful Features for Smarter Eating
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our advanced AI technology makes nutritional tracking effortless
              and accurate
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-2 shadow-none transition-shadow duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-black rounded-2xl text-white mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              How Bite Buddy Works
            </h2>
            <p className="text-xl text-gray-600">
              Four simple steps to better nutrition awareness
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Capture",
                  desc: "Take a photo of your meal",
                },
                {
                  step: "02",
                  title: "Analyze",
                  desc: "AI identifies all ingredients",
                },
                {
                  step: "03",
                  title: "Calculate",
                  desc: "Get calories & macros instantly",
                },
                {
                  step: "04",
                  title: "Improve",
                  desc: "Receive healthier alternatives",
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-[#2bff00] rounded-full text-lg font-black mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                  {index < 3 && (
                    <ChevronRight className="w-6 h-6 mx-auto mt-4 text-gray-400 hidden md:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Eating Habits?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already making smarter food choices
            with Bite Buddy
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <RainbowButton
              size="lg"
              variant="outline"
              className="border-white text-black px-8"
              onClick={() => window.location.href = "/BiteBuddy.apk"}
            >
              <Download className="w-5 h-5 mr-2" />
              Download Now
            </RainbowButton>
            <Button
              size="lg"
              variant="default"
              className="text-white px-8"
              onClick={() => window.open("https://bitebdocs.vercel.app/", "_blank")}
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-50 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <Camera className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Bite Buddy</span>
            </div>
            <div className="text-sm text-gray-500">
              © 2024 Team lazrus. Built for hackathon with ❤️
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

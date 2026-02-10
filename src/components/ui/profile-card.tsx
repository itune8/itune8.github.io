"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Clock, Plus, Copy, Zap } from "lucide-react";

interface ProfileCardProps {
  name?: string;
  role?: string;
  email?: string;
  avatarSrc?: string;
  statusText?: string;
  statusColor?: string;
  glowText?: string;
  className?: string;
  onHireClick?: () => void;
}

export function ProfileCard({
  name = "Sahil Kumar",
  role = "Front-End Engineer & QA Specialist",
  email = "sahilgulmohur@gmail.com",
  avatarSrc = "/Profile_vid.mp4",
  statusText = "Available for work",
  statusColor = "bg-green-500",
  glowText = "Currently High on Creativity",
  className,
  onHireClick,
}: ProfileCardProps) {
  const [copied, setCopied] = useState(false);
  const [timeText, setTimeText] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const h = now.getHours();
      const m = now.getMinutes().toString().padStart(2, "0");
      const hour12 = ((h + 11) % 12) + 1;
      const ampm = h >= 12 ? "PM" : "AM";
      setTimeText(`${hour12}:${m}${ampm}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={cn("relative w-full max-w-xl mx-auto", className)}
    >
      {/* Glow effect */}
      <div className="pointer-events-none absolute inset-x-0 -bottom-10 top-[72%] rounded-[28px] bg-accent/80 blur-0 shadow-[0_40px_80px_-16px_rgba(255,107,53,0.8)] z-0" />

      {/* Glow text */}
      <div className="absolute inset-x-0 -bottom-10 mx-auto w-full z-0">
        <div className="flex items-center justify-center gap-2 bg-transparent py-3 text-center text-sm font-medium text-black">
          <Zap className="h-4 w-4" /> {glowText}
        </div>
      </div>

      <Card className="relative z-10 mx-auto w-full overflow-visible rounded-[28px] border-0 bg-[radial-gradient(120%_120%_at_30%_10%,#1a1a1a_0%,#0f0f10_60%,#0b0b0c_100%)] text-white shadow-2xl">
        <CardContent className="p-6 sm:p-8">
          {/* Status row */}
          <div className="mb-6 flex items-center justify-between text-sm text-neutral-300">
            <div className="flex items-center gap-2">
              <span
                className={cn(
                  "inline-block h-2.5 w-2.5 rounded-full animate-pulse",
                  statusColor
                )}
              />
              <span className="select-none">{statusText}</span>
            </div>
            <div className="flex items-center gap-2 opacity-80">
              <Clock className="h-4 w-4" />
              <span className="tabular-nums">{timeText}</span>
            </div>
          </div>

          {/* Avatar and info */}
          <div className="flex flex-wrap items-center gap-5">
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-accent/30">
              {avatarSrc.endsWith(".mp4") ? (
                <video
                  className="h-full w-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={avatarSrc} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={avatarSrc}
                  alt={`${name} avatar`}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              )}
            </div>
            <div className="min-w-0">
              <h3 className="truncate text-xl font-semibold tracking-tight sm:text-2xl">
                {name}
              </h3>
              <p className="mt-0.5 text-sm text-neutral-400">{role}</p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Button
              onClick={onHireClick}
              className="h-12 justify-start gap-3 rounded-2xl"
            >
              <Plus className="h-4 w-4" /> Hire Me
            </Button>

            <Button
              variant="glass"
              onClick={handleCopy}
              className="h-12 justify-start gap-3 rounded-2xl"
            >
              <Copy className="h-4 w-4" /> {copied ? "Copied!" : "Copy Email"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

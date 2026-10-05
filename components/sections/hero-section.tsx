"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export default function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative overflow-hidden bg-[#0a0f1a]">
      {/* DotGrid ambient texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 py-20 md:flex-row md:px-8 lg:py-28">
        {/* Left: Text */}
        <div className="flex flex-1 flex-col items-start gap-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs uppercase tracking-[0.2em] text-[#f59e0b]"
          >
            {t("eyebrow")}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-[16ch] text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            {t("headline")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-[50ch] text-lg leading-relaxed text-[#94a3b8]"
          >
            {t("subtext")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              asChild
              className="bg-[#f59e0b] px-6 py-3 text-base font-medium text-[#0a0f1a] hover:bg-[#f59e0b]/90"
            >
              <Link href="/attachments">{t("ctaPrimary")}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-[#475569] px-6 py-3 text-base font-medium text-white hover:bg-[#1a2332] hover:text-white"
            >
              <Link href="/rfq">{t("ctaSecondary")}</Link>
            </Button>
          </motion.div>
        </div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex-1"
        >
          <div className="aspect-[4/3] overflow-hidden rounded-xl bg-[#1a2332]">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop&q=60"
              alt="Excavator with hydraulic breaker attachment"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1a]/60 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

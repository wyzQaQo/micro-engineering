"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export default function CTASection() {
  const t = useTranslations("ctaSection");

  return (
    <section className="relative overflow-hidden bg-[#0a0f1a] py-20 md:py-28">
      {/* Ambient line background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.02]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-3xl px-4 text-center md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-6"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {t("title")}
          </h2>
          <p className="max-w-[60ch] text-lg leading-relaxed text-[#94a3b8]">
            {t("body")}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              asChild
              className="bg-[#f59e0b] px-8 py-3 text-base font-medium text-[#0a0f1a] hover:bg-[#f59e0b]/90"
            >
              <Link href="/rfq">{t("cta")}</Link>
            </Button>
          </div>
          <a
            href="https://wa.me/8613800000000?text=Hi,%20I%20am%20interested%20in%20your%20excavator%20attachments"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#64748b] transition-colors hover:text-[#f59e0b]"
          >
            {t("whatsapp")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

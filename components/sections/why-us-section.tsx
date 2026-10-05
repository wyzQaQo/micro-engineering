"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

const stats = [
  { value: "15,000+", labelKey: "attachmentsShipped" },
  { value: "40+", labelKey: "countriesServed" },
  { value: "12", labelKey: "yearsProduction" },
  { value: "CE / ISO", labelKey: "certifications" },
];

export default function WhyUsSection() {
  const t = useTranslations("whyChooseUs");

  return (
    <section className="bg-[#0a0f1a] py-20 md:py-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-4 md:flex-row md:px-8">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-1 flex-col gap-6"
        >
          <h2 className="max-w-[16ch] text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {t("title")}
          </h2>
          <p className="max-w-[50ch] leading-relaxed text-[#94a3b8]">
            {t("body")}
          </p>
          <div>
            <Button
              asChild
              variant="outline"
              className="border-[#475569] text-white hover:bg-[#1a2332] hover:text-white"
            >
              <Link href="/factory">{t("cta")}</Link>
            </Button>
          </div>
        </motion.div>

        {/* Right: Stats Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.labelKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-xl border border-[rgba(148,163,184,0.1)] bg-[#111827] p-6"
              >
                <p className="mb-1 text-3xl font-bold text-[#f59e0b] md:text-4xl">
                  {stat.value}
                </p>
                <p className="text-sm text-[#64748b]">{t(`stats.${stat.labelKey}`)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

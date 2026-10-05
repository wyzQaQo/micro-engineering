"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { CheckCircledIcon } from "@radix-ui/react-icons";

const features = ["cnc", "welding", "testing", "coating"];

export default function FactorySection() {
  const t = useTranslations("factory");

  return (
    <section className="bg-[#0a0f1a] py-20 md:py-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 md:flex-row md:items-center md:px-8">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <div className="aspect-square overflow-hidden rounded-xl md:aspect-[4/3]">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60"
              alt="Factory CNC machining center"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>

        {/* Right: Text */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-1 flex-col gap-6"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {t("title")}
          </h2>
          <p className="leading-relaxed text-[#94a3b8]">{t("body")}</p>

          <ul className="space-y-3">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-3">
                <CheckCircledIcon className="h-5 w-5 shrink-0 text-[#10b981]" />
                <span className="text-[#94a3b8]">{t(`features.${feature}`)}</span>
              </li>
            ))}
          </ul>

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
      </div>
    </section>
  );
}

"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { motion } from "motion/react";

const industries = [
  {
    key: "construction",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&fit=crop&q=60",
  },
  {
    key: "agriculture",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&auto=format&fit=crop&q=60",
  },
  {
    key: "landscaping",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&auto=format&fit=crop&q=60",
  },
  {
    key: "demolition",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&auto=format&fit=crop&q=60",
  },
  {
    key: "forestry",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&auto=format&fit=crop&q=60",
  },
  {
    key: "roadMaintenance",
    image:
      "https://images.unsplash.com/photo-1587582423116-ec07293f0395?w=600&auto=format&fit=crop&q=60",
  },
];

export default function IndustriesSection() {
  const t = useTranslations("industries");
  const locale = useLocale();

  return (
    <section className="bg-[#111827] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-3xl font-semibold tracking-tight text-white md:text-4xl"
        >
          {t("title")}
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`/${locale}/industries/${industry.key}`}
                className="group block overflow-hidden rounded-xl bg-[#1a2332]"
              >
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={industry.image}
                    alt={t(industry.key)}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white">
                    {t(industry.key)}
                  </h3>
                  <p className="mt-1 text-sm text-[#f59e0b]">
                    {t("explore")} &rarr;
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

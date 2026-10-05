"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { motion } from "motion/react";

const categories = [
  {
    key: "earthAuger",
    href: "/attachments/earth-auger",
    size: "large",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&auto=format&fit=crop&q=60",
  },
  {
    key: "hydraulicBreaker",
    href: "/attachments/hydraulic-breaker",
    size: "tall",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&auto=format&fit=crop&q=60",
  },
  {
    key: "grapple",
    href: "/attachments/grapple",
    size: "normal",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&fit=crop&q=60",
  },
  {
    key: "brushCutter",
    href: "/attachments/brush-cutter",
    size: "wide",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop&q=60",
  },
];

export default function CategoriesSection() {
  const t = useTranslations("categories");
  const locale = useLocale();

  return (
    <section className="bg-[#0a0f1a] py-20 md:py-28">
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

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Large cell - Earth Auger */}
          <Link
            href={`/${locale}${categories[0].href}`}
            className="group relative overflow-hidden rounded-xl md:row-span-2"
          >
            <div className="aspect-[3/4] md:aspect-auto md:h-full">
              <img
                src={categories[0].image}
                alt={t(categories[0].key)}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a]/90 via-[#0a0f1a]/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="mb-2 text-xl font-semibold text-white">
                  {t(categories[0].key)}
                </h3>
                <span className="text-sm text-[#f59e0b]">
                  {t("viewSeries")} &rarr;
                </span>
              </div>
            </div>
          </Link>

          {/* Tall cell - Hydraulic Breaker */}
          <Link
            href={`/${locale}${categories[1].href}`}
            className="group relative overflow-hidden rounded-xl md:row-span-2"
          >
            <div className="aspect-[3/4] md:aspect-auto md:h-full">
              <img
                src={categories[1].image}
                alt={t(categories[1].key)}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a]/90 via-[#0a0f1a]/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="mb-2 text-xl font-semibold text-white">
                  {t(categories[1].key)}
                </h3>
                <span className="text-sm text-[#f59e0b]">
                  {t("viewSeries")} &rarr;
                </span>
              </div>
            </div>
          </Link>

          {/* Normal cell - Grapple */}
          <Link
            href={`/${locale}${categories[2].href}`}
            className="group relative overflow-hidden rounded-xl"
          >
            <div className="aspect-[4/3]">
              <img
                src={categories[2].image}
                alt={t(categories[2].key)}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a]/90 via-[#0a0f1a]/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="mb-2 text-xl font-semibold text-white">
                  {t(categories[2].key)}
                </h3>
                <span className="text-sm text-[#f59e0b]">
                  {t("viewSeries")} &rarr;
                </span>
              </div>
            </div>
          </Link>

          {/* Wide cell - Brush Cutter */}
          <Link
            href={`/${locale}${categories[3].href}`}
            className="group relative overflow-hidden rounded-xl md:col-span-2 lg:col-span-1"
          >
            <div className="aspect-[16/9] lg:aspect-[4/3]">
              <img
                src={categories[3].image}
                alt={t(categories[3].key)}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a]/90 via-[#0a0f1a]/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="mb-2 text-xl font-semibold text-white">
                  {t(categories[3].key)}
                </h3>
                <span className="text-sm text-[#f59e0b]">
                  {t("viewSeries")} &rarr;
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

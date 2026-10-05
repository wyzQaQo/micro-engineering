"use client";

import { useTranslations } from "next-intl";

const brandLogos = [
  { name: "CAT", svg: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" },
  { name: "Komatsu", svg: "M4 4h16v16H4z" },
  { name: "Bobcat", svg: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" },
  { name: "JCB", svg: "M3 3h18v18H3z" },
  { name: "Kubota", svg: "M12 2a10 10 0 100 20 10 10 0 000-20z" },
  { name: "Takeuchi", svg: "M2 12h20M12 2v20" },
];

export default function TrustBar() {
  const t = useTranslations("trustBar");

  return (
    <section className="border-y border-[rgba(148,163,184,0.1)] bg-[#111827]">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-8">
        <p className="mb-6 text-center text-sm text-[#64748b]">{t("text")}</p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {brandLogos.map((brand) => (
            <div
              key={brand.name}
              className="flex items-center gap-2 text-[#475569] transition-colors hover:text-[#94a3b8]"
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d={brand.svg} />
              </svg>
              <span className="text-sm font-semibold">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

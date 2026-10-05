"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  const t = useTranslations("footer");
  const tc = useTranslations("categories");
  const locale = useLocale();

  const localizedHref = (href: string) => `/${locale}${href}`;

  return (
    <footer className="border-t border-[rgba(148,163,184,0.1)] bg-[#111827]">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href={`/${locale}`} className="inline-block">
              <span className="text-2xl font-bold tracking-tight text-white">
                MEM
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-[#64748b]">
              {t("tagline")}
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#64748b] transition-colors hover:text-white"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#64748b] transition-colors hover:text-white"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              {t("products")}
            </h3>
            <ul className="space-y-3">
              {[
                "hydraulicBreaker",
                "earthAuger",
                "grapple",
                "brushCutter",
                "quickCoupler",
              ].map((key) => (
                <li key={key}>
                  <Link
                    href={localizedHref(`/attachments/${key.replace(/([A-Z])/g, "-$1").toLowerCase().replace(/^-/, "")}`)}
                    className="text-sm text-[#64748b] transition-colors hover:text-white"
                  >
                    {tc(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              {t("company")}
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "About Us" },
                { href: "/factory", label: "Factory Tour" },
                { href: "/quality", label: "Quality Control" },
                { href: "/certificates", label: "Certificates" },
                { href: "/blog", label: "Blog" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={localizedHref(item.href)}
                    className="text-sm text-[#64748b] transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              {t("contact")}
            </h3>
            <ul className="space-y-3 text-sm text-[#64748b]">
              <li>
                No. 88 Industrial Road, Machinery District
                <br />
                Ningbo, Zhejiang, China
              </li>
              <li>
                <a
                  href="mailto:sales@microengmach.com"
                  className="transition-colors hover:text-white"
                >
                  sales@microengmach.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+8657488888888"
                  className="transition-colors hover:text-white"
                >
                  +86 574 8888 8888
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/8613800000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  WhatsApp: +86 138 0000 0000
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-[rgba(148,163,184,0.1)]" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-[#64748b]">
            &copy; {new Date().getFullYear()} {t("copyright")}
          </p>
          <div className="flex gap-6">
            <Link
              href={localizedHref("/privacy-policy")}
              className="text-xs text-[#64748b] transition-colors hover:text-white"
            >
              {t("privacy")}
            </Link>
            <Link
              href={localizedHref("/terms-of-service")}
              className="text-xs text-[#64748b] transition-colors hover:text-white"
            >
              {t("terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

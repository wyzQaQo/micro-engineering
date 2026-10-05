"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  HamburgerMenuIcon,
  Cross1Icon,
  ChevronDownIcon,
} from "@radix-ui/react-icons";

const productLinks = [
  { href: "/attachments/hydraulic-breaker", label: "hydraulicBreaker" },
  { href: "/attachments/earth-auger", label: "earthAuger" },
  { href: "/attachments/grapple", label: "grapple" },
  { href: "/attachments/brush-cutter", label: "brushCutter" },
  { href: "/attachments/trencher", label: "trencher" },
  { href: "/attachments/quick-coupler", label: "quickCoupler" },
  { href: "/attachments/ripper", label: "ripper" },
  { href: "/attachments/compactor-plate", label: "compactorPlate" },
];

const industryLinks = [
  { href: "/industries/construction", label: "construction" },
  { href: "/industries/agriculture", label: "agriculture" },
  { href: "/industries/landscaping", label: "landscaping" },
  { href: "/industries/demolition", label: "demolition" },
  { href: "/industries/forestry", label: "forestry" },
  { href: "/industries/road-maintenance", label: "roadMaintenance" },
];

export default function Navbar() {
  const t = useTranslations("nav");
  const tc = useTranslations("categories");
  const ti = useTranslations("industries");
  const locale = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  const localizedHref = (href: string) => `/${locale}${href}`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[rgba(148,163,184,0.1)] bg-[#0a0f1a]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-white">
            MEM
          </span>
          <span className="hidden text-xs font-medium uppercase tracking-wider text-[#64748b] sm:inline">
            Micro Eng. Mach.
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {/* Products Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-[#94a3b8] transition-colors hover:text-white">
              {t("products")}
              <ChevronDownIcon
                className={cn(
                  "h-3.5 w-3.5 transition-transform",
                  productsOpen && "rotate-180"
                )}
              />
            </button>
            {productsOpen && (
              <div className="absolute left-0 top-full w-56 rounded-xl border border-[rgba(148,163,184,0.1)] bg-[#111827] p-2 shadow-xl">
                {productLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={localizedHref(link.href)}
                    className="block rounded-lg px-3 py-2 text-sm text-[#94a3b8] transition-colors hover:bg-[#1a2332] hover:text-white"
                  >
                    {tc(link.label)}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Industries Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIndustriesOpen(true)}
            onMouseLeave={() => setIndustriesOpen(false)}
          >
            <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-[#94a3b8] transition-colors hover:text-white">
              {t("industries")}
              <ChevronDownIcon
                className={cn(
                  "h-3.5 w-3.5 transition-transform",
                  industriesOpen && "rotate-180"
                )}
              />
            </button>
            {industriesOpen && (
              <div className="absolute left-0 top-full w-56 rounded-xl border border-[rgba(148,163,184,0.1)] bg-[#111827] p-2 shadow-xl">
                {industryLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={localizedHref(link.href)}
                    className="block rounded-lg px-3 py-2 text-sm text-[#94a3b8] transition-colors hover:bg-[#1a2332] hover:text-white"
                  >
                    {ti(link.label)}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href={localizedHref("/solutions")}
            className="rounded-md px-3 py-2 text-sm font-medium text-[#94a3b8] transition-colors hover:text-white"
          >
            {t("solutions")}
          </Link>
          <Link
            href={localizedHref("/resources")}
            className="rounded-md px-3 py-2 text-sm font-medium text-[#94a3b8] transition-colors hover:text-white"
          >
            {t("resources")}
          </Link>
          <Link
            href={localizedHref("/about")}
            className="rounded-md px-3 py-2 text-sm font-medium text-[#94a3b8] transition-colors hover:text-white"
          >
            {t("about")}
          </Link>
          <Link
            href={localizedHref("/contact")}
            className="rounded-md px-3 py-2 text-sm font-medium text-[#94a3b8] transition-colors hover:text-white"
          >
            {t("contact")}
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <Button
            asChild
            className="bg-[#f59e0b] text-[#0a0f1a] hover:bg-[#f59e0b]/90"
          >
            <Link href={localizedHref("/rfq")}>{t("getQuote")}</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger className="lg:hidden rounded-md p-2 text-[#94a3b8] hover:text-white">
            <HamburgerMenuIcon className="h-5 w-5" />
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px] border-[rgba(148,163,184,0.1)] bg-[#111827] p-0"
          >
            <div className="flex h-full flex-col p-6">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-lg font-bold text-white">MEM</span>
              </div>
              <nav className="flex flex-col gap-1">
                <p className="px-3 py-2 text-xs font-medium uppercase tracking-wider text-[#64748b]">
                  {t("products")}
                </p>
                {productLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={localizedHref(link.href)}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg px-3 py-2 text-sm text-[#94a3b8] hover:bg-[#1a2332] hover:text-white"
                  >
                    {tc(link.label)}
                  </Link>
                ))}
                <div className="my-2 h-px bg-[rgba(148,163,184,0.1)]" />
                <p className="px-3 py-2 text-xs font-medium uppercase tracking-wider text-[#64748b]">
                  {t("industries")}
                </p>
                {industryLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={localizedHref(link.href)}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg px-3 py-2 text-sm text-[#94a3b8] hover:bg-[#1a2332] hover:text-white"
                  >
                    {ti(link.label)}
                  </Link>
                ))}
                <div className="my-2 h-px bg-[rgba(148,163,184,0.1)]" />
                <Link
                  href={localizedHref("/solutions")}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm text-[#94a3b8] hover:bg-[#1a2332] hover:text-white"
                >
                  {t("solutions")}
                </Link>
                <Link
                  href={localizedHref("/about")}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm text-[#94a3b8] hover:bg-[#1a2332] hover:text-white"
                >
                  {t("about")}
                </Link>
                <Link
                  href={localizedHref("/contact")}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm text-[#94a3b8] hover:bg-[#1a2332] hover:text-white"
                >
                  {t("contact")}
                </Link>
              </nav>
              <div className="mt-auto pt-6">
                <Button
                  asChild
                  className="w-full bg-[#f59e0b] text-[#0a0f1a] hover:bg-[#f59e0b]/90"
                >
                  <Link
                    href={localizedHref("/rfq")}
                    onClick={() => setMobileOpen(false)}
                  >
                    {t("getQuote")}
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

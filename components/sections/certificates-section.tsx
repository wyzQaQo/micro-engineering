"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { CheckCircledIcon } from "@radix-ui/react-icons";

const certs = ["iso9001", "ce", "rohs", "sgs"];

export default function CertificatesSection() {
  const t = useTranslations("certificates");

  return (
    <section className="border-y border-[rgba(148,163,184,0.1)] bg-[#111827] py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center text-2xl font-semibold tracking-tight text-white md:text-3xl"
        >
          {t("title")}
        </motion.h2>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {certs.map((cert, index) => (
            <motion.div
              key={cert}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center gap-3 rounded-xl border border-[rgba(148,163,184,0.1)] bg-[#1a2332] p-6"
            >
              <CheckCircledIcon className="h-8 w-8 text-[#f59e0b]" />
              <span className="text-sm font-medium text-white">
                {t(cert)}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function ScrollBookNow() {
  const t = useTranslations("Navigation");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={
        "fixed z-50 bottom-6 left-1/2 -translate-x-1/2 transition-all duration-300 pointer-events-none " +
        (visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2")
      }
    >
      <Link
        href="/contact"
        aria-label={t("BookNow")}
        role="button"
        className="
          pointer-events-auto relative inline-flex items-center justify-center select-none
          overflow-hidden bg-clip-padding
          rounded-full px-6 py-3 sm:px-8 sm:py-3 min-h-12 min-w-[9rem]
          text-white text-base font-semibold tracking-wide drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]
          border border-white/30
          bg-white/10 backdrop-blur-xl backdrop-saturate-150
          shadow-lg shadow-black/30
          transition-all duration-200
          hover:bg-white/16 hover:border-white/40 hover:shadow-xl
          active:translate-y-px active:scale-[0.98] active:shadow-md
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
          before:pointer-events-none before:absolute before:inset-px before:rounded-[inherit]
          before:bg-gradient-to-b before:from-white/30 before:to-white/5 before:opacity-30
          hover:before:opacity-45
        "
      >
        {t("BookNow")}
      </Link>
    </div>
  );
}

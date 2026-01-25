import React, { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

const CONSENT_KEY = "userConsent";

const CookieBanner = () => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const lng = useMemo(() => i18n.language || "ro", [i18n.language]);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (consent === null) setOpen(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  const acceptCookies = () => {
    localStorage.setItem(CONSENT_KEY, "true");
    setOpen(false);
  };

  const declineCookies = () => {
    localStorage.setItem(CONSENT_KEY, "false");
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[9999] p-3 sm:p-4"
      role="dialog"
      aria-live="polite"
    >
      {/* overlay soft */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

      {/* card */}
      <div className="pointer-events-auto mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/80 text-white shadow-2xl backdrop-blur-xl ring-1 ring-white/10 transition-all duration-300 ease-out">
          {/* glow subtil */}
          <div className="absolute -top-24 left-1/2 h-40 w-[520px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

          <div className="relative flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-5">
            {/* text */}
            <div className="text-left">
              <p className="text-sm sm:text-[15px] leading-relaxed text-white/90">
                {t("cookieBanner.message")}
                <a
                  href={`/${lng}/privacy-policy`}
                  className="ml-2 inline-flex items-center gap-1 font-medium underline decoration-white/30 underline-offset-4 hover:decoration-white/70"
                >
                  {t("cookieBanner.learnMore")}
                  <span aria-hidden="true">↗</span>
                </a>
              </p>

              <p className="mt-1 text-xs text-white/55">
                {t("cookieBanner.hint")}
              </p>
            </div>

            {/* actions */}
            <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:items-center sm:gap-3">
              <button
                onClick={declineCookies}
                className="w-full sm:w-auto rounded-xl px-4 py-2 text-sm font-semibold border border-white/10 bg-white/5 hover:bg-white/10 transition active:scale-[0.98]"
              >
                {t("cookieBanner.decline")}
              </button>

              <button
                onClick={acceptCookies}
                className="w-full sm:w-auto rounded-xl px-4 py-2 text-sm font-semibold bg-white text-zinc-950 hover:bg-white/90 transition active:scale-[0.98]"
              >
                {t("cookieBanner.accept")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;

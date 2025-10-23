"use client";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { pageview } from "@/lib/gtag";

export default function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + (searchParams ? `?${searchParams.toString()}` : "");

    // If gtag is available, send pageview immediately. If not, retry a
    // short time later in case the script is still loading (common with
    // afterInteractive strategy). Give up after two attempts.
    let attempts = 0;
    const trySend = () => {
      attempts += 1;
      if (typeof window !== "undefined") {
        const w = window as Window & { gtag?: (...args: unknown[]) => void };
        if (w.gtag) {
          pageview(url);
          return;
        }
      }
      if (attempts < 3) {
        setTimeout(trySend, 250 * attempts);
      }
    };

    trySend();
    // no cleanup needed for timeouts here — small, bounded retries
  }, [pathname, searchParams]);

  return null;
}

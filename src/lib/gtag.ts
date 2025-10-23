/* eslint-disable @typescript-eslint/no-explicit-any */
// Lightweight wrapper for gtag interactions. Safe no-op when GA ID not set.
// NOTE: avoid capturing NEXT_PUBLIC_GA_MEASUREMENT_ID at module-eval time so
// server-built bundles that didn't have the env var at build will still
// behave reasonably on the client when the script is present.

type GtagEventParams = {
    action: string;
    category?: string;
    label?: string;
    value?: number;
    [key: string]: unknown;
};

declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void;
    }
}

const getMeasurementId = () => {
    // Prefer the client-side global if present (helps runtime checks).
    if (typeof window !== "undefined") {
        // Some setups attach the measurement id to window (not standard) but
        // keeping this flexible in case a future change wires it there.
        // Fallback to the env var available during build/runtime.
        const w: any = window as any;
        if (w?.GA_MEASUREMENT_ID) return String(w.GA_MEASUREMENT_ID);
    }
    return process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";
};

export const pageview = (url: string) => {
    const id = getMeasurementId();
    if (!id) return;
    if (typeof window === "undefined") return;
    if (!window.gtag) return;
    try {
        window.gtag("config", id, {
            page_path: url,
        });
    } catch (e) {
        // swallow errors to avoid crashing the app if gtag is unexpectedly shaped
        // and allow graceful degradation in browsers with adblockers.
        console.debug("gtag pageview failed", e);
    }
};

export const event = ({ action, category, label, value, ...rest }: GtagEventParams) => {
    const id = getMeasurementId();
    if (!id) return;
    if (typeof window === "undefined") return;
    if (!window.gtag) return;
    try {
        window.gtag("event", action, {
            event_category: category,
            event_label: label,
            value: value,
            ...rest,
        });
    } catch (e) {
        console.debug("gtag event failed", e);
    }
};

const gtagApi = { pageview, event };
export default gtagApi;

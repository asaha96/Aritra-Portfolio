import { useEffect, useCallback } from "react";

const SCRIPT_URL = "https://www.google.com/recaptcha/api.js";
const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY ?? "";

let scriptLoaded = false;
let loadPromise: Promise<void> | null = null;

function loadScript(): Promise<void> {
  if (typeof window === "undefined" || !RECAPTCHA_SITE_KEY) return Promise.resolve();
  if (scriptLoaded && window.grecaptcha) return Promise.resolve();
  if (loadPromise) return loadPromise;

  loadPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src^="${SCRIPT_URL}"]`);
    if (existing) {
      scriptLoaded = true;
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = `${SCRIPT_URL}?render=${RECAPTCHA_SITE_KEY}`;
    script.async = true;
    script.onload = () => {
      scriptLoaded = true;
      resolve();
    };
    script.onerror = () => reject(new Error("reCAPTCHA script failed to load"));
    document.head.appendChild(script);
  });

  return loadPromise;
}

export function useRecaptchaV3() {
  useEffect(() => {
    if (RECAPTCHA_SITE_KEY) loadScript();
  }, []);

  const execute = useCallback(async (action: string): Promise<string | null> => {
    if (!RECAPTCHA_SITE_KEY) return null;
    await loadScript();
    const grecaptcha = window.grecaptcha;
    if (!grecaptcha) return null;
    return new Promise((resolve) => {
      grecaptcha.ready(() => {
        grecaptcha.execute(RECAPTCHA_SITE_KEY, { action }).then(resolve).catch(() => resolve(null));
      });
    });
  }, []);

  return { execute, isEnabled: !!RECAPTCHA_SITE_KEY };
}

"use client";

import { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Custom hook to ensure GSAP animations only run on client-side
 * Prevents hydration mismatches and improves performance
 */
export const useClientGSAP = (callback: () => void, dependencies: any[] = []) => {
  const isClient = useRef(false);

  useEffect(() => {
    isClient.current = true;
  }, []);

  useGSAP(() => {
    if (!isClient.current) return;
    callback();
  }, { dependencies });
};

/**
 * Safe GSAP context that handles cleanup and prevents memory leaks
 */
export const useSafeGSAP = (callback: (context: gsap.Context) => void, dependencies: any[] = []) => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;
    
    const context = gsap.context(callback, containerRef);
    
    return () => context.revert();
  }, { scope: containerRef, dependencies });

  return containerRef;
};

/**
 * Optimized scroll trigger that only activates when element is in viewport
 */
export const useScrollTrigger = (
  trigger: string | HTMLElement,
  animation: gsap.TweenVars,
  options: Partial<ScrollTrigger.StaticVars> = {}
) => {
  useClientGSAP(() => {
    if (typeof window === 'undefined') return;

    const scrollTrigger = ScrollTrigger.create({
      trigger,
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse',
      ...options,
      animation: gsap.to(trigger, animation),
    });

    return () => scrollTrigger.kill();
  });
};

/**
 * Performance-optimized timeline for complex animations
 */
export const useOptimizedTimeline = (callback: (tl: gsap.core.Timeline) => void) => {
  useClientGSAP(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: 'power2.out',
        duration: 0.6,
      },
    });

    callback(tl);

    return () => tl.kill();
  });
};

/**
 * Lazy load GSAP animations to improve initial page load
 */
export const useLazyGSAP = (callback: () => void, delay: number = 100) => {
  useClientGSAP(() => {
    const timeoutId = setTimeout(callback, delay);
    return () => clearTimeout(timeoutId);
  });
};

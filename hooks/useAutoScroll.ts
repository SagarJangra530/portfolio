"use client";

import { useEffect, useRef, useState } from "react";

interface UseAutoScrollOptions {
  interval?: number;
  pauseOnHover?: boolean;
  enabled?: boolean;
}

export function useAutoScroll<T extends HTMLElement>({
  interval = 4000,
  pauseOnHover = true,
  enabled = true,
}: UseAutoScrollOptions = {}) {
  const containerRef = useRef<T>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!enabled || !containerRef.current || isPaused) return;

    const container = containerRef.current;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;
    
    // Only auto-scroll if content overflows
    if (scrollWidth <= clientWidth) return;

    let scrollInterval: NodeJS.Timeout;
    let currentScroll = 0;
    const itemWidth = container.querySelector('[class*="flex-shrink-0"]')?.clientWidth || clientWidth;

    const scroll = () => {
      currentScroll += itemWidth;
      
      // Reset to start if reached end
      if (currentScroll >= scrollWidth - clientWidth) {
        currentScroll = 0;
      }

      container.scrollTo({
        left: currentScroll,
        behavior: "smooth",
      });
    };

    scrollInterval = setInterval(scroll, interval);

    const handleMouseEnter = () => {
      if (pauseOnHover) {
        setIsPaused(true);
        clearInterval(scrollInterval);
      }
    };

    const handleMouseLeave = () => {
      if (pauseOnHover) {
        setIsPaused(false);
      }
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearInterval(scrollInterval);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [interval, pauseOnHover, enabled, isPaused]);

  return containerRef;
}


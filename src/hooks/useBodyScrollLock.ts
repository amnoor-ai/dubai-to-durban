import { useEffect } from "react";

export function useBodyScrollLock(locked: boolean, enabled = true) {
  useEffect(() => {
    if (!enabled) return;

    // Used by overlays/drawers to prevent background page scroll.
    document.body.style.overflow = locked ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [locked, enabled]);
}


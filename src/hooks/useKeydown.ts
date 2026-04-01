import { useEffect } from "react";

export function useKeydown(
  key: string,
  onKeydown: () => void,
  enabled = true
) {
  useEffect(() => {
    if (!enabled) return;

    // Generic key listener hook so key behavior stays out of page components.
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === key) {
        onKeydown();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [key, onKeydown, enabled]);
}


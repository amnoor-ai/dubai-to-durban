import { useEffect } from "react";

type Props = {
  message: string;
  darkMode: boolean;
  trigger: number;
  onDone: () => void;
};

export function Toast({ message, darkMode, trigger, onDone }: Props) {
  useEffect(() => {
    if (!message) return;

    // Re-run on `trigger` so repeated identical messages still auto-hide.
    const timeout = window.setTimeout(() => {
      onDone();
    }, 2000);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [message, trigger, onDone]);

  if (!message) {
    return null;
  }

  return (
    <div
      className={`fixed left-1/2 top-24 z-[60] -translate-x-1/2 rounded-full px-5 py-3 text-sm font-semibold shadow-2xl transition-all ${
        darkMode ? "bg-yellow-500 text-black" : "bg-black text-white"
      }`}
    >
      {message}
    </div>
  );
}


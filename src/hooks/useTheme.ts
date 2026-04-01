import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "darkMode";

export function useTheme() {
  const [isClient, setIsClient] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const savedTheme = localStorage.getItem(STORAGE_KEY);
    if (savedTheme !== null) {
      setDarkMode(JSON.parse(savedTheme));
    }
  }, [isClient]);

  useEffect(() => {
    if (!isClient) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(darkMode));
  }, [darkMode, isClient]);

  const toggleTheme = useCallback(() => {
    setDarkMode((prev) => !prev);
  }, []);

  return { darkMode, toggleTheme, isClient };
}


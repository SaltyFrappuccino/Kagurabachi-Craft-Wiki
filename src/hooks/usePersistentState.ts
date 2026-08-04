import { useEffect, useState } from "react";

export function usePersistentState<T extends string>(key: string, initialValue: T | (() => T)) {
  const [value, setValue] = useState<T>(() => {
    const saved = window.localStorage.getItem(key);
    if (saved) return saved as T;
    return typeof initialValue === "function" ? initialValue() : initialValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue] as const;
}

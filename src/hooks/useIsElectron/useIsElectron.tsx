import { useMemo } from "react";

export function useIsElectron() {
  return useMemo(() => {
    return typeof window !== "undefined" && !!window.electron;
  }, []);
}

import { useEffect, useMemo } from "react";
import { applySEO, buildSEO } from "../services/seoEngine.service";

export function useSEO(config = {}) {
  const memoConfig = useMemo(() => config, [JSON.stringify(config)]);

  useEffect(() => {
    applySEO(memoConfig);
  }, [memoConfig]);

  return buildSEO(memoConfig);
}

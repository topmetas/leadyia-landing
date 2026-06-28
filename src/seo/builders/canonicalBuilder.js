import { absoluteUrl, currentOrigin, currentPath } from "../utils/urlBuilder";

export function buildCanonical(path, baseUrl) {
  const finalPath = path || currentPath();
  const origin = baseUrl || currentOrigin();
  return absoluteUrl(finalPath, origin);
}

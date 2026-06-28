import { getRelatedLinks } from "../services/linking.service";
import { currentPath } from "../utils/urlBuilder";

export default function InternalLinks({ title = "Veja também", path }) {
  const links = getRelatedLinks(path || currentPath());
  if (!links.length) return null;

  return (
    <nav className="seo-internal-links" aria-label="Links relacionados">
      <strong>{title}</strong>
      <div>
        {links.map((link) => (
          <a key={link.href} href={link.href}>{link.label}</a>
        ))}
      </div>
    </nav>
  );
}

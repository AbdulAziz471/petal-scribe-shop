import { useEffect } from "react";

type SEOProps = {
  title: string;
  description?: string;
  canonicalPath?: string;
};

export default function SEO({ title, description, canonicalPath }: SEOProps) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    const descTag = ensureMeta("description");
    if (description) descTag.setAttribute("content", description);

    const canonical = ensureLink("canonical");
    if (canonicalPath) {
      const origin = window.location.origin;
      canonical.setAttribute("href", `${origin}${canonicalPath}`);
    }

    return () => {
      document.title = prevTitle;
    };
  }, [title, description, canonicalPath]);

  return null;
}

function ensureMeta(name: string) {
  let tag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  return tag;
}

function ensureLink(rel: string) {
  let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", rel);
    document.head.appendChild(link);
  }
  return link;
}

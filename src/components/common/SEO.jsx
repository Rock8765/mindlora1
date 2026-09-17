import { useEffect } from "react";

const setMeta = (name, content, attr = "name") => {
  if (!content) return;
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

export const SEO = ({ title, description }) => {
  useEffect(() => {
    const full = title ? `${title} — Mindlora` : "Mindlora — Master Every Interview with AI";
    document.title = full;
    setMeta("description", description);
    setMeta("og:title", full, "property");
    setMeta("og:description", description, "property");
    setMeta("twitter:title", full);
    setMeta("twitter:description", description);
  }, [title, description]);
  return null;
};

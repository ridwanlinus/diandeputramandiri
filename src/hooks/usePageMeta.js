import { useEffect } from "react";

export default function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title;

    const setContent = (selector, value) => {
      const element = document.querySelector(selector);
      if (element) element.setAttribute("content", value);
    };

    setContent('meta[name="description"]', description);
    setContent('meta[property="og:title"]', title);
    setContent('meta[property="og:description"]', description);
  }, [title, description]);
}

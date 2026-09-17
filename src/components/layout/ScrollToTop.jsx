import { useEffect } from "react";
import { useLocation } from "@tanstack/react-router";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [pathname]);
  return null;
};

export default ScrollToTop;

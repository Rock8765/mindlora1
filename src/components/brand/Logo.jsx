import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

// Official Mindlora wordmark logo (navy head + blue wordmark), transparent PNG.
export const Logo = ({ className = "", to = "/", height = 42 }) => (
  <Link to={to} className={cn("inline-flex items-center", className)} aria-label="Mindlora home">
    <img
      src="/mindlora-logo.png"
      alt="Mindlora"
      style={{ height }}
      width={height * 3}
      className="w-auto select-none transition-transform duration-300 will-change-transform hover:scale-[1.03]"
      draggable={false}
    />
  </Link>
);

export const LogoMark = ({ size = 34, className = "" }) => (
  <img
    src="/mindlora-logo.png"
    alt="Mindlora"
    style={{ height: size }}
    className={cn("w-auto", className)}
  />
);

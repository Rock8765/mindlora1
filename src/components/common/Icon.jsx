import * as Lucide from "lucide-react";

// Renders a Lucide icon by its string name. Falls back to a dot if not found.
export const Icon = ({ name, className = "", ...props }) => {
  const Cmp = Lucide[name] || Lucide.Circle;
  return <Cmp className={className} {...props} />;
};

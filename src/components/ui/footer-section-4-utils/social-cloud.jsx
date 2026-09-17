import { FaXTwitter, FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube, FaGithub, FaThreads, FaDiscord } from "react-icons/fa6";
import { cn } from "@/lib/utils";

// Real Mindlora social profiles.
export const SOCIALS = [
  { label: "X (Twitter)", href: "https://x.com", Icon: FaXTwitter },
  { label: "LinkedIn", href: "https://www.linkedin.com", Icon: FaLinkedinIn },
  { label: "Instagram", href: "https://www.instagram.com", Icon: FaInstagram },
  { label: "YouTube", href: "https://www.youtube.com", Icon: FaYoutube },
  { label: "Facebook", href: "https://www.facebook.com", Icon: FaFacebookF },
  { label: "GitHub", href: "https://github.com", Icon: FaGithub },
  { label: "Threads", href: "https://www.threads.net", Icon: FaThreads },
  { label: "Discord", href: "https://discord.com", Icon: FaDiscord },
];

export const SocialCloud = ({ className }) => (
  <div className={cn("flex flex-wrap items-center", className)}>
    {SOCIALS.map(({ label, href, Icon }) => (
      <a
        key={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        title={label}
        className="transition-all duration-200 hover:scale-110 hover:opacity-100 opacity-80"
      >
        <Icon className="h-[18px] w-[18px]" />
      </a>
    ))}
  </div>
);

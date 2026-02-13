import type { LucideIcon } from "lucide-react";

interface MenuItemProps {
  icon: LucideIcon;
  text: string;
  url: string;
  color: string;
  delay: string;
}

export function MenuItem({ icon: Icon, text, url, color, delay }: MenuItemProps) {
  return (
    <span
      className="m-2.5 inline-block scale-100 transition-transform duration-300 hover:scale-130 animate-[slidein_0.6s_ease-out_1_backwards]"
      style={{ animationDelay: delay }}
    >
      <a href={url} target="_blank" rel="noopener noreferrer" aria-label={text}>
        <Icon size={48} style={{ color }} />
      </a>
    </span>
  );
}

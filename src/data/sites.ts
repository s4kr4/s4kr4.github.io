import type { LucideIcon } from "lucide-react";
import { Github, BookOpen, PenSquare, Twitter } from "lucide-react";

export interface Site {
  icon: LucideIcon;
  text: string;
  url: string;
  color: string;
}

export const sites: Site[] = [
  {
    icon: Github,
    text: "GitHub",
    url: "https://github.com/s4kr4",
    color: "#24292e",
  },
  {
    icon: BookOpen,
    text: "Qiita",
    url: "https://qiita.com/s4kr4",
    color: "#79b74a",
  },
  {
    icon: PenSquare,
    text: "Blog",
    url: "http://s4kr4.hatenablog.com/",
    color: "#000",
  },
  {
    icon: Twitter,
    text: "Twitter",
    url: "https://twitter.com/s4kr4_",
    color: "#1da1f2",
  },
];

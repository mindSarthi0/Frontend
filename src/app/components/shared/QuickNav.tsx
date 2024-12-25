import React from "react";
import { ChevronRight } from "lucide-react";
import { NavItem } from "@/app/modal";

interface QuickNavProps {
  items: NavItem[];
  isMobile?: boolean;
}

export const QuickNav: React.FC<QuickNavProps> = ({ items, isMobile }) => {
  const scrollToSection = (target: string) => {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (isMobile) {
    return (
      <nav className="flex flex-col space-y-2">
        {items.map((item) => (
          <button
            key={item.target}
            onClick={() => scrollToSection(item.target)}
            className="flex items-center justify-between w-full px-2 py-2 text-left text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <span>{item.label}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        ))}
      </nav>
    );
  }

  return (
    <nav className="flex items-center gap-6">
      {items.map((item) => (
        <button
          key={item.target}
          onClick={() => scrollToSection(item.target)}
          className="text-sm text-gray-600 hover:text-blue-600 transition-colors whitespace-nowrap"
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
};

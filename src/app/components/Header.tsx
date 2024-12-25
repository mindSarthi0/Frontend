"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { QuickNav } from "./shared/QuickNav";
import { NavConfig, NavItem } from "@/app/modal";
import { BackButton } from "./shared/BackButton";
import { usePathname } from "next/navigation";
interface HeaderProps {
  title?: string;
}

interface PageNavigationConfig {
  hasQuickNav: boolean;
  navItems: NavItem[];
  isInternalPage: boolean;
}

export const usePageNavigation = (): PageNavigationConfig => {
  const pathname = usePathname();
  if (typeof window !== "undefined") {
    const path = pathname?.split("/")[1] || "home"; // Default to results page
    return (
      navigationConfig[path] || {
        hasQuickNav: false,
        navItems: [],
        isInternalPage: false,
      }
    );
  }
  return { hasQuickNav: false, navItems: [], isInternalPage: false };
};

export const navigationConfig: NavConfig = {
  // Pages with quick navigation
  report: {
    hasQuickNav: true,
    isInternalPage: false,
    navItems: [
      { label: "Personality Domains", target: "domains" },
      { label: "Career Implications", target: "career" },
      { label: "Academic Potential", target: "academic" },
      { label: "Relationship Dynamics", target: "relationship" },
      { label: "Path to Fulfillment", target: "fulfillment" },
    ],
  },
  // Pages without quick navigation
  legal: {
    hasQuickNav: false,
    isInternalPage: true,
    navItems: [],
  },
  home: {
    hasQuickNav: false,
    isInternalPage: false,
    navItems: [],
  },
};

export const Header: React.FC<HeaderProps> = ({}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { hasQuickNav, navItems, isInternalPage } = usePageNavigation();

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {isInternalPage && <BackButton />}
            <img src={"/logo.png"} alt="logo_1.png" className="h-8 w-8" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">Mind Sarthi</h1>
              <p className="text-sm text-gray-600 hidden sm:block"></p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            {hasQuickNav && (
              <>
                <button
                  className="lg:hidden"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? (
                    <X className="h-6 w-6 text-gray-600" />
                  ) : (
                    <Menu className="h-6 w-6 text-gray-600" />
                  )}
                </button>

                <div className="hidden lg:block">
                  <QuickNav items={navItems} isMobile={false} />
                </div>
              </>
            )}
          </div>
        </div>

        {hasQuickNav && isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <QuickNav items={navItems} isMobile />
          </div>
        )}
      </div>
    </nav>
  );
};

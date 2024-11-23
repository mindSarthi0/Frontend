"use client"; // This allows client-side code such as useState

// import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  showDropShadow?: boolean;
  onBackClick?: () => void;
  title?: string;
  onTitleClick?: () => void;
  rightMenu?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({
  showDropShadow = true,
  title,
  onTitleClick,
}) => {
  return (
    <header
      className={`fixed bg-primary  w-full z-50 flex ${
        showDropShadow ? "shadow-md" : ""
      } transition-shadow duration-300`}
    >
      <div className="flex items-center">
        <div className="flex justify-between items-center h-[60px] px-4 sm:px-8">
          {/* Logo Section */}
          <Link href="/">
            <Image
              src="/logo_1.png"
              width={40}
              height={42}
              alt="mind sarthi logo"
              priority
            />
          </Link>
        </div>

        {title && (
          <h1
            onClick={onTitleClick}
            className={`ml-4 text-lg font-semibold text-white ${
              onTitleClick ? "cursor-pointer" : ""
            }`}
          >
            {title}
          </h1>
        )}
      </div>
    </header>
  );
};

export default Header;

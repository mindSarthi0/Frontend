"use client"; // This allows client-side code such as useState

// import { useState } from "react";
// import Image from "next/image";
import Link from "next/link";

// props: { activeNav?: string }
export default function Header() {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <header className="relative">
      <div className="flex justify-between items-center h-[60px] px-4 sm:px-8">
        {/* Logo Section */}
        <Link href="/">
          {/* <Image
            src="/global_gcs_logo.png"
            width={123}
            height={42}
            alt="gcs_logo"
            priority
          /> */}
        </Link>

        {/* Desktop Menu */}
        {/* <div className="hidden sm:flex max-w-[800px] w-[600px] justify-evenly">
          {[
            { text: "About Us", href: "/aboutUs" },
            { text: "Services", href: "/services" },
            { text: "Portfolio", href: "/portfolio" },
            { text: "Blog", href: "/blog" },
            { text: "Contact", href: "/contact" },
          ].map((nav: { text: string; href: string }) => {
            const isActive = props.activeNav === nav.text;
            return (
              <Link
                key={nav.href}
                href={nav.href}
                className={`header-nav-text ${
                  isActive ? "header-nav-active-text" : ""
                }`}
              >
                {nav.text}
              </Link>
            );
          })}
        </div> */}

        {/* Mobile Menu Toggle and Register Button */}
        {/* <div className="flex items-center space-x-4">
          <Link
            href="/contact"
            className="bg-[#54A4DF] rounded-[6px] px-4 py-2 text-white hidden sm:block"
          >
            Register
          </Link>
          <button
            className="sm:hidden flex items-center text-gray-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div> */}
      </div>

      {/* Mobile Dropdown Menu */}
      {/* {false && (
        <div className="absolute top-[60px] right-0 w-full bg-white shadow-lg sm:hidden">
          <div className="flex flex-col items-center py-4 space-y-4">
            <Link
              href="/aboutUs"
              className="header-nav-text"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="header-nav-text"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className="header-nav-text"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="/blog"
              className="header-nav-text"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="header-nav-text"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="bg-[#54A4DF] rounded-[6px] px-4 py-2 text-white"
            >
              Register
            </Link>
          </div>
        </div>
      )} */}
    </header>
  );
}

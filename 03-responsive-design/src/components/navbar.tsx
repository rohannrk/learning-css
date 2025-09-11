"use client";
import { IconMenu2 } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
    // Navigation links array
    const links = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Projects", href: "/projects" },
        { name: "Contact", href: "/contact" },
    ];

    // State for mobile menu toggle
    const [isOpen, setIsOpen] = useState(false);

    return (
        // Container with relative positioning for dropdown context
        <div className="relative">
        {/* Main navbar container */}
        <div className="flex relative md:rounded-full bg-white justify-between items-center md:mt-4 max-w-4xl mx-auto  px-2 py-2 md:shadow-aceternity">
            {/* Logo section */}
          <Image
            src="https://ui.aceternity.com/logo.png"
            alt="logo"
            width={30}
            height={30}
            className="rounded-full"
          />
          {/* Desktop navigation links - hidden on mobile */}
          <div className="hidden md:flex items-center gap-4 text-sm text-neutral-500 mr-10 ">
            {links.map((link, index) => (
              <Link
                className="hover:text-neutral-900"
                href={link.href}
                key={index}
              >
                {link.name}
              </Link>
            ))}
          </div>
          {/* Mobile menu toggle button - hidden on desktop */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            <IconMenu2 />
          </button>
          {/* Mobile dropdown menu */}
          {isOpen && (
            <div className="absolute md:hidden inset-x-0  bg-white rounded-md shadow-aceternity top-15 max-w-[95%]  mx-auto">
              <div className="flex  flex-col  items-start gap-4 text-sm text-neutral-500  p-4">
                {links.map((link, index) => (
                  <Link
                    className="hover:text-neutral-900"
                    href={link.href}
                    key={index}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    )
}

export default Navbar
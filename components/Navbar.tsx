"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed w-full z-50 top-0 left-0 bg-black/60 backdrop-blur-xl"
    >
      {/* Aesthetic Bottom Border Gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-linear-to-rrom-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative z-10">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tighter group flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
            <span className="w-2 h-2 bg-black rounded-full" />
          </span>
          <span className="bg-clip-text text-transparent bg-linear-to-r from-white to-gray-400 group-hover:to-white transition-colors duration-500">
            HypenBloom.
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-2 p-1 rounded-full bg-white/3er border-white/5">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-5 py-2 text-sm font-medium transition-colors"
              >
                {/* Active Link Sliding Pill Background */}
                {isActive && (
                  <motion.span
                    layoutId="active-nav-pill"
                    className="absolute inset-0 bg-white/10 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                
                {/* Link Text */}
                <span
                  className={`relative z-10 transition-colors duration-300 ${
                    isActive ? "text-white" : "text-gray-400 hover:text-gray-200"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="flex items-center">
          <Link 
            href="/contact" 
            className="group relative px-6 py-2.5 bg-white text-black rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            <span className="relative z-10">Start Project</span>
            {/* Subtle inner shadow/gradient for depth */}
            <div className="absolute inset-0 rounded-full bg-linear-to-b from-white/0 to-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
        </div>

      </div>
    </motion.header>
  );
}
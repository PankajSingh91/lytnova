"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Clientele", href: "/clientele" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container flex justify-between items-center py-4">

        {/* Logo */}
        <Link href="/">
          <span className="text-2xl font-semibold text-primary">
            Lytnova
          </span>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition ${
                pathname === link.href
                  ? "text-primary"
                  : "text-gray-700 hover:text-primary"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          className="btn-primary hidden md:inline-block"
        >
          Request Meeting
        </Link>

      </div>
    </header>
  );
}

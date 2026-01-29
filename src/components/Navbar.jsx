import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "../lib/utils";
import { Button } from "./ui/Button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
  ];

  return (
    <>
      {/* Desktop Floating Navbar */}
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          className={cn(
            "pointer-events-auto hidden md:flex items-center gap-2 p-2 rounded-full border border-white/20 shadow-lg shadow-neutral-200/50 backdrop-blur-md transition-all duration-300",
            isScrolled ? "bg-white/90 scale-100" : "bg-white/50 scale-[1.02]",
          )}
        >
          {/* Logo/Home Icon */}
          <a
            href="#"
            className="px-4 py-2 font-heading font-bold text-navy-900 hover:text-primary transition-colors"
          >
            UA.
          </a>

          {/* Divider */}
          <div className="w-px h-4 bg-neutral-200 mx-2"></div>

          {/* Links */}
          <div className="flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-neutral-600 hover:text-navy-900 hover:bg-white rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="pl-2">
            <Button
              size="sm"
              className="rounded-full px-5 bg-navy-900 hover:bg-primary text-white border-none shadow-none"
              asChild
            >
              <a href="#contact">Let's Talk</a>
            </Button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Header (Standard Fixed) */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 p-4 flex justify-between items-center bg-background/80 backdrop-blur-md border-b border-neutral-100">
        <span className="font-heading font-bold text-lg text-navy-900">
          UA.
        </span>
        <button onClick={() => setMobileMenuOpen(true)}>
          <Menu className="text-navy-900" />
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-white flex flex-col items-center justify-center gap-8 md:hidden"
          >
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 p-2 bg-neutral-100 rounded-full"
            >
              <X className="text-navy-900" />
            </button>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-heading font-semibold text-navy-900"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-heading font-semibold text-primary"
            >
              Let's Talk
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { cn } from "../lib/utils";
import { Button } from "./ui/Button";

const Navbar = () => {
  const [theme, setTheme] = useState(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      document.documentElement.classList.add("dark");
      return "dark";
    }
    return "light";
  });

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Theme effect handled in initialization now

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
  ];

  return (
    <>
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          className={cn(
            "pointer-events-auto hidden md:flex items-center gap-2 p-2 rounded-full border border-border shadow-lg backdrop-blur-md transition-all duration-300",
            isScrolled ? "bg-background/90" : "bg-background/50",
          )}
        >
          {/* Logo */}
          <a
            href="#"
            className="px-4 py-2 font-heading font-bold text-foreground hover:text-primary transition-colors"
          >
            UA.
          </a>

          <div className="w-px h-4 bg-border mx-2"></div>

          {/* Links */}
          <div className="flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="w-px h-4 bg-border mx-2"></div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          {/* CTA */}
          <div className="pl-2">
            <Button
              size="sm"
              className="rounded-full px-5 bg-foreground text-background hover:bg-primary hover:text-white border-none shadow-none"
              asChild
            >
              <a href="#contact">Let's Talk</a>
            </Button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 p-4 flex justify-between items-center bg-background/80 backdrop-blur-md border-b border-border">
        <span className="font-heading font-bold text-lg text-foreground">
          UA.
        </span>
        <div className="flex items-center gap-4">
          <button onClick={toggleTheme} className="text-foreground">
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button onClick={() => setMobileMenuOpen(true)}>
            <Menu className="text-foreground" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background flex flex-col items-center justify-center gap-8 md:hidden"
          >
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 p-2 bg-muted rounded-full"
            >
              <X className="text-foreground" />
            </button>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-heading font-semibold text-foreground"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-neutral-400 py-12 border-t border-neutral-900">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">
          UMAR MUHAMMAD ABUBAKAR
        </h2>
        <p className="mb-8 text-sm">Data Analyst | Lagos, Nigeria</p>

        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://linkedin.com/in/umar-muhammad-abubakar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/mohimpact"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
          >
            <Github size={20} />
          </a>
          <a
            href="mailto:muhammadumarabubakar363@gmail.com"
            className="hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
          >
            <Mail size={20} />
          </a>
        </div>

        <p className="text-xs text-neutral-600">
          © {new Date().getFullYear()} Umar Muhammad Abubakar. Built with React
          & Tailwind.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Linkedin, Github } from "lucide-react";
import { Button } from "./ui/Button";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-32 bg-navy-900 text-white relative isolate overflow-hidden"
    >
      {/* Subtle Background pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage: "radial-gradient(#1E293B 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      ></div>

      <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-heading font-bold tracking-tight mb-8">
            Ready to scale?
          </h2>
          <p className="text-xl md:text-2xl text-neutral-400 font-light mb-12 max-w-2xl mx-auto">
            I'm currently opening my schedule for new data analysis and
            engineering projects. Let's build something efficient.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button
              size="lg"
              className="h-16 px-10 rounded-full text-xl bg-white text-navy-900 hover:bg-neutral-200 border-none"
              onClick={() =>
                (window.location = "mailto:muhammadumarabubakar363@gmail.com")
              }
            >
              Start a Conversation
            </Button>
            <div className="flex items-center gap-6 text-neutral-400">
              <span className="hidden sm:block text-neutral-600">or</span>
              <a
                href="https://linkedin.com/in/umar-muhammad-abubakar"
                className="hover:text-white transition-colors"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="https://github.com/mohimpact"
                className="hover:text-white transition-colors"
              >
                <Github size={28} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer embedded in contact for seamless look */}
      <div className="absolute bottom-6 left-0 right-0 text-center text-neutral-600 text-sm">
        © {new Date().getFullYear()} Umar Abubakar.
      </div>
    </section>
  );
};

export default Contact;

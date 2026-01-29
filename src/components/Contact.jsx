import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ArrowRight } from "lucide-react";
import { Button } from "./ui/Button";
import { Card } from "./ui/Card";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary-50/50 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 border border-primary-200 rounded-full bg-primary-50 text-primary-700 text-sm font-medium">
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Let's work together.
          </h2>
          <p className="text-xl text-neutral-600 mb-12 max-w-2xl mx-auto">
            I'm currently looking for new opportunities as a Data Analyst.
            Whether you have a question or just want to say hi, I'll try my best
            to get back to you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Card
              className="p-8 hover:border-primary-200 hover:shadow-lg transition-all flex flex-col items-center gap-4 group cursor-pointer"
              onClick={() =>
                (window.location = "mailto:muhammadumarabubakar363@gmail.com")
              }
            >
              <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Email Me</h3>
                <p className="text-sm text-neutral-500">
                  muhammadumarabubakar363@gmail.com
                </p>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card
              className="p-8 hover:border-[#0077b5] hover:shadow-lg transition-all flex flex-col items-center gap-4 group cursor-pointer"
              onClick={() =>
                window.open(
                  "https://linkedin.com/in/umar-muhammad-abubakar",
                  "_blank",
                )
              }
            >
              <div className="w-12 h-12 rounded-full bg-[#0077b5]/10 flex items-center justify-center text-[#0077b5] group-hover:scale-110 transition-transform">
                <Linkedin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">LinkedIn</h3>
                <p className="text-sm text-neutral-500">
                  umar-muhammad-abubakar
                </p>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Card
              className="p-8 hover:border-neutral-800 hover:shadow-lg transition-all flex flex-col items-center gap-4 group cursor-pointer"
              onClick={() =>
                window.open("https://github.com/mohimpact", "_blank")
              }
            >
              <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-900 group-hover:scale-110 transition-transform">
                <Github size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">GitHub</h3>
                <p className="text-sm text-neutral-500">mohimpact</p>
              </div>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Button
            size="lg"
            className="h-14 px-8 text-lg shadow-xl shadow-primary-500/20"
            onClick={() => window.open("/resume.pdf", "_blank")}
          >
            Download Resume <ArrowRight className="ml-2" size={20} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

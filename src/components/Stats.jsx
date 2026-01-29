import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "60K+", label: "Records Analyzed" },
  { value: "30%", label: "Faster Decisions" },
  { value: "100%", label: "Accuracy Rate" },
  { value: "8hrs", label: "Saved Weekly" },
];

const Stats = () => {
  return (
    <section className="py-20 bg-background border-b border-neutral-200/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group cursor-default"
            >
              <h3 className="text-5xl md:text-6xl font-heading font-bold text-navy-900 group-hover:text-primary transition-colors duration-300">
                {stat.value}
              </h3>
              <p className="mt-2 text-sm font-medium text-neutral-500 uppercase tracking-widest">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

import React from "react";
import { motion } from "framer-motion";
import { Database, Zap, CheckCircle2, Clock } from "lucide-react";
import { Card } from "./ui/Card";

const stats = [
  {
    icon: <Database className="w-8 h-8 text-primary-500" />,
    value: "60K+",
    label: "Records Analyzed",
    description: "In single dataset",
    delay: 0,
  },
  {
    icon: <Zap className="w-8 h-8 text-primary-500" />,
    value: "30%",
    label: "Faster Decisions",
    description: "Through automation",
    delay: 0.1,
  },
  {
    icon: <CheckCircle2 className="w-8 h-8 text-primary-500" />,
    value: "100%",
    label: "Accuracy Rate",
    description: "In data reporting",
    delay: 0.2,
  },
  {
    icon: <Clock className="w-8 h-8 text-primary-500" />,
    value: "8 hrs",
    label: "Saved Weekly",
    description: "Via Python scripts",
    delay: 0.3,
  },
];

const Stats = () => {
  return (
    <section className="py-12 bg-neutral-50 border-b border-neutral-200">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: stat.delay, duration: 0.5 }}
            >
              <Card className="p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow border-none bg-white/50">
                <div className="mb-4 bg-primary-50 p-3 rounded-full">
                  {stat.icon}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-1">
                  {stat.value}
                </h3>
                <p className="text-sm font-semibold text-neutral-900 uppercase tracking-wide">
                  {stat.label}
                </p>
                <p className="text-xs text-neutral-500 mt-1">
                  {stat.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

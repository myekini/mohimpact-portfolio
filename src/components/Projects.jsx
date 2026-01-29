import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "./ui/Button";

const projects = [
  {
    title: "OPay Personal Finance Tracker",
    description:
      "End-to-end finance dashboard processing 1,800+ transactions. Engineered automated categorization and monthly budget tracking with 20% improvement potential identified.",
    tags: ["Google Sheets", "Pivot Tables", "Data Viz"],
    image: "bg-emerald-500/10", // Using color washes instead of gradients for premium feel
    accent: "text-emerald-600",
    links: {
      github: "https://github.com/mohimpact/opay-finance-analysis",
      demo: "#",
    },
  },
  {
    title: "Student Attendance Insights",
    description:
      "Interactive Power BI dashboard for analyzing student attendance patterns. Features complex DAX measures for attendance rates and drill-down.",
    tags: ["Power BI", "DAX", "Data Modeling"],
    image: "bg-amber-500/10",
    accent: "text-amber-600",
    links: {
      github:
        "https://github.com/mohimpact/powerbi-student-attendance-insights",
      demo: "#",
    },
  },
  {
    title: "Retail Store Sales Analysis",
    description:
      "Sales performance dashboard tracking revenue by category and payment method. Implemented dynamic filtering enabling stakeholders to identify seasonal trends.",
    tags: ["Excel", "Advanced Formulas", "Dashboard"],
    image: "bg-blue-500/10",
    accent: "text-blue-600",
    links: {
      github: "https://github.com/mohimpact/retail-store-sales-analysis",
      demo: "#",
    },
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-surface">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy-900 mb-4">
              Selected Work
            </h2>
            <p className="text-xl text-neutral-500 max-w-md">
              Solving real business problems through rigorous data engineering
              and visualization.
            </p>
          </div>
          <Button
            variant="ghost"
            className="gap-2 text-navy-900 hover:text-primary font-medium group"
            asChild
          >
            <a
              href="https://github.com/mohimpact"
              target="_blank"
              rel="noopener noreferrer"
            >
              View GitHub{" "}
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </Button>
        </div>

        {/* Projects Grid (Bento/Minimal Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col h-full"
            >
              {/* Image Area - Cleaner, no borders, just rounded corners and color wash */}
              <div
                className={`aspect-[16/10] rounded-2xl ${project.image} mb-6 relative overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-black/5`}
              >
                {/* Links Overlay */}
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/30 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full text-navy-900 hover:text-primary shadow-lg hover:scale-110 transition-all"
                  >
                    <Github size={24} />
                  </a>
                  {project.links.demo !== "#" && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full text-navy-900 hover:text-primary shadow-lg hover:scale-110 transition-all"
                    >
                      <ExternalLink size={24} />
                    </a>
                  )}
                </div>

                {/* Decorative Icon or Text */}
                <div className="absolute bottom-4 left-4 font-heading font-bold text-2xl opacity-10 text-navy-900">
                  0{index + 1}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold uppercase tracking-wider text-neutral-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-neutral-500 leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-primary transition-colors mt-auto"
                >
                  View Case Study <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

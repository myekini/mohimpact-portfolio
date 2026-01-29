import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "./ui/Button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "./ui/Card";

const projects = [
  {
    title: "OPay Personal Finance Tracker",
    description:
      "End-to-end finance dashboard processing 1,800+ transactions. Engineered automated categorization and monthly budget tracking with 20% improvement potential identified.",
    tags: ["Google Sheets", "Pivot Tables", "Data Viz"],
    image: "bg-gradient-to-br from-green-500 to-emerald-400",
    links: {
      github: "https://github.com/mohimpact/opay-finance-analysis",
      demo: "#", // Add live demo link if available or remove
    },
  },
  {
    title: "Student Attendance Insights",
    description:
      "Interactive Power BI dashboard for analyzing student attendance patterns. Features complex DAX measures for attendance rates and drill-down capabilities by demographics.",
    tags: ["Power BI", "DAX", "Data Modeling"],
    image: "bg-gradient-to-br from-yellow-500 to-orange-400",
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
    image: "bg-gradient-to-br from-blue-500 to-cyan-400",
    links: {
      github: "https://github.com/mohimpact/retail-store-sales-analysis",
      demo: "#",
    },
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center px-4 py-1.5 mb-4 border border-primary-200 rounded-full bg-primary-50 text-primary-700 text-sm font-medium"
          >
            Portfolio
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-neutral-600"
          >
            Real-world data solutions solving business problems through
            analysis, engineering, and visualization.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden group border-neutral-200">
                {/* Image Placeholder - In production, replace with actual screenshots */}
                <div
                  className={`h-48 w-full ${project.image} relative overflow-hidden flex items-center justify-center`}
                >
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
                  <span className="text-white font-bold opacity-30 text-4xl transform -rotate-12 select-none">
                    {project.title.split(" ")[0]}
                  </span>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 backdrop-blur-[2px]">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="shadow-lg"
                      asChild
                    >
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Analysis
                      </a>
                    </Button>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="mb-2 group-hover:text-primary-600 transition-colors text-xl">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-full bg-neutral-100 text-neutral-600 text-xs font-medium border border-neutral-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="gap-3 pt-0">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 gap-2"
                    asChild
                  >
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} /> Repository
                    </a>
                  </Button>
                  {project.links.demo !== "#" && (
                    <Button size="sm" className="flex-1 gap-2" asChild>
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo <ExternalLink size={16} />
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            variant="ghost"
            size="lg"
            className="gap-2 text-primary-600 hover:text-primary-700 hover:bg-primary-50"
            asChild
          >
            <a
              href="https://github.com/mohimpact"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Full Github Profile <ArrowRight size={20} />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

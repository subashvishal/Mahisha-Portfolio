import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Terminal, Database, Users, LayoutTemplate, TestTube, ShieldCheck } from "lucide-react";

const skillCategories = [
  {
    title: "Core Technical",
    icon: Terminal,
    skills: ["Python", "Selenium Framework", "Web Scraping", "Automation Scripting", "AWS Glue"]
  },
  {
    title: "QA Expertise",
    icon: TestTube,
    skills: ["Manual Testing", "Automation Testing", "E2E Testing", "Regression Testing", "Test Planning", "Test Execution"]
  },
  {
    title: "Methodologies",
    icon: LayoutTemplate,
    skills: ["Agile/Scrum", "SDLC", "Bug Tracking", "UAT", "Root Cause Analysis"]
  },
  {
    title: "Leadership",
    icon: Users,
    skills: ["Team Mentorship", "Project Ownership", "Cross-functional Collaboration", "Productivity Enhancement"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-background/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Technical Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit built over years of rigorous testing and automation development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card/50 border border-border/50 rounded-xl p-6 hover:bg-card transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold font-heading">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="bg-background/50 hover:bg-primary/20 hover:text-primary transition-colors px-3 py-1 text-sm font-normal border-border/50"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

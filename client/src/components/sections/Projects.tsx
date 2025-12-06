import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink, ArrowUpRight, CheckCircle2, Target, Lightbulb } from "lucide-react";

// Import generated images
import automationImg from "@assets/generated_images/abstract_automation_concept_with_gears_and_digital_flow..png";
import scrapingImg from "@assets/generated_images/abstract_web_scraping_data_stream_concept..png";
import graphImg from "@assets/generated_images/complex_graph_data_visualization_abstract..png";

const projects = [
  {
    title: "Automation Shell Script",
    shortDescription: "Developed a comprehensive automation shell script resulting in significant efficiency gains.",
    challenge: "Manual UAT processes were causing delivery delays and inconsistent test coverage across releases.",
    solution: "Designed and implemented a robust shell script framework to automate the execution of test suites, integrated directly into the CI/CD pipeline.",
    impact: "Achieved 20% growth in UAT runs and ensured consistent on-time delivery for all subsequent releases.",
    tech: ["Shell Scripting", "Automation", "CI/CD", "Linux"],
    image: automationImg
  },
  {
    title: "Web Scraping Solution",
    shortDescription: "Engineered a robust scraping system for extracting data from YouTube, Instagram, and job portals.",
    challenge: "Needed to analyze vast amounts of unstructured data from social media and job boards which was impossible to collect manually.",
    solution: "Built a scalable Selenium-based scraping engine capable of handling dynamic content, infinite scrolling, and data sanitization.",
    impact: "Successfully extracted and processed thousands of records for market analysis and job trend tracking.",
    tech: ["Python", "Selenium", "Data Analysis", "BeautifulSoup"],
    image: scrapingImg
  },
  {
    title: "Graph Visualization App",
    shortDescription: "End-to-end development of a visualization tool powered by AWS Glue for complex data processing.",
    challenge: "Complex relationship data was difficult to interpret in tabular formats, hindering decision-making.",
    solution: "Developed a full-stack graph visualization application using React and AWS Glue for backend data processing and transformation.",
    impact: "Enabled seamless data integration and dynamic visual analysis of complex graph structures for stakeholders.",
    tech: ["AWS Glue", "Python", "React", "Data Visualization"],
    image: graphImg
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-background/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-2">Featured Projects</h2>
            <p className="text-muted-foreground">Technical solutions delivering measurable business impact.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="bg-card border-border/50 overflow-hidden hover:border-primary/50 transition-all duration-300 group h-full flex flex-col cursor-pointer hover:shadow-xl hover:shadow-primary/5">
                    <div className="h-48 overflow-hidden relative">
                      <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10" />
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                         <div className="bg-background/80 backdrop-blur-md p-2 rounded-full text-primary">
                           <ArrowUpRight className="w-5 h-5" />
                         </div>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="font-heading text-xl group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-sm line-clamp-3 mb-4">
                        {project.shortDescription}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 3).map((t) => (
                          <Badge key={t} variant="outline" className="border-border/50 text-xs text-muted-foreground">
                            {t}
                          </Badge>
                        ))}
                        {project.tech.length > 3 && (
                          <Badge variant="outline" className="border-border/50 text-xs text-muted-foreground">+{project.tech.length - 3}</Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                
                <DialogContent className="bg-card border-border max-w-3xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-heading text-primary mb-2">{project.title}</DialogTitle>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((t) => (
                          <Badge key={t} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
                            {t}
                          </Badge>
                        ))}
                    </div>
                  </DialogHeader>
                  
                  <div className="space-y-6 py-4">
                    <div className="grid md:grid-cols-2 gap-6">
                       <div className="rounded-xl overflow-hidden border border-border/50">
                         <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                       </div>
                       
                       <div className="space-y-6">
                          <div>
                            <h4 className="text-lg font-semibold flex items-center gap-2 mb-2 text-foreground">
                              <Target className="w-5 h-5 text-destructive/80" /> The Challenge
                            </h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {project.challenge}
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-semibold flex items-center gap-2 mb-2 text-foreground">
                              <Lightbulb className="w-5 h-5 text-yellow-500/80" /> The Solution
                            </h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {project.solution}
                            </p>
                          </div>
                       </div>
                    </div>

                    <div className="bg-primary/5 border border-primary/10 rounded-xl p-4">
                      <h4 className="text-lg font-semibold flex items-center gap-2 mb-2 text-primary">
                        <CheckCircle2 className="w-5 h-5" /> Key Impact
                      </h4>
                      <p className="text-foreground font-medium">
                        {project.impact}
                      </p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

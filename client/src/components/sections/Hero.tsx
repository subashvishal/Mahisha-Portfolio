import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@assets/generated_images/abstract_technical_hero_background_with_network_nodes_and_code_snippets_in_deep_blue_and_teal..png";

export default function Hero() {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-mono mb-6 border border-primary/20">
              Lead Test Engineer & QA Automation Expert
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold font-heading leading-tight mb-6"
          >
            Driving <span className="text-primary">100% Reliability</span> through Python & Selenium Automation
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl"
          >
            Highly experienced QA Analyst with 7 years of Python experience, committed to enhancing customer journey reliability across Banking and Healthcare domains.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-base font-semibold"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Automation Projects
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/30 hover:bg-primary/5 text-base"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 flex gap-6 text-muted-foreground"
          >
             {/* Social Links Placeholders */}
             <a href="#" className="hover:text-primary transition-colors"><Github className="w-6 h-6" /></a>
             <a href="#" className="hover:text-primary transition-colors"><Linkedin className="w-6 h-6" /></a>
             <a href="mailto:mahishasubash27@gmail.com" className="hover:text-primary transition-colors"><Mail className="w-6 h-6" /></a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

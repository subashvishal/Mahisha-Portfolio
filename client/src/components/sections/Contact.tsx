import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-card relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold font-heading mb-6">Ready to Enhance Quality?</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Looking for a Lead Test Engineer who can drive reliability and efficiency? Let's connect.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col items-center p-6 bg-background/50 rounded-xl border border-border/50 backdrop-blur-sm"
            >
              <div className="p-4 bg-primary/10 rounded-full text-primary mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-muted-foreground">+91 7550137429</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center p-6 bg-background/50 rounded-xl border border-border/50 backdrop-blur-sm"
            >
              <div className="p-4 bg-primary/10 rounded-full text-primary mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <a href="mailto:mahishasubash27@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                mahishasubash27@gmail.com
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col items-center p-6 bg-background/50 rounded-xl border border-border/50 backdrop-blur-sm"
            >
              <div className="p-4 bg-primary/10 rounded-full text-primary mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground">Chennai, India</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
              <Mail className="mr-2 w-4 h-4" /> Send Message
            </Button>
          </motion.div>
        </div>
      </div>

      <footer className="absolute bottom-0 w-full py-6 text-center text-sm text-muted-foreground border-t border-border/20 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <p>&copy; 2025 Mahisha Saravanan. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-primary transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </section>
  );
}

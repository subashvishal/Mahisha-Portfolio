import { motion } from "framer-motion";
import { GraduationCap, Trophy, Award } from "lucide-react";

export default function Education() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold font-heading mb-8 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-primary" />
              Education
            </h2>
            <div className="bg-card border border-border/50 rounded-xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <GraduationCap className="w-24 h-24" />
              </div>
              <h3 className="text-xl font-bold mb-2">Bachelor of Computer Science</h3>
              <p className="text-primary font-medium mb-4">Vellore Institute of Technology</p>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>2017 - 2021</span>
                <span className="font-bold text-foreground">CGPA: 9.42</span>
              </div>
            </div>
          </motion.div>

          {/* Awards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold font-heading mb-8 flex items-center gap-3">
              <Trophy className="w-6 h-6 text-primary" />
              Achievements
            </h2>
            <div className="space-y-4">
              <div className="bg-card border border-border/50 rounded-xl p-6 flex items-center gap-4 hover:border-primary/30 transition-colors">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold">Merit Employee of the Year</h3>
                  <p className="text-sm text-muted-foreground">Awarded in 2023 & 2024 for outstanding performance.</p>
                </div>
              </div>

              <div className="bg-card border border-border/50 rounded-xl p-6 flex items-center gap-4 hover:border-primary/30 transition-colors">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold">Certificate of Merit</h3>
                  <p className="text-sm text-muted-foreground">CBSE Topper 2015 & 2017.</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

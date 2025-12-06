import { motion } from "framer-motion";
import { Code2, Bug, TrendingUp, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const metrics = [
  {
    label: "Python Experience",
    value: "7 Years",
    icon: Code2,
    description: "Core expertise"
  },
  {
    label: "QA Experience",
    value: "5 Years",
    icon: Clock,
    description: "Manual & Automation"
  },
  {
    label: "UAT Growth",
    value: "20%",
    icon: TrendingUp,
    description: "In previous roles"
  },
  {
    label: "Bugs Resolved",
    value: "200+",
    icon: Bug,
    description: "Critical issues fixed"
  }
];

export default function Metrics() {
  return (
    <section className="py-12 bg-background relative z-20 -mt-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
                <CardContent className="p-6 flex items-start justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm font-medium mb-1">{metric.label}</p>
                    <h3 className="text-3xl font-bold font-heading text-foreground group-hover:text-primary transition-colors">
                      {metric.value}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-2">{metric.description}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                    <metric.icon className="w-6 h-6" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

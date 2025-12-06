import { motion } from "framer-motion";
import { Calendar, Building2, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Globallogic",
    role: "Senior Quality Assurance Engineer",
    period: "Aug 2022 - Present",
    location: "Chennai, India",
    achievements: [
      "Led and mentored a 5-member team, enhancing overall productivity through comprehensive end-to-end testing oversight.",
      "Resolved over 200 bugs as a Web Scraper at Quorum.",
      "Gained comprehensive manual QA experience at VMware, ensuring high-quality product delivery.",
      "Developed and executed over 500 detailed test scenarios for key features like ReDiscover and ESXI Upgrade."
    ]
  },
  {
    company: "Tech Prescient",
    role: "Senior Test Engineer",
    period: "Apr 2022 - Aug 2022",
    location: "Chennai, India",
    achievements: [
      "Managed end-to-end testing across multiple domains including Slingshot architecture, localization, and beta games.",
      "Demonstrated complete ownership of the testing lifecycle.",
      "Significantly improved product quality by diligently reporting manual bugs.",
      "Enhanced E2E automation suite by adding missing scenarios and updating test data."
    ]
  },
  {
    company: "Societe Generale",
    role: "Software Engineer",
    period: "Jul 2021 - Feb 2022",
    location: "Chennai, India",
    achievements: [
      "Developed and implemented a complete automation shell script, resulting in a 20% growth in UAT runs.",
      "Ensured consistent on-time delivery of software releases.",
      "Built web scraping solutions using Selenium to extract data from social platforms.",
      "Automated collection of job postings for analysis."
    ]
  },
  {
    company: "Amazon",
    role: "Software Engineer - Part Time",
    period: "Jan 2021 - Jul 2021",
    location: "Chennai, India",
    achievements: [
      "Spearheaded end-to-end development of a Graph Visualization application.",
      "Designed and implemented AWS Glue Jobs to process data for visualization.",
      "Leveraged AWS Glue to power dynamic display of complex graph data."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Professional Experience</h2>
          <p className="text-muted-foreground">A timeline of increasing responsibility and impact.</p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 h-full w-px bg-border transform md:-translate-x-1/2 ml-6 md:ml-0" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 mt-1.5 ring-4 ring-background z-10" />

              {/* Content */}
              <div className="ml-16 md:ml-0 md:w-1/2 px-4">
                <div className={`bg-card border border-border/50 p-6 rounded-xl hover:border-primary/30 transition-colors ${
                  index % 2 === 0 ? "md:text-left" : "md:text-right"
                }`}>
                  <div className={`flex flex-col gap-1 mb-4 ${
                    index % 2 === 0 ? "items-start" : "items-start md:items-end"
                  }`}>
                    <h3 className="text-xl font-bold font-heading text-foreground">{exp.company}</h3>
                    <p className="text-primary font-medium">{exp.role}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mt-1">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {exp.period}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {exp.location}</span>
                    </div>
                  </div>
                  
                  <ul className={`space-y-2 text-sm text-muted-foreground ${
                    index % 2 === 0 ? "text-left" : "text-left md:text-right"
                  }`}>
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="leading-relaxed">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

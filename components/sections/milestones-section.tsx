"use client"

import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const milestones = [
  {
    date: "April 2024",
    title: "Project Initiation",
    description: "Team formation, project scope definition, and initial planning phase.",
    status: "Completed",
  },
  {
    date: "May 2024",
    title: "Topic Assesment Form (TAF) Submission",
    description: "Formal topic evaluation and approval from academic committee.",
    status: "Completed",
  },
  {
    date: "July 2024",
    title: "Proposal Presentation",
    description: "Initial project proposal presentation to stakeholders.",
    status: "Completed",
  },
  {
    date: "December 2024",
    title: "Progress Presentation 1",
    description: "First major milestone presentation with technical demonstrations.",
    status: "Completed",
  },
  {
    date: "March 2025",
    title: "Progress Presentation 2",
    description: "Second milestone review with advanced feature implementations.",
    status: "Completed",
  },
  {
    date: "March 2025",
    title: "Research Paper Submission",
    description: "Comprehensive research documentation and academic paper submission.",
    status: "Completed",
  },
  {
    date: "April 2025",
    title: "Completion of Full System",
    description: "Final system integration, testing, and optimization phase.",
    status: "Completed",
  },
  {
    date: "May 2025",
    title: "Research Portfolio Website Launch",
    description: "Launch of the research portfolio website showcasing project outcomes.",
    status: "Completed",
  },
  {
    date: "May 2025",
    title: "Further Improvements & GenAI Integration",
    description: "Enhancements based on feedback and integration of Generative AI features.",
    status: "Completed",
  },
  {
    date: "May 2025",
    title: "Final Presentation",
    description: "Final research presentation to stakeholders and academic committee.",
    status: "In Progress",
  },

];

export function MilestonesSection() {
  return (
    <section id="milestones" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Project Milestones" 
          subtitle="Tracking our progress and achievements"
          centered
        />
        
        <div className="relative mt-12">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-border -ml-px" />
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative"
              >
                <div className={cn(
                  "flex flex-col md:flex-row items-start gap-8",
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                )}>
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-background rounded-full border-2 border-primary -ml-4 flex items-center justify-center">
                    <div className="w-3 h-3 bg-primary rounded-full" />
                  </div>
                  
                  {/* Date for mobile */}
                  <div className="md:hidden pl-16 pb-4">
                    <Badge variant="outline" className="text-sm font-medium">
                      {milestone.date}
                    </Badge>
                  </div>
                  
                  {/* Content */}
                  <Card className={cn(
                    "w-full md:w-[calc(50%-2rem)] ml-12 md:ml-0",
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  )}>
                    <CardContent className="p-6">
                      {/* Date for desktop */}
                      <div className="hidden md:block mb-2">
                        <Badge variant="outline" className="text-sm font-medium">
                          {milestone.date}
                        </Badge>
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground mb-4">{milestone.description}</p>
                      
                      <Badge 
                        className={cn(
                          milestone.status === "Completed" && "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
                          milestone.status === "In Progress" && "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
                          milestone.status === "Planned" && "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400"
                        )}
                      >
                        {milestone.status}
                      </Badge>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Helper function to conditionally join class names
function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
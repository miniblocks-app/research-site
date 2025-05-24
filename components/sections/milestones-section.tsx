"use client"

import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const milestones = [
  {
    date: "Q1 2023",
    title: "Project Initiation",
    description: "Initial planning, requirement gathering, and stakeholder alignment.",
    status: "Completed",
  },
  {
    date: "Q2 2023",
    title: "Concept Development",
    description: "Finalizing the concept, technical architecture, and approval process.",
    status: "Completed",
  },
  {
    date: "Q3 2023",
    title: "Prototype Development",
    description: "Building functional prototypes and conducting initial user testing.",
    status: "Completed",
  },
  {
    date: "Q4 2023",
    title: "Validation & Testing",
    description: "Comprehensive testing, validation, and quality assurance.",
    status: "In Progress",
  },
  {
    date: "Q1 2024",
    title: "Deployment Phase",
    description: "Staged deployment, integration with existing systems, and user training.",
    status: "Planned",
  },
  {
    date: "Q2 2024",
    title: "Evaluation & Refinement",
    description: "Post-implementation review, feedback collection, and refinements.",
    status: "Planned",
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
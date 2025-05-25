"use client"

import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Zap, Target, Lightbulb, Book, Search, FileSearch, GitBranch, Laptop } from "lucide-react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const sections = {
  literatureSurvey: {
    icon: <Book className="h-5 w-5 text-blue-600 dark:text-blue-400" />,
    title: "Literature Survey",
    description: "Comprehensive review of existing research",
    points: [
      "Analysis of current methodologies",
      "Review of state-of-the-art solutions",
      "Identification of research trends"
    ]
  },
  researchGap: {
    icon: <Search className="h-5 w-5 text-purple-600 dark:text-purple-400" />,
    title: "Research Gap",
    description: "Identifying areas needing investigation",
    points: [
      "Current limitations in the field",
      "Unexplored research areas",
      "Potential for innovation"
    ]
  },
  researchProblem: {
    icon: <FileSearch className="h-5 w-5 text-red-600 dark:text-red-400" />,
    title: "Research Problem and Solution",
    description: "Core challenges and proposed solutions",
    points: [
      "Problem statement definition",
      "Proposed solution framework",
      "Expected outcomes and impact"
    ]
  },
  objectives: {
    icon: <Target className="h-5 w-5 text-green-600 dark:text-green-400" />,
    title: "Research Objectives",
    description: "Key goals and targets",
    points: [
      "Primary research objectives",
      "Specific research questions",
      "Measurable outcomes"
    ]
  },
  methodology: {
    icon: <GitBranch className="h-5 w-5 text-amber-600 dark:text-amber-400" />,
    title: "Methodology",
    description: "Research approach and methods",
    points: [
      "Research design",
      "Data collection methods",
      "Analysis techniques"
    ]
  },
  technologies: {
    icon: <Laptop className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />,
    title: "Technologies",
    description: "Technical stack and tools",
    points: [
      "Development frameworks",
      "Data processing tools",
      "Implementation technologies"
    ]
  }
};

export function ProjectScopeSection() {
  return (
    <section id="project-scope" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Project Scope" 
          subtitle="Exploring the boundaries and possibilities of our vision"
          centered
        />
        
        <Tabs defaultValue="literature-survey" className="mt-12">
          <div className="bg-secondary/50 p-1 rounded-lg">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 gap-1 bg-transparent">
              {Object.entries(sections).map(([key, section]) => (
                <TabsTrigger 
                  key={key} 
                  value={key} 
                  className="data-[state=active]:bg-background data-[state=active]:shadow-none px-4 py-2"
                >
                  {section.title}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {Object.entries(sections).map(([key, section]) => (
            <TabsContent key={key} value={key} className="mt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card>
                  <CardHeader className="pb-3">
                    <div className="bg-secondary rounded-full w-10 h-10 flex items-center justify-center mb-3">
                      {section.icon}
                    </div>
                    <CardTitle>{section.title}</CardTitle>
                    <CardDescription>{section.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {section.points.map((point, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
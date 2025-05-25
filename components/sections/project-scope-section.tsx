"use client"

import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Zap, Target, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

export function ProjectScopeSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      }
    })
  };

  return (
    <section id="project-scope" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Project Scope" 
          subtitle="Exploring the boundaries and possibilities of our vision"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            <Card>
              <CardHeader className="pb-3">
                <div className="bg-blue-100 dark:bg-blue-900/20 rounded-full w-10 h-10 flex items-center justify-center mb-3">
                  <Target className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle>Project Goals</CardTitle>
                <CardDescription>The primary objectives of our project</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Develop an innovative solution to address industry challenges</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Create a scalable and sustainable platform</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Establish new standards for efficiency and performance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            <Card>
              <CardHeader className="pb-3">
                <div className="bg-amber-100 dark:bg-amber-900/20 rounded-full w-10 h-10 flex items-center justify-center mb-3">
                  <Lightbulb className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                </div>
                <CardTitle>Methodology</CardTitle>
                <CardDescription>Our approach to project execution</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Implement agile development methodology</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Conduct regular stakeholder reviews and feedback sessions</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Utilize cutting-edge technologies and best practices</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
          >
            <Card>
              <CardHeader className="pb-3">
                <div className="bg-green-100 dark:bg-green-900/20 rounded-full w-10 h-10 flex items-center justify-center mb-3">
                  <Zap className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle>Technical Approach</CardTitle>
                <CardDescription>Key technical components and strategies</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Cloud-native architecture for optimal scalability</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Microservices for modularity and maintainability</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Continuous integration and deployment pipeline</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
          >
            <Card>
              <CardHeader className="pb-3">
                <div className="bg-purple-100 dark:bg-purple-900/20 rounded-full w-10 h-10 flex items-center justify-center mb-3">
                  <Lightbulb className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle>Deliverables</CardTitle>
                <CardDescription>Expected outcomes and deliverables</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Comprehensive project documentation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Fully functional prototype with user testing results</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Implementation roadmap and future enhancements</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
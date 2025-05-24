"use client"

import { SectionHeading } from "@/components/ui/section-heading";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import { Award, BarChart3, Flame, Target, Users } from "lucide-react";

const achievements = [
  {
    title: "Research Publications",
    icon: <Award className="h-6 w-6 text-amber-500" />,
    value: 12,
    target: 15,
  },
  {
    title: "Industry Partnerships",
    icon: <Users className="h-6 w-6 text-blue-500" />,
    value: 8,
    target: 10,
  },
  {
    title: "Innovation Awards",
    icon: <Flame className="h-6 w-6 text-red-500" />,
    value: 3,
    target: 5,
  },
  {
    title: "Milestones Completed",
    icon: <Target className="h-6 w-6 text-green-500" />,
    value: 18,
    target: 24,
  },
];

const stats = [
  { label: "Team Size", value: "12", icon: <Users className="h-5 w-5" /> },
  { label: "Project Duration", value: "18 Months", icon: <BarChart3 className="h-5 w-5" /> },
  { label: "Research Papers", value: "12", icon: <Award className="h-5 w-5" /> },
];

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Project Achievements" 
          subtitle="Celebrating our milestones and accomplishments"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-secondary/50 rounded-lg p-6 text-center"
            >
              <div className="flex justify-center mb-3">
                <div className="rounded-full bg-background p-3">
                  {stat.icon}
                </div>
              </div>
              <h3 className="text-3xl font-bold">{stat.value}</h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg p-6 shadow-sm"
            >
              <div className="flex items-center mb-4">
                <div className="mr-4">{achievement.icon}</div>
                <h3 className="text-xl font-semibold">{achievement.title}</h3>
              </div>
              
              <div className="flex items-center justify-between mb-2">
                <span className="text-muted-foreground">Progress</span>
                <span className="font-medium">{achievement.value}/{achievement.target}</span>
              </div>
              
              <Progress 
                value={(achievement.value / achievement.target) * 100} 
                className="h-2"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
"use client"

import { SectionHeading } from "@/components/ui/section-heading";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "Project Lead",
    bio: "Alex has over 10 years of experience leading innovative projects in the tech industry.",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    name: "Samantha Lee",
    role: "Lead Developer",
    bio: "Samantha specializes in frontend development and user experience design.",
    image: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    name: "Michael Chen",
    role: "Research Lead",
    bio: "Michael brings expertise in data analysis and research methodologies to the team.",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    name: "Priya Patel",
    role: "UX Designer",
    bio: "Priya ensures our projects are not only functional but also intuitive and accessible.",
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];

export function AboutUsSection() {
  return (
    <section id="about-us" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="About Us" 
          subtitle="Meet the talented team behind the project"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full">
                <div className="aspect-square overflow-hidden">
                  <Avatar className="w-full h-full rounded-none">
                    <AvatarImage src={member.image} alt={member.name} className="object-cover" />
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <p className="text-sm font-medium text-primary">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
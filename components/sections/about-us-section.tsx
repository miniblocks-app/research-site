"use client"

import { SectionHeading } from "@/components/ui/section-heading";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Linkedin, Github, Mail } from "lucide-react";
import Link from "next/link";

const teamMembers = [
  {
    name: "Pasindu Dinal",
    role: "Led the Logic Designer",
    bio: "Pasindu has over 2 years of experience working in the industry. He is passionate about software development and has a keen interest in backend and Open Source.",
    image: "/Dinal.jpeg",
    social: {
      linkedin: "https://www.linkedin.com/in/mrmihi/",
      github: "https://github.com/mrmihi",
      email: "mailto:mrmihi@gmail.com"
    }
  },
  {
    name: "Sayuru Bopitiya",
    role: "Led the Compilation Deployment & GenAI",
    bio: "Sayuru has close to 4 years of experience building tech in the industry. He is passionate about Machine Learning, LLM technologies and their applications.",
    image: "/Sayuru.png",
    social: {
      linkedin: "https://www.linkedin.com/in/sayuru-bopitiya//",
      github: "https://github.com/SayuruRehan",
      email: "mailto:sayururehan77@gmail.com"
    }
  },
  {
    name: "Thareendra Tennakoon",
    role: "Led the UI Designer",
    bio: "Thareendra has close to 2 years of experience in the industry. She is passionate about Frontend Development and has a keen interest in creating user-friendly interfaces.",
    image: "/Tharee.jpeg",
    social: {
      linkedin: "https://www.linkedin.com/in/thareendra-tennakoon/",
      github: "https://github.com/Thareendra2000",
      email: "mailto:thareendra2000@gmail.com"
    }
  },
  {
    name: "Prof. Nuwan Kodagoda",
    role: "Supervisor | Pro-Vice Chancellor at SLIIT",
    bio: "Supervisor of the research project and pinoeer of the inital idea of the project. He is a leading academic in the field of software engineering and has extensive experience in guiding research projects.",
    image: "/Nuwan1.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/nuwan-kodagoda-a4875a4/",
      github: "#",
      email: "mailto:nuwan.k@sliit.lk"
    }
  },
  {
    name: "Mr. Eishan Weerasinghe",
    role: "Co-Supervisor | Assistant Lecturer at SLIIT",
    bio: "Co-Supervisor of Miniblocks research project. He is an expert in software engineering and has a keen interest in educational technologies.",
    image: "/Eishan.jpeg",
    social: {
      linkedin: "https://www.linkedin.com/in/w-h-a-eishan-dinuka-08a2b8199/?originalSubdomain=lk",
      github: "#",
      email: "mailto:eishan.w@sliit.lk"
    }
  },
  {
    name: "Ms. Madhumini Gunaratne",
    role: "Research Assistant",
    bio: "Madhumini's support in research paper writing and her knowledge in Blockly Programming and LLMs proved to be a catalyst for the development of the project.",
    image: "/madhuminig.jpeg",
    social: {
      linkedin: "https://www.linkedin.com/in/madhuminigun/",
      github: "#",
      email: "mailto:madhumini.g@sliit.lk"
    }
  }
];

export function AboutUsSection() {
  return (
    <section id="about-us" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="The Team" 
          subtitle="Meet the talented team behind Miniblocks"
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
                        <AvatarImage 
                          src={member.image} 
                          alt={member.name} 
                          className={member.name === "Prof. Nuwan Kodagoda" ? "object-cover object-top" : "object-cover"} 
                        />
                        <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <p className="text-sm font-medium text-primary">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                  <div className="flex space-x-4">
                    <Link 
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Linkedin size={20} />
                    </Link>
                    <Link 
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github size={20} />
                    </Link>
                    <Link 
                      href={member.social.email}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Mail size={20} />
                    </Link>
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
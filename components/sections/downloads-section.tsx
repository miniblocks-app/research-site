"use client"

import { SectionHeading } from "@/components/ui/section-heading";
import { DownloadCard } from "@/components/ui/download-card";
import { motion } from "framer-motion";

// Sample download data matching the image
const downloadItems = [
  {
    title: "Proposal Report",
    date: "25 August 2023",
    type: "Group Assignment",
    id: "proposal-report"
  },
  {
    title: "Status Document I",
    date: "3 November 2023",
    type: "Individual Assignment",
    id: "status-document-1"
  },
  {
    title: "Status Document II",
    date: "18 March 2024",
    type: "Individual Assignment",
    id: "status-document-2"
  },
  {
    title: "Research Paper",
    date: "4 March 2024",
    type: "Group Assignment",
    id: "research-paper"
  },
  {
    title: "Final Report",
    date: "5 April 2024",
    type: "Group & Individual Assignment",
    id: "final-report"
  },
  {
    title: "Logbook",
    date: "28th June 2024",
    type: "Individual Assignment",
    id: "logbook"
  }
];

export function DownloadsSection() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  return (
    <section id="downloads" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Downloads" 
          subtitle="Access project documentation and resources"
          centered
        />
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {downloadItems.map((item) => (
            <DownloadCard
              key={item.id}
              title={item.title}
              date={item.date}
              type={item.type}
              id={item.id}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
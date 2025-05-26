"use client"

import { SectionHeading } from "@/components/ui/section-heading";
import { DownloadCard } from "@/components/ui/download-card";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const documents = [
  {
    title: "TAF Document",
    date: "May 2024",
    type: "Group Assignment",
    id: "taf-document"
  },
  {
    title: "Proposal Report",
    date: "July 2024",
    type: "Individual Assignment",
    id: "proposal-document"
  },
  {
    title: "Final Report",
    date: "February 2025",
    type: "Group & Individual Assignment",
    id: "final-report"
  },
  {
    title: "Research Paper",
    date: "March 2025",
    type: "Group Assignment",
    id: "research-paper"
  },

];

const presentations = [
  {
    title: "Proposal Presentation",
    date: "July 2024",
    type: "Group Assignment",
    id: "proposal-presentation"
  },
  {
    title: "PP1 Presentation",
    date: "December 2024",
    type: "Group Assignment",
    id: "pp1-presentation"
  },
  {
    title: "PP2 Presentation",
    date: "March 2025",
    type: "Group Assignment",
    id: "pp2-presentation"
  },
  {
    title: "Final Presentation",
    date: "May 2025",
    type: "Group Assignment",
    id: "final-presentation"
  },
];

export function DownloadsSection() {
  return (
    <section id="downloads" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Downloads" 
          subtitle="Access project documentation and resources"
          centered
        />
        
        <Tabs defaultValue="documents" className="mt-12">
          <TabsList className="grid w-full max-w-[400px] grid-cols-2 mx-auto">
            <TabsTrigger value="documents">Documents</TabsTrigger>
            <TabsTrigger value="presentations">Presentations</TabsTrigger>
          </TabsList>
          
          <TabsContent value="documents" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {documents.map((item) => (
                <DownloadCard
                  key={item.id}
                  title={item.title}
                  date={item.date}
                  type={item.type}
                  id={item.id}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="presentations" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {presentations.map((item) => (
                <DownloadCard
                  key={item.id}
                  title={item.title}
                  date={item.date}
                  type={item.type}
                  id={item.id}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
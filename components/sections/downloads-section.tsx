"use client"

import { SectionHeading } from "@/components/ui/section-heading";
import { DownloadCard } from "@/components/ui/download-card";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const documents = [
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
  }
];

const presentations = [
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
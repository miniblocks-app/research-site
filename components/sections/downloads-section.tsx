"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { DownloadCard } from "@/components/ui/download-card";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const documents = [
  {
    title: "TAF Document",
    date: "May 2024",
    type: "Group Assignment",
    id: "taf-document",
    href: "https://drive.google.com/drive/folders/1XoeQ3n3iEQLn_57imzzgAykYrRq6zN6N?usp=sharing",
  },
  {
    title: "Proposal Report",
    date: "July 2024",
    type: "Individual Assignment",
    id: "proposal-document",
    href: "https://drive.google.com/drive/folders/19vX3ItpAwrjVnKx-kogq-q20Ph2NYAtt?usp=sharing",
  },
  {
    title: "Final Report",
    date: "February 2025",
    type: "Group & Individual Assignment",
    id: "final-report",
    href: "https://drive.google.com/drive/folders/1IGxDxiuEMNQvxAvKwwQ0_iThU48azrmA?usp=sharing",
  },
  {
    title: "Research Paper",
    date: "March 2025",
    type: "Group Assignment",
    id: "research-paper",
    href: "https://drive.google.com/file/d/1-j5nhnbiEes8LWsFocRJvz1uTAin3IEw/view?usp=sharing",
  },
];

const presentations = [
  {
    title: "Proposal Presentation",
    date: "July 2024",
    type: "Group Assignment",
    id: "proposal-presentation",
    href: "https://drive.google.com/file/d/1Lu1gMm96MdgETsGgez6bkj_MtlMaH5TA/view?usp=sharing",
  },
  {
    title: "PP1 Presentation",
    date: "December 2024",
    type: "Group Assignment",
    id: "pp1-presentation",
    href: "https://drive.google.com/file/d/1Ha78Cd5fr46CXxYSoKrxqLlFHx_JntHw/view?usp=sharing",
  },
  {
    title: "PP2 Presentation",
    date: "March 2025",
    type: "Group Assignment",
    id: "pp2-presentation",
    href: "https://drive.google.com/file/d/15lPTFq8KW9e5U5qBYHtweKqCQsKIgw6e/view?usp=sharing",
  },
  {
    title: "Final Presentation",
    date: "May 2025",
    type: "Group Assignment",
    id: "final-presentation",
    href: "#",
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
                  href={item.href}
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
                  href={item.href}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

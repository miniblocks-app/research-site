"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

interface DownloadCardProps {
  title: string;
  date: string;
  type: string;
  id: string;
  href: string;            // ← new prop for per-item URL
}

export function DownloadCard({ title, date, type, id, href }: DownloadCardProps) {
  return (
    <motion.div
      key={id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">{title}</CardTitle>
          <p className="text-sm text-muted-foreground">Submitted on: {date}</p>
        </CardHeader>
        <CardContent>
          <p className="text-blue-500 dark:text-blue-400 mb-4">{type}</p>
          <Link href={href} target="_blank" rel="noopener noreferrer">
            <Button className="w-full" variant="outline">
              View
            </Button>
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
}

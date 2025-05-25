"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

interface DownloadCardProps {
  title: string
  date: string
  type: string
  id: string
}

export function DownloadCard({ title, date, type, id }: DownloadCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden">
        <CardHeader className="pb-4">
          <CardTitle className="text-xl">{title}</CardTitle>
          <p className="text-sm text-muted-foreground">Submitted on: {date}</p>
        </CardHeader>
        <CardContent>
          <p className="text-blue-500 dark:text-blue-400 mb-4">{type}</p>
          <Link href="https://google.com" target="_blank" rel="noopener noreferrer">
            <Button className="w-full" variant="outline">
              View
            </Button>
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  )
}
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface DownloadCardProps {
  title: string
  date: string
  type: string
  id: string
}

export function DownloadCard({ title, date, type, id }: DownloadCardProps) {
  // Sample PDF URL - replace with actual PDF URLs in production
  const pdfUrl = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden bg-gradient-to-br from-background to-secondary/20">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground mb-1">Submitted on: {date}</p>
          <p className="text-blue-500 dark:text-blue-400 text-sm mb-4">{type}</p>
          <Button 
            variant="outline" 
            className="w-full"
            onClick={() => window.open(pdfUrl, '_blank')}
          >
            View
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}
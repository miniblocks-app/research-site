"use client"

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

export function HomeSection() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center relative"
    >
      <div 
        className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-background to-secondary/20"
      />
      
      <div className="container mx-auto px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Where tiny builders{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
              dream big!
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Miniblocks is a blocky-based application that offers an accessible and engaging platform for children to learn mobile application development.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
              <Link href="#project-scope">Learn More</Link>
            </Button>
            <Button size="lg" variant="outline">
              <Link href="#contact-us">Contact Us</Link>
            </Button>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <Link href="#project-scope">
          <Button variant="ghost" size="icon">
            <ArrowDown size={24} />
          </Button>
        </Link>
      </div>
    </section>
  );
}
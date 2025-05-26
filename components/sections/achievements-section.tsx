"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Award, Bolt, MapPin, Globe } from "lucide-react";

export function AchievementsSection() {
  // gradient colors
  const gradStart = "#16a34a"; // tailwind-green-600
  const gradEnd   = "#d97706"; // tailwind-yellow-600

  // common inline style for gradient borders
  const gradientBorder = {
    borderImageSlice: 1,
    borderImageSource: `linear-gradient(to right, ${gradStart}, ${gradEnd})`,
  };

  return (
    <section id="achievements" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <SectionHeading
          title="Research Achievement"
          subtitle="Celebrating our contribution to international research in AI and education"
          centered
        />

        <div className="mx-auto max-w-3xl space-y-8">
          {/* Main Conference Card */}
          <div
            className="rounded-lg border-4 border-transparent shadow-sm"
            style={gradientBorder}
          >
            <div className="p-6 bg-card rounded-lg">
              {/* Icon + Badge */}
              <div className="flex flex-col items-center mb-6">
                <div className="rounded-full bg-secondary/20 p-4 mb-3">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-green-600 bg-green-100 rounded-full">
                  Research Paper Accepted
                </span>
              </div>

              {/* Title + Subtitle */}
              <h3 className="text-xl font-semibold text-primary text-center mb-2">
                International Conference Acceptance
              </h3>
              <p className="text-muted-foreground text-center mb-6">
                Our research has been accepted for presentation at ICET2025
              </p>

              {/* Paper Details */}
              <div className="bg-secondary/10 p-4 rounded-md mb-6">
                <h4 className="text-sm font-semibold mb-2">Paper Details</h4>
                <p className="text-sm">
                  <span className="font-medium">Paper ID:</span> ET1128
                </p>
                <p className="text-sm">
                  <span className="font-medium">Title:</span> Blocky-Based Programming Environment for Developing Cross-Platform Mobile Applications
                </p>
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Conference */}
                <div
                  className="bg-secondary/10 p-4 rounded-md shadow-sm border-4 border-transparent"
                  style={gradientBorder}
                >
                  <div className="flex items-center mb-2">
                    <Award className="h-5 w-5 text-primary mr-2" />
                    <h5 className="font-semibold">Conference</h5>
                  </div>
                  <p className="text-sm">
                    ICET2025 – The 5th International Conference on Educational Technology
                  </p>
                  <p className="text-xs text-muted-foreground">
                    "Fostering Inclusive and Innovative Learning with Emerging Educational Technologies"
                  </p>
                </div>

                {/* H-Index */}
                <div
                  className="bg-secondary/10 p-4 rounded-md shadow-sm border-4 border-transparent"
                  style={gradientBorder}
                >
                  <div className="flex items-center mb-2">
                    <Bolt className="h-5 w-5 text-primary mr-2" />
                    <h5 className="font-semibold">H5-Index of 22</h5>
                  </div>
                  <p className="text-sm">Published in the ICET 2025 Conference Proceedings by IEEE, (IEEE Xplore, and indexed by Ei Compendex, Scopus).</p>
                </div>

                {/* Venue */}
                <div
                  className="bg-secondary/10 p-4 rounded-md shadow-sm border-4 border-transparent"
                  style={gradientBorder}
                >
                  <div className="flex items-center mb-2">
                    <MapPin className="h-5 w-5 text-primary mr-2" />
                    <h5 className="font-semibold">Venue & Dates</h5>
                  </div>
                  <p className="text-sm">Chongqing, China</p>
                  <p className="text-xs text-muted-foreground">
                    September 26-28, 2025
                  </p>
                </div>

                {/* Website */}
                <div
                  className="bg-secondary/10 p-4 rounded-md shadow-sm border-4 border-transparent"
                  style={gradientBorder}
                >
                  <div className="flex items-center mb-2">
                    <Globe className="h-5 w-5 text-primary mr-2" />
                    <h5 className="font-semibold">Website</h5>
                  </div>
                  <a
                    href="https://www.icet.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium link"
                  >
                    www.icet.org
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* SLIIT Silver Jubilee Exhibition Card */}
          <div
            className="bg-secondary/10 p-6 rounded-md shadow-sm border-4 border-transparent"
            style={gradientBorder}
          >
            <h4 className="text-lg font-semibold text-primary mb-2 text-center">
              SLIIT Silver Jubilee Exhibition
            </h4>
            <p className="text-muted-foreground mb-4 text-center">
              Miniblocks was selected for display at the SLIIT Silver Jubilee Exhibition, showcasing innovative projects from SLIIT students and staff. Here, we were able to demonstrate our research on AI-driven educational tools and engage with the community, highlighting the potential of GenAI literacy in education and conduct a <b>UAT</b> directly with kids and school students.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/1.jpeg"
                alt="Exhibit 1"
                className="w-full h-40 rounded-md object-cover"
              />
              <img
                src="/5.jpeg"
                alt="Exhibit 1"
                className="w-full h-40 rounded-md object-cover"
              />
              <img
                src="/6.jpeg"
                alt="Exhibit 1"
                className="w-full h-40 rounded-md object-cover"
              />
              <img
                src="/2.jpeg"
                alt="Exhibit 2"
                className="w-full h-40 rounded-md object-cover"
              />
              <img
                src="/3.jpeg"
                alt="Exhibit 3"
                className="w-full h-40 rounded-md object-cover"
              />
              <img
                src="/4.jpeg"
                alt="Exhibit 4"
                className="w-full h-40 rounded-md object-cover"
              />
            </div>
          </div>

          {/* Other Achievements */}
          <div
            className="bg-secondary/10 p-6 rounded-md shadow-sm border-4 border-transparent"
            style={gradientBorder}
          >
            <h4 className="text-lg font-semibold text-primary mb-2 text-center">
              Research Competitions
            </h4>
            <p className="text-muted-foreground text-center">
              Submitted application to the <b>SLASSCOM Ingenuity Awards 2025</b><br />
              Submitted application to the <b>World Summit Awards Global Congress 2026</b>
            </p>
          </div>

          {/* Research Impact Card */}
          <div
            className="bg-secondary/10 p-6 rounded-md shadow-sm border-4 border-transparent"
            style={gradientBorder}
          >
            <h4 className="text-lg font-semibold text-primary mb-2 text-center">
              Research Impact
            </h4>
            <p className="text-muted-foreground text-center">
              This acceptance represents our commitment to advancing the field of
              tech-driven educational tools and contributing to the global discourse on
              mobile application development and GenAI literacy. Our systematic review provides valuable insights for the
              multidisciplinary research community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

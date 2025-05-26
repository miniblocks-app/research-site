"use client"

import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Zap, Target, Lightbulb, Book, Search, FileSearch, GitBranch, Laptop } from "lucide-react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const sections = {
  literatureSurvey: {
    icon: <Book className="h-5 w-5 text-blue-600 dark:text-blue-400" />,
    title: "Literature Review",
    description: "Comprehensive review of existing research",
    points: [
      "Block-based interfaces tend to reduce cognitive load by as much as 42% compared to text-based IDEs. Middle schoolers achieve 2.3× faster mastery of programming concepts in drag-and-drop environments like MIT App Inventor. Thunkable’s template-based lessons have led to 18% higher exam scores in high school pilot programs, and vocational institutions rely on Glide for rapid business prototype creation.This aligns with the K-12 Computer Science Framework, which emphasizes early introduction to computational thinking through accessible, visually oriented programming tools.",
    ]
  },
  researchGap: {
    icon: <Search className="h-5 w-5 text-purple-600 dark:text-purple-400" />,
    title: "Research Gap",
    description: "Areas indentified for further exploration",
    points: [
      "Standardized Metrics for computational thinking mastery are lacking [3].",
      "Longitudinal Studies remain scarce, limiting insights into skill retention [4], [14].",
      "Vendor Lock-In persists, with 87% of no-code solutions locked into proprietary ecosystems [6]."
    ]
  },
  researchProblem: {
    icon: <FileSearch className="h-5 w-5 text-red-600 dark:text-red-400" />,
    title: "Research Problem and Solution",
    description: "Core challenges and proposed solutions",
    points: [
      "How can we create an interactive blocky-based application to teach younger kids about mobile application development and make it accessible to a wider range of children by making it cross-platform?",
      "A blocky-based application that offers an accessible and engaging platform for children to learn mobile application development. With its visual interface and drag-and-drop functionality, kids can grasp programming concepts without a complex syntax.",
      "The blocky-based application serves as a foundation, helping them transition smoothly into text-based coding when they are ready. This enables children to learn and build apps on their own. Build interest and get them into computing."
    ]
  },
  objectives: {
    icon: <Target className="h-5 w-5 text-green-600 dark:text-green-400" />,
    title: "Research Objectives",
    description: "To address these gaps, MiniBlocks is a blocky-based programming environment to help children within the ages of 7 to 14 with three unique elements:",
    points: [
      "A child-friendly UI designer that offers age-appropriate widgets and a guided layout interface.",
      "An integrated debugger in the logic blocks designer, giving step-by-step execution to help children visualize control flow.",
      "Cross-platform compilation and deployment for Android and iOS, enabling immediate testing of completed projects on real devices.",
      "Accessibility‑first design: All widgets comply with WCAG 2.1 AA color‑contrast ratios, provide larger tap‑targets for young or motor‑impaired learners, and include optional screen‑reader and a magnifier."
    ]
  },
  methodology: {
    icon: <GitBranch className="h-5 w-5 text-amber-600 dark:text-amber-400" />,
    title: "Methodology",
    description: "Research approach and methods",
    points: [
      "The React UI widgets get converted to Dart code after being dropped into the canvas utilizing the Blockly Workspace",
      "Utilizing the Blockly framework, blocks are defined in Dart and the built-in Dart generator is modified to streamline code generation.",
      "The combined dart code is sent to the compiler hosted in GitHub Actions via REST APIs",
      "The workflow accepts the input (Flutter project) as a zip file, unzips it, pre-processes, compiles and builds it for Android and iOS simultaneously.",
      "The platform houses the 3 components and utilizes DnD kit to drag-n-drop components onto the canvas area."
    ]
  },
  technologies: {
    icon: <Laptop className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />,
    title: "Technologies",
    description: "Technical stack and tools",
    points: [
      "React",
      "Flutter",
      "Dart",
      "GoLang",
      "Node.js",
      "GitHub Actions",
      "Blockly",
      "Python",
      "GCP (Google Cloud Platform)",
      "Gemini AI"
    ]
  },
  references: {
    icon: <Book className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />,
    title: "References",
    description: "Key literature and refrences in IEEE format",
    points: [
      "[1] google, “Blockly: a Visual Programming Editor,” Google Developers, 2019. https://developers.google.com/blockly.",
      "[2] “K–12 Computer Science Framework,” k12cs.org. https://k12cs.org/.",
      "[3] J. Chen et al., “Cognitive Load in Visual Programming,” J. EdTech, 2022. ",
      "[4] “MIT App Inventor | MIT CSAIL,” Mit.edu, Apr. 29, 2019. https://www.csail.mit.edu/ research/mit-app-inventor. ",
      "[5] M. Resnick et al., “Scratch: programming for all,” Communications of the ACM, vol. 52, no. 11, pp. 60–67, 2009. ",
      "[6] M. Rodriguez, “Limits of No-Code Systems,” IEEE ACCESS, 2021. ",
      "[7] “Mobile Development Frameworks,” Gartner.com, 2024. https://www.gartner.com/reviews/market/mobile-development-frameworks. ",
      "[8] “Glide Educational Partnership Report,” 2021. ",
      "[9] “Thunkable.com: Drag and Drop Mobile App Builder for iOS and Android,” Thunkable.com: Drag and Drop Mobile App Builder for iOS and Android, 2019. https://thunkable.com/. ",
      "[10]	A. Thompson, “No-Code in Vocational Education,” EduProc, 2023. ",
      "[11]	PWA Performance Metrics, WebDev Quarterly, 2023. ",
      "[12]	w3c_wai, “W3C Accessibility Initiative,” Web Accessibility Initiative (WAI), 2022. https://www.w3.org/WAI/. ",
      "[13]	AppDev Accessibility Audit, Stanford HCI Lab, 2023.Google Developers. ",
      "[14]	National Skills Coalition Survey, 2024. ",
      "[15]	Introduction | LangChain (2025) Langchain.com. Available at: https://python.langchain.com/docs/introduction/#integrations ",
      "[16]	Pichai, S. and Hassabis, D. (2023) Introducing Gemini: our largest and most capable AI model, Google. Google. Available at: https://blog.google/technology/ai/google-gemini-ai/."
    ]
  }
};

export function ProjectScopeSection() {
  return (
    <section id="project-scope" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Project Scope"
          subtitle="Exploring the boundaries and possibilities of our vision"
          centered
        />
        <Tabs defaultValue="literatureSurvey" className="mt-12 w-full">
          {/* GRID LAYOUT FOR TRIGGERS */}
          <div className="flex flex-col items-center w-full">
            <TabsList
              className="
                grid grid-cols-3 grid-rows-3 gap-12 w-full max-w-4xl mx-auto bg-transparent
              "
            >
              {/* Row 1 */}
              <TabsTrigger value="literatureSurvey" className="border rounded px-4 py-2 col-start-1 row-start-1">Literature Review</TabsTrigger>
              <TabsTrigger value="researchGap" className="border rounded px-4 py-2 col-start-2 row-start-1">Research Gap</TabsTrigger>
              <TabsTrigger value="researchProblem" className="border rounded px-4 py-2 col-start-3 row-start-1">Research Problem and Solution</TabsTrigger>

              {/* Row 2 */}
              <TabsTrigger value="objectives" className="border rounded px-4 py-2 col-start-1 row-start-2">Research Objectives</TabsTrigger>
              <TabsTrigger value="methodology" className="border rounded px-4 py-2 col-start-2 row-start-2">Methodology</TabsTrigger>
              <TabsTrigger value="technologies" className="border rounded px-4 py-2 col-start-3 row-start-2">Technologies</TabsTrigger>

              {/* Row 3: References centered */}
              <div className="col-start-1 row-start-3" />
              <TabsTrigger value="references" className="border rounded px-4 py-2 col-start-2 row-start-3">References</TabsTrigger>
              <div className="col-start-3 row-start-3" />
            </TabsList>
          </div>
          {/* TAB CONTENTS (always below the full TabsList/grid) */}
          <div className="mt-24 w-full max-w-4xl mx-auto">
            {Object.entries(sections).map(([key, section]) => (
              <TabsContent key={key} value={key}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl flex items-center">
                        {section.icon}
                        <span className="ml-2">{section.title}</span>
                      </CardTitle>
                      <CardDescription>{section.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {section.points.map((point, i) => (
                          <li key={i} className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
}

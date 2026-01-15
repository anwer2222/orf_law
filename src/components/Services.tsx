"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Button from "./Button";
import { PiGavelFill, PiScrollFill, PiBuildingsFill, PiGlobeFill } from "react-icons/pi";
import Pretitle from "./Pretitle";
import { motion } from "framer-motion";
import { fadeIn } from "@/../public/assets/variants";
import { ServiceItem } from "@/types";

const fadeInVariant = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.2, delay: 0.1 } },
};

// Adapted for Law Context
const serviceData: ServiceItem[] = [
  {
    name: "litigation",
    icon: PiGavelFill,
    title: "Litigation & Dispute Resolution",
    description: "Representing clients in complex legal disputes. As members of the International Court of Dispute Resolution, we bring world-class arbitration strategies to local cases.",
    serviceList: [
      "Civil Litigation",
      "Commercial Disputes",
      "Arbitration",
      "Mediation",
      "Court Representation",
      "Settlement Negotiation",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-1.jpg" }, 
      { url: "/assets/img/services/thumb-2.jpg" },
    ],
  },
  {
    name: "consultation",
    icon: PiScrollFill,
    title: "Legal Consultation",
    description: "Expert advisory services grounded in Saudi Law and Ministry of Justice regulations. We help you navigate legal complexities before they become problems.",
    serviceList: [
      "Contract Review",
      "Legal Opinions",
      "Compliance Audits",
      "Regulatory Advice",
      "Risk Assessment",
      "Document Drafting",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-3.jpg" },
      { url: "/assets/img/services/thumb-4.jpg" },
    ],
  },
  {
    name: "corporate",
    icon: PiBuildingsFill,
    title: "Corporate & Commercial",
    description: "Comprehensive legal support for businesses in Madinah and beyond. From formation to mergers, we protect your commercial interests.",
    serviceList: [
      "Company Formation",
      "Mergers & Acquisitions",
      "Labor Law",
      "Intellectual Property",
      "Commercial Contracts",
      "Corporate Governance",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-5.jpg" },
      { url: "/assets/img/services/thumb-6.jpg" },
    ],
  },
  {
    name: "international",
    icon: PiGlobeFill,
    title: "International Law",
    description: "Leveraging our affiliation with Equity College London to handle cross-border legal matters and international arbitration cases.",
    serviceList: [
      "International Arbitration",
      "Cross-border Contracts",
      "Foreign Investment",
      "International Trade",
      "Dispute Resolution",
      "Global Compliance",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-7.jpg" },
      { url: "/assets/img/services/thumb-8.jpg" },
    ],
  },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState("litigation");

  return (
    <section className="pt-16 xl:pt-32 bg-secondary/5 pb-20" id="services">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <Pretitle text="Our Practice Areas" center />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Legal Solutions</h2>
          <p className="text-muted-foreground">
            Merging deep local expertise in Saudi Law with international legal standards.
          </p>
        </motion.div>
        
        {/* Tabs */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <Tabs
            defaultValue="litigation"
            onValueChange={(value) => setActiveTab(value)}
            className="flex flex-col xl:flex-row w-full gap-y-8 md:gap-0"
          >
            <TabsList className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-4 md:gap-0 w-full xl:w-[350px] bg-transparent p-0">
              {serviceData.map((item) => (
                <TabsTrigger
                  key={item.name}
                  value={item.name}
                  className="w-full h-24 flex items-center justify-start px-6 gap-4 bg-background border border-border/50 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground data-[state=active]:border-accent transition-all duration-300"
                >
                  <item.icon className="text-3xl"/>
                  <span className="font-semibold text-lg">{item.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Content */}
            <div className="flex-1 bg-background border border-border/50 p-8 min-h-[500px]">
              {serviceData.map((item) => (
                <TabsContent key={item.name} value={item.name} className="m-0 h-full">
                  <motion.div
                    variants={fadeInVariant}
                    initial="hidden"
                    whileInView="show"
                    exit="hidden"
                    className="flex flex-col h-full"
                  >
                    <div className="flex-1">
                        <h3 className="text-3xl font-bold mb-6 text-foreground">{item.title}</h3>
                        <p className="mb-8 text-lg text-muted-foreground">{item.description}</p>
                        
                        <div className="bg-secondary/10 p-6 rounded-lg mb-8">
                            <h4 className="font-semibold mb-4 text-accent-foreground">Key Services:</h4>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {item.serviceList.map((service, index) => (
                                <li key={index} className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-accent rounded-full"></div>
                                <span className="text-foreground/80">{service}</span>
                                </li>
                            ))}
                            </ul>
                        </div>
                    </div>
                    
                    <div className="mt-auto pt-6 border-t border-border/20">
                         <Button text="Request Consultation" />
                    </div>
                  </motion.div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
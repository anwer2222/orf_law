"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Button from "./Button";
import { PiGavelFill, PiScrollFill, PiBuildingsFill, PiGlobeFill } from "react-icons/pi";
import Pretitle from "./Pretitle";
import { motion } from "framer-motion";
import { fadeIn } from "@/../public/assets/variants";

import { useLanguage } from '@/context/LanguageContext';
// import { cn } from "@/lib/utils";

const fadeInVariant = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.2, delay: 0.1 } },
};

const Services = () => {
  const { t, dir, lang } = useLanguage();
  const [activeTab, setActiveTab] = useState("litigation");

  // Mapping icons to keys
  const icons = {
    litigation: PiGavelFill,
    consultation: PiScrollFill,
    corporate: PiBuildingsFill,
    international: PiGlobeFill
  };
  const thumbs = {
    litigation: [
      { url: "/assets/img/services/thumb-1.jpg" }, 
      { url: "/assets/img/services/thumb-2.jpg" },
    ],
    consultation: [
      { url: "/assets/img/services/thumb-3.jpg" },
      { url: "/assets/img/services/thumb-4.jpg" },
    ],
    corporate: [
      { url: "/assets/img/services/thumb-5.jpg" },
      { url: "/assets/img/services/thumb-6.jpg" },
    ],
    international: [
      { url: "/assets/img/services/thumb-7.jpg" },
      { url: "/assets/img/services/thumb-8.jpg" },
    ],
  };

  const serviceKeys:("litigation"| "consultation"| "corporate"| "international")[] = ["litigation", "consultation", "corporate", "international"];

  return (
    <section className="pt-16 xl:pt-32 bg-secondary/5" id="services">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="text-center max-w-135 mx-auto mb-20"
        >
          <Pretitle text={t.services.pretitle} lang={lang} center />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.services.title}</h2>
          <p className="text-muted-foreground">
          {t.services.subtitle}
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
            className="flex flex-col xl:flex-row w-full gap-y-100 md:gap-0"
            dir={dir}
          >
            <TabsList className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-1 gap-3 md:gap-7.5 md:h-full w-full xl:w-100 rounded-none p-0 bg-transparent">
              {serviceKeys.map((key) => {
                const Icon = icons[key as keyof typeof icons];
                return ( <TabsTrigger
                  key={key}
                  value={key}
                  // Added 'border-b xl:border-b-0' so they have a line between them on mobile since they now touch
                  // className="w-full rounded-none h-25 flex items-center relative shadow-sm bg-card p-0 outline-none border-b border-border/10 last:border-none xl:border-none data-[state=active]:ring-2 ring-accent"
                  // Added text-start to align Arabic text correctly
                  className="w-full h-24 flex items-center justify-start px-6 gap-4 bg-background border border-border/50 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground data-[state=active]:border-accent transition-all duration-300"
                  >
                  <Icon className="text-3xl"/>
                  <span className="font-semibold text-lg text-start">
                      {t.services.tabs[key as keyof typeof t.services.tabs]}
                  </span>
                  </TabsTrigger>

            )})}
            </TabsList>

            {/* Content */}
            <div className="flex-1 bg-card text-card-foreground shadow-md h-auto xl:h-122.5 p-7.5">
            {serviceKeys.map((key) => {
                 const content = t.services.content[key];
                 return (
                <TabsContent key={key} value={key} className="m-0 h-full">
                  <motion.div
                    variants={fadeInVariant}
                    initial="hidden"
                    whileInView="show"
                    exit="hidden"
                    className="flex flex-col md:flex-row gap-7.5 h-full"
                  >
                    {/* Images */}
                    <div className="flex md:flex-col gap-5 xl:gap-7.5">
                      {thumbs[key].map((thumb, index) => (
                        <div
                          key={index}
                          className="relative w-35 xl:w-50 h-35 xl:h-50 overflow-hidden"
                        >
                          <Image src={thumb.url} fill alt="" className="object-cover" />
                        </div>
                      ))}
                    </div>
                    
                    {/* Text & Button */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="h3 mb-6">{content.title}</h3>
                        <p className="mb-10 text-muted-foreground">{content.description}</p>
                        
                        <ul className="grid grid-cols-2 gap-4 mb-12">
                          {content.list.map((service, index) => (
                            <li key={index} className="flex items-center gap-4">
                              <div className="w-1.5 h-1.5 bg-accent-foreground rounded-full"></div>
                              <div className="capitalize font-medium text-card-foreground">
                                {service}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button text={t.services.cta} dir={dir} />
                    </div>
                  </motion.div>
                </TabsContent>
            )})}
            </div>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
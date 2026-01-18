"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import CountUp from "react-countup";
import { StatItem } from "@/types";
import { useLanguage } from "@/context/LanguageContext";
// Adapted metrics for a Law Firm context

const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const { t, dir } = useLanguage();
 // Defined inside the component to access 't'
 const statsData: StatItem[] = [
  {
    endCountNum: 25,
    endCountText: "+",
    text: t.stats.experience,
  },
  {
    endCountNum: 850,
    endCountText: "+",
    text: t.stats.cases,
  },
  {
    endCountNum: 98,
    endCountText: "%",
    text: t.stats.satisfaction,
  },
  {
    endCountNum: 5,
    endCountText: "",
    text: t.stats.affiliations,
  },
];
  return (
    <section ref={ref} className="mt-16 xl:mt-32 bg-primary py-12 w-full">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between xl:flex-row gap-12 text-center xl:text-left">
          {statsData.map((item, index) => (
            <div className="w-full flex flex-col items-center justify-center" key={index}>
              {/* For RTL: The flex-row ensures the number and suffix (like + or %) 
                 stay together correctly. In Arabic, symbols like % usually 
                 go to the left of the number, but 'flex-row' handles standard display well.
              */}
              <div 
                className={`text-5xl font-bold text-accent mb-2 flex items-center justify-center ${dir === 'rtl' ? 'flex-row-reverse' : 'flex-row'}`}
              >
                {inView && (
                  <CountUp 
                    start={0} 
                    end={item.endCountNum} 
                    delay={0.2} 
                    duration={3} 
                  />
                )}
                <span>{item.endCountText}</span>
              </div>
              <p className="text-primary-foreground/80 font-medium tracking-wide uppercase text-sm">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
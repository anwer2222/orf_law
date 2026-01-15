"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import CountUp from "react-countup";
import { StatItem } from "@/types";

// Adapted metrics for a Law Firm context
const statsData: StatItem[] = [
  {
    endCountNum: 15,
    endCountText: "+",
    text: "Years of Experience",
  },
  {
    endCountNum: 450,
    endCountText: "+",
    text: "Successful Cases",
  },
  {
    endCountNum: 98,
    endCountText: "%",
    text: "Client Satisfaction",
  },
  {
    endCountNum: 5,
    endCountText: "",
    text: "Intl. & Local Affiliations",
  },
];

const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section ref={ref} className="mt-16 xl:mt-32 bg-primary py-12 w-full">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between xl:flex-row gap-12 text-center xl:text-left">
          {statsData.map((item, index) => (
            <div className="w-full flex flex-col items-center justify-center" key={index}>
              <div className="text-5xl font-bold text-accent mb-2">
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
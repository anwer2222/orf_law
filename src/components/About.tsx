"use client";

import Button from "./Button";
import Pretitle from "./Pretitle";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/../public/assets/variants";
import { RiCheckDoubleFill } from "react-icons/ri";
import { useLanguage } from '@/context/LanguageContext';


const About = () => {
  const { t, dir, lang } = useLanguage();

  return (
    <section className="pt-16 md:pt-32 px-3" id="about">
      <div className="container mx-auto">
      <div className="flex flex-col gap-12 xl:gap-0 xl:flex-row xl:items-center">
          
          {/* Text Section */}
          <div className="flex-1">
            <motion.div
              variants={fadeIn(dir === 'rtl' ? "left" : "right", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="max-w-135 pl-10"
            >
              <Pretitle text={t.about.pretitle} lang={lang}/>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              {t.about.title}
              </h2>
              <p className="mb-8 text-muted-foreground leading-relaxed">
              {t.about.description}
              </p>
              
              {/* Credentials List */}
              <div className="grid grid-cols-1 gap-4 mb-10">
                {t.about.credentials.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <RiCheckDoubleFill className="text-accent-foreground text-xl shrink-0" />
                    <p className="text-foreground font-medium">{item}</p>
                  </div>
                ))}
              </div>

              <div className="w-max-135 flex flex-col text-left mb-10 pl-4 border-l-4 border-accent">
                 <p className="text-xl font-bold italic text-foreground">"{t.about.quote}"</p>
              </div>

              <Button text={t.about.cta} dir={dir}/>
            </motion.div>
          </div>

          {/* Image Section */}
          <motion.div
            variants={fadeIn(dir === 'rtl' ? "right" : "left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="flex-1 xl:flex xl:justify-center"
          >
            <div className="xl:w-111 xl:h-123.25 relative">
              <div className="hidden xl:flex w-111 h-123.25 bg-accent absolute -top-4 -left-4 -z-10"></div>
              <Image 
                src={"/assets/img/about/img.jpg"} // Suggestion: Use an image of a lawyer or the office
                width={444} 
                height={493} 
                alt="Al-Orf Legal Team"
                className="object-cover rounded-lg shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
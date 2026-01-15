"use client";

import Button from "./Button";
import { motion } from "framer-motion";
import { fadeIn } from "@/../public/assets/variants";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="h-[80vh] bg-no-repeat bg-cover bg-center relative">
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/assets/img/hero/bg.jpg" // Suggestion: Use a photo of a gavel, scales of justice, or modern Madinah architecture
          alt="Al-Orf Law Office"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-brightness-75 z-10"></div>
      </div>
      
      <div className="container mx-auto h-full flex items-center relative z-20">
        <div className="text-white text-center xl:text-left mx-auto xl:mx-0 flex flex-col items-center xl:items-start max-w-2xl">
          <motion.h1
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.8 }}
            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
          >
            <span className="text-accent">Justice</span> Served With <br/> Integrity & Precision
          </motion.h1>

          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.8 }}
            className="mb-9 text-lg text-white/90 font-light max-w-lg"
          >
            A premier legal consultancy in Madinah, licensed by the Ministry of Justice and affiliated with the International Court of Dispute Resolution.
          </motion.p>

          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.8 }}
          >
            <Button text="Free Consultation" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
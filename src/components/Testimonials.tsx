"use client";

import Image from "next/image";
import Button from "./Button";
import Pretitle from "./Pretitle";
import Slider from "./Slider";
import { motion } from "framer-motion";
import { fadeIn } from "@/../public/assets/variants";
import { useLanguage } from "@/context/LanguageContext";

const Testimonials = () => {
  const { t, dir } = useLanguage();
  return (
    <section className="pt-16 xl:pt-32 px-5" id="testimonials">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row relative gap-12 xl:gap-0">
          {/* Text Section */}
          <motion.div
            // Animation slides from the "start" side based on language
            variants={fadeIn(dir === "rtl" ? "left" : "right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="flex-1 max-w-121 xl:pt-13.5 mb-12 xl:mb-0"
          >
            <Pretitle text={t.testimonials.pretitle} />
            <h2 className="h2 mb-6 text-foreground">{t.testimonials.title}</h2>
            <p className="mb-10 max-w-105 text-muted-foreground">
              {t.testimonials.description}
            </p>
            <Button text={t.testimonials.cta} dir={dir} />
          </motion.div>

          {/* Image & Slider Section */}
          <motion.div
            variants={fadeIn(dir === "rtl" ? "right" : "left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="flex-1"
          >
            {/* Main Large Image */}
            <div className="relative hidden xl:flex xl:w-142.5 xl:h-145 rounded-lg overflow-hidden">
              <Image
                src="/assets/img/testimonials/img.jpg" // Suggestion: Image of a consultation or boardroom
                fill
                className="object-cover"
                quality={100}
                alt="Al-Orf Client Meeting"
              />
            </div>

            {/* Slider Container Overlay */}
            <motion.div
              variants={fadeIn(dir === "rtl" ? "right" : "left", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              // Position adjustments: use inset-inline-end instead of right for better RTL support
              className="xl:absolute xl:bottom-0 xl:inline-end-40 relative max-w-max bg-transparent"
            >
              {/* Quote Icon - Positioned at the start of the block */}
              <div className={`absolute -top-8 ${dir === "rtl" ? "right-5" : "left-5"} z-20`}>
                <Image
                  src="/assets/img/testimonials/quote.svg"
                  width={54}
                  height={36}
                  alt="quote"
                  className="drop-shadow-md text-accent"
                />
              </div>
              <Slider />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
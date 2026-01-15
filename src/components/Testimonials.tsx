"use client";

import Image from "next/image";
import Button from "./Button";
import Pretitle from "./Pretitle";
import Slider from "./Slider";
import { motion } from "framer-motion";
import { fadeIn } from "@/../public/assets/variants";

const Testimonials = () => {
  return (
    <section className="pt-16 xl:pt-32 px-5" id="testimonials">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row relative gap-12 xl:gap-0">
          {/* Text Section */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="flex-1 max-w-121 xl:pt-13.5 mb-12 xl:mb-0"
          >
            <Pretitle text="Client Stories" />
            <h2 className="h2 mb-6 text-foreground">Defending Rights, Delivering Results</h2>
            <p className="mb-10 max-w-105 text-muted-foreground">
              Our reputation in Madinah is built on trust, integrity, and a relentless pursuit of justice. 
              We take pride in the peace of mind we bring to our clients, whether navigating complex commercial disputes or sensitive personal matters.
            </p>
            <Button text="Schedule Consultation" />
          </motion.div>

          {/* Image & Slider Section */}
          <motion.div
            variants={fadeIn("left", 0.2)}
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
              variants={fadeIn("left", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="xl:absolute xl:bottom-0 xl:right-40 relative max-w-max bg-transparent"
            >
              {/* Quote Icon */}
              <div className="absolute -top-8 left-5 z-20">
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
"use client";

import Button from "./Button";
import Pretitle from "./Pretitle";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/../public/assets/variants";
import { RiCheckDoubleFill } from "react-icons/ri";

const credentials = [
  "Licensed by Ministry of Justice (Wazarh Al-Adil)",
  "Member of Saudi Commission for Lawyers",
  "Affiliated with Equity College London",
  "Member of the International Court of Dispute Resolution",
  "Specialized in SA Law",
];

const About = () => {
  return (
    <section className="pt-16 md:pt-32 px-3" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col gap-12 xl:gap-20 xl:flex-row xl:items-center">
          
          {/* Text Section */}
          <div className="flex-1 order-2 xl:order-1">
            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
            >
              <Pretitle text="Who We Are" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Al-Orf Organizer Law & Legal Consultation
              </h2>
              <p className="mb-8 text-muted-foreground leading-relaxed">
                Based in Madinah, Saudi Arabia, we provide comprehensive legal solutions tailored to both local regulations and international standards. Our firm is built on a foundation of deep legal knowledge and prestigious international affiliations.
              </p>
              
              {/* Credentials List */}
              <div className="grid grid-cols-1 gap-4 mb-10">
                {credentials.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <RiCheckDoubleFill className="text-accent text-xl flex-shrink-0" />
                    <p className="text-foreground font-medium">{item}</p>
                  </div>
                ))}
              </div>

              <div className="w-max flex flex-col text-left mb-10 pl-4 border-l-4 border-accent">
                 <p className="text-xl font-bold italic text-foreground">"We believe that justice and law should provide relief to the grieved and fairness in all agreements."</p>
              </div>

              <Button text="Contact Us" />
            </motion.div>
          </div>

          {/* Image Section */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="flex-1 xl:flex xl:justify-center order-1 xl:order-2"
          >
            <div className="relative w-full max-w-md h-125">
              <div className="hidden xl:flex w-full h-full bg-accent/10 absolute -top-6 -right-6 -z-10 rounded-lg"></div>
              <Image 
                src={"/assets/img/about/img.jpg"} // Suggestion: Use an image of a lawyer or the office
                fill
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
"use client";

import { RiChat1Line, RiMapPin2Line, RiSmartphoneLine } from "react-icons/ri";
import Socials from "./Socials";
import Form from "./Form";
import { motion } from "framer-motion";
import { fadeIn } from "@/../public/assets/variants";

const Content = () => {
  return (
    <section className="pt-16 xl:pt-32 pb-16" id="contact">
      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="container mx-auto"
      >
        <div className="w-full xl:min-h-[600px] shadow-lg bg-card p-4 xl:p-8 xl:px-20 xl:py-9 border-t-4 border-accent rounded-sm">
          <div className="flex flex-col xl:flex-row h-full gap-10 xl:gap-20">
            {/* Info Section */}
            <div className="w-full xl:max-w-[400px] xl:pr-10 xl:border-r xl:border-border/40 h-full flex flex-col">
              <h4 className="text-[26px] font-primary font-bold mb-6 text-card-foreground">
                Visit Our Office
              </h4>
              <p className="mb-9 text-muted-foreground">
                Justice cannot wait. Whether you need immediate representation or long-term counsel, our team in Madinah is ready to assist you.
              </p>

              <div className="flex flex-col gap-10 mb-auto">
                {/* Email */}
                <div className="flex items-start gap-5">
                  <RiChat1Line className="text-accent text-4xl shrink-0" />
                  <div>
                    <h5 className="text-[20px] font-semibold font-primary leading-none mb-2 text-card-foreground">
                      Email
                    </h5>
                    <p className="mb-1 text-muted-foreground text-sm">Case inquiries & appointments</p>
                    <p className="font-semibold text-primary">info@al-orf-law.com</p>
                  </div>
                </div>
                
                {/* Address */}
                <div className="flex items-start gap-5">
                  <RiMapPin2Line className="text-accent text-4xl shrink-0" />
                  <div>
                    <h5 className="text-[20px] font-semibold font-primary leading-none mb-2 text-card-foreground">
                      Location
                    </h5>
                    <p className="mb-1 text-muted-foreground text-sm">Madinah, Saudi Arabia</p>
                    <p className="font-semibold text-primary">Al-Orf Legal Office</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-5">
                  <RiSmartphoneLine className="text-accent text-4xl shrink-0" />
                  <div>
                    <h5 className="text-[20px] font-semibold font-primary leading-none mb-2 text-card-foreground">
                      Phone
                    </h5>
                    <p className="mb-1 text-muted-foreground text-sm">Sun-Thu from 9am to 5pm</p>
                    <p className="font-semibold text-primary">+966 5x xxx xxxx</p>
                  </div>
                </div>
                
                <Socials containerStyles="flex gap-[30px] mt-8" iconStyles="text-muted-foreground hover:text-accent transition-all text-3xl" />
              </div>

            </div>

            {/* Form Section */}
            <div className="flex-1 my-auto">
              <h2 className="h2 mb-3 text-card-foreground">Request Consultation</h2>
              <p className="mb-9 text-muted-foreground">
                Fill out the form below to schedule a confidential discussion about your legal requirements.
              </p>
              <Form />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Content;
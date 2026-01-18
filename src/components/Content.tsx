"use client";

import { RiChat1Line, RiMapPin2Line, RiSmartphoneLine } from "react-icons/ri";
import Socials from "./Socials";
import Form from "./Form";
import { motion } from "framer-motion";
import { fadeIn } from "@/../public/assets/variants";
import { useLanguage } from "@/context/LanguageContext";

const Content = () => {
  const { t, dir } = useLanguage();

  return (
    <section className="pt-16 xl:pt-32 pb-16" id="contact">
      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="container mx-auto"
      >
        <div className="w-full xl:min-h-150 shadow-lg bg-card p-4 xl:p-8 xl:px-20 xl:py-9 border-t-4 border-accent-foreground rounded-sm">
          <div className="flex flex-col xl:flex-row h-full gap-10 xl:gap-20">
            {/* Info Section */}
            <div className={`w-full xl:max-w-100 xl:pe-10 h-full flex flex-col ${dir === 'rtl' ? 'xl:border-l' : 'xl:border-r'} xl:border-border/40`}>
              <h4 className="text-[26px] font-primary font-bold mb-6 text-card-foreground">
                {t.contact.info_title}
              </h4>
              <p className="mb-9 text-muted-foreground">
                {t.contact.info_subtitle}
              </p>

              <div className="flex flex-col gap-10 mb-auto">
                <div className="flex items-start gap-5">
                  <RiChat1Line className="text-accent-foreground text-4xl shrink-0" />
                  <div>
                    <h5 className="text-[20px] font-semibold font-primary leading-none mb-2 text-card-foreground">
                      {t.contact.email_label}
                    </h5>
                    <p className="mb-1 text-muted-foreground text-sm">{t.contact.email_sub}</p>
                    <p className="font-semibold text-primary">info@al-orf-law.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5">
                  <RiMapPin2Line className="text-accent-foreground text-4xl shrink-0" />
                  <div>
                    <h5 className="text-[20px] font-semibold font-primary leading-none mb-2 text-card-foreground">
                      {t.contact.location_label}
                    </h5>
                    <p className="mb-1 text-muted-foreground text-sm">{t.contact.location_sub}</p>
                    <p className="font-semibold text-primary">Al-Orf Legal Office</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <RiSmartphoneLine className="text-accent-foreground text-4xl shrink-0" />
                  <div>
                    <h5 className="text-[20px] font-semibold font-primary leading-none mb-2 text-card-foreground">
                      {t.contact.phone_label}
                    </h5>
                    <p className="mb-1 text-muted-foreground text-sm">{t.contact.phone_sub}</p>
                    <p className="font-semibold text-primary" dir="ltr">{t.topbar.phone}</p>
                  </div>
                </div>
                
                <Socials containerStyles="flex gap-[30px] mt-8" iconStyles="text-muted-foreground hover:text-accent-foreground transition-all text-3xl" />
              </div>
            </div>

            {/* Form Section */}
            <div className="flex-1 my-auto">
              <h2 className="h2 mb-3 text-card-foreground">{t.contact.title}</h2>
              <p className="mb-9 text-muted-foreground">
                {t.contact.subtitle}
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
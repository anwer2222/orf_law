"use client";

import Pretitle from "./Pretitle";
import FaqItem from "./FaqItem";
import { motion } from "framer-motion";
import { fadeIn } from "@/../public/assets/variants";
import { useLanguage } from "@/context/LanguageContext";

const faqItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1, 
    y: 0, 
    transition: { delay: index * 0.1, duration: 0.3 }
  })
};

const Faq = () => {
  const { t, lang } = useLanguage();

  return (
    <section className="pt-16 xl:pt-32 mb-16 xl:mb-32" id="faq">
      <div className="container mx-auto">
        {/* Text */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="text-center max-w-2xl mx-auto xl:mb-16"
        >
          <Pretitle text={t.faq.pretitle} lang={lang} center />
          <h2 className="h2 mb-4">{t.faq.title}</h2>
          <p className="text-muted-foreground">
            {t.faq.description}
          </p>
        </motion.div>
        
        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto bg-card p-6 xl:p-10 shadow-sm rounded-lg border border-border/50">
          <ul className="flex flex-col">
            {t.faq.items.map((item, index) => (
              <motion.li
                variants={faqItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                custom={index}
                key={index}
              >
                <FaqItem title={item.title} description={item.description} />
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Faq;
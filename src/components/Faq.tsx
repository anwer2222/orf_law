"use client";

import Pretitle from "./Pretitle";
import FaqItem from "./FaqItem";
import { motion } from "framer-motion";
import { fadeIn } from "@/../public/assets/variants";
import { FaqItemData } from "@/types";

// Adapted for Law Firm Context
const faqItemsData: FaqItemData[] = [
  {
    title: "What documents should I bring to my first consultation?",
    description: "To make the most of our meeting, please bring any relevant contracts, court notices, correspondence, or identification documents related to your case. The more details you provide, the better we can assess your situation.",
  },
  {
    title: "Do you handle international legal disputes?",
    description: "Yes. Our affiliation with the International Court of Dispute Resolution and Equity College London allows us to effectively represent clients in cross-border disputes and international arbitration matters.",
  },
  {
    title: "Is my consultation confidential?",
    description: "Absolutely. We adhere to the strictest standards of client confidentiality as mandated by the Saudi Ministry of Justice and international legal ethics. Your privacy and trust are our top priorities.",
  },
  {
    title: "Can you assist with business setup in Madinah?",
    description: "Yes, we specialize in corporate law. We can assist with company formation, drafting Articles of Association, and ensuring full compliance with Saudi commercial regulations and labor laws.",
  },
  {
    title: "How are your legal fees determined?",
    description: "We believe in transparency. Our fees are based on the complexity of the case and the type of service required (consultation vs. litigation). We will provide a clear fee structure and agreement before commencing any work.",
  },
];

const faqItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1, 
    y: 0, 
    transition: { delay: index * 0.1, duration: 0.3 }
  })
};

const Faq = () => {
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
          <Pretitle text="Common Questions" center />
          <h2 className="h2 mb-4">Legal Clarity</h2>
          <p className="text-muted-foreground">
            Navigating the legal system can be complex. Here are answers to the most common questions we receive about our practice and process.
          </p>
        </motion.div>
        
        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto bg-card p-6 xl:p-10 shadow-sm rounded-lg border border-border/50">
          <ul className="flex flex-col">
            {faqItemsData.map((item, index) => (
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
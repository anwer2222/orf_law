"use client";

import Image from "next/image";
import Link from "next/link";
import { RiMapPin2Fill, RiPhoneFill, RiMailFill, RiArrowRightLine } from "react-icons/ri";
import Socials from "./Socials";
import { motion } from "framer-motion";
import { fadeIn } from "@/../public/assets/variants";

const Footer = () => {
  return (
    <motion.footer
      variants={fadeIn("up", 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className="mt-16 xl:mt-32 bg-primary text-primary-foreground pt-16 px-5"
    >
      <div className="container mx-auto">
        <div className="pb-16 flex flex-col xl:flex-row gap-15 xl:gap-10">
          {/* Brand & Credentials */}
          <div className="flex-1">
            <Link href="/" className="flex flex-col mb-6">
               <h3 className="text-3xl font-bold text-accent tracking-wider">AL-ORF</h3>
               <span className="text-xs uppercase tracking-[0.2em] text-white/60">Law & Legal Consultation</span>
            </Link>
            <p className="text-primary-foreground/70 max-w-[300px] mb-6 leading-relaxed">
              Defending rights with integrity. Licensed by the Ministry of Justice and affiliated with the International Court of Dispute Resolution.
            </p>
          </div>

          {/* Quick Contact */}
          <div className="flex-1">
            <h4 className="h4 text-primary-foreground mb-10">Contact Us</h4>
            <ul className="flex flex-col gap-6">
              <li className="flex items-center gap-4">
                <RiMapPin2Fill className="text-accent text-xl" />
                <p className="text-primary-foreground/80">Madinah, Saudi Arabia</p>
              </li>
              <li className="flex items-center gap-4">
                <RiPhoneFill className="text-accent text-xl" />
                <p className="text-primary-foreground/80">+966 5x xxx xxxx</p>
              </li>
              <li className="flex items-center gap-4">
                <RiMailFill className="text-accent text-xl" />
                <p className="text-primary-foreground/80">info@al-orf-law.com</p>
              </li>
            </ul>
          </div>

          {/* Newsletter / Updates */}
          <div className="flex-1">
            <h4 className="h4 text-primary-foreground mb-10">Legal Insights</h4>
            <p className="mb-9 text-primary-foreground/70">
              Subscribe to receive updates on Saudi Law regulations and firm news.
            </p>
            <div className="relative max-w-[350px]">
              <input
                type="text"
                placeholder="Enter your email"
                className="bg-background/10 h-16 w-full pl-7 text-primary-foreground placeholder:text-white/50 border border-white/10 rounded-none outline-none focus:border-accent transition-all"
              />
              <button className="bg-accent w-12 h-12 absolute right-2 top-2 bottom-2 text-accent-foreground text-xl flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                <RiArrowRightLine />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-black/20 py-8 border-t border-white/5">
        <div className="container mx-auto flex flex-col gap-4 text-center xl:text-left">
           <div className="flex flex-col xl:flex-row items-center justify-between gap-6">
              <p className="text-primary-foreground/60 text-sm">
                Copyright &copy; 2026 Al-Orf Law Firm. All rights reserved.
              </p>
              <Socials containerStyles="flex gap-6 text-white" iconStyles="hover:text-accent transition-all text-xl" />
           </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
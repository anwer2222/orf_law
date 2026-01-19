"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
// 1. Add to the Type definition
type TestimonialItem = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

type FaqItem = {
  title: string;
  description: string;
};

// --- Translation Data ---
type Translations = {
  topbar: {
    location: string;
    hours: string;
    phone: string;
  };
  header: {
    home: string;
    about: string;
    services: string;
    testimonials: string;
    contact: string;
    title: string;
    subtitle: string;
    
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  about: {
    pretitle: string;
    title: string;
    description: string;
    credentials: string[];
    quote: string;
    cta: string;
  };
  stats: {
    experience: string;
    cases: string;
    satisfaction: string;
    affiliations: string;
  };
  services: {
    pretitle: string;
    title: string;
    subtitle: string;
    tabs: {
        litigation: string;
        consultation: string;
        corporate: string;
        international: string;
    };
    content: {
        [key: string]: {
            title: string;
            description: string;
            key_services_title: string;
            list: string[];
        }
    };
    cta: string;
  };
  testimonials: {
    pretitle: string;
    title: string;
    description: string;
    cta: string;
  };
  slider: TestimonialItem[];
  faq: {
    pretitle: string;
    title: string;
    description: string;
    items: FaqItem[];
  };
  contact: {
    title: string;
    subtitle: string;
    info_title: string;
    info_subtitle: string;
    email_label: string;
    email_sub: string;
    location_label: string;
    location_sub: string;
    phone_label: string;
    phone_sub: string;
    form: {
      name: string;
      email: string;
      phone: string;
      service_placeholder: string;
      service_label: string;
      message_placeholder: string;
      cta: string;
      services: {
        consultation: string;
        litigation: string;
        arbitration: string;
        corporate: string;
        contracts: string;
        other: string;
      };
    };
  };
  footer: {
    about: string;
    links_title: string;
    contact_title: string;
    newsletter_title: string;
    newsletter_desc: string;
    newsletter_placeholder: string;
    copyright: string;
    address: string;
  };
};


const translations: { ar: Translations; en: Translations } = {
  ar: {
    topbar: {
      location: "المدينة المنورة، المملكة العربية السعودية",
      hours: "الأحد - الخميس: ٩:٠٠ ص - ٥:٠٠ م",
      phone: "9665xxxxxxxx"
    },
    header: {
      home: "الرئيسية",
      about: "عن مكتبنا",
      services: "مجالاتنا القانونية",
      testimonials: "عملاؤنا",
      contact: "تواصل معنا",
      title: "العُرف",
      subtitle: "للمحاماة والاستشارات القانونية",
    },
    hero: {
      title: "العدالة تتحقق.. \nبنزاهة وإتقان",
      subtitle: "مكتب العُرف في المدينة المنورة، مرخص من وزارة العدل وعضو في المحكمة الدولية لتسوية المنازعات.",
      cta: "طلب استشارة مجانية",
    },
    about: {
      pretitle: "من نحن",
      title: "مكتب العُرف للمحاماة والاستشارات",
      description: "مقرنا في المدينة المنورة، المملكة العربية السعودية. نقدم حلولاً قانونية شاملة تتوافق مع الأنظمة المحلية والمعايير الدولية. يرتكز عملنا على معرفة قانونية عميقة وشراكات دولية مرموقة.",
      credentials: [
        "مرخص من وزارة العدل السعودية",
        "عضو الهيئة السعودية للمحامين",
        "بالتعاون مع كلية إيكويتي لندن (Equity College London)",
        "عضو المحكمة الدولية لتسوية المنازعات",
        "متخصصون في الأنظمة السعودية",
      ],
      quote: "نؤمن بأن العدالة والقانون هما الملاذ لإنصاف المظلوم وضمان الحقوق في كافة الاتفاقيات.",
      cta: "تواصل معنا",
    },
    stats: {
      experience: "سنوات من الخبرة",
      cases: "قضية ناجحة",
      satisfaction: "رضا العملاء",
      affiliations: "عضويات محلية ودولية",
    },
    services: {
        pretitle: "مجالاتنا القانونية",
        title: "حلول قانونية شاملة",
        subtitle: "نجمع بين الخبرة المحلية العميقة في النظام السعودي والمعايير القانونية الدولية.",
        tabs: {
            litigation: "التقاضي والنزاعات",
            consultation: "الاستشارات القانونية",
            corporate: "الشركات والأعمال",
            international: "القانون الدولي",
        },
        content: {
            litigation: {
                title: "التقاضي وتسوية النزاعات",
                description: "تمثيل العملاء في النزاعات القانونية المعقدة. بصفتنا أعضاء في المحكمة الدولية لتسوية المنازعات، نجلب استراتيجيات تحكيم عالمية للقضايا المحلية.",
                key_services_title: "أبرز الخدمات:",
                list: ["التقاضي المدني", "النزاعات التجارية", "التحكيم", "الوساطة", "التمثيل القضائي", "مفاوضات التسوية"]
            },
            consultation: {
                title: "الاستشارات القانونية",
                description: "خدمات استشارية متخصصة تستند إلى الأنظمة السعودية ولوائح وزارة العدل. نساعدك على تجاوز التعقيدات القانونية قبل أن تتحول إلى مشكلات.",
                key_services_title: "أبرز الخدمات:",
                list: ["مراجعة العقود", "الآراء القانونية", "تدقيق الامتثال", "المشورة التنظيمية", "تقييم المخاطر", "صياغة الوثائق"]
            },
            corporate: {
                title: "الشركات والقانون التجاري",
                description: "دعم قانوني شامل للشركات في المدينة المنورة وخارجها. من التأسيس إلى الاندماج، نحمي مصالحك التجارية.",
                key_services_title: "أبرز الخدمات:",
                list: ["تأسيس الشركات", "الاندماج والاستحواذ", "نظام العمل", "الملكية الفكرية", "العقود التجارية", "حوكمة الشركات"]
            },
            international: {
                title: "القانون الدولي",
                description: "نستفيد من تعاوننا مع كلية إيكويتي لندن للتعامل مع المسائل القانونية العابرة للحدود وقضايا التحكيم الدولي.",
                key_services_title: "أبرز الخدمات:",
                list: ["التحكيم الدولي", "العقود العابرة للحدود", "الاستثمار الأجنبي", "التجارة الدولية", "فض النزاعات", "الامتثال العالمي"]
            }
        },
        cta: "اطلب استشارة"
    },
    testimonials: {
      pretitle: "قصص النجاح",
      title: "دفاعٌ عن الحقوق.. تحقيقٌ للنتائج",
      description: "سمعتنا في المدينة المنورة مبنية على الثقة والنزاهة والسعي الدؤوب لتحقيق العدالة. نحن نفخر براحة البال التي نقدمها لعملائنا، سواء في النزاعات التجارية المعقدة أو القضايا الشخصية الحساسة.",
      cta: "حدد موعدًا للاستشارة",
    },
    slider: [
      {
        quote: "كان إدراكهم للأنظمة الدولية والقانون السعودي مثيرًا للإعجاب. لقد أداروا إعادة الهيكلة القانونية لشركتنا بدقة متناهية وسرية تامة.",
        name: "أحمد السيد",
        role: "الرئيس التنفيذي، شركة فيوتشر تريد",
        avatar: "/assets/img/testimonials/avatar-1.jpg"
      },
      {
        quote: "كنت بحاجة إلى مكتب يفهم تسوية النزاعات المعقدة. دافع فريق العُرف عن حقوقي بنزاهة وضمنوا نتيجة لصالحي رغم كل الصعوبات.",
        name: "سارة الحمد",
        role: "عميلة",
        avatar: "/assets/img/testimonials/avatar-2.jpg"
      },
      {
        quote: "الاحترافية في أبهى صورها هنا في المدينة المنورة. من الاستشارة الأولى إلى الاتفاق النهائي، كان توجيههم واضحًا وصادقًا وسليمًا قانونيًا.",
        name: "محمد راشد",
        role: "عميل - تخطيط العقارات",
        avatar: "/assets/img/testimonials/avatar-3.jpg"
      }
    ],
    faq: {
      pretitle: "الأسئلة الشائعة",
      title: "وضوح قانوني",
      description: "التنقل في النظام القانوني قد يكون معقدًا. إليك إجابات على الأسئلة الأكثر شيوعًا التي نتلقاها حول ممارساتنا وعملياتنا.",
      items: [
        {
          title: "ما هي الوثائق التي يجب أن أحضرها في استشارتي الأولى؟",
          description: "لتحقيق أقصى استفادة من اجتماعنا، يرجى إحضار أي عقود ذات صلة، أو إخطارات محكمة، أو مراسلات، أو وثائق هوية تتعلق بقضيتك. كلما قدمت تفاصيل أكثر، تمكنا من تقييم وضعك بشكل أفضل.",
        },
        {
          title: "هل تتعاملون مع النزاعات القانونية الدولية؟",
          description: "نعم. إن انتسابنا إلى المحكمة الدولية لتسوية المنازعات وكلية إيكويتي لندن يسمح لنا بتمثيل العملاء بفعالية في النزاعات العابرة للحدود ومسائل التحكيم الدولي.",
        },
        {
          title: "هل استشارتي سرية؟",
          description: "بكل تأكيد. نحن نلتزم بأشد معايير سرية العميل كما تفرضها وزارة العدل السعودية وأخلاقيات المهنة القانونية الدولية. خصوصيتك وثقتك هي أولويتنا القصوى.",
        },
        {
          title: "هل يمكنك المساعدة في تأسيس الأعمال في المدينة المنورة؟",
          description: "نعم، نحن متخصصون في قانون الشركات. يمكننا المساعدة في تأسيس الشركات، وصياغة عقود التأسيس، وضمان الامتثال الكامل للأنظمة التجارية السعودية وقوانين العمل.",
        },
        {
          title: "كيف يتم تحديد الأتعاب القانونية؟",
          description: "نحن نؤمن بالشفافية. تعتمد أتعابنا على تعقيد القضية ونوع الخدمة المطلوبة (استشارة مقابل تقاضي). وسوف نقدم هيكل أتعاب واضح واتفاقية قبل البدء في أي عمل.",
        },
      ]
    },
    contact: {
      title: "طلب استشارة",
      subtitle: "يرجى ملء النموذج أدناه لجدولة مناقشة سرية حول متطلباتك القانونية.",
      info_title: "قم بزيارة مكتبنا",
      info_subtitle: "العدالة لا تنتظر. سواء كنت بحاجة إلى تمثيل فوري أو مستشار قانوني على المدى الطويل، فإن فريقنا في المدينة المنورة مستعد لمساعدتك.",
      email_label: "البريد الإلكتروني",
      email_sub: "للاستفسارات والمواعيد",
      location_label: "الموقع",
      location_sub: "المدينة المنورة، المملكة العربية السعودية",
      phone_label: "الهاتف",
      phone_sub: "الأحد - الخميس من ٩ ص إلى ٥ م",
      form: {
        name: "الاسم الكامل",
        email: "البريد الإلكتروني",
        phone: "رقم الهاتف",
        service_placeholder: "نوع الخدمة القانونية",
        service_label: "الخدمات القانونية",
        message_placeholder: "يرجى وصف المسألة القانونية باختصار (سرية)...",
        cta: "إرسال الطلب",
        services: {
          consultation: "استشارة عامة",
          litigation: "التقاضي والمحاكم",
          arbitration: "التحكيم وتسوية النزاعات",
          corporate: "الشركات والأعمال",
          contracts: "صياغة العقود",
          other: "استفسارات أخرى"
        }
      }
    },
    footer: {
      about: "ملتزمون بالدفاع عن الحقوق وترسيخ العدالة. مرخصون من وزارة العدل وموثوقون من قبل العملاء في جميع أنحاء المملكة.",
      links_title: "روابط سريعة",
      contact_title: "تواصل معنا",
      newsletter_title: "أخر ألاحداث",
      newsletter_desc: "اشترك لتصلك آخر المستجدات حول الأنظمة السعودية وأخبار المكتب.",
      newsletter_placeholder: "أدخل بريدك الإلكتروني",
      copyright: "جميع الحقوق محفوظة لمكتب العُرف للمحاماة ٢٠٢٦",
      address: "المدينة المنورة، المملكة العربية السعودية",
    }
  },
  en: {
    topbar: {
      location: "Madinah, Saudi Arabia",
      hours: "Sun - Thu: 9:00 AM - 5:00 PM",
      phone: "+966 5x xxx xxxx"
    },
    header: {
      home: "Home",
      about: "About Firm",
      services: "Expertise",
      testimonials: "Clients",
      contact: "Contact",
      title: "AL-ORF",
      subtitle: "Law & Legal Consultation",
    },
    hero: {
      title: "Justice Served With \nIntegrity & Precision",
      subtitle: "A premier legal consultancy in Madinah, licensed by the Ministry of Justice and affiliated with the International Court of Dispute Resolution.",
      cta: "Free Consultation",
    },
    about: {
      pretitle: "Who We Are",
      title: "Al-Orf Organizer Law & Legal Consultation",
      description: "Based in Madinah, Saudi Arabia, we provide comprehensive legal solutions tailored to both local regulations and international standards. Our firm is built on a foundation of deep legal knowledge and prestigious international affiliations.",
      credentials: [
        "Licensed by Ministry of Justice (Wazarh Al-Adil)",
        "Member of Saudi Commission for Lawyers",
        "Affiliated with Equity College London",
        "Member of the International Court of Dispute Resolution",
        "Specialized in SA Law",
      ],
      quote: "We believe that justice and law should provide relief to the grieved and fairness in all agreements.",
      cta: "Contact Us",
    },
    stats: {
      experience: "Years of Experience",
      cases: "Successful Cases",
      satisfaction: "Client Satisfaction",
      affiliations: "Intl. & Local Affiliations",
    },
    services: {
        pretitle: "Our Practice Areas",
        title: "Comprehensive Legal Solutions",
        subtitle: "Merging deep local expertise in Saudi Law with international legal standards.",
        tabs: {
            litigation: "Litigation",
            consultation: "Consultation",
            corporate: "Corporate",
            international: "International",
        },
        content: {
            litigation: {
                title: "Litigation & Dispute Resolution",
                description: "Representing clients in complex legal disputes. As members of the International Court of Dispute Resolution, we bring world-class arbitration strategies to local cases.",
                key_services_title: "Key Services:",
                list: ["Civil Litigation", "Commercial Disputes", "Arbitration", "Mediation", "Court Representation", "Settlement Negotiation"]
            },
            consultation: {
                title: "Legal Consultation",
                description: "Expert advisory services grounded in Saudi Law and Ministry of Justice regulations. We help you navigate legal complexities before they become problems.",
                key_services_title: "Key Services:",
                list: ["Contract Review", "Legal Opinions", "Compliance Audits", "Regulatory Advice", "Risk Assessment", "Document Drafting"]
            },
            corporate: {
                title: "Corporate & Commercial",
                description: "Comprehensive legal support for businesses in Madinah and beyond. From formation to mergers, we protect your commercial interests.",
                key_services_title: "Key Services:",
                list: ["Company Formation", "Mergers & Acquisitions", "Labor Law", "Intellectual Property", "Commercial Contracts", "Corporate Governance"]
            },
            international: {
                title: "International Law",
                description: "Leveraging our affiliation with Equity College London to handle cross-border legal matters and international arbitration cases.",
                key_services_title: "Key Services:",
                list: ["International Arbitration", "Cross-border Contracts", "Foreign Investment", "International Trade", "Dispute Resolution", "Global Compliance"]
            }
        },
        cta: "Request Consultation"
    },
    testimonials: {
      pretitle: "Success Stories",
      title: "Defending Rights, Delivering Results",
      description: "Our reputation in Madinah is built on trust, integrity, and a relentless pursuit of justice. We take pride in the peace of mind we bring to our clients, whether navigating complex commercial disputes or sensitive personal matters.",
      cta: "Schedule Consultation",
    },
    slider: [
        {
          quote: "Their grasp of international regulations and local Saudi law was impressive. They handled ourlegal corporate restructuring with absolute precision and confidentiality.",
          name: "Ahmed Al-Sayed",
          role: "CEO, Future Trade Co.",
          avatar: "/assets/img/testimonials/avatar-1.jpg"
        },
        {
          quote: "I needed a firm that understood complex dispute resolution. Al-Orf's team fought for my rights with integrity and secured a favorable outcome against the odds.",
          name: "Sarah Al-Hamad",
          role: "Private Client",
          avatar: "/assets/img/testimonials/avatar-2.jpg"
        },
        {
          quote: "Professionalism at its finest in Madinah. From the initial consultation to the final agreement, their guidance was clear, honest, and legally sound.",
          name: "Mohammed Rashid",
          role: "Estate Planning Client",
          avatar: "/assets/img/testimonials/avatar-3.jpg"
        }
      ],
      faq: {
        pretitle: "Common Questions",
        title: "Legal Clarity",
        description: "Navigating the legal system can be complex. Here are answers to the most common questions we receive about our practice and process.",
        items: [
          {
            title: "What documents should I bring to my first consultation?",
            description: "To make the most of our meeting, please bring any relevant contracts, court notices, correspondence, or identification documents related to your case.",
          },
          {
            title: "Do you handle international legal disputes?",
            description: "Yes. Our affiliation with the International Court of Dispute Resolution and Equity College London allows us to effectively represent clients in international arbitration matters.",
          },
          {
            title: "Is my consultation confidential?",
            description: "Absolutely. We adhere to the strictest standards of client confidentiality as mandated by the Saudi Ministry of Justice and international legal ethics.",
          },
          {
            title: "Can you assist with business setup in Madinah?",
            description: "Yes, we specialize in corporate law. We can assist with company formation, drafting Articles of Association, and ensuring full compliance with Saudi commercial regulations.",
          },
          {
            title: "How are your legal fees determined?",
            description: "Our fees are based on the complexity of the case and the type of service required. We will provide a clear fee structure and agreement before commencing any work.",
          },
        ]
      },
      contact: {
        title: "Request Consultation",
        subtitle: "Fill out the form below to schedule a confidential discussion about your legal requirements.",
        info_title: "Visit Our Office",
        info_subtitle: "Justice cannot wait. Whether you need immediate representation or long-term counsel, our team in Madinah is ready to assist you.",
        email_label: "Email",
        email_sub: "Case inquiries & appointments",
        location_label: "Location",
        location_sub: "Madinah, Saudi Arabia",
        phone_label: "Phone",
        phone_sub: "Sun-Thu from 9am to 5pm",
        form: {
          name: "Full Name",
          email: "Email Address",
          phone: "Phone Number",
          service_placeholder: "Type of Legal Service",
          service_label: "Legal Services",
          message_placeholder: "Briefly describe your legal matter (Confidential)...",
          cta: "Submit Request",
          services: {
            consultation: "General Consultation",
            litigation: "Litigation & Courts",
            arbitration: "Arbitration & Dispute Resolution",
            corporate: "Corporate & Commercial",
            contracts: "Contract Drafting",
            other: "Other Inquiry"
          }
        }
    },
    footer: {
      about: "Committed to defending rights and establishing justice. Licensed by the Ministry of Justice and trusted by clients across Saudi Arabia and beyond.",
      links_title: "Quick Links",
      contact_title: "Contact Us",
      newsletter_title: "Legal Insights",
      newsletter_desc: "Subscribe to receive updates on Saudi Law regulations and firm news.",
      newsletter_placeholder: "Enter your email",
      copyright: "Copyright © 2026 Al-Orf Law Firm. All rights reserved.",
      address: "Madinah, Saudi Arabia",
    }
  },
};

// --- Context Setup ---

type Language = 'ar' | 'en';

interface LanguageContextType {
  lang: Language;
  toggleLanguage: () => void;
  t: Translations;
  dir: 'rtl' | 'ltr';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Default to Arabic ('ar')
  const [lang, setLang] = useState<Language>('ar');

  useEffect(() => {
    // Update the HTML dir attribute whenever language changes
    const dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
    
    // Optional: Save to local storage
    localStorage.setItem('app-lang', lang);
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const t = translations[lang];
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
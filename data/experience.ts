export interface ExperienceSubsection {
  title: string;
  responsibilities: string[];
}

export interface ExperienceItem {
  role: string;
  org: string;
  location?: string;
  duration: string;
  responsibilities?: string[];
  subsections?: ExperienceSubsection[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Executive Assistant / Business Operations",
    org: "Comacpro Global Pte. Ltd.",
    location: "Hanoi, Vietnam",
    duration: "2026 – Present",
    subsections: [
      {
        title: "Digital Marketing",
        responsibilities: [
          "Conducted market and competitor research to support business growth and international expansion strategies.",
          "Designed company portfolios, marketing presentations, sales decks, and promotional materials.",
          "Created and edited visual content, including product images and marketing assets.",
          "Researched AI-powered marketing tools and emerging digital trends.",
          "Assisted the Board of Directors in preparing market research, business reports, and presentations.",
        ],
      },
      {
        title: "Business Development & Marketplace Operations",
        responsibilities: [
          "Identified and recruited international sellers through Alibaba, Made-in-China, and other B2B platforms.",
          "Managed seller onboarding, account registration, and store setup.",
          "Built relationships with international clients across China and overseas markets.",
          "Communicated with clients via Email, WhatsApp, WeChat, DingTalk and phone.",
          "Collaborated with IT, Operations and Logistics teams to resolve seller issues.",
          "Maintained CRM records and monitored seller engagement.",
        ],
      },
      {
        title: "Marketplace Operations & Sales Support",
        responsibilities: [
          "Managed product listings and optimized product information.",
          "Assisted sellers with online storefront optimization.",
          "Responded to seller inquiries and operational support.",
          "Coordinated with cross-functional teams to improve platform service quality.",
          "Prepared sales materials, communication templates and outreach scripts.",
          "Supported international meetings and customer communication in English and basic Chinese.",
        ],
      },
    ],
  },
  {
    role: "Operations & Customer Service Assistant (Part-time)",
    org: "Logistics Company / Singapore",
    duration: "2023–2025",
    responsibilities: [
      "Processed customer orders using the company's order management system and Microsoft Excel.",
      "Verified customer information, generated shipping labels, and prepared orders for warehouse dispatch.",
      "Managed customer collections at the delivery counter by verifying order information and coordinating order handover.",
      "Performed inventory checks and monitored stock availability to support replenishment planning.",
      "Investigated and resolved order-related issues by coordinating with customers, warehouse staff, and delivery partners.",
      "Maintained accurate order records and supported daily operational workflows.",
    ],
  },
];

export interface EducationItem {
  degree: string;
  school: string;
  duration: string;
}

export const education: EducationItem = {
  degree: "Bachelor of Business major in Digital Marketing",
  school: "James Cook University Singapore",
  duration: "2023–2025",
};

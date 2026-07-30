export interface ExperienceItem {
  role: string;
  org: string;
  duration: string;
  responsibilities: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Digital Marketing Specialist",
    org: "COMACPRO",
    duration: "2026 — Present",
    responsibilities: [
      "Planned and executed digital marketing activities",
      "Managed international email outreach campaigns",
      "Created marketing materials and promotional content",
      "Supported marketplace operations and supplier onboarding",
      "Communicated with overseas partners in English and Chinese",
      "Assisted the Board of Directors in cross-functional projects",
    ],
  },
  {
    role: "Logistics & Operations Assistant",
    org: "Singapore",
    duration: "2023 — 2025",
    responsibilities: [
      "Processed customer orders and shipping documentation",
      "Managed inventory using Excel and internal systems",
      "Prepared orders for delivery",
      "Handled customer inquiries and delivery issues",
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

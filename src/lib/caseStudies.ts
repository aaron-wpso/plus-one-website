export type CaseStudy = {
  slug: string;
  client: string;
  project: string;
  industry: string;
  type: string;
  tagline: string;
  metric: string;
  description: string;
  tags: string[];
  color: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "bors",
    client: "Hallaway KL & PJ",
    project: "BORS — Bar Operations & Reporting System",
    industry: "F&B / Bar Operations",
    type: "Custom Web Application",
    tagline: "From 3am manual reconciliation to real-time operations overnight.",
    metric:
      "One of KL's busiest rooftop bars was losing time and money every night to manual order slips, guesswork inventory, and 3am reconciliation. We fixed that.",
    description:
      "Hallaway's rooftop bar was doing serious volume — two floors, live DJ, hundreds of customers on a Friday night — and staff were still running around with handwritten order slips. The manager had no live view of inventory. The owner had no idea what was selling. We built BORS: a live order management, inventory tracking, and reporting system built specifically for the chaos of a high-pressure bar floor.",
    tags: ["Web App", "F&B", "Custom Build"],
    color: "#1a1a2e",
  },
  {
    slug: "buildlah",
    client: "Touch By Design",
    project: "BuildLah — Client Journey Platform",
    industry: "Interior Design & Renovation",
    type: "Custom Web Application",
    tagline: "Replaced 47 WhatsApp groups with one client portal.",
    metric:
      "An interior design firm managing 20+ active projects through WhatsApp groups, email chains, and spreadsheets. Every revision was a chase. Every handover was a risk.",
    description:
      "Touch By Design was growing fast but their client management hadn't grown with them. Project updates lived in WhatsApp. Revision requests were buried in email threads. Handover documentation was scattered across drives. We built BuildLah — a centralized client portal that covers the entire client journey from initial consultation to project completion, revision tracking, and documentation handover.",
    tags: ["Web App", "Interior Design", "Client Portal"],
    color: "#2d1b69",
  },
  {
    slug: "classone",
    client: "YelaoShr",
    project: "ClassOne AI — Personalized Learning App",
    industry: "EdTech / AI",
    type: "AI-Powered Mobile Application",
    tagline: "AI that adapts to each student, not the other way around.",
    metric:
      "An education platform that moves beyond static content — ClassOne AI personalizes the learning journey for every student using modern AI capabilities.",
    description:
      "YelaoShr wanted to build more than just another e-learning app. They wanted AI that actually understood each student's pace, gaps, and learning style — and adapted accordingly. We built ClassOne AI: a mobile application integrating modern AI capabilities into a personalized learning experience, with adaptive content delivery, progress tracking, and intelligent recommendations.",
    tags: ["Mobile App", "AI", "EdTech"],
    color: "#0f3460",
  },
  {
    slug: "flex",
    client: "Project Fit, Cheras",
    project: "FLEX — Membership & Class Management System",
    industry: "Fitness & Wellness",
    type: "Custom Web Application",
    tagline: "Streamlined operations for a growing fitness studio.",
    metric:
      "A fitness studio managing memberships, class bookings, and attendance through spreadsheets and WhatsApp. Operations were slowing growth.",
    description:
      "Project Fit was growing its member base faster than their manual systems could handle. Class bookings were managed through WhatsApp. Membership renewals were tracked in Excel. Attendance was done on paper. We built FLEX — a membership and class management system that gave the studio a single dashboard for everything: member profiles, class scheduling, attendance tracking, and renewal reminders.",
    tags: ["Web App", "Fitness", "Membership System"],
    color: "#1b4332",
  },
  {
    slug: "titan",
    client: "Titan Innovation",
    project: "Titan Innovation — Heavy Machinery Marketplace",
    industry: "B2B / Heavy Machinery",
    type: "Marketplace Platform",
    tagline: "Built a B2B marketplace for an industry that was still doing it by phone.",
    metric:
      "The heavy machinery industry in Malaysia had no central marketplace. Buyers, sellers, and rental services were all connected through personal contacts and cold calls. We changed that.",
    description:
      "Titan Innovation saw the gap: heavy machinery — excavators, cranes, loaders — was still bought, sold, and rented through personal networks and word of mouth. No platform existed for buyers to discover inventory, compare prices, or connect with rental providers. We built their marketplace from the ground up: listings, search, seller profiles, inquiry management, and rental workflows — for an industry going digital for the first time.",
    tags: ["Web App", "Marketplace", "B2B"],
    color: "#1c1c1c",
  },
];

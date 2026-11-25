/**
 * Single source of truth for the presentation.
 * Company figures are sourced; all project targets are explicitly illustrative.
 */

export type Source = {
  id: string;
  label: string;
  url: string;
  note: string;
};

export type SectionMeta = {
  id: string;
  number: string;
  label: string;
  title: string;
};

export type Stat = {
  value: number;
  label: string;
  year: string;
  sourceId: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  note?: string;
};

export type Resource = {
  id: string;
  title: string;
  icon: "users" | "wallet" | "factory" | "cpu";
  summary: string;
  items: string[];
};

export type SwotQuadrant = {
  id: "strengths" | "weaknesses" | "opportunities" | "threats";
  title: string;
  items: string[];
  tone: string;
};

export type Milestone = {
  phase: string;
  title: string;
  detail: string;
};

export type Department = {
  id: string;
  name: string;
  teams: string[];
  responsibilities: string;
};

export type DriveStep = {
  letter: string;
  title: string;
  definition: string;
  application: string;
};

export type Kpi = {
  id: string;
  name: string;
  short: string;
  definition: string;
  target: number;
  current: number;
  unit: string;
  period: string;
  illustrative: true;
};

export const sources: Source[] = [
  {
    id: "annual-2025",
    label: "BYD Company Limited — 2025 Annual Report",
    url: "https://static.cninfo.com.cn/finalpage/2026-03-27/1225046995.PDF",
    note: "Revenue, NEV sales, R&D spending, workforce, patents and exports.",
  },
  {
    id: "esg-2025",
    label: "BYD — 2025 Sustainability Report",
    url: "https://www.bydglobal.com/material/__CN/group-official-website/file/cn/esg/2025-BYD-Sustainability-Report-EN.pdf",
    note: "Annual sustainability performance and R&D intensity.",
  },
  {
    id: "byd-newsroom",
    label: "BYD Global Newsroom",
    url: "https://www.bydglobal.com/en/",
    note: "Company background, founding, headquarters and brand motto.",
  },
  {
    id: "cnevpost-2025",
    label: "CnEVPost — BYD 2025 full-year results",
    url: "https://cnevpost.com/2026/03/27/byd-2025-full-year-results/",
    note: "Independent summary of published 2025 figures.",
  },
];

export const sections: SectionMeta[] = [
  { id: "home", number: "00", label: "HOME", title: "The future is electric" },
  { id: "project", number: "01", label: "PROJECT", title: "Defining the vision" },
  { id: "planning", number: "02", label: "PLANNING", title: "Analyzing the future" },
  { id: "organizing", number: "03", label: "ORGANIZING", title: "Building the structure" },
  { id: "directing", number: "04", label: "DIRECTING", title: "Leading innovation" },
  { id: "control", number: "05", label: "CONTROL", title: "Measuring performance" },
  { id: "conclusion", number: "06", label: "CONCLUSION", title: "The road ahead" },
];

export const hero = {
  kicker: "BYD · BUILD YOUR DREAMS",
  titleLead: "THE FUTURE IS",
  titleAccent: "ELECTRIC.",
  subtitle:
    "Innovation. Technology. Sustainable Mobility. An interactive management presentation built around one strategic project: taking BYD's electric mobility further into international markets.",
  ctaLabel: "EXPLORE THE PROJECT",
  imageAlt: "Blue BYD Seal electric sedan photographed at IAA Mobility 2023",
};

export const intro = {
  heading: "From a battery workshop to a global mobility leader",
  paragraphs: [
    "BYD — Build Your Dreams — was founded in 1995 in Shenzhen, China. The company began in rechargeable batteries and grew into a global technology group whose core businesses are electric vehicles, batteries and renewable energy solutions.",
    "Today BYD develops, manufactures and sells new energy vehicles, battery systems and energy-storage products, with an increasing international footprint. That combination of battery expertise, vehicle engineering and manufacturing scale is the starting point for the expansion project presented here.",
  ],
  facts: [
    { label: "Founded", value: "1995", detail: "Shenzhen, China" },
    { label: "Core activities", value: "EVs · Batteries · Renewable energy", detail: "Vertically integrated technology group" },
    { label: "Global reach", value: "International", detail: "Exports passed one million vehicles in 2025" },
  ],
};

export const stats: Stat[] = [
  {
    value: 4602436,
    label: "New energy vehicles sold",
    year: "2025",
    sourceId: "annual-2025",
    note: "Fourth consecutive year at the top of global NEV sales.",
  },
  {
    value: 63.4,
    decimals: 1,
    suffix: "bn",
    prefix: "RMB ",
    label: "Invested in research & development",
    year: "2025",
    sourceId: "annual-2025",
  },
  {
    value: 1000000,
    suffix: "+",
    label: "Vehicles exported in a year for the first time",
    year: "2025",
    sourceId: "annual-2025",
  },
  {
    value: 120000,
    prefix: ">",
    label: "Engineers in the R&D organization",
    year: "2025",
    sourceId: "annual-2025",
  },
  {
    value: 91,
    prefix: "#",
    label: "Rank in the Fortune Global 500",
    year: "2025",
    sourceId: "annual-2025",
  },
];

export const project = {
  heading: "A coordinated international expansion and innovation programme",
  definition:
    "The project is a strategic expansion and innovation programme designed to strengthen BYD's electric-vehicle presence in selected international markets. It connects sustainable mobility, technological innovation and customer-oriented services into one business project that the five management functions can be applied to.",
  objectives: [
    "Increase international market presence",
    "Strengthen BYD's electric vehicle brand image",
    "Promote sustainable transportation",
    "Improve the customer experience",
    "Develop innovative mobility solutions",
  ],
  objectiveIntro:
    "Five objectives translate the vision into outcomes the organization can plan, staff, lead and control.",
  resources: [
    {
      id: "human",
      title: "Human resources",
      icon: "users",
      summary: "The people who design, build, sell and govern the project.",
      items: ["Engineers", "Researchers", "Designers", "Marketing teams", "Sales teams", "Management teams"],
    },
    {
      id: "financial",
      title: "Financial resources",
      icon: "wallet",
      summary: "The budgets that turn plans into executable work.",
      items: ["Research and development budget", "Marketing investment", "Production investment", "Distribution and logistics costs"],
    },
    {
      id: "material",
      title: "Material resources",
      icon: "factory",
      summary: "The physical assets required to deliver vehicles at scale.",
      items: ["Manufacturing facilities", "Battery production equipment", "Electric vehicle production lines", "Logistics infrastructure"],
    },
    {
      id: "technological",
      title: "Technological resources",
      icon: "cpu",
      summary: "The proprietary capabilities that differentiate the offer.",
      items: ["Blade Battery technology", "Electric vehicle platforms", "Research and development capabilities", "Intelligent vehicle technologies"],
    },
  ] satisfies Resource[],
};

export const planning = {
  swot: [
    {
      id: "strengths",
      title: "Strengths",
      tone: "red",
      items: [
        "Strong battery technology expertise",
        "Vertical integration",
        "Competitive electric vehicle portfolio",
        "Significant research and development capabilities",
        "Strong manufacturing capacity",
      ],
    },
    {
      id: "weaknesses",
      title: "Weaknesses",
      tone: "grey",
      items: [
        "Limited brand recognition in some international markets",
        "Dependence on international expansion",
        "Challenges adapting to different market expectations",
        "Complex global logistics",
      ],
    },
    {
      id: "opportunities",
      title: "Opportunities",
      tone: "white",
      items: [
        "Growing demand for electric vehicles",
        "Expansion into emerging markets",
        "Government support for sustainable transportation",
        "Development of charging infrastructure",
        "Strategic international partnerships",
      ],
    },
    {
      id: "threats",
      title: "Threats",
      tone: "dark",
      items: [
        "Strong competition from established automotive manufacturers",
        "International trade restrictions and tariffs",
        "Changing government regulations",
        "Price competition",
        "Supply chain disruptions",
      ],
    },
  ] satisfies SwotQuadrant[],
  strategy: {
    name: "SO strategy — Strengths × Opportunities",
    rationale:
      "An SO strategy pairs internal strengths with external opportunities. BYD should use its battery expertise, technological strengths, manufacturing capacity and competitive electric vehicle portfolio to capture the growing international demand for sustainable mobility. This is the most direct route from what the company already does well to where the market is moving.",
  },
  actions: [
    "Expand into selected international markets",
    "Strengthen local partnerships",
    "Increase marketing and brand awareness",
    "Invest in research and development",
    "Improve customer services and distribution networks",
  ],
  roadmap: [
    { phase: "Phase 01", title: "Market selection", detail: "Assess demand, regulation, tariffs and charging infrastructure in target countries." },
    { phase: "Phase 02", title: "Local partnerships", detail: "Build dealer, service and charging partnerships with credible local operators." },
    { phase: "Phase 03", title: "Brand launch", detail: "Run a coordinated awareness campaign around battery technology and vehicle value." },
    { phase: "Phase 04", title: "R&D adaptation", detail: "Adapt vehicles, software and services to local expectations and standards." },
    { phase: "Phase 05", title: "Scale & service", detail: "Extend distribution and after-sales networks as volume grows." },
  ] satisfies Milestone[],
};

export const organizing = {
  disclaimer:
    "Proposed project organizational structure for this academic case study. It is not BYD's official internal organizational chart.",
  director: "Project Director",
  directorSummary:
    "Owns the project scope, coordinates the five departments and reports progress against the agreed objectives.",
  departments: [
    {
      id: "rnd",
      name: "Technical & R&D Department",
      teams: ["Battery Engineers", "Vehicle Engineers", "Innovation Team"],
      responsibilities:
        "Adapt vehicle platforms and battery systems to target markets, validate technology against local standards and turn customer insight into product improvements.",
    },
    {
      id: "production",
      name: "Production Department",
      teams: ["Manufacturing Team", "Quality Control Team", "Supply Chain Team"],
      responsibilities:
        "Plan production volumes, protect quality standards, coordinate suppliers and keep logistics costs and delivery times under control.",
    },
    {
      id: "sales",
      name: "Marketing & Sales Department",
      teams: ["Marketing Team", "Sales Team", "Customer Relations Team"],
      responsibilities:
        "Build brand awareness, develop dealer and partner channels, manage sales pipelines and feed customer feedback back to the project.",
    },
    {
      id: "finance",
      name: "Finance Department",
      teams: ["Budget Management", "Financial Analysis"],
      responsibilities:
        "Allocate and monitor budgets, evaluate investment decisions and report actual spending against the approved plan.",
    },
    {
      id: "hr",
      name: "Human Resources Department",
      teams: ["Recruitment", "Training & Development"],
      responsibilities:
        "Recruit local and international talent, organise role-specific training and support team development throughout the expansion.",
    },
  ] satisfies Department[],
  note:
    "Each department is accountable for a defined part of the project. The director keeps the departments aligned so that technical decisions, production capacity, market demands and financial limits are considered together.",
};

export const directing = {
  methodName: "THE DRIVE METHOD",
  methodIntro:
    "DRIVE is an original management and leadership method created for this project. It gives the international expansion team five simple, repeatable habits — from setting direction to recognising performance.",
  steps: [
    {
      letter: "D",
      title: "Direction",
      definition: "Define clear objectives and communicate the project's vision.",
      application:
        "The director translates the expansion objectives into market-by-market targets and makes sure every department can explain how its work contributes.",
    },
    {
      letter: "R",
      title: "Responsibility",
      definition: "Give every department clear responsibilities and accountability.",
      application:
        "Owners are named for each workstream in the organigram, with explicit deliverables and decision rights rather than shared, ambiguous duties.",
    },
    {
      letter: "I",
      title: "Innovation",
      definition: "Encourage creativity, technological improvement and new ideas.",
      application:
        "R&D and customer relations run regular idea reviews so local market feedback can become product and service improvements.",
    },
    {
      letter: "V",
      title: "Vision & Values",
      definition: "Promote sustainability, teamwork and long-term thinking.",
      application:
        "Decisions are checked against the sustainable-mobility mission, not only short-term sales, and teams are rewarded for cross-department cooperation.",
    },
    {
      letter: "E",
      title: "Evaluation",
      definition: "Provide regular feedback and recognize team performance.",
      application:
        "Weekly reviews and monthly management meetings compare evidence with targets, celebrate progress and agree corrective action.",
    },
  ] satisfies DriveStep[],
  practices: [
    {
      title: "Leadership approach",
      body: "Participative and transformational: the director invites department input while keeping the team focused on a shared, ambitious vision.",
    },
    {
      title: "Communication",
      body: "Weekly team meetings track operational work; monthly management reviews assess budget, market progress and cross-department blockers.",
    },
    {
      title: "Motivation",
      body: "Recognition of team achievements, visible professional development and clear links between individual work and the project's mission.",
    },
    {
      title: "Decision-making",
      body: "Collaborative decisions supported by performance data: departments propose options, the director confirms the decision that best serves the objectives.",
    },
    {
      title: "Conflict management",
      body: "Open communication and problem-solving: disagreements are surfaced early, reframed as shared problems and resolved with evidence and escalation rules.",
    },
  ],
};

export const control = {
  intro:
    "Control closes the management loop. Regular checkpoints compare real results with the plan so that managers can spot deviations early and take corrective action before small problems become expensive ones.",
  periods: [
    {
      name: "Weekly",
      focus: "Execution",
      items: ["Task completion", "Team progress", "Operational problems"],
    },
    {
      name: "Monthly",
      focus: "Resources",
      items: ["Budget monitoring", "Marketing performance", "Sales progress", "Production performance"],
    },
    {
      name: "Quarterly",
      focus: "Strategy",
      items: ["Strategic objectives", "International market expansion", "Customer satisfaction", "Overall project performance"],
    },
  ],
  kpis: [
    {
      id: "sales",
      name: "Sales Growth",
      short: "Sales",
      definition: "Percentage increase in vehicle sales",
      target: 18,
      current: 12,
      unit: "%",
      period: "Monthly",
      illustrative: true,
    },
    {
      id: "markets",
      name: "Market Expansion",
      short: "Markets",
      definition: "Number of new markets entered",
      target: 5,
      current: 3,
      unit: "",
      period: "Quarterly",
      illustrative: true,
    },
    {
      id: "budget",
      name: "Budget Performance",
      short: "Budget",
      definition: "Actual spending vs planned budget",
      target: 95,
      current: 91,
      unit: "%",
      period: "Monthly",
      illustrative: true,
    },
    {
      id: "satisfaction",
      name: "Customer Satisfaction",
      short: "CSAT",
      definition: "Customer satisfaction score",
      target: 4.5,
      current: 4.2,
      unit: "/5",
      period: "Quarterly",
      illustrative: true,
    },
    {
      id: "progress",
      name: "Project Progress",
      short: "Milestones",
      definition: "Percentage of completed milestones",
      target: 80,
      current: 64,
      unit: "%",
      period: "Quarterly",
      illustrative: true,
    },
    {
      id: "production",
      name: "Production Performance",
      short: "Production",
      definition: "Production targets achieved",
      target: 90,
      current: 78,
      unit: "%",
      period: "Monthly",
      illustrative: true,
    },
    {
      id: "marketing",
      name: "Marketing Performance",
      short: "Marketing",
      definition: "Brand awareness and campaign engagement",
      target: 65,
      current: 48,
      unit: "%",
      period: "Monthly",
      illustrative: true,
    },
  ] satisfies Kpi[],
  correctiveAction:
    "Managers compare each indicator with its target and its control period. If a result falls below the agreed range, they identify the cause with the responsible department, agree a corrective action, assign an owner and verify the effect at the next checkpoint. If the target itself is unrealistic, the plan is revised with evidence rather than silently lowered.",
};

export const conclusion = {
  heading: "THE ROAD TO A SUSTAINABLE FUTURE",
  intro:
    "The five management functions are not five separate exercises. Applied to one project, they form a continuous management cycle.",
  links: [
    { function: "PROJECT", text: "defines what must be achieved." },
    { function: "PLANNING", text: "determines how to achieve it." },
    { function: "ORGANIZING", text: "distributes responsibilities." },
    { function: "DIRECTING", text: "motivates and guides the team." },
    { function: "CONTROL", text: "measures results and ensures continuous improvement." },
  ],
  finalLine: "BUILD YOUR DREAMS. DRIVE THE FUTURE.",
  imageAlt: "Red BYD Atto 3 electric SUV in a street setting",
};

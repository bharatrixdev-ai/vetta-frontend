export type SessionFormat = {
  id: string;
  label: string;
  mins: number;
  price: number;
  desc: string;
};

export type Provenance = { label: string; source: string; year: string };

export type Luminary = {
  handle: string;
  name: string;
  short: string; // first name for UI
  title: string;
  org: string;
  rating: number;
  sessionsDone: number;
  years: number;
  responseTime: string;
  priceFrom: number;
  tags: string[];
  nextSlot: string;
  bio: string;
  provenance: Provenance[];
  formats: SessionFormat[];
};

export const LUMINARIES: Luminary[] = [
  {
    handle: "sarah-kim",
    name: "Dr. Sarah Kim",
    short: "Sarah",
    title: "Dermatologist · AI Researcher",
    org: "Apex Skin Institute",
    rating: 4.9,
    sessionsDone: 102,
    years: 12,
    responseTime: "~2h",
    priceFrom: 2500,
    tags: ["Medicine", "AI in Health", "Research careers"],
    nextSlot: "Tomorrow · 7:30 PM",
    bio: "Practicing dermatologist building clinical-AI tools. I help med students pick specialities and researchers ship clinical ML that survives contact with hospitals.",
    provenance: [
      { label: "MD, Dermatology", source: "Verified · Medical Council", year: "2014" },
      { label: "Lead Author — 14 peer-reviewed papers", source: "Verified · ORCID", year: "2016–25" },
      { label: "Clinical AI Lab, Founder", source: "Verified · Apex", year: "2021" },
    ],
    formats: [
      { id: "quick", label: "Quick Session", mins: 25, price: 2500, desc: "One focused question, answered properly." },
      { id: "deep", label: "Deep Dive", mins: 50, price: 4500, desc: "Career map, research review, or case walk-through." },
      { id: "async", label: "Async Review", mins: 0, price: 1200, desc: "Send a doc — get a recorded response in 48h." },
    ],
  },
  {
    handle: "rohan-verma",
    name: "Rohan Verma",
    short: "Rohan",
    title: "CTO, Finlay",
    org: "ex-Paytora · IIT-B",
    rating: 4.8,
    sessionsDone: 231,
    years: 11,
    responseTime: "~4h",
    priceFrom: 1800,
    tags: ["Engineering", "Fintech", "0→1"],
    nextSlot: "Thu · 9:00 PM",
    bio: "Built payments infra used by 40M people. I take sessions on engineering leadership, fintech architecture and getting your first 10 engineers right.",
    provenance: [
      { label: "CTO — Finlay (Series B)", source: "Verified · Company", year: "2022" },
      { label: "Principal Engineer — Paytora", source: "Verified · Employer", year: "2016–22" },
      { label: "B.Tech CSE", source: "Verified · IIT Bombay", year: "2015" },
    ],
    formats: [
      { id: "quick", label: "Quick Session", mins: 25, price: 1800, desc: "Architecture or career, one topic." },
      { id: "deep", label: "Deep Dive", mins: 50, price: 3200, desc: "System design review with notes." },
    ],
  },
  {
    handle: "ananya-iyer",
    name: "Ananya Iyer",
    short: "Ananya",
    title: "Partner, Northlight Ventures",
    org: "Seed & Series A",
    rating: 5.0,
    sessionsDone: 88,
    years: 14,
    responseTime: "~1d",
    priceFrom: 4000,
    tags: ["Fundraising", "GTM", "SaaS"],
    nextSlot: "Fri · 6:00 PM",
    bio: "I write first cheques into technical founders. Sessions are honest pitch teardowns — the feedback investors think but rarely say out loud.",
    provenance: [
      { label: "Partner — Northlight Ventures", source: "Verified · Fund", year: "2020" },
      { label: "22 seed investments, 4 exits", source: "Verified · Registry", year: "2015–25" },
    ],
    formats: [
      { id: "teardown", label: "Pitch Teardown", mins: 45, price: 4000, desc: "Deck + narrative, dismantled kindly." },
      { id: "office", label: "Office Hours", mins: 20, price: 2200, desc: "Fast answers on raising." },
    ],
  },
  {
    handle: "dev-oswal",
    name: "Dev Oswal",
    short: "Dev",
    title: "Design Director, Nova",
    org: "ex-Fig · ex-Zeta",
    rating: 4.9,
    sessionsDone: 164,
    years: 13,
    responseTime: "~3h",
    priceFrom: 2000,
    tags: ["Design", "Portfolios", "Design systems"],
    nextSlot: "Today · 10:00 PM",
    bio: "I review portfolios the way hiring panels actually do. Also: design systems, storytelling, and surviving design leadership.",
    provenance: [
      { label: "Design Director — Nova", source: "Verified · Company", year: "2023" },
      { label: "Staff Designer — Fig", source: "Verified · Employer", year: "2019–23" },
    ],
    formats: [
      { id: "folio", label: "Portfolio Review", mins: 40, price: 2000, desc: "Live redline of your work." },
      { id: "deep", label: "Career Deep Dive", mins: 50, price: 3000, desc: "Where to aim, what to fix." },
    ],
  },
  {
    handle: "meera-krishnan",
    name: "Dr. Meera Krishnan",
    short: "Meera",
    title: "Interventional Cardiologist",
    org: "Apex Heart Institute",
    rating: 4.9,
    sessionsDone: 74,
    years: 16,
    responseTime: "~6h",
    priceFrom: 3000,
    tags: ["Medicine", "NEET-PG", "Hospital careers"],
    nextSlot: "Sat · 11:00 AM",
    bio: "16 years in cath labs. I mentor young doctors through residency choices, super-speciality prep and the parts of medicine no one warns you about.",
    provenance: [
      { label: "DM Cardiology", source: "Verified · Medical Council", year: "2012" },
      { label: "4,000+ procedures", source: "Verified · Institute", year: "2010–25" },
    ],
    formats: [
      { id: "quick", label: "Quick Session", mins: 25, price: 3000, desc: "Residency & speciality questions." },
    ],
  },
  {
    handle: "alex-tan",
    name: "Alex Tan",
    short: "Alex",
    title: "ML Lead, Corelab",
    org: "LLM infra",
    rating: 4.7,
    sessionsDone: 143,
    years: 9,
    responseTime: "~2h",
    priceFrom: 2200,
    tags: ["AI/ML", "Careers", "Infra"],
    nextSlot: "Wed · 8:00 PM",
    bio: "Shipping LLM systems in production since 2021. Sessions on ML careers, interview prep, and making models cheap enough to matter.",
    provenance: [
      { label: "ML Lead — Corelab", source: "Verified · Company", year: "2023" },
      { label: "MS CS", source: "Verified · NUS", year: "2017" },
    ],
    formats: [
      { id: "quick", label: "Quick Session", mins: 25, price: 2200, desc: "One ML question, properly answered." },
      { id: "mock", label: "Mock Interview", mins: 50, price: 3800, desc: "Real loop, real feedback." },
    ],
  },
  {
    handle: "priya-nair",
    name: "Priya Nair",
    short: "Priya",
    title: "Product Lead, Sable",
    org: "ex-Swish · consumer",
    rating: 4.8,
    sessionsDone: 197,
    years: 10,
    responseTime: "~5h",
    priceFrom: 1500,
    tags: ["Product", "Consumer", "PM interviews"],
    nextSlot: "Tomorrow · 6:30 PM",
    bio: "Consumer PM for a decade. I help APMs break in, PMs level up, and founders stop building features nobody asked for.",
    provenance: [
      { label: "Product Lead — Sable", source: "Verified · Company", year: "2022" },
      { label: "Senior PM — Swish", source: "Verified · Employer", year: "2018–22" },
    ],
    formats: [
      { id: "quick", label: "Quick Session", mins: 25, price: 1500, desc: "PM careers & interviews." },
      { id: "deep", label: "Roadmap Review", mins: 50, price: 2800, desc: "Your roadmap, stress-tested." },
    ],
  },
  {
    handle: "james-okafor",
    name: "James Okafor",
    short: "James",
    title: "Founder, 2 exits",
    org: "Angel · advisor",
    rating: 4.9,
    sessionsDone: 121,
    years: 15,
    responseTime: "~1d",
    priceFrom: 3500,
    tags: ["Founding", "M&A", "Hiring"],
    nextSlot: "Sun · 5:00 PM",
    bio: "Sold two companies, kept the scars. Sessions on founding, selling, and hiring executives who actually execute.",
    provenance: [
      { label: "Founder — Kestrel (acq. 2021)", source: "Verified · Registry", year: "2016–21" },
      { label: "Founder — Plumb (acq. 2017)", source: "Verified · Registry", year: "2013–17" },
    ],
    formats: [
      { id: "founder", label: "Founder Session", mins: 45, price: 3500, desc: "The call you wish you'd had earlier." },
    ],
  },
];

export const byHandle = (h: string) => LUMINARIES.find((l) => l.handle === h);

export type Note = {
  id: string;
  author: string; // handle
  text: string;
  minsAgo: number;
  noted: number;
  replies: number;
};

export const NOTES: Note[] = [
  {
    id: "n1",
    author: "ananya-iyer",
    text: "Most decks fail on slide 2, not slide 12. If I can't repeat your one-liner to my partners an hour later, the meeting already ended.",
    minsAgo: 18,
    noted: 214,
    replies: 31,
  },
  {
    id: "n2",
    author: "sarah-kim",
    text: "Clinical AI truth: the model is 10% of the work. Getting it into the ward workflow without adding a single click for nurses is the other 90%.",
    minsAgo: 47,
    noted: 186,
    replies: 22,
  },
  {
    id: "n3",
    author: "rohan-verma",
    text: "Your first 10 engineers set the ceiling for your next 100. Hire people you'd be slightly intimidated to interview.",
    minsAgo: 90,
    noted: 342,
    replies: 45,
  },
  {
    id: "n4",
    author: "dev-oswal",
    text: "Portfolio tip: one project told deeply beats six told shallowly. Panels remember decisions, not deliverables.",
    minsAgo: 130,
    noted: 158,
    replies: 12,
  },
  {
    id: "n5",
    author: "priya-nair",
    text: "PM interviews reward structured honesty. “Here’s what I’d cut and why” lands better than a perfect framework recited perfectly.",
    minsAgo: 200,
    noted: 96,
    replies: 9,
  },
  {
    id: "n6",
    author: "james-okafor",
    text: "Both my exits started as coffee chats with zero agenda. Relationships compound faster than revenue.",
    minsAgo: 260,
    noted: 277,
    replies: 34,
  },
  {
    id: "n7",
    author: "alex-tan",
    text: "Interviewers can tell in 5 minutes whether you've actually deployed a model or just fine-tuned one in a notebook. Ship something small, end to end.",
    minsAgo: 320,
    noted: 121,
    replies: 17,
  },
  {
    id: "n8",
    author: "meera-krishnan",
    text: "To every intern choosing a speciality by 'scope': choose by the 3 AM version of the job. That's the one you'll actually live.",
    minsAgo: 400,
    noted: 305,
    replies: 41,
  },
];

export type UpNext = {
  id: string;
  kind: "session" | "roundtable";
  withHandle: string;
  title: string;
  whenLabel: string;
  minsTo: number;
};

export const UP_NEXT: UpNext[] = [
  {
    id: "s-2041",
    kind: "session",
    withHandle: "sarah-kim",
    title: "Deep Dive · 50 min",
    whenLabel: "Today · 7:30 PM",
    minsTo: 8,
  },
  {
    id: "rt-88",
    kind: "roundtable",
    withHandle: "ananya-iyer",
    title: "Raising in 2026 — what changed",
    whenLabel: "Live now",
    minsTo: 0,
  },
];

export type Roundtable = {
  id: string;
  title: string;
  host: string;
  cohosts: string[];
  live: boolean;
  listeners: number;
  startsLabel: string;
  price: number;
  tags: string[];
  desc: string;
};

export const ROUNDTABLES: Roundtable[] = [
  {
    id: "rt-88",
    title: "Raising in 2026 — what changed",
    host: "ananya-iyer",
    cohosts: ["james-okafor"],
    live: true,
    listeners: 214,
    startsLabel: "Live now",
    price: 0,
    tags: ["Fundraising", "Founders"],
    desc: "Cheque sizes, AI diligence, and why warm intros quietly stopped mattering.",
  },
  {
    id: "rt-89",
    title: "Clinical AI — hype vs practice",
    host: "sarah-kim",
    cohosts: ["meera-krishnan", "alex-tan"],
    live: false,
    listeners: 0,
    startsLabel: "Today · 9:00 PM",
    price: 199,
    tags: ["Health", "AI"],
    desc: "Two clinicians and an ML lead on what actually ships inside hospitals.",
  },
  {
    id: "rt-90",
    title: "Portfolios that get callbacks",
    host: "dev-oswal",
    cohosts: [],
    live: false,
    listeners: 0,
    startsLabel: "Tomorrow · 8:00 PM",
    price: 0,
    tags: ["Design", "Careers"],
    desc: "Live teardowns of three volunteer portfolios. Bring notes.",
  },
  {
    id: "rt-91",
    title: "Zero to ₹1 Cr ARR",
    host: "rohan-verma",
    cohosts: ["priya-nair"],
    live: false,
    listeners: 0,
    startsLabel: "Sat · 7:00 PM",
    price: 299,
    tags: ["SaaS", "GTM"],
    desc: "The unglamorous middle: pricing, first sales hire, and churn you caused yourself.",
  },
];

export type Msg = { from: "me" | "them"; text: string; time: string };

export type Thread = {
  id: string;
  kind: "client" | "luminary";
  withHandle: string;
  state: "locked" | "active" | "followup" | "request";
  meta: string; // lock/unlock/follow-up label
  last: string;
  when: string;
  msgs: Msg[];
};

export const THREADS: Thread[] = [
  {
    id: "t1",
    kind: "client",
    withHandle: "sarah-kim",
    state: "active",
    meta: "Session today · 7:30 PM",
    last: "Perfect — send the case summary before we start.",
    when: "2:10 PM",
    msgs: [
      { from: "me", text: "Hi Dr. Kim! Booked the Deep Dive for tonight. I want to focus on switching from clinical practice to research.", time: "1:58 PM" },
      { from: "them", text: "Great topic. Bring your CV and one paper you admire — we'll reverse-engineer it.", time: "2:04 PM" },
      { from: "me", text: "Will do. I also added 3 questions in the agenda.", time: "2:07 PM" },
      { from: "them", text: "Perfect — send the case summary before we start.", time: "2:10 PM" },
    ],
  },
  {
    id: "t2",
    kind: "client",
    withHandle: "rohan-verma",
    state: "locked",
    meta: "Unlocks Fri · 10:00 AM — 48h before your Session",
    last: "Chat opens closer to your Session.",
    when: "Sun",
    msgs: [],
  },
  {
    id: "t3",
    kind: "client",
    withHandle: "dev-oswal",
    state: "followup",
    meta: "Follow-up window · 3 days left",
    last: "Reworked case study attached — thank you again!",
    when: "Yesterday",
    msgs: [
      { from: "them", text: "Strong session today. Fix the hierarchy on project 1 and it's a different portfolio.", time: "Mon 9:12 PM" },
      { from: "me", text: "Reworked case study attached — thank you again!", time: "Yesterday" },
    ],
  },
  {
    id: "t4",
    kind: "luminary",
    withHandle: "ananya-iyer",
    state: "request",
    meta: "Wants to connect",
    last: "Loved your note on clinical AI — I have two portfolio founders you should meet.",
    when: "3:40 PM",
    msgs: [],
  },
  {
    id: "t5",
    kind: "luminary",
    withHandle: "alex-tan",
    state: "active",
    meta: "Luminary · connected",
    last: "Co-hosting the clinical AI table tonight — prep call at 8:30?",
    when: "1:22 PM",
    msgs: [
      { from: "them", text: "Co-hosting the clinical AI table tonight — prep call at 8:30?", time: "1:22 PM" },
    ],
  },
  {
    id: "t6",
    kind: "luminary",
    withHandle: "priya-nair",
    state: "active",
    meta: "Luminary · connected",
    last: "Intro'd you to our health PM — check your requests.",
    when: "Mon",
    msgs: [
      { from: "them", text: "Intro'd you to our health PM — check your requests.", time: "Mon" },
    ],
  },
];

export const CURRENT_USER = {
  handle: "arjun",
  name: "Arjun Mehta",
  title: "Product engineer · building in health-tech",
  isLuminary: false,
};

/** The Luminary you become when using the "View as" switcher. */
export const LUMINARY_SELF = LUMINARIES[0]; // Dr. Sarah Kim

/** Luminary-side dashboard mock data. */
export const LUMINARY_STATS = {
  monthEarnings: 86500,
  pendingPayout: 12400,
  payoutDay: "Thursday",
  sessionsThisMonth: 27,
  ticketedTables: 2,
  repeatRate: 38,
  avgRating: 4.9,
  responseMins: 118,
  profileViews: 1284,
  viewsDelta: 12.4,
  conversion: 4.6,
};

export const LUMINARY_REQUESTS = [
  {
    id: "r1",
    name: "Kavya Sharma",
    what: "Deep Dive · Sat, 2 Aug · 11:00 AM",
    price: 4500,
    note: "Choosing between two residency offers — cardiology vs derm. Need an honest read.",
    state: "new" as const,
  },
  {
    id: "r2",
    name: "Rahul Desai",
    what: "Quick Session · Wed, 30 Jul · 8:00 PM",
    price: 2500,
    note: "Want feedback on my research statement before I email labs.",
    state: "new" as const,
  },
  {
    id: "r3",
    name: "Fatima Q.",
    what: "Async Review · due 1 Aug",
    price: 1200,
    note: "Uploaded a 6-page draft on dermoscopy datasets.",
    state: "accepted" as const,
  },
];

export const LUMINARY_EARNINGS = [
  { month: "Feb", amount: 41000 },
  { month: "Mar", amount: 52500 },
  { month: "Apr", amount: 48000 },
  { month: "May", amount: 64000 },
  { month: "Jun", amount: 71500 },
  { month: "Jul", amount: 86500 },
];

export const LUMINARY_UPCOMING = [
  { id: "s-3001", who: "Arjun Mehta", what: "Deep Dive · 50 min", when: "Today · 7:30 PM", mins: 8 },
  { id: "s-3002", who: "Neha Bhat", what: "Quick Session · 25 min", when: "Tomorrow · 8:00 PM", mins: 1590 },
  { id: "s-3003", who: "Imran S.", what: "Quick Session · 25 min", when: "Sat · 11:30 AM", mins: 4200 },
];

export const LUMINARY_REVIEWS = [
  { by: "Neha B.", stars: 5, text: "Gave me the two sentences I needed to rewrite my whole statement of purpose." },
  { by: "Vikram R.", stars: 5, text: "Blunt in the best way. Saved me a year of applying to the wrong labs." },
  { by: "Anon", stars: 4, text: "Great session, wished we had more time on the funding question." },
];

export const INTELLIGENCE_FEED = [
  {
    kind: "topic",
    text: "Now discussing: research careers",
  },
  {
    kind: "insight",
    text: "Sarah suggested targeting labs that publish with clinicians, not pure CS groups.",
  },
  {
    kind: "followup",
    text: "Ask: which of your 3 shortlisted labs has funding beyond 2027?",
  },
  {
    kind: "context",
    text: "Sarah's 2023 paper covers exactly your dataset size regime — mention it.",
  },
  {
    kind: "agenda",
    text: "Agenda 2 of 3 covered — 'publishing without a PhD' remains.",
  },
] as const;

/* ─────────── Interests (drive the feed algorithm) ─────────── */

export type Field = {
  id: string;
  label: string;
  emojiFree: string; // lucide icon name resolved in the UI
  tags: string[];
};

export const FIELDS: Field[] = [
  { id: "medicine", label: "Medicine & Health", emojiFree: "stethoscope", tags: ["Medicine", "AI in Health", "NEET-PG", "Hospital careers"] },
  { id: "engineering", label: "Engineering", emojiFree: "code", tags: ["Engineering", "Infra", "0→1"] },
  { id: "ai", label: "AI & ML", emojiFree: "sparkles", tags: ["AI/ML", "AI in Health", "Infra"] },
  { id: "design", label: "Design", emojiFree: "penTool", tags: ["Design", "Portfolios", "Design systems"] },
  { id: "product", label: "Product", emojiFree: "layers", tags: ["Product", "Consumer", "PM interviews"] },
  { id: "founding", label: "Founding & Startups", emojiFree: "rocket", tags: ["Founding", "0→1", "Hiring", "M&A"] },
  { id: "funding", label: "Fundraising & VC", emojiFree: "trendingUp", tags: ["Fundraising", "GTM", "SaaS"] },
  { id: "research", label: "Research & Academia", emojiFree: "microscope", tags: ["Research careers", "Medicine"] },
  { id: "careers", label: "Careers & Switching", emojiFree: "compass", tags: ["Careers", "PM interviews", "Portfolios", "Research careers"] },
  { id: "finance", label: "Finance & Fintech", emojiFree: "banknote", tags: ["Fintech", "SaaS"] },
  { id: "marketing", label: "Marketing & Growth", emojiFree: "megaphone", tags: ["GTM", "Consumer"] },
  { id: "law", label: "Law & Policy", emojiFree: "scale", tags: ["Law"] },
];

/** Which Luminary tags a set of chosen fields maps to. */
export function tagsForFields(ids: string[]): string[] {
  const set = new Set<string>();
  FIELDS.filter((f) => ids.includes(f.id)).forEach((f) => f.tags.forEach((t) => set.add(t)));
  return [...set];
}

export const GOALS = [
  { id: "learn", label: "Learn from people ahead of me" },
  { id: "switch", label: "Switch careers or fields" },
  { id: "raise", label: "Raise money or grow a company" },
  { id: "hire", label: "Meet people to work with" },
  { id: "share", label: "Share what I know (apply as a Luminary)" },
];

/* ─────────── Roundtable live features ─────────── */

export type Poll = {
  id: string;
  q: string;
  options: { id: string; label: string; votes: number }[];
  closed: boolean;
};

export const SAMPLE_POLL: Poll = {
  id: "p1",
  q: "What's blocking your raise right now?",
  options: [
    { id: "a", label: "Traction / metrics", votes: 84 },
    { id: "b", label: "Narrative & deck", votes: 41 },
    { id: "c", label: "Warm intros", votes: 57 },
    { id: "d", label: "Nothing — I'm pre-idea", votes: 22 },
  ],
  closed: false,
};

export const SAMPLE_QUESTIONS = [
  { id: "q1", by: "Neha B.", text: "How much traction is 'enough' for a seed round in 2026?", votes: 47, answered: false },
  { id: "q2", by: "Imran S.", text: "Do angels still matter if you can get institutional interest?", votes: 31, answered: false },
  { id: "q3", by: "Fatima Q.", text: "What makes you pass in the first five minutes?", votes: 28, answered: true },
];

/* ─────────── Luminary-side inbox (people who booked Sarah) ─────────── */

export const CLIENT_THREADS: Thread[] = [
  {
    id: "c1",
    kind: "client",
    withHandle: "arjun-client",
    state: "active",
    meta: "Deep Dive today · 7:30 PM",
    last: "Will do. I also added 3 questions in the agenda.",
    when: "2:07 PM",
    msgs: [
      { from: "them", text: "Hi Dr. Kim! Booked the Deep Dive for tonight. I want to focus on switching from clinical practice to research.", time: "1:58 PM" },
      { from: "me", text: "Great topic. Bring your CV and one paper you admire — we'll reverse-engineer it.", time: "2:04 PM" },
      { from: "them", text: "Will do. I also added 3 questions in the agenda.", time: "2:07 PM" },
    ],
  },
  {
    id: "c2",
    kind: "client",
    withHandle: "kavya-client",
    state: "locked",
    meta: "Opens Thu 11:00 AM — 48h before her Session",
    last: "Chat opens closer to the Session.",
    when: "Sat",
    msgs: [],
  },
  {
    id: "c3",
    kind: "client",
    withHandle: "neha-client",
    state: "followup",
    meta: "Follow-up window · 5 days left",
    last: "The statement rewrite worked — got two lab replies!",
    when: "Yesterday",
    msgs: [
      { from: "me", text: "Lead with the clinical problem, not the model. Labs care that you've seen the ward.", time: "Tue 8:40 PM" },
      { from: "them", text: "The statement rewrite worked — got two lab replies!", time: "Yesterday" },
    ],
  },
];

export const CLIENT_NAMES: Record<string, { name: string; short: string; title: string }> = {
  "arjun-client": { name: "Arjun Mehta", short: "Arjun", title: "Product engineer · health-tech" },
  "kavya-client": { name: "Kavya Sharma", short: "Kavya", title: "Final-year MBBS" },
  "neha-client": { name: "Neha Bhat", short: "Neha", title: "Clinical research associate" },
};

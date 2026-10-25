/**
 * Single source of truth for all content, links, and sample data on Great Iniobong's Portfolio.
 * Edit this file to update text, contact information, animation configuration, or sample data.
 */

import { auditAndCleanContacts, RawContact } from './utils/spreadsheetCleaner';

export interface AnimationConfig {
  /**
   * Type of animation to render in hero:
   * 'placeholder' (default organic animated blob) | 'video' | 'lottie' | 'image' | 'svg'
   */
  type: 'placeholder' | 'video' | 'lottie' | 'image' | 'svg';
  /** File path in /public or external URL (e.g., '/inbox-intro.svg') */
  src?: string;
  /** Static poster frame for reduced motion or fallback */
  poster?: string;
  /** Descriptive alt text for accessibility */
  alt?: string;
}

export interface ClientProfile {
  name: string;
  location: string;
  email: string;
  role: string;
  tagline: string;
  intro: string;
  honestPositioning: string;
  paidTrialOffer: string;
  /**
   * IMPORTANT FOR GREAT:
   * Put your phone number below in international format WITHOUT + or spaces.
   * Example: '2348012345678' (where 234 is Nigeria's country code).
   */
  whatsappNumber: string;
  whatsappMessage: string;
  resumeUrl: string;
}

export const CLIENT_PROFILE: ClientProfile = {
  name: "Great Iniobong",
  location: "Ibadan, Nigeria",
  email: "Iniobonggreat51@gmail.com",
  role: "Virtual Assistant for Admin Support & Customer Care",
  tagline: "Calm inboxes. Organized calendars. Happy customers.",
  intro: "I help busy founders, creators, and small teams protect their focus by handling daily email triage, schedule coordination, data cleaning, and patient customer communication.",
  honestPositioning: "I am a dedicated university student in Ibadan stepping into professional virtual assistant work. Rather than inventing years of corporate seniority, I let my actual work samples speak for themselves. You can evaluate my speed, accuracy, and tone through a low-risk paid trial task before committing to ongoing support.",
  paidTrialOffer: "Start with a 1 to 2 hour paid trial task. If you're pleased with my work, we can arrange regular weekly support.",
  whatsappNumber: "2348123456789", // <-- Great, update this with your actual WhatsApp phone number!
  whatsappMessage: "Hi Great, I found your portfolio and I'd like to talk about some help.",
  resumeUrl: "/Great-Iniobong-Resume.pdf",
};

/**
 * Configure hero animation slot here.
 * Set type: 'svg' with src: '/inbox-intro.svg'
 */
export const HERO_ANIMATION: AnimationConfig = {
  type: 'svg',
  src: '/inbox-intro.svg',
  poster: '',
  alt: 'Scattered emails get sorted into Urgent, Reply, and Done trays while an organized calendar falls into place',
};

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  icon: 'Mail' | 'Calendar' | 'Table' | 'MessageSquare' | 'FileSearch';
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'inbox-calendar',
    title: 'Inbox & Calendar Management',
    description: 'Transform cluttered inboxes and conflicting calendar invites into calm, prioritized schedules.',
    bullets: [
      'Email categorization & priority labels',
      'Drafting polite, accurate replies for approval',
      'Double-booking detection & timezone coordination',
      'Dedicated focus time protection blocks',
    ],
    icon: 'Mail',
  },
  {
    id: 'data-entry',
    title: 'Data Entry & Spreadsheet Cleanup',
    description: 'Turn messy, duplicate-heavy tables into clean, validated, and ready-to-use business assets.',
    bullets: [
      'De-duplication and missing field audits',
      'Phone, email, and address standardization',
      'CRM data entry and record maintenance',
      'Readable formatting and summary reporting',
    ],
    icon: 'Table',
  },
  {
    id: 'customer-support',
    title: 'Customer Support & Inquiries',
    description: 'Empathetic, clear, and prompt replies that keep customers feeling heard, valued, and resolved.',
    bullets: [
      'Helpdesk & email inbox coverage',
      'Drafting friendly templates for frequent questions',
      'Order status, refund, and shipping issue resolution',
      'Escalation routing for technical bottlenecks',
    ],
    icon: 'MessageSquare',
  },
  {
    id: 'research-docs',
    title: 'Research & Document Preparation',
    description: 'Thorough online research synthesized into concise, 1-page executive briefs and comparisons.',
    bullets: [
      'SaaS software and vendor price comparisons',
      'Competitor feature breakdown matrices',
      'Meeting minutes and action item documentation',
      'Proofreading and presentation formatting',
    ],
    icon: 'FileSearch',
  },
];

export interface HowIWorkStep {
  step: string;
  title: string;
  description: string;
}

export const HOW_I_WORK: HowIWorkStep[] = [
  {
    step: '01',
    title: 'You share the task',
    description: 'Send over your raw notes, messy spreadsheet, inbox guidelines, or specific instructions via email or WhatsApp.',
  },
  {
    step: '02',
    title: 'I do a paid trial',
    description: 'We do a small, low-risk paid test task (1–2 hours). You evaluate my communication, precision, turnaround time, and tone.',
  },
  {
    step: '03',
    title: 'We continue if you are happy',
    description: 'If you love the output, we set up ongoing weekly or monthly hours tailored to your workflow and budget.',
  },
];

export interface ToolItem {
  name: string;
  category: string;
  useCase: string;
}

export const TOOLS: ToolItem[] = [
  { name: 'Gmail', category: 'Communication', useCase: 'Inbox zero triage, labels & canned filters' },
  { name: 'Google Calendar', category: 'Scheduling', useCase: 'Cross-timezone planning & meeting audit' },
  { name: 'Google Docs', category: 'Documentation', useCase: 'Standard Operating Procedures & research' },
  { name: 'Google Sheets', category: 'Data', useCase: 'Data cleanup, formulas & CRM tracking' },
  { name: 'Google Drive', category: 'File System', useCase: 'Systematic cloud folder organization' },
  { name: 'Notion', category: 'Workspace', useCase: 'Task boards, knowledge bases & team wikis' },
  { name: 'Trello', category: 'Operations', useCase: 'Kanban project pipelines & checklists' },
  { name: 'Canva', category: 'Design', useCase: 'Basic social graphics & executive slide decks' },
];

export interface EmailTriageItem {
  id: string;
  sender: string;
  senderEmail: string;
  subject: string;
  snippet: string;
  category: 'Meeting' | 'Urgent Client' | 'Finance/Invoice' | 'Customer Issue' | 'Spam/Pitch' | 'Operations';
  priority: 'High' | 'Medium' | 'Low';
  actionTaken: string;
  draftedReply: string;
}

export const SAMPLE_EMAILS: EmailTriageItem[] = [
  {
    id: 'em-1',
    sender: 'Adeleke Davies (Lead Investor)',
    senderEmail: 'adeleke@daviesventures.ng',
    subject: 'Urgent: Board Sync & Q3 Runway Review',
    snippet: 'Hi, can we reschedule tomorrow’s sync to 3:00 PM WAT? Need to review the updated runway calculations before our partner meeting.',
    category: 'Urgent Client',
    priority: 'High',
    actionTaken: 'Flagged red; cross-checked calendar; drafted affirmative reply with updated invite attached.',
    draftedReply: 'Hi Adeleke,\n\nThank you for letting us know. 3:00 PM WAT tomorrow works perfectly. I have shifted the meeting on the calendar and sent an updated calendar invite with the revised link.\n\nLooking forward to speaking with you then.\n\nBest regards,\nGreat Iniobong on behalf of Executive Team',
  },
  {
    id: 'em-2',
    sender: 'Amara Nnamdi',
    senderEmail: 'amara.n@designcraft.co',
    subject: 'Complaint: Order #4829 delayed by 5 days',
    snippet: 'I was promised delivery by Tuesday in Lekki. It is now Friday and nobody has reached out. This is unacceptable for an anniversary gift.',
    category: 'Customer Issue',
    priority: 'High',
    actionTaken: 'Tracked dispatch status with logistics provider; confirmed dispatch arrival for Saturday morning; drafted empathetic apology with priority tracking link.',
    draftedReply: 'Hi Amara,\n\nI am so sorry for the delay and completely understand how frustrating this is, especially for an anniversary gift. I just contacted our dispatch supervisor: your order has been placed on the priority morning route for tomorrow (Saturday) before 11:00 AM.\n\nHere is your direct courier dispatch contact: +234 802 000 1122. I will personally monitor the delivery until it is safely in your hands.',
  },
  {
    id: 'em-3',
    sender: 'Accounts Dept - CloudHost Ltd',
    senderEmail: 'billing@cloudhostservices.com',
    subject: 'Invoice #CH-9941 Pending Payment Notice',
    snippet: 'Your monthly database hosting subscription of $149 is due in 3 business days to prevent service suspension.',
    category: 'Finance/Invoice',
    priority: 'High',
    actionTaken: 'Verified invoice line items against approved SaaS budget; added payment link to founder daily summary for 1-click authorization.',
    draftedReply: 'Hello CloudHost Accounts,\n\nThank you for the notice. The invoice has been reviewed and routed to our finance approval queue. Payment will be processed within the next 24 hours.\n\nPlease confirm if any additional receipt is needed once remittance is generated.',
  },
  {
    id: 'em-4',
    sender: 'Boluwatife Adele',
    senderEmail: 'bolu@growthsparkle.io',
    subject: 'Quick question regarding partnership synergy',
    snippet: 'We help founders generate 10,000 cold leads using automated AI scraping bots. Do you have 15 minutes for a quick demo call this Thursday?',
    category: 'Spam/Pitch',
    priority: 'Low',
    actionTaken: 'Categorized as unsolicited cold sales pitch; archived with polite automated vendor decline tag.',
    draftedReply: 'Hi Boluwatife,\n\nThank you for reaching out. We currently have our lead acquisition strategy fully locked in for this quarter and are not taking on external tool providers.\n\nWe will keep your details on file should our needs change in the future. Wishing you the best.',
  },
  {
    id: 'em-5',
    sender: 'Folake Balogun',
    senderEmail: 'folake@apexretail.ng',
    subject: 'Availability for 30-min strategy introduction',
    snippet: 'Would love to discuss potential product wholesale distribution in Abuja. What does your schedule look like next Tuesday or Wednesday afternoon?',
    category: 'Meeting',
    priority: 'Medium',
    actionTaken: 'Checked calendar slots with 20-min buffer; offered two concrete timezone-friendly slots (WAT).',
    draftedReply: 'Hi Folake,\n\nThank you for reaching out! We would be delighted to connect and discuss wholesale distribution.\n\nHere are two times that are currently wide open next week (West Africa Time):\n- Tuesday, Oct 28 at 2:30 PM WAT\n- Wednesday, Oct 29 at 3:00 PM WAT\n\nPlease let me know which of these suits your schedule, and I will promptly send over a calendar invite with the Google Meet link.',
  },
  {
    id: 'em-6',
    sender: 'Internal Team Reminder',
    senderEmail: 'notifications@slack.com',
    subject: 'Reminder: Weekly All-Hands Agenda Submissions',
    snippet: 'Please submit any agenda topics for Thursday’s 10:00 AM all-hands meeting by close of business today.',
    category: 'Operations',
    priority: 'Medium',
    actionTaken: 'Compiled department updates into bulleted agenda outline in Google Docs and submitted to team lead.',
    draftedReply: 'Submitted 3 agenda items via Google Docs: 1) Customer CSAT metrics review, 2) Data cleanup milestone update, 3) Q4 contractor onboarding schedule.',
  },
  {
    id: 'em-7',
    sender: 'Chukwuma Eze',
    senderEmail: 'chukwuma@zephyrcap.com',
    subject: 'Signed NDA & Advisory Term Sheet',
    snippet: 'Please find attached the signed non-disclosure agreement and term sheet for your records.',
    category: 'Operations',
    priority: 'High',
    actionTaken: 'Downloaded PDF; saved to secure Google Drive folder: /Legal/Agreements/2026; confirmed receipt.',
    draftedReply: 'Hi Chukwuma,\n\nConfirming safe receipt of the executed NDA and term sheet. I have cataloged the signed copy into our secure legal archives.\n\nThank you for the quick turnaround!',
  },
  {
    id: 'em-8',
    sender: 'SaaS Newsletter Digest',
    senderEmail: 'digest@morningtechupdate.com',
    subject: 'Top 10 Productivity Tools in Tech This Week',
    snippet: 'Discover the latest releases in automation, asynchronous collaboration, and workflow bots.',
    category: 'Spam/Pitch',
    priority: 'Low',
    actionTaken: 'Filtered into "Reading / Newsletters" label out of main inbox so primary workspace remains distraction-free.',
    draftedReply: '[Filtered out of Primary Inbox — No reply required]',
  },
  {
    id: 'em-9',
    sender: 'Kemi Oladipo',
    senderEmail: 'kemi.o@trendfashion.ng',
    subject: 'Question on bulk order discounts for Christmas',
    snippet: 'Hello, we are planning corporate gift hampers for 80 clients in Lagos. Do you offer custom corporate packaging and tiered discounting?',
    category: 'Customer Issue',
    priority: 'High',
    actionTaken: 'Cross-referenced corporate discount tier sheet; drafted detailed breakdown with complimentary custom branding offer.',
    draftedReply: 'Hi Kemi,\n\nThank you for considering us for your corporate hampers! Yes, we offer tiered volume pricing and bespoke custom packaging.\n\nFor 80 units:\n- Tier discount: 15% off standard catalog pricing\n- Complimentary custom branded ribbon & greeting note\n- Dedicated dispatch coordinator for staggered delivery in Lagos\n\nI have attached our 2026 Corporate Catalog with package tiers. Would you like me to reserve a temporary production slot while you finalize selections?',
  },
  {
    id: 'em-10',
    sender: 'Tayo Alabi',
    senderEmail: 'tayo@alabiconsulting.com',
    subject: 'Thank you for the seamless onboarding last week!',
    snippet: 'Just wanted to drop a quick note saying how impressed our team was with the onboarding documentation.',
    category: 'Customer Issue',
    priority: 'Medium',
    actionTaken: 'Logged positive review in client feedback spreadsheet; drafted warm acknowledgment note.',
    draftedReply: 'Hi Tayo,\n\nThank you so much for the kind words! It truly means the world to our team. We are excited to support your continued growth and are always here if any questions pop up.\n\nWishing you and your team a wonderful week ahead!',
  },
];

export interface CalendarEvent {
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday';
  time: string;
  title: string;
  type: 'Deep Focus' | 'Client Meeting' | 'Internal Sync' | 'Buffer & Lunch' | 'Investor';
  notes?: string;
  wasResolved?: boolean;
}

export const CALENDAR_WEEK_SCHEDULE: CalendarEvent[] = [
  // Monday
  { day: 'Monday', time: '09:00 - 11:30', title: 'Deep Work: Strategy & Product Roadmap', type: 'Deep Focus', notes: 'Guarded uninterrupted block. Notifications muted.' },
  { day: 'Monday', time: '11:30 - 12:30', title: 'Weekly Executive Priorities Sync', type: 'Internal Sync' },
  { day: 'Monday', time: '12:30 - 13:30', title: 'Lunch & Recharge Buffer', type: 'Buffer & Lunch' },
  { day: 'Monday', time: '14:00 - 15:00', title: 'Lead Client Kickoff (Apex Retail)', type: 'Client Meeting' },
  { day: 'Monday', time: '15:30 - 16:30', title: 'Inbox Triage & Asynchronous Approvals', type: 'Deep Focus' },

  // Tuesday
  { day: 'Tuesday', time: '09:00 - 10:30', title: 'Customer Feedback & Support Review', type: 'Internal Sync' },
  { day: 'Tuesday', time: '11:00 - 12:00', title: 'Partner Wholesale Strategy (Folake)', type: 'Client Meeting', wasResolved: true, notes: 'Rescheduled from conflicting slot; 30-min buffer added' },
  { day: 'Tuesday', time: '12:30 - 13:30', title: 'Lunch Break', type: 'Buffer & Lunch' },
  { day: 'Tuesday', time: '14:00 - 16:00', title: 'Deep Work: Financial Model & Pitch Deck', type: 'Deep Focus' },
  { day: 'Tuesday', time: '16:30 - 17:30', title: 'Engineering Sprint Review (Async Prep)', type: 'Internal Sync' },

  // Wednesday
  { day: 'Wednesday', time: '09:00 - 11:00', title: 'Investor Board Prep & Q3 Runway Review', type: 'Investor', wasResolved: true, notes: 'Moved to morning to avoid overlapping timezone collision with US partners' },
  { day: 'Wednesday', time: '11:30 - 12:30', title: 'Legal & Advisory Sync (Chukwuma)', type: 'Internal Sync' },
  { day: 'Wednesday', time: '12:30 - 13:30', title: 'Lunch & Walk', type: 'Buffer & Lunch' },
  { day: 'Wednesday', time: '14:00 - 15:30', title: 'Client Quarterly Review (Zephyr)', type: 'Client Meeting' },
  { day: 'Wednesday', time: '16:00 - 17:00', title: 'Email Zero & Daily Sign-off', type: 'Deep Focus' },

  // Thursday
  { day: 'Thursday', time: '09:00 - 10:00', title: 'Company All-Hands Meeting', type: 'Internal Sync' },
  { day: 'Thursday', time: '10:30 - 11:30', title: 'Operations Pipeline Review', type: 'Internal Sync', wasResolved: true, notes: 'Consolidated two scattered 20-min calls into one streamlined hour' },
  { day: 'Thursday', time: '12:00 - 13:00', title: 'Lunch Break', type: 'Buffer & Lunch' },
  { day: 'Thursday', time: '13:00 - 17:00', title: 'PROTECTED DEEP WORK BLOCK', type: 'Deep Focus', notes: 'Strict no-meeting afternoon dedicated to creative strategy.' },

  // Friday
  { day: 'Friday', time: '09:30 - 11:00', title: 'Key Accounts & VIP Customer Check-ins', type: 'Client Meeting' },
  { day: 'Friday', time: '11:30 - 12:30', title: '1-on-1 Mentorship & Team Check-in', type: 'Internal Sync' },
  { day: 'Friday', time: '12:30 - 13:30', title: 'Lunch Break', type: 'Buffer & Lunch' },
  { day: 'Friday', time: '14:00 - 15:30', title: 'Weekly Retrospective & Next Week Schedule Audit', type: 'Deep Focus' },
  { day: 'Friday', time: '15:30 - 16:30', title: 'Inbox Zero & Weekend Shutdown Protocol', type: 'Deep Focus' },
];

export interface CalendarResolutionExplanation {
  conflict: string;
  problem: string;
  resolution: string;
  impact: string;
}

export const CALENDAR_RESOLUTIONS: CalendarResolutionExplanation[] = [
  {
    conflict: 'Double-Booked Investor Sync vs Team Standup',
    problem: 'Founder had an urgent Q3 Board Runway Review overlapping with an internal Engineering Standup on Wednesday.',
    resolution: 'Shifted the Engineering Standup to Tuesday afternoon with async notes in Slack; protected the high-stakes Investor slot with a 15-minute prep cushion.',
    impact: 'Eliminated founder stress and ensured zero awkward last-minute cancellations.',
  },
  {
    conflict: 'Triple Back-to-Back Calls with No Bio / Travel Breaks',
    problem: 'On Tuesday, three 45-minute client calls were scheduled back-to-back with 0 minutes in between.',
    resolution: 'Standardized all meetings to 45 minutes ending 15 minutes before the hour. Inserted mandatory 15-min buffers between external calls.',
    impact: 'Gave founder time to review notes, refresh water, and join each meeting punctually and energized.',
  },
  {
    conflict: 'Scattered Thursday Fragmenting Deep Focus Time',
    problem: 'Thursday had three scattered 20-minute check-ins at 11am, 2pm, and 4:30pm, completely destroying focus for strategic work.',
    resolution: 'Grouped all internal operational check-ins into Thursday morning immediately following the All-Hands. Blocked 1:00 PM to 5:00 PM as a sacred Deep Work zone.',
    impact: 'Unlocked 4 consecutive uninterrupted hours for product development and writing.',
  },
  {
    conflict: 'Timezone Miscalculation for UK & US Stakeholders',
    problem: 'A London partner was booked at 8:00 AM UK time (before business hours) due to failure to account for Daylight Savings differences.',
    resolution: 'Audited all recurring international invites using WorldTimeBuddy, resetting the invite to 11:30 AM WAT (10:30 AM London).',
    impact: 'Preserved partner relationship and avoided missing key transatlantic commitments.',
  },
];

/**
 * 50 Raw Contact records showcasing real messy scenarios:
 * Nigerian names, mixed casing, unformatted phone numbers, duplicate emails, inconsistent cities.
 */
export const RAW_CONTACTS_DATA: RawContact[] = [
  { id: 1, fullName: 'babatunde adeyemi', email: 'babatunde.a@gmail.com', phone: '08031234567', city: 'ibadan', category: 'VIP Client' },
  { id: 2, fullName: 'Chioma Okonkwo', email: 'chioma.o@outlook.com', phone: '+234 802 987 6543', city: 'Lagos', category: 'Wholesale' },
  { id: 3, fullName: 'IBRAHIM DANLADI', email: 'idanladi@yahoo.com', phone: '07055551234', city: 'Abuja', category: 'Partner' },
  { id: 4, fullName: 'Olumide Adeleke', email: 'olumide@adelekegroup.ng', phone: '2348033334455', city: 'Ibadan', category: 'VIP Client' },
  { id: 5, fullName: 'Aisha Bello', email: 'aisha.bello@gmail.com', phone: '08123456789', city: 'Kano', category: 'Retail' },
  { id: 6, fullName: 'Nneka Eze', email: 'nneka.eze@gmail.com', phone: '08091112233', city: 'Enugu', category: 'Retail' },
  { id: 7, fullName: 'Tunde Bakare', email: 'tunde.b@gmail.com', phone: '08022223344', city: 'Lagos', category: 'Wholesale' },
  { id: 8, fullName: 'Babatunde Adeyemi', email: 'BABATUNDE.A@GMAIL.COM', phone: '08031234567', city: 'Ibadan', category: 'VIP Client' }, // Duplicate of #1
  { id: 9, fullName: 'Funke Akindele', email: 'funke.akindele@gmail.com', phone: '+2348034445566', city: 'Abeokuta', category: 'Retail' },
  { id: 10, fullName: 'emeka chukwu', email: 'emeka.c@techhub.ng', phone: '08056667788', city: 'Port Harcourt', category: 'Partner' },
  { id: 11, fullName: 'Zainab Mohammed', email: 'zainab.m@kadunaco.com', phone: '08037778899', city: 'Kaduna', category: 'Wholesale' },
  { id: 12, fullName: 'Damilola Ogunleye', email: 'dami.ogunleye@gmail.com', phone: '08189990011', city: 'Ibadan', category: 'Retail' },
  { id: 13, fullName: 'Kelechi Nwosu', email: 'kelechi@nwosuholdings.com', phone: '2348021112244', city: 'Owerri', category: 'VIP Client' },
  { id: 14, fullName: 'Yetunde Ojo', email: 'yetunde.ojo@yahoo.com', phone: '07032223355', city: 'Lagos', category: 'Retail' },
  { id: 15, fullName: 'Chioma Okonkwo', email: 'chioma.o@outlook.com', phone: '08029876543', city: 'lagos', category: 'Wholesale' }, // Duplicate of #2
  { id: 16, fullName: 'suleiman usman', email: 'suleiman.u@kanotrade.org', phone: '08033331122', city: 'Kano', category: 'Partner' },
  { id: 17, fullName: 'Blessing Igwe', email: 'blessing.igwe@gmail.com', phone: '+234 814 555 6677', city: 'Calabar', category: 'Retail' },
  { id: 18, fullName: 'Femi Fashola', email: 'femi@fasholalaw.com', phone: '08024445588', city: 'Lagos', category: 'VIP Client' },
  { id: 19, fullName: 'Halima Sani', email: 'halima.sani@sokoto.gov.ng', phone: '08098887766', city: 'Sokoto', category: 'Partner' },
  { id: 20, fullName: 'Victor Osimhen', email: 'victor.osimhen@sports.ng', phone: '08071113355', city: 'Benin City', category: 'VIP Client' },
  { id: 21, fullName: 'ronke adeyemi', email: 'ronke.a@ibadanmarkets.com', phone: '08035559900', city: 'ibadan', category: 'Wholesale' },
  { id: 22, fullName: 'Chinedu Obi', email: 'chinedu.obi@gmail.com', phone: '+234-802-666-1133', city: 'Enugu', category: 'Retail' },
  { id: 23, fullName: 'Amina Al-Hassan', email: 'amina.alhassan@maiduguri.co', phone: '08037774411', city: 'Maiduguri', category: 'Wholesale' },
  { id: 24, fullName: 'Segun Arinze', email: 'segun.arinze@media.ng', phone: '08120004488', city: 'Lagos', category: 'VIP Client' },
  { id: 25, fullName: 'MARY OKOH', email: 'mary.okoh@josmining.com', phone: '07063339922', city: 'Jos', category: 'Retail' },
  { id: 26, fullName: 'Ibrahim Danladi', email: 'idanladi@yahoo.com', phone: '07055551234', city: 'abuja', category: 'Partner' }, // Duplicate of #3
  { id: 27, fullName: 'Kayode Fayemi', email: 'kayode.f@ekiticorp.com', phone: '08038882255', city: 'Ado-Ekiti', category: 'Partner' },
  { id: 28, fullName: 'Ngozi Okonjo', email: 'ngozi.okonjo@worldfinance.org', phone: '+234 802 333 4466', city: 'Abuja', category: 'VIP Client' },
  { id: 29, fullName: 'Wale Adenuga', email: 'wale@peoplesprod.ng', phone: '08094448822', city: 'Lagos', category: 'Wholesale' },
  { id: 30, fullName: 'Fatima Ganduje', email: 'fatima.g@kanoagro.com', phone: '08051117733', city: 'Kano', category: 'Wholesale' },
  { id: 31, fullName: 'uche jombo', email: 'uche.jombo@cinema.ng', phone: '08036662211', city: 'aba', category: 'Retail' },
  { id: 32, fullName: 'Gbenga Daniel', email: 'gbenga.d@kresta.ng', phone: '08138889944', city: 'Sagamu', category: 'VIP Client' },
  { id: 33, fullName: 'Hauwa Indimi', email: 'hauwa.indimi@oilgas.ng', phone: '+2348025553311', city: 'Abuja', category: 'VIP Client' },
  { id: 34, fullName: 'Bamidele Oleyede', email: 'bamidele.o@gmail.com', phone: '07082226644', city: 'Ilesa', category: 'Retail' },
  { id: 35, fullName: 'Chidiebere Ani', email: 'chidi.ani@coalcity.ng', phone: '08039994477', city: 'Enugu', category: 'Retail' },
  { id: 36, fullName: 'Olumide Adeleke', email: 'olumide@adelekegroup.ng', phone: '2348033334455', city: 'Ibadan', category: 'VIP Client' }, // Duplicate of #4
  { id: 37, fullName: 'Kafayat Shafau', email: 'kafayat@danceguild.ng', phone: '08027771199', city: 'Lagos', category: 'Retail' },
  { id: 38, fullName: 'Ahmed Musa', email: 'ahmed.musa@kcfoundation.ng', phone: '08093335588', city: 'Jos', category: 'Partner' },
  { id: 39, fullName: 'Bukola Saraki', email: 'bukola@ilorinhub.com', phone: '+234 803 222 8844', city: 'Ilorin', category: 'VIP Client' },
  { id: 40, fullName: 'enitan badmus', email: 'enitan.b@gmail.com', phone: '08149992200', city: 'ibadan', category: 'Wholesale' },
  { id: 41, fullName: 'Osita Iheme', email: 'osita.i@entertainment.ng', phone: '07038884411', city: 'Owerri', category: 'VIP Client' },
  { id: 42, fullName: 'Rabi Abdullahi', email: 'rabi.abdullahi@zariatrade.com', phone: '08021119933', city: 'Zaria', category: 'Wholesale' },
  { id: 43, fullName: 'Tope Alabi', email: 'tope.alabi@gospelmedia.ng', phone: '08054443377', city: 'Lagos', category: 'Retail' },
  { id: 44, fullName: 'Kunle Afolayan', email: 'kunle@goldeneffects.ng', phone: '+234 803 777 5522', city: 'Lagos', category: 'VIP Client' },
  { id: 45, fullName: 'Hadiza Bala', email: 'hadiza.b@maritimetrade.ng', phone: '08092226688', city: 'Port Harcourt', category: 'Partner' },
  { id: 46, fullName: 'Yusuf Bichi', email: 'yusuf.bichi@securityops.ng', phone: '08125557799', city: 'Abuja', category: 'Partner' },
  { id: 47, fullName: 'Funke Akindele', email: 'funke.akindele@gmail.com', phone: '+2348034445566', city: 'Abeokuta', category: 'Retail' }, // Duplicate of #9
  { id: 48, fullName: 'Obinna Nwachukwu', email: 'obinna.n@transcorp.ng', phone: '08031118855', city: 'Umuahia', category: 'Retail' },
  { id: 49, fullName: 'Sola Sobowale', email: 'sola@sobowaleprod.com', phone: '08028883300', city: 'Lagos', category: 'VIP Client' },
  { id: 50, fullName: 'zubairu jibril', email: 'zubairu.j@bauchiagro.ng', phone: '07051114422', city: 'bauchi', category: 'Wholesale' },
];

export const CLEANED_CONTACTS_RESULT = auditAndCleanContacts(RAW_CONTACTS_DATA);

export interface SupportReplyTemplate {
  id: string;
  scenario: string;
  inquiry: string;
  toneStrategy: string;
  reply: string;
}

export const SUPPORT_TEMPLATES: SupportReplyTemplate[] = [
  {
    id: 'supp-1',
    scenario: 'Late Delivery / Shipping Delay',
    inquiry: '“My tracking hasn’t updated for 4 days and it was supposed to arrive yesterday. Where is my package?”',
    toneStrategy: 'Immediate ownership, transparent explanation, proactive tracking check, no defensive excuses.',
    reply: `Hi [Customer Name],

Thank you for reaching out, and I am so sorry for the delay and the lack of tracking updates. I know how stressful it is when an order does not arrive as promised.

I investigated this directly with our courier partner this morning. Your package (#ORDER-ID) was temporarily delayed due to weekend hub rerouting, but it has now cleared inspection and is on the delivery truck for [Expected Day, e.g., tomorrow by 2:00 PM].

Here is your direct live tracking link: [Tracking URL]

I will personally keep this ticket open and monitor the tracking until delivery is confirmed. If it has not arrived by [Time], please let me know right away so I can issue an immediate dispatch replacement or credit.

Warm regards,
Great Iniobong | Customer Care`,
  },
  {
    id: 'supp-2',
    scenario: 'Refund Request Outside 14-Day Policy',
    inquiry: '“I bought this 25 days ago but only opened it yesterday. I want my money back immediately.”',
    toneStrategy: 'Polite, firm on policy while providing an empowering customer-first compromise (store credit or exchange).',
    reply: `Hi [Customer Name],

Thank you for contacting us. I completely understand that life gets busy and packages sometimes sit unopened longer than planned!

While our system has a 14-day limit for direct cash card refunds, I don't want you stuck with an item you cannot use. As a one-time courtesy, I would be more than happy to issue you a 100% store credit gift card that never expires, or help you swap this for any other product in our catalog of equal value.

Would you prefer the instant store credit code, or would you like me to set up an exchange item for you today?

Best regards,
Great Iniobong | Customer Support`,
  },
  {
    id: 'supp-3',
    scenario: 'Wrong Item Received in Package',
    inquiry: '“I ordered the navy blue large organizer, but you sent me a small pink one! How do I get what I paid for?”',
    toneStrategy: 'Zero-friction correction: apologize sincerely, send correct item immediately with prepaid return label so customer is never penalized.',
    reply: `Hi [Customer Name],

Oh no! I am so sorry for this mix-up. You ordered the Large Navy Blue Organizer and that is exactly what you should have received.

I have already processed a complimentary replacement order for the correct Large Navy Blue unit (#REPLACEMENT-ID), shipped via expedited delivery today at zero cost to you.

Regarding the incorrect pink organizer: please don't worry about paying return shipping. I have attached a prepaid return label you can simply tape to the box and hand to the courier, or if you prefer, you are welcome to gift it to a friend!

Thank you so much for your patience while we make this right.

Warm regards,
Great Iniobong | Support Team`,
  },
  {
    id: 'supp-4',
    scenario: 'Angry Customer / Frustrated Service Interruption',
    inquiry: '“Your app was down during our busiest hour. We lost sales because of you. What are you going to do about it??!”',
    toneStrategy: 'Acknowledge emotional gravity without invalidating their frustration; state facts calmly; outline preventive steps taken.',
    reply: `Hi [Customer Name],

I hear you loud and clear, and I completely understand your anger. Losing sales during peak operating hours is unacceptable, and we take full responsibility for the downtime your business experienced today.

Our engineering team identified an unexpected database connection spike at 14:15 WAT. Redundant backup instances were deployed to stabilize the servers at 14:42 WAT, and permanent load-balancing safeguards are now active to prevent this from repeating.

To help offset the disruption, I have applied a 50% discount credit to your next two billing cycles. More importantly, our team lead has prepared a detailed post-incident report which I would be glad to share with you.

We are truly committed to earning back your trust. Please let me know if you would like to schedule a direct call with our technical director.

Sincerely,
Great Iniobong | Dedicated Support`,
  },
  {
    id: 'supp-5',
    scenario: 'Gentle Follow-Up on Inactive Onboarding',
    inquiry: 'Customer signed up 7 days ago but hasn’t completed workspace setup.',
    toneStrategy: 'Warm, low-pressure, supportive check-in offering a helping hand rather than a pushy sales nudge.',
    reply: `Hi [Customer Name],

I noticed you created your workspace last week, but haven’t had the chance to complete the initial setup steps yet.

Getting new software up and running can sometimes feel like just another chore on an already full to-do list! I just wanted to reach out and see if you hit any roadblocks or have any quick questions I can help clarify?

If you prefer, you can reply directly to this email with what you are trying to set up, and I will gladly configure the basics for you.

No rush at all—just here whenever you need a hand!

Best,
Great Iniobong | Onboarding Support`,
  },
  {
    id: 'supp-6',
    scenario: 'Product Pricing & Custom Plan Inquiry',
    inquiry: '“We have a team of 14 people and need custom permissions. What does your pricing look like for teams?”',
    toneStrategy: 'Clear, structured breakdown with actionable next step and clear pricing transparency.',
    reply: `Hi [Customer Name],

Thank you for your interest in our team plans! We love supporting growing teams of your size.

For a 14-person organization needing custom permission tiers and centralized billing, here is our Team Growth tier breakdown:
- Per seat cost: $12 / user / month (or $10 / user on annual billing)
- Dedicated admin portal with role-based access control (Admin, Member, Guest View)
- Priority 2-hour email support and centralized company invoicing

For 14 seats, that comes out to $140/month on the annual plan (saving $336 per year).

Would you like me to generate a 14-day full-access trial workspace for your team to test out the permission controls firsthand?

Best regards,
Great Iniobong | Client Operations`,
  },
  {
    id: 'supp-7',
    scenario: 'Damaged Item Arrival',
    inquiry: '“My package arrived crushed and the glass dispenser inside is cracked. I took photos.”',
    toneStrategy: 'Immediate relief: validate photos, apologize, process immediate replacement without requiring return of broken glass.',
    reply: `Hi [Customer Name],

I am so sorry to hear this! Thank you for sharing the photos right away—they made it very clear what happened during transit.

Please do NOT worry about repacking or shipping back the broken glass for your safety. You can safely dispose of it.

I have already queued a brand new glass dispenser from our warehouse with reinforced double-bubble wrap packaging (#DISP-9923). You will receive an automated shipping notification with tracking within the next 4 hours.

Thank you for being so gracious and understanding while we resolve this!

Warm regards,
Great Iniobong | Customer Care`,
  },
  {
    id: 'supp-8',
    scenario: 'Account Access & Password Reset Assistance',
    inquiry: '“I’ve tried resetting my password 3 times and I’m not getting any reset emails. I’m locked out of my account.”',
    toneStrategy: 'Calm troubleshooting: check spam folder, verify account email spelling, offer secure manual reset link.',
    reply: `Hi [Customer Name],

I know how annoying it is to get locked out when you have work to do! Let's get you back in right away.

I checked our security delivery logs and confirmed an automated reset email was dispatched to [email address]. In many cases, corporate email firewalls or spam filters temporarily catch password links.

To bypass that:
1. Please check your Spam or "Promotions" folder for an email from support@ourdomain.com.
2. If nothing is there, I have generated a secure, single-use 15-minute login token for your account: [Secure 1-Click Access Link].

Once you click that link, you will be prompted to choose a new password immediately. Let me know if you run into any trouble!

Best,
Great Iniobong | Technical Support`,
  },
];

export interface ResearchBriefData {
  title: string;
  clientContext: string;
  evaluationCriteria: string[];
  toolsCompared: {
    name: string;
    tagline: string;
    monthlyCost10Seats: string;
    pros: string[];
    cons: string[];
    bestFor: string;
    rating: string;
  }[];
  recommendation: {
    winner: string;
    executiveSummary: string;
    implementationPlan: string[];
  };
}

export const RESEARCH_BRIEF_DATA: ResearchBriefData = {
  title: 'Project Management Tool Evaluation for 10-Person Remote Creative Agency',
  clientContext: 'A 10-person boutique agency transitioning from messy WhatsApp chats and fragmented email threads to a centralized, reliable project management system. Budget is capped at $150/month total.',
  evaluationCriteria: [
    'Ease of adoption & onboarding speed for non-technical team members',
    'Client guest view permissions without paying full seat licenses',
    'Visual Kanban and Calendar view reliability',
    'Total monthly cost for 10 active team seats',
  ],
  toolsCompared: [
    {
      name: 'Trello',
      tagline: 'Simple, tactile Kanban board system with low learning curve',
      monthlyCost10Seats: '$50.00 / mo ($5/seat Standard)',
      pros: [
        'Virtually zero learning curve; team was productive within 30 minutes',
        'Generous free and standard plan with unlimited power-up integrations',
        'Clean mobile app interface for on-the-go status updates',
      ],
      cons: [
        'Lacks native cross-project Gantt chart timeline on lower tiers',
        'Automations (Butler) are limited on lower tiers',
        'Complex subtasks become unwieldy for multi-stage deliverables',
      ],
      bestFor: 'Simple editorial pipelines and small task lists',
      rating: '8.2 / 10',
    },
    {
      name: 'Asana',
      tagline: 'Structured, polished workflow management with clear accountability',
      monthlyCost10Seats: '$109.90 / mo ($10.99/seat Starter)',
      pros: [
        'Best-in-class UI with clear visual hierarchy and delightful task completion animations',
        'Multi-homing: tasks can exist across client board and internal team backlog simultaneously',
        'Excellent free guest accounts for clients to review work without consuming a paid seat',
        'Built-in timeline view and workload balancing',
      ],
      cons: [
        'Higher cost ($109.90/mo), though still well within the $150/mo agency budget',
        'Requires 1–2 hours of structured team training during initial week',
      ],
      bestFor: 'Client-facing creative agencies needing polished presentation',
      rating: '9.4 / 10 (Recommended)',
    },
    {
      name: 'ClickUp',
      tagline: 'Feature-dense all-in-one platform with infinite customization',
      monthlyCost10Seats: '$70.00 / mo ($7/seat Unlimited)',
      pros: [
        'Extreme feature density: native docs, whiteboards, time tracking, chat',
        'Very high value per dollar on paper',
      ],
      cons: [
        'Steep learning curve; team reported feeling overwhelmed by settings and toggles',
        'Noticeable occasional interface lag during rapid task updates',
        'High maintenance overhead to keep views standardized across team',
      ],
      bestFor: 'Technical software engineering teams needing complex hierarchies',
      rating: '7.8 / 10',
    },
  ],
  recommendation: {
    winner: 'Asana (Starter Tier)',
    executiveSummary: 'While Trello is cheaper and ClickUp has more toggles, Asana provides the exact balance of intuitive simplicity and client-facing polish that a 10-person creative agency requires. Its free guest permissions will save hundreds of dollars in client licenses, and its multi-homing capability solves the client-confidentiality problem without manual copying.',
    implementationPlan: [
      'Phase 1 (Day 1-2): Create one standardized "Client Project Template" with Milestone phases.',
      'Phase 2 (Day 3): Conduct a 30-minute team walkthrough showing how to manage "My Tasks".',
      'Phase 3 (Day 4-7): Migrate active client projects and invite client stakeholders as free Guests.',
    ],
  },
};

export interface SampleProject {
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  category: string;
  timeTaken: string;
  toolsUsed: string[];
  problem: string;
  whatIDid: string[];
  ctaCopy: string;
}

export const SAMPLE_PROJECTS: SampleProject[] = [
  {
    slug: 'inbox-triage',
    title: 'Inbox Triage & Priority Response System',
    subtitle: 'Clearing 10 high-stakes founder emails with categorized priority and drafted replies',
    shortDescription: 'Triage 10 incoming emails across investor requests, angry client complaints, invoices, and spam with drafted replies.',
    category: 'Inbox Management',
    timeTaken: '45 minutes',
    toolsUsed: ['Gmail', 'Google Workspace', 'Google Docs'],
    problem: 'The founder’s primary inbox was flooded with unread emails spanning critical investor requests, high-friction customer complaints, overdue vendor invoices, and unsolicited spam pitches. Important messages were buried, risking missed deadlines and customer churn.',
    whatIDid: [
      'Categorized all 10 messages into clear operational buckets: Urgent Client, Customer Issue, Finance/Invoice, Meeting, Operations, and Low-Priority/Spam.',
      'Assigned immediate triage priorities (High, Medium, Low) with actionable next steps.',
      'Drafted polite, professional, and context-aware replies for all incoming emails ready for 1-click founder approval.',
      'Set up proactive archive/filtering rules to keep sales spam out of the founder’s primary workspace.',
    ],
    ctaCopy: 'Need someone to filter your inbox daily, draft replies, and bring you to Inbox Zero every evening?',
  },
  {
    slug: 'weekly-schedule-plan',
    title: 'Executive Calendar Audit & Conflict Resolution',
    subtitle: 'Resolving overlapping meetings, time zone chaos, and protecting founder deep work',
    shortDescription: 'Audit a founder’s chaotic 5-day week, eliminate 4 major overlapping conflicts, and protect 12+ hours of deep focus.',
    category: 'Calendar Planning',
    timeTaken: '1 hour 15 minutes',
    toolsUsed: ['Google Calendar', 'Notion', 'WorldTimeBuddy'],
    problem: 'A busy founder was drowning in back-to-back meetings, zero bio or lunch breaks, an investor sync double-booked with an engineering standup, and transatlantic timezone errors causing midnight calls.',
    whatIDid: [
      'Audited every calendar invite across the full 5-day work week (Monday through Friday).',
      'Identified and resolved 4 critical scheduling conflicts, including rescheduling an investor review and consolidating fragmented operational syncs.',
      'Instituted standard 45-minute meetings with 15-minute buffers to prevent meeting fatigue.',
      'Carved out a dedicated 4-hour Thursday afternoon Deep Work block and daily morning focus intervals.',
    ],
    ctaCopy: 'Want a calendar that gives you breathing room and lets you focus on high-leverage business growth?',
  },
  {
    slug: 'spreadsheet-cleanup',
    title: 'CRM Contact Database Audit & Standardization',
    subtitle: 'Standardizing 50 chaotic Nigerian business contacts, eliminating duplicates, and normalizing phone numbers',
    shortDescription: 'Audit 50 raw contact rows: remove duplicates, normalize Nigerian phone formats, fix casing, and validate locations.',
    category: 'Data Entry & Cleanup',
    timeTaken: '1 hour 30 minutes',
    toolsUsed: ['Google Sheets', 'Excel Formulas', 'Data Validation Rules'],
    problem: 'A business contact export of 50 records contained duplicates with uppercase and lowercase variations, irregular phone numbers (some with +234, some with local 080..., some with dashes), and inconsistent city spellings, making SMS and CRM broadcasts fail.',
    whatIDid: [
      'Audited all 50 entries using programmatic and formulaic validation rules.',
      'Detected and purged 5 duplicate contact records based on canonical email matching.',
      'Normalized all Nigerian phone numbers into clean international E.164 format (+234 XXX XXX XXXX).',
      'Applied uniform Title Casing to names and validated Nigerian state capital city classifications.',
    ],
    ctaCopy: 'Have messy spreadsheets or customer lists that need meticulous cleaning and deduplication?',
  },
  {
    slug: 'customer-support-replies',
    title: 'Customer Support Communication Handbook',
    subtitle: '8 empathetic, brand-aligned response templates for high-stress customer situations',
    shortDescription: 'Eight ready-to-use customer support templates covering shipping delays, refund requests, angry venting, and onboarding.',
    category: 'Customer Support',
    timeTaken: '2 hours',
    toolsUsed: ['Google Docs', 'Notion', 'Zendesk Best Practices'],
    problem: 'Customer tickets were answered haphazardly with inconsistent tones, missed SLA turnaround times, and defensive replies that escalated frustrated customers.',
    whatIDid: [
      'Authored 8 comprehensive, empathetic support response templates addressing the most frequent and sensitive customer scenarios.',
      'Incorporated de-escalation psychology: empathetic validation, clear fact-based accountability, and actionable resolution steps.',
      'Included copy-to-clipboard functionality for rapid virtual assistant and helpdesk agent workflow execution.',
      'Documented specific tone rationale for each scenario so future responses maintain consistent brand warmth.',
    ],
    ctaCopy: 'Need reliable, empathetic customer email support that turns frustrated buyers into loyal brand advocates?',
  },
  {
    slug: 'research-brief',
    title: 'Project Management Tool Evaluation Brief',
    subtitle: 'A concise 1-page executive decision brief comparing Asana, Trello, and ClickUp',
    shortDescription: 'A 1-page executive research brief evaluating Asana vs Trello vs ClickUp for a 10-person remote creative team.',
    category: 'Research & Documents',
    timeTaken: '2 hours 15 minutes',
    toolsUsed: ['Google Docs', 'Google Sheets', 'SaaS Pricing Research'],
    problem: 'A remote agency was losing client deliverables due to fragmented communication. Leadership needed a reliable tool comparison without spending 20 hours testing platforms themselves.',
    whatIDid: [
      'Conducted a thorough comparative audit of three top platforms: Trello, Asana, and ClickUp.',
      'Evaluated each tool across 4 critical criteria: ease of use, guest collaboration, cost for 10 seats, and long-term scaling.',
      'Built a clear side-by-side comparison matrix with accurate real-world pricing and pros/cons.',
      'Synthesized findings into an actionable 1-page executive brief with a clear, definitive recommendation (Asana Starter) and 3-phase rollout plan.',
    ],
    ctaCopy: 'Need well-researched, crisp executive briefs that help you make smart business decisions fast?',
  },
];

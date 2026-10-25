import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  Calendar,
  Table,
  MessageSquare,
  FileSearch,
  FileDown,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  GraduationCap,
  MapPin,
  Clock,
  ShieldCheck,
  BadgeCheck,
} from 'lucide-react';
import {
  CLIENT_PROFILE,
  SERVICES,
  HOW_I_WORK,
  TOOLS,
  SAMPLE_PROJECTS,
  certifications,
} from '../content';
import { AnimationSlot } from '../components/AnimationSlot';
import { WorkCard } from '../components/WorkCard';
import { ContactSection } from '../components/ContactSection';

export const HomePage: React.FC = () => {
  const certsRef = useRef<HTMLElement>(null);
  const [certsVisible, setCertsVisible] = useState(false);

  useEffect(() => {
    if (!certsRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCertsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(certsRef.current);
    return () => observer.disconnect();
  }, []);
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Mail':
        return <Mail className="w-6 h-6 text-[#E07A5F]" />;
      case 'Calendar':
        return <Calendar className="w-6 h-6 text-[#81B29A]" />;
      case 'Table':
        return <Table className="w-6 h-6 text-[#C85F44]" />;
      case 'MessageSquare':
        return <MessageSquare className="w-6 h-6 text-[#5B8874]" />;
      case 'FileSearch':
        return <FileSearch className="w-6 h-6 text-[#E07A5F]" />;
      default:
        return <Mail className="w-6 h-6 text-[#E07A5F]" />;
    }
  };

  const whatsappHeroUrl = `https://wa.me/${CLIENT_PROFILE.whatsappNumber}?text=${encodeURIComponent(
    CLIENT_PROFILE.whatsappMessage
  )}`;

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* 1. HERO SECTION */}
      <section className="pt-8 sm:pt-14 pb-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-7">
              {/* Honest positioning badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4E9DC] border border-[#E6D7C5] text-xs font-medium text-[#3D2C24]">
                <MapPin className="w-3.5 h-3.5 text-[#E07A5F]" />
                <span>Virtual Assistant based in {CLIENT_PROFILE.location}</span>
                <span className="text-[#E6D7C5]">•</span>
                <span className="text-[#5B8874] font-semibold">Available for Paid Trial</span>
              </div>

              {/* Headline */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#3D2C24] tracking-tight leading-[1.12]">
                Calm inboxes. <br className="hidden sm:inline" />
                Organized calendars. <br className="hidden sm:inline" />
                <span className="text-[#E07A5F]">Happy customers.</span>
              </h1>

              {/* One-line intro */}
              <p className="text-lg sm:text-xl text-[#6B564D] leading-relaxed max-w-xl">
                {CLIENT_PROFILE.intro}
              </p>

              {/* Action Buttons: "See my work", "Download resume", "Chat on WhatsApp" */}
              <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 pt-2">
                <a
                  href="#work"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#E07A5F] hover:bg-[#C85F44] text-white font-medium text-sm transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
                >
                  <span>See my work</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={CLIENT_PROFILE.resumeUrl}
                  download="Great-Iniobong-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-3.5 rounded-full border border-[#E6D7C5] bg-[#F4E9DC]/70 hover:bg-[#F4E9DC] text-[#3D2C24] font-medium text-sm transition-all duration-200 hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
                >
                  <FileDown className="w-4 h-4 text-[#E07A5F]" />
                  <span>Download resume</span>
                </a>

                <a
                  href={whatsappHeroUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-3.5 rounded-full bg-[#81B29A] hover:bg-[#5B8874] text-white font-medium text-sm transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Small trust notice */}
              <div className="pt-2 flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-[#8D746A]">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#81B29A]" />
                  Transparent trial task offer
                </span>
                <span className="hidden sm:inline">•</span>
                <span>No long-term lock-in</span>
              </div>
            </div>

            {/* Right: ANIMATION SLOT */}
            <div className="lg:col-span-5 flex justify-center">
              <AnimationSlot />
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES SECTION */}
      <section id="services" className="scroll-mt-24" aria-labelledby="services-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#81B29A]/15 text-[#5B8874] text-xs font-semibold uppercase tracking-wider mb-3">
              Core Capabilities
            </span>
            <h2
              id="services-heading"
              className="font-serif text-3xl sm:text-4xl font-bold text-[#3D2C24] tracking-tight mb-4"
            >
              How I Support Your Day-to-Day
            </h2>
            <p className="text-[#6B564D] text-base sm:text-lg">
              Reliable admin execution so you spend your hours closing deals and building products, not digging through unread mail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-3xl p-7 sm:p-8 border border-[#E6D7C5] shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {service.id === 'data-entry' && (
                    <div className="rounded-2xl overflow-hidden mb-6 bg-[#F4E9DC]/60 border border-[#E6D7C5]/60 aspect-[640/420]">
                      <img
                        src="/spreadsheet-loop.svg"
                        alt="Animated spreadsheet cleanup showing formatted data rows and verified status"
                        width={640}
                        height={420}
                        loading="lazy"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}

                  {service.id === 'customer-support' && (
                    <div className="rounded-2xl overflow-hidden mb-6 bg-[#F4E9DC]/60 border border-[#E6D7C5]/60 aspect-[640/420]">
                      <img
                        src="/calls-loop.svg"
                        alt="Animated customer support workflow demonstrating call reception and prompt call note documentation"
                        width={640}
                        height={420}
                        loading="lazy"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}

                  <div className="w-12 h-12 rounded-2xl bg-[#FFF8F0] border border-[#F4E9DC] flex items-center justify-center mb-5">
                    {getServiceIcon(service.icon)}
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#3D2C24] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#6B564D] leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-2.5 pt-4 border-t border-[#F4E9DC]">
                  {service.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#3D2C24]">
                      <CheckCircle2 className="w-4 h-4 text-[#81B29A] shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WORK SECTION (5 SAMPLE PROJECTS) */}
      <section id="work" className="scroll-mt-24" aria-labelledby="work-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E07A5F]/15 text-[#C85F44] text-xs font-semibold uppercase tracking-wider mb-3">
                Proof Over Promises
              </span>
              <h2
                id="work-heading"
                className="font-serif text-3xl sm:text-4xl font-bold text-[#3D2C24] tracking-tight mb-3"
              >
                Sample Projects & Work Demonstrations
              </h2>
              <p className="text-[#6B564D] text-base max-w-xl">
                Instead of empty claims, here are 5 comprehensive sample projects with realistic scenarios, problem breakdowns, and exact outputs.
              </p>
            </div>
          </div>

          {/* 5 Cards Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {SAMPLE_PROJECTS.map((project, index) => (
              <WorkCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. HOW I WORK (3 STEPS) */}
      <section id="how-i-work" className="scroll-mt-24" aria-labelledby="how-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F4E9DC] rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#E6D7C5] shadow-soft">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/70 text-[#C85F44] text-xs font-semibold uppercase tracking-wider mb-3">
                Simple & Low Risk
              </span>
              <h2
                id="how-heading"
                className="font-serif text-3xl sm:text-4xl font-bold text-[#3D2C24] tracking-tight mb-4"
              >
                How We Can Work Together
              </h2>
              <p className="text-[#6B564D] text-base">
                No long contracts or guesswork. We begin with a small paid test task so you experience my speed and accuracy firsthand.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {HOW_I_WORK.map((item, idx) => (
                <div
                  key={item.step}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl p-7 border border-[#E6D7C5] relative flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#E07A5F]/15 text-[#C85F44] font-serif font-bold text-lg flex items-center justify-center mb-5">
                      {item.step}
                    </div>
                    <h3 className="font-serif text-xl font-bold text-[#3D2C24] mb-2.5">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#6B564D] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#F4E9DC] text-xs font-medium text-[#81B29A] flex items-center gap-1">
                    <span>Step {idx + 1} of 3</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#E07A5F] hover:bg-[#C85F44] text-white font-medium text-sm transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5"
              >
                <span>Propose a 1-hour trial task</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TOOLS SECTION */}
      <section aria-labelledby="tools-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-semibold text-[#8D746A] uppercase tracking-wider block mb-2">
              Everyday Stack
            </span>
            <h2
              id="tools-heading"
              className="font-serif text-2xl sm:text-3xl font-bold text-[#3D2C24]"
            >
              Tools I Use Daily
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {TOOLS.map((tool) => (
              <div
                key={tool.name}
                className="bg-white rounded-2xl p-5 border border-[#E6D7C5] shadow-soft text-center hover:border-[#E07A5F]/60 transition-colors"
              >
                <h3 className="font-serif text-base font-bold text-[#3D2C24] mb-1">
                  {tool.name}
                </h3>
                <span className="text-[11px] font-medium text-[#81B29A] bg-[#81B29A]/10 px-2 py-0.5 rounded-full inline-block mb-2">
                  {tool.category}
                </span>
                <p className="text-xs text-[#6B564D] leading-relaxed">
                  {tool.useCase}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CERTIFICATIONS SECTION */}
      <section
        id="certifications"
        ref={certsRef}
        className="scroll-mt-24"
        aria-labelledby="certifications-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 ${
              certsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs font-semibold text-[#8D746A] uppercase tracking-wider block mb-2">
                Verified Training
              </span>
              <h2
                id="certifications-heading"
                className="font-serif text-2xl sm:text-3xl font-bold text-[#3D2C24] mb-2"
              >
                Certifications
              </h2>
              <p className="text-sm sm:text-base text-[#6B564D]">
                Training completed to support my work.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-4xl mx-auto">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E6D7C5] shadow-soft flex items-start gap-4 transition-all duration-300 hover:shadow-soft-lg hover:-translate-y-0.5"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#81B29A]/15 text-[#5B8874] flex items-center justify-center shrink-0">
                    <BadgeCheck className="w-5 h-5 text-[#5B8874]" aria-hidden="true" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#3D2C24] mb-1 leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-[#8D746A] font-medium">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. ABOUT SECTION (HONEST POSITIONING) */}
      <section id="about" className="scroll-mt-24" aria-labelledby="about-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#FFF8F0] via-[#FAF3EB] to-[#F4E9DC] rounded-3xl p-8 sm:p-12 border border-[#E6D7C5] shadow-soft">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-3xl bg-[#E07A5F] text-[#FFF8F0] flex items-center justify-center font-serif text-5xl sm:text-6xl font-bold shrink-0 shadow-soft">
                GI
              </div>

              <div className="space-y-4 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E07A5F]/15 text-[#C85F44] text-xs font-semibold">
                  <GraduationCap className="w-4 h-4" />
                  <span>Student & Virtual Assistant in Ibadan, Nigeria</span>
                </div>
                <h2
                  id="about-heading"
                  className="font-serif text-2xl sm:text-3xl font-bold text-[#3D2C24]"
                >
                  Hi, I’m Great Iniobong
                </h2>
                <p className="text-sm sm:text-base text-[#6B564D] leading-relaxed">
                  {CLIENT_PROFILE.honestPositioning}
                </p>
                <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-medium text-[#3D2C24]">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#81B29A]" />
                    Reliable communication
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-[#E07A5F]" />
                    Thorough attention to detail
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#5B8874]" />
                    Standard Operating Procedure disciplined
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CONTACT SECTION WITH WEB3FORMS */}
      <ContactSection />
    </div>
  );
};

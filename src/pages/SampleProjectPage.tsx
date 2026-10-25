import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Wrench,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  FileCheck,
} from 'lucide-react';
import { SAMPLE_PROJECTS, CLIENT_PROFILE, SampleProject } from '../content';
import { InboxTriageSample } from '../components/samples/InboxTriageSample';
import { WeeklyScheduleSample } from '../components/samples/WeeklyScheduleSample';
import { SpreadsheetCleanupSample } from '../components/samples/SpreadsheetCleanupSample';
import { CustomerSupportSample } from '../components/samples/CustomerSupportSample';
import { ResearchBriefSample } from '../components/samples/ResearchBriefSample';

export const SampleProjectPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Scroll to top on slug change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const currentIndex = SAMPLE_PROJECTS.findIndex((p) => p.slug === slug);
  if (currentIndex === -1) {
    return <Navigate to="/404" replace />;
  }

  const project: SampleProject = SAMPLE_PROJECTS[currentIndex];
  const prevProject =
    currentIndex > 0 ? SAMPLE_PROJECTS[currentIndex - 1] : null;
  const nextProject =
    currentIndex < SAMPLE_PROJECTS.length - 1
      ? SAMPLE_PROJECTS[currentIndex + 1]
      : null;

  const renderSampleView = () => {
    switch (project.slug) {
      case 'inbox-triage':
        return <InboxTriageSample />;
      case 'weekly-schedule-plan':
        return <WeeklyScheduleSample />;
      case 'spreadsheet-cleanup':
        return <SpreadsheetCleanupSample />;
      case 'customer-support-replies':
        return <CustomerSupportSample />;
      case 'research-brief':
        return <ResearchBriefSample />;
      default:
        return null;
    }
  };

  const whatsappTaskUrl = `https://wa.me/${CLIENT_PROFILE.whatsappNumber}?text=${encodeURIComponent(
    `Hi Great, I reviewed your sample project "${project.title}" and I have a similar task I'd like to test via a paid trial.`
  )}`;

  return (
    <article className="py-8 sm:py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
      {/* Top Navigation & Back Link */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Link
          to="/#work"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#6B564D] hover:text-[#3D2C24] transition-colors py-1 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to all sample projects</span>
        </Link>

        {/* Fictional data badge displayed on inbox-triage only */}
        {project.slug === 'inbox-triage' && (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-200 text-xs font-semibold">
            <AlertCircle className="w-3.5 h-3.5 text-amber-700" />
            <span>Sample project — fictional data</span>
          </span>
        )}
      </div>

      {/* Header section: Title, Subtitle, Time Taken, Tools Used */}
      <div className="space-y-5 pb-8 border-b border-[#E6D7C5]">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E07A5F]/15 text-[#C85F44] text-xs font-semibold uppercase tracking-wider">
          {project.category}
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#3D2C24] tracking-tight leading-tight">
          {project.title}
        </h1>

        <p className="text-base sm:text-xl text-[#6B564D] leading-relaxed max-w-3xl">
          {project.subtitle}
        </p>

        {/* Quick meta badges */}
        <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-medium text-[#3D2C24]">
          <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border border-[#E6D7C5]">
            <Clock className="w-4 h-4 text-[#E07A5F]" />
            <span>Time taken: <strong className="font-semibold">{project.timeTaken}</strong></span>
          </div>

          <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border border-[#E6D7C5]">
            <Wrench className="w-4 h-4 text-[#81B29A]" />
            <span>Tools used: {project.toolsUsed.join(', ')}</span>
          </div>
        </div>
      </div>

      {/* The Problem & What I Did (Side-by-side on desktop, stacked on mobile) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* The Problem */}
        <div className="lg:col-span-5 bg-[#FAF4EC] p-7 rounded-3xl border border-[#E6D7C5] space-y-3">
          <span className="text-xs font-bold text-rose-800 uppercase tracking-wider block">
            The Challenge
          </span>
          <h2 className="font-serif text-2xl font-bold text-[#3D2C24]">
            The Problem
          </h2>
          <p className="text-sm text-[#6B564D] leading-relaxed">
            {project.problem}
          </p>
        </div>

        {/* What I Did */}
        <div className="lg:col-span-7 bg-white p-7 rounded-3xl border border-[#E6D7C5] shadow-soft space-y-4">
          <span className="text-xs font-bold text-[#5B8874] uppercase tracking-wider block">
            Execution & Strategy
          </span>
          <h2 className="font-serif text-2xl font-bold text-[#3D2C24]">
            What I Did
          </h2>
          <ul className="space-y-3">
            {project.whatIDid.map((step, idx) => (
              <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#3D2C24]">
                <CheckCircle2 className="w-4 h-4 text-[#81B29A] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Before and After Interactive Display */}
      <section className="space-y-6 pt-4">
        <div>
          <span className="text-xs font-semibold text-[#8D746A] uppercase tracking-wider block mb-1">
            Proof of Execution
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#3D2C24]">
            Interactive Demonstration
          </h2>
        </div>

        {renderSampleView()}
      </section>

      {/* "Want this for your business?" Call to Action Card */}
      <section className="bg-gradient-to-br from-[#FFF8F0] via-[#FAF3EB] to-[#F4E9DC] rounded-3xl p-8 sm:p-12 border border-[#E6D7C5] shadow-soft text-center space-y-6">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E07A5F]/15 text-[#C85F44] text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          Test My Work Firsthand
        </span>

        <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#3D2C24] max-w-xl mx-auto">
          Want this for your business?
        </h2>

        <p className="text-sm sm:text-base text-[#6B564D] max-w-2xl mx-auto leading-relaxed">
          {project.ctaCopy} Test my turnaround speed, communication, and attention to detail with a short 1–2 hour paid trial task before committing.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            to="/#contact"
            className="px-6 py-3.5 rounded-full bg-[#E07A5F] hover:bg-[#C85F44] text-white font-medium text-sm transition-all shadow-sm hover:shadow hover:-translate-y-0.5"
          >
            Request a paid trial task
          </Link>

          <a
            href={whatsappTaskUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-full bg-[#81B29A] hover:bg-[#5B8874] text-white font-medium text-sm transition-all shadow-sm hover:shadow hover:-translate-y-0.5 inline-flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </section>

      {/* Next and Previous Sample Links */}
      <nav aria-label="Sample projects navigation" className="pt-8 border-t border-[#E6D7C5] grid grid-cols-1 sm:grid-cols-2 gap-4">
        {prevProject ? (
          <Link
            to={`/work/${prevProject.slug}`}
            className="group p-5 rounded-2xl bg-white border border-[#E6D7C5] hover:border-[#E07A5F] shadow-soft transition-all text-left flex items-start gap-3"
          >
            <ArrowLeft className="w-5 h-5 text-[#8D746A] group-hover:text-[#E07A5F] group-hover:-translate-x-1 transition-all shrink-0 mt-0.5" />
            <div className="min-w-0">
              <span className="text-[11px] font-semibold text-[#8D746A] uppercase tracking-wider block">
                Previous Sample
              </span>
              <span className="font-serif text-base font-bold text-[#3D2C24] group-hover:text-[#E07A5F] transition-colors truncate block">
                {prevProject.title}
              </span>
            </div>
          </Link>
        ) : (
          <div className="hidden sm:block" />
        )}

        {nextProject ? (
          <Link
            to={`/work/${nextProject.slug}`}
            className="group p-5 rounded-2xl bg-white border border-[#E6D7C5] hover:border-[#E07A5F] shadow-soft transition-all text-right flex items-start justify-end gap-3 sm:col-start-2"
          >
            <div className="min-w-0">
              <span className="text-[11px] font-semibold text-[#8D746A] uppercase tracking-wider block">
                Next Sample
              </span>
              <span className="font-serif text-base font-bold text-[#3D2C24] group-hover:text-[#E07A5F] transition-colors truncate block">
                {nextProject.title}
              </span>
            </div>
            <ArrowRight className="w-5 h-5 text-[#8D746A] group-hover:text-[#E07A5F] group-hover:translate-x-1 transition-all shrink-0 mt-0.5" />
          </Link>
        ) : (
          <div className="hidden sm:block" />
        )}
      </nav>
    </article>
  );
};

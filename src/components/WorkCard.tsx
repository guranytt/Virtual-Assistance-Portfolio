import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight, Mail, Calendar, Table, MessageSquare, FileSearch } from 'lucide-react';
import { SampleProject } from '../content';

interface WorkCardProps {
  project: SampleProject;
  index: number;
}

export const WorkCard: React.FC<WorkCardProps> = ({ project, index }) => {
  const getIcon = () => {
    switch (project.slug) {
      case 'inbox-triage':
        return <Mail className="w-5 h-5 text-[#E07A5F]" />;
      case 'weekly-schedule-plan':
        return <Calendar className="w-5 h-5 text-[#81B29A]" />;
      case 'spreadsheet-cleanup':
        return <Table className="w-5 h-5 text-[#C85F44]" />;
      case 'customer-support-replies':
        return <MessageSquare className="w-5 h-5 text-[#5B8874]" />;
      case 'research-brief':
        return <FileSearch className="w-5 h-5 text-[#E07A5F]" />;
      default:
        return <Mail className="w-5 h-5 text-[#E07A5F]" />;
    }
  };

  return (
    <article className="group bg-white rounded-3xl p-6 sm:p-7 border border-[#E6D7C5] shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
      <div>
        {/* Top bar with category and fictional data disclaimer badge */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-xs font-semibold text-[#8D746A] uppercase tracking-wider">
            {project.category}
          </span>
          <span className="inline-flex items-center text-[10px] font-medium text-[#6B564D] bg-[#F4E9DC] px-2.5 py-0.5 rounded-full border border-[#E6D7C5]">
            Sample #{index + 1}
          </span>
        </div>

        {/* Icon container */}
        <div className="w-12 h-12 rounded-2xl bg-[#FFF8F0] border border-[#F4E9DC] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
          {getIcon()}
        </div>

        {/* Title */}
        <h3 className="font-serif text-xl font-bold text-[#3D2C24] mb-2.5 group-hover:text-[#E07A5F] transition-colors line-clamp-2">
          {project.title}
        </h3>

        {/* One line description */}
        <p className="text-sm text-[#6B564D] leading-relaxed mb-6">
          {project.shortDescription}
        </p>
      </div>

      {/* Card Footer: Time taken & View sample CTA */}
      <div className="pt-4 border-t border-[#F4E9DC] flex items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1.5 text-xs text-[#6B564D] font-medium">
          <Clock className="w-3.5 h-3.5 text-[#E07A5F]" />
          {project.timeTaken}
        </span>

        <Link
          to={`/work/${project.slug}`}
          className="inline-flex items-center gap-1 text-sm font-semibold text-[#E07A5F] group-hover:text-[#C85F44] transition-colors"
          aria-label={`View sample project: ${project.title}`}
        >
          <span>View sample</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
};

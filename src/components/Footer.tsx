import React from 'react';
import { Mail, MapPin, FileDown, Heart, ArrowUpRight } from 'lucide-react';
import { CLIENT_PROFILE } from '../content';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F4E9DC]/70 border-t border-[#E6D7C5] pt-14 pb-12 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#E6D7C5]">
          {/* Brand info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-2xl bg-[#E07A5F] text-[#FFF8F0] flex items-center justify-center font-serif text-lg font-bold shadow-sm">
                G
              </div>
              <span className="font-serif text-xl font-bold tracking-tight text-[#3D2C24]">
                {CLIENT_PROFILE.name}
              </span>
            </div>
            <p className="text-sm text-[#6B564D] max-w-md leading-relaxed">
              Virtual Assistant for busy founders and teams. Calm inboxes, organized calendars, clean spreadsheets, and patient customer replies.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-1 text-sm text-[#3D2C24]">
              <a
                href={`mailto:${CLIENT_PROFILE.email}`}
                className="inline-flex items-center gap-2 text-[#3D2C24] hover:text-[#E07A5F] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#E07A5F]" />
                <span>{CLIENT_PROFILE.email}</span>
              </a>
              <span className="hidden sm:inline text-[#E6D7C5]">•</span>
              <span className="inline-flex items-center gap-1.5 text-[#6B564D]">
                <MapPin className="w-4 h-4 text-[#81B29A]" />
                <span>{CLIENT_PROFILE.location}</span>
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-base font-semibold text-[#3D2C24]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-[#6B564D]">
              <li>
                <a href="/#work" className="hover:text-[#3D2C24] transition-colors">
                  Sample Projects
                </a>
              </li>
              <li>
                <a href="/#services" className="hover:text-[#3D2C24] transition-colors">
                  Services Offered
                </a>
              </li>
              <li>
                <a href="/#how-i-work" className="hover:text-[#3D2C24] transition-colors">
                  How I Work (Paid Trial)
                </a>
              </li>
              <li>
                <a href="/#about" className="hover:text-[#3D2C24] transition-colors">
                  About Great
                </a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-[#3D2C24] transition-colors">
                  Contact & Brief
                </a>
              </li>
            </ul>
          </div>

          {/* Action & Resume */}
          <div className="space-y-3">
            <h4 className="font-serif text-base font-semibold text-[#3D2C24]">
              Documents & Connect
            </h4>
            <div className="space-y-2.5">
              <a
                href={CLIENT_PROFILE.resumeUrl}
                download="Great-Iniobong-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-full border border-[#E6D7C5] bg-[#FFF8F0] hover:bg-[#FAF3EB] text-sm font-medium text-[#3D2C24] transition-all hover:shadow-sm"
              >
                <span className="flex items-center gap-2">
                  <FileDown className="w-4 h-4 text-[#E07A5F]" />
                  Download resume
                </span>
                <span className="text-xs text-[#8D746A]">PDF</span>
              </a>

              <a
                href={`https://wa.me/${CLIENT_PROFILE.whatsappNumber}?text=${encodeURIComponent(
                  CLIENT_PROFILE.whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-full bg-[#81B29A] hover:bg-[#5B8874] text-white text-sm font-medium transition-all shadow-sm"
              >
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright & honest ethics disclosure */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B564D]">
          <p>
            © {new Date().getFullYear()} {CLIENT_PROFILE.name}. Built with care from {CLIENT_PROFILE.location}.
          </p>
          <p className="flex items-center gap-1.5 text-center">
            <span>Honest portfolio: all sample data is clearly labelled and created to prove skill.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

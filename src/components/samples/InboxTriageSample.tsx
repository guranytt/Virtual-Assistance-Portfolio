import React, { useState } from 'react';
import { SAMPLE_EMAILS, EmailTriageItem } from '../../content';
import { Mail, Check, AlertTriangle, ArrowRight, CornerDownRight, CheckCircle2 } from 'lucide-react';

export const InboxTriageSample: React.FC = () => {
  const [selectedEmail, setSelectedEmail] = useState<EmailTriageItem>(SAMPLE_EMAILS[0]);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getPriorityBadge = (priority: 'High' | 'Medium' | 'Low') => {
    switch (priority) {
      case 'High':
        return <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-red-100 text-red-800">High Priority</span>;
      case 'Medium':
        return <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-amber-100 text-amber-800">Medium</span>;
      case 'Low':
        return <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-stone-100 text-stone-700">Low / Filter</span>;
    }
  };

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'Urgent Client': return 'bg-rose-50 text-rose-700 border-rose-200';
      case 'Customer Issue': return 'bg-orange-50 text-orange-700 border-orange-200';
      case 'Finance/Invoice': return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Meeting': return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Spam/Pitch': return 'bg-stone-100 text-stone-600 border-stone-200';
      default: return 'bg-purple-50 text-purple-700 border-purple-200';
    }
  };

  return (
    <div className="space-y-8">
      {/* Overview stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-2xl border border-[#E6D7C5]">
          <p className="text-xs text-[#6B564D]">Incoming Emails</p>
          <p className="font-serif text-2xl font-bold text-[#3D2C24]">10 Messages</p>
          <p className="text-[11px] text-[#81B29A] font-medium mt-0.5">100% Triaged</p>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-[#E6D7C5]">
          <p className="text-xs text-[#6B564D]">Drafted Replies</p>
          <p className="font-serif text-2xl font-bold text-[#3D2C24]">8 Ready</p>
          <p className="text-[11px] text-[#E07A5F] font-medium mt-0.5">1-Click Approval</p>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-[#E6D7C5]">
          <p className="text-xs text-[#6B564D]">Archived / Canned</p>
          <p className="font-serif text-2xl font-bold text-[#3D2C24]">2 Filtered</p>
          <p className="text-[11px] text-[#6B564D] mt-0.5">Sales Spam Cleared</p>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-[#E6D7C5]">
          <p className="text-xs text-[#6B564D]">Turnaround Time</p>
          <p className="font-serif text-2xl font-bold text-[#3D2C24]">45 mins</p>
          <p className="text-[11px] text-[#5B8874] font-medium mt-0.5">Zero Founder Stress</p>
        </div>
      </div>

      {/* Side-by-Side on Desktop, Stacked on Mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Email List (Before / Triage Queue) */}
        <div className="lg:col-span-5 bg-white rounded-3xl border border-[#E6D7C5] p-5 shadow-soft space-y-3">
          <div className="flex items-center justify-between pb-3 border-b border-[#F4E9DC]">
            <h3 className="font-serif text-base font-bold text-[#3D2C24] flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#E07A5F]" />
              Incoming Inbox Queue (10)
            </h3>
            <span className="text-xs text-[#8D746A]">Click to inspect</span>
          </div>

          <div className="space-y-2 max-h-[640px] overflow-y-auto pr-1">
            {SAMPLE_EMAILS.map((email) => {
              const isSelected = selectedEmail.id === email.id;
              return (
                <button
                  key={email.id}
                  onClick={() => setSelectedEmail(email)}
                  className={`w-full text-left p-3.5 rounded-2xl border transition-all text-xs ${
                    isSelected
                      ? 'border-[#E07A5F] bg-[#FFF8F0] shadow-sm'
                      : 'border-[#F4E9DC] hover:border-[#E6D7C5] bg-[#FAF4EC]/40'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="font-semibold text-[#3D2C24] truncate max-w-[180px]">
                      {email.sender}
                    </span>
                    {getPriorityBadge(email.priority)}
                  </div>
                  <p className="font-medium text-[#3D2C24] truncate mb-1">
                    {email.subject}
                  </p>
                  <p className="text-[#6B564D] line-clamp-1 text-[11px]">
                    {email.snippet}
                  </p>
                  <div className="mt-2 flex items-center gap-1.5">
                    <span className={`text-[10px] font-medium px-2 py-0.5 rounded-md border ${getCategoryColor(email.category)}`}>
                      {email.category}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Triage Result & Drafted Response (After) */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-[#E6D7C5] p-6 sm:p-8 shadow-soft space-y-6">
          <div className="pb-4 border-b border-[#F4E9DC]">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-lg border ${getCategoryColor(selectedEmail.category)}`}>
                {selectedEmail.category}
              </span>
              {getPriorityBadge(selectedEmail.priority)}
            </div>
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#3D2C24]">
              {selectedEmail.subject}
            </h4>
            <p className="text-xs text-[#6B564D] mt-1">
              From: <strong className="text-[#3D2C24]">{selectedEmail.sender}</strong> ({selectedEmail.senderEmail})
            </p>
          </div>

          {/* Action Taken summary */}
          <div className="p-4 rounded-2xl bg-[#FFF8F0] border border-[#F4E9DC] space-y-1">
            <span className="text-[11px] font-semibold text-[#E07A5F] uppercase tracking-wider block">
              VA Triage Action Taken
            </span>
            <p className="text-xs sm:text-sm text-[#3D2C24]">
              {selectedEmail.actionTaken}
            </p>
          </div>

          {/* Drafted Reply Card */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[#3D2C24] flex items-center gap-1.5">
                <CornerDownRight className="w-4 h-4 text-[#81B29A]" />
                Drafted Reply for Approval
              </span>
              <button
                type="button"
                onClick={() => handleCopy(selectedEmail.draftedReply, selectedEmail.id)}
                className="inline-flex items-center gap-1 text-xs font-medium text-[#E07A5F] hover:text-[#C85F44] transition-colors"
              >
                {copiedId === selectedEmail.id ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-600" />
                    <span className="text-green-700">Copied!</span>
                  </>
                ) : (
                  <span>Copy drafted reply</span>
                )}
              </button>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF4EC] border border-[#E6D7C5] font-sans text-xs sm:text-sm text-[#3D2C24] whitespace-pre-line leading-relaxed">
              {selectedEmail.draftedReply}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

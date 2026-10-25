import React, { useState } from 'react';
import { SUPPORT_TEMPLATES, SupportReplyTemplate } from '../../content';
import { MessageSquare, Copy, Check, Sparkles, HeartHandshake, ShieldAlert } from 'lucide-react';

export const CustomerSupportSample: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedTemplate, setSelectedTemplate] = useState<SupportReplyTemplate>(SUPPORT_TEMPLATES[0]);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2200);
  };

  return (
    <div className="space-y-8">
      {/* Metrics Banner */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-2xl border border-[#E6D7C5]">
          <p className="text-xs text-[#6B564D]">Response Templates</p>
          <p className="font-serif text-2xl font-bold text-[#3D2C24]">8 Scenarios</p>
          <p className="text-[11px] text-[#81B29A] font-medium mt-0.5">High-Stakes Inquiries</p>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-[#E6D7C5]">
          <p className="text-xs text-[#6B564D]">Tone Strategy</p>
          <p className="font-serif text-2xl font-bold text-[#5B8874]">Empathetic</p>
          <p className="text-[11px] text-[#5B8874] font-medium mt-0.5">De-escalation focused</p>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-[#E6D7C5]">
          <p className="text-xs text-[#6B564D]">Time to Draft</p>
          <p className="font-serif text-2xl font-bold text-[#3D2C24]">2 Hours</p>
          <p className="text-[11px] text-[#6B564D] mt-0.5">Polished & tested</p>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-[#E6D7C5]">
          <p className="text-xs text-[#6B564D]">One-Click Ready</p>
          <p className="font-serif text-2xl font-bold text-[#E07A5F]">Clipboard</p>
          <p className="text-[11px] text-[#E07A5F] font-medium mt-0.5">Instant team copy</p>
        </div>
      </div>

      {/* Side-by-Side: Template Selector & Active Detailed Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: List of 8 Scenarios */}
        <div className="lg:col-span-5 bg-white rounded-3xl border border-[#E6D7C5] p-5 shadow-soft space-y-3">
          <div className="flex items-center justify-between pb-3 border-b border-[#F4E9DC]">
            <h3 className="font-serif text-base font-bold text-[#3D2C24] flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-[#81B29A]" />
              Support Scenarios (8)
            </h3>
            <span className="text-xs text-[#8D746A]">Choose scenario</span>
          </div>

          <div className="space-y-2 max-h-[620px] overflow-y-auto pr-1">
            {SUPPORT_TEMPLATES.map((tmpl, idx) => {
              const isSelected = selectedTemplate.id === tmpl.id;
              return (
                <button
                  key={tmpl.id}
                  onClick={() => setSelectedTemplate(tmpl)}
                  className={`w-full text-left p-3.5 rounded-2xl border transition-all text-xs ${
                    isSelected
                      ? 'border-[#E07A5F] bg-[#FFF8F0] shadow-sm'
                      : 'border-[#F4E9DC] hover:border-[#E6D7C5] bg-[#FAF4EC]/40'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="font-semibold text-[#3D2C24]">
                      {idx + 1}. {tmpl.scenario}
                    </span>
                  </div>
                  <p className="text-[#6B564D] line-clamp-1 italic text-[11px]">
                    {tmpl.inquiry}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Active Scenario Deep Dive & Copy Button */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-[#E6D7C5] p-6 sm:p-8 shadow-soft space-y-6">
          <div className="pb-4 border-b border-[#F4E9DC]">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#81B29A]/15 text-[#5B8874] inline-block mb-2">
              Selected Template
            </span>
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#3D2C24]">
              {selectedTemplate.scenario}
            </h4>
          </div>

          {/* Customer inquiry callout */}
          <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 text-xs sm:text-sm text-amber-950 space-y-1">
            <span className="font-semibold text-amber-900 block flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-amber-700" />
              Customer's Raw Message:
            </span>
            <p className="italic pl-1">
              {selectedTemplate.inquiry}
            </p>
          </div>

          {/* Tone Strategy */}
          <div className="p-4 rounded-2xl bg-[#FFF8F0] border border-[#F4E9DC] text-xs text-[#6B564D] space-y-1">
            <span className="font-semibold text-[#E07A5F] block uppercase tracking-wider text-[11px]">
              Tone & De-escalation Strategy:
            </span>
            <p className="text-[#3D2C24]">
              {selectedTemplate.toneStrategy}
            </p>
          </div>

          {/* Drafted Template with Copy Button */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[#3D2C24] flex items-center gap-1.5">
                <HeartHandshake className="w-4 h-4 text-[#81B29A]" />
                Drafted Empathetic Response
              </span>
              <button
                type="button"
                onClick={() => handleCopy(selectedTemplate.reply, selectedTemplate.id)}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#E07A5F] hover:bg-[#C85F44] text-white text-xs font-medium transition-all shadow-sm active:scale-95"
                aria-label={`Copy reply template for ${selectedTemplate.scenario}`}
              >
                {copiedId === selectedTemplate.id ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Template</span>
                  </>
                )}
              </button>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF4EC] border border-[#E6D7C5] font-sans text-xs sm:text-sm text-[#3D2C24] whitespace-pre-line leading-relaxed">
              {selectedTemplate.reply}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

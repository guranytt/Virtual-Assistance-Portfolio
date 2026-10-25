import React from 'react';
import { RESEARCH_BRIEF_DATA } from '../../content';
import { FileSearch, CheckCircle2, XCircle, Award, Compass, DollarSign, Clock } from 'lucide-react';

export const ResearchBriefSample: React.FC = () => {
  const data = RESEARCH_BRIEF_DATA;

  return (
    <div className="space-y-8">
      {/* Executive Overview Banner */}
      <div className="bg-[#FFF8F0] p-6 sm:p-8 rounded-3xl border border-[#E6D7C5] shadow-soft space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#F4E9DC]">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#E07A5F]">
            1-Page Executive Research Brief
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#5B8874] bg-[#81B29A]/15 px-3 py-1 rounded-full">
            <Clock className="w-3.5 h-3.5" />
            2 hrs 15 mins research & synthesis
          </span>
        </div>

        <div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#3D2C24] mb-2">
            {data.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#6B564D] leading-relaxed">
            <strong className="text-[#3D2C24]">Context: </strong>
            {data.clientContext}
          </p>
        </div>

        {/* Evaluation Criteria */}
        <div className="pt-2">
          <span className="text-xs font-semibold text-[#3D2C24] block mb-2">
            Evaluation Criteria:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#6B564D]">
            {data.evaluationCriteria.map((crit, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-white/80 p-2.5 rounded-xl border border-[#F4E9DC]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#81B29A] shrink-0" />
                <span>{crit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3-Tool Comparison Cards & Side-by-Side Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.toolsCompared.map((tool) => {
          const isWinner = tool.name.includes('Asana');
          return (
            <div
              key={tool.name}
              className={`rounded-3xl p-6 sm:p-7 border flex flex-col justify-between transition-all ${
                isWinner
                  ? 'bg-white border-[#E07A5F] shadow-soft-lg ring-2 ring-[#E07A5F]/20 relative'
                  : 'bg-white/90 border-[#E6D7C5] shadow-soft'
              }`}
            >
              {isWinner && (
                <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-[#E07A5F] text-white text-[11px] font-bold uppercase tracking-wider flex items-center gap-1">
                  <Award className="w-3.5 h-3.5" />
                  Top Recommendation
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <h4 className="font-serif text-2xl font-bold text-[#3D2C24]">
                    {tool.name}
                  </h4>
                  <p className="text-xs text-[#6B564D] mt-1">
                    {tool.tagline}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#FFF8F0] border border-[#F4E9DC]">
                  <span className="text-[11px] text-[#8D746A] block">10 Seats Cost</span>
                  <span className="text-sm font-bold text-[#3D2C24] font-mono">
                    {tool.monthlyCost10Seats}
                  </span>
                </div>

                {/* Pros */}
                <div className="space-y-2">
                  <span className="text-xs font-semibold text-[#5B8874] block">Pros</span>
                  <ul className="space-y-1.5 text-xs text-[#3D2C24]">
                    {tool.pros.map((pro, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#81B29A] shrink-0 mt-0.5" />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cons */}
                <div className="space-y-2 pt-2 border-t border-[#F4E9DC]">
                  <span className="text-xs font-semibold text-rose-700 block">Cons</span>
                  <ul className="space-y-1.5 text-xs text-[#6B564D]">
                    {tool.cons.map((con, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <XCircle className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F4E9DC] flex items-center justify-between text-xs">
                <span className="text-[#8D746A]">Best For:</span>
                <span className="font-semibold text-[#3D2C24] text-right max-w-[150px]">
                  {tool.bestFor}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Clear Final Recommendation Box */}
      <div className="bg-[#FAF4EC] rounded-3xl p-6 sm:p-8 border border-[#E6D7C5] shadow-soft space-y-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#E07A5F] text-white flex items-center justify-center font-bold">
            <Award className="w-4 h-4" />
          </div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#3D2C24]">
            Definitive Recommendation: {data.recommendation.winner}
          </h3>
        </div>

        <p className="text-xs sm:text-sm text-[#3D2C24] leading-relaxed">
          {data.recommendation.executiveSummary}
        </p>

        <div className="pt-3 border-t border-[#E6D7C5]">
          <span className="text-xs font-semibold text-[#3D2C24] block mb-2">
            Suggested 1-Week Rollout Plan:
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {data.recommendation.implementationPlan.map((plan, i) => (
              <div key={i} className="p-3 bg-white rounded-xl border border-[#E6D7C5] text-xs text-[#6B564D]">
                <strong className="text-[#3D2C24] block mb-1">Step {i + 1}</strong>
                {plan}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

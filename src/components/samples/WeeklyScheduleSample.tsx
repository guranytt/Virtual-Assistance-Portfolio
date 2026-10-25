import React, { useState } from 'react';
import { CALENDAR_WEEK_SCHEDULE, CALENDAR_RESOLUTIONS, CalendarEvent } from '../../content';
import { Calendar, Clock, CheckCircle2, AlertTriangle, ArrowRight, ShieldCheck, Sun } from 'lucide-react';

export const WeeklyScheduleSample: React.FC = () => {
  const days: CalendarEvent['day'][] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const [activeDay, setActiveDay] = useState<CalendarEvent['day']>('Wednesday');

  const getEventTypeStyle = (type: CalendarEvent['type']) => {
    switch (type) {
      case 'Deep Focus':
        return 'bg-amber-50 border-amber-200 text-amber-900';
      case 'Client Meeting':
        return 'bg-sky-50 border-sky-200 text-sky-900';
      case 'Internal Sync':
        return 'bg-emerald-50 border-emerald-200 text-emerald-900';
      case 'Investor':
        return 'bg-purple-50 border-purple-200 text-purple-900';
      case 'Buffer & Lunch':
        return 'bg-stone-50 border-stone-200 text-stone-700';
      default:
        return 'bg-stone-50 border-stone-200 text-stone-700';
    }
  };

  const dayEvents = CALENDAR_WEEK_SCHEDULE.filter((ev) => ev.day === activeDay);

  return (
    <div className="space-y-10">
      {/* Metrics Banner */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-2xl border border-[#E6D7C5]">
          <p className="text-xs text-[#6B564D]">Focus Hours Saved</p>
          <p className="font-serif text-2xl font-bold text-[#3D2C24]">14.5 Hours</p>
          <p className="text-[11px] text-[#5B8874] font-medium mt-0.5">Protected Deep Work</p>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-[#E6D7C5]">
          <p className="text-xs text-[#6B564D]">Conflicts Resolved</p>
          <p className="font-serif text-2xl font-bold text-[#E07A5F]">4 Crises</p>
          <p className="text-[11px] text-[#E07A5F] font-medium mt-0.5">Double-bookings fixed</p>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-[#E6D7C5]">
          <p className="text-xs text-[#6B564D]">Buffer Time Added</p>
          <p className="font-serif text-2xl font-bold text-[#3D2C24]">15 Min / Call</p>
          <p className="text-[11px] text-[#81B29A] font-medium mt-0.5">Zero meeting burnout</p>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-[#E6D7C5]">
          <p className="text-xs text-[#6B564D]">Time Zone Standard</p>
          <p className="font-serif text-2xl font-bold text-[#3D2C24]">WAT (GMT+1)</p>
          <p className="text-[11px] text-[#6B564D] mt-0.5">UK & US Synced</p>
        </div>
      </div>

      {/* Calendar Grid View */}
      <div className="bg-white rounded-3xl border border-[#E6D7C5] p-6 sm:p-8 shadow-soft space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#F4E9DC]">
          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#3D2C24] flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#81B29A]" />
              Executive Weekly Schedule Grid
            </h3>
            <p className="text-xs text-[#6B564D] mt-1">
              Select a day to inspect scheduled time blocks, focus sessions, and conflict resolutions.
            </p>
          </div>

          {/* Day selection tabs */}
          <div className="flex items-center gap-1.5 p-1.5 bg-[#FAF4EC] rounded-2xl border border-[#E6D7C5] overflow-x-auto">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
                  activeDay === day
                    ? 'bg-[#E07A5F] text-white shadow-sm'
                    : 'text-[#6B564D] hover:text-[#3D2C24] hover:bg-white/60'
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline block for the chosen day */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-medium text-[#6B564D] px-2">
            <span>Schedule for {activeDay}</span>
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" /> Deep Focus
              <span className="w-2.5 h-2.5 rounded-full bg-sky-400 ml-2" /> Client
              <span className="w-2.5 h-2.5 rounded-full bg-purple-400 ml-2" /> Investor
            </span>
          </div>

          <div className="space-y-3 pt-2">
            {dayEvents.map((event, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-all ${getEventTypeStyle(
                  event.type
                )}`}
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider opacity-80">
                      {event.type}
                    </span>
                    {event.wasResolved && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold bg-[#E07A5F] text-white px-2 py-0.5 rounded-full">
                        <CheckCircle2 className="w-3 h-3" />
                        Conflict Resolved
                      </span>
                    )}
                  </div>
                  <h4 className="font-serif text-base font-bold text-[#3D2C24]">
                    {event.title}
                  </h4>
                  {event.notes && (
                    <p className="text-xs opacity-90 italic">
                      Note: {event.notes}
                    </p>
                  )}
                </div>

                <div className="shrink-0 flex items-center gap-2 sm:text-right">
                  <Clock className="w-4 h-4 opacity-70" />
                  <span className="text-xs font-semibold tracking-wide">
                    {event.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4 Detailed Conflict Resolutions Explanation */}
      <div className="space-y-4">
        <h3 className="font-serif text-2xl font-bold text-[#3D2C24]">
          How Each Conflict Was Resolved
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {CALENDAR_RESOLUTIONS.map((res, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-3xl border border-[#E6D7C5] shadow-soft space-y-3"
            >
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#E07A5F]/20 text-[#C85F44] flex items-center justify-center text-xs font-bold shrink-0">
                  {i + 1}
                </div>
                <h4 className="font-serif text-base font-bold text-[#3D2C24]">
                  {res.conflict}
                </h4>
              </div>

              <div className="text-xs space-y-2 pt-1">
                <p className="text-red-700 bg-red-50 p-2.5 rounded-xl border border-red-100">
                  <strong>The Crisis:</strong> {res.problem}
                </p>
                <p className="text-emerald-800 bg-emerald-50 p-2.5 rounded-xl border border-emerald-100">
                  <strong>My Resolution:</strong> {res.resolution}
                </p>
                <p className="text-[#6B564D] pl-1">
                  <strong>Founder Impact:</strong> {res.impact}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

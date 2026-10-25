import React, { useState } from 'react';
import { RAW_CONTACTS_DATA, CLEANED_CONTACTS_RESULT } from '../../content';
import { Table, Check, Search, CheckCircle2, AlertOctagon, Filter, RefreshCw, Eye } from 'lucide-react';

export const SpreadsheetCleanupSample: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'cleaned' | 'raw'>('cleaned');
  const [showAllRows, setShowAllRows] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const displayList = activeTab === 'cleaned' ? CLEANED_CONTACTS_RESULT.cleaned : RAW_CONTACTS_DATA;

  const filteredList = displayList.filter(
    (item) =>
      item.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const previewCount = 10;
  const visibleRows = showAllRows ? filteredList : filteredList.slice(0, previewCount);

  return (
    <div className="space-y-8">
      {/* Audit Fix Summary Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-2xl border border-[#E6D7C5]">
          <p className="text-xs text-[#6B564D]">Total Records Audited</p>
          <p className="font-serif text-2xl font-bold text-[#3D2C24]">50 Rows</p>
          <p className="text-[11px] text-[#81B29A] font-medium mt-0.5">Raw CRM Export</p>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-[#E6D7C5]">
          <p className="text-xs text-[#6B564D]">Duplicates Purged</p>
          <p className="font-serif text-2xl font-bold text-[#E07A5F]">
            {CLEANED_CONTACTS_RESULT.duplicateCount} Duplicates
          </p>
          <p className="text-[11px] text-[#E07A5F] font-medium mt-0.5">Identical emails merged</p>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-[#E6D7C5]">
          <p className="text-xs text-[#6B564D]">Phone Standardized</p>
          <p className="font-serif text-2xl font-bold text-[#3D2C24]">100%</p>
          <p className="text-[11px] text-[#5B8874] font-medium mt-0.5">+234 E.164 Format</p>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-[#E6D7C5]">
          <p className="text-xs text-[#6B564D]">Casing & City Validated</p>
          <p className="font-serif text-2xl font-bold text-[#3D2C24]">Cleaned</p>
          <p className="text-[11px] text-[#81B29A] font-medium mt-0.5">Title Casing Applied</p>
        </div>
      </div>

      {/* Main Table Interface */}
      <div className="bg-white rounded-3xl border border-[#E6D7C5] p-5 sm:p-7 shadow-soft space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#F4E9DC]">
          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#3D2C24] flex items-center gap-2">
              <Table className="w-5 h-5 text-[#E07A5F]" />
              Database Transformation: Before vs After
            </h3>
            <p className="text-xs text-[#6B564D] mt-1">
              Toggle between the messy raw export and the deduplicated, validated CRM database.
            </p>
          </div>

          {/* Toggle between Cleaned and Raw */}
          <div className="flex items-center gap-2 p-1.5 bg-[#FAF4EC] rounded-2xl border border-[#E6D7C5]">
            <button
              onClick={() => setActiveTab('cleaned')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'cleaned'
                  ? 'bg-[#81B29A] text-white shadow-sm'
                  : 'text-[#6B564D] hover:text-[#3D2C24]'
              }`}
            >
              ✓ Cleaned & Deduplicated ({CLEANED_CONTACTS_RESULT.cleaned.length})
            </button>
            <button
              onClick={() => setActiveTab('raw')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'raw'
                  ? 'bg-red-500 text-white shadow-sm'
                  : 'text-[#6B564D] hover:text-[#3D2C24]'
              }`}
            >
              ⚠ Raw Messy Export (50)
            </button>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-[#8D746A] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, email, or city..."
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-[#E6D7C5] bg-[#FFF8F0]/40 focus:outline-none focus:border-[#E07A5F] focus:bg-white"
            />
          </div>

          <span className="text-xs text-[#6B564D]">
            Showing {visibleRows.length} of {filteredList.length} rows
            {!showAllRows && filteredList.length > previewCount && ' (Preview)'}
          </span>
        </div>

        {/* The Responsive Data Table */}
        <div className="overflow-x-auto rounded-2xl border border-[#E6D7C5]">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-[#FAF4EC] border-b border-[#E6D7C5] text-[#3D2C24] font-semibold">
                <th className="py-3 px-4 w-12">#</th>
                <th className="py-3 px-4">Full Name</th>
                <th className="py-3 px-4">Email Address</th>
                <th className="py-3 px-4">Phone Number</th>
                <th className="py-3 px-4">City</th>
                <th className="py-3 px-4">Tier / Category</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F4E9DC]">
              {visibleRows.map((row, idx) => (
                <tr
                  key={row.id + '-' + idx}
                  className={`hover:bg-[#FFF8F0] transition-colors ${
                    activeTab === 'raw' && [8, 15, 26, 36, 47].includes(row.id)
                      ? 'bg-red-50/70 text-red-900'
                      : ''
                  }`}
                >
                  <td className="py-3 px-4 text-[#8D746A] font-medium">{row.id}</td>
                  <td className="py-3 px-4 font-semibold text-[#3D2C24]">
                    {row.fullName}
                  </td>
                  <td className="py-3 px-4 font-mono text-[11px] text-[#6B564D]">
                    {row.email}
                  </td>
                  <td className="py-3 px-4 font-mono text-[11px] text-[#3D2C24]">
                    {row.phone}
                  </td>
                  <td className="py-3 px-4 text-[#3D2C24]">{row.city}</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-[#F4E9DC] text-[#3D2C24] border border-[#E6D7C5]">
                      {row.category}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Toggle Show All 50 Rows */}
        <div className="flex items-center justify-center pt-2">
          <button
            type="button"
            onClick={() => setShowAllRows(!showAllRows)}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#E6D7C5] bg-[#FAF4EC] hover:bg-[#F4E9DC] text-xs font-semibold text-[#3D2C24] transition-all hover:shadow-sm"
          >
            <Eye className="w-3.5 h-3.5 text-[#E07A5F]" />
            <span>
              {showAllRows
                ? 'Show 10 Rows Preview'
                : `Show all ${filteredList.length} rows`}
            </span>
          </button>
        </div>

        {/* Audit Methodology Note */}
        <div className="p-4 rounded-2xl bg-[#FFF8F0] border border-[#F4E9DC] text-xs text-[#6B564D] space-y-1.5">
          <span className="font-semibold text-[#3D2C24] block">
            What was fixed in this audit:
          </span>
          <ul className="list-disc list-inside space-y-1 pl-1">
            <li>
              <strong>De-duplication:</strong> 5 duplicate entries (e.g. Babatunde Adeyemi, Chioma Okonkwo, Ibrahim Danladi) merged into canonical records based on lowercase email hash.
            </li>
            <li>
              <strong>Nigerian Phone Normalization:</strong> Converted local 080..., 23480..., and hyphenated forms into standard E.164 (+234 803 123 4567) suitable for WhatsApp and SMS broadcast APIs.
            </li>
            <li>
              <strong>Data Consistency:</strong> Fixed random all-caps (MARY OKOH, IBRAHIM DANLADI) into clean Title Case and standardized Nigerian city spellings.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <main className="min-h-[60vh] flex items-center justify-center py-20 px-4">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 border border-[#E6D7C5] shadow-soft text-center space-y-6">
        <div className="w-16 h-16 mx-auto rounded-3xl bg-[#FAF4EC] border border-[#E6D7C5] flex items-center justify-center text-[#E07A5F] font-serif text-3xl font-extrabold">
          404
        </div>

        <div className="space-y-2">
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#3D2C24]">
            Page Not Found
          </h1>
          <p className="text-sm text-[#6B564D] leading-relaxed">
            Oops! The page or sample project you were looking for doesn't exist or has moved.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#E07A5F] hover:bg-[#C85F44] text-white text-sm font-medium transition-all shadow-sm"
          >
            <Home className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </Link>

          <Link
            to="/#work"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-[#E6D7C5] bg-[#FAF4EC] hover:bg-[#F4E9DC] text-[#3D2C24] text-sm font-medium transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>View Sample Projects</span>
          </Link>
        </div>
      </div>
    </main>
  );
};

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CLIENT_PROFILE } from '../content';

export const WhatsAppButton: React.FC = () => {
  const whatsappUrl = `https://wa.me/${CLIENT_PROFILE.whatsappNumber}?text=${encodeURIComponent(
    CLIENT_PROFILE.whatsappMessage
  )}`;

  return (
    <aside aria-label="Quick contact widget">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Great on WhatsApp"
        className="fixed bottom-6 right-6 z-50 group flex items-center gap-2.5 p-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        <MessageCircle className="w-6 h-6 fill-white stroke-none" />
        <span className="hidden sm:inline-block max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-sm font-medium pr-1">
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
};

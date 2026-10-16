import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { siteData } from '../data/siteData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => {
    const text = encodeURIComponent(siteData.company.defaultWhatsappMessage);
    window.open(`https://wa.me/${siteData.company.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <aside
      aria-label="Atendimento rápido via WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center group"
    >
      {/* Tooltip */}
      <div
        className={`absolute right-16 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-md pointer-events-none transition-all duration-200 ${
          showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
      >
        Tire suas dúvidas no WhatsApp!
        <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-slate-900 rotate-45" />
      </div>

      {/* Floating Button */}
      <button
        type="button"
        onClick={handleClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-xl hover:shadow-emerald-500/30 transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400/50"
        aria-label="Abrir conversa no WhatsApp da RAV Escritórios"
      >
        {/* Subtle breathing ripple */}
        <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-20 pointer-events-none" />
        <MessageSquare className="w-7 h-7 text-white fill-white relative z-10" />
      </button>
    </aside>
  );
};

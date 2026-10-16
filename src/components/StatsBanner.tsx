import React, { useState, useEffect } from 'react';
import { Star, Shield, Building, PhoneCall } from 'lucide-react';
import { siteData } from '../data/siteData';

export const StatsBanner: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const icons = [
    <Star className="w-5 h-5 text-amber-500 fill-amber-500" key="star" />,
    <Shield className="w-5 h-5 text-emerald-600" key="shield" />,
    <Building className="w-5 h-5 text-blue-600" key="building" />,
    <PhoneCall className="w-5 h-5 text-indigo-600" key="phone" />,
  ];

  return (
    <section id="destaques" className="relative py-14 overflow-hidden bg-slate-900 text-white">
      {/* Background Parallax Texture */}
      <div
        className="absolute inset-0 opacity-15 will-change-transform pointer-events-none"
        style={{
          transform: `translate3d(0, ${(scrollY - 400) * 0.15}px, 0)`,
          backgroundImage: `radial-gradient(circle at 50% 50%, #3b82f6 0%, transparent 60%)`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {siteData.stats.map((stat, idx) => (
            <div
              key={stat.label}
              className="backdrop-blur-md bg-white/95 text-slate-900 border border-slate-200/90 rounded-2xl p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-heading text-3xl font-extrabold tracking-tight text-slate-950 tabular-nums">
                  {stat.value}
                </span>
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center border border-slate-200/70">
                  {icons[idx]}
                </div>
              </div>

              <h3 className="font-heading text-base font-bold text-slate-900 mb-1 leading-snug">
                {stat.label}
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed font-normal">
                {stat.sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

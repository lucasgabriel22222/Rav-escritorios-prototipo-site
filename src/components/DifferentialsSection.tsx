import React from 'react';
import {
  Star,
  Armchair,
  Building2,
  ShieldCheck,
  Briefcase,
  Phone,
  CheckCircle2
} from 'lucide-react';
import { siteData } from '../data/siteData';

export const DifferentialsSection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Star: <Star className="w-5 h-5 text-amber-500 fill-amber-500" />,
    Armchair: <Armchair className="w-5 h-5 text-blue-600" />,
    Building2: <Building2 className="w-5 h-5 text-slate-800" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
    Briefcase: <Briefcase className="w-5 h-5 text-indigo-600" />,
    Phone: <Phone className="w-5 h-5 text-teal-600" />,
  };

  return (
    <section id="diferenciais" className="py-20 md:py-28 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-700 uppercase mb-3">
            <CheckCircle2 className="w-3.5 h-3.5 text-slate-700" />
            <span>Por que escolher a RAV Escritórios</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight mb-4 text-balance">
            Diferenciais Práticos para a Sua Empresa
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            Soluções completas com atendimento de alto padrão em Cuiabá. Garantimos pontualidade, qualidade estrutural e foco absoluto na ergonomia da sua equipe.
          </p>
        </div>

        {/* Bento / Asymmetric Grid of Differentials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteData.differentials.map((diff, index) => (
            <div
              key={diff.id}
              className="p-7 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all duration-200 hover:bg-slate-50/80 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-xs">
                    {iconMap[diff.icon] || <ShieldCheck className="w-5 h-5 text-slate-700" />}
                  </div>
                  <span className="text-xs font-mono font-medium text-slate-400">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="font-heading text-lg font-bold text-slate-900 mb-2 leading-snug">
                  {diff.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {diff.description}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-medium text-slate-500">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                <span>Padrão Corporativo RAV</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

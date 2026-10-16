import React, { useState } from 'react';
import { MessageSquare, Phone, CheckCircle, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';
import { siteData } from '../data/siteData';

interface CtaSectionProps {
  onOpenQuoteModal: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenQuoteModal }) => {
  const [selectedInterest, setSelectedInterest] = useState<string>('todos');

  const interestOptions = [
    { id: 'todos', label: 'Projeto Completo de Escritório' },
    { id: 'cadeiras', label: 'Cadeiras Ergonômicas' },
    { id: 'estacoes', label: 'Estações de Trabalho' },
    { id: 'reuniao', label: 'Mesa de Reunião / Diretoria' },
    { id: 'armarios', label: 'Armários & Arquivos' },
  ];

  const handleSendInterestWhatsApp = () => {
    const selectedObj = interestOptions.find(o => o.id === selectedInterest);
    const text = encodeURIComponent(
      `Olá! Estou no site da RAV Escritórios e gostaria de solicitar um orçamento para: ${selectedObj?.label || 'Mobiliário Corporativo'}. Pode me atender?`
    );
    window.open(`https://wa.me/${siteData.company.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Structural Accent Lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-500 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-emerald-500 blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Subtle Kicker */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-4">
          <span className="w-2 h-2 rounded-sm bg-emerald-400" />
          <span>Atendimento Corporativo Imediato em Cuiabá</span>
        </div>

        {/* H2 Title */}
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-5 text-balance">
          Precisa equipar ou renovar os móveis do seu escritório?
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Fale diretamente com a RAV Escritórios pelo WhatsApp, envie sua lista de necessidades e solicite um orçamento exclusivo com condições para empresas.
        </p>

        {/* Quick Selection Card before WhatsApp trigger */}
        <div className="max-w-xl mx-auto bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-md mb-8 text-left shadow-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-3">
            Qual o foco do seu orçamento hoje?
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
            {interestOptions.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setSelectedInterest(opt.id)}
                className={`flex items-center gap-2 p-2.5 rounded-lg text-xs font-medium transition-all text-left border ${
                  selectedInterest === opt.id
                    ? 'bg-slate-800 text-white border-emerald-500/80'
                    : 'bg-slate-950/60 text-slate-400 border-slate-800 hover:text-slate-200'
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                    selectedInterest === opt.id
                      ? 'border-emerald-400 bg-emerald-400 text-slate-950'
                      : 'border-slate-600'
                  }`}
                >
                  {selectedInterest === opt.id && <div className="w-1.5 h-1.5 rounded-full bg-slate-950" />}
                </div>
                <span className="truncate">{opt.label}</span>
              </button>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              type="button"
              onClick={handleSendInterestWhatsApp}
              className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow-lg hover:shadow-emerald-400/20 active:scale-[0.99]"
            >
              <MessageSquare className="w-5 h-5 text-slate-950 fill-slate-950" />
              <span>Falar no WhatsApp Agora</span>
            </button>

            <button
              type="button"
              onClick={onOpenQuoteModal}
              className="w-full sm:w-auto px-4 py-4 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 rounded-xl transition-colors border border-slate-700 whitespace-nowrap"
            >
              Personalizar Lista Detalhada
            </button>
          </div>
        </div>

        {/* Trust Points */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Resposta rápida durante horário comercial</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Montagem própria com pontualidade</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Showroom no Jardim Imperial - Cuiabá</span>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import { MessageSquare, ArrowDown, ChevronRight, ShieldCheck, MapPin, Star } from 'lucide-react';
import { siteData } from '../data/siteData';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(siteData.company.defaultWhatsappMessage);
    window.open(`https://wa.me/${siteData.company.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16"
    >
      {/* Real Parallax Image Background using translateY */}
      <div
        className="absolute inset-0 w-full h-[120%] -top-[10%] pointer-events-none will-change-transform"
        style={{
          transform: `translate3d(0, ${scrollY * 0.35}px, 0)`,
        }}
      >
        <img
          src={siteData.hero.heroImage}
          alt="Showroom de móveis corporativos e escritório da RAV Escritórios em Cuiabá"
          className="w-full h-full object-cover object-center filter brightness-[0.88]"
          referrerPolicy="no-referrer"
        />
        {/* Soft Corporate Overlay Gradients for Perfect Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-20">
        <div className="max-w-3xl">
          {/* Top Editorial Kicker (Zero-Pill Discipline) */}
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-300 uppercase mb-4">
            <span className="w-2 h-2 rounded-sm bg-emerald-400 shrink-0" />
            <span>Móveis para Escritório e Corporativos em Cuiabá - MT</span>
            <span className="text-slate-500" aria-hidden="true">·</span>
            <span className="hidden sm:inline text-slate-400">Jardim Imperial</span>
          </div>

          {/* Main H1 Headline */}
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6 text-balance">
            Mobiliário Corporativo, Cadeiras Ergonômicas e Soluções para o Seu Escritório
          </h1>

          {/* Objective Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed font-normal mb-8 max-w-2xl">
            Projetos corporativos ergonômicos em conformidade com a NR-17. Cadeiras executivas, estações de trabalho e arquivos com entrega e montagem profissional na Av. Profa. Edna Maria de Albuquerque Affi em Cuiabá.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <button
              type="button"
              onClick={handleWhatsAppClick}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-4 text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow-lg hover:shadow-emerald-400/20 active:scale-[0.99] whitespace-nowrap"
            >
              <MessageSquare className="w-5 h-5 text-slate-950 fill-slate-950" />
              <span>Solicitar Orçamento no WhatsApp</span>
            </button>

            <a
              href="#produtos"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-xl transition-all hover:border-white/30 whitespace-nowrap"
            >
              <span>Ver Catálogo de Móveis</span>
              <ChevronRight className="w-4 h-4 text-slate-300" />
            </a>

            <button
              type="button"
              onClick={onOpenQuoteModal}
              className="inline-flex items-center justify-center text-xs font-semibold text-slate-300 hover:text-white underline underline-offset-4 px-2 py-2 sm:py-0 transition-colors"
            >
              Montar lista rápida de itens
            </button>
          </div>

          {/* Quick Credibility Trust Strip (Editorial, No Fake Clutter) */}
          <div className="pt-6 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-4 text-slate-300 text-xs">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded bg-white/10 text-amber-400 shrink-0">
                <Star className="w-4 h-4 fill-amber-400" />
              </div>
              <div>
                <span className="font-bold text-white block">Nota 5.0 no Google</span>
                <span className="text-slate-400 text-[11px]">13 avaliações corporativas</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded bg-white/10 text-emerald-400 shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-white block">Garantia & Montagem</span>
                <span className="text-slate-400 text-[11px]">Equipe técnica própria</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded bg-white/10 text-blue-400 shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-white block">Jardim Imperial - Cuiabá</span>
                <span className="text-slate-400 text-[11px]">Av. Edna Affi, 1418</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <a
        href="#destaques"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-400 hover:text-white transition-colors text-xs font-medium focus-visible:outline-none"
        aria-label="Rolar para destaques"
      >
        <span className="text-[11px] uppercase tracking-wider">Conheça Nossos Diferenciais</span>
        <div className="w-6 h-10 rounded-full border-2 border-slate-400/50 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-2 bg-emerald-400 rounded-full animate-bounce" />
        </div>
      </a>
    </section>
  );
};

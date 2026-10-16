import React, { useState, useEffect } from 'react';
import { Briefcase, Menu, X, MessageSquare, Phone } from 'lucide-react';
import { siteData } from '../data/siteData';

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsScrolled(currentScroll > 20);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (currentScroll / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Produtos', href: '#produtos' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Avaliações', href: '#avaliacoes' },
    { name: 'Localização', href: '#localizacao' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(siteData.company.defaultWhatsappMessage);
    window.open(`https://wa.me/${siteData.company.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <>
      {/* Top Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-slate-100 z-50">
        <div
          className="h-full bg-slate-900 transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-1 left-0 right-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'backdrop-blur-md bg-white/95 border-b border-slate-200 shadow-sm py-3'
            : 'backdrop-blur-sm bg-white/85 border-b border-slate-200/80 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand Wordmark */}
            <a
              href="#inicio"
              className="flex items-center gap-2.5 text-slate-900 group whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 rounded-md"
            >
              <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-white transition-transform group-hover:scale-105 shadow-sm">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-lg sm:text-xl tracking-tight text-slate-950 leading-none">
                  RAV ESCRITÓRIOS
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-700 mt-0.5">
                  Móveis Corporativos
                </span>
              </div>
            </a>

            {/* Zone 2: Navigation Links (Desktop) */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0 relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 rounded"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Zone 3: Actions */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={onOpenQuoteModal}
                className="px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200 whitespace-nowrap shrink-0"
              >
                Cotação Rápida
              </button>
              <button
                type="button"
                onClick={handleWhatsAppClick}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-950 rounded-lg hover:bg-slate-800 transition-colors shadow-sm whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-900"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Solicitar Orçamento</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={handleWhatsAppClick}
                className="p-2 text-white bg-slate-900 rounded-lg sm:hidden"
                aria-label="Abrir WhatsApp"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
                aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-lg animate-in fade-in duration-150">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-950 hover:bg-slate-50 rounded-md transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuoteModal();
                  }}
                  className="w-full py-2.5 text-center text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-200"
                >
                  Montar Cotação Personalizada
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleWhatsAppClick();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 text-center text-xs font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-lg transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>Solicitar Orçamento no WhatsApp</span>
                </button>
                <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-1">
                  <Phone className="w-3.5 h-3.5 text-slate-400" />
                  <span>{siteData.company.phoneFormatted}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

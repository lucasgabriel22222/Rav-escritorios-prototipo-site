import React from 'react';
import { Briefcase, MapPin, Phone, Instagram, Shield, ArrowUp } from 'lucide-react';
import { siteData } from '../data/siteData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          {/* Col 1: Brand & Overview */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5 text-white">
              <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white border border-white/10">
                <Briefcase className="w-5 h-5 text-emerald-400" />
              </div>
              <span className="font-heading font-extrabold text-xl tracking-tight text-white">
                RAV ESCRITÓRIOS
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Móveis ergonômicos, cadeiras executivas, mesas e soluções completas para escritórios de alta performance em Cuiabá e região.
            </p>

            <div className="flex items-center gap-3 pt-2">
              {siteData.company.instagramUrl && (
                <a
                  href={siteData.company.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                  aria-label="Instagram da RAV Escritórios"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              )}
              <a
                href={`https://wa.me/${siteData.company.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 flex items-center justify-center text-emerald-400 hover:text-emerald-300 transition-colors"
                aria-label="WhatsApp da RAV Escritórios"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <span className="font-heading text-xs font-bold text-white uppercase tracking-wider block">
              Navegação
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">Início</a>
              </li>
              <li>
                <a href="#produtos" className="hover:text-white transition-colors">Catálogo de Móveis</a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-white transition-colors">Diferenciais RAV</a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-white transition-colors">Avaliações de Clientes</a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-white transition-colors">Showroom no Jardim Imperial</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">Perguntas Frequentes</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact Information */}
          <div className="lg:col-span-4 space-y-3">
            <span className="font-heading text-xs font-bold text-white uppercase tracking-wider block">
              Unidade Cuiabá
            </span>

            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span>
                  {siteData.company.fullAddress}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-slate-500 shrink-0" />
                <a
                  href={`https://wa.me/${siteData.company.whatsappNumber}`}
                  className="hover:text-white transition-colors font-medium text-slate-300"
                >
                  {siteData.company.phoneFormatted}
                </a>
              </div>

              <div className="pt-2 text-[11px] text-slate-500">
                Segunda a Sexta: 08:00 às 18:00
                <br />
                Sábado: 08:00 às 12:00
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {currentYear} {siteData.company.name}. Todos os direitos reservados. CNPJ e atendimento para pessoa física e jurídica.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors focus-visible:outline-none"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

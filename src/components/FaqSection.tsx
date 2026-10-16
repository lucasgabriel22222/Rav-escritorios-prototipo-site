import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { siteData } from '../data/siteData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#F8FAFC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-700 uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-slate-700" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight mb-4 text-balance">
            Perguntas Frequentes
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            Informações claras sobre o atendimento corporativo, prazos de entrega, montagem e cotações na RAV Escritórios.
          </p>
        </div>

        {/* Interactive Accordion */}
        <div className="space-y-4">
          {siteData.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs transition-colors duration-150"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-base sm:text-lg font-bold text-slate-900 pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-slate-900 text-white' : 'text-slate-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 text-center p-6 bg-white border border-slate-200 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-heading text-sm sm:text-base font-bold text-slate-900">
              Sua dúvida não foi listada aqui?
            </h4>
            <p className="text-xs text-slate-500">
              Converse diretamente com nossos consultores de vendas no WhatsApp.
            </p>
          </div>
          <a
            href={`https://wa.me/${siteData.company.whatsappNumber}?text=${encodeURIComponent('Olá! Tenho uma dúvida sobre os móveis corporativos da RAV Escritórios.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-xs"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};

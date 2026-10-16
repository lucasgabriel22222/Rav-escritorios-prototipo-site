import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Clock, ExternalLink, Navigation, Building2 } from 'lucide-react';
import { siteData } from '../data/siteData';

export const LocationSection: React.FC = () => {
  const [isOpenNow, setIsOpenNow] = useState<boolean>(false);

  useEffect(() => {
    // Check Cuiabá time (UTC-4)
    const checkBusinessStatus = () => {
      const now = new Date();
      // UTC time in ms + Cuiaba offset (-4 hours = -240 minutes)
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const cuiabaTime = new Date(utc + (3600000 * -4));
      
      const day = cuiabaTime.getDay(); // 0 is Sunday, 1-5 Mon-Fri, 6 Sat
      const hour = cuiabaTime.getHours();
      const minute = cuiabaTime.getMinutes();
      const currentTime = hour + minute / 60;

      if (day >= 1 && day <= 5) {
        // Monday to Friday: 08:00 to 18:00
        setIsOpenNow(currentTime >= 8 && currentTime < 18);
      } else if (day === 6) {
        // Saturday: 08:00 to 12:00
        setIsOpenNow(currentTime >= 8 && currentTime < 12);
      } else {
        // Sunday: Closed
        setIsOpenNow(false);
      }
    };

    checkBusinessStatus();
    const interval = setInterval(checkBusinessStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="localizacao" className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-700 uppercase mb-3">
            <Building2 className="w-3.5 h-3.5 text-slate-700" />
            <span>Showroom & Atendimento Corporativo</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight mb-4 text-balance">
            Nossa Loja em Cuiabá
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            Visite nosso showroom no Jardim Imperial para testar pessoalmente as cadeiras ergonômicas, conferir o acabamento dos móveis corporativos e alinhar o projeto da sua empresa.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Column 1: Practical Contact & Location Details */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
            <div className="space-y-6">
              {/* Address Block */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-xs">
                  <MapPin className="w-5 h-5 text-slate-800" />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-bold text-slate-900 mb-1">
                    Endereço Completo
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {siteData.company.address}
                    <br />
                    {siteData.company.neighborhood} — Cuiabá, MT
                    <br />
                    CEP {siteData.company.cep}
                  </p>
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-xs">
                  <Phone className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-bold text-slate-900 mb-1">
                    Telefone e WhatsApp
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <a
                      href={`https://wa.me/${siteData.company.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-900 font-semibold hover:text-emerald-700 transition-colors"
                    >
                      {siteData.company.phoneFormatted}
                    </a>
                    <span className="block text-xs text-slate-500 mt-0.5">
                      Atendimento comercial direto e envio de projetos
                    </span>
                  </p>
                </div>
              </div>

              {/* Business Hours & Dynamic Status */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-xs">
                  <Clock className="w-5 h-5 text-blue-600" />
                </div>
                <div className="w-full">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-heading text-sm font-bold text-slate-900">
                      Horário de Funcionamento
                    </h3>
                    <span
                      className={`text-[11px] font-semibold px-2 py-0.5 rounded border ${
                        isOpenNow
                          ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                          : 'bg-slate-100 text-slate-600 border-slate-200'
                      }`}
                    >
                      {isOpenNow ? 'Aberto agora' : 'Fechado no momento'}
                    </span>
                  </div>

                  <div className="space-y-1 text-xs text-slate-600">
                    {siteData.company.businessHours.map((schedule, idx) => (
                      <div key={idx} className="flex justify-between py-1 border-b border-slate-200/50 last:border-0">
                        <span className="font-medium text-slate-700">{schedule.days}</span>
                        <span className="text-slate-600 tabular-nums">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 mt-6 border-t border-slate-200 space-y-3">
              <a
                href={siteData.company.googleMapsDirectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-slate-950 bg-white hover:bg-slate-100 border border-slate-300 rounded-xl transition-all shadow-xs"
              >
                <Navigation className="w-4 h-4 text-slate-800" />
                <span>Como Chegar via Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <a
                href={`https://wa.me/${siteData.company.whatsappNumber}?text=${encodeURIComponent('Olá! Gostaria de agendar uma visita ao showroom da RAV Escritórios no Jardim Imperial.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all shadow-xs"
              >
                <span>Agendar Atendimento no Showroom</span>
              </a>
            </div>
          </div>

          {/* Column 2: Google Maps Embed */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-slate-200 shadow-sm min-h-[380px] bg-slate-100 relative">
            <iframe
              title="Localização da RAV Escritórios em Cuiabá"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3842.8687784013347!2d-56.03757962487405!3d-15.60232978496464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939dad959be78ad7%3A0xe72688f4b008d3e9!2sAv.%20Profa.%20Edna%20Maria%20de%20Albuquerque%20Affi%2C%201418%20-%20Jardim%20Imperial%2C%20Cuiab%C3%A1%20-%20MT%2C%2078077-100!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
            {/* Overlay Chip */}
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-slate-900/90 text-white backdrop-blur-md px-4 py-2.5 rounded-xl border border-slate-800 text-xs shadow-md">
              <span className="font-bold block">RAV Escritórios</span>
              <span className="text-slate-300 text-[11px]">Jardim Imperial, Cuiabá - MT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

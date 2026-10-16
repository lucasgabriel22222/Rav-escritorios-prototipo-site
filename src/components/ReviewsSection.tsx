import React from 'react';
import { Star, CheckCircle, Quote, ThumbsUp } from 'lucide-react';
import { siteData } from '../data/siteData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="avaliacoes" className="py-20 md:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-700 uppercase mb-3">
            <ThumbsUp className="w-3.5 h-3.5 text-slate-700" />
            <span>Reputação 100% Positiva</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight mb-4 text-balance">
            O Que Dizem Nossos Clientes
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal mb-6">
            Empresas, advogados, diretores e profissionais liberais que confiaram na RAV Escritórios para transformar seus ambientes corporativos em Cuiabá.
          </p>

          {/* Google Rating Showcase Box */}
          <div className="inline-flex items-center gap-4 bg-white border border-slate-200 rounded-xl px-5 py-3 shadow-xs">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
              ))}
            </div>
            <div className="h-4 w-px bg-slate-200" />
            <div className="text-xs text-slate-700">
              <strong className="text-slate-900 font-bold">{siteData.company.googleRating.toFixed(1)} de 5.0</strong> no Google ({siteData.company.googleReviewCount} avaliações)
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteData.reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-200 relative"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-200" />
                </div>

                <p className="text-sm text-slate-700 leading-relaxed mb-6 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-heading text-sm font-bold text-slate-900 leading-tight">
                    {review.name}
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {review.role}
                  </p>
                </div>

                <div className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 border border-emerald-200/60 rounded px-2 py-0.5">
                  <CheckCircle className="w-3 h-3 text-emerald-600" />
                  <span>Google</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

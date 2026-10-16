import React, { useState } from 'react';
import { MessageSquare, Check, ArrowUpRight, SlidersHorizontal, Sparkles } from 'lucide-react';
import { siteData, ProductItem } from '../data/siteData';

interface ProductsSectionProps {
  onSelectItemForQuote?: (product: ProductItem) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onSelectItemForQuote }) => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  const filteredProducts = activeCategory === 'todos'
    ? siteData.products
    : siteData.products.filter(p => p.category === activeCategory);

  const handleConsultPrice = (product: ProductItem) => {
    const text = encodeURIComponent(product.ctaMessage);
    window.open(`https://wa.me/${siteData.company.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="produtos" className="py-20 md:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-700 uppercase mb-3">
            <SlidersHorizontal className="w-3.5 h-3.5 text-slate-700" />
            <span>Mobiliário para Alta Performance</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight mb-4 text-balance">
            Nossa Linha de Móveis Corporativos
          </h2>
          <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed">
            Móveis ergonômicos e funcionais projetados para suportar o ritmo de empresas modernas, preservando a saúde postural e valorizando a estética da sua marca.
          </p>
        </div>

        {/* Category Filter Tabs (Segmented Button Group) */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-12 scrollbar-none gap-2">
          <div className="inline-flex p-1.5 bg-slate-200/80 rounded-xl border border-slate-300/70 max-w-full">
            {siteData.categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 ${
                    isActive
                      ? 'bg-white text-slate-950 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-200"
            >
              {/* Product Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Quiet Badge */}
                <div className="absolute top-3 left-3 bg-slate-900/90 text-white text-[11px] font-semibold px-2.5 py-1 rounded-md backdrop-blur-sm shadow-sm">
                  {product.badge}
                </div>

                <div className="absolute top-3 right-3 bg-white/90 text-slate-700 text-[11px] font-medium px-2 py-0.5 rounded backdrop-blur-sm border border-slate-200">
                  {product.categoryLabel}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900 mb-2 leading-snug group-hover:text-blue-900 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Feature Specifications */}
                  <div className="space-y-1.5 mb-6 pt-4 border-t border-slate-100">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-600 block mb-2">
                      Destaques Técnicos:
                    </span>
                    {product.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
                  <button
                    type="button"
                    onClick={() => handleConsultPrice(product)}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs sm:text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all shadow-sm active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span>Consultar Preço no WhatsApp</span>
                  </button>

                  {onSelectItemForQuote && (
                    <button
                      type="button"
                      onClick={() => onSelectItemForQuote(product)}
                      className="w-full text-center py-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 hover:bg-slate-50 rounded-lg transition-colors"
                    >
                      Incluir na lista de cotação
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Custom Project Note */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700 shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading text-base sm:text-lg font-bold text-slate-900">
                Precisa de um projeto corporativo sob medida para a sua planta?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                Atendemos demandas corporativas personalizadas, layouts sob medida e faturamento direto para pessoa jurídica (CNPJ).
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              const text = encodeURIComponent('Olá! Gostaria de solicitar um projeto corporativo personalizado para meu escritório com a RAV Escritórios.');
              window.open(`https://wa.me/${siteData.company.whatsappNumber}?text=${text}`, '_blank');
            }}
            className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-xl transition-colors whitespace-nowrap shrink-0"
          >
            <span>Falar com Consultor de Projetos</span>
            <ArrowUpRight className="w-4 h-4 text-slate-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

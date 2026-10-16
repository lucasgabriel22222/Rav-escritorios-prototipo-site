/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBanner } from './components/StatsBanner';
import { ProductsSection } from './components/ProductsSection';
import { DifferentialsSection } from './components/DifferentialsSection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { FaqSection } from './components/FaqSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { QuoteModal } from './components/QuoteModal';
import { ProductItem } from './data/siteData';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedProductForQuote, setSelectedProductForQuote] = useState<ProductItem | null>(null);

  const handleOpenQuoteModal = (product?: ProductItem) => {
    setSelectedProductForQuote(product || null);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setSelectedProductForQuote(null);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 flex flex-col font-sans selection:bg-slate-900 selection:text-white">
      {/* 1. NAVBAR (Header Fixo com glassmorphism claro e barra de progresso) */}
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      <main className="flex-grow">
        {/* 2. HERO (Seção Principal com Parallax Real) */}
        <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* 3. SEÇÃO DE ESTATÍSTICAS E DESTAQUES (Banner Parallax) */}
        <StatsBanner />

        {/* 4. SEÇÃO PRODUTOS & CATEGORIAS */}
        <ProductsSection onSelectItemForQuote={(product) => handleOpenQuoteModal(product)} />

        {/* 5. SEÇÃO DIFERENCIAIS */}
        <DifferentialsSection />

        {/* 6. SEÇÃO DE PROVA SOCIAL (AVALIAÇÕES DO GOOGLE) */}
        <ReviewsSection />

        {/* 7. SEÇÃO DE LOCALIZAÇÃO & HORÁRIOS */}
        <LocationSection />

        {/* 8. SEÇÃO FAQ (PERGUNTAS FREQUENTES) */}
        <FaqSection />

        {/* 9. CTA FINAL (CHAMADA PARA AÇÃO DIRETA) */}
        <CtaSection onOpenQuoteModal={() => handleOpenQuoteModal()} />
      </main>

      {/* 10. FOOTER (RODAPÉ) */}
      <Footer />

      {/* 11. BOTÃO FLUTUANTE DO WHATSAPP */}
      <FloatingWhatsApp />

      {/* MODAL DE COTAÇÃO RÁPIDA / ORÇAMENTO */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        preselectedProduct={selectedProductForQuote}
      />
    </div>
  );
}

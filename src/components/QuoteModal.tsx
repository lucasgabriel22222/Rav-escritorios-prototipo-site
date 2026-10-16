import React, { useState, useEffect } from 'react';
import { X, MessageSquare, Check, Briefcase, Plus, Minus } from 'lucide-react';
import { siteData, ProductItem } from '../data/siteData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProduct?: ProductItem | null;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  preselectedProduct,
}) => {
  const [selectedItems, setSelectedItems] = useState<Record<string, number>>({
    'Cadeiras Ergonômicas': 4,
    'Estações de Trabalho': 1,
  });

  const [officeSize, setOfficeSize] = useState<string>('5 a 10 pessoas');
  const [notes, setNotes] = useState<string>('');

  useEffect(() => {
    if (preselectedProduct) {
      setSelectedItems(prev => ({
        ...prev,
        [preselectedProduct.name]: (prev[preselectedProduct.name] || 0) + 1
      }));
    }
  }, [preselectedProduct]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const catalogOptions = [
    'Cadeiras Ergonômicas (NR-17)',
    'Estações de Trabalho (Open Space)',
    'Mesas de Reunião & Diretoria',
    'Armários & Arquivos de Aço/MDF',
    'Balcões de Recepção & Espera',
    'Móveis Planejados Corporativos',
  ];

  const updateQuantity = (item: string, delta: number) => {
    setSelectedItems(prev => {
      const current = prev[item] || 0;
      const next = Math.max(0, current + delta);
      if (next === 0) {
        const copy = { ...prev };
        delete copy[item];
        return copy;
      }
      return { ...prev, [item]: next };
    });
  };

  const toggleItem = (item: string) => {
    setSelectedItems(prev => {
      if (prev[item]) {
        const copy = { ...prev };
        delete copy[item];
        return copy;
      }
      return { ...prev, [item]: 1 };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const itemsList = Object.entries(selectedItems)
      .map(([name, qty]) => `• ${qty}x ${name}`)
      .join('\n');

    const formattedMessage = [
      'Olá! Gostaria de um orçamento corporativo na RAV Escritórios:',
      '',
      '*Itens de interesse:*',
      itemsList || '• Consulta geral de mobiliário corporativo',
      '',
      `*Porte estimado:* ${officeSize}`,
      notes ? `*Observações:* ${notes}` : '',
      '',
      'Aguardo retorno para alinharmos detalhes e prazos. Obrigado!'
    ].filter(Boolean).join('\n');

    const text = encodeURIComponent(formattedMessage);
    window.open(`https://wa.me/${siteData.company.whatsappNumber}?text=${text}`, '_blank');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center text-white">
              <Briefcase className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold text-slate-900">
                Montar Cotação Corporativa
              </h3>
              <p className="text-xs text-slate-500">
                RAV Escritórios — Atendimento direto via WhatsApp
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/50 rounded-lg transition-colors"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
          {/* Items Selector */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-2">
              Selecione os itens que você precisa:
            </label>
            <div className="space-y-2">
              {catalogOptions.map(item => {
                const isSelected = !!selectedItems[item];
                const qty = selectedItems[item] || 0;
                return (
                  <div
                    key={item}
                    className={`flex items-center justify-between p-3 rounded-xl border text-xs transition-colors ${
                      isSelected
                        ? 'border-slate-900 bg-slate-50'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleItem(item)}
                      className="flex items-center gap-2.5 flex-1 text-left font-medium text-slate-800"
                    >
                      <div
                        className={`w-4 h-4 rounded border flex items-center justify-center ${
                          isSelected
                            ? 'bg-slate-900 border-slate-900 text-white'
                            : 'border-slate-300 bg-white'
                        }`}
                      >
                        {isSelected && <Check className="w-3 h-3 text-emerald-400" />}
                      </div>
                      <span>{item}</span>
                    </button>

                    {isSelected && (
                      <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg p-1 shrink-0">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item, -1)}
                          className="w-6 h-6 flex items-center justify-center text-slate-500 hover:bg-slate-100 rounded"
                          aria-label={`Diminuir quantidade de ${item}`}
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center font-bold text-slate-900 tabular-nums">
                          {qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item, 1)}
                          className="w-6 h-6 flex items-center justify-center text-slate-500 hover:bg-slate-100 rounded"
                          aria-label={`Aumentar quantidade de ${item}`}
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Office Size */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-2">
              Tamanho da equipe / postos de trabalho:
            </label>
            <select
              value={officeSize}
              onChange={e => setOfficeSize(e.target.value)}
              className="w-full text-xs font-medium p-3 bg-white border border-slate-200 rounded-xl focus:border-slate-900 focus:outline-none"
            >
              <option value="Home office (1 a 2 pessoas)">Home office individual (1 a 2 pessoas)</option>
              <option value="Pequeno escritório (3 a 5 pessoas)">Pequeno escritório (3 a 5 pessoas)</option>
              <option value="Médio porte (6 a 15 pessoas)">Médio porte (6 a 15 pessoas)</option>
              <option value="Grande empresa (15 a 50+ pessoas)">Grande empresa (15 a 50+ pessoas)</option>
              <option value="Apenas renovação pontual de móveis">Apenas renovação pontual de peças</option>
            </select>
          </div>

          {/* Observations */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-2">
              Observações ou medidas (opcional):
            </label>
            <textarea
              value={notes}
              onChange={e => setNotes(e.target.value)}
              placeholder="Ex: Gostaria de opções com entrega no Jardim Imperial para a próxima semana..."
              rows={2}
              className="w-full text-xs p-3 bg-white border border-slate-200 rounded-xl focus:border-slate-900 focus:outline-none placeholder:text-slate-400"
            />
          </div>

          {/* Action button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow-md active:scale-[0.99]"
            >
              <MessageSquare className="w-5 h-5 text-slate-950 fill-slate-950" />
              <span>Enviar Cotação pelo WhatsApp</span>
            </button>
            <p className="text-[11px] text-center text-slate-600 mt-2">
              Sua mensagem será gerada e enviada diretamente para o WhatsApp oficial da RAV.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

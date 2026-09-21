import React, { useState } from 'react';
import { WORKSHOP_BLOCKS } from '../data/workshopData';
import { CheckCircle2, ChevronRight } from 'lucide-react';

export const ContentBlocks: React.FC = () => {
  const [activeBlockId, setActiveBlockId] = useState<number>(1);
  const activeBlock = WORKSHOP_BLOCKS.find((b) => b.id === activeBlockId) || WORKSHOP_BLOCKS[0];

  return (
    <div className="w-full">
      {/* Desktop/Tablet Selector Tabs */}
      <div className="hidden md:grid grid-cols-4 gap-3 mb-8">
        {WORKSHOP_BLOCKS.map((block) => {
          const isActive = block.id === activeBlockId;
          return (
            <button
              key={block.id}
              onClick={() => setActiveBlockId(block.id)}
              className={`text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-white border-[#f06060] shadow-sm ring-1 ring-[#f06060]/20'
                  : 'bg-[#faf7ee] hover:bg-white border-[#e5ddd3] text-[#6d5e65]'
              }`}
            >
              <span
                className={`text-xs font-bold uppercase tracking-wider block mb-1 ${
                  isActive ? 'text-[#f06060]' : 'text-[#8cbeb2]'
                }`}
              >
                Módulo 0{block.id}
              </span>
              <span
                className={`text-sm font-bold line-clamp-2 ${
                  isActive ? 'text-[#5c4b51]' : 'text-[#5c4b51]/80'
                }`}
              >
                {block.title.replace(/^\d+\.\s*/, '')}
              </span>
            </button>
          );
        })}
      </div>

      {/* Mobile Selector Accordion Buttons */}
      <div className="md:hidden flex flex-col gap-2 mb-6">
        {WORKSHOP_BLOCKS.map((block) => {
          const isActive = block.id === activeBlockId;
          return (
            <button
              key={block.id}
              onClick={() => setActiveBlockId(block.id)}
              className={`flex items-center justify-between p-3.5 rounded-xl border text-left transition-all ${
                isActive
                  ? 'bg-white border-[#f06060] text-[#5c4b51] font-bold shadow-xs'
                  : 'bg-[#faf7ee] border-[#e8dfd6] text-[#63555b]'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                    isActive ? 'bg-[#f06060] text-white' : 'bg-[#e7dfd8] text-[#5c4b51]'
                  }`}
                >
                  {block.id}
                </span>
                <span className="text-sm">{block.title.replace(/^\d+\.\s*/, '')}</span>
              </div>
              <ChevronRight
                className={`w-4 h-4 transition-transform ${
                  isActive ? 'rotate-90 text-[#f06060]' : 'text-[#a89b9f]'
                }`}
              />
            </button>
          );
        })}
      </div>

      {/* Active Content Display Card */}
      <div className="bg-white rounded-2xl border border-[#e3dad1] overflow-hidden shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Left Column: Text & Content (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 md:p-10 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#faf6e4] text-[#5c4b51] border border-[#ece3d3] mb-4">
                <span className="w-2 h-2 rounded-full bg-[#f06060]"></span>
                Bloque {activeBlock.id} del programa
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#5c4b51] mb-4">
                {activeBlock.title}
              </h3>

              <p className="text-[#55474c] text-base leading-relaxed mb-6 font-normal">
                {activeBlock.description}
              </p>

              <div className="border-t border-[#f0eae3] pt-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#796970] mb-3">
                  Trabajaremos:
                </h4>
                <ul className="space-y-2.5">
                  {activeBlock.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#8cbeb2] shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-[#473b40] leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Micro footer hint */}
            <div className="mt-8 pt-4 border-t border-[#f0eae3] flex items-center justify-between text-xs text-[#827278]">
              <span>Formato interactivo y reflexivo</span>
              <span className="font-semibold text-[#5c4b51]">Caso real y herramientas prácticas</span>
            </div>
          </div>

          {/* Right Column: Matched Photography (5 cols) */}
          <div className="lg:col-span-5 relative min-h-[280px] sm:min-h-[340px] bg-[#faf6e4]">
            <img
              src={activeBlock.image}
              alt={activeBlock.imageAlt}
              className="w-full h-full object-cover object-center absolute inset-0"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            {/* Subtle bottom badge over image */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-xs text-white p-3 rounded-xl text-xs leading-tight">
              <span className="font-semibold text-[#f2ebbf] block mb-0.5">Dinámica en sala</span>
              {activeBlock.imageAlt}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

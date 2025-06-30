import React, { useState, useRef } from 'react';
import { Heart, Sparkles, Send } from 'lucide-react';

interface InvitationSectionProps {
  onAccept: () => void;
}

const InvitationSection: React.FC<InvitationSectionProps> = ({ onAccept }) => {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 50, y: 50 });
  const containerRef = useRef<HTMLDivElement>(null);

  const moveNoButton = () => {
    if (!containerRef.current) return;
    
    const container = containerRef.current.getBoundingClientRect();
    const newX = Math.random() * (container.width - 100);
    const newY = Math.random() * (container.height - 50);
    
    setNoButtonPosition({ x: newX, y: newY });
  };

  return (
    <section id="convite" className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50">
      <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
        <Sparkles className="w-16 h-16 text-amber-400 mx-auto mb-6 animate-pulse" />
        <h2 className="text-4xl md:text-5xl font-serif text-rose-800 mb-8 leading-tight">
          O Convite Oficial
        </h2>
        
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-rose-100">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Já que chegamos até aqui, acho que está na hora de tornar isso oficial. Vi que você é incrível, dona de uma beleza que hipnotiza e de um sorriso que vicia.
          </p>
          <p className="text-2xl text-rose-700 font-semibold mb-10">
            Gostaria de sair comigo para a gente se conhecer melhor?
          </p>

          <div 
            ref={containerRef}
            className="relative h-48 md:h-32 flex flex-col md:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={onAccept}
              className="w-48 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-8 py-4 rounded-full text-xl font-semibold shadow-lg transform hover:scale-110 transition-all duration-300 flex items-center justify-center space-x-2 animate-pulse"
            >
              <Heart className="w-6 h-6" />
              <span>Claro!</span>
            </button>

            <button
              onMouseEnter={moveNoButton}
              onClick={moveNoButton}
              style={{
                position: 'absolute',
                left: `${noButtonPosition.x}px`,
                top: `${noButtonPosition.y}px`,
                transition: 'all 0.3s ease-out'
              }}
              className="w-32 bg-gray-300 hover:bg-gray-400 text-gray-700 px-6 py-3 rounded-full text-lg shadow-md"
            >
              Não
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvitationSection;
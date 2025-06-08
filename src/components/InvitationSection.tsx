import React, { useState, useRef, useEffect } from 'react';
import { Heart, Sparkles } from 'lucide-react';

interface InvitationSectionProps {
  onAccept: () => void;
}

const InvitationSection: React.FC<InvitationSectionProps> = ({ onAccept }) => {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [isNoButtonMoving, setIsNoButtonMoving] = useState(false);
  const noButtonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize no button position
    if (noButtonRef.current && containerRef.current) {
      const container = containerRef.current.getBoundingClientRect();
      const button = noButtonRef.current.getBoundingClientRect();
      setNoButtonPosition({
        x: container.width / 2 + 100,
        y: container.height / 2
      });
    }
  }, []);

  const moveNoButton = () => {
    if (!containerRef.current || !noButtonRef.current) return;

    setIsNoButtonMoving(true);
    
    const container = containerRef.current.getBoundingClientRect();
    const buttonWidth = 120;
    const buttonHeight = 50;
    
    const maxX = container.width - buttonWidth;
    const maxY = container.height - buttonHeight;
    
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    
    setNoButtonPosition({ x: newX, y: newY });
    
    setTimeout(() => setIsNoButtonMoving(false), 300);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <Sparkles className="w-12 h-12 text-amber-400 mx-auto mb-6 animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-serif text-rose-800 mb-8 leading-tight">
            Um Convite Especial
          </h2>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-rose-100">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 font-light">
              Você é a pessoa que tornou meus dias mais leves e cheios de significado. 
              Agora, quero você ao meu lado no momento mais importante da minha carreira: 
              <span className="text-rose-600 font-semibold"> minha formatura no exército</span>.
            </p>
            
            <p className="text-lg text-gray-600 mb-12">
              Será uma honra ter você comigo neste dia tão especial. Você aceita ser minha acompanhante?
            </p>

            <div 
              ref={containerRef}
              className="relative h-32 flex items-center justify-center"
            >
              {/* Yes Button */}
              <button
                onClick={onAccept}
                className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-8 py-4 rounded-full text-xl font-semibold shadow-lg transform hover:scale-110 transition-all duration-300 flex items-center space-x-2 animate-pulse"
              >
                <Heart className="w-6 h-6 fill-current" />
                <span>Sim, eu aceito!</span>
              </button>

              {/* No Button (Moving) */}
              <button
                ref={noButtonRef}
                onMouseEnter={moveNoButton}
                onFocus={moveNoButton}
                style={{
                  position: 'absolute',
                  left: `${noButtonPosition.x}px`,
                  top: `${noButtonPosition.y}px`,
                  transform: 'translate(-50%, -50%)',
                  transition: isNoButtonMoving ? 'all 0.3s ease-out' : 'none'
                }}
                className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-6 py-3 rounded-full text-lg shadow-md"
              >
                Não
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvitationSection;
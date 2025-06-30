import React from 'react';
import { Gift, ArrowDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50">
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-24">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full mb-8 shadow-2xl animate-bounce">
          <Gift className="w-12 h-12 text-white" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-serif text-rose-800 mb-6 leading-tight animate-fade-in-up">
          Um Convite para Você
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          A vida é feita de momentos que se tornam especiais pelas pessoas que encontramos. E eu sinto que o nosso próximo momento pode ser inesquecível.
        </p>
        
        <a href="#galeria" className="inline-block animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="w-8 h-12 border-2 border-rose-300 rounded-full flex justify-center items-start pt-2 animate-bounce">
            <ArrowDown className="w-5 h-5 text-rose-400" />
          </div>
          <span className="mt-2 text-rose-500 text-sm">Role para descobrir</span>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
import React from 'react';
import { Medal, Heart } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-100/50 via-pink-50/50 to-amber-50/50" />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Military badge icon */}
        <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full mb-8 shadow-2xl animate-pulse">
          <Medal className="w-12 h-12 text-white" />
        </div>
        
        {/* Main title */}
        <h1 className="text-5xl md:text-7xl font-serif text-rose-800 mb-6 leading-tight">
          Meu Grande Dia
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
          Um momento especial que só fará sentido completo com você ao meu lado
        </p>
        
        {/* Decorative hearts */}
        <div className="flex justify-center space-x-4 mb-12">
          {[...Array(3)].map((_, i) => (
            <Heart 
              key={i} 
              className="w-8 h-8 text-rose-400 fill-current animate-bounce" 
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          ))}
        </div>
        
        {/* Scroll indicator */}
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-rose-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-rose-300 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
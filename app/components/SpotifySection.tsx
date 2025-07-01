'use client';
import React from 'react';
import { Music } from 'lucide-react';

const SpotifySection: React.FC = () => {
  return (
    <section id="spotify" className="py-20 px-4 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-serif text-green-400 mb-4 animate-fade-in-up">Nossa Trilha Sonora</h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          Se nosso encontro tivesse uma trilha sonora, qual seria? Aqui estão algumas sugestões...
        </p>
        <div className="flex justify-center items-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
           <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <Music size={48} className="text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Seção do Spotify em Breve</h3>
              <p className="text-gray-400">Estou preparando uma seleção especial de músicas para nós. Volte em breve!</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default SpotifySection;
'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Heart, Calendar, Clock, Play, Pause } from 'lucide-react';

const ThankYouPage: React.FC = () => {
  const [showContent, setShowContent] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      // Se a música estiver no início, pula para o tempo desejado
      if (audio.currentTime === 0) {
        // <<<---------------------------------------------------------->>>
        // <<< Defina o tempo de início da música AQUI (em segundos) >>>
        const startTimeInSeconds = 30; // Exemplo: começar aos 30 segundos
        // <<<---------------------------------------------------------->>>
        audio.currentTime = startTimeInSeconds;
      }
      audio.play();
    } else {
      audio.pause();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50 flex items-center justify-center p-4">
       <audio ref={audioRef} loop src="/music/agradecimento.mp3" onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)}>
        Seu navegador não suporta o elemento de áudio.
      </audio>

      {/* Botão de Play/Pause */}
      <div className="fixed top-5 right-5 z-20">
        <button 
          onClick={togglePlayPause} 
          className="bg-white/80 backdrop-blur-sm text-rose-500 rounded-full p-3 shadow-lg hover:scale-110 transition-transform"
          aria-label={isPlaying ? 'Pausar música' : 'Tocar música'}
        >
          {isPlaying ? <Pause size={24} className="fill-current" /> : <Play size={24} className="fill-current" />}
        </button>
      </div>

      <div className={`relative z-10 transition-all duration-1000 max-w-2xl text-center ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full mb-8 animate-bounce">
          <Heart className="w-10 h-10 text-white fill-current" />
        </div>
        
        <h1 className="text-5xl md:text-6xl font-serif text-rose-800 mb-6">
          Eu já sabia a resposta!
        </h1>
        
        <p className="text-xl text-gray-700 leading-relaxed mb-12">
          Que bom que você aceitou! Mal posso esperar pelo nosso encontro. Vou te chamar para combinarmos os detalhes do nosso primeiro de, quem sabe, muitos dates.
        </p>

        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-rose-100">
          <h3 className="text-2xl font-serif text-rose-800 mb-6">Próximos Passos:</h3>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="flex items-center space-x-3">
              <Calendar className="w-8 h-8 text-rose-500" />
              <span className="text-gray-700">Vamos definir a data perfeita.</span>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="w-8 h-8 text-rose-500" />
              <span className="text-gray-700">E um horário especial.</span>
            </div>
          </div>
        </div>
        
        <p className="mt-12 text-gray-600 italic">
          "Prepare-se para boas conversas e, com sorte, muitas risadas."
        </p>
      </div>
    </div>
  );
};

export default ThankYouPage;
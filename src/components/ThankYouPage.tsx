import React, { useState, useEffect } from 'react';
import { Heart, Star, Calendar, MapPin } from 'lucide-react';
import PhotoGallery from './PhotoGallery';

interface ThankYouPageProps {
  photos: Array<{ src: string; alt: string }>;
}

const ThankYouPage: React.FC<ThankYouPageProps> = ({ photos }) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            {Math.random() > 0.5 ? (
              <Heart className="w-4 h-4 text-rose-300 fill-current opacity-60" />
            ) : (
              <Star className="w-4 h-4 text-amber-300 fill-current opacity-60" />
            )}
          </div>
        ))}
      </div>

      <div className={`relative z-10 transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Header */}
        <div className="text-center pt-20 pb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full mb-8 animate-bounce">
            <Heart className="w-10 h-10 text-white fill-current" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-serif text-rose-800 mb-6">
            Sabia que você diria sim!
          </h1>
          
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-4">
            Mal posso esperar para celebrar esse dia especial com você ao meu lado. 
            Você torna tudo mais bonito e significativo.
          </p>
        </div>

        {/* Photo Gallery */}
        <div className="px-4 mb-16">
          <PhotoGallery 
            photos={photos} 
            title="Momentos que guardarei para sempre"
          />
        </div>

        {/* Event Details */}
        <div className="max-w-4xl mx-auto px-4 mb-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-rose-100">
            <h3 className="text-3xl font-serif text-rose-800 text-center mb-8">
              Detalhes da Formatura
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-center space-x-4">
                <div className="bg-rose-100 p-3 rounded-full">
                  <Calendar className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Data</h4>
                  <p className="text-gray-600">[Data da Formatura]</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-rose-100 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Local</h4>
                  <p className="text-gray-600">[Local da Cerimônia]</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final Message */}
        <div className="text-center pb-20 px-4">
          <div className="max-w-2xl mx-auto">
            <p className="text-xl text-gray-700 italic leading-relaxed">
              "Você é a única que eu quero nessa jornada. Obrigado por fazer parte 
              dos meus sonhos e por tornar este momento ainda mais especial."
            </p>
            
            <div className="mt-8 flex justify-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <Heart 
                  key={i} 
                  className="w-6 h-6 text-rose-400 fill-current animate-pulse" 
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
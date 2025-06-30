'use client';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Photo {
  src: string;
  alt: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
  title: string;
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ photos, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const changePhoto = (newIndex: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsAnimating(false);
    }, 500); // Duração da animação de fade
  };

  const nextPhoto = () => {
    changePhoto((currentIndex + 1) % photos.length);
  };

  const prevPhoto = () => {
    changePhoto((currentIndex - 1 + photos.length) % photos.length);
  };
  
  // Efeito Ken Burns
  const [kenBurnsIndex, setKenBurnsIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
        setKenBurnsIndex(prev => (prev + 1) % photos.length);
    }, 10000); // Muda a imagem a cada 10s
    return () => clearInterval(interval);
  }, [photos.length]);


  return (
    <section id="galeria" className="py-20 px-4 bg-white">
      <div className="w-full max-w-5xl mx-auto">
        <h2 className="text-4xl font-serif text-rose-800 text-center mb-4 animate-fade-in-up">{title}</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          Alguns sorrisos têm o poder de mudar nosso dia. O seu, por exemplo, tem o poder de mudar a minha semana inteira.
        </p>
        
        <div className="relative group animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gray-100 p-2 md:p-4">
            <div className="aspect-w-16 aspect-h-9 relative">
              {photos.map((photo, index) => (
                <img
                  key={photo.src}
                  src={photo.src}
                  alt={photo.alt}
                  className={`absolute inset-0 w-full h-full object-cover rounded-xl transition-opacity duration-500 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'} ${index === currentIndex ? 'ken-burns-active' : ''}`}
                />
              ))}
            </div>
          </div>

          {photos.length > 1 && (
            <>
              <button onClick={prevPhoto} className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-rose-600 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform hover:scale-110">
                <ChevronLeft size={28} />
              </button>
              <button onClick={nextPhoto} className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-rose-600 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform hover:scale-110">
                <ChevronRight size={28} />
              </button>
            </>
          )}

          {photos.length > 1 && (
            <div className="flex justify-center mt-6 space-x-3">
              {photos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => changePhoto(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-rose-500 scale-125' : 'bg-rose-200 hover:bg-rose-300'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
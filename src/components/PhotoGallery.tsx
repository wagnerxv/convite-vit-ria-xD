import React, { useState } from 'react';
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

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h3 className="text-2xl font-serif text-rose-800 text-center mb-8">{title}</h3>
      
      <div className="relative group">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white p-4">
          <div className="aspect-square relative">
            <img
              src={photos[currentIndex].src}
              alt={photos[currentIndex].alt}
              className="w-full h-full object-cover rounded-xl transition-all duration-700 transform hover:scale-105"
            />
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
          </div>
        </div>

        {/* Navigation buttons */}
        {photos.length > 1 && (
          <>
            <button
              onClick={prevPhoto}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-rose-600 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform hover:scale-110"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={nextPhoto}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-rose-600 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform hover:scale-110"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}

        {/* Dots indicator */}
        {photos.length > 1 && (
          <div className="flex justify-center mt-6 space-x-2">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-rose-500 scale-125'
                    : 'bg-rose-200 hover:bg-rose-300'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PhotoGallery;
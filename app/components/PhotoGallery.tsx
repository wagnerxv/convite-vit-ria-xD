'use client';
import React from 'react';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Photo {
  src: string;
  alt: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
  title: string;
}

const Arrow = (props: any) => {
    const { className, style, onClick, children } = props;
    return (
        <div
        className={className}
        style={{ ...style, display: "flex", alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.8)', width: '40px', height: '40px', borderRadius: '50%', color: '#881337' }}
        onClick={onClick}
        >
        {children}
        </div>
    );
};


const PhotoGallery: React.FC<PhotoGalleryProps> = ({ photos, title }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <Arrow><ChevronRight size={28} /></Arrow>,
    prevArrow: <Arrow><ChevronLeft size={28} /></Arrow>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="w-full max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-serif text-rose-800 text-center mb-4">{title}</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Alguns sorrisos têm o poder de mudar nosso dia. O seu, por exemplo, tem o poder de mudar a minha semana inteira.
        </p>

        <div className="photo-gallery-slider">
          <Slider {...settings}>
            {photos.map((photo, index) => (
              <div key={index} className="px-2">
                <div className="aspect-square rounded-lg overflow-hidden shadow-lg bg-rose-50">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
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

const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-arrow`}
      style={{ ...style, display: 'block', right: '10px' }}
      onClick={onClick}
    >
      <ChevronRight size={28} />
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-arrow`}
      style={{ ...style, display: 'block', left: '10px', zIndex: 1 }}
      onClick={onClick}
    >
      <ChevronLeft size={28} />
    </div>
  );
};

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ photos, title }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section id="galeria" className="py-20 px-4 bg-white">
      <div className="w-full max-w-5xl mx-auto">
        <h2 className="text-4xl font-serif text-rose-800 text-center mb-4 animate-fade-in-up">{title}</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          Alguns sorrisos têm o poder de mudar nosso dia. O seu, por exemplo, tem o poder de mudar a minha semana inteira.
        </p>
        
        <div className="relative group animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          <Slider {...settings}>
            {photos.map((photo, index) => (
              <div key={index} className="px-2">
                <div className="overflow-hidden rounded-2xl shadow-2xl">
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
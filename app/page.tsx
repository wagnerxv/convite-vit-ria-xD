'use client'; // Necessário para usar hooks como useState

import React, { useState } from 'react';
import HeroSection from '@/app/components/HeroSection';
import InvitationSection from '@/app/components/InvitationSection';
import ThankYouPage from '@/app/components/ThankYouPage';
import PhotoGallery from '@/app/components/PhotoGallery';
import InstagramSection from '@/app/components/InstagramSection';
import Navigation from '@/app/components/Navigation';
import FloatingParticles from '@/app/components/FloatingParticles';


export default function Home() {
  const [showThankYou, setShowThankYou] = useState(false);

  const photos = [
    // Caminhos corrigidos para apontar para a pasta public
    { src: '/images/fotodela1.PNG', alt: 'Foto dela 1', id: 1 },
    { src: '/images/fotodela2.PNG', alt: 'Foto dela 2', id: 2 },
    { src: '/images/fotodela3.PNG', alt: 'Foto dela 3', id: 3 },
    { src: '/images/fotodela4.PNG', alt: 'Foto dela 4', id: 4 },
    { src: '/images/fotodela5.PNG', alt: 'Foto dela 5', id: 5 },
  ];
  

  const handleAccept = () => {
    setShowThankYou(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (showThankYou) {
    return <ThankYouPage/>;
  }

  return (
    <>
      <FloatingParticles />
      <Navigation />
      <HeroSection />
      <PhotoGallery photos={photos} title="Uma galeria de sorrisos" />
      <InstagramSection />
      <InvitationSection onAccept={handleAccept} />
    </>
  );
}
'use client'; // Necessário para usar hooks como useState

import React, { useState } from 'react';
import HeroSection from '@/app/components/HeroSection';
import InvitationSection from '@/app/components/InvitationSection';
import ThankYouPage from '@/app/components/ThankYouPage';
import PhotoGallery from '@/app/components/PhotoGallery';
import InstagramSection from '@/app/components/InstagramSection';
import SpotifySection from '@/app/components/SpotifySection';
import Navigation from '@/app/components/Navigation';
import FloatingParticles from '@/app/components/FloatingParticles';


export default function Home() {
  const [showThankYou, setShowThankYou] = useState(false);

  const photos = [
    { src: '/images/fotodela6.PNG', alt: 'Foto dela 6', id: 6 },
    { src: '/images/fotodela7.PNG', alt: 'Foto dela 7', id: 7 },
    { src: '/images/fotodela8.PNG', alt: 'Foto dela 8', id: 8 },
    { src: '/images/fotodela9.PNG', alt: 'Foto dela 9', id: 9 },
    { src: '/images/fotodela10.PNG', alt: 'Foto dela 10', id: 10 },
    { src: '/images/fotodela11.PNG', alt: 'Foto dela 11', id: 11 },
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
      <SpotifySection />
      <InvitationSection onAccept={handleAccept} />
    </>
  );
}
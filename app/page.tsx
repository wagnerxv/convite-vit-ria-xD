// app/page.tsx

'use client'; // Necessário para usar hooks como useState

import React, { useState } from 'react';
// Caminhos de importação corrigidos
import HeroSection from '@/app/components/HeroSection';
import InvitationSection from '@/app/components/InvitationSection';
import ThankYouPage from '@/app/components/ThankYouPage';
import InstagramSection from '@/app/components/InstagramSection';

export default function Home() {
  const [showThankYou, setShowThankYou] = useState(false);

  const photos = [
    { src: '/images/fotodela1.PNG', alt: 'Foto dela 1', id: 1 },
    { src: '/images/fotodela2.PNG', alt: 'Foto dela 2', id: 2 },
    { src: '/images/fotodela3.PNG', alt: 'Foto dela 3', id: 3 },
    { src: '/images/fotodela4.PNG', alt: 'Foto dela 4', id: 4 },
    { src: '/images/fotodela5.PNG', alt: 'Foto dela 5', id: 5 },
  ];
  
  const comments = {
    1: ["Sério, a forma como a luz realça a beleza da sua pele é algo de outro mundo. ✨"],
    2: ["Esse sorriso... ilumina tudo! Lindo demais ver a sua alegria contagiante."],
    3: ["Você tem uma força e uma elegância que impressionam. Linda e inspiradora!"],
    4: ["A beleza de ser quem você é, na sua mais pura essência. Admiro muito isso."],
    5: ["Preta e linda não é só um elogio, é uma constatação. Você é incrível!"],
  };

  const handleAccept = () => {
    setShowThankYou(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (showThankYou) {
    return <ThankYouPage photos={photos.slice(0,3)} />;
  }

  return (
    <>
      <HeroSection />

      <InvitationSection onAccept={handleAccept} />
    </>
  );
}
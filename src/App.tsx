import React, { useState } from 'react';
import FloatingParticles from './components/FloatingParticles';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import PhotoGallery from './components/PhotoGallery';
import InstagramSection from './components/InstagramSection';
import InvitationSection from './components/InvitationSection';
import ThankYouPage from './components/ThankYouPage';

function App() {
  const [showThankYou, setShowThankYou] = useState(false);

  const herPhotos = [
    { src: '/src/assets/images/fotodela1.PNG', alt: 'Foto especial 1' },
    { src: '/src/assets/images/fotodela2.PNG', alt: 'Foto especial 2' },
    { src: '/src/assets/images/fotodela3.PNG', alt: 'Foto especial 3' },
    { src: '/src/assets/images/fotodela4.PNG', alt: 'Foto especial 4' },
    { src: '/src/assets/images/fotodela5.PNG', alt: 'Foto especial 5' },
  ];

  const handleAccept = () => {
    setShowThankYou(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (showThankYou) {
    return <ThankYouPage />;
  }

  return (
    <div className="relative">
      <FloatingParticles />
      <Navigation />
      
      <main>
        <HeroSection />
        <PhotoGallery 
          photos={herPhotos} 
          title="Uma Galeria Dedicada a Você"
        />
        <InstagramSection />
        <InvitationSection onAccept={handleAccept} />
      </main>
    </div>
  );
}

export default App;
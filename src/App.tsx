import React, { useState } from 'react';
import FloatingParticles from './components/FloatingParticles';
import HeroSection from './components/HeroSection';
import PhotoGallery from './components/PhotoGallery';
import InvitationSection from './components/InvitationSection';
import ThankYouPage from './components/ThankYouPage';

function App() {
  const [showThankYou, setShowThankYou] = useState(false);

  const herPhotos = [
    { src: '/src/assets/images/fotodela1.PNG', alt: 'Foto especial 1' },
    { src: '/src/assets/images/fotodela2.PNG', alt: 'Foto especial 2' },
    { src: '/src/assets/images/fotodela3.PNG', alt: 'Foto especial 3' },
    { src: '/src/assets/images/fotodela4.PNG', alt: 'Foto especial 4' },
    { src: '/src/assets/images/fotodela5.PNG', alt: 'Foto especial 5' }
  ];

  const thankYouPhotos = [
    { src: '/src/assets/images/fotodela1.PNG', alt: 'Momento especial 1' },
    { src: '/src/assets/images/fotodela2.PNG', alt: 'Momento especial 2' },
    { src: '/src/assets/images/fotodela3.PNG', alt: 'Momento especial 3' }
  ];

  const handleAccept = () => {
    setShowThankYou(true);
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (showThankYou) {
    return <ThankYouPage photos={thankYouPhotos} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50 relative">
      <FloatingParticles />
      
      <div className="relative z-10">
        <HeroSection />
        
        {/* Photo Gallery Section */}
        <section className="py-20 px-4">
          <PhotoGallery 
            photos={herPhotos} 
            title="A pessoa que ilumina meus dias"
          />
        </section>
        
        <InvitationSection onAccept={handleAccept} />
      </div>
    </div>
  );
}

export default App;
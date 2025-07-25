'use client';
import React, { useState, useEffect } from 'react';
import { Home, Camera, User, Mail, Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  const navLinks = [
    { id: 'inicio', label: 'Início', icon: <Home size={20} /> },
    { id: 'galeria', label: 'Galeria', icon: <Camera size={20} /> },
    { id: 'instaglam', label: 'Instaglam', icon: <User size={20} /> },
    { id: 'convite', label: 'Convite', icon: <Mail size={20} /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Lógica para destacar o link ativo
      let currentSection = '';
      navLinks.forEach(link => {
        const section = document.getElementById(link.id);
        if (section && window.scrollY >= section.offsetTop - 100) {
          currentSection = link.id;
        }
      });
      setActiveSection(currentSection);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  const linkClasses = "flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300";
  const textClasses = "text-gray-600 hover:text-rose-600 hover:bg-rose-100/50";
  const activeLinkClasses = "bg-rose-100 text-rose-700 font-semibold";

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#inicio" className="text-2xl font-serif font-bold text-rose-600">Um Pedido</a>
            
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-1">
              {navLinks.map(link => (
                <a key={link.id} href={`#${link.id}`} className={`${linkClasses} ${activeSection === link.id ? activeLinkClasses : textClasses}`}>
                  {link.icon}
                  <span>{link.label}</span>
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-rose-600">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white/95 z-40 flex flex-col items-center justify-center space-y-8 md:hidden">
          {navLinks.map(link => (
            <a key={link.id} href={`#${link.id}`} onClick={() => setIsMenuOpen(false)} className={`${linkClasses} text-xl ${activeSection === link.id ? activeLinkClasses : textClasses}`}>
              {link.icon}
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default Navigation;
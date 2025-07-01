'use client';
import React, { useState, useRef, useEffect } from 'react';
import { Heart, MessageCircle, X } from 'lucide-react';

interface Post {
  src: string;
  alt: string;
  comment: string;
  likes: number;
  musicSrc: string;
}

const InstagramSection: React.FC = () => {
  const posts: Post[] = [
    { src: '/images/fotodela1.PNG', alt: 'Ela sorrindo', comment: "A beleza que herda a força e a realeza de gerações. Cada traço seu conta uma história de poder. Linda demais!", likes: 123, musicSrc: '/music/musica1.mp3' },
    { src: '/images/fotodela2.PNG', alt: 'Foto em close', comment: "Essa pele é poesia. O tom que o sol beija e a noite admira. ✨", likes: 234, musicSrc: '/music/musica2.mp3' },
    { src: '/images/fotodela4.PNG', alt: 'Look do dia', comment: "Como pode um ser humano ser tão perfeitamente esculpido? A beleza preta em sua forma mais pura.", likes: 345, musicSrc: '/music/musica3.mp3' },
    { src: '/images/fotodela3.PNG', alt: 'Momento descontraído', comment: "Não sei o que brilha mais, o sol ou o seu sorriso. Acho que já sei a resposta.", likes: 456, musicSrc: '/music/musica4.mp3' },
    { src: '/images/fotodela5.PNG', alt: 'Selfie', comment: "Tem gente que é bonita. E tem você, que redefine o conceito. A melanina mais linda que já vi.", likes: 567, musicSrc: '/music/musica5.mp3' },
  ];

  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (selectedPost && audioRef.current) {
      audioRef.current.src = selectedPost.musicSrc;
      audioRef.current.play();
    } else if (audioRef.current) {
      audioRef.current.pause();
    }
  }, [selectedPost]);


  return (
    <section id="instaglam" className="py-20 px-4 bg-rose-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-serif text-rose-800 text-center mb-4 animate-fade-in-up">Instaglam</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          Dizem que uma imagem vale mais que mil palavras, mas no seu caso, eu fico sem palavras e com o coração acelerado.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          {posts.map((post, index) => (
            <div key={index} className="relative group cursor-pointer overflow-hidden rounded-lg" onClick={() => setSelectedPost(post)}>
              <img src={post.src} alt={post.alt} className="w-full h-full object-cover aspect-square transform group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex items-center space-x-4 text-white">
                  <div className="flex items-center space-x-1">
                    <Heart size={20} />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MessageCircle size={20} />
                    <span>1</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedPost(null)}>
           <audio ref={audioRef} loop>
            <source src={selectedPost.musicSrc} type="audio/mpeg" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
          <div className="bg-white rounded-lg max-w-3xl w-full flex flex-col md:flex-row animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
            <div className="md:w-1/2">
              <img src={selectedPost.src} alt={selectedPost.alt} className="w-full h-full object-cover rounded-l-lg" />
            </div>
            <div className="md:w-1/2 p-6 flex flex-col">
              <div className="flex items-center mb-4">
                <img src="/images/minha-foto.PNG" alt="Minha foto" className="w-10 h-10 rounded-full mr-3" />
                <span className="font-semibold">wagner.nsci</span>
              </div>
              <p className="text-gray-700 flex-grow">{selectedPost.comment}</p>
              <div className="flex items-center text-gray-500 mt-4">
                <Heart className="text-red-500 fill-current mr-1" />
                <span>Curtido por <b>você</b> e <b>outras {selectedPost.likes} pessoas</b></span>
              </div>
            </div>
          </div>
          <button onClick={() => setSelectedPost(null)} className="absolute top-4 right-4 text-white hover:text-rose-300">
            <X size={32} />
          </button>
        </div>
      )}
    </section>
  );
};

export default InstagramSection;
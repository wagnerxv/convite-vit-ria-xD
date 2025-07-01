'use client';
import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Music } from 'lucide-react';

interface Song {
  title: string;
  artist: string;
  musicSrc: string;
  coverSrc: string;
  startTime: number;
}

// Playlist com as músicas selecionadas
const playlist: Song[] = [
  { title: 'Pesadão', artist: 'IZA, Marcelo Falcão', musicSrc: '/music/iza_pesadao.mp3', coverSrc: '/images/iza_pesadao_cover.jpg', startTime: 15 },
  { title: 'Loveeeeeee Song', artist: 'Rihanna ft. Future', musicSrc: '/music/rihanna_lovesong.mp3', coverSrc: '/images/rihanna_lovesong_cover.jpg', startTime: 25 },
  { title: 'Dizeres (Orgânico Verão #1)', artist: 'Lourena, Sant', musicSrc: '/music/lourena_dizeres.mp3', coverSrc: '/images/lourena_dizeres_cover.jpg', startTime: 10 },
  { title: 'If I Ain\'t Got You', artist: 'Alicia Keys', musicSrc: '/music/alicia_if_i_aint_got_you.mp3', coverSrc: '/images/alicia_if_i_aint_got_you_cover.jpg', startTime: 40 },
  { title: 'Calmô', artist: 'Liniker e os Caramelows', musicSrc: '/music/liniker_calmo.mp3', coverSrc: '/images/liniker_calmo_cover.jpg', startTime: 5 },
  { title: 'CUFF IT', artist: 'Beyoncé', musicSrc: '/music/beyonce_cuff_it.mp3', coverSrc: '/images/beyonce_cuff_it_cover.jpg', startTime: 15 },
  { title: 'Love On The Brain', artist: 'Rihanna', musicSrc: '/music/rihanna_love_on_the_brain.mp3', coverSrc: '/images/rihanna_love_on_the_brain_cover.jpg', startTime: 20 },
];

const SpotifySection: React.FC = () => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const currentTrack = playlist[currentTrackIndex];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
  
    const playCurrentTrack = () => {
      if (isPlaying) {
        audio.play().catch(error => console.error("Erro ao tocar a música:", error));
      } else {
        audio.pause();
      }
    };
  
    // Quando o índice da música muda, atualizamos a fonte e o tempo de início
    audio.src = currentTrack.musicSrc;
    audio.currentTime = currentTrack.startTime || 0;
  
    // Adicionamos um ouvinte para garantir que a música possa ser tocada
    audio.addEventListener('canplay', playCurrentTrack);
  
    // Se a música já estiver carregada e pronta (do cache), toque imediatamente
    if (audio.readyState >= 3) {
      playCurrentTrack();
    }
  
    // Função de limpeza
    return () => {
      audio.removeEventListener('canplay', playCurrentTrack);
    };
  }, [isPlaying, currentTrackIndex]);
  
  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (audio && audio.duration) {
      setProgress((audio.currentTime / audio.duration) * 100);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    const progressBar = e.currentTarget;
    if (audio && audio.duration) {
      const rect = progressBar.getBoundingClientRect();
      const seekTime = ((e.clientX - rect.left) / rect.width) * audio.duration;
      audio.currentTime = seekTime;
    }
  };
  
  const playNext = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % playlist.length);
    setIsPlaying(true);
  };
  
  const playPrev = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex - 1 + playlist.length) % playlist.length);
    setIsPlaying(true);
  };

  const handleTrackClick = (index: number) => {
    if (index === currentTrackIndex) {
      // Se clicar na música que já está tocando, alterna entre play/pause
      setIsPlaying(!isPlaying);
    } else {
      // Se clicar em uma nova música, toca ela
      setCurrentTrackIndex(index);
      setIsPlaying(true);
    }
  };


  return (
    <section id="spotify" className="py-20 px-4 bg-gray-900 text-white">
      <audio 
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onEnded={playNext}
      />
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-serif text-green-400 mb-4 animate-fade-in-up">Uma Trilha Sonora que Remete Você ❤</h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          Se nosso encontro tivesse uma trilha sonora, qual seria?
        </p>
        
        <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto bg-gray-800 rounded-2xl shadow-2xl p-6 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          {/* Player */}
          <div className="w-full md:w-1/3 flex flex-col items-center justify-center space-y-4">
            <div className="w-48 h-48 rounded-lg shadow-lg overflow-hidden">
                <img src={currentTrack.coverSrc} alt={`Capa de ${currentTrack.title}`} className="w-full h-full object-cover"/>
            </div>
            <div className="text-center">
                <h3 className="font-bold text-xl">{currentTrack.title}</h3>
                <p className="text-gray-400">{currentTrack.artist}</p>
            </div>
            <div 
              className="w-full bg-gray-700 rounded-full h-2 cursor-pointer spotify-progress-bar"
              onClick={handleSeek}
            >
              <div 
                className="bg-green-500 h-2 rounded-full"
                style={{ width: `${progress}%`}}
              ></div>
            </div>
            <div className="flex items-center space-x-6">
              <button onClick={playPrev} className="text-gray-400 hover:text-white transition-colors"><SkipBack size={28}/></button>
              <button onClick={() => setIsPlaying(!isPlaying)} className="bg-green-500 text-white rounded-full p-4 hover:scale-105 transition-transform">
                {isPlaying ? <Pause size={32}/> : <Play size={32} className="ml-1"/>}
              </button>
              <button onClick={playNext} className="text-gray-400 hover:text-white transition-colors"><SkipForward size={28}/></button>
            </div>
          </div>

          {/* Playlist */}
          <div className="w-full md:w-2/3">
            <ul className="space-y-2 max-h-96 overflow-y-auto pr-2 spotify-playlist">
              {playlist.map((song, index) => (
                <li 
                  key={index} 
                  onClick={() => handleTrackClick(index)}
                  className={`flex items-center space-x-4 p-3 rounded-lg cursor-pointer transition-colors ${currentTrackIndex === index ? 'bg-gray-700/70' : 'hover:bg-gray-700/40'}`}
                >
                  {currentTrackIndex === index && isPlaying ? (
                    <Music className="text-green-400 animate-pulse" size={24}/>
                  ) : (
                    <span className="text-gray-400 w-6 text-center">{index + 1}</span>
                  )}
                  <img src={song.coverSrc} alt={`Capa de ${song.title}`} className="w-12 h-12 rounded-md object-cover"/>
                  <div>
                    <p className={`font-semibold ${currentTrackIndex === index ? 'text-green-400' : 'text-white'}`}>{song.title}</p>
                    <p className="text-sm text-gray-400">{song.artist}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpotifySection;
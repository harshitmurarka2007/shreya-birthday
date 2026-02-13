import React, { useState, useRef, useEffect } from 'react';
import { Pause, Play, Volume2, VolumeX } from 'lucide-react';

interface MusicPlayerProps {
  isPlaying: boolean;
  onTogglePlay: () => void;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ isPlaying, onTogglePlay }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(false);

  // EDITABLE: Paste the URL of your mp3 file here.
  // Must be a direct link to the audio file.
  const MUSIC_URL = "https://cdn.pixabay.com/download/audio/2022/10/18/audio_31c2730e64.mp3"; 

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(e => console.log("Autoplay blocked:", e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-white/90 backdrop-blur-md p-1.5 rounded-full shadow-lg border border-pink-200 transform scale-90 origin-bottom-right md:scale-100">
      <audio ref={audioRef} src={MUSIC_URL} loop />
      
      <button 
        onClick={onTogglePlay}
        className="p-2 bg-rose-gold text-white rounded-full hover:bg-deep-red transition-all shadow-md"
      >
        {isPlaying ? <Pause size={16} /> : <Play size={16} />}
      </button>

      {/* Hidden on small mobile screens to save space */}
      <div className="hidden sm:flex flex-col px-2">
        <span className="text-[10px] font-serif text-gray-600 font-bold">Background Music</span>
        <span className="text-[9px] text-gray-400">Romantic Instrumental</span>
      </div>

      <button onClick={toggleMute} className="p-1.5 text-rose-gold hover:text-deep-red transition-colors">
        {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
      </button>
    </div>
  );
};

export default MusicPlayer;
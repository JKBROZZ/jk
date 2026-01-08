import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.3;
    }
  }, []);

  return (
    <div className="fixed top-6 right-6 z-50 flex gap-2">
      <button
        onClick={togglePlay}
        className="bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-white/30 transition-all duration-300 shadow-lg"
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? (
          <Pause className="w-5 h-5 text-pink-100" />
        ) : (
          <Play className="w-5 h-5 text-pink-100" />
        )}
      </button>
      <button
        onClick={toggleMute}
        className="bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-white/30 transition-all duration-300 shadow-lg"
        aria-label={isMuted ? 'Unmute' : 'Mute'}
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5 text-pink-100" />
        ) : (
          <Volume2 className="w-5 h-5 text-pink-100" />
        )}
      </button>
      
      {/* Replace this URL with your actual music file or YouTube embed */}
      <audio
        ref={audioRef}
        loop
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      />
      
      {/* Note: Add your own romantic song URL above or use a music service */}
    </div>
  );
}

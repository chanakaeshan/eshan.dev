import { useRef, useState, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5; // set default volume
    }
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch((err) => console.log("Autoplay blocked:", err));
      setIsPlaying(true);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <audio ref={audioRef} loop>
        <source src="/bg-music.mp3" type="audio/mpeg" />
      </audio>
      <button
        onClick={toggleMusic}
        className="glass rounded-full p-3 shadow-lg hover:scale-105 transition-transform"
      >
        {isPlaying ? <Volume2 className="w-6 h-6 text-primary" /> : <VolumeX className="w-6 h-6 text-muted-foreground" />}
      </button>
    </div>
  );
};

export default BackgroundMusic;

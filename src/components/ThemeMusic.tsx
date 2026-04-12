import { useState, useRef, useEffect } from "react";
import { MdVolumeUp, MdVolumeOff } from "react-icons/md";

const ThemeMusic = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [muted, setMuted] = useState(true);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.3;
  }, []);

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!started) {
      audio.play().catch(() => {});
      setStarted(true);
      setMuted(false);
    } else {
      setMuted((prev) => {
        audio.muted = !prev;
        return !prev;
      });
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/audio/theme-music.mp3" loop preload="none" />
      <button
        onClick={toggleMute}
        className="fixed bottom-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-none border border-primary/30 bg-background/80 backdrop-blur-sm text-muted-foreground hover:text-primary hover:border-primary/60 transition-colors"
        aria-label={muted ? "Unmute music" : "Mute music"}
      >
        {muted ? <MdVolumeOff size={18} /> : <MdVolumeUp size={18} />}
      </button>
    </>
  );
};

export default ThemeMusic;

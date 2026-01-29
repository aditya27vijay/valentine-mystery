import { useRef, useState } from "react";
import music from "../assets/music.mp3";
import "../styles/music.css";

export default function BackgroundMusic() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src={music} type="audio/mpeg" />
      </audio>

      <button className="music-btn" onClick={toggleMusic}>
        {playing ? "🔇 Pause Music" : "🎵 Play Music"}
      </button>
    </>
  );
}

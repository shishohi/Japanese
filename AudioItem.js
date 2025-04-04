import React, { useRef, useState } from 'react';

export default function AudioItem({ file }) {
  const timestamp = file.name.split('-')[1]?.split('.')[0];
  const dateStr = timestamp ? new Date(parseInt(timestamp)).toLocaleString() : '不明な日付';
  const audioSrc = `https://iwasyutbiohonmxaygaj.supabase.co/storage/v1/object/public/recording/recordings/${file.name}`;

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayback = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(err => {
          console.error("再生に失敗しました:", err);
          alert("音声の再生に失敗しました");
        });
    }
  };

  return (
    <li style={{ marginBottom: '20px' }}>
      <strong>提出日時:</strong> {dateStr}
      <br />
      <button onClick={togglePlayback}>
        {isPlaying ? '⏸️ 停止' : '▶️ 再生'}
      </button>
      {isPlaying && <span style={{ marginLeft: '10px' }}>再生中…</span>}
      <audio
        ref={audioRef}
        src={audioSrc}
        onEnded={() => setIsPlaying(false)}
      />
    </li>
  );
}

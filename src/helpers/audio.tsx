'use client'

import { useState, useEffect, useRef } from 'react';
import { Box, Slider } from '@mui/material';
import { PlayArrow, Pause, VolumeUp } from '@mui/icons-material';

const Audio: React.FC = () => {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(50);

  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    setPlaying(!playing);
  };

  useEffect(() => {
    if (playing) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [playing]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
    }
  };

  const handleChange = (event: any, newValue: number | number[]) => {
    if (audioRef.current) {
      audioRef.current.currentTime = (Number(newValue) / 100) * audioRef.current.duration;
      setProgress(Number(newValue));
    }
  };

  return (
    <Box>
      <audio
        ref={audioRef}
        src="audio.mp3"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleTimeUpdate}
      />
      <Box display="flex" alignItems="center" justifyContent="center" className='bg-gray-300 flex gap-4 pl-2 sm:w-[700px] md:w-[500px] h-12 rounded-xl pr-5'>

        {playing ? (
          <Pause onClick={togglePlay} fontSize="large" />
        ) : (
          <PlayArrow onClick={togglePlay} fontSize="large" />
        )}
        <Slider value={progress} onChange={handleChange} />
        <VolumeUp fontSize="large" />
        <Slider value={volume} onChange={(event, newValue) => setVolume(Number(newValue))} />
      </Box>
    </Box>
  );
};

export default Audio;

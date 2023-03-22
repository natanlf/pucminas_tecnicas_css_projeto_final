import { useState,  useEffect, useRef, useCallback } from 'react';

  import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
  import SkipNextIcon from '@mui/icons-material/SkipNext';
  import PlayArrowIcon from '@mui/icons-material/PlayArrow';
  import PauseIcon from '@mui/icons-material/Pause';

  import VolumeOffIcon from '@mui/icons-material/VolumeOff';
  import VolumeDownIcon from '@mui/icons-material/VolumeDown';
  import VolumeUpIcon from '@mui/icons-material/VolumeUp';

  import IconButton from '@mui/material/IconButton';
  import Box from '@mui/material/Box';
  import Slider from '@mui/material/Slider';
  import Stack from '@mui/material/Stack';

const Controls = ({ audioRef, progressBarRef, duration, setTimeProgress, tracks, trackIndex, setTrackIndex, setCurrentTrack, handleNext }) => {
    
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(60);
    const [muteVolume, setMuteVolume] = useState(false);

    const togglePlayPause = () => {
        setIsPlaying((prev) => !prev);
    };

    const playAnimationRef = useRef();

    const repeat = useCallback(() => {
      const currentTime = audioRef.current.currentTime;
      setTimeProgress(currentTime);
      progressBarRef.current.value = currentTime;
      progressBarRef.current.style.setProperty(
        '--range-progress',
        `${(progressBarRef.current.value / duration) * 100}%`
      );
  
      playAnimationRef.current = requestAnimationFrame(repeat);
    }, [audioRef, duration, progressBarRef, setTimeProgress]);
  

    useEffect(() => {
        if (isPlaying) {
          audioRef.current.play();
        } else {
          audioRef.current.pause();
        }
        playAnimationRef.current = requestAnimationFrame(repeat);
      }, [isPlaying, audioRef, repeat]);

      useEffect(() => {
        if (audioRef) {
          audioRef.current.volume = volume / 100;
          audioRef.current.muted = muteVolume;
        }
      }, [volume, audioRef, muteVolume]);

    const handlePrevious = () => {
        if (trackIndex === 0) {
            let lastTrackIndex = tracks.length - 1;
            setTrackIndex(lastTrackIndex);
            setCurrentTrack(tracks[lastTrackIndex]);
        } else {
            setTrackIndex((prev) => prev - 1);
            setCurrentTrack(tracks[trackIndex - 1]);
        }
    };
    
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', width: '100%' }}>
            <Box>
                <IconButton onClick={handlePrevious}>
                    <SkipPreviousIcon />
                </IconButton>

                <IconButton onClick={togglePlayPause}>
                    {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
                </IconButton>
                <IconButton onClick={handleNext}>
                    <SkipNextIcon />
                </IconButton>
            </Box>
            <Stack spacing={2} direction="row" 
                sx={{ mb: 1, mt: 1 }} alignItems="center" alignSelf={'end'} width={150}>
                <IconButton onClick={() => setMuteVolume((prev) => !prev)}>
                    {muteVolume || volume < 5 ? (
                        <VolumeOffIcon />
                    ) : volume < 40 ? (
                        <VolumeDownIcon />
                    ) : (
                        <VolumeUpIcon />
                    )}
                </IconButton>
                <Slider 
                    sx={{
                        
                        '& .MuiSlider-thumb': {
    
                            '&:before': {
                            boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
                            },
                            '&:hover, &.Mui-focusVisible, &.Mui-active': {
                            boxShadow: 'none',
                            },
                        },
                        }}
                    aria-label="Volume"
                    type="range"
                    min={0}
                    max={100}
                    value={volume}
                    width={200}
                    onChange={(e) => setVolume(e.target.value)}
                />
            </Stack>
        </Box>
    );
}

export default Controls;
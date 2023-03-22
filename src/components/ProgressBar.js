import { styled, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';

const TinyText = styled(Typography)({
  fontSize: '0.75rem',
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
});

const ProgressBar = ({ progressBarRef, audioRef, timeProgress, duration }) => {

  const handleProgressChange = () => {
    audioRef.current.currentTime = progressBarRef.current.value;
  };

  const formatTime = (time) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes =
        minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds =
        seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formatMinutes}:${formatSeconds}`;
    }
    return '00:00';
  };

    return (
      <Box sx={12} spacing={2} direction='row' justifyContent="space-between">
        <input type="range" ref={progressBarRef} defaultValue="0" onChange={handleProgressChange}/>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mt: 1,
            width: '100%'
          }}
        >
          <TinyText>{formatTime(timeProgress)}</TinyText>
          <TinyText>{formatTime(duration)}</TinyText>
        </Box>
      </Box>
    );
  };
  
  export default ProgressBar;
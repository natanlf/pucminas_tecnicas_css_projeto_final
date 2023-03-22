import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const DisplayTrack = ({ currentTrack, audioRef, setDuration, progressBarRef, handleNext }) => {

  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds;
  };

    return(
        <Box>
          <audio src={currentTrack.src} ref={audioRef} onLoadedMetadata={onLoadedMetadata}  onEnded={handleNext} />
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%'
          }}>
            <CardMedia
              component="img"
              sx={{ width: 250 }}
              image={currentTrack.thumbnail}
              alt={currentTrack.title}>
            </CardMedia>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h5">{currentTrack.title}</Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">{currentTrack.author}</Typography>
            </CardContent>
          </Box>
      </Box>
    );
  };
  export default DisplayTrack;
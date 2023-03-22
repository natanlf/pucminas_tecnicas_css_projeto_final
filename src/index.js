import React from 'react';
import ReactDOM from 'react-dom/client';



//import './index.css';
import './styles/customize-progress-bar.css';
import AudioPlayer from './components/AudioPlayer';
import Header from './components/Header';
import Footer from './components/Footer';
import reportWebVitals from './reportWebVitals';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const darkTheme = createTheme({ 
  palette: {
    mode: 'dark'
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <ThemeProvider theme={darkTheme}>
      <Header></Header>
      <Box sx={{ flexGrow: 1, mt: 2 }} >
        <Grid container spacing={2} direction="row" justifyContent="center">
          <Grid item xs={12} md={6} lg={5} xl={4}>
            <Item><AudioPlayer/></Item>
          </Grid>
        </Grid>
      </Box>
      <Footer/>
     </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

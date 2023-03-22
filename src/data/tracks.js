// audio files
import enterSandman from './Metallica_-Enter_Sandman.mp3';
import nothing from './Metallica_-_Nothing_Else_Matters.mp3';
import unforgiven from './Metallica_-_The_Unforgiven.mp3';
import centMusic from './50_Cent_-_In_Da_Club.mp3';
// audio thumbnails
import metallica from './metallica.jpg';
import cent from './cent.jpg';

export const tracks = [
  {
    id: 1,
    title: "Enter Sandman",
    src: enterSandman,
    author: "Metallica",
    thumbnail: metallica
  },
  {
    id: 2,
    title: "In Da Club",
    src: centMusic,
    author: "50 cent",
    thumbnail: cent
  },
  {
    id: 3,
    title: "Nothing Else Matters",
    src: nothing,
    author: "Metallica",
    thumbnail: metallica
  },
  {
    id: 4,
    title: "The Unforgiven",
    src: unforgiven,
    author: "Metallica",
    thumbnail: metallica
  }
];

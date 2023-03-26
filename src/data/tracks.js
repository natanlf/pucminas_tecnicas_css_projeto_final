// audio files
import enterSandman from './Metallica_-Enter_Sandman.mp3';
import masterMusic from './Master-of-Puppets.mp3';
import centMusic from './50_Cent_-_In_Da_Club.mp3';
import graveMusic from './No-Grave.mp3';
import bellsMusic from './For-Whom-The-Bell-Tolls.mp3';
// audio thumbnails
import metallica from './metallica.jpg';
import masterPic from './master-of-puppets.jpg';
import cent from './cent.jpg';
import gravePic from './no-grave.jpg';
import bellsPic from './ride-the-lighthing.jpg';

export const tracks = [
  {
    title: "Enter Sandman",
    src: enterSandman,
    author: "Metallica",
    thumbnail: metallica
  },
  {
    title: "For Whom The Bell Tolls",
    src: bellsMusic,
    author: "Metallica",
    thumbnail: bellsPic
  },
  {
    title: "In Da Club",
    src: centMusic,
    author: "50 cent",
    thumbnail: cent
  },
  {
    title: "Master of Puppets",
    src: masterMusic,
    author: "Metallica",
    thumbnail: masterPic
  },
  {
    title: "Ain't No Grave",
    src: graveMusic,
    author: "Jonny Cash",
    thumbnail: gravePic
  }
];

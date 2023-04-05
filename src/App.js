import React from 'react';
import { Login } from 'simple-component-library-sat';
import Carousel1 from 'simple-component-library-sat/dist/caurosel/caurosel';
// import Carousel1 from './caurosel/caurosel';
import './App.css';
import Img1 from './images/s1.jpg';
import Img2 from './images/s2.jpg';
import Img3 from './images/s3.jpg';
import Img4 from './images/s4.jpg';

function App() {
  const images = [
    Img1,Img2, Img3, Img4
  ];
  return (
    <>
      <div >
        <Carousel1 images={images} />
        {/* < Carousel1 /> */}
      </div>
      
      <div>
        <Login />
      </div>
    </>
  );
}

export default App;

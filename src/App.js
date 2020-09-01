import React from 'react';
import './App.css';
import Image from './Image';

const images = []
function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="heading">Softtech Image Gallery Case</h1>
        <button onClick={()=> alert('hi')}>Upload</button>
        <div className="gallery">
          {images.map(image => <Image src={image} />)}
        </div>
      </div>
    </div>
  );
}

export default App;

import * as React from 'react';
import { useState } from 'react';
import "./styles/Home.css";

import Header from './Header';
import Map from './Map';
import LandInfo from './LandInfo';
import Footer from './Footer';

export default function Home() {

  var index;
  const [selectedLand, setSelectedLand] = useState(0);

  function handleMapLandClick(index) {
    setSelectedLand(index);
  }

  return (
    <>
      <Header />
      <div className="container">
        <main className="main">
          <h1 className="title">
            Welcome to <a href="https://thirdweb.com/">My Map</a>!
          </h1>
          <br />
          <Map onMapLandClick={handleMapLandClick} />
          <LandInfo mainTitle={selectedLand} showInfo={selectedLand != 0} />
        </main>
        <Footer />
      </div>
    </>
  );
}

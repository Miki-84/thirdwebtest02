import * as React from 'react';

import "./styles/Home.css";

import Header from './Header';
import Map from './Map';
import Footer from './Footer';

export default function Home() {

  return (
    <>
      <Header />
      <div className="container">
    <main className="main">
      <h1 className="title">
        Welcome to <a href="https://thirdweb.com/">Eglaria</a>!
      </h1>
      
      <Map />
    </main>
    <Footer />
  </div>
    </>
  );
}

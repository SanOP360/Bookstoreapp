import React from 'react'
import Navbar from '../Navbar';
import Banner from '../Banner';
import FreeBookList from '../FreeBookList';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <FreeBookList />
      <Footer />
    </>
  );
}

export default Home

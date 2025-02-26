import React from 'react';
import './App.css';
import Header from './Components/Header';
import HomeSection from './Components/HomeSection';
import ItinerarySection from './Components/ItinerarySection';
import BookingSection from './Components/BookingSection';
import Footer from './Components/Footer';
import OtherPackages from './Components/OtherPackages';


function App() {
  return (
    <div className="App">
      <Header />
      <HomeSection />
      <ItinerarySection />
      <BookingSection />
      <OtherPackages />
      <Footer />
    </div>
  );
}

export default App;

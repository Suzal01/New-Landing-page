import React from 'react';
import Navbar from './components/FirstPage/FirstPage';
import Secondpage from './components/Secondpage/Secondpage';
import LocomotiveScroll from 'Locomotive-scroll';
import Lastpage from './components/Lastpage/lastpage'
import ThirdSection from './components/ThirdSection/ThirdSection';
import ForthSection from './components/ForthSection/ForthSection';
import FifthSection from './components/FifthSecton/FifthSection';
import SixthSection from './components/SixthSection/SixthSection';
function App() {

  const scroll = new LocomotiveScroll();
  return (
    <>
      <Navbar />
      <Secondpage />
      <Lastpage />
      <ThirdSection />
      <ForthSection />
      <FifthSection />
      <SixthSection />
      </>
  )
};

export default App;
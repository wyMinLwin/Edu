import React,{useEffect} from 'react'
import AboutUs from './components/About_Us/AboutUs'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import Leadership from './components/Leadership/Leadership'
import SmartMeetings from './components/Smart_Meetings/SmartMeetings'
import Training from './components/Training/Training'
import WOW from 'wowjs';


const App = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, [])
  return (
    <div>
      <Home />
      <AboutUs />
      <SmartMeetings />
      <Training />
      <Leadership />
      <Contact />
    </div>
  )
}

export default App
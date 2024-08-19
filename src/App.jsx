import { useState } from "react"
import About from "./components/About/About"
import Campus from "./components/Campus/Campus"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Programs from "./components/Programs/Programs"
import Testimonials from "./components/Testimonials/Testimonials"
import Title from "./components/Title/Title"
import VideoPlayer from "./components/VideoPlayer/VideoPlayer"


function App() {
const [playState,setPlayState]=useState(false);
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="container">
        <Title subTitle='Our Program' title='What we offer'></Title>
        <Programs></Programs>
        <About setPlayState={setPlayState}></About>
        <Title subTitle='Galley' title='Campus Photos'></Title>
        <Campus></Campus>
        <Title subTitle='Testimonials' title='What Student says'></Title>
        <Testimonials></Testimonials>
        <Title subTitle='Contact Us' title='Get in Touch'></Title>
        <Contact></Contact>
        <Footer></Footer>
        </div>
        <VideoPlayer playState={playState} setPlayState={setPlayState}></VideoPlayer>
    </div>
  )
}

export default App

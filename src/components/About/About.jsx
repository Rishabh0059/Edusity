/* eslint-disable react/prop-types */
import './About.css'
import about_img from '../../assets/images/about.png'
import play_icon from '../../assets/images/play-icon.png'
const About=({setPlayState})=>{
return(
  <div className="about">
    <div className="about-left">
    <img src={about_img} className='about-img'></img>
    <img src={play_icon} className='play-icon' onClick={()=>setPlayState(true)}></img>
    </div>
   <div className="about-right">
    <h3>About University</h3>
    <h2>Nuturing Tommorows Leaders Today</h2>
    <p>Edusity is well-known for its strong academic programs, state-of-the-art infrastructure, and vibrant campus life.The college offers modern labs, libraries, and other resources that are essential for a comprehensive learning experience.</p>
    <p>Along with academics we also provide various clubs and activities that can help you develop soft skills and network with peers who share similar interests.</p>
    <p>We have a vast and strong alumni network, which can be beneficial for mentorship and career opportunities. If you are looking for an institution with a long-standing reputation and strong industry connections then Edusity is fantastic option to consider.</p>
   </div>
  </div>
)
}
export default About;
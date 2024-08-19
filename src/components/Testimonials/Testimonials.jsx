import './Testimonials.css'
import next_icon from '../../assets/images/next-icon.png'
import back_icon from '../../assets/images/back-icon.png'
import user_1 from '../../assets/images/user-1.png'
import user_2 from '../../assets/images/user-2.png'
import user_3 from '../../assets/images/user-3.png'
import user_4 from '../../assets/images/user-4.png'
import { useRef } from 'react'


const Testimonials=()=>{

  const slider=useRef();
  let tx=0;
  const slideForward=()=>{
    if(tx > -50){
      tx-=25;
    }
    slider.current.style.transform=`translateX(${tx}%)`;
  }

  const slideBackward=()=>{
    if(tx < 0){
      tx+=25;
    }
    slider.current.style.transform=`translateX(${tx}%)`;
  }

return (
  <div className="testimonials">
    <img src={next_icon} className='next-btn' onClick={slideForward}></img>
    <img src={back_icon} className='back-btn' onClick={slideBackward}></img>
    <div className="slider">
      <ul ref={slider}>
        <li>
          <div className="slide">
            <div className="user-info">
              <img src={user_1}></img>
              <div>
                <h3>Emily Langdon</h3>
                <span>Edusity,USA</span>
              </div>
            </div>
            <p>Edusity is known for its rigorous academics. The faculty is top-notch, and the courses are challenging but rewarding. If you are passionate about learning, this is the place to be.The research opportunities at Berkeley are incredible.</p>
          </div>
        </li>

        <li>
          <div className="slide">
            <div className="user-info">
              <img src={user_2}></img>
              <div>
                <h3>William Jackson</h3>
                <span>Edusity,USA</span>
              </div>
            </div>
            <p>The Edusity has a challenging academic environment that really pushes you to excel. The professors are experts in their fields, and the curriculum is designed to prepare you for the real world.
            The campus life here is amazing.
            </p>
          </div>
        </li>

        <li>
          <div className="slide">
            <div className="user-info">
              <img src={user_3}></img>
              <div>
                <h3>Rachel</h3>
                <span>Edusity,USA</span>
              </div>
            </div>
            <p>The academic environment is very competitive, which can be stressful at times. While it pushes you to do your best, it can also be overwhelming if you don’t find a good balance.Tuition and living expenses can be pretty high.</p>
          </div>
        </li>

        <li>
          <div className="slide">
            <div className="user-info">
              <img src={user_4}></img>
              <div>
                <h3>Chris Woakes</h3>
                <span>Edusity,USA</span>
              </div>
            </div>
            <p>The Edusity,is praised for its strong academics, vibrant campus life, and excellent career opportunities. However, students also note the large class sizes, harsh winters, competitive environment, and the high cost of attending as potential challenges. Despite these, the overall sentiment is that the university provides a rewarding and enriching experience.</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
)
}
export default Testimonials;

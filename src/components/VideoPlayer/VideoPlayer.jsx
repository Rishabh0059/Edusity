/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './VideoPlayer.css'
import video from '../../assets/images/7683347-hd_1920_1080_30fps.mp4'
import { useRef } from 'react'
const VideoPlayer=({playState,setPlayState})=>{

  const player=useRef(null);

  const closePlayer=(e)=>{
    if(e.target === player.current){
      setPlayState(false);
    }
  }

return (
  <div className={`video-player ${playState ? '' : 'hide'}`} ref={player} onClick={closePlayer}>
    <video src={video} autoPlay muted controls></video>
  </div>
)
}
export default VideoPlayer;
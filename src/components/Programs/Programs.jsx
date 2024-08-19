import './Programs.css'
import program_1 from '../../assets/images/program-1.png'
import program_2 from '../../assets/images/program-2.png'
import program_3 from '../../assets/images/program-3.png'
import program_icon_1 from '../../assets/images/program-icon-1.png'
import program_icon_2 from '../../assets/images/program-icon-2.png'
import program_icon_3 from '../../assets/images/program-icon-3.png'
const Programs=()=>{
return (
  <div className="programs">
    <div className="program">
      <img src={program_1}></img>
      <div className="caption">
        <img src={program_icon_1}></img>
        <p>Graduation Degree</p>
      </div>
    </div>

    <div className="program">
      <img src={program_2}></img>
      <div className="caption">
        <img src={program_icon_2}></img>
        <p>Masters Degree</p>
      </div>
    </div>

    <div className="program">
      <img src={program_3}></img>
      <div className="caption">
        <img src={program_icon_3}></img>
        <p>Post Graduation</p>
      </div>
    </div>
  </div>
)
}
export default Programs;
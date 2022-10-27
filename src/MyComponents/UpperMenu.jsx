import { useContext } from "react";
import { GameModeContext } from "../Context/GameMode";

function UpperMenu(prop){
const {setGameTime}=useContext(GameModeContext)

    // const handleTime=((e)=>{
    //  console.log(e.target.id);
    //  prop.updateTime(e.target.id); // callback with the current value
    // })

    const handleTime=((e)=>{
        setGameTime(e.target.id);
    })
    

    
    return (
        <div className="upper-part">
          <div className="countdown">{prop.countdown}s</div>
            <div className="time-mode">
                <div className="time" id="30" onClick={handleTime}>30s</div>
                <div className="time" id="60" onClick={handleTime}>60s</div>
                <div className="time" id="120" onClick={handleTime}>120s</div>
            </div>
        </div>
    )
}
export default UpperMenu;
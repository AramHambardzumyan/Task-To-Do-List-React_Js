import { useRecoilState } from "recoil"
import { hideComplete } from "../../State/Storage"
import "./HideCompleted.css"
import "../../App.css"

const HideCompleted = () => {
    const [hideCheck ,setHideCheck] = useRecoilState(hideComplete)

    const handleHideChange = () => {
        setHideCheck(!hideCheck)
    }

    return (
        <>
        <div className="hide-completed-container">
              <label className="hide-completed-text text-font-style">
                    <div className="checbox-style">
                        <input type="checkbox" checked={hideCheck} className="hide-completed-checkbox" onChange={handleHideChange}/>
                        <span className="geekmark"></span>    
                    </div>
                        Hide Completed
              </label>
        </div>
        </>
    )
}
export default HideCompleted
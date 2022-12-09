import React from "react"
import { useRecoilState } from "recoil"
import { tasksArray } from "../../State/Storage"
import "./DeletePopUp.css"
import "../../App.css"

const DeletePopUp =({active , setActive , deleteId}) => {

    const [tasks , setTasks] = useRecoilState(tasksArray)

    const deleteTask = (id) => {
        setTasks(() => tasks.filter(el => el.id !== id))
        setActive(false)
    }

    return (
        <div className = {active ? "modal active" : "modal"} onClick = {() => setActive(false)}>
            <div  className='modal-content' >
                <div className="delete-pop-up-container">
                    <p className="delete-pop-up-text text-font-style">Are you sure you want to delete?</p>
                    <div className="delete-pop-up-yes-no-box">
                        <p className="delete-pop-up-buttons text-font-style" onClick={() => deleteTask(deleteId)}>Yes</p>
                        <p className="delete-pop-up-buttons text-font-style" onClick = {() => setActive(false)}> No</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DeletePopUp
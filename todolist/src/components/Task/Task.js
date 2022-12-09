import { useState } from "react";
import { useRecoilState } from "recoil"
import uuid from 'react-uuid';
import DeletePopUp from "../DeletePopUp/DeletePopUp";
import { tasksArray ,hideComplete } from "../../State/Storage"
import del from "../../assets/image/delete.png"
import "./Task.css"
import "../../App.css"

const Task =() => {

    const [tasks ,setTasks] = useRecoilState(tasksArray)
    const [hideCheck , setHideCheck] = useRecoilState(hideComplete)
    const [modalActive , setModalActive]  = useState(false)
    const [transferable , setTransferable] = useState('')

    const deleteButton =(id) => {
        setModalActive(!modalActive)
        setTransferable(id)
    }

    const handleChange = (id) => {

        const taskSecond = tasks.map(el => {
            if(el.id === id) {
                return{
                     ...el, completed: !el.completed
                }
            }
            return el
        })
    
        setTasks(taskSecond)
    };

    return (
        <div className='task-container'> 
            {tasks.slice(0).reverse().map(el => {
                return(
                    <div className={hideCheck && el.completed ?"hide-completed":'task-boxes'} key={el.id}>
                        <label className="hide-completed-text text-font-style">
                            <input type="checkbox"   checked={el.completed} onChange={() =>handleChange(el.id)}  className="hide-completed-checkbox"/>
                            <span className="geekmark"></span>
                        </label>
                                    
                        <p className={el.completed ?"task-text-completed text-font-style" :"task-text text-font-style"}>{el.task}</p>   
                        <img src={del} alt='delete'  className="add-task-component-delete-button" onClick={() => deleteButton(el.id)  } />               
                    </div>
                ) 
            })}    
            <DeletePopUp  active ={modalActive} setActive = {setModalActive} deleteId={transferable} />
        </div>
    )
}
export default Task
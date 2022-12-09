import  { React , useEffect , useState , useRef }  from "react"
import {useRecoilState} from "recoil"
import uuid from "react-uuid"
import { tasksArray } from "../../State/Storage"
import del from "../../assets/image/delete.png"
import "../../App.css"
import "./AddTask.css"

const AddTask = () => {

    const [tasks , setTasks] = useRecoilState(tasksArray)
    const [deleteButtonActive ,setDeleteButtonActive] = useState(false)
    const [errorMessage , setErrorMessage] = useState(false)
    const [inputValue , setInputValue ] =useState('')
    const inputRef = useRef(null);

    const addText = (event) =>{
        setInputValue(event.target.value)

        if(event.target.value.length > 54) {
           setErrorMessage(true) 
        } else {
            setErrorMessage(false)   
        }
    }
    const deleteText = () => {
        setInputValue('')
        setErrorMessage(false)
    }

    useEffect(() => {
        document.addEventListener('click' , handleClickOutside , true )
    } ,[])

    const handleClickOutside = (e) => {
        if(!inputRef.current.contains(e.target)){
            setDeleteButtonActive(false)
        } else {
            setDeleteButtonActive(true)
        }
    }

    const addTaskButton = () => {
        if(inputValue !== '' && inputValue.length <= 54 ){
            const newToDo = {
                task : inputValue,
                id :  uuid(),
                completed : false 
            }
        setTasks(tasks.concat(newToDo))  
        setInputValue('')  
        }
    }

    useEffect(() => {
        window.localStorage.setItem('tasks', JSON.stringify(tasks));
    },[tasks]);

    return (
        <>
        <section className="add-task-component-container">
            <p className="add-task-component-text-task text-font-style">Task</p>

            <div className="add-task-component-input-button-box">
                <div className={ errorMessage? "add-task-input-error-design":"add-task-component-input-design-box"} >
                    <input type='text' placeholder={deleteButtonActive ? "" : "Write here" }  ref={inputRef} value={inputValue} onChange = {(event) => addText(event)} className="add-task-component-input text-font-style "  />
                    <img src={del} alt='delete' onClick={deleteText} className={ deleteButtonActive ?"add-task-component-delete-button" : "delete-button-display-none"}/>
                </div>
                <div className={errorMessage ?  "add-task-error-message text-font-style " : "add-task-display-none" }>Task content can contain max 54 characters.</div>
                <button className="add-task-component-add-button text-font-style" onClick={addTaskButton}>Add</button>
            </div>
        </section>
        </>
    )
}
export default AddTask
import { atom } from "recoil";

const tasksArray = atom({
    key: 'task',
    default:JSON.parse(localStorage.getItem('tasks'))  || [],
})

const hideComplete = atom({
    key: 'hideCompleteValue',
    default: false
})

export {tasksArray ,hideComplete}
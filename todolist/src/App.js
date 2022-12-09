import React from 'react';
import {useRecoilState } from "recoil"
import AddTask from './components/AddTask/AddTask';
import EmptyText from './components/EmptyText/EmptyText';
import HideCompleted from './components/HideCompleted/HideCompleted';
import Task from './components/Task/Task';
import { tasksArray } from './State/Storage';
import './App.css';

const App = () => {
   const [tasks , setTasks] = useRecoilState(tasksArray)

  return (
    <div className='container'>
      {tasks.length !== 0 && <HideCompleted /> }
      <AddTask />
      {tasks.length === 0 ? <EmptyText /> : <Task /> }
    </div>
  )
}
export default App
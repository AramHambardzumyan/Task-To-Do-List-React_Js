import React from 'react';
import {useRecoilState, } from "recoil"
import AddTask from './components/AddTask/AddTask';
import EmptyText from './components/EmptyText/EmptyText';
import HideCompleted from './components/HideCompleted/HideCompleted';
import Task from './components/Task/Task';
import { tasksArray } from './State/Storage';
import './App.css';

const App = () => {
   const [showDesktop , setShowDesktop] = useRecoilState(tasksArray)

  return (
    <>
    <div className='container'>
      {showDesktop.length === 0 ? '' : <HideCompleted /> }
      <AddTask />
      {showDesktop.length === 0 ? <EmptyText /> : <Task /> }
    </div>
    </>
  )
}
export default App
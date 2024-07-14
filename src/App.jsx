import React, { useEffect, useState } from 'react'
import './App.css'
import List from './Components/List'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Form from './Components/Form'
import { api } from './api/apiResource'
import uuid from 'react-uuid'


const App = () => {
  const [tasks, setTasks] = useState([])
  const dataFetching = async () => {
    const res = await api.get("/todoList")
              
  setTasks(res.data)
 
  
  }
  useEffect(()=>{
    dataFetching();
  },[tasks])

    //from form
  const submitTask = async(userTask) => {
    const data =  {
      "id" : uuid(),
      "task":userTask,
      "complete":false
  
    }
   const res = await api.post("/todoList",data)
   console.log(res.data);

  };
  //from card
  const deleteTask =async(task_id)=>{
    await api.delete(`/todoList/${task_id}`)
   };

   const updateTask = async (task_id, complete)=> {
    await api.patch(`/todoList/${task_id}`,{complete} )
   }
  
  return (
     <div className='mx-auto w-50 mt-5'>
          <Form submitTask={submitTask}></Form>
          <List tasks={tasks} deleteTask={deleteTask} updateTask={updateTask}></List> 
     </div>
   )
}

export default App

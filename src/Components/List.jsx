import React from 'react'
import Card from './Card'


const List = ({tasks, deleteTask, updateTask}) => {
  return (
    <div>
        <ol className="list-group">
        
        
          <Card tasks={tasks} deleteTask={deleteTask} updateTask={updateTask}></Card>
         
       </ol>
    </div>
  )
}

export default List
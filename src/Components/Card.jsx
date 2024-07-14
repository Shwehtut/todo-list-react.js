/* eslint-disable no-restricted-globals */
import React from 'react'

const Card = ({tasks, deleteTask ,updateTask}) => {

  const handleDeleteTask = (id)=>{
    if (confirm('Are you Sure?')){
          deleteTask(id)
          
    }
  }//list-group-item w-100 mt-3 shadow-sm bg-success text-decoration-line-through text-white
return (
    <div>
        { tasks.map((task)=>(
            <div key={task.id}  className = { task.complete ? 'list-group-item w-100 mt-3 shadow-sm bg-success text-decoration-line-through text-white ':'list-group-item w-100 mt-3 shadow-sm '}>
               <div className="row">
                   <div className="col-9 offset-1"><input type="checkbox" className='me-2' onClick={ ()=> updateTask(task.id, !task.complete)} checked={task.complete} />{task.task}</div>
                   <div className="col-2">
                    <i className="fa-solid fa-xmark" onClick={()=> handleDeleteTask(task.id)}></i>
                    </div>
               </div>
           </div>
                
            ) )
        }
    </div>
  );
};

export default Card
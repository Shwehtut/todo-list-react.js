import React, { useState } from 'react'

const Form = ({submitTask}) => {
  const[userTask , setUserTask] = useState('')

  const fromSubmitHandling = () => {
    submitTask(userTask)
    setUserTask('')
}
    return (
    <div>
        <h2 className='mb-4 text-white '>React ToDo List </h2>
       <div className="row">
            <div className="col-6 offset-3">
                <input type="text" value={userTask} onChange={ e => setUserTask(e.target.value)} className='form-control' placeholder='Enter your tasks......' />
            </div>
            <div className="col-3"><button type='button' onClick={()=>fromSubmitHandling()} className='btn btn-primary'><i className="fa-solid fa-plus"></i>Add</button></div>

        </div>
    </div>
  )
}

export default Form
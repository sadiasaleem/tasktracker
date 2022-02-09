import React from 'react';
import { useState } from 'react';


const TaskAdd=({onAdd})=> {
    const[Text,setText]=useState('')
    const[Day,setDay]=useState('')
    const[Reminder,setReminder]=useState(false)
    


   
const onSubmit=(e)=>{
    e.preventDefault()

    if(!Text){
        alert('please add task')
        return
    }
    onAdd({Text, Day, Reminder})
    setText('')
    setDay('')
    setReminder(false)

    }

  return(
   <form className='add-form' onSubmit={onSubmit}>
  <div className='form-control' >
      <label >
         ADD TASK
      </label>
      <input type="text" placeholder='add task'
       value={Text} onChange={(e)=>setText(e.target.value)}>
          </input>
  </div>
  <div className='form-control' >
      <label >
       DAY AND TIME
      </label>
      <input type="text" placeholder='add day and time'
       value={Day} onChange={(e)=>setDay(e.target.value)}>
          </input>
  </div>
  <div className='form-control form-control-check' >
      <label >
         SET REMINDER
      </label>
      <input type="checkbox"
       checked={Reminder}
       value={Reminder}
      onChange={(e)=>setReminder(e.currentTarget.checked)}>
          </input>
  </div>

 <input type='submit' value='save task' className='btn btn-block'/>



  </form>)
 
}

export default TaskAdd;

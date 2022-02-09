import React from 'react'

const  TaskTracker=({onAdd,showAdd})=>{

    
    return(
        <>
        <header className='header'>  
       <h2>TASK TRACKER</h2> 
        <button className='btn' style={{background:showAdd ?'blue':'green'}}
          onClick={onAdd} >{showAdd ?'close':'add'}</button>
        </header>
       
        </>
    )

}
export default TaskTracker;
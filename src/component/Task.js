import React from 'react';
import { FaTimes} from "react-icons/fa"





const TaskList = ({Task,onDelete,onToggle}) => {
return(
   <>
   {
   Task.map((person,index)=>{
    const {id,Text,Day,Reminder}=person
    
       return(
    <div key={index}  className={`task ${Reminder ? 'reminder':''} `}
     onDoubleClick={()=>onToggle(id)}>


    <h3 key={index}>{Text}<FaTimes style={{color:'red' ,cursor:'pointer'}}
      onClick={()=>onDelete(id)}/></h3>
    <p >{Day}</p>
    
    </div>)
   }
   
   )
   }</> 
    )
};

export default TaskList;

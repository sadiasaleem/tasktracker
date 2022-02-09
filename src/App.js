

import React,{ useState } from 'react';
import TaskTracker from './component/header';
import TaskList from './component/Task';
import TaskAdd from './component/TaskAdd';
function App() {
  const [showAddTask,setshowAddTask]=useState(false)

  const [Task,setTasks]=useState([
    {
    id:1,
    Text:"Doctors appointment",
    Day:"monday",
    Reminder:true
},
{
    id:2,
    Text:"book shopping",
    Day:"tuesday",
    Reminder:false
},
{
    id:3,
    Text:"office meeting",
    Day:"wedesday",
    Reminder:true
},
{
    id:4,
    Text:"home cleaning",
    Day:"thursday",
    Reminder:false
},
{
    id:5,
    Text:"language learning",
    Day:"friday",
    Reminder:true
}]
)
 
const DeleteTask=(id)=>{
  setTasks(Task.filter((person)=>person.id!==id))

}
const ToggleReminder=(id)=>{
setTasks(Task.map((person)=>person.id === id ?
{...person, Reminder:!person.Reminder}:person))

console.log("sdasd")




}
  
const AddTask=(person)=>{
  const Id= Math.floor(Math.random()*10000+1)
 const newTask={Id,...person}
 setTasks([...Task,newTask])
}
  return (
    
     <div className='container'> 
     <TaskTracker onAdd={()=>setshowAddTask(!showAddTask) }showAdd={showAddTask}/>
     {showAddTask && <TaskAdd onAdd={AddTask}/>}
    {Task.length >0?( <TaskList  Task={Task} onDelete={DeleteTask}
     onToggle={ToggleReminder}/>):('No Task To Show')}
    
     </div> 
        
       
    
      
   
  );
}

export default App;

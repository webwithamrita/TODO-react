import { useEffect, useState } from 'react'
import './App.css'
import TaskForm from './components/TaskForm'
import TaskColumn from './components/TaskColumn'
import Todo from './assets/react.svg';
import check_mark from './assets/check-mark-button.png';
import glowing_star from './assets/glowing-star.png';
import direct_hit from './assets/direct-hit.png';

const oldTasks = localStorage.getItem("tasks");
// console.log('oldTasks-->',oldTasks);
function App() {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);// default value as empty value
  // console.log('from app.jsx->', tasks);
  const [activeCard, setActiveCard] = useState(null);


    useEffect(() => {
    localStorage.setItem("task", JSON.stringify(tasks))
  },[tasks])
  ////NOTE - ;pca; storage only stores adta in the string format . if we store adta in the form of array it will convert it into string & later we cant use it as an array.
  // //hence using JSON.stringify[task]// we can convert the string into array & reuse it
  //() => {} ----> what to run , [] when to run. if its emoty then it will run on every render
  //NOTE - 1.   useEffect(() => {})  --> if we do  not add [] then it will be called in every single render
  //2. useEffect(() => {},[task])  -> here the [task] means only on task update then useeffect will render
  const handleDelete = (taskIndex) =>{
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  }
  // console.log('taskIndex->',taskIndex);
  // console.log('APP jsx data->',data); handleD
  const onDrop = (status, position)=>{
    console.log(`${activeCard} is going to place into ${status} and at the position  ${position}`);
    if(activeCard == null || activeCard === undefined) return;
    const taskToMove = tasks[activeCard];
    const updateTasks = tasks.filter((task , index) => index !== activeCard);
    // console.log(updateTasks);

    updateTasks.splice(position,0 ,{
      ...taskToMove,
      status: status,
    });
    setTasks(updateTasks);
  };
  return (
    <>
    <div className='app'>
      {/* <header className='app_header'> */}
        <TaskForm setTasks={setTasks}/>
      {/* </header> */}
      <main className='app_main'>
        {/* <section className="task_column">
          section 1
        </section>
        <section className="task_column">
          section 2
        </section>
        <section className="task_column">
          section 3
        </section> */}
        <TaskColumn task_column='T0 DO' icon = {check_mark} tasks={tasks} status='todo' handleDelete = {handleDelete} setActiveCard= {setActiveCard} onDrop= {onDrop}/>
        <TaskColumn task_column='DOING' icon = {glowing_star} tasks={tasks} status='doing' handleDelete = {handleDelete} setActiveCard= {setActiveCard} onDrop= {onDrop}/>
        <TaskColumn task_column='DONE' icon = {direct_hit} tasks={tasks} status='done' handleDelete = {handleDelete} setActiveCard= {setActiveCard} onDrop= {onDrop}/>
      </main>
      <h1>this is active vard= {activeCard}</h1>
      {/* here we get the index no of the selected card */}
    </div>

    </>
  )
}

export default App

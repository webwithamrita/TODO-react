import React from 'react'
// import Todo from '../assets/direct-hit.png'
import Todo from '../assets/react.svg'
import "./TaskColumn.css"
import TaskCard from './TaskCard';
import DropArea from './DropArea';
// NOTE - react uses webpack as a bundle to access images hence we need to use it wisely
const TaskColumn = ({
    // console.log(Todo);
    // console.log(props,'-this is props');
    task_column, icon, tasks, status, handleDelete, setActiveCard, onDrop,index}) =>{
  return (
    <section className="task_column">
        <h2 className='task_column_heading'>
            <img className='task_column_icon' src= {icon}></img>
            {/* {props.task_column}
             */}
             {task_column}

        </h2>
        <DropArea onDrop= { ()=> onDrop(status, index + 1 )} />
        {
          tasks.map(
            (task,index) => task.status === status && (
              <React.Fragment key={index}>
                <DropArea />
            <TaskCard  title={task.task}
            tags={task.tags} handleDelete={handleDelete}
          index= {index}
          setActiveCard={setActiveCard} />
          <DropArea onDrop= {onDrop} status= {status} index = {index + 1 }/>
          // <DropArea onDrop= { ()=> onDrop(status,index + 1 )} />
          </React.Fragment>
        )//this will only display cards based o its status eg doing / done etc ...
        )}

    </section>
  );
};

export default TaskColumn

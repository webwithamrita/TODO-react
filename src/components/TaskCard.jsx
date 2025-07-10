import React from 'react'
import "./TaskCard.css"
import Tag from './Tag'
import deleteIcon from '../assets/delete.png'
const TaskCard = ({title, tags, handleDelete, index,setActiveCard}) => {
  return (
    <>
        <article className="task_card" draggable onDragStart= {()=>setActiveCard(index)} onDragEnd={()=> setActiveCard(null)}>
            {/*  draggable makes the element get dragged*/}
            <p className="task_text">
                {title}
            </p>
            <div className="task_card_bottom_line">
                <div className="task_card_tags">
                    {/* <Tag tag_name='HTML' />
                    <Tag tag_name='CSS' /> */}
                    {
                        tags.map((tag,index) =>(<Tag tag_name={tag} key={index} selected/>) )//selected is used to get the bg of each buttons eg HTML , CSS etc
                    }
                </div>
                <div className="task_delete">
                    <img src={deleteIcon} alt="" className='delete_icon'onClick = {()=> handleDelete(index)}/>
                </div>
            </div>
        </article>
    </>
  )
}

export default TaskCard
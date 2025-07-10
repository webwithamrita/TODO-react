import React, { useState } from 'react'
import './DropArea.css';
const DropArea = ({onDrop}) => {
  const [showDrop, setShowDrop] = useState(false);//when we drag the card tyhen this value is changed to true, when we leabe this card the value is updated to false

  return (
    <section
    onDragEnter={() => setShowDrop(true)}
    onDragLeave={() => setShowDrop(false)}
    onDrop= {() =>{
      onDrop();// here we dont pass any prop because in TaskColumn.jsx we have aleady passed the props [        <DropArea onDrop= { ()=> onDrop(status, index + 1 )} />
                // ]
      setShowDrop(false);
      console.log('droparea code');
    }}
    onDragOver= {e => e.preventDefault()}
    className={showDrop ? 'drop_area' : 'hide_drop'}>
      Drop Area....
    </section>
  )
}

export default DropArea

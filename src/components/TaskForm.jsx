import React, {useState} from 'react'
import './TaskForm.css';
import Tag from './Tag';
const TaskForm = ({setTasks}) => {// here we setTasks from APP.jsx file
    // .................... below code is for the sigle state for saving ,multiple fields .................

    const [taskData, setTaskData] = useState({  // in thr form of key value pairs----- this is called an object. in single object we are saving both status & tasl fo the project- default values
        task: '',// use this isndie the name: '' field of input field of the form
        status: 'todo',// use this inside the name :"" section of select option
        tags : []

    })
    // console.log('hahaha', taskData);
    const selectTag = (tag) =>{
        // console.log('tag->',tag);//HTML CSS what ever we choose as a tag
        if (taskData.tags.some(items => items === tag)){//
            //some return true or false condition // here ewe comapre it with the tag name
            //if the tag is avaibale in the array then it will return true else it will return false

            const filtertags = taskData.tags.filter(items => items !== tag)  // This creates a new array filtertags that excludes the selected tag. eg if CSS = tag then it will exclude CSS & then insert new array filtertags in the  setTaskData
            //now update the tags array by adding it
            setTaskData(prev => {
                return {...prev, tags: filtertags}
            })
        }
        else{
            setTaskData(prev => {
                return {...prev, tags : [...prev.tags, tag]}//...prev.tags => tag means we will add the previous tags with the current tag
                //If the tag is not already selected, it adds the tag to the existing array using the spread operator.
            })
        }

    }
    // console.log('task data-',taskData.tags );
    // console.log('item-',items );
    // for better user experience when we select a bitton we shall show the button is check or unchecked
    const checkTag = (tag)=>{
        return taskData.tags.some(items => items === tag);// this returns true or false. if its === tag then it passes true
    }
    const handleChange = (e) =>{
        // console.log(e.target.value, '-taget element');
        //here we will be using object destructuring -----
        const {name, value} = e.target;// hence the below lines key & value - const name = e.target.name; are the same as the above line
        // const name = e.target.name;//key
        // const value = e.target.value;//value
        // console.log('name-->',name);// name='task' passed from the input field
        // console.log('value-->',value);//user entered value
        setTaskData(prev => {
            return{...prev, [name]: value}
        })
    };
    // console.log(taskData);

    // ....................
    //below commented code is for single input field and have functions related to it .
    // const [task, setTask] = useState('');// initial state shall be empty
    // console.log('task- input field -',task);
    // const handleTaskChange = element =>{
    //     setTask(element.target.value)
    // }
    // const [status, setStatus] = useState('todo');
    //  console.log('setStatus -',status);
    // const handleStatusChange = e => {
    //     setStatus(e.target.value);
    // }
    // now we will add teh values on the +ADD button
    const handleSubmit = (clickevent) =>{
        clickevent.preventDefault()// this code will save fro the rrefresh of the form again & again
        // console.log(taskData);
        setTasks(prev => {//setTasks is passed from APP.jsx
            return [...prev, taskData];
        });
        setTaskData({  // in thr form of key value pairs----- this is called an object. in single object we are saving both status & tasl fo the project- default values
        task: '',// use this isndie the name: '' field of input field of the form
        status: 'todo',// use this inside the name :"" section of select option
        tags : []

    })/// on eavery submit we will put then form in the initial state
    }

  return (
    <>
        <header className='app_header'>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" className="task_input" value= {taskData.task} placeholder='ENTER TASK' name='task'
                onChange={handleChange}/>
                {/* //value= {taskData.task} ==> on value save/ form save the select option gets reset to its default value */}
                {/* <input type="text" className="task_input" placeholder='ENTER TASK'
                onChange={handleTaskChange}/> */}
                {/*  onChange={(element)=> handleTaskChange(element)} */}
                <div className="task_form_bottom_line">
                    <div>
                        {/* <button className="tag">HTML</button>
                        <button className="tag">CSS</button>
                        <button className="tag">JS</button>
                        <button className="tag">REACT</button> */}
                        <Tag tag_name='HTML'selectTag= {selectTag} selected ={ checkTag('HTML')}/>
                        <Tag tag_name='CSS' selectTag= {selectTag} selected ={ checkTag('CSS')}/>
                        <Tag tag_name='JS' selectTag= {selectTag} selected ={ checkTag('JS')}/>
                        <Tag tag_name='REACT' selectTag= {selectTag}selected ={ checkTag('REACT')} />
                    </div>
                    <div className=''>
                        <select name="status" id="" className="task_status" onChange={handleChange} value= {taskData.status} >
                            {/* //value= {taskData.status} ==> on value save/ form save the select option gets reset to its default value */}
                            {/* <select name="" id="" className="task_status" on onChange={handleStatusChange}> */}
                            {/* NOTE - name="status" wriet teh same name which u have added in  const [taskData, setTaskData] = useState  */}
                            <option value="todo" className="option">TODO </option>
                            <option value="doing" className="option">doing </option>
                            <option value="done" className="option">done  </option>


                        </select>
                    </div>
                    <button className="task_submit"> + ADD</button>
                </div>
            </form>
        </header>

    </>

  )
}

export default TaskForm

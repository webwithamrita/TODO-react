import React from 'react'
import './Tag.css';

const Tag = ({tag_name, selectTag, selected} ) => {
  // console.log(props,'tags - props');
  // const{ tag_name}= props;
  const tagStyle = {
    // we will be adding inline css for each tags which are selected or not (check or uncheck)
    HTML : {backgroundColor : '#e3eaa7'},
    CSS : {backgroundColor : '#b5e7a0'},
    REACT : {backgroundColor : '#dac292'},
    JS : {backgroundColor : '#15d4c8'},
    default : {backgroundColor : '#f9f9f9'}
  }
  return  <><button type='button' className="tag" style = {selected ? tagStyle[tag_name] :  tagStyle["default"]} onClick={()=> selectTag(tag_name)}>{tag_name}</button> </>
  // NOTE = ON INTERNET EXPLORER WE USED TO HAVE type = submit as the default value and each time we click on the tag the form gets submitted . hence we need to add type='button'
  // (
  //   <>
       
  //   </>
  // )
};

export default Tag;
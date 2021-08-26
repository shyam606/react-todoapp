import React from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
const Todolist =(props)=>{
    return (<>
    <div className="todo_style">
    <DeleteIcon className="circle" onClick={()=>{
        props.onSelect(props.id);
    }} />
    <li>{props.text}</li>
    </div>
    
    </>);
}

export default Todolist;
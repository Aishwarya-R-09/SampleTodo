import React, { useState } from 'react';
import {removeItem, updateStatus,updateTask} from '../Actions/index'
import { connect } from 'react-redux';

//component which displays each task which are pending and completed 
function EachTodo (props){
    const [editMode,changeEditMode] = useState(false);
    const [newValue,changeNewValue] = useState(props.item);
    const [index] = useState(props.index);
    
    
    
    if(editMode===false && newValue!== props.item){
        changeNewValue(props.item);
    }
        

    // function to remove particular task from store
    function deletetask() {
        const {dispatch} = props;
        dispatch(removeItem(index));
    }
    // function to update completion status in redux store
    function completeTask(){
        const {dispatch} = props;
        dispatch(updateStatus(index, "completed"))
    }
    // function to edit tasks
    function updateTaskName(){
        const {dispatch} = props;
        dispatch(updateTask(index, newValue));
        changeEditMode(false);
    }

    
    return(
        <div className="eachTodo">
            <div className="task_name">
                <input type="checkbox" style={{ marginRight : "30px"}} checked={props.type==="completed"} 
                readOnly={props.type==="completed"} onChange={completeTask}/>

                <input className={editMode ? "input": props.type==="completed" ? "strike no-input" : "no-input"} 
                value={newValue} onChange={(event)=>{changeNewValue(event.target.value)}} 
                readOnly={!editMode}/>
                
            </div>
            {
                !editMode && 
                <div className="task_btn">
                    {
                        props.type==="progress" && 
                        <button className="button first" onClick={()=>{changeEditMode(true)}}>
                            <b>
                                Edit
                            </b>
                        </button>
                    }
                    <button className="button" onClick={deletetask}>
                        <b>
                            Delete
                        </b>
                    </button>
                </div>
            }

            {
                editMode && 
                <div className="task_btn">
                    <button className="button first" onClick={updateTaskName}>
                        <b>
                            Save
                        </b>
                    </button>
                    <button className="button" onClick={()=>{ changeEditMode(false); changeNewValue(props.item)}}>
                        <b>
                            Cancel
                        </b>
                    </button>
                </div>
            }
        </div>
    )
    
}


export default connect() (EachTodo);
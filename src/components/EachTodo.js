import React from 'react';
import {removeItem, updateStatus,updateTask} from '../Actions/index'
import { connect } from 'react-redux';

//component which displays each task which are pending and completed 
class EachTodo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            editMode : false,
            newValue : props.item
        }
    }

    // function to remove particular task from store
    deletetask = () => {
        const { dispatch } = this.props;
        dispatch(removeItem(this.props.index));
    }
    // function to update completion status in redux store
    completeTask = () => {
        const { dispatch } = this.props;
        dispatch(updateStatus(this.props.index, "completed"))
    }
    // function to edit tasks
    updateTask = () => {
        const { dispatch } = this.props;
        dispatch(updateTask(this.props.index, this.state.newValue));
        this.setState({editMode:false});
    }

    render(){
        return(
            <div className="eachTodo">
                <div className="task_name">
                    <input type="checkbox" style={{ marginRight : "30px"}} checked={this.props.type==="completed"} 
                    readOnly={this.props.type==="completed"} onChange={this.completeTask}/>

                    <input className={this.state.editMode ? "input": this.props.type==="completed" ? "strike no-input" : "no-input"} 
                    value={this.state.newValue} onChange={(event)=>{this.setState({newValue:event.target.value})}} 
                    readOnly={!this.state.editMode}/>
                    
                </div>
                {
                    !this.state.editMode && 
                    <div className="task_btn">
                        {
                            this.props.type==="progress" && 
                            <button className="button first" onClick={()=>{this.setState({editMode:true})}}>
                                <b>
                                    Edit
                                </b>
                            </button>
                        }
                        <button className="button" onClick={this.deletetask}>
                            <b>
                                Delete
                            </b>
                        </button>
                    </div>
                }

                {
                    this.state.editMode && 
                    <div className="task_btn">
                        <button className="button first" onClick={this.updateTask}>
                            <b>
                                Save
                            </b>
                        </button>
                        <button className="button" onClick={()=>{this.setState({editMode:false,newValue:this.props.item})}}>
                            <b>
                                Cancel
                            </b>
                        </button>
                    </div>
                }
            </div>
        )
    }
}


export default connect() (EachTodo);
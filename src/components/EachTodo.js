import React from 'react';

export default class EachTodo extends React.Component{
    constructor(props){
        super(props)
        this.state={editMode:false,newValue : props.item}
    }
    render(){
        return(
            <div className="eachTodo">
                <div>
                    <input type="checkbox" style={{ marginRight : "30px"}}/>

                    <input className={this.state.editMode ? "input":"no-input"} value={this.state.newValue} 
                    onChange={(event)=>{this.setState({newValue:event.target.value})}} readOnly={!this.state.editMode}/>
                    
                </div>
                {!this.state.editMode && <div>
                    <button class="button" onClick={()=>{this.setState({editMode:true})}}>
                        <b>
                            Edit
                        </b>
                    </button>
                    <button class="button">
                        <b>
                            Delete
                        </b>
                    </button>
                </div>}

                {this.state.editMode && <div>
                    <button class="button" onClick={()=>{this.setState({editMode:false})}}>
                        <b>
                            Save
                        </b>
                    </button>
                    <button class="button" onClick={()=>{this.setState({editMode:false,newValue:this.props.item})}}>
                        <b>
                            Cancel
                        </b>
                    </button>
                </div>}
            </div>
        )
    }
}
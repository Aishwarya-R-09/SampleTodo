import React from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { addItem } from '../Actions/index';

class AddItem  extends React.Component{
    constructor(props){
        super(props);
        
        this.state= {task:""}
    }

    addTask = ()=>{
        const { dispatch } = this.props;
        dispatch(addItem(this.state.task));
        this.setState({task:""});
    }
    
    render(){
        return(
            <>
                <div className="container">
                    <h4>
                        ADD ITEM
                    </h4>
                    <hr id="hr" />
                    <div className="row justify-content-between">
                        <input className="input col-7 col-sm-8 col-md-9 col-lg-10" type="text" value={this.state.task}
                        onChange={(event)=>{this.setState({task: event.target.value})}}/>
                        <button className="button col-auto" onClick={this.addTask}>
                            <b>
                                Add
                            </b>
                        </button>
                    </div>
                </div>
            </>
        )
    }
}

export default connect() (AddItem);
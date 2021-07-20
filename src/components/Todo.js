import React from 'react';
import '../App.css'
import EachTodo from './EachTodo';

export default class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            todoArr : ["Go Shopping", "Complete Project", "Ride Bike"]
        }

    }
    render(){
        return(
            <>
                <div className="container">
                    <h4>
                        TODO
                    </h4>
                    <hr id="hr" style={{marginBottom:"25px"}}/>
                    {this.state.todoArr.map((item, index)=>{
                        return (
                            <>
                                <EachTodo item={item} index={index} type="progress"/>
                                <hr style={{ margin: "20px 0"}}/>
                            </>
                        )
                    })}
                </div>
            </>
        )
    }
}
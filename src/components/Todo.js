import React from 'react';
import '../App.css'

export default class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            todoArr : ["Pay bills", "Go Shopping", "Complete Project", "Ride Bike"]
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
                {this.state.todoArr.map((item)=>{
                    return (
                        <>
                        <div className="eachTodo">
                            <div>
                                <input type="checkbox" style={{ marginRight : "30px"}}/>
                                <span >{item}</span>
                            </div>
                            <div>
                                <button class="button">
                                    <b>Edit</b>
                                </button>
                                <button class="button">
                                    <b>Delete</b>
                                </button>
                            </div>
                        </div>
                        <hr style={{ margin: "20px 0"}}/>
                        </>
                    )
                })}
            </div>

            </>
        )
    }
}
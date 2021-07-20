import React from 'react';
import '../App.css'
import EachTodo from './EachTodo';

export default class Todo extends React.Component{
    constructor(props){
        super(props);
        
    }
    render(){
        return(
            <>
                <div className="container">
                    <h4>
                        TODO
                    </h4>
                    <hr id="hr" style={{marginBottom:"25px"}}/>
                    {this.props.arr.map((item)=>{
                        return (
                            <React.Fragment key={item[1]}>
                                <EachTodo item={item[0]} index={item[1]} type="progress"/>
                                <hr style={{ margin: "20px 0"}}/>
                            </React.Fragment>
                        )
                    })}
                </div>
            </>
        )
    }
}
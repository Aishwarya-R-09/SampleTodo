import React from 'react';
import EachTodo from './EachTodo';

export default class Completed extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            completedArr : ["Pay bills"]
        }
    }
    render(){
        return(
            <>
                <div className="container">
                    <h4>
                        COMPLETED
                    </h4>
                    <hr id="hr" style={{marginBottom:"25px"}}/>
                    {this.state.completedArr.map((item, index)=>{
                        return (
                            <>
                                <EachTodo item={item} index={index} type="completed"/>
                                <hr style={{ margin: "20px 0"}}/>
                            </>
                        )
                    })}
                </div>
            </>
        )
    }
}
import React from 'react';
import EachTodo from './EachTodo';

//component to display the completed Todo task
export default class Completed extends React.Component{
    render(){
        return(
            <>
                <div className="container">
                    <h4>
                        COMPLETED
                    </h4>
                    <hr id="hr" style={{marginBottom:"25px"}}/>
                    {
                        this.props.arr.map((item)=>{
                            return (
                                <React.Fragment key={item[1]}>
                                    <EachTodo item={item[0]} index={item[1]} type="completed"/>
                                    <hr style={{ margin: "20px 0"}}/>
                                </React.Fragment>
                            )
                        })
                    }
                </div>
            </>
        )
    }
}
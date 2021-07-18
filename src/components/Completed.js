import React from 'react';

export default class Completed extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
            <div className="container">
                <h4>
                    COMPLETED
                </h4>
                <hr id="hr" style={{marginBottom:"25px"}}/>
            </div>
            </>
        )
    }
}
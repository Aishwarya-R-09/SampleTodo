import React from 'react';
import '../App.css';

export default class AddItem  extends React.Component{
    render(){
        return(
            <>
                <div className="container">
                    <h4>
                        ADD ITEM
                    </h4>
                    <hr id="hr" />
                    <div className="row justify-content-between">
                        <input className="input col-7 col-sm-8 col-md-9 col-lg-10" type="text"/>
                        <button className="button col-auto">
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
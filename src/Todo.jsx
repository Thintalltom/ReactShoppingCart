import React, { Component } from "react";
export default class Todo extends Component
{
    constructor(props)
    {
        super(props)
        {
            this.state = {Todo:"What re your plans for today",
            message:""}
            
        }
    }
    render()
    {
        return(
             // in order to enable to way binding we need to add onChange in the input
             // event used is used to access the latest information present in a form or input
             // to change the value of a state ypu need to use setsate and state which thing to use
            <div className="container p-5">
                <label htmlFor="work"> Todo</label>
               
                <input type="text" value={this.state.Todo} className="form-control"
                onChange={(event) => {this.setState({Todo:event.target.value})}} />
                <span>
                <button className="btn btn-success"  onClick={this.onAdd}> add</button>
                {this.state.message}
                </span>

            </div>
        )
    }
    onAdd = () =>
    {
       
        let showText = this.state.Todo
        let Addtext = this.setState({message: <p>{showText}
        <span>
            <button className="btn btn-danger ms-5">Remove</button>
        </span>
        </p>})
        
       
    }
}
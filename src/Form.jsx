import { contains } from "jquery";
import React, { Component } from "react";
export default class Form extends Component{
    constructor(props)
    {
        super(props)
        {
            this.state = {Email:"abc@gmail.com",
            Password:"april04tom", message:""}
            
        }
    }
    render()
    {
        return(
            <div>
                <div className="row">
            <div className="col-12">
            <label htmlFor=""> Email </label>
                <input type="text" value={this.state.Email}
                className="form-control"
                onChange={(event) =>{this.setState({Email:event.target.value})}}
                />
            </div>
            <div className="col-12 m-2">
            <label htmlFor=""> Password </label>
                <input type="password"  value={this.state.Password}
                className="form-control"
                 onChange={(event) =>{this.setState({Password:event.target.value})}}
                />
            </div>
            <div className="col-12">
                {this.state.message}
            <button className="btn btn-primary p-2 m-2" onClick={this.show}>Login</button>
            </div>
                </div>
            </div>
        )
    }
    show = () =>
    {
        
    
        if(this.state.Email === 'abc@gmail.com' && this.state.Password === "april04tom")
        {
            let showText = this.setState({ message: <span className="text-success">This is Correct Welcome</span>}) 
        }
        else
        {
            let showText = this.setState({ message: <span className="text-danger">Try Again!!</span>}) 
        }
    }
}
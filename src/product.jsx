import React, { Component } from "react";

export default class Product extends Component{
    state=
    {
        product:this.props.product
        
    }
    render()
    {
        // props is used to get the information from parent component to child component
        return (
            <div className="col-lg-6">
                <div className="card m-2">Product
                <span className="text-end p-2">
                <button className="btn btn-danger" onClick={() => {this.props.onRemove(this.state.product)}}>Remove</button>
                </span>
              
            <div className="card-body">
                <div className="text-muted"> # {this.state.product.id}</div>
                <h5 className="text-dark"> {this.state.product.item}</h5>
                <div className="text-muted"> $ {this.state.product.prize}</div>
            </div>
            
            <div className="card-footer">
                <div className="float-left">
                    <span className="badge text-dark"> {this.state.product.quantity}</span>
                    <div className="btn-group">
                    <button className="btn btn-outline-success text-dark" onClick={() => {this.props.onIncrement(this.state.product, 10);}}>+</button>
                    <button className="btn btn-outline-danger text-dark" onClick={() => {this.props.onDecrement(this.state.product, 0);}}>-</button>
                    </div>
                </div>
                <div className="float-right text-end">
                {this.props.children}
                </div>
            
            </div>
        </div>
            </div>
        )
        ;
        
    }
}
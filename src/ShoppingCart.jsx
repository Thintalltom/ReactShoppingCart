import React,  { Component } from "react";
import Product from "./product";

export default class ShoppingCart extends Component{
// in the construcotr we have the mounting phase
// props this are property that are written in the parent component
// the step goes does
// a property was be stated in the parentclass constructor the you init it in 
// and call tit by using supper
// do not make HTTP request in the constructor 
// HTTP request can only be made in the componentDidMount method
// note: the amount of state porperties will determine the amount of objects that will be present on the screen
constructor(props)
{
    
    super(props)
    {
        this.state={
            product:[
                {id: 1, item: "shoes", prize:"N250", quantity: "0", photo: "http://picsum.photos/id/1015/60"},
                {id: 2, item: "clothes", prize:"N350", quantity: "0", photo: "http://picsum.photos/id/1016/60"},
                {id: 3, item: "bags", prize:"N550", quantity: "0", photo: "http://picsum.photos/id/1017/60"},
                {id: 4, item: "phones", prize:"N750", quantity:"0", photo: "http://picsum.photos/id/1018/60"},
                {id: 5, item: "Accessories", prize:"N450", quantity:"0", photo: "http://picsum.photos/id/1019/60"},
                {id: 6, item: "Gadgets", prize:"N850", quantity:"0", photo: "http://picsum.photos/id/1019/60"} 
            ]
        }
    }
}
   
    render()
    {
        console.log('ShoppingCart')
    return(
        <div className="container-fluid">
        <h4>Shopping Cart</h4>
        
        <div className="row">
        {this.state.product.map((prod) => {
            // therefore shopping cart is the parent component while product component is the child
            return( <Product key={prod.id} 
                product ={prod}
                onIncrement = {this.handleIncreament}
                onDecrement = {this.handleDecreament}
                onRemove = {this.onRemove}
                >
                    <button className="btn btn-primary">Buy Now</button>
                </Product>
            );  
        })}
        </div>
        </div>
    );
    }
    // componentDid mount is used to make HTTP request to get data from database
    // HTTP request is made basically by fetching and connnecting to a database
    componentDidMount(){
     var promise = fetch("http://localhost:5000/product", {method:"GET"});
     promise.then((response) => {
         console.log(response);

         let promise2 =response.json();
     })
    }
    //handling of event for the children event
    // this mthod shows that all the children have been loaded successfully in the current working component
    // the constant data is prevProps and prevState

    componentDidUpdate(prevProps, prevState)
    {
        console.log('componentDidUpdtae',
        prevProps, prevState, this.props, this.state)
        //HTTP calls should be made based on condition
        
    }
    //this phase occurs before deleting an instance before deleting an instance
    // basically usded when routing
    // you can use it to cancel HTTP request 
    componentWillUnmount()
    {
        console.log('component unmount')
    }
    //error handling phase
    // the error reprsent the actual error message which causes the error
    //info consist of the additional infor the error
    componentDidCatch(error, info)
    {
        console.log(error, info)
    // you can add a statement to store the info
    // this local storage.lasterror logs the details of the wrong
    localStorage.lastError = `${error}\n${JSON.stringify.info}`        
    }
    handleIncreament= (product, maxvalue) =>
    {
        
        let allProduct = [...this.state.product];
        let index = allProduct.indexOf(product)
        if(allProduct[index].quantity < maxvalue)
        {
            allProduct[index].quantity++;
            this.setState({products:allProduct})
        }
     

    }
    handleDecreament= (product, minvalue) =>
    {
        // ... this is used to copy a content inside a specified space in react // while refereing to the product above
        let allProduct = [...this.state.product];
        let index = allProduct.indexOf(product)
        // indeof method is used to get the index of a thing
        if(allProduct[index].quantity > minvalue)
        {
            allProduct[index].quantity--;
            this.setState({product:allProduct})
        }
       
    }
    onRemove = ( product) =>
    {
        // this 0is used to remove the product from the interface 
        window.confirm("are you sure")
        let allProduct = [...this.state.product];
        let index = allProduct.indexOf(product)
        // splice is used to remove the product this means starting from the spcifies index 1 element should be remobed 
        allProduct.splice(index, 1);
        this.setState({product:allProduct})
    }
}
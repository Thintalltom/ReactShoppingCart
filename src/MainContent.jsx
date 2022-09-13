import React, { Component } from "react";

class MainContent extends Component{
    state= {pageTitle:"Customers", customersCount:5,
    customers:[
        {
        id:1, 
        name:"scott",
        phone:"123.456",
        address:{city:"New jersey"},
        photo: "http://picsum.photos/id/1010/60"},

        {id:2, 
        name:"kenny", 
        phone:"132.456",
        address:{city:"Lagos"},
        photo: "http://picsum.photos/id/1011/60"},

        {id:3, 
        name:"muyeek", 
        phone:null,
        address:{city:"Nigeria"},
        photo: "http://picsum.photos/id/1012/60"},

        {id:4, 
        name:"prince", 
        phone:null,
        address:{city:"tokyo"},
        photo: "http://picsum.photos/id/1013/60"}
    ]
}
customerNameStyle = (custName) =>
{
    if(custName.startsWith('s'))
    return {backgroundColor: "green", fontSize: "20px", color: "white"};
    else if (custName.startsWith('k'))
    return {backgroundColor: "red", fontSize: "20px", color: "white"};
    else return{ };
}
rowstyle = () =>
{
    return {backgroundColor:"grey", color: "white"}
}
headStyle = () =>
{
    return {backgroundColor:"yellow"}
}

     render()
    {
        return(
                <div>
                    <h4 className="text-center p-5 text-danger">{this.state.pageTitle}
                    <span className="badge  bg-danger text-white m-2 "> {this.state.customersCount}</span>
                    <button className="btn btn-danger" onClick={this.onRefreshClick}> Add </button>
                    </h4>

                    <table className="table">
                        <thead>
                            <tr  style={this.headStyle()}>
                            <th>#</th>
                            <th>Customer</th>
                            <th>Name</th>
                            <th>Phone number</th>
                            <th>city</th>
                            </tr>
                        </thead>
                        <tbody style={this.rowstyle()}>
                        {this.getCustomerRow()}
                        </tbody>
                    </table>
                </div>
        )
    }
    // for handling an event 
    onRefreshClick = () =>
    { 
       this.setState({
           customersCount:9,
           pageTitle: "users"
    })
        }  

       // using to method to get the values of the phones numbers that are not available
       getPhoneToRender = (phone) =>
       {
               if(phone) 
               return phone;
               else{
               return <div className="text-white text-center bg-primary">No phone</div>;};
       };
       getCustomerRow = () =>
       {
         return (this.state.customers.map((cust, index) => {
                return(
                    <tr key={cust.id}>
                    <td>{cust.id}</td>
                    <td><img src={cust.photo} alt="customer" className="rounded-pill"></img>
                    <div>
                        <button className="btn btn-danger"
                         onClick={ () => {this.changePhoto(cust, index)}}>Change photo</button>
                    </div>
                    </td>
                    <td style={this.customerNameStyle(cust.name)}>{cust.name}</td>
                    <td> {this.getPhoneToRender(cust.phone)}</td>
                    <td>{cust.address.city}</td>
                    
                </tr>
                );
            }));
        };

        // update the status of the photo of the customer by easily getting the index value of the customer
        changePhoto = (cust, index) =>
{
    
   //step1  crate an array using the setstate to change
   // this is how to make dynamic chnages in an array in react
   let custArr = this.state.customers;
   custArr[index].photo ="http://picsum.photos/id/1016/60";
   this.setState({customers:custArr});
}
}


export default MainContent;

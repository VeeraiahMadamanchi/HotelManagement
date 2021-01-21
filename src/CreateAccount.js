import React,{ Component } from 'react'
import { Form,Col,Button } from 'react-bootstrap';
import './CreateAccount.css';
import 'bootstrap/dist/css/bootstrap.min.css';




class CreateAccount extends Component{
  
    constructor(props) {
        super(props);
        this.state = {hotelName:"veeraiahHotel",
        FirsName:"veer",
        password:"",
        UserName:"",
        Address2:"kndano",
        Address1:"jbjb",
        Pincode:"522212",
        State:"AP",
        City:"Gunur",
        LastName:"nan",
        MoileNumer:"9494539139"
      };
      }
      sendRequest=(event) =>{
     fetch("http://localhost:3001/api/insert", { 
    method: "POST", 
    body: JSON.stringify({ 
        hotelName:this.state.hotelName,
        FirsName:this.state.FirsName,
        password:this.state.password,
        UserName:this.state.UserName,
        Address2:this.state.Address2,
        Address1:this.state.Address1,
        Pincode:this.state.Pincode,
        State:this.state.State,
        City:this.state.City,
        LastName:this.state.LastName,
        MoileNumer:this.state.MoileNumer
        
    }), 
    headers: { 
        "Access-Control-Allow-Origin": "*", 
        'Accept': 'application/json',
        "Content-type": "application/json; charset=UTF-8"
    } 
}) 
.then(response => response.json())
.then((messages) => {console.log("messages");});

      }
    
      handleWindow=(event)=>{
        console.log("reloading");
        window.location.replace("http://localhost:3000/Login");
      }
      handleMoileNumer=(event) =>{
        this.setState({ MoileNumer:event.target.value })
        console.log(this.state.MoileNumer);
      }
      handleHotelName=(event) =>{
          this.setState({ hotelName:event.target.value })
          console.log(this.state.hotelName);
        }
        handleFirsName=(event) =>{
          this.setState({ FirsName:event.target.value })
          console.log(this.state.FirsName);
        }
        handleLastName=(event) =>{
          this.setState({ LastName:event.target.value })
          console.log(this.state.LastName);
        }
        handleCity=(event) =>{
          this.setState({ City:event.target.value })
          console.log(this.state.City);
        }
        handleState=(event) =>{
          this.setState({ State:event.target.value })
          console.log(this.state.State);
        }
        handlePincode=(event) =>{
          this.setState({ Pincode:event.target.value })
          console.log(this.state.Pincode);
        }
        handleAddress1=(event) =>{
          this.setState({ Address1:event.target.value })
          console.log(this.state.Address1);
        }
        handleAddress2=(event) =>{
          this.setState({ Address2:event.target.value })
          console.log(this.state.Address2);
        }
        handleUserName=(event) =>{
          this.setState({ UserName:event.target.value })
          console.log(this.state.UserName);
        }
        password=(event) =>{
          this.setState({ password:event.target.value })
          console.log(this.state.password);
        }
        

render() {
    return (
        <div>
            <div className="creteaccount_about">
            <h1>Register Your Hotel Here</h1>
  <p>Some text about who we are and what we do.</p>
  <p>Resize the browser window to see that this page is responsive by the way.</p>
            </div>
        <div className='createaccount_group'>
          <Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridHotelName">
      <Form.Label>Hotel Name</Form.Label>
      <Form.Control value={this.state.hotelName} onChange={this.handleHotelName} placeholder="Enter Your Hotel Name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridFirstName">
      <Form.Label>First Name</Form.Label>
      <Form.Control  value={this.state.FirsName} onChange={ this.handleFirsName} placeholder="First name" />
    </Form.Group>
  </Form.Row>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridLastName">
      <Form.Label>Last Name</Form.Label>
      <Form.Control   value={this.state.LastName} onChange={this.handleLastName} placeholder="First Name" />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridMobileNumber">
      <Form.Label>Mobile Number</Form.Label>
      <Form.Control type="number"  value={this.state.MoileNumer} onChange={this.handleMoileNumer} placeholder="Mobile Number" />
    </Form.Group>
  </Form.Row>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control value={this.state.City} onChange={this.handleCity}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control value={this.state.State} onChange={this.handleState}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip Code</Form.Label>
      <Form.Control value={this.state.Pincode} onChange={this.handlePincode}/>
    </Form.Group>
  </Form.Row>
  <Form.Row>
  <Form.Group as={Col}  controlId="formGridAddress1">
    <Form.Label>Address 1</Form.Label>
    <Form.Control value={this.state.Address1} placeholder="1234 Main St" onChange={this.handleAddress1}/>
  </Form.Group>

  <Form.Group as={Col} controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control value={this.state.Address2} placeholder="Apartment, studio, or floor" onChange={this.handleAddress2}/>
  </Form.Group>

  </Form.Row>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridHotelName">
      <Form.Label>User Name</Form.Label>
      <Form.Control value={this.state.UserName} onChange={this.handleUserName} placeholder="Enter Your UserName Name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridFirstName">
      <Form.Label>Password</Form.Label>
      <Form.Control value={this.state.password} type="password" onChange={this.password} placeholder="First name" />
    </Form.Group>
  </Form.Row>
  <Button variant="primary" type="submit" onClick={this.sendRequest,this.handleWindow}>
    Submit
  </Button>
  
</Form>

        </div>
    
        </div>
    )
}
}
export default CreateAccount


import React from "react";
import {Card,CardBody,Col, Button, Form, FormGroup, Label, Input} from "reactstrap";
import axios from 'axios';

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
    }
  }
  envoyer(id){
    axios.post("http://localhost:3000/Employee/authenticate", {
    email:this.state.email,
    password:this.state.password,
    })
    .then(res =>{
        console.log("data", res.data);
        console.log("statut", res.data['status'])
        if (res.data['status']==="error"){
          alert ("Verify your account email adress or password")
        }
        else{
        //alert ('Welcom to our Carpooling App')
        localStorage.setItem('idp',res.data.data.user._id)
        console.log('idEmployee',res.data.data.user._id)
        window.location.href="/auth/index"
      }

    })
        
    }
  render() {
    return (
      <>
        <Col lg="5" md="200">
           <Card className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
               <Form role="form">
                

              <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
      </FormGroup>
      <Col sm={{ size: 10, offset: 2 }}>
          <Button>Se connecter</Button>
        </Col>
              </Form> 

           
            </CardBody>
       

          </Card>

        </Col>
        
                   
       
        
      </>
    );
  }
}

export default Login;

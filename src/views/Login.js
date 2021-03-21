
import React from "react";
import {Card,CardBody,Col, Button, Form, FormGroup, Label, Input} from "reactstrap";
import axios from 'axios';

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
    }
  }
  envoyer(id){
    axios.post("http://localhost:3100/Admin/login", {
    username:this.state.username,
    password:this.state.password,
    })
    .then(res =>{
        console.log("data", res.data);
      
         if (res.data==="wrong admin taped"){
           alert ("Vérifier l'administrateur")
         }
         else if (res.data==="wrong password inserted taped"){
          alert ("Vérifier le mot de passe")
         }
         else{
          localStorage.setItem('BearerToken',res.data)
          console.log('Bearer Token',res.data)
          window.location.href="/admin"
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
        <Label for="adresse email">Administrateur</Label>
        <Input type="email" name="email" id="Email" placeholder="username"
        value={this.state.username}
        onChange={event => this.setState({ username: event.target.value })} />
      </FormGroup>
      <FormGroup>
        <Label for="Mot de passe">Mot de passe</Label>
        <Input type="password" name="password" id="Password" placeholder="mot de passe"
          onChange={event => this.setState({ password: event.target.value })} />
        
      </FormGroup>
      <Col sm={{ size: 10, offset: 3 }}>
          <Button onClick ={ () => this.envoyer()}>Se connecter</Button>
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

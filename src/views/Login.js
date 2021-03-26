
import React from "react";
import {Card,CardBody,Col, Button, Form, FormGroup, Label, Input} from "reactstrap";
import axios from 'axios';


class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      role:'admin',
    }
  }
  envoyer(id){
    console.log("Role de l'utilisateur", this.state.role)
    if (this.state.role=="organisateur"){
      axios.post("http://localhost:3100/organisator/login", {
        organisatorname:this.state.username,
        password:this.state.password,
        
        })
        .then(res =>{
            console.log("data", res.data);
          
             if (res.data==="wrong username taped"){
               alert ("Vérifier le nom d'utilisateur")
             }
             else if (res.data==="wrong password inserted taped"){
              alert ("Vérifier le mot de passe")
             }
             else if (res.data==="Account not activated"){
              alert ("Compte non activé")
             }
             else{
              
              localStorage.setItem('BearerToken',res.data)
              console.log('Bearer Token',res.data)
              window.location.href="/organisateur"
           }
    
        }) 
    }
    else if (this.state.role=="prestataire"){
      axios.post("http://localhost:3100/ServiceProvidor/login", {
        serviceprovidorname:this.state.username,
        password:this.state.password,
        })
        .then(res =>{
          
            console.log("data", res.data);
          
             if (res.data==="wrong username taped"){
  
               alert ("Vérifier le nom d'utilisateur")
             }
             else if (res.data==="wrong password inserted taped"){
              alert ("Vérifier le mot de passe")
             }
             else if (res.data==="Account not activated"){
              alert ("Compte non activé")
             }
             else{
              localStorage.setItem('BearerToken',res.data)
              console.log('Bearer Token',res.data)
             window.location.href="/prestataire"
           }
    
        })  
    }
  else if(this.state.role=='admin'){
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
    }
  
  render() {
    return (
      <>
        <Col lg="5" md="200">
           <Card className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
                    <Form role="form">   
                            <FormGroup>
                                <Label for="adresse email">Utilisateur</Label>
                                <Input type="email" name="email" id="Email" placeholder="username"
                                value={this.state.username}
                                onChange={event => this.setState({ username: event.target.value })} />
                           </FormGroup>

                             <FormGroup>
                                  <Label for="Mot de passe">Mot de passe</Label>
                                  <Input type="password" name="password" id="Password" placeholder="mot de passe"
                                    onChange={event => this.setState({ password: event.target.value })} />
                              </FormGroup>
                           
                            
                            <FormGroup check inline>
                            <Label check>
                              <Input type="checkbox" onChange={e => this.setState({role: "organisateur"})} /> Organisateur 
                            </Label>
                            </FormGroup>
                             <FormGroup check inline>
                            <Label check>
                              <Input type="checkbox" onChange={e => this.setState({role: "prestataire"})} /> Prestataire
                            </Label>
                          </FormGroup>   
                      </Form> 





                           <br></br> 
                         <Col sm={{ size: 10, offset: 3 }}>
                                <Button onClick ={ () => this.envoyer()}>Se connecter</Button>
                            </Col>
            </CardBody>
          </Card>
        </Col>   
      </>
    );
  }
}

export default Login;


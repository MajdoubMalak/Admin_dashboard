import React from "react";
import Header from "components/Headers/Header.js";
import {  Card, CardHeader, CardBody,Row,Col,Container, Button} from "reactstrap";
import { AvForm, AvField, AvGroup } from 'availity-reactstrap-validation';
import axios from 'axios';
 class UpdateParticular extends React.Component {
   constructor(){
       super()
       this.state={
        username:'',
        email:'',
        phoneNumber:'',
        age:'',
        gender:'',
        activated:'',
       }
       this.getOne()
   }
  componentDidMount() {
        this.getOne()
      }
    getOne(){
        console.log('id',localStorage.getItem('idparticular'));
        const element = fetch("http://localhost:3100/users/" + localStorage.getItem('idparticular'))
       .then(response => response.json()).then(data => {
           console.log("data", data)
          this.setState({username: data.username, email: data.email, phoneNumber: data.phoneNumber, age:data.age, gender:data.gender, activated:data.activated})
          console.log('phoneNumber', this.state.phoneNumber);
          const activation ="Compte non activé"
          if(this.state.activated == true){  activation= "Compte activé"}
          console.log('statut du compte', activation);
          this.setState({activated: activation})
       })
      } 
   handleSubmit(){
    const token = localStorage.getItem('BearerToken');
    console.log('username', this.state.username )
    const url= "http://localhost:3100/users/"+localStorage.getItem('idparticular')
    axios.patch(url, {
      username:this.state.username,
      email:this.state.email,
      phoneNumber:this.state.phoneNumber,
      age:this.state.age,
      gender:this.state.gender
    }, {
      headers: {
        'Authorization': `Bearer ${token}` 
      }
    }).then(res =>{
      console.log("data", res.data);
      if(res.data=="user name exist !"){alert ('Nom existe')}
      else if (res.data=="user email exist !"){alert ('adresse email existe')}
      else if (res.data=="user phone number exist !") {alert ('numéro de téléphone existe')}
      else{
      alert ('Utilisateur modifié')
      window.location.href="/admin/Particulars/"
      }
    })

     }
    

render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          {/* Table */}
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">Modifier l'utilisateur {this.state.username} </h3>
                  <br></br>
                  <h5> <font color="fuchsia"></font>{this.state.activated} </h5>  
                  <h5>Nom utilisateur: {this.state.username} </h5>
                  <h5>Adresse email: {this.state.email} </h5> 
                  <h5>Numéro de téléphone: {this.state.phoneNumber} </h5>      
                  <h5>Genre: {this.state.gender} </h5>
                  <h5>Age: {this.state.age} </h5>               
                </CardHeader>
                <CardBody>
                    <AvForm>
                    <Row>
                        </Row>
                        <Row>
                          <Col className="pr-1" md="3">
                            <AvGroup>
                              <label>Nom de l'utilisateur</label>
                                        <AvField placeholder="Username" name="username" type="text" defaultValue={this.state.username}
                                        errorMessage="Nom Invalide" validate={{
                                          minLength: {value: 6, errorMessage: 'Le nom doit être entre 4 et 16 caractères'},
                                          maxLength: {value: 16, errorMessage: 'Le nom doit être entre 4 et 16 caractères'}
                                        }}
                                        value={this.state.username}
                                        onChange={event => this.setState({ username: event.target.value })} />
                            </AvGroup>
                          </Col>
                          <Col className="pr-1" md="3">
                            <AvGroup>
                              <label htmlFor="Email">Address Email</label>
                                         <AvField placeholder="Email" name="originalEmail" type="email"  defaultValue={this.state.email}
                                         errorMessage="Nom invalide" validate={{
                                         pattern: {value: '^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+', errorMessage: ' ne correspnd à une adresse email'}
                                         }}
                                          value={this.state.email}
                                          onChange={event => this.setState({ email: event.target.value })} />
                                    
                            </AvGroup>
                            </Col>
                            <Col className="pr-1" md="3"> 
                            <AvGroup>
                                          <label htmlFor="phone">Téléphone</label>
                                          <AvField placeholder="Numéro de téléphone" name="phoneNumber" type="text" defaultValue={this.state.phoneNumber} 
                                            errorMessage="Numéro de Téléphone invalide" validate={{

                                              minLength: {value: 8, errorMessage: 'Numéro de téléphone invalide'},
                                              maxLength: {value: 8,  errorMessage: 'Numéro de téléphone invalide'}
                                              }}
                                          onChange={event => this.setState({ phoneNumber: event.target.value })}/>
                            </AvGroup>
                          </Col>
                          <Col className="pr-1" md="1">
                            <AvGroup>
                              <label>Age</label>
                                            <AvField placeholder="Age" type="number" name="age" max="100" min="5" //defaultValue={this.state.age} 
                                            errorMessage="Age invalide" 
                                              onChange={event => this.setState({ age: event.target.value })}/>
                            </AvGroup>
                          </Col>

                          <Col className="pr-1" md="2">
                            <AvGroup>
                                          <label for="Genre">Genre</label>
                                          <AvField type="select" name="Genre" id="Genre" value={this.state.value} defaultValue={this.state.gender} onChange={event => this.setState({gender: event.target.value})}>
                                        
                                            <option>Autre</option>
                                            <option>Homme</option>
                                            <option>Femme</option>
                                          </AvField>
                            </AvGroup>
                            </Col>
                        </Row>
                          <Row>
                          <Col className="pr-1" md="3"> 
                          <Button onClick ={ () => this.handleSubmit()}>Modifier</Button>
                          </Col>
                          </Row>

                          </AvForm>
                    </CardBody>

              </Card>
            </div>
          </Row>


        </Container>
      </>
    );
  }
}
export default UpdateParticular;
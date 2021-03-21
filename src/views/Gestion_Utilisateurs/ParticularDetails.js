import React from "react";
import Header from "components/Headers/Header.js";
import {  Card, CardHeader, CardBody,Row,Col,Container, Button} from "reactstrap";
import { AvForm, AvField, AvGroup } from 'availity-reactstrap-validation';
import axios from 'axios';
 class ParticularDetails extends React.Component {
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
          if(this.state.activated == true){  this.setState({activated: "compte activé"})}
          else {this.setState({activated: "compte non activé"})}

       })
      } 
   handleSubmit(){
      window.location.href="/admin/UpdateParticular/"
     }
   ActivateAccount(){
       if(this.state.activated=="compte activé"){alert('Compte déja activé')}
       else {
        const token = localStorage.getItem('BearerToken');
        console.log('token', token);
        const url= "http://localhost:3100/users/AdminActivateAccount/"+localStorage.getItem('idparticular')
        axios.patch(url,{}, {
          headers: {
            'Authorization': `Bearer ${token}` 
          }
        }).then(res =>{

          alert ('Compte activé')

         
        })
       }
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
                  <h3 className="mb-0"> Détails du compte </h3>
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
                          <Col className="pr-10" md="4"> 
                          <AvGroup>
                          <Button onClick ={ () => this.ActivateAccount()}>Activer  le  compte</Button>
                          </AvGroup>
                       </Col>
                          <Col className="pr-1" md="4"> 
                          <Button onClick ={ () => this.handleSubmit()}>Modifier le compte</Button>
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
export default ParticularDetails;
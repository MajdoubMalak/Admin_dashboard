import React from "react";
import Header from "components/Headers/Header.js";
import {  Card, CardHeader, CardBody,Row,Col,Container, Button,FormGroup,Form,Input} from "reactstrap";
import { AvForm, AvField, AvGroup } from 'availity-reactstrap-validation';
import axios from 'axios';
 class ServiceProviderDetails extends React.Component {
   constructor(){
       super()
       this.state={
        username:'',
        email:'',
        phoneNumber:'',
        age:'',
        gender:'',
        activated:'',
        image:'',
        region:'',
        category:'',
        company:'',
        rank:'',
       }
       this.getOne()
   }
  componentDidMount() {
        this.getOne()
      }
    getOne(){
        console.log('id',localStorage.getItem('idserviveprovider'));
        const element = fetch("http://localhost:3100/ServiceProvidor/" + localStorage.getItem('idserviveprovider'))
       .then(response => response.json()).then(data => {
           console.log("data", data)
          this.setState({username: data.username, email: data.email, phoneNumber: data.phoneNumber, age:data.age, gender:data.gender, activated:data.activated,
           image:data.profilePicture,region:data.region,category:data.category,company:data.company, rank:data.rank})
          console.log('phoneNumber', this.state.phoneNumber);
          if(this.state.activated == true){  this.setState({activated: "compte activé"})}
          else {this.setState({activated: "compte non activé"})}

       })
      } 
      handleSubmit(){
        const token = localStorage.getItem('BearerToken');
        console.log('username', this.state.username )
        const url= "http://localhost:3100/ServiceProvidor/"+localStorage.getItem('idserviveprovider')
        axios.patch(url, {
          serviceprovidorname:this.state.username,
          email:this.state.email,
          phoneNumber:this.state.phoneNumber,
          age:this.state.age,
          gender:this.state.gender,
          company:this.state.company,
          region:this.state.region,
          category:this.state.category
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
          window.location.href="/admin/ServiceProviders/"
          }
        })
    
         }
   ActivateAccount(){
       if(this.state.activated=="compte activé"){alert('Compte déja activé')}
       else {
        const token = localStorage.getItem('BearerToken');
        console.log('token', token);
        const url= "http://localhost:3100/ServiceProvidor/AdminActivateAccount/"+localStorage.getItem('idserviveprovider')
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
        <Container className="mt--7" fluid>
          <Row>
        
            <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
              <Card className="card-profile shadow">
              <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                <h3 className="mb-0">Détails du compte</h3>
                <br></br>
                <br></br>
                
                </CardHeader>
                <Row className="justify-content-center">
                  <Col className="order-lg-2" lg="3">
                    <div className="card-profile-image">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          className="rounded-circle"
                          src={`http://localhost:3100/ServiceProvidor/getprofilepicture/${this.state.image}`}
                          height="150" width="150"
                        />
                      </a>
                    </div>
                  </Col>
                </Row>

                <CardBody className="pt-0 pt-md-4">
                  <Row>
                    <div className="col">
                      <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                        <div>
                          <span className="heading">20</span>
                          <span className="description">abonnements</span>
                        </div>
                        <div>
                          <span className="heading">0</span>
                          <span className="description">abonnés</span>
                        </div>
                        <div>
                          <span className="heading">{this.state.rank}</span>
                          <span className="description">Likes</span>
                        </div> 
                      </div>
                    </div>
                  </Row>
                  <div className="text-center">
                    <h3>
                    {this.state.username}
                    <p><font color="blue"> {this.state.activated} </font> </p>
                
                    </h3> 
                    <div className="h5 font-weight-300">
                      
                   <h5><b>Adresse email:</b> {this.state.email} </h5> 
                   <h5><b>Numéro de téléphone:</b> {this.state.phoneNumber} </h5>    
                   <h5><b>Société</b> {this.state.company} </h5> 
                   <h5><b>Catégorie:</b> {this.state.category} </h5>  
                   <h5><b>Region:</b> {this.state.region} </h5>  
                   <h5><b>Genre: </b>{this.state.gender} </h5>
                   <h5><b>Age:</b> {this.state.age} </h5>   
                    </div>
          
                           
                           <Button onClick ={ () => this.ActivateAccount()}>Activer  le  compte</Button>

                        
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col className="order-xl-1" xl="8">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">Modifier le compte</h3>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                                <AvForm>
                        <Row>
                           <Col className="pr-1" md="4">
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
                           <Col className="pr-1" md="4">
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
                             <Col className="pr-1" md="4"> 
                             <AvGroup>
                                           <label htmlFor="phone">Téléphone</label>
                                           <AvField placeholder="Numéro de téléphone" name="phoneNumber" type="text" defaultValue={this.state.phoneNumber} 
                                             errorMessage="Numéro de Téléphone invalide" validate={{

                                               minLength: {value: 8, errorMessage: 'Numéro de téléphone invalide'},
                                               maxLength: {value: 8,  errorMessage: 'Numéro de téléphone invalide'}
                                               }}
                                            value={this.state.phoneNumber}
                                           onChange={event => this.setState({ phoneNumber: event.target.value })}/>
                             </AvGroup>
                           </Col>
                           </Row>
                           <Row>
                           <Col className="pr-1" md="4">
                            <FormGroup>
                              <label htmlFor="company">Société</label>
                              <Input placeholder="Indépendant" type="text"  defaultValue={this.state.company}
                              value={this.state.company}
                              onChange={event => this.setState({ company: event.target.value })} />
                            </FormGroup>
                            </Col>
                           <Col className="pr-1" md="4">
                            <AvGroup>
                                           <label for="Genre">Catégorie</label>
                                           <AvField type="select" name="Genre" id="Genre" value={this.state.value} defaultValue={this.state.category} onChange={event => this.setState({category: event.target.value})}>
                                           <option>Festival</option>
                                            <option>Mariage</option>
                                            <option>Autre</option>
                                  
                                           </AvField>
                             </AvGroup>
                          </Col>
                          <Col className="pr-1" md="4">
                
                            <AvGroup>
                                           <label for="Genre">Région</label>
                                           <AvField type="select" name="Genre" id="Genre" value={this.state.value} defaultValue={this.state.region} onChange={event => this.setState({region: event.target.value})}>
                                        
                                           <option>Sousse</option>
                                           <option>Sfax</option>
                                           <option>Tunis</option>
                                           </AvField>
                             </AvGroup>
                          </Col> 
                           <Col className="pr-1" md="3">
                             <AvGroup>
                                           <label for="Genre">Genre</label>
                                           <AvField type="select" name="Genre" id="Genre" value={this.state.value} defaultValue={this.state.gender} onChange={event => this.setState({gender: event.target.value})}>
                                        
                                             <option>Autre</option>
                                             <option>Homme</option>
                                             <option>Femme</option>
                                           </AvField>
                             </AvGroup>
                             </Col>
                           <Col className="pr-2" md="2">
                             <AvGroup>
                               <label>Age</label>
                                             <AvField placeholder="Age" type="number" name="age" max="100" min="5" //defaultValue={this.state.age} 
                                             errorMessage="Age invalide" 
                                               onChange={event => this.setState({ age: event.target.value })}/>
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
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
export default ServiceProviderDetails;

import Header from "components/Headers/Header.js";
import React from "react";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import {  Card, CardHeader, CardBody,FormGroup,Form,Input,Row,Col,Container, Button} from "reactstrap";
import { AvForm, AvField, AvGroup } from 'availity-reactstrap-validation';
import PhoneInput from 'react-phone-number-input'
import "react-web-tabs/dist/react-web-tabs.css";
import axios from 'axios';

class AddUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username:'',
      email:'',
      phoneNumber:'',
      password:'',
      age:'',
      gender:'',
      organisatorusername:'',
      organisatoremail:'',
      organisatorphoneNumber:'',
      organisatorpassword:'',
      organisatorcompany:'',
      organisatorage:'',
      organisatorgender:'',
      organisatorregion:'',
      organisatorcategory:'',
      serviceprovidorusername:'',
      serviceprovidoremail:'',
      serviceprovidorpassword:'',
      serviceprovidorphoneNumber:'',
      serviceprovidorcompany:'',
      serviceprovidorcategory:'',
      serviceprovidorregion:'',
      serviceprovidorage:'',
      serviceprovidorgender:'',
    };
  }

   particulierenvoyer() {
    axios.post("http://localhost:3100/users", {
      username:this.state.username,
      email:this.state.email,
      phoneNumber:this.state.phoneNumber,
      password:this.state.password,
      age:this.state.age,
      gender:this.state.gender
      })
      .then(res =>{
          console.log("data", res.data);
          if(res.data=="user name exist !"){alert ('Nom existe')}
          else if (res.data=="user email exist !"){alert ('adresse email existe')}
          else if (res.data=="user phone number exist !") {alert ('numéro de téléphone existe')}
          else{
          alert ('Utilisateur ajouté')
          }
  
      })

       }
       Organisateurenvoyer() {

       axios.post("http://localhost:3100/organisator", {
        organisatorname:this.state.organisatorusername,
         email:this.state.organisatoremail,
         phoneNumber:this.state.organisatorphoneNumber,
         password:this.state.organisatorpassword,
         age:this.state.organisatorage,
         gender:this.state.organisatorgender,
         region:this.state.organisatorregion,
         category:this.state.organisatorcategory,
         company:this.state.organisatorcompany
         })
         .then(res =>{
             console.log("data", res.data);
             if(res.data=="user name exist !"){alert ('Nom existe')}
             else if (res.data=="user email exist !"){alert ('adresse email existe')}
             else if (res.data=="user phone number exist !") {alert ('numéro de téléphone existe')}
             else{
             alert ('Utilisateur ajouté')
             }
     
         })
   
          }
          Prestatenvoyer() {

            axios.post("http://localhost:3100/ServiceProvidor", {
              serviceprovidorname:this.state.serviceprovidorusername,
              email:this.state.serviceprovidoremail,
              phoneNumber:this.state.serviceprovidorphoneNumber,
              password:this.state.serviceprovidorpassword,
              age:this.state.serviceprovidorage,
              gender:this.state.serviceprovidorgender,
              region:this.state.serviceprovidorregion,
              category:this.state.serviceprovidorcategory,
              company:this.state.serviceprovidorcompany
              })
              .then(res =>{
                  console.log("data", res.data);
                  if(res.data=="user name exist !"){alert ('Nom existe')}
                  else if (res.data=="user email exist !"){alert ('adresse email existe')}
                  else if (res.data=="user phone number exist !") {alert ('numéro de téléphone existe')}
                  else{
                  alert ('Utilisateur ajouté')
                  }
          
              })
        
               }
//  handleChange(event){
//     console.log('champ choisi', event.target.value );
//     this.setState({gender: event.target.value})
//     }
    
  render() {
    const value = 0;
    return (
      <>
        <Header />
        <Container className="mt--7" fluid>
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">Ajouter un utilisateur</h3>
                </CardHeader>

                <Tabs
                  defaultTab="one"
                  onChange={(tabId) => {
                    console.log(tabId);
                  }}
                >
                  <TabList>
                    <Tab tabFor="one">Particulier</Tab>
                    <Tab tabFor="two">Organisateur</Tab>
                    <Tab tabFor="three">Prestataire</Tab>
                  </TabList>
                  {/* ///////////////////////Particulier//////////////////////////////////////////        */}
                  <TabPanel tabId="one">
                    <CardBody>
                    <AvForm>
                        <Row>
                          <Col className="pr-1" md="3">
                            <AvGroup>
                              <label>Nom de l'utilisateur</label>
                                        <AvField placeholder="Username" name="username" type="text" required
                                        errorMessage="Nom Invalide" validate={{
                                          required: {value: true, errorMessage: 'Ce champ est obligatoire'},
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
                                         <AvField placeholder="Email" name="originalEmail" type="email" required
                                         errorMessage="Nom invalide" validate={{
                                         required: {value: true, errorMessage: 'Ce champ est obligatoire'},
                                         pattern: {value: '^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+', errorMessage: ' ne correspnd à une adresse email'}
                                         }}
                                          value={this.state.email}
                                          onChange={event => this.setState({ email: event.target.value })} />
            
                                          
                            </AvGroup>
                          </Col>
                          <Col className="pr-1" md="3">
                            <AvGroup>
                              <label htmlFor="password">Mot de passe</label>
                                        <AvField
                                          placeholder="Mot de passe" name="originalpassword" type="password" required
                                          errorMessage="Mot de passe invalide" validate={{
                                            required: {value: true, errorMessage: 'Ce champ est obligatoire'},
                                            minLength: {value: 6, errorMessage: 'Le mot de passe doit être entre 4 et 16 caractères'},
                                            maxLength: {value: 16,  errorMessage: 'Le mot de passe doit être entre 4 et 16 caractères'}
                                          }}
                                        
                                           onChange={event => this.setState({ password: event.target.value })}/>
                            </AvGroup>  
                          </Col>   
                          <Col className="pr-1" md="3">
                          <AvGroup>
                               
                                         <AvField name="confirmationPassword"  placeholder="Confirmer le mot de passe" label="Confirmer le mot de passe" type="password" validate={{match:{value:'originalpassword', errorMessage:"mot de passe incorrecte"}}}/>
                           </AvGroup>
                          </Col>
                        </Row>

                        <Row>
                        <Col className="pr-5" md="3">
                            <AvGroup>
                                          <label htmlFor="phone">Téléphone</label>
                                          <AvField placeholder="Numéro de téléphone" name="phoneNumber" type="text" required
                                            errorMessage="Numéro de Téléphone invalide" validate={{
                                              required: {value: true, errorMessage: 'Ce champ est obligatoire'},
                                              minLength: {value: 8, errorMessage: 'Numéro de téléphone invalide'},
                                              maxLength: {value: 8,  errorMessage: 'Numéro de téléphone invalide'}
                                              }}
                                              value={this.state.phoneNumber}
                                          onChange={event => this.setState({ phoneNumber: event.target.value })}/>
                            </AvGroup>
                          </Col>
                          <Col className="pr-5" md="2">
                            <AvGroup>
                              <label>Age</label>
                                            <AvField placeholder="Age" type="number" name="age" max="100" min="5" required
                                            errorMessage="Age invalide" validate={{
                                              required: {value: true, errorMessage: 'Ce champ est obligatoire'},
                                        
                                            }}
                                              onChange={event => this.setState({ age: event.target.value })}/>
                            </AvGroup>
                          </Col>

                          <Col className="pr-1" md="2">
                            <AvGroup>
                                          <label for="Genre">Genre</label>
                                          <AvField type="select" name="gender" id="gender" value={this.state.value} defaultValue={this.state.value} onChange={event => this.setState({gender: event.target.value})}>
                                        
                                            <option>Autre</option>
                                            <option>Homme</option>
                                            <option>Femme</option>
                                          </AvField>
                            </AvGroup>
 
                          </Col>
                          </Row>
                          <Row>
                          <Col className="pr-1" md="3"> 
                          <Button onClick ={ () => this.particulierenvoyer()}>Ajouter</Button>
                          </Col>
                          </Row>

                          </AvForm>
                    </CardBody>
                  </TabPanel>
                  {/* ///////////////////////Organisateur//////////////////////////////////////////        */}
                  <TabPanel tabId="two">
                  <CardBody>
                  <AvForm>
                        <Row>
                        <Col className="pr-1" md="3">
                            <AvGroup>
                              <label>Nom de l'utilisateur</label>
                                        <AvField placeholder="Username" name="username" type="text" required
                                        errorMessage="Nom Invalide" validate={{
                                          required: {value: true, errorMessage: 'Ce champ est obligatoire'},
                                          minLength: {value: 6, errorMessage: 'Le nom doit être entre 4 et 16 caractères'},
                                          maxLength: {value: 16, errorMessage: 'Le nom doit être entre 4 et 16 caractères'}
                                        }}
                                        value={this.state.organisatorusername}
                                        onChange={event => this.setState({ organisatorusername: event.target.value })} />
                            </AvGroup>
                          </Col>
                          <Col className="pr-1" md="3">
                          <AvGroup>
                              <label htmlFor="Email">Address Email</label>
                                         <AvField placeholder="Email" name="originalEmail" type="email" required
                                         errorMessage="adresse email invalide" validate={{
                                         required: {value: true, errorMessage: 'Ce champ est obligatoire'},
                                         pattern: {value: '^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+', errorMessage: ' ne correspnd à une adresse email'}
                                         }}
                                          value={this.state.organisatoremail}
                                          onChange={event => this.setState({ organisatoremail: event.target.value })} />
            
                                          
                            </AvGroup>
                            </Col>

                          <Col className="pr-1" md="3">
                          <AvGroup>
                              <label htmlFor="password">Mot de passe</label>
                                        <AvField
                                          placeholder="Mot de passe" name="originalorganisatorpassword" type="password" required
                                          errorMessage="Mot de passe invalide" validate={{
                                            required: {value: true, errorMessage: 'Ce champ est obligatoire'},
                                            minLength: {value: 6, errorMessage: 'Le mot de passe doit être entre 4 et 16 caractères'},
                                            maxLength: {value: 16,  errorMessage: 'Le mot de passe doit être entre 4 et 16 caractères'}
                                          }}
                                        
                                           onChange={event => this.setState({ organisatorpassword: event.target.value })}/>
                            </AvGroup>  
                          </Col>
                          <Col className="pr-1" md="3">
                          <AvGroup>
                               
                               <AvField name="confirmationPassword"  placeholder="Confirmer le mot de passe" label="Confirmer le mot de passe" type="password" validate={{match:{value:'originalorganisatorpassword', errorMessage:"mot de passe incorrecte"}}}/>
                           </AvGroup>
                          </Col>
                          <Col className="pr-1" md="3">
                          <AvGroup>
                                          <label htmlFor="phone">Téléphone</label>
                                          <AvField placeholder="Numéro de téléphone" name="phoneNumber" type="text" required
                                            errorMessage="Numéro de Téléphone invalide" validate={{
                                              required: {value: true, errorMessage: 'Ce champ est obligatoire'},
                                              minLength: {value: 8, errorMessage: 'Numéro de téléphone invalide'},
                                              maxLength: {value: 8,  errorMessage: 'Numéro de téléphone invalide'}
                                              }}
                                              value={this.state.organisatorphoneNumber}
                                          onChange={event => this.setState({ organisatorphoneNumber: event.target.value })}/>
                            </AvGroup>
                          </Col>
                       

                        
                        <Col className="pr-1" md="3">
                        <AvGroup>
                                          <label htmlFor="phone">Société</label>
                                          <AvField defaultvalue="Indépendant" name="company" type="text" required
                                            errorMessage="Numéro de Téléphone invalide" validate={{
                                              required: {value: true, errorMessage: 'Ce champ est obligatoire'}
                                              }}
                                              value={this.state.organisatorcompany}
                                          onChange={event => this.setState({ organisatorcompany: event.target.value })}/>
                            </AvGroup>
                          </Col>
                      
                          <Col className="pr-1" md="2">
                          <AvGroup>
                                          <label for="Genre">Catégorie</label>
                                          <AvField type="select" name="category" id="category" value={this.state.value} defaultValue={this.state.value} onChange={event => this.setState({organisatorcategory: event.target.value})}>
                                        
                                            <option>Festival</option>
                                            <option>Anniversaire</option>
                                            <option>Mariage</option>
                                          </AvField>
                            </AvGroup>
                          </Col>
                          <Col className="pr-1" md="2">
                          <label for="Société">Société</label>
                          <AvField type="select" name="Genre" id="Genre" value={this.state.value} defaultValue={this.state.value} onChange={event => this.setState({organisatorregion: event.target.value})}>
                                        
                                        <option>Tunis</option>
                                        <option>Sfax</option>
                                        <option>Sousse</option>
                                      </AvField>
                          </Col> 
                          <Col className="pr-1" md="2">
                          <AvGroup>
                              <label>Age</label>
                                            <AvField placeholder="Age" type="number" name="age" max="100" min="5" required
                                            errorMessage="Age invalide" validate={{
                                              required: {value: true, errorMessage: 'Ce champ est obligatoire'},
                                        
                                            }}
                                              onChange={event => this.setState({ organisatorage: event.target.value })}/>
                            </AvGroup>
                          </Col>

                          <Col className="pr-1" md="2">
                          <AvGroup>
                                          <label for="Genre">Genre</label>
                                          <AvField type="select" name="Genre" id="Genre" value={this.state.value} defaultValue={this.state.value} onChange={event => this.setState({organisatorgender: event.target.value})}>
                                        
                                            <option>Autre</option>
                                            <option>Homme</option>
                                            <option>Femme</option>
                                          </AvField>
                            </AvGroup>
                          </Col>

                          </Row>
                          <Row>
                          <Col className="pr-1" md="3"> 
                          <Button onClick ={ () => this.Organisateurenvoyer()}>Ajouter</Button>
                          </Col>
                          </Row>
                     </AvForm>
                    </CardBody>
                  </TabPanel>
                  {/* ///////////////////////Prestataire//////////////////////////////////////////        */}
                  <TabPanel tabId="three">
                  <CardBody>
                  <AvForm>
                        <Row>
                        <Col className="pr-1" md="3">
                            <AvGroup>
                              <label>Nom de l'utilisateur</label>
                                        <AvField placeholder="Username" name="username" type="text" required
                                        errorMessage="Nom Invalide" validate={{
                                          required: {value: true, errorMessage: 'Ce champ est obligatoire'},
                                          minLength: {value: 6, errorMessage: 'Le nom doit être entre 4 et 16 caractères'},
                                          maxLength: {value: 16, errorMessage: 'Le nom doit être entre 4 et 16 caractères'}
                                        }}
                                        value={this.state.serviceprovidorusername}
                                        onChange={event => this.setState({ serviceprovidorusername: event.target.value })} />
                            </AvGroup>
                          </Col>
                          <Col className="pr-1" md="3">
                          <AvGroup>
                              <label htmlFor="Email">Address Email</label>
                                         <AvField placeholder="Email" name="originalEmail" type="email" required
                                         errorMessage="adresse email invalide" validate={{
                                         required: {value: true, errorMessage: 'Ce champ est obligatoire'},
                                         pattern: {value: '^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+', errorMessage: ' ne correspnd à une adresse email'}
                                         }}
                                          value={this.state.serviceprovodoremail}
                                          onChange={event => this.setState({ serviceprovidoremail: event.target.value })} />
            
                                          
                            </AvGroup>
                            </Col>

                          <Col className="pr-1" md="3">
                          <AvGroup>
                              <label htmlFor="password">Mot de passe</label>
                                        <AvField
                                          placeholder="Mot de passe" name="originalserviceprovidorpassword" type="password" required
                                          errorMessage="Mot de passe invalide" validate={{
                                            required: {value: true, errorMessage: 'Ce champ est obligatoire'},
                                            minLength: {value: 6, errorMessage: 'Le mot de passe doit être entre 4 et 16 caractères'},
                                            maxLength: {value: 16,  errorMessage: 'Le mot de passe doit être entre 4 et 16 caractères'}
                                          }}
                                        
                                           onChange={event => this.setState({ serviceprovidorpassword: event.target.value })}/>
                            </AvGroup>  
                          </Col>
                          <Col className="pr-1" md="3">
                          <AvGroup>
                               
                               <AvField name="confirmationPassword"  placeholder="Confirmer le mot de passe" label="Confirmer le mot de passe" type="password" validate={{match:{value:'originalserviceprovidorpassword', errorMessage:"mot de passe incorrecte"}}}/>
                           </AvGroup>
                          </Col>
                          <Col className="pr-1" md="3">
                          <AvGroup>
                                          <label htmlFor="phone">Téléphone</label>
                                          <AvField placeholder="Numéro de téléphone" name="phoneNumber" type="text" required
                                            errorMessage="Numéro de Téléphone invalide" validate={{
                                              required: {value: true, errorMessage: 'Ce champ est obligatoire'},
                                              minLength: {value: 8, errorMessage: 'Numéro de téléphone invalide'},
                                              maxLength: {value: 8,  errorMessage: 'Numéro de téléphone invalide'}
                                              }}
                                              value={this.state.serviceprovidorphoneNumber}
                                          onChange={event => this.setState({ serviceprovidorphoneNumber: event.target.value })}/>
                            </AvGroup>
                          </Col>
                       

                        
                        <Col className="pr-1" md="3">
                        <AvGroup>
                                          <label htmlFor="phone">Société</label>
                                          <AvField defaultvalue="Indépendant" name="company" type="text" required
                                            errorMessage="Numéro de Téléphone invalide" validate={{
                                              required: {value: true, errorMessage: 'Ce champ est obligatoire'}
                                              }}
                                              value={this.state.serviceprovidorcompany}
                                          onChange={event => this.setState({ serviceprovidorcompany: event.target.value })}/>
                            </AvGroup>
                          </Col>
                      
                          <Col className="pr-1" md="2">
                          <AvGroup>
                                          <label for="Genre">Catégorie</label>
                                          <AvField type="select" name="category" id="category" value={this.state.value} defaultValue={this.state.value} onChange={event => this.setState({serviceprovidorcategory: event.target.value})}>
                                        
                                            <option>Festival</option>
                                            <option>Anniversaire</option>
                                            <option>Mariage</option>
                                          </AvField>
                            </AvGroup>
                          </Col>
                          <Col className="pr-1" md="2">
                          <label for="Société">Société</label>
                          <AvField type="select" name="Genre" id="Genre" value={this.state.value} defaultValue={this.state.value} onChange={event => this.setState({serviceprovidorregion: event.target.value})}>
                                        
                                        <option>Tunis</option>
                                        <option>Sfax</option>
                                        <option>Sousse</option>
                                      </AvField>
                          </Col> 
                          <Col className="pr-1" md="2">
                          <AvGroup>
                              <label>Age</label>
                                            <AvField placeholder="Age" type="number" name="age" max="100" min="5" required
                                            errorMessage="Age invalide" validate={{
                                              required: {value: true, errorMessage: 'Ce champ est obligatoire'},
                                        
                                            }}
                                              onChange={event => this.setState({ serviceprovidorage: event.target.value })}/>
                            </AvGroup>
                          </Col>

                          <Col className="pr-1" md="2">
                          <AvGroup>
                                          <label for="Genre">Genre</label>
                                          <AvField type="select" name="Genre" id="Genre" value={this.state.value} defaultValue={this.state.value} onChange={event => this.setState({serviceprovidorgender: event.target.value})}>
                                        
                                            <option>Autre</option>
                                            <option>Homme</option>
                                            <option>Femme</option>
                                          </AvField>
                            </AvGroup>
                          </Col>

                          </Row>
                          <Row>
                          <Col className="pr-1" md="3"> 
                          <Button onClick ={ () => this.Prestatenvoyer()}>Ajouter</Button>
                          </Col>
                          </Row>
                     </AvForm>
                    </CardBody>
                  </TabPanel>
                </Tabs>
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default AddUser;


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
      file: null,
    };
  }

   envoyer() {
     console.log('username', this.state.username);
     console.log('username', this.state.gender);
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
 handleChange(event){
    console.log('champ choisi', event.target.value );
    this.setState({gender: event.target.value})
    }
    
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
                                          <AvField type="select" name="Genre" id="Genre" value={this.state.value} defaultValue={this.state.value} onChange={event => this.setState({gender: event.target.value})}>
                                        
                                            <option>Autre</option>
                                            <option>Homme</option>
                                            <option>Femme</option>
                                          </AvField>
                            </AvGroup>
 
                          </Col>
                          </Row>
                          <Row>
                          <Col className="pr-1" md="3"> 
                          <Button onClick ={ () => this.envoyer()}>Ajouter</Button>
                          </Col>
                          </Row>

                          </AvForm>
                    </CardBody>
                  </TabPanel>
                  {/* ///////////////////////Organisateur//////////////////////////////////////////        */}
                  <TabPanel tabId="two">
                  <CardBody>
                      <Form>
                        <Row>
                          <Col className="pr-1" md="3">
                            <FormGroup>
                              <label>Pseudo</label>
                              <Input placeholder="Username" type="text" />
                            </FormGroup>
                          </Col>
                          <Col className="pl-1" md="3">
                            <FormGroup>
                              <label htmlFor="Email"> Adresse Email </label>
                              <Input placeholder="Email" type="email" />
                            </FormGroup>
                          </Col>
                          <Col className="pl-1" md="3">
                            <FormGroup>
                              <label htmlFor="phone">Téléphone</label>
                              <Input placeholder="Téléphone" type="text" />
                            </FormGroup>
                          </Col>
                          <Col className="pl-1" md="3">
                            <FormGroup>
                              <label htmlFor="password">Mot de passe</label>
                              <Input
                                placeholder="Mot de passe"
                                type="password"
                              />
                            </FormGroup>
                          </Col>
                        </Row>

                        <Row>
                          <Col className="pr-1" md="4">
                            <FormGroup>
                              <label>Age</label>
                              <Input placeholder="Age" type="number" />
                            </FormGroup>
                          </Col>

                          <Col className="pl-1" md="2">
                            <FormGroup>
                              <label for="Genre">Genre</label>
                              <Input type="select" name="Genre" id="Genre">
                                <option>Femme</option>
                                <option>Homme</option>
                                <option>Autre</option>
                              </Input>
                            </FormGroup>
                          </Col>
                          <Col className="pl-1" md="3">
                            <FormGroup>
                              <label htmlFor="phone">Société</label>
                              <Input placeholder="Indépendant" type="text"  defaultValue="Indépendant" />
                            </FormGroup>
                          </Col>
                          </Row>
                          <Row>
                          <Col className="pl-1" md="3">
                            <FormGroup>
                              <label for="Genre">Catégorie</label>
                              <Input type="select" name="Genre" id="Genre">
                                <option>Festival</option>
                                <option>Mariage</option>
                                <option>Autre</option>
                              </Input>
                            </FormGroup>
                          </Col>
                          <Col className="pl-1" md="3">
                            <FormGroup>
                              <label for="Genre">Région</label>
                              <Input type="select" name="Genre" id="Genre">
                                <option>Sousse</option>
                                <option>Sfax</option>
                                <option>Tunis</option>
                              </Input>
                            </FormGroup>
                          </Col> 
                          </Row>
                          <Row>
                          <Col className="pl-1" md="8">
                            <FormGroup>
                              <label for="exampleFile">Photo de profile</label>
                              <Input type="file" name="file" id="exampleFile" />
                            </FormGroup>
                          </Col>
                        </Row>
                      </Form>
                    </CardBody>
                  </TabPanel>
                  {/* ///////////////////////Prestataire//////////////////////////////////////////        */}
                  <TabPanel tabId="three">
                  <CardBody>
                      <Form>
                        <Row>
                          <Col className="pr-1" md="3">
                            <FormGroup>
                              <label>Pseudo</label>
                              <Input placeholder="Username" type="text" />
                            </FormGroup>
                          </Col>
                          <Col className="pl-1" md="3">
                            <FormGroup>
                              <label htmlFor="Email"> Adresse Email </label>
                              <Input placeholder="Email" type="email" />
                            </FormGroup>
                          </Col>
                          <Col className="pl-1" md="3">
                            <FormGroup>
                              <label htmlFor="phone">Téléphone</label>
                              <Input placeholder="Téléphone" type="text" />
                            </FormGroup>
                          </Col>
                          <Col className="pl-1" md="3">
                            <FormGroup>
                              <label htmlFor="password">Mot de passe</label>
                              <Input
                                placeholder="Mot de passe"
                                type="password"
                              />
                            </FormGroup>
                          </Col>
                        </Row>

                        <Row>
                          <Col className="pr-1" md="4">
                            <FormGroup>
                              <label>Age</label>
                              <Input placeholder="Age" type="number" />
                            </FormGroup>
                          </Col>

                          <Col className="pl-1" md="2">
                            <FormGroup>
                              <label for="Genre">Genre</label>
                              <Input type="select" name="Genre" id="Genre">
                                <option>Femme</option>
                                <option>Homme</option>
                                <option>Autre</option>
                              </Input>
                            </FormGroup>
                          </Col>
                          <Col className="pl-1" md="3">
                            <FormGroup>
                              <label htmlFor="phone">Société</label>
                              <Input placeholder="Indépendant" type="text"  defaultValue="Indépendant" />
                            </FormGroup>
                          </Col>
                          </Row>
                          <Row>
                          <Col className="pl-1" md="2">
                            <FormGroup>
                              <label for="Genre">Catégorie</label>
                              <Input type="select" name="Genre" id="Genre">
                                <option>Festival</option>
                                <option>Mariage</option>
                                <option>Autre</option>
                              </Input>
                            </FormGroup>
                          </Col>
                          <Col className="pl-1" md="2">
                            <FormGroup>
                              <label for="Genre">Région</label>
                              <Input type="select" name="Genre" id="Genre">
                                <option>Sousse</option>
                                <option>Sfax</option>
                                <option>Tunis</option>
                              </Input>
                            </FormGroup>
                          </Col> 
                          </Row>
                          <Row>
                          <Col className="pl-1" md="8">
                            <FormGroup>
                              <label for="exampleFile">Photo de profile</label>
                              <Input type="file" name="file" id="exampleFile" />
                            </FormGroup>
                          </Col>
                        </Row>
                      </Form>
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

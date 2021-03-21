
import Header from "components/Headers/Header.js";
import React from "react";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import {  Card, CardHeader, CardBody,FormGroup,Form,Input,Row,Col,Container, Button} from "reactstrap";
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
//   validate = () => {
//     let isError = false;
//     const errors = {
//       emailErr:'',
//       phoneErr:'',
//     }

//     const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

//     if ( !regex.test(this.state.email)) {

//       isError = true;
//       errors.emailErr = 'please check your email'
//       console.log("error")
//     }
//     if ((this.state.phone === '') || (this.state.phone.length <8) ) {
//       isError = true;
//       errors.phoneErr = 'please check your phone'
//     }
//     if(isError){
//     this.setState({
// ...this.state,
// ...errors
//     })
//   }
//   this.setState({
//     erreur:isError
//   })
//     return isError;
 // }
 
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
          alert ('Utilisateur ajouté')
     
  
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
                      <Form>
                        <Row>
                          <Col className="pr-1" md="3">
                            <FormGroup>
                              <label>Nom de l'utilisateur</label>
                              <Input placeholder="Username" name="username" type="text"
                              value={this.state.username}
                              onChange={event => this.setState({ username: event.target.value })} />
                            </FormGroup>
                          </Col>
                          <Col className="pl-1" md="3">
                            <FormGroup>
                              <label htmlFor="Email">Email address</label>
                              <Input placeholder="Email" name="email" type="email"
                               value={this.state.email}
                               onChange={event => this.setState({ email: event.target.value })} />
                            </FormGroup>
                          </Col>
                          <Col className="pl-1" md="2">
                            <FormGroup>
                              <label htmlFor="phone">Téléphone</label>
                              <Input placeholder="Téléphone" name="phoneNumber" type="text" 
                               onChange={event => this.setState({ phoneNumber: event.target.value })}/>
                            </FormGroup>
                          </Col>
                          <Col className="pl-1" md="3">
                            <FormGroup>
                              <label htmlFor="password">Mot de passe</label>
                              <Input
                                placeholder="Mot de passe" name="password" type="password" 
                                onChange={event => this.setState({ password: event.target.value })}/>
                            </FormGroup>
                          </Col>
                        </Row>

                        <Row>
                          <Col className="pr-1" md="1">
                            <FormGroup>
                              <label>Age</label>
                              <Input placeholder="Age" type="number" name="age"
                                onChange={event => this.setState({ age: event.target.value })}/>
                            </FormGroup>
                          </Col>

                          <Col className="pl-1" md="2">
                            <FormGroup>
                              <label for="Genre">Genre</label>
                              <Input type="select" name="Genre" id="Genre" value={this.state.value} onChange={event => this.setState({gender: event.target.value})}>
                            
                                <option>Femme</option>
                                <option>Homme</option>
                                <option>Autre</option>
                              </Input>
                            </FormGroup>
                          </Col>
                          </Row>
                          <Row>
                          <Col className="pl-1" md="9"> 
                          <Button onClick ={ () => this.envoyer()}>Ajouter</Button>
                          </Col>
                          </Row>

                      </Form>
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

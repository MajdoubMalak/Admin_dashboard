
import Header from "components/Headers/Header.js";
import React, { Component } from "react";
import { render } from "react-dom";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import {
  
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  Container,

} from "reactstrap";
import "react-web-tabs/dist/react-web-tabs.css";

class AddUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // selected: 'Particulier'
    };
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
                              <label>Pseudo</label>
                              <Input placeholder="Username" type="text" />
                            </FormGroup>
                          </Col>
                          <Col className="pl-1" md="3">
                            <FormGroup>
                              <label htmlFor="Email">Email address</label>
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

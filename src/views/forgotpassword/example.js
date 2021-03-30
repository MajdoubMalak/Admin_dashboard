
import React from "react";
import {Card,CardBody,Col, Button, Form, FormGroup, Label, Input} from "reactstrap";
import axios from 'axios';


class example extends React.Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
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
                                <Label for="adresse email">adresse email</Label>
                                <Input type="email" name="email" id="Email" placeholder="username"
                                value={this.state.username}
                                onChange={event => this.setState({ username: event.target.value })} />
                           </FormGroup>    
                            <FormGroup check inline>
                            <Label check>
                              <Input type="checkbox" onChange={e => this.setState({role: "particulier"})} /> Organisateur 
                            </Label>
                            </FormGroup>
                             <FormGroup check inline>
                            <Label check>
                              <Input type="checkbox" onChange={e => this.setState({role: "organisateur"})} /> Prestataire
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
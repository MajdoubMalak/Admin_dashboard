
import React from "react";
import UserHeader from "components/Headers/UserHeader.js";
import {Col,CardHeader,Container,Row,CardBody, Card } from "reactstrap";

class ServiceProviderHome extends React.Component {
  constructor(){
    super()
    this.state={
     username:'',
     email:'',
     phoneNumber:'',
     age:'',
     gender:'',
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
    const token = localStorage.getItem('BearerToken');
    console.log ('bearerToken', token);
    fetch("http://localhost:3100/ServiceProvidor/profileinformation", {method: 'GET', headers:{ Authorization: `Bearer ${token}` } })
    .then(response => response.json()).then(data => {
        console.log("data", data)
       this.setState({username: data.username, email: data.email, phoneNumber: data.phoneNumber, image:data.profilePicture,region:data.region, category:data.category, company:data.company })
    })
   } 
  render() {
    return (
      <>
        <UserHeader />  
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
                      <h5><b>Catégorie</b> {this.state.category} </h5>  
                      <h5><b>Entreprise</b> {this.state.company} </h5>   
                      <h5><b>Région</b> {this.state.region} </h5>    
                          
                       </div>       
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col className="order-xl-1" xl="8">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">Evènements</h3>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>


                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default ServiceProviderHome;

import React from "react";
import {

  Card,
  CardHeader,
  CardFooter,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Container,
  Row,
 
} from "reactstrap";

import Header from "components/Headers/Header.js";

class OrganisatorList extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }
  componentDidMount() {
    this.getAllUsers()
  }
  getAllUsers() {
    fetch("http://localhost:3000/Employee/getEmployees", { method: 'GET' })
      .then(response => response.json())
      .then(data => {
        console.log('getting users', data);
        this.setState({ users: data.data });
      })
  }
  handleClickEdit(event,id){
    event.preventDefault();
    localStorage.setItem('idp',id)
    window.location.href="/admin/updateUser/"

  }
  handleClickDelete(evt,id){
    evt.preventDefault();
    console.log('id',id);
    this.remove(id);
  }
  remove(id){
    console.log('id',id)

    fetch('http://localhost:3000/Employee/delete/' +id, {method: 'DELETE'})
    .then(response => response.json())
    .then(data => {
      console.log('remove',data);
      this.getAllUsers();
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
                  <h3 className="mb-0">Liste des organisateurs</h3>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Photo</th>
                      <th scope="col">Pseudo</th>
                      <th scope="col">Société</th>
                      <th scope="col">Email</th>
                      <th scope="col">Téléphone</th>
                      <th scope="col">Catégorie</th>
                      <th scope="col">Région</th>
                      <th scope="col">Age</th>
                      <th scope="col">Supprimer</th>
                      <th scope="col">Modifier</th>

                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.state.users.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.surname}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td><img src={`http://localhost:3000/sendFile/${item.image}`} height="50" width="50"/></td>
                             <td><i class= "ni ni-basket text-red" onClick ={ evt => this.handleClickDelete(evt, item._id)}></i> </td> 
                            <td><i class= "ni ni-paper-diploma text-green" onClick ={ evt => this.handleClickEdit(evt, item._id)}></i></td> 
                           
                            

                          </tr>
                        )
                      })
                    }



                  </tbody>
                </Table>
                <CardFooter className="py-4">
                  <nav aria-label="...">
                    <Pagination
                      className="pagination justify-content-end mb-0"
                      listClassName="justify-content-end mb-0"
                    >
                      <PaginationItem className="disabled">
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          tabIndex="-1"
                        >
                          <i className="fas fa-angle-left" />
                          <span className="sr-only">Previous</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem className="active">
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          2 <span className="sr-only">(current)</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          3
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fas fa-angle-right" />
                          <span className="sr-only">Next</span>
                        </PaginationLink>
                      </PaginationItem>
                    </Pagination>
                  </nav>
                </CardFooter>
              </Card>
            </div>
          </Row>


        </Container>
      </>
    );
  }
}

export default OrganisatorList;

import React from "react";
import { NavLink as NavLinkRRD, Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import {Collapse,DropdownMenu,DropdownItem,UncontrolledDropdown,DropdownToggle,Form,Input,InputGroupAddon,InputGroupText,
InputGroup, Media,Navbar, NavItem,NavLink, Nav,Container,Row,Col} from "reactstrap";


class Sidebar extends React.Component {
  state = {
    collapseOpen: false
  };
  constructor(props) {
    super(props);
    this.activeRoute.bind(this);
  }
  // verifies if routeName is the one active (in browser input)
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  // toggles collapse between opened and closed (true/false)
  toggleCollapse = () => {
    this.setState({
      collapseOpen: !this.state.collapseOpen
    });
  };
  closeCollapse = () => {
    this.setState({
      collapseOpen: false
    });
  };
  // creates the links that appear in the left menu / Sidebar
  createLinks = routes => {
    return routes.map((prop, key) => {
      return (
        <NavItem key={key}>
          <NavLink
            to={prop.layout + prop.path}
            tag={NavLinkRRD}
            onClick={this.closeCollapse}
            activeClassName="active"
          >
            <i className={prop.icon} />
            {prop.name}
          </NavLink>
        </NavItem>
      );
    });
  };
  render() {
    const { bgColor, routes, logo } = this.props;
    let navbarBrandProps;
    if (logo && logo.innerLink) {
      navbarBrandProps = {
        to: logo.innerLink,
        tag: Link
      };
    } else if (logo && logo.outterLink) {
      navbarBrandProps = {
        href: logo.outterLink,
        target: "_blank"
      };
    }
    return (
      <Navbar
        className="navbar-vertical fixed-left navbar-light bg-white"
        expand="md"
        id="sidenav-main" >
        <Container fluid>
          <Collapse navbar isOpen={this.state.collapseOpen}>
            <h1><a href="/admin">Bienvenue </a></h1>
            <br></br> 
             <h4><i class= "ni ni-circle-08 text-success"> </i> <a href="/admin/Particulars">  Liste des particuliers</a></h4> 
             <br></br>
             <h4> <i class= "ni ni-circle-08 text-success"> </i><a href="/admin/Organisators">  Liste des organisateurs</a> </h4>
             <br></br>
             <h4> <i class= "ni ni-circle-08 text-success"> </i><a href="/admin/ServiceProviders">  Liste des prestataires</a> </h4>
             <br></br>
             <h4> <i class= "ni ni-circle-08 text-success"> </i><a href="/admin/AddUser">  Ajouter un utilisateur</a> </h4>
             <br></br>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

Sidebar.defaultProps = {
  routes: [{}]
};

Sidebar.propTypes = {
  // links that will be displayed inside the component
  routes: PropTypes.arrayOf(PropTypes.object),
  logo: PropTypes.shape({
    // innerLink is for links that will direct the user within the app
    // it will be rendered as <Link to="...">...</Link> tag
    innerLink: PropTypes.string,
    // outterLink is for links that will direct the user outside the app
    // it will be rendered as simple <a href="...">...</a> tag
    outterLink: PropTypes.string,
    // the image src of the logo
    imgSrc: PropTypes.string.isRequired,
    // the alt for the img
    imgAlt: PropTypes.string.isRequired
  })
};

export default Sidebar;

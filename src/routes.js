
import Index from "views/Index.js";
import Login from "views/Login.js";
import Icons from "views/Icons.js";
import ParticularList from "views/Gestion_Utilisateurs/ParticularList";
import OrganisatorList from "views/Gestion_Utilisateurs/OrganisatorList";
import ServiceProvidersList from "views/Gestion_Utilisateurs/ServiceProvidersList";
import AddUser from "views/Gestion_Utilisateurs/AddUser";
import ParticularDetails from "views/Gestion_Utilisateurs/ParticularDetails";
import OrganisatorDetails from "views/Gestion_Utilisateurs/OrganisatorDetails";
import ServiceProviderDetails from "views/Gestion_Utilisateurs/ServiceProviderDetails";
import Tables from "views/examples/Tables.js";
import OrganisatorHome from "views/Organisateur/OrganisatorHome";
import ServiceProviderHome from "views/Prestataire/ServiceProviderHome";
//import Profile from "views/examples/Profile";
var routes = [
  // {
  //   path: "/user-profile",
  //   name: "User Profile",
  //   icon: "ni ni-single-02 text-yellow",
  //   component: Profile,
  //   layout: "/admin",
  // },
  {
    path: "/home",
    name: "Home",
    icon: "ni ni-tv-2 text-success",
    component: OrganisatorHome,
    layout: "/organisator"
  },
 
   {
   path :"/home",
   name :"Home",
   icon: "ni ni-circle-08 text-success",
   component :ServiceProviderHome,
   layout:"/serviceprovider"
   },

   {
    path: "/index",
    name: "Home",
    icon: "ni ni-tv-2 text-success",
    component: Index,
    layout: "/admin"
  },
 
  {
  path :"/Particulars",
  name :"Liste des particuliers",
  icon: "ni ni-circle-08 text-success",
  component : ParticularList,
  layout:"/admin"
  },

  {
    path :"/Organisators",
    name :"Liste des organisateurs",
    icon: "ni ni-circle-08 text-success",
    component : OrganisatorList,
    layout:"/admin"
    },
    {
      path :"/ServiceProviders",
      name :"Liste des prestataires",
      icon: "ni ni-circle-08 text-success",
      component : ServiceProvidersList,
      layout:"/admin"
      },
       {
         path :"/AddUser",
         name :"Ajouter un utilisateur",
         icon: "ni ni-circle-08 text-success",
         component : AddUser,
         layout:"/admin"
         },
      {
        path :"/AddUser",
        name :"Liste des évènements",
        icon: "ni ni-istanbul text-success ",
        component : AddUser,
        layout:"/admin"
        },

           {
             path: "/login",
             //name: "Se déconnecter",
             //icon: "ni ni-user-run text-success",
             component: Login,
             layout: "/auth"
           }, 
 
  // {
  //    path: "/icons",
  //    name: "Icons",
  //    icon: "ni ni-planet text-blue",
  //    component: Icons,
  //    layout: "/admin"
  //  },
    {
      path :"/ParticularDetails",
      component : ParticularDetails,
      layout:"/admin"
      },
      {
        path :"/OrganisatorDetails",
        component : OrganisatorDetails,
        layout:"/admin"
        },
        {
          path :"/ServiceProviderDetails",
          component : ServiceProviderDetails,
          layout:"/admin"
          },
          {
            path: "/tables",
            name: "Tables",
            icon: "ni ni-bullet-list-67 text-red",
            component: Tables,
            layout: "/admin",
          },

];
export default routes;

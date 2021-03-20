
import Index from "views/Index.js";
import Login from "views/Login.js";
 //import Icons from "views/examples/Icons.js";
import ParticularList from "views/Gestion_Utilisateurs/ParticularList";
import OrganisatorList from "views/Gestion_Utilisateurs/OrganisatorList";
import ServiceProvidersList from "views/Gestion_Utilisateurs/ServiceProvidersList";
import AddUser from "views/Gestion_Utilisateurs/AddUser";
var routes = [
   {
    path: "/index",
    name: "Home",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
 
  {
  path :"/Particulars",
  name :"Liste des particuliers",
  icon: "ni ni-circle-08 text-pink",
  component : ParticularList,
  layout:"/admin"
  },
  {
    path :"/Organisators",
    name :"Liste des organisateurs",
    icon: "ni ni-circle-08 text-pink",
    component : OrganisatorList,
    layout:"/admin"
    },
    {
      path :"/ServiceProviders",
      name :"Liste des prestataires",
      icon: "ni ni-circle-08 text-pink",
      component : ServiceProvidersList,
      layout:"/admin"
      },
       {
         path :"/AddUser",
         name :"Ajouter un utilisateur",
         icon: "ni ni-circle-08 text-pink",
         component : AddUser,
         layout:"/admin"
         },
      {
        path :"/AddUser",
        name :"Liste des évènements",
        icon: "ni ni-istanbul text-pink ",
        component : AddUser,
        layout:"/admin"
        },

          {
            path: "/login",
            name: "Se déconnecter",
            icon: "ni ni-user-run text-pink",
            component: Login,
            layout: "/auth"
          }, 
 
//  {
//     path: "/icons",
//     name: "Icons",
//     icon: "ni ni-planet text-blue",
//     component: Icons,
//     layout: "/admin"
//   },
];
export default routes;

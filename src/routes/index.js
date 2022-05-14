import ContactsComponent from "../containers/contacts";
import RegisterComponent from "../containers/contacts";
import Login from "../containers/login";
import ContactsRegister from "../containers/contactsRegister";

const routes = [
  {
    path: "/auth/register",
    component: RegisterComponent
  },
  {
    path: "/auth/login",
    component: Login
  },
  {
    path: "/",
    component: ContactsComponent
  },
  {
    path: "/contacts/create",
    component: ContactsRegister
  }
];

export default routes;

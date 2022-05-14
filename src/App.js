//import logo from "./assets/images/logo.svg";
import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  //Switch,
  Route,
  Routes
} from "react-router-dom";

import routes from "./routes";
import Contacts from "./containers/contacts";
import Register from "./containers/register";
import Login from "./containers/login";
import ContactsRegister from "./containers/contactsRegister";
import { GlobalProvider } from "./context/Provider";

const App = () => {
  console.log(routes);
  return (
    <GlobalProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Contacts />} exact />
          <Route path="/auth/register" element={<Register />} exact />
          <Route path="/auth/login" element={<Login />} exact />
          <Route
            path="/contacts/register"
            element={<ContactsRegister />}
            exact
          />
        </Routes>
      </Router>
    </GlobalProvider>
  );
};

export default App;

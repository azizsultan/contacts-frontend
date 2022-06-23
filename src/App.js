//import logo from "./assets/images/logo.svg";
import React, { useEffect, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  //Switch,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

//import routes from "./routes";
import Contacts from "./containers/contacts";
import Register from "./containers/register";
import Login from "./containers/login";
import ContactsRegister from "./containers/contactsRegister";
import { GlobalProvider } from "./context/Provider";
import isAuthenticated from "./utils/isAuthenticated";

const ProtectedRoute = ({ user, redirectPath = "/auth/login", children }) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

const RequireAuth = ({ children, redirectTo }) => {
  let isAuthenticated = isAuthenticated();
  console.log(isAuthenticated);
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
};

const App = () => {
  const [user, setUser] = useState(false);
  useEffect(() => {
    setUser(isAuthenticated);
  }, [isAuthenticated]);
  return (
    <GlobalProvider>
      <Router>
        <Routes>
          <Route path="/auth/register" element={<Register />} exact />
          <Route path="/auth/login" element={<Login />} exact />
          <Route path="/" element={<Contacts />} exact />
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

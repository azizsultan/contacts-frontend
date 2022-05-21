import React, { useContext } from "react";
import Header from "../../components/header";
import { GlobalContext } from "../../context/Provider";

const ContactsContainer = () => {
  const context = useContext(GlobalContext);
  return (
    <div>
      <Header />
      <h1>Contacts</h1>
    </div>
  );
};

export default ContactsContainer;

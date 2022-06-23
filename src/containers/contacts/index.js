import React, { useContext, useEffect } from "react";
import Header from "../../components/header";
import { GlobalContext } from "../../context/Provider";
import getContacts from "../../context/actions/contacts/getContacts";

const ContactsContainer = () => {
  const context = useContext(GlobalContext);

  useEffect(() => {
    getContacts();
  }, []);
  return (
    <div>
      <Header />
      <h1>Contacts</h1>
    </div>
  );
};

export default ContactsContainer;

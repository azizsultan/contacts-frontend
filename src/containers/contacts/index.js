import React, { useContext, useEffect } from "react";
import Header from "../../components/header";
import { GlobalContext } from "../../context/Provider";
import getContacts from "../../context/actions/contacts/getContacts";
import { useNavigate } from "react-router-dom";

const ContactsContainer = () => {
  const context = useContext(GlobalContext);

  const navigate = useNavigate();

  useEffect(() => {
    getContacts(navigate);
  }, []);
  return (
    <div>
      <Header />
      <h1>Contacts</h1>
    </div>
  );
};

export default ContactsContainer;

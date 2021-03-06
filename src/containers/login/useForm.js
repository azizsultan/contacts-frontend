import { useState, useContext, useEffect } from "react";
import { login } from "../../context/actions/auth/login";
import { GlobalContext } from "../../context/Provider";
import { useNavigate } from "react-router-dom";

const useForm = () => {
  const [form, setForm] = useState({ username: null, password: null });

  const navigate = useNavigate();

  const {
    authDispatch,
    authState: {
      auth: { loading, error, data }
    }
  } = useContext(GlobalContext);

  const onChange = (e, { name, value }) => {
    setForm({ ...form, [name]: value });
  };

  const loginFormValid = !form.username?.length || !form.password?.length;

  const onSubmit = () => {
    login(form)(authDispatch);
  };

  useEffect(() => {
    if (data && data.user) {
      navigate("/");
    }
  }, [data]);

  return {
    form,
    onChange,
    loading,
    data,
    loginFormValid,
    onSubmit,
    error
  };
};

export default useForm;

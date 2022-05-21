import { useState, useContext, useEffect } from "react";
import { register } from "../../context/actions/auth/register";
import { GlobalContext } from "../../context/Provider";
import { useNavigate } from "react-router-dom";

const useForm = () => {
  const [form, setForm] = useState({});
  const [fieldErrors, setFieldErrors] = useState({});

  const navigate = useNavigate();

  const {
    authDispatch,
    authState: {
      auth: { loading, error, data }
    }
  } = useContext(GlobalContext);

  useEffect(() => {
    if (error) {
      for (const item in error) {
        console.log(error[item][0]);
        setFieldErrors({ ...fieldErrors, [item]: error[item][0] });
      }
    }
  }, [error]);

  useEffect(() => {
    if (data) {
      navigate("/auth/login");
    }
  }, [data]);

  const onChange = (e, { name, value }) => {
    setForm({ ...form, [name]: value });
  };

  const registerFormValid =
    !form.username?.length ||
    !form.firstName?.length ||
    !form.password?.length ||
    !form.lastName?.length ||
    !form.email?.length;

  const onSubmit = () => {
    setFieldErrors({});
    register(form)(authDispatch);
  };

  return {
    form,
    onChange,
    loading,
    fieldErrors,
    data,
    registerFormValid,
    onSubmit
  };
};

export default useForm;

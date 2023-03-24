import { useContext, useState } from "react";
import { apiLogin } from "../services/apiLogin";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const useFormLogin = (initialState = {}) => {
  // Navegaciones
  const navigate = useNavigate();
  //context
  const { login } = useContext(AuthContext);
  const [formState, setFormState] = useState(initialState);

  const [isLoading, setIsLoading] = useState(null);
  const [message, setMessage] = useState(null);
  const [rol, setRol] = useState(null);
  const [error, setError] = useState(null);

  const handleChangeInput = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  const navigatePageRol = (rol) => {
 
    if (rol === 1) {
      navigate("/student");
      return;
    }
    if (rol === 2) {
      navigate("/teacher");
      return;
    }
    if (rol === 3) {
      navigate("/admin");
      return;
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { data } = await apiLogin(formState);
      console.log(data);
      setIsLoading(false);
      setMessage(data.msg);
      setRol(data.user.idrol);
      login({ token: data.userToken, rol: data.user.idrol, user: data.user });
      navigatePageRol(data.user.idrol);
    } catch (error) {
      setIsLoading(false);
      setError({
        msg: error.response.data.msg,
        error: error.response.data.err?.errors[0].msg
      });
      console.log();
      setTimeout(() => {
        setError(null);
        
      }, 1000);
    }
  };

  return {
    formState,
    isLoading,
    message,
    rol,
    error,
    handleChangeInput,
    handleLogin,
  };
};

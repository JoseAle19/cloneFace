import { useState } from "react";
import axios from "axios";
export const useFormLogin = (initialState = {}) => {
  const [form, setForm] = useState(initialState);

  const handleChangeInputs = ({ target }) => {
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const login = (e) => {
    e.preventDefault();
    const url = 'http://localhost:4000/face/login'
    const { data } = axios.post(url, {
        email: form.email,
        pass: form.pass
    })


    console.log('data');
    console.log(data);

    
  };

  return {
    handleChangeInputs,
    login,
    form
  };
};

import { useFormLogin } from "../hooks/useFormLogin";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css'
import "../css/login.css";
export const Login = () => {
  const {
    formState,
    handleChangeInput,
    handleLogin,
    isLoading,
    message,
    error,
  } = useFormLogin({
    email: "",
    password: "",
  });

  const showError = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text:   error.msg,
      footer: error.error
    })
  };

  

  const { email, password } = formState;
  return (
    <div className="contenedor_bg">
      <div className="contenedor">
        <div className="contendor_img">
          <h1 className="contenedor_title">
            <span></span>Quiz App
          </h1>
          <div className="img_logo"></div>
        </div>
        <div className="contendor_form">
          <h2 className="contenedor_tittle_form">Datos del usuario</h2>

          <form className="contendor_form_label">
            {error && showError()}
            <div className="group">
              <label>Correo</label>
              <input
                value={email}
                onChange={handleChangeInput}
                name="email"
                type="email"
                placeholder="Correo"
                required
              />
            </div>
            <div className="group">
              <label>Contraseña</label>
              <input
                type="password"
                value={password}
                onChange={handleChangeInput}
                name="password"
                placeholder="********"
                required
              />
            </div>

            <div className="contenedor_button">
              <button
                className="contenedor_button_form"
                onClick={handleLogin}
                disabled={isLoading}
              >
                Iniciar sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

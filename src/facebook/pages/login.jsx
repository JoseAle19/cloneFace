import React from "react";
import "../css/login.css";
import { useFormLogin } from "../hooks/useForm";
import logo2 from  '../images/logo2.svg'
export const Login = () => {
  const initialState = {
    email: "",
    pass: "",
  };

  const { login, handleChangeInputs, form } = useFormLogin(initialState);
  const { email, pass } = form;
  return (
    <div>
      <main>
        <div className="main">
          <div className="heading-section">
            <img src={logo2} className="logo-img" />
            <div className="a-ri8">
              <span>
                Facebook te ayuda a conectarte y compartir con las personas en
                tu vida..
              </span>
            </div>
          </div>

          <div className="form">
            <form onSubmit={login} className="a-form">
              <input
                type="email"
                id="Email"
                className="a-email"
                name="email"
                onChange={handleChangeInputs}
                value={email}
                placeholder="Correo electrónico o número de teléfono"
                autofocus="autofocus"
                required
              />
              <input
                type="password"
                id="Password"
                className="a-pss"
                name="pass"
                onChange={handleChangeInputs}
                value={pass}
                placeholder="Contraseña"
                autofocus="autofocus"
              />
              <input type="submit" className="a-sub" value="Iniciar sesion" />
              <a href="" className="a-link">
                Olvidate tu contraseña?
              </a>
              <hr className="a-hr" />
              <input type="submit " value="Crear nueva cuenta" className="a-but" />
            </form>
            <div className="create-page">
              <a href="" className="a-href">
                Crea una pagina
              </a>{" "}
              <b /> para una celebridad, una marca o un negocio.
            </div>
          </div>
        </div>
      </main>
      <div className="footer">
        <div
          id="pageFooter"
          data-referrer="page_footer"
          data-testid="page_footer"
        >
          <ul>
            <li>English (UK)</li>
            <li>
              <a href="">हिन्दी</a>
            </li>
            <li>
              <a href="">ગુજરાતી</a>
            </li>
            <li>
              <a href="">मराठी</a>
            </li>
            <li>
              <a href="">اردو</a>
            </li>
            <li>
              <a href="">മലയാളം</a>
            </li>
            <li>
              <a href="">বাংলা</a>{" "}
            </li>
            <li>
              <a href="" className="_sv4">
                తెలుగు
              </a>{" "}
            </li>
            <li>
              <a href="" className="_sv4">
                தமிழ்
              </a>
            </li>
            <li>
              <a href="" className="_sv4">
                ਪੰਜਾਬੀ
              </a>
            </li>
            <li>
              <a href="" className="_sv4">
                Español
              </a>
            </li>
            <li>
              <a href="" role="button">
                <i className="img sp_ZtNaJVka3YU_2x sx_c13ad6"></i>
              </a>{" "}
            </li>
          </ul>
          <div id="line"></div>
          <div>
            <ul>
              <li>
                <a href="">Sign Up</a>
              </li>
              <li>
                <a href="">Iniciar sesion</a>
              </li>
              <li>
                <a href="">Messenger</a>
              </li>
              <li>
                <a href="">Facebook Lite</a>{" "}
              </li>
              <li>
                <a href=""> Watch </a>{" "}
              </li>
              <li>
                <a href="">People</a>{" "}
              </li>
              <li>
                <a href="">Pages</a>
              </li>
              <li>
                <a href="">Page categories</a>
              </li>
              <li>
                <a href="">Places</a>
              </li>
              <li>
                <a href="">Games</a>
              </li>
              <li>
                <a href="">Locations</a>
              </li>
              <li>
                <a href="">Marketplace</a>
              </li>
              <li>
                <a href="">Facebook Pay</a>
              </li>
              <li>
                <a href="">Groups</a>
              </li>
              <li>
                <a href="">Jobs</a>
              </li>
              <li>
                <a href="">Oculus</a>
              </li>
              <li>
                <a href="">Portal</a>
              </li>
              <li>
                <a href="">Instagram</a>
              </li>
              <li>
                <a href="">Local</a>
              </li>
              <li>
                <a href="">Fundraisers</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">Voting Information Centre</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Create ad</a>
              </li>
              <li>
                <a href="">Create Page</a>
              </li>
              <li>
                <a href="">Developers</a>
              </li>
              <li>
                <a href="">Careers</a>
              </li>
              <li>
                <a href="">Privacy</a>
              </li>
              <li>
                <a href="">Cookies</a>
              </li>
              <li>
                <a href="">
                  AdChoices<i className="img sp_ZtNaJVka3YU_2x sx_d75518"></i>
                </a>
              </li>
              <li>
                <a href="">Terms</a>
              </li>
              <li>
                <a href="">Help</a>
              </li>
              <li>
                <a href="">Settings</a>
              </li>
              <li>
                <a href="">Activity log</a>
              </li>
            </ul>
          </div>
          <div className="copyright">
            <div>
              <span> Facebook © 2021</span>
            </div>
          </div>
        </div>
      </div>
      <div className="m-footer">
        <div className="main-c">
          <div className="list-1">
            <span>English (UK)</span>
            <div>
              <span>
                <a href="">हिन्दी</a>
              </span>
            </div>
            <div>
              <span>
                <a href="">اردو</a>
              </span>
            </div>
            <div>
              <span>
                <a href="">বাংলা</a>
              </span>
            </div>
          </div>
          <div className="list-2">
            <div>
              <span>
                <a href="">ગુજરાતી</a>
              </span>
            </div>
            <div className="">
              <span>
                <a href="">मराठी</a>
              </span>
            </div>
            <div>
              <span>
                <a href="">മലയാളം</a>
              </span>
            </div>
            <a>
              <div>
                <i className="img sp_vuppHZ0nD_0_3x sx_222020"></i>
              </div>
            </a>
          </div>
        </div>
        <div className="main-links">
          <span>About </span>.<span> Help </span>.<span> More </span>
        </div>
        <div className="fb">Facebook Inc.</div>
      </div>
    </div>
  );
};

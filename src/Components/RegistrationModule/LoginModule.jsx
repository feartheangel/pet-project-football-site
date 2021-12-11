import React from "react";
import "../../css/RegistrationModule/LoginModule.css";
import RegistrationForm from "./RegistrationForm";
import shape from "../../img/Shape.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSuccess } from "../../Redux/Actions/successAutoriz.js";

const LoginModule = ({ LoginPageHandler, dataUser }) => {
  const [typeForm, setTypeForm] = React.useState("2");
  const [inputLoginBlur, setInputLoginBlur] = React.useState(false);
  const [inputPasswordBlur, setInputPasswordBlur] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState([
    "Поле не может быть пустым",
    "Пароль минимум 4 символа!",
  ]);
  const [validateForm, setValidateForm] = React.useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  //регулярные выражения для проверки телефона и почты
  const contactEmailRegExp =
    /^((([0-9A-Za-z]{1}[-0-9A-z.]{0,30}[0-9A-Za-z]?)|([0-9А-Яа-я]{1}[-0-9А-я.]{0,30}[0-9А-Яа-я]?))@([-A-Za-z]{1,}\.){1,}[-A-Za-z]{2,})$/;
  const contactNumberRegExp = /^(\+375)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/;

  // данные вводимые при логине
  const [loginUser, setLoginUser] = React.useState("");
  const [passwordUser, setPassworduser] = React.useState("");

  // проверка на валидный EMAIL
  function validateEmail(loginUser) {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(loginUser);
  }

  const loginUserHandler = (e) => {
    setLoginUser(e.target.value);
    setInputLoginBlur(true);
  };
  const PasswordUserHandler = (e) => {
    setPassworduser(e.target.value);
    setInputPasswordBlur(true);
  };

  const findLogin = dataUser.users.map((item) => item.name).includes(loginUser);
  const findPasswordDouble = dataUser.users
    .map((item) => item.passwordDouble)
    .includes(passwordUser);
  const findPassword = dataUser.users
    .map((item) => item.password)
    .includes(passwordUser);

  const clickHandler = (e) => {
    if (
      inputLoginBlur &&
      inputPasswordBlur &&
      findLogin &&
      findPassword &&
      findPasswordDouble &&
      validateEmail(loginUser)
    ) {
      // e.preventDefault();
      alert("Авторизация успешна");
      dispatch(setSuccess(true));
      localStorage.setItem("nameUser", loginUser);
      localStorage.setItem("passUser", passwordUser);
      navigate({ pathname: "*" });
    } else {
      e.preventDefault();
      alert("Проверьте логин или пароль!");
      // navigate({ pathname: "*" });
    }
  };

  return (
    <div className="registration_wrapper">
      <div className="registration_wrapper_content">
        <div className="registration_wrapper_content_close">
          <img
            src={shape}
            alt="close_page"
            className="shape_img"
            onClick={LoginPageHandler}
          />
        </div>
        <div className="registration_wrapper_content_type_list">
          <ul className="content_type_list_ul">
            <li
              className={
                typeForm === "1"
                  ? "content_type_list_ul-li-active"
                  : "content_type_list_ul-li"
              }
              onClick={() => setTypeForm("1")}
            >
              Регистрация
            </li>
            <li
              className={
                typeForm === "2"
                  ? "content_type_list_ul-li-active"
                  : "content_type_list_ul-li"
              }
              onClick={() => setTypeForm("2")}
            >
              Вход
            </li>
          </ul>
        </div>
        {typeForm === "2" ? (
          <form className="registration_wrapper_content_form">
            <div className="content_form_login">
              <label className="content_form_login_label" htmlFor="login">
                {" "}
                Логин{" "}
              </label>
              <input
                type="text"
                name="login"
                id="login"
                minLength="5"
                maxLength="20"
                className="input_login"
                onChange={(e) => loginUserHandler(e)}
                onBlur={() => loginUserHandler}
              />
            </div>
            {loginUser.length === 0 && inputLoginBlur && (
              <div className="error_block_reg">{errorMessage[0]}</div>
            )}
            <div className="content_form_password">
              <label className="content_form_login_password" htmlFor="password">
                {" "}
                Пароль{" "}
              </label>
              <input
                type="text"
                name="password"
                id="password"
                minLength="4"
                maxLength="15"
                className="input_password"
                onChange={(e) => PasswordUserHandler(e)}
                onBlur={() => PasswordUserHandler}
              />
            </div>
            {passwordUser.length < 4 && inputPasswordBlur && (
              <div className="error_block_reg">{errorMessage[1]}</div>
            )}
            <div className="content_login_button">
              <button className="login_button" onClick={clickHandler}>
                Войти
              </button>
            </div>
          </form>
        ) : (
          <RegistrationForm />
        )}
      </div>
    </div>
  );
};

export default LoginModule;

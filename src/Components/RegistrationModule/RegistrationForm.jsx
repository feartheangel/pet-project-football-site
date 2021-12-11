import React from "react";
import "../../css/RegistrationModule/LoginModule.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const [loginUserReg, setLoginUserReg] = React.useState("");
  const [passwordUserReg, setPassworduserReg] = React.useState("");
  const [passwordUserDoubleReg, setPassworduserDoubleReg] = React.useState("");

  const [blurlogin, setblurlogin] = React.useState(false);
  const [blurpassword, setblurpassword] = React.useState(false);
  const [blurpassworddouble, setblurpassworddouble] = React.useState(false);
  const [inputLoginValidateReg, setInputLoginValidateReg] = React.useState("");
  const [errorMessageReg, setErrorMessageReg] = React.useState(
    "Поле не может быть пустым"
  );

  const loginUserRegHandler = (e) => {
    setLoginUserReg(e.target.value);
    setblurlogin(true);
  };
  const PasswordUserRegHandler = (e) => {
    setPassworduserReg(e.target.value);
    setblurpassword(true);
  };
  const PasswordUserDoubleRegHandler = (e) => {
    setPassworduserDoubleReg(e.target.value);
    setblurpassworddouble(true);
  };

  // AXIOS REQUEST
  const postData = {
    name: loginUserReg,
    password: passwordUserReg,
    doublePassword: passwordUserDoubleReg,
  };

  const navigate = useNavigate();
  const posthandler = (e) => {
    e.preventDefault();

    if (
      blurlogin &&
      blurpassword &&
      blurpassworddouble &&
      loginUserReg &&
      passwordUserReg &&
      passwordUserDoubleReg !== 0 &&
      passwordUserReg === passwordUserDoubleReg
    ) {
      axios
        .post("https://reqres.in/api/users", postData)
        .then((resp) => console.log(resp))
        .catch((error) => console.log(error));
      alert("Регистрация успешна!");
      navigate({ pathname: "/Footer" });
    } else if (passwordUserReg !== passwordUserDoubleReg) {
      alert("Пароли не совпадают");
    } else {
      alert("Заполните все поля");
    }
  };

  console.log(loginUserReg.length, blurlogin);

  return (
    <div>
      <form
        className="registration_wrapper_content_form"
        onSubmit={posthandler}
      >
        <div className="content_form_login">
          <label className="content_form_login_label" htmlFor="login">
            {" "}
            Укажите Логин или Email{" "}
          </label>
          <input
            type="text"
            name="login"
            id="login"
            className="input_login"
            onChange={(e) => loginUserRegHandler(e)}
          />
        </div>
        {loginUserReg.length === 0 && blurlogin && (
          <div className="error_block_reg">{errorMessageReg}</div>
        )}
        {}
        <div className="content_form_password">
          <label className="content_form_login_password" htmlFor="password">
            {" "}
            Введите пароль{" "}
          </label>
          <input
            type="text"
            name="password"
            id="password"
            className="input_password"
            onChange={(e) => PasswordUserRegHandler(e)}
          />
        </div>
        {passwordUserReg.length === 0 && blurpassword && (
          <div className="error_block_reg">{errorMessageReg}</div>
        )}

        <div className="content_form_password">
          <label
            className="content_form_login_password"
            htmlFor="password_repeat"
          >
            {" "}
            Повторите пароль{" "}
          </label>
          <input
            type="text"
            name="password"
            id="password_repeat"
            className="input_password"
            onChange={(e) => PasswordUserDoubleRegHandler(e)}
          />
        </div>
        {passwordUserDoubleReg.length === 0 && blurpassworddouble && (
          <div className="error_block_reg">{errorMessageReg}</div>
        )}
        <div className="content_login_button">
          <button type="submit" className="login_button" onClick={posthandler}>
            Зарегистрироваться
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;

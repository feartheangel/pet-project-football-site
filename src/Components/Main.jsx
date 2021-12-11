import React from "react";
import "../css/main.css";
import { Header, Footer, Content } from "../Components/PageArchitecture";
import { setSuccess } from "../Redux/Actions/successAutoriz.js";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Main = ({ dataUser }) => {
  // достаём ключ авторизации с редакса
  const { successAutorizated } = useSelector(({ successAutorizated }) => {
    return {
      successAutorizated: successAutorizated.dataFileAutoriz,
    };
  });
  // проверка ключей в localStorage для авто авторизации
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (localStorage.getItem("passUser") && localStorage.getItem("nameUser")) {
      return dispatch(setSuccess(true));
    }
  }, []);
  return (
    <div className="wrapper">
      <div className="wrapper_container container">
        <Header dataUser={dataUser} autorizSuccess={successAutorizated} />
        <Content dataUser={dataUser} />
        <Footer />
      </div>
    </div>
  );
};

export default Main;

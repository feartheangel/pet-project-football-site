import React from "react";
import "../../css/header.css";
import miniLogo from "../../img/mini-logo.png";
import vector_down from "../../img/vector-down.png";
import ball from "../../img/ball.png";
import avatar from "../../img/Ava.png";
import bag from "../../img/bag.png";
import LoginModule from "../RegistrationModule/LoginModule";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSuccess } from "../../Redux/Actions/successAutoriz.js";

function Header({ dataUser, autorizSuccess }) {
  const [popupNav, setpopupNav] = React.useState(false);
  const [popupMenu, setpopupMenu] = React.useState(false);
  const [popUpAutorizated, setPopUpAutorizated] = React.useState(false);
  const [openLoginPage, setOpenLoginPage] = React.useState(false);

  const rootEl = React.useRef();
  const playMenu = React.useRef();
  const navList = React.useRef();

  const selectPopUpNav = () => {
    setpopupNav(!popupNav);
  };
  const selectPopUpMenu = () => {
    setpopupMenu(!popupMenu);
  };
  const AutorizatedHandler = () => {
    setPopUpAutorizated(!popUpAutorizated);
  };
  const LoginPageHandler = () => {
    setOpenLoginPage(!openLoginPage);
  };

  // События для закрытия списков при клике в любую точку
  const handleOutsideClick = (e) => {
    if (!e.path.includes(rootEl.current)) {
      setPopUpAutorizated(false);
    }
  };
  const handlePlayMenu = (e) => {
    if (!e.path.includes(playMenu.current)) {
      setpopupMenu(false);
    }
  };
  const handleNavList = (e) => {
    if (!e.path.includes(navList.current)) {
      setpopupNav(false);
    }
  };

  React.useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
    document.body.addEventListener("click", handlePlayMenu);
    document.body.addEventListener("click", handleNavList);
  }, []);

  // метод для выхода из аккаунта
  const dispatch = useDispatch();
  const exitAcc = () => {
    localStorage.setItem("passUser", "");
    localStorage.setItem("nameUser", "");
    dispatch(setSuccess(false));
  };

  console.log(autorizSuccess);
  return (
    <header>
      <div className="container_header">
        <Link to="/">
          <div className="container_header_logo">
            <img src={miniLogo} alt="mini-logo" />
          </div>
        </Link>

        <div className="container_nav navigation">
          <nav className="container_nav_list">
            <ul>
              <li className="container_nav_list_li">Расписание</li>
              <li className="container_nav_list_li">Игровые отчёты</li>
              <Link to="/Statistics" className="link_decorated">
                <li className="container_nav_list_li">Статистика</li>
              </Link>

              <ul>
                <div
                  className={
                    popupNav === true
                      ? "container_nav_list_inside_active"
                      : "container_nav_list_inside"
                  }
                  onClick={selectPopUpNav}
                  ref={navList}
                >
                  <li>Ещё </li>
                  <img
                    src={vector_down}
                    alt="vetor_down"
                    className={
                      popupNav
                        ? "vector-down_menu_active"
                        : "vector-down_content"
                    }
                  />
                </div>
                {popupNav === true && (
                  <div className="container_nav_list_popup_inside">
                    {dataUser &&
                      dataUser.list_nav.map((items) => <li>{items.option}</li>)}
                  </div>
                )}
              </ul>
            </ul>
          </nav>
        </div>

        <div className="container_nav navigation">
          <nav className="container_nav_list">
            <ul>
              <ul>
                <div
                  className={
                    popupMenu === true
                      ? "container_nav_list_inside_active"
                      : "container_nav_list_inside"
                  }
                  onClick={selectPopUpMenu}
                  ref={playMenu}
                >
                  <li>
                    <img src={ball} alt="logo_popup" className="popup_ball" />
                  </li>
                  <li>
                    <img
                      src={vector_down}
                      alt="logo_vector"
                      className={
                        popupMenu
                          ? "vector-down_menu_active"
                          : "vector-down_content"
                      }
                    />
                  </li>
                </div>
                {popupMenu === true && (
                  <div className="container_nav_list_popup_inside">
                    {dataUser &&
                      dataUser.play.map((item) => <li>{item.option}</li>)}
                  </div>
                )}
              </ul>
            </ul>
          </nav>
        </div>
        <div>
          <div className="container_block_boorger">
            {autorizSuccess && (
              <img src={avatar} alt="logo_avatar" className="avatar_boorger" />
            )}

            <div>
              <img
                src={bag}
                alt="bag"
                className="boorger_bag"
                onClick={AutorizatedHandler}
                ref={rootEl}
              />
              {popUpAutorizated && (
                <div className="popUp_menu_autorizated">
                  {autorizSuccess === false ? (
                    <p
                      className="popUp_autorizated-p"
                      onClick={LoginPageHandler}
                    >
                      Вход
                    </p>
                  ) : (
                    ""
                  )}

                  {autorizSuccess && (
                    <p className="popUp_autorizated-p" onClick={exitAcc}>
                      Выйти
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {openLoginPage === true && (
        <LoginModule LoginPageHandler={LoginPageHandler} dataUser={dataUser} />
      )}
    </header>
  );
}

export default Header;

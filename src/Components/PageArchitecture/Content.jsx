import React from "react";
import "../../css/content.css";
import PlayerLevel from "../Player/PlayerLevel";
import user_vector from "../../img/user.png";
import vectorDown from "../../img/vector-down.png";
import exit from "../../img/log out.svg";
import achie from "../../img/Achie.png";
import achie_disabled from "../../img/Achie_disabled.png";
import fb from "../../img/FB.png";
import vk from "../../img/VK.png";
import link from "../../img/link.png";
import krest from "../../img/krest.png";
import blue_krest from "../../img/blue_krest.png";
import CircularProgressWithLabel from "@mui/material/CircularProgress";
import { YMaps, Map, Placemark } from "react-yandex-maps";
const TableResults = React.lazy(() => import("../Player/TableResults"));

const Content = ({ dataUser }) => {
  // console.log("Я RENDER");
  const [optionMenu, setoptionMenu] = React.useState(false);
  const [formatSelect, setFormatSelect] = React.useState(false);
  const [tableSelect, setTableSelect] = React.useState("all-years");

  const optionMenuHandler = () => {
    setoptionMenu(!optionMenu);
  };
  const formatSelectHandler = () => {
    setFormatSelect(!formatSelect);
  };

  // YMAP COORDINATE
  const mapData = {
    center: [53.9, 27.56667],
    zoom: 12,
  };

  const coordinates = [
    [53.9, 27.58667],
    [53.9, 27.46667],
  ];

  return (
    <div className="wrapper_container_content content">
      <div className="wrapper_container_content_block container">
        <div className="content_block_left_side left_side">
          <PlayerLevel />
          <div className="content_block_left_side_options">
            <div className="content_block_left_side_options_up">
              <ul>
                <li>
                  <div
                    className={
                      optionMenu === true
                        ? "content_block_left_side_options_up_row_active"
                        : "content_block_left_side_options_up_row"
                    }
                  >
                    <img src={user_vector} alt="user" />
                    <p className="content_block_left_side_options_up_row-p">
                      Статистика
                    </p>
                    <img
                      src={vectorDown}
                      alt="vector-down"
                      onClick={optionMenuHandler}
                      className={
                        optionMenu
                          ? "vector-down_content_active"
                          : "vector-down_content"
                      }
                    />
                  </div>
                </li>
                {optionMenu === true && (
                  <div className="content_block_left_side_popup">
                    <ul className="content_block_left_side_options_up_ul">
                      <li className="content_block_left_side_options_popUP">
                        Футбол
                      </li>
                      <li className="content_block_left_side_options_popUP">
                        Баскетбол
                      </li>
                      <li className="content_block_left_side_options_popUP">
                        Волейбол
                      </li>
                    </ul>
                  </div>
                )}
                <li>
                  <div className="content_block_left_side_options_up_row">
                    <img src={user_vector} alt="user" />
                    <p>Ближайшие игры</p>
                  </div>
                </li>
                <li>
                  <div className="content_block_left_side_options_up_row">
                    <img src={user_vector} alt="user" />
                    <p>Игровые отчёты</p>
                  </div>
                </li>
                <li>
                  <div className="content_block_left_side_options_up_row">
                    <img src={user_vector} alt="user" />
                    <p>История заказов</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="content_block_left_side_options_footer">
              <img src={exit} alt="exit" />
              <p>Выйти</p>
            </div>
          </div>
        </div>
        <div className="content_block_right_side right_side">
          <div className="content_block_right_side_up">
            <div className="content_block_right_side_up_leftside">
              <div className="right_side_up_leftside_block1">
                <img src={achie} alt="achivka" className="info_achie" />
                <img src={achie} alt="achivka" className="info_achie" />
                <img src={achie} alt="achivka" className="info_achie" />
              </div>
              <div className="right_side_up_leftside_block2">
                <img
                  src={achie_disabled}
                  alt="achivka"
                  className="info_achie"
                />
                <img
                  src={achie_disabled}
                  alt="achivka"
                  className="info_achie"
                />
              </div>
            </div>
            <div className="content_block_right_side_up_infoseasons">
              <div className="content_block_right_side_up_infoseasons_info">
                <button
                  className={
                    tableSelect === "all-years"
                      ? "info_buttons2_active"
                      : "info_buttons2"
                  }
                  onClick={() => setTableSelect("all-years")}
                >
                  Все сезоны
                </button>
                <button
                  className={
                    tableSelect === "2021"
                      ? "info_buttons_active"
                      : "info_buttons"
                  }
                  onClick={() => setTableSelect("2021")}
                >
                  Сезон 2020/21
                </button>
              </div>
              <div className="content_block_right_side_up_infoseasons_lvl">
                <div className="infoseasons_lvl_block">
                  <p className="infoseasons_lvl_block-p1">Игры</p>
                  <p className="infoseasons_lvl_block-p2">36</p>
                </div>
                <div className="infoseasons_lvl_block">
                  {" "}
                  <p className="infoseasons_lvl_block-p1">Гол</p>
                  <p className="infoseasons_lvl_block-p2">67</p>
                </div>
                <div className="infoseasons_lvl_block">
                  {" "}
                  <p className="infoseasons_lvl_block-p1">Пас</p>
                  <p className="infoseasons_lvl_block-p2">136</p>
                </div>
                <div className="infoseasons_lvl_block">
                  {" "}
                  <p className="infoseasons_lvl_block-p1">Гол + пас</p>
                  <p className="infoseasons_lvl_block-p2">136</p>
                </div>
              </div>
            </div>
            <div className="content_block_right_side_up_socials">
              <div className="content_block_right_side_up_socials_left">
                <div className="side_up_socials_left_up">
                  <p className="side_up_socials_left_up-p">Поделиться</p>
                  <div className="side_up_socials_left_up_img">
                    <img src={fb} alt="fb" className="img_social_content" />
                    <img src={vk} alt="vk" className="img_social_content" />
                    <img src={link} alt="link" className="img_social_content" />
                  </div>
                </div>
                <div className="side_up_socials_left_center">
                  <div className="side_up_socials_left_center-1">
                    <img src={krest} alt="krest" />
                  </div>
                  <div className="side_up_socials_left_center-2">
                    <img src={krest} alt="krest" className="krest-1" />
                    <img src={krest} alt="krest" />
                  </div>
                </div>
              </div>
              <div className="content_block_right_side_up_socials_right">
                <img src={blue_krest} alt="krest" className="krest-blue" />
                <img src={blue_krest} alt="krest" className="krest-blue" />
                <img src={blue_krest} alt="krest" className="krest-blue1" />
              </div>
            </div>
          </div>
          <div>
            <nav className="container_nav_list">
              <ul>
                <ul>
                  <div
                    className={
                      formatSelect === true
                        ? "content_block_right_side_center_active"
                        : "content_block_right_side_center"
                    }
                    onClick={formatSelectHandler}
                  >
                    <li>
                      <p>Формат</p>
                    </li>
                    <li>
                      <img src={vectorDown} alt="vector" />
                    </li>
                  </div>
                  {formatSelect === true && (
                    <div className="container_nav_list_popup_inside">
                      <li style={{ width: "170px" }}>5x5</li>
                      <li style={{ width: "170px" }}>11x11</li>
                    </div>
                  )}
                </ul>
              </ul>
            </nav>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "240px",
            }}
          >
            <React.Suspense fallback={<CircularProgressWithLabel />}>
              <div style={{ width: "100%" }}>
                <TableResults tableSelect={tableSelect} dataUser={dataUser} />
              </div>
            </React.Suspense>
          </div>

          <div className="container_ymaps">
            {React.useMemo(
              () => (
                <YMaps>
                  {/* {console.log("Я КАРТА!")} */}
                  <Map width="100%" height="400px" defaultState={mapData}>
                    {coordinates.map((coordinate) => (
                      <Placemark geometry={coordinate} />
                    ))}
                  </Map>
                </YMaps>
              ),
              []
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;

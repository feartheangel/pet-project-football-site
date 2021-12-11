import React from "react";
import { Footer, Header } from "../PageArchitecture";
import "../../css/Statistics/Static.scss";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { searchPlayerAction } from "../../Redux/Actions/searchPlayer";
import Carousel from "react-elastic-carousel";

const PageStatic = () => {
  console.log("Я СТАНДАРТНЫЙ РЕНДЕР!");
  const { dataFile } = useSelector(({ backEnd, navFilter }) => {
    return {
      dataFile: backEnd.dataFile,
      navFilter: navFilter.items,
    };
  });

  const dispatch = useDispatch();
  const [buttonAvtive, setButtonActive] = React.useState(false);
  const [categoryList, setCategoryList] = React.useState("");
  const [dopPlayers, setDopPlayers] = React.useState("");

  const clickButton = () => {
    setButtonActive(!buttonAvtive);
  };
  React.useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((resp) => {
      dispatch(searchPlayerAction(resp));
    });
  }, []);

  const { playerFile } = useSelector(({ searchPlayer }) => {
    return {
      playerFile: searchPlayer.playerInfo.data,
    };
  });

  return (
    <div className="wrapper_static_global_container">
      <div className="global_container_content">
        <Header dataUser={dataFile} />
        <div className="wrapper_container_content content">
          <div className="static_content">
            <div className="static_slider_content_all">
              {React.useMemo(
                () => (
                  <Carousel height={700} itemsToShow={2}>
                    {playerFile &&
                      playerFile
                        .filter((item, index) => index >= 0)
                        .map((item, index) => (
                          <div key={index} style={{ height: "500px" }}>
                            <div className="static_content_block">
                              <p>
                                Имя <span>{item.name}</span>
                              </p>
                              <p>
                                Прозвище <span>{item.username}</span>
                              </p>
                              <p>
                                Email{" "}
                                <span style={{ wordWrap: "break-word" }}>
                                  {item.email}
                                </span>
                              </p>
                            </div>
                          </div>
                        ))}
                  </Carousel>
                ),
                [playerFile]
              )}
            </div>

            <button
              className={buttonAvtive ? "custom-btn btn-7" : "custom-btn btn-7"}
              onClick={clickButton}
            >
              {buttonAvtive ? (
                <span>Закрыть список </span>
              ) : (
                <span>Просмотреть игроков</span>
              )}
            </button>
            {buttonAvtive && (
              <div className="static_content_down">
                <div
                  style={{
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  <button
                    className="custom-btn btn-12"
                    onClick={() => setCategoryList("5Players")}
                  >
                    <span>Просмотр!</span>
                    <span>по 5 игроков</span>
                  </button>
                  <button
                    className="custom-btn btn-12"
                    onClick={() => setCategoryList("allPlayers")}
                  >
                    <span>Просмотр!</span>
                    <span>все игроки </span>
                  </button>
                </div>
                {categoryList === "5Players" && (
                  <div style={{ justifyContent: "center" }}>
                    {" "}
                    {playerFile &&
                      playerFile
                        .filter((item, index) => index < 5)
                        .map((item) => (
                          <div className="static_content_block">
                            <p>
                              Имя <span>{item.name}</span>
                            </p>
                            <p>
                              Прозвище <span>{item.username}</span>
                            </p>
                            <p>
                              Email{" "}
                              <span style={{ wordWrap: "break-word" }}>
                                {item.email}
                              </span>
                            </p>
                          </div>
                        ))}
                    {dopPlayers === "+5Players" && (
                      <div>
                        <p style={{ textAlign: "center" }}>
                          {" "}
                          --- Следующие 5 игроков ---
                        </p>
                        {playerFile &&
                          playerFile
                            .filter((item, index) => index >= 5 && index <= 10)
                            .map((item) => (
                              <div className="static_content_block">
                                <p>
                                  Имя <span>{item.name}</span>
                                </p>
                                <p>
                                  Прозвище <span>{item.username}</span>
                                </p>
                                <p>
                                  Email{" "}
                                  <span style={{ wordWrap: "break-word" }}>
                                    {item.email}
                                  </span>
                                </p>
                              </div>
                            ))}
                      </div>
                    )}
                    <div
                      style={{
                        justifyContent: "center",
                        display: "flex",
                        marginBottom: "20px",
                      }}
                    >
                      <button
                        className="custom-btn btn-5"
                        onClick={() => setDopPlayers("+5Players")}
                      >
                        <span>Показать ещё</span>
                      </button>
                    </div>
                  </div>
                )}
                {categoryList === "allPlayers" && (
                  <div style={{ justifyContent: "center" }}>
                    {playerFile &&
                      playerFile
                        .filter((item, index) => index >= 0)
                        .map((item) => (
                          <div className="static_content_block">
                            <p>
                              Имя <span>{item.name}</span>
                            </p>
                            <p>
                              Прозвище <span>{item.username}</span>
                            </p>
                            <p>
                              Email{" "}
                              <span style={{ wordWrap: "break-word" }}>
                                {item.email}
                              </span>
                            </p>
                          </div>
                        ))}
                    <div
                      style={{
                        justifyContent: "center",
                        display: "flex",
                        marginBottom: "20px",
                      }}
                    ></div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default React.memo(PageStatic);

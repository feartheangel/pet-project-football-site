import "./App.css";
import Main from "../src/Components/Main.jsx";
import axios from "axios";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { LoginModule, RegistrationForm } from "./Components/RegistrationModule";
import { Footer, Header } from "./Components/PageArchitecture";
import { setBackEnd } from "./Redux/Actions/backend";
import { setSuccess } from "./Redux/Actions/successAutoriz";
import { useSelector, useDispatch } from "react-redux";
import PageStatic from "./Components/Statistics/PageStatic";

function App() {
  const dispatch = useDispatch();

  const { dataFile } = useSelector(({ backEnd, navFilter }) => {
    return {
      dataFile: backEnd.dataFile,
      navFilter: navFilter.items,
    };
  });

  // axios
  React.useEffect(() => {
    axios.get("http://localhost:3000/db.json").then((resp) => {
      dispatch(setBackEnd(resp.data));
    });
  }, []);

  // прокидываем пропс в компонент
  const propsHandler = (dataFile) => {
    return <Main dataUser={dataFile} />;
  };
  // прокидываем пропс в компонент
  const propsHandler2 = (dataFile) => {
    return <Header dataUser={dataFile} />;
  };
  // прокидываем пропс в компонент
  const propsHandler3 = (dataFile) => {
    return <PageStatic dataUser={dataFile} />;
  };

  return (
    <div className="App">
      <div className="app-container">
        <Routes>
          <Route path="/" element={propsHandler(dataFile)} exact />
          <Route path="/Statistics" element={propsHandler3(dataFile)} exact />
          <Route path="/Authorization" element={<LoginModule />} exact />
          <Route path="/Registration" element={<RegistrationForm />} exact />
          <Route path="/Header" element={propsHandler2(dataFile)} exact />
          <Route path="/Footer" element={<Footer />} exact />
          <Route path="*" element={<Navigate to="/" />} exact />
        </Routes>
      </div>
    </div>
  );
}

export default App;

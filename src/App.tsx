import React from "react";
import { SecondPage } from "./shared/SecondPage";
import "./styles.global.module.css";
import { FirstPage } from "./shared/FirstPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createStore } from "redux";
import { rootReducer } from "store/store";

export const store = createStore(rootReducer);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="taskManager" element={<FirstPage />} />
        <Route path="statistics" element={<SecondPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

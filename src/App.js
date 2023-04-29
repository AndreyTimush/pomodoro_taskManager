import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FirstPage } from "./shared/FirstPage";
import { SecondPage } from "./shared/SecondPage";

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

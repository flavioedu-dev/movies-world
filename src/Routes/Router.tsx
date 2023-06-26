import App from "../App.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

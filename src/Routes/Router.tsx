import App from "../App.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home.tsx";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />} >
          <Route path="/Home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

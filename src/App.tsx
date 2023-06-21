// Pages
import Home from "./pages/Home/Home";

// Component
import Header from "./components/Header";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Home />
    </>
  );
}

export default App;

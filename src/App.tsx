import styles from "./App.module.css"

// React router
import { Outlet } from "react-router-dom";

function App() {

  return (
    <section className={styles.App}>
      <Outlet />
    </section>
  );
}

export default App;

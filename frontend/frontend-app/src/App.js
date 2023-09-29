import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListItemComponent from "./components/ListItemComponent";
import AdditemComponent from "./components/AdditemComponent";
import MeniulZilei from "./components/pages/meniulZilei";
import Login from "./components/Login/login";
import Comenzi from "./components/pages/comenzi";
import Penalizari from "./components/pages/penalizari";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login-admin" element={<Login />}></Route>
        <Route path="/" element={<Login />}></Route>
      </Routes>
      {/* <div className="container"> */}
      <Routes>
        <Route
          path="/itemi"
          element={
            <>
              <HeaderComponent />
              <ListItemComponent />
            </>
          }
        ></Route>
        <Route path="/add-item" element={<AdditemComponent />}></Route>
        <Route path="/edit-item/:id" element={<AdditemComponent />}></Route>
        <Route
          path="/meniul-zilei"
          element={
            <>
              <HeaderComponent /> <MeniulZilei />
            </>
          }
        ></Route>
        <Route
          path="/comenzi"
          element={
            <>
              <HeaderComponent />
              <Comenzi />
            </>
          }
        ></Route>
        <Route
          path="/penalizari"
          element={
            <>
              <HeaderComponent />
              <Penalizari />
            </>
          }
        ></Route>
      </Routes>
      {/* </div> */}
      {/* <FooterComponent />{" "} */}
    </Router>
  );
}

export default App;

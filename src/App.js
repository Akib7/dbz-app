import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";
import "./App.css";
import Goku from "./pages/goku/goku.component";
import Vegeta from "./pages/vegeta/vegeta.component";
import Trunks from "./pages/trunks/trunks.component";
import Gohan from "./pages/gohan/gohan.component";
import Piccolo from "./pages/piccolo/piccolo.component";
import Yamcha from "./pages/yamcha/yamcha.component";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }
  render() {
    return (
      <div>
        {/* <HomePage /> */}
        <Header />
        {/* routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="goku" element={<Goku />} />
          <Route path="vegeta" element={<Vegeta />} />
          <Route path="trunks" element={<Trunks />} />
          <Route path="gohan" element={<Gohan />} />
          <Route path="piccolo" element={<Piccolo />} />
          <Route path="yamcha" element={<Yamcha />} />
        </Routes>
      </div>
    );
  }
}

export default App;

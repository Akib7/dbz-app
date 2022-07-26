import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";
import "./App.css";

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
        <HomePage />
        {/* <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes> */}
      </div>
    );
  }
}

export default App;

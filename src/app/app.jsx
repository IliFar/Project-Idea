import React from "react";
import ReactDOM from "react-dom/client";
import { Navbar } from "./components/Navbar/navbar.jsx";
import { Main } from "./components/main/main.jsx";
import User from "./components/user/user.jsx";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/personal' element={<PersonalInfo/>} />
          <Route path='/statistics' element={<Statistics/>} />
          <Route path='/recipes' element={<Recipes/>} />
        </Routes>
      </Router>
      </>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

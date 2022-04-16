import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Pages/Shared/Header/Header";
import Home from "./Pages/Home/Home/Home";

import About from "./Pages/About/About";
import Footer from "./Pages/Shared/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

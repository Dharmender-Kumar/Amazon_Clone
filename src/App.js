import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Checkout from "./Checkout";
function App() {
  return (
    //BEM convention
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/checkout" element={<Checkout />}></Route>
        </Routes>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe(
  "pk_test_51LOcXOSE7TadfVhIu58IMzBMpB47CwbwPt6WaYCxXXZfIKuClgz9nxHFeV6lSu4ognpjajVrofTqfhsa3pUnU2ty005WvKbn5x"
);
function App() {
  const [{}, dispatch] = useStateValue("");

  useEffect(() => {
    //run once when ap component loads
    auth.onAuthStateChanged((authUser) => {
      console.log("the user is", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    // return () => {
    //   second;
    // };
  }, []);

  return (
    //BEM convention
    <BrowserRouter>
      <div className="app">
        {/* <Header /> */}
        <Routes>
          <Route
            path="/orders"
            element={
              <>
                <Header />
                <Orders />
              </>
            }
          />
          <Route path="/login" element={<Login />} />

          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />

          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
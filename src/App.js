import React from "react";
import "../index.css";

import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";


const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      {/* <Footer />
      <Subscription /> */}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

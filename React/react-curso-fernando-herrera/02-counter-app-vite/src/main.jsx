import React from "react";
import ReactDOM from "react-dom/client";
// import App from './HelloWorldApp';
// import FirstApp from "./FirstApp";

import "./styles.css";
import CounterApp from "./CounterApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <FirstApp
      title="Titulo por prop"
      subTitle="Subtitulo por prop"
      myNumber={2334}
    /> */}
    <CounterApp value={100}/>
</React.StrictMode>
);

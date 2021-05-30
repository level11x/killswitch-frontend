import React from "react";
import ReactDOM from "react-dom";
// 
import "antd/dist/antd.css";
import "./m.css";
// 
import Router from "./routes/index";
import { AppProvider } from './context'
// import "./index.css";
// import "./main.css";
// 
const App = () => {
  return  (
    <AppProvider>
      <Router />
    </AppProvider>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));

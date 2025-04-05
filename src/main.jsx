import React from "react";
import ReactDOM from "react-dom/client";

import './Root/index.css'
import './Components/Button/Button.css'
import Button from "./Components/Button"; 

const App = () => (
  <div>
    <h1>Test Sayfası</h1>
    <Button bgColor="#cbcbcb" textColor="red" paddingSize="large">
      Deneme
    </Button>
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
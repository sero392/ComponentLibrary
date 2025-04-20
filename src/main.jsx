import React from "react";
import ReactDOM from "react-dom/client";

import "./Root/index.css";
import "./Components/Button/Button.css";
import "./Components/SelectBox/SelectBox.css";
import Button from "./Components/Button";
import SelectBox from "./Components/SelectBox";

const App = () => (
  <div>
    <h1>Test Sayfası</h1>
    <div>
      <Button onClick={() => backToPage()} rounded="small" ringColor="#000" fontSize="11px" paddingSize="small" bgColor="secondary" >
        Geri Dön
      </Button>
    </div>

    <div style={{marginTop:10}}>
      <Button onClick={() => backToPage()} rounded="large" fontSize="11px" paddingSize="small" bgColor="success" >
        Onayla
      </Button>
    </div>

    <div style={{marginTop:10}}>
      <SelectBox>
      </SelectBox>
    </div>
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

import React from "react";
import ReactDOM from "react-dom/client";

import "./Root/index.css";
import "./Components/Button/Button.css";
import "./Components/SelectBox/SelectBox.css";
import Button from "./Components/Button";
import SelectBox from "./Components/SelectBox";

const changeSelect = (item) => {
  console.log(item);
};

const App = () => (
  <div>
    <h1>Test Sayfası</h1>
    <div>
      <Button
        rounded="small"
        ringColor="#000"
        fontSize="11px"
        paddingSize="small"
        bgColor="secondary"
      >
        Geri Dön
      </Button>
    </div>

    <div style={{ marginTop: 10 }}>
      <Button
        rounded="large"
        fontSize="11px"
        paddingSize="small"
        bgColor="success"
      >
        Onayla
      </Button>
    </div>

    <div style={{ marginTop: 10, width: 200 }}>
      <SelectBox
      itemsBackgroundColor="warning"
        boxShadow="large"
        rounded="large"
        padding="large"
        triggerOnMount={true}
        width="full"
        placeHolder="Lütfen Meyve Seçiniz!"
        values={[
          { Text: "Elma", Value: 1 },
          {
            Text: 'Limon',
            Value: 2,
          }
        ]}
        onChange={(item) => changeSelect(item)}
      ></SelectBox>
    </div>
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

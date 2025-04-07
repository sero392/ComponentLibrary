import React from "react";
import ReactDOM from "react-dom/client";

import "./Root/index.css";
import "./Components/Button/Button.css";
import Button from "./Components/Button";

const App = () => (
  <div>
    <h1>Test Sayfası</h1>
    <Button
      iconButton={false}
      paddingSize="small"
      fontSize="11px"
      rounded="none"
    >
      <svg class="w-6 h-6 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v14m0-14 4 4m-4-4-4 4" />
      </svg>

    </Button>
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

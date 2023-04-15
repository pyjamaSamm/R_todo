import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
//   rootElement
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
     <App />
   </StrictMode>,
   );

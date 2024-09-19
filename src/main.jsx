import ReactDOM from "react-dom/client";
import App from "./App/App.jsx";
import { GlobalStyle } from "./App/Styles";
import UserProvider from "./App/UserProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <GlobalStyle />
    <App />
  </UserProvider>
);

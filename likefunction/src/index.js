import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createStore } from "redux";
import App from "./App";
import rootRudcer from "./store/reducers";
import { Provider } from "react-redux";

const store = createStore(rootRudcer);

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);

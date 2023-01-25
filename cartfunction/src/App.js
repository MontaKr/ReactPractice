import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import RootRoute from "./routers";

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

function App() {
  return (
    <div className="App">
      {/* reset css */}
      <GlobalStyle />
      <RootRoute />
    </div>
  );
}

export default App;

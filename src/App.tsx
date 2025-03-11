import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "./styles/themes/default";
import { GlobalStyles } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import { GitProvider } from "./contexts/GitContext";

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <GitProvider>
          <Router />
        </GitProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

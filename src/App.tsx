import { RouterMain } from "./routes/route";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./style/theme";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import { ResetStyle } from "./style/GlobalStyle";

function App() {
  const { theme } = useSelector((state: RootState) => state.themeReducer);
  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <ResetStyle />
        <RouterMain />
      </ThemeProvider>
    </>
  );
}

export default App;

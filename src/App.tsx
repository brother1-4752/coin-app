import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import GlobalStyle from "./GlobalStyle";
import { router } from "./Router";
import { RouterProvider } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { darkModeState } from "./atoms";
import DarkMode from "./components/DarkMode";

export default function App() {
  const isDark = useRecoilValue(darkModeState);
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <DarkMode />
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

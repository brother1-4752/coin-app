import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import GlobalStyle from "./GlobalStyle";
import { router } from "./Router";
import { RouterProvider } from "react-router-dom";

// export interface IRouter {
//   id: number;
//   path: string;
//   label: string;
//   element: React.ReactNode;
// }

// export const RouterInfo: IRouter[] = [
//   {
//     id: 0,
//     path: "/",
//     label: "HOME",
//     element: <Home />,
//   },
// ];

// const router = createBrowserRouter(
//   RouterInfo.map((router) => {
//     return {
//       path: router.path,
//       element: router.element,
//     };
//   })
// );

export default function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

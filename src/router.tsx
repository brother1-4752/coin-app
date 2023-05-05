import ErrorPage from "./ErrorPage";
import Coin from "./routes/Coin";
import Home from "./routes/Home";
import { RouteObject, createBrowserRouter } from "react-router-dom";

interface IRouter {
  id?: number;
  path: string;
  element: React.ReactNode;
  errorElement?: React.ReactNode;
  children?: IRouter[];
}

const RouterData: IRouter[] = [
  {
    id: 0,
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    id: 1,
    path: `/:coinId`,
    element: <Coin />,
    errorElement: <ErrorPage />,
  },
];

export const router = createBrowserRouter(
  RouterData.map((routerInfo) => {
    return {
      path: routerInfo.path,
      element: routerInfo.element,
    };
  })
);

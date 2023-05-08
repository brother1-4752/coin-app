import ErrorPage from "./ErrorPage";
import Chart from "./routes/Chart";
import Coin from "./routes/Coin";
import Home from "./routes/Home";
import { createBrowserRouter } from "react-router-dom";
import Price from "./routes/Price";

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
    children: [
      {
        id: 2,
        path: "chart",
        element: <Chart />,
      },
      {
        id: 3,
        path: "price",
        element: <Price />,
      },
    ],
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

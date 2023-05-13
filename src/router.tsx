// import ErrorBoundary from "./ErrorBoundary";
import Coin from "./routes/Coin";
import Home from "./routes/Home";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Price from "./routes/Price";
import ErrorBoundary from "./ErrorBoundary";
import Chart from "./routes/Chart";

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
    errorElement: <ErrorBoundary />,
  },
  {
    id: 1,
    path: ":coinId/*",
    element: <Coin />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        id: 2,
        path: "chart",
        element: <Chart />,
        errorElement: <ErrorBoundary />,
      },
      {
        id: 3,
        path: "price",
        element: <Price />,
        errorElement: <ErrorBoundary />,
      },
    ],
  },
];

export const router = createBrowserRouter(
  RouterData.map((routerInfo) => {
    console.dir(routerInfo);
    return {
      path: routerInfo.path,
      element: routerInfo.element,
      errorElement: routerInfo.errorElement,
    };
  }),
  {
    basename: "/coin-app/",
  }
);

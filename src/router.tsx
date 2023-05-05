import ErrorPage from "./ErrorPage";
import Home from "./routes/Home";
import { createBrowserRouter } from "react-router-dom";

interface IRouter {
  id?: number;
  path: string;
  element: React.ReactNode;
  errorElement?: React.ReactNode;
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
    path: "/:coinId/chart",
    element: "<div>코인</div>",
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

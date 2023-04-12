import Home from "./routes/Home";

export interface IRouter {
  id: number;
  path: string;
  label: string;
  element: React.ReactNode;
  withAuth?: boolean;
}

export const RouterInfo: IRouter[] = [
  {
    id: 0,
    path: "/",
    label: "HOME",
    element: <Home />,
    withAuth: true,
  },
];

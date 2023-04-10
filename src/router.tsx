import Home from "./routes/Home";

interface RouterElement {
  id: number; //페이지 아이디(반복문용 고유값)
  path: string;
  label: string; //사이드바에 표시할 페이지 이름
  element: React.ReactNode;
  withAuth?: boolean; //인증이 필요한 페이지 여부
}

const routerData: RouterElement[] = [
  {
    id: 0,
    path: "/",
    label: "Home",
    element: <Home />,
    withAuth: false,
  },
  {},
];

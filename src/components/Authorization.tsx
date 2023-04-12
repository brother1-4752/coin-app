import { ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//커스텀 훅 :  로그인스테이트 관리
const useLoginState = () => {
  // 현재 수동으로 로그인된 상태로 고정함. 추후 로그인 여부에 따라 바꿔야함.
  const [logged, setLogged] = useState(false);
  const navigate = useNavigate();

  const login = () => setLogged(true);
  const logout = () => setLogged(false);

  const routeToLoginPage = () => {
    //로그인 페이지로 라우팅하는 코드
    useEffect(() => {
      navigate("/login");
    }, []);
  };

  return { logged, login, logout, routeToLoginPage };
};

export default function Authorization({ children }: { children: ReactNode }) {
  const { logged, routeToLoginPage } = useLoginState();

  // 로그인 안되어 있으면 login페이지로 리다이렉트
  if (!logged) {
    // routeToLoginPage();
    console.log("test");
  }

  return <>{children}</>;
}

import styled from "styled-components";
import { useRecoilState } from "recoil";
import { darkModeState } from "../atoms";

// 아래 2개 Icon컴포넌트 중복되는것 나중에 처리
const DarkModeIcon = styled.div`
  position: absolute;
  right: 5px;
  top: 6px;
  font-size: 16px;
  cursor: pointer;
`;

const LightModeIcon = styled.div`
  position: absolute;
  left: 5px;
  top: 6px;
  font-size: 16px;
  cursor: pointer;
`;

const DarkWrapper = styled.div`
  width: 100px;
  height: 30px;
  position: fixed;
  right: 10px;
  top: 10px;
  border: 1px solid ${(props) => props.theme.textColor};
  border-radius: 0.5em;
`;

const DarkPointer = styled.div`
  width: 25px;
  height: 25px;
  position: absolute;
  background-color: rgb(0, 117, 186);
  border-radius: 0.5em;
  right: 3px;
  top: 3px;
  z-index: -100;
  ${(props: { mode: boolean }) =>
    props.mode
      ? "animation: slide-left 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;"
      : "animation: slide-right 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both; left:3px;"}
`;

function DarkMode() {
  const [isDark, setIsDark] = useRecoilState(darkModeState);
  const handleDarkMode = () => {
    setIsDark((prev) => !prev);
  };
  return (
    <DarkWrapper>
      <DarkModeIcon onClick={handleDarkMode}>🌞</DarkModeIcon>
      <LightModeIcon onClick={handleDarkMode}>🌙</LightModeIcon>
      <DarkPointer mode={isDark}></DarkPointer>
    </DarkWrapper>
  );
}

export default DarkMode;

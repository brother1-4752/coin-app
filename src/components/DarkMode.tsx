import styled from "styled-components";
import { useRecoilState } from "recoil";
import { darkModeState } from "../atoms";

const DarkModeIcon = styled.div`
  position: fixed;
  right: 20px;
  top: 20px;
  font-size: 21px;
  cursor: pointer;
`;

function DarkMode() {
  const [isDark, setIsDark] = useRecoilState(darkModeState);
  const handleDarkMode = () => {
    setIsDark((prev) => !prev);
  };
  return (
    <DarkModeIcon onClick={handleDarkMode}>{isDark ? "🌞" : "🌙"}</DarkModeIcon>
  );
}

export default DarkMode;

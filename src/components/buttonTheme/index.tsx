import { useRef } from "react";
import { ButtonThemeStyle } from "./style";
import { IoIosMoon } from "react-icons/io";
import { FaSun } from "react-icons/fa";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";

interface ButtonThemeProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
}

export const ButtonTheme: React.FC<ButtonThemeProps> = ({
  onClick,
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { theme } = useSelector((state: RootState) => state.themeReducer);

  const handleClick = () => {
    onClick();
    buttonRef.current?.classList.add("theme-changed");
    setTimeout(() => {
      buttonRef.current?.classList.remove("theme-changed");
    }, 500);
  };

  return (
    <ButtonThemeStyle onClick={handleClick} ref={buttonRef}>
      {theme === "light" ? <IoIosMoon size={20} /> : <FaSun size={20} />}
    </ButtonThemeStyle>
  );
};

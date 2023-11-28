import { memo } from "react";
import cls from "./NavBar.module.scss";

interface NavBarProps {
  className?: string;
}

export const NavBar = memo(({ className }: NavBarProps) => {
  return (
    <header className={[cls.NavBar, className].join(" ")}>
      Navigation
    </header>
  );
});

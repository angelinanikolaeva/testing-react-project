import { memo } from "react";
import cls from "./NavBar.module.scss";
import { BaseLink } from "@/shared/ui/BaseLink/BaseLink";
import { getRouteCategory } from "@/shared/const/router";
import { BaseButton } from "@/shared/ui/BaseButton";
import { classNames } from "@/shared/lib/classNames/classNames";

interface NavBarProps {
  className?: string;
}

export const NavBar = memo(({ className }: NavBarProps) => {
  const toggleSidebar = () => {};
  return (
    <header className={classNames(cls.NavBar, {}, [className])}>
      <BaseLink className={cls.NavBarLink} to={getRouteCategory("food")}>
        Food
      </BaseLink>
      <BaseLink className={cls.NavBarLink} to={getRouteCategory("clothes")}>
        Clothes
      </BaseLink>
      <BaseLink className={cls.NavBarLink} to={getRouteCategory("electronics")}>
        Electronics
      </BaseLink>
      <BaseButton className={cls.NavBarButton} onClick={toggleSidebar}>
        Shopping cart
      </BaseButton>
    </header>
  );
});

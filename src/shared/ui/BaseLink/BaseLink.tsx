import { LinkProps, NavLink } from "react-router-dom";
import { memo, ReactNode } from "react";
import cls from "./BaseLink.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

interface BaseLinkProps extends LinkProps {
  className?: string;
  children?: ReactNode;
  activeClassName?: string;
}

export const BaseLink = memo((props: BaseLinkProps) => {
  const {
    to,
    className,
    children,
    activeClassName = "",
    ...otherProps
  } = props;

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        classNames(cls.BaseLink, { [activeClassName]: isActive }, [className])
      }
      {...otherProps}>
      {children}
    </NavLink>
  );
});

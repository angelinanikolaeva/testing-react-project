import {
  ButtonHTMLAttributes,
  ForwardedRef,
  forwardRef,
  ReactNode,
} from "react";
import cls from "./BaseButton.module.scss";
import { classNames, Mods } from "@/shared/lib/classNames/classNames";

export type ButtonColor = "normal" | "success" | "error";

export type ButtonSize = "m";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  size?: ButtonSize;
  disabled?: boolean;
  children?: ReactNode;
  color?: ButtonColor;
}

export const BaseButton = forwardRef(
  (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const {
      className,
      children,
      disabled,
      size = "m",
      color = "normal",
      ...otherProps
    } = props;

    const mods: Mods = {
      [cls.disabled]: disabled,
    };

    return (
      <button
        type="button"
        className={classNames(cls.BaseButton, mods, [
          className,
          cls[size],
          cls[color],
        ])}
        disabled={disabled}
        {...otherProps}
        ref={ref}>
        {children}
      </button>
    );
  }
);

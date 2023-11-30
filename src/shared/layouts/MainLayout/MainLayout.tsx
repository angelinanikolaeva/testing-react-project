import { memo, ReactElement } from "react";
import cls from "./MainLayout.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

interface MainLayoutProps {
  className?: string;
  header: ReactElement;
  content: ReactElement;
}

export const MainLayout = memo((props: MainLayoutProps) => {
  const { className, content, header } = props;

  return (
    <div className={classNames(cls.MainLayout, {}, [className])}>
      <div className={cls.header}>{header}</div>
      <div className={cls.content}>{content}</div>
    </div>
  );
});

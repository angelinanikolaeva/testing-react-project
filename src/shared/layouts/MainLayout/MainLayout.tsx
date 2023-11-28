import { memo, ReactElement } from "react";
import cls from "./MainLayout.module.scss";

interface MainLayoutProps {
  className?: string;
  header: ReactElement;
  content: ReactElement;
}

export const MainLayout = memo((props: MainLayoutProps) => {
  const { className, content, header } = props;

  return (
    <div className={[cls.MainLayout, className].join(" ")}>
      <div className={cls.header}>{header}</div>
      <div className={cls.content}>{content}</div>
    </div>
  );
});

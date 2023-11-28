import { memo, MutableRefObject, ReactNode, useRef } from "react";
import cls from "./Page.module.scss";

interface PageProps {
  className?: string;
  children: ReactNode;
}

export const PAGE_ID = "PAGE_ID";

export const Page = memo((props: PageProps) => {
  const { className, children } = props;
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;

  return (
    <main
      ref={wrapperRef}
      className={[cls.Page, className].join(" ")}
      id={PAGE_ID}>
      {children}
    </main>
  );
});

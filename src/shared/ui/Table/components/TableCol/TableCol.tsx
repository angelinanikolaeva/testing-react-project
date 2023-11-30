import { ReactNode, memo } from "react";
import cls from "./TableCol.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

interface TableColProps {
  className?: string;
  children?: ReactNode;
  f?: string;
  width?: string | number;
  u?: string;
  paddingH?: string;
  paddingV?: string;
  overflow?: boolean;
  maxWidth?: string;
  minWidth?: string;
}

const TableCol = memo((props: TableColProps) => {
  const { className, children } = props;
  return (
    <td
      className={classNames(cls.TableCol, {}, [className])}
      style={{
        ...(props.width
          ? { flex: `0 0 ${props.width ?? "0"}${props.u ?? "px"}` }
          : { flex: props.f ?? 1 }),
        padding: `0 ${props.paddingH ?? "0.1rem"} 0 ${
          props.paddingV ?? "0.1rem"
        }`,
        ...(props.overflow ?? true ? {} : { overflow: "hidden" }),
        ...(props.maxWidth
          ? {
              "max-width": `${props.maxWidth}${props.u ?? "px"}`,
            }
          : ""),
        ...(props.minWidth
          ? {
              "min-width": `${props.minWidth}${props.u ?? "px"}`,
            }
          : ""),
      }}>
      {children}
    </td>
  );
});

export default TableCol;

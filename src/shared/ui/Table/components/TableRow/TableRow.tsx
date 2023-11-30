import { ReactNode, memo } from "react";
import cls from "./TableRow.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

interface TableColProps {
  className?: string;
  children: ReactNode;
  paddingV?: number;
  paddingVT?: number;
  paddingVB?: number;
  paddingH?: number;
  paddingHR?: number;
  paddingHL?: number;
}

const TableRow = memo((props: TableColProps) => {
  const { className, children } = props;

  const padding = `${props.paddingVT ?? props.paddingV ?? "0"} ${
    props.paddingHR ?? props.paddingH ?? "0"
  } ${props.paddingVB ?? props.paddingV ?? "0"} ${
    props.paddingHL ?? props.paddingH ?? "0"
  }`;

  return (
    <tr
      className={classNames(cls.TableRow, {}, [className])}
      style={{
        padding,
      }}>
      {children}
    </tr>
  );
});

export default TableRow;

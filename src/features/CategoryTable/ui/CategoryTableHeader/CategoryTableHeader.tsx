import { classNames } from "@/shared/lib/classNames/classNames";
import TableCol from "@/shared/ui/Table/components/TableCol/TableCol";
import TableRow from "@/shared/ui/Table/components/TableRow/TableRow";
import { memo } from "react";
import cls from "./CategoryTableHeader.module.scss";
import { CategoryTableColumn } from "../../model/types";

interface CategoryTableHeaderProps {
  className?: string;
  columns: CategoryTableColumn[];
}
const CategoryTableHeader = memo((props: CategoryTableHeaderProps) => {
  const { className, columns } = props;

  return (
    <thead className={classNames(cls.CategoryTableHeader, {}, [className])}>
      <TableRow
        className={cls.CategoryTableHeaderRow}
        paddingV={10}
        paddingH={0}>
        {columns.map((column) => {
          return (
            <TableCol
              className={cls.CategoryTableHeaderCol}
              key={column.id}
              width={column.width}>
              {column.name}
            </TableCol>
          );
        })}
      </TableRow>
    </thead>
  );
});

export default CategoryTableHeader;

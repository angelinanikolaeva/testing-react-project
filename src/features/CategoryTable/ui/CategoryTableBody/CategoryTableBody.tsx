import { classNames } from "@/shared/lib/classNames/classNames";
import { memo } from "react";
import TableCol from "@/shared/ui/Table/components/TableCol/TableCol";
import TableRow from "@/shared/ui/Table/components/TableRow/TableRow";
import cls from "./CategoryTableBody.module.scss";
import { CategoryTableColumn } from "../../model/types";
import { BaseButton } from "@/shared/ui/BaseButton";

interface CategoryTableBodyProps {
  className?: string;
  columns: CategoryTableColumn[];
  data: any[];
}

const CategoryTableBody = memo((props: CategoryTableBodyProps) => {
  const { className, columns, data } = props;

  const addToShoppingCart = () => {};

  return (
    <tbody className={classNames(cls.CategoryTableBody, {}, [className])}>
      {data.map((item) => {
        return (
          <TableRow
            className={cls.CategoryTableBodyRow}
            key={item.id}
            paddingV={10}
            paddingH={0}>
            {columns.map((column) => {
              return (
                <TableCol key={column.id} width={column.width}>
                  {column.id === "choose" ? (
                    <BaseButton
                      className={cls.CategoryTableChooseButton}
                      onClick={addToShoppingCart}>
                      Add to shopping cart
                    </BaseButton>
                  ) : (
                    item[column.id]
                  )}
                </TableCol>
              );
            })}
          </TableRow>
        );
      })}
    </tbody>
  );
});

export default CategoryTableBody;

import { memo, useState, useMemo } from "react";
import CategoryTableHeader from "../CategoryTableHeader/CategoryTableHeader";
import CategoryTableBody from "../CategoryTableBody/CategoryTableBody";
import cls from "./CategoryTable.module.scss";
import { Pagination } from "@/shared/ui/Pagination";
import { sortByName } from "@/shared/lib/util/sort/sortByName";
import { BaseButton } from "@/shared/ui/BaseButton";

export interface CategoryTableProps {
  className?: string;
  data: any[];
}

// Todo: unify columns for any entity
const columns = [
  // { id: "id", name: "Id", width: "200" },
  { id: "name", name: "Name", width: "200" },
  { id: "description", name: "Description", width: "200" },
  { id: "price", name: "Price", width: "200" },
  { id: "rating", name: "Rating", width: "100" },
  { id: "product_id", name: "Product id", width: "200" },
  { id: "choose", name: "Choose", width: "200" },
];

const _pageSize = 10;

const CategoryTable = memo((props: CategoryTableProps) => {
  const { className, data } = props;

  const [currentPage, setCurrentPage] = useState(1);

  const [sortingByName, setSortingByName] = useState(false);

  const toggleSorting = () => {
    setSortingByName((sort) => !sort);
  };

  const currentData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * _pageSize;
    const lastPageIndex = firstPageIndex + _pageSize;
    const newData = data.slice(firstPageIndex, lastPageIndex);

    if (sortingByName) {
      return newData.sort(sortByName);
    }
    return newData;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, data, sortingByName]);

  return (
    <div className={className}>
      <BaseButton onClick={toggleSorting}>Sort</BaseButton>
      <table className={cls.CategoryTable}>
        <CategoryTableHeader columns={columns}></CategoryTableHeader>
        <CategoryTableBody
          columns={columns}
          data={currentData}></CategoryTableBody>
      </table>
      <Pagination
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={_pageSize}
        onPageChange={(page: number) => setCurrentPage(page)}
      />
    </div>
  );
});

export default CategoryTable;

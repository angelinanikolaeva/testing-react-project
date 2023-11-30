import { memo } from "react";
import cls from "./Pagination.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { usePagination } from "@/shared/lib/hooks/usePagination";

interface PaginationProps {
  onPageChange: (page: number) => any;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
  className?: string;
}

export const Pagination = memo((props: PaginationProps) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul className={classNames(cls.PaginationWrapper, {}, [className])}>
      {/* Left navigation arrow */}
      <li
        className={classNames(cls.PaginationItem, {
          disabled: currentPage === 1,
        })}
        onClick={onPrevious}>
        <div className="arrow left" />
      </li>
      {paginationRange.map((pageNumber: number | string) => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (typeof pageNumber === "string") {
          return <li className={cls.PaginationItem + "dots"}>&#8230;</li>;
        }

        // Render our Page Pills
        return (
          <li
            className={classNames(cls.PaginationItem, {
              selected: pageNumber === currentPage,
            })}
            onClick={() => onPageChange(pageNumber)}>
            {pageNumber}
          </li>
        );
      })}
      {/*  Right Navigation arrow */}
      <li
        className={classNames(cls.PaginationItem, {
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}>
        <div className="arrow right" />
      </li>
    </ul>
  );
});

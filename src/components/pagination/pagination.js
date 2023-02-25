/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from "react";
import classnames from "classnames";
import { DOTS, usePagination } from "../../hooks/usePagination";
import "./pagination.scss";
import DoubleChevronR from "../../assets/double-chevron-right";
import DoubleChevronL from "../../assets/double-chevron-left";

const Pagination = (props) => {
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

  if (currentPage === 0 || paginationRange?.length < 2) {
    return null;
  }

  let lastPage = paginationRange[paginationRange?.length - 1];

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const onFirst = () => {
    onPageChange(1);
  };

  const onLast = () => {
    onPageChange(lastPage);
  };
  return (
    <ul
      className={classnames("pagination-container", { [className]: className })}
    >
      <li
        className={classnames("pagination-item", {
          disabled: currentPage === 1,
        })}
        onClick={onFirst}
      >
        <div className="arrow">
          <DoubleChevronL />
        </div>
      </li>
      {paginationRange?.map((pageNumber, i) => {
        if (pageNumber === DOTS) {
          return (
            <li key={i} className="pagination-item dots">
              &#8230;
            </li>
          );
        }

        return (
          <li
            key={i}
            className={classnames("pagination-item", {
              selected: pageNumber === currentPage,
            })}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={classnames("pagination-item", {
          disabled: currentPage === lastPage,
        })}
        onClick={onLast}
      >
        <div className="arrow">
          <DoubleChevronR />
        </div>
      </li>
    </ul>
  );
};

export default Pagination;

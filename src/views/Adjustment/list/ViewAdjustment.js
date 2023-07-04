import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { ChevronDown } from "react-feather";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { getViewAdjustmentData } from "../store/index";
import { viewAdjustmentcolumns } from "./viewAdjustmentcolumns";

import "@styles/react/libs/react-select/_react-select.scss";
import "@styles/react/libs/tables/react-dataTable-component.scss";
import { DebounceInput } from "react-debounce-input";

const ViewAdjustment = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q");
  const store = useSelector((state) => state.adjustments);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState(q ?? null);
  const [sort, setSort] = useState("desc");
  const [sortColumn, setSortColumn] = useState("id");

  useEffect(() => {
    dispatch(getViewAdjustmentData({ page: currentPage, q: search, sort, sortColumn }));
  }, [currentPage, search, sort, sortColumn]);

  const handleSort = (column, sortDirection) => {
    setSort(sortDirection);
    setSortColumn(column.sortField);
  };

  const CustomHeader = () => {
    return (
      <div className="w-100">
        <Row>          
          <Col
            xl="2"
            className="d-flex align-items-end align-content-center flex-wrap"
          >
            <div>Search by Stock Number</div>
          </Col>
          <Col
            xl="3"
            className="d-flex align-items-sm-start justify-content-xl-start justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1"
          >
            <div className="d-flex align-items-center table-header-actions w-100">
              <DebounceInput
                className="form-control"
                color="primary"
                debounceTimeout={300}
                autoFocus
                placeholder="Search Here"
                value={search}
                onChange={(e) => {
                  e.preventDefault();
                  setSearch(e.target.value);
                }}
              />
            </div>
          </Col>
          <Col xl="7"></Col>
        </Row>
      </div>
    );
  };

  const CustomPagination = () => {
    const count = Number(Math.ceil(store.view_total / 10));

    return (
      <ReactPaginate
        previousLabel={""}
        nextLabel={""}
        pageCount={count || 1}
        activeClassName="active"
        forcePage={currentPage !== 0 ? currentPage - 1 : 0}
        onPageChange={(page) => setCurrentPage(page.selected + 1)}
        pageClassName={"page-item"}
        nextLinkClassName={"page-link"}
        nextClassName={"page-item next"}
        previousClassName={"page-item prev"}
        previousLinkClassName={"page-link"}
        pageLinkClassName={"page-link"}
        containerClassName={
          "pagination react-paginate justify-content-end my-2 pe-1"
        }
      />
    );
  };

  return (
    <div className="react-dataTable">
      <CustomHeader />
      <DataTable
striped
        noHeader
        subHeader
        sortServer
        pagination
        responsive
        paginationServer
        columns={viewAdjustmentcolumns}
        onSort={handleSort}
        sortIcon={<ChevronDown />}
        className="react-dataTable"
        paginationComponent={CustomPagination}
        data={store.viewAdjustmentData}
      />
    </div>
  );
};
export default ViewAdjustment;

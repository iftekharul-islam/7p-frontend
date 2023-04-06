import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { ChevronDown, PlusCircle, UserPlus } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Row } from "reactstrap";
import { getAllData } from "../store";
import { useNavigate, useSearchParams } from "react-router-dom";
import ReactPaginate from "react-paginate";

import "@styles/react/libs/react-select/_react-select.scss";
import "@styles/react/libs/tables/react-dataTable-component.scss";
import { DebounceInput } from "react-debounce-input";
import { columns } from "./columns";

const ViewBatches = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q");
  const store = useSelector((state) => state.routes);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState(q ?? null);

  useEffect(() => {
    dispatch(getAllData({ page: currentPage, q: search }));
  }, [currentPage, search]);

  const CustomHeader = () => {
    return (
      <div className="w-100">
        <Row>
          <Col
            xl="2"
            className="d-flex align-items-end align-content-center flex-wrap"
          >
            <div>Search by Batch Code</div>
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
          <Col xl="5"></Col>
          <Col
            xl="2"
            className="d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1"
          >
            <div className="d-flex align-items-center table-header-actions">
              <Button
                className="add-new-user"
                color="primary"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/route-add");
                }}
              >
                <PlusCircle size={14} /> Route
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    );
  };

  const CustomPagination = () => {
    const count = Number(Math.ceil(store.total / 10));

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
      <DataTable
        noHeader
        subHeader
        pagination
        responsive
        paginationServer
        columns={columns}
        className="react-dataTable"
        customStyles={{
          cells: { style: { marginTop: 35, marginBottom: 35 } },
        }}
        paginationComponent={CustomPagination}
        data={store.data}
        subHeaderComponent={<CustomHeader />}
      />
    </div>
  );
};
export default ViewBatches;

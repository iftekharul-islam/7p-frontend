import "@styles/react/libs/react-select/_react-select.scss";
import "@styles/react/libs/tables/react-dataTable-component.scss";
import { selectThemeColors } from "@utils";
import { Fragment, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { DebounceInput } from "react-debounce-input";
import { ChevronDown, PlusCircle } from "react-feather";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import Select from "react-select";
import { Button, Card, Col, Row } from "reactstrap";
import { getAllData, updateParams } from "../store";
import { columns } from "./columns";

const index = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams()
  const q = searchParams.get("q")
  const store = useSelector((state) => state.purchaseOrders);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState(q ?? null);
  const [sort, setSort] = useState("desc");
  const [sortColumn, setSortColumn] = useState("id");

  const [statusOption, setStatusOption] = useState([
    { label: "Open", value: 1 },
    { label: "Closed", value: 2 },
  ]);

  useEffect(() => {
    dispatch(
      getAllData({
        page: currentPage,
        status: store?.params?.status,
        sort,
        sortColumn,
        q: search,
      })
    );
  }, [currentPage, store?.params?.status, search, sort, sortColumn]);

  const handleSort = (column, sortDirection) => {
    setSort(sortDirection);
    setSortColumn(column.sortField);
  };

  const CustomHeader = () => {
    const navigate = useNavigate();
    return (
      <div className="invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75">
        <Row>
          <Col xl="3"></Col>
          <Col
            xl="2"
            className="d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1"
          >
            <div className="d-flex align-items-center table-header-actions">
              <Select
                className="react-select"
                classNamePrefix="select"
                theme={selectThemeColors}
                placeholder="Select Status"
                options={statusOption}
                value={statusOption?.find(
                  (item) => item?.value === store?.params?.status
                )}
                onChange={(e) => dispatch(updateParams({ status: e.value }))}
                isClearable={false}
              />
            </div>
          </Col>          
          <Col
            xl="2"
            className="d-flex align-items-end"
          >
            <div>Search by PO#/Vendor/Stock/Status</div>            
          </Col>
          <Col
            xl="3"
            className="d-flex align-items-sm-start justify-content-xl-start justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1"
          >
            <div className="d-flex align-items-center table-header-actions">
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
                  navigate("/purchase-order-add");
                }}
              >
                <PlusCircle size={14} /> Purchase Order
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
    <div className="app-user-list">
      <Fragment>
        <Card className="overflow-hidden">
          <div className="react-dataTable">
            <DataTable
striped
              noHeader
              subHeader
              sortServer
              pagination
              responsive
              paginationServer
              columns={columns}
              onSort={handleSort}
              sortIcon={<ChevronDown />}
              className="react-dataTable"
              paginationComponent={CustomPagination}
              data={store.data}
              subHeaderComponent={<CustomHeader />}
            />
          </div>
        </Card>
      </Fragment>
    </div>
  );
};
export default index;

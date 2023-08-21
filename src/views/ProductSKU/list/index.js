import { Fragment, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { ChevronDown, PlusCircle } from "react-feather";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import Select from "react-select";
import { Button, Card, Col, Input, Row } from "reactstrap";
import { getAllData, getProductionCategoryOptions, getSearchableFieldsOptions } from "../store";
import { columns } from "./columns";

import "@styles/react/libs/react-select/_react-select.scss";
import "@styles/react/libs/tables/react-dataTable-component.scss";

const index = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.productskus);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q");
  const search_for = searchParams.get("search_for");
  const search_in = searchParams.get("search_in");
  const [currentPage, setCurrentPage] = useState(1);


  const [sort, setSort] = useState("desc");
  const [sortColumn, setSortColumn] = useState("id");
  const [query, setQuery] = useState(null);

  const updateQuery = (key, value) => {
    setQuery({ ...query, [key]: value });
  };

  useEffect(() => {
    dispatch(getAllData({ page: currentPage, sort, sortColumn, search_for, search_in, ...query }));
  }, [currentPage, sort, sortColumn]);

  useEffect(() => {
    dispatch(getProductionCategoryOptions())
    dispatch(getSearchableFieldsOptions())    
  }, [])
  

  const onSearch = async (e) => {
    setLoading(true);
    e.preventDefault();
    await dispatch(
      getAllData({ page: currentPage, sort, sortColumn, ...query })
    );
    setLoading(false);
  };

  const handleSort = (column, sortDirection) => {
    setSort(sortDirection);
    setSortColumn(column.sortField);
  };

  const CustomHeader = () => {
    const navigate = useNavigate();
    return (
      <div className="invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75">
        <Row>
          <Col xl="10"></Col>

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
                  navigate("/sku-product-add");
                }}
              >
                <PlusCircle size={14} /> Product
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
        <Card className="p-2">
          <Row>
            <Col sm="4">
              <Input
                placeholder="Search for"
                value={query?.search_for}
                onChange={(e) => updateQuery("search_for", e?.target?.value)}
              />
            </Col>
            <Col sm="3">
              <Select
                placeholder="Search in"
                options={store?.searchableFieldsOptions}
                value={store?.searchableFieldsOptions?.find(
                  (item) => item?.value == query?.search_in
                )}
                onChange={(e) => updateQuery("search_in", e?.value)}
              />
            </Col>
            <Col sm="3">
              <Select
                placeholder="Search in production category"
                options={store?.productionCategoryOptions}
                value={store?.productionCategoryOptions?.find(
                  (item) => item?.value == query?.product_production_category
                )}
                onChange={(e) => updateQuery("product_production_category", e?.value)}
              />
            </Col>
            <Col sm="2" className="d-flex align-items-center flex-column">
              <Button color="primary" onClick={onSearch} disabled={loading}>
                {loading ? "Searching" : "Search"}
              </Button>
            </Col>
          </Row>
        </Card>
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
              customStyles={{
                cells: { style: { marginTop: 15, marginBottom: 15 } },
              }}
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

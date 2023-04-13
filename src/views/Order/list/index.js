import "@styles/react/libs/flatpickr/flatpickr.scss";
import "@styles/react/libs/react-select/_react-select.scss";
import "@styles/react/libs/tables/react-dataTable-component.scss";
import { Fragment, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { ChevronDown, PlusCircle } from "react-feather";
import Flatpickr from "react-flatpickr";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { Button, Card, Col, Input, Row } from "reactstrap";
import {
  getAllSections,
  getAllVendors,
  setParams,
  setSearchParams
} from "../store/index";
import { columns } from "./columns";

const index = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.customerOrders);
  const [loading, setLoading] = useState(false);
  const params = store?.searchParams;

  useEffect(() => {
    // if (store?.params) dispatch(getAllData());
  }, [store?.params]);

  useEffect(() => {
    dispatch(getAllVendors());
    dispatch(getAllSections());
  }, []);

  const onSearch = async () => {
    setLoading(true);
    // await dispatch(getAllData());
    setLoading(false);
  };

  const onChange = (data) => {
    dispatch(setSearchParams(data));
  };

  const CustomHeader = () => {
    const navigate = useNavigate();
    return (
      <div className="invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75">
        <Row>
          <Col xl="10">
            {store?.total} items found costing: $
            {store?.cost?.cost?.toFixed(2) ?? 0}
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
                  navigate("/inventory-add");
                }}
              >
                <PlusCircle size={14} /> Stock
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
        forcePage={store?.params?.page !== 0 ? store?.params?.page - 1 : 0}
        onPageChange={(page) =>
          dispatch(setParams({ page: page.selected + 1 }))
        }
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
          <Row className="mb-1">
            <Col sm="2">
              <Input
                placeholder="Search for 1"
                value={params?.search_for_first}
                onChange={(e) =>
                  onChange({ search_for_first: e?.target?.value })
                }
              />
            </Col>
            <Col sm="2">
              <Select
                placeholder="Search in"
                options={store?.inOptions}
                value={store?.inOptions?.find(
                  (item) => item?.value == params?.operator_first
                )}
                onChange={(e) => onChange({ operator_first: e?.value })}
              />
            </Col>
            <Col sm="2">
              <Select
                placeholder="Search by"
                options={store?.searchOptions}
                value={store?.searchOptions?.find(
                  (item) => item?.value == params?.search_in_first
                )}
                onChange={(e) => onChange({ search_in_first: e?.value })}
              />
            </Col>
            <Col sm="2">
              <Input
                placeholder="Search for 2"
                value={params?.search_for_second}
                onChange={(e) =>
                  onChange({ search_for_second: e?.target?.value })
                }
              />
            </Col>
            <Col sm="2">
              <Select
                placeholder="Search in"
                options={store?.inOptions}
                value={store?.inOptions?.find(
                  (item) => item?.value == params?.operator_second
                )}
                onChange={(e) => onChange({ operator_second: e?.value })}
              />
            </Col>
            <Col sm="2">
              <Select
                placeholder="Search by"
                options={store?.searchOptions}
                value={store?.searchOptions?.find(
                  (item) => item?.value == params?.search_in_second
                )}
                onChange={(e) => onChange({ search_in_second: e?.value })}
              />
            </Col>
          </Row>
          <Row>
            <Col sm="2">
              <Flatpickr
                className="form-control"
                id="date"
                placeholder="Start Date"
                value={params?.start_date ?? null}
                options={{ dateFormat: "d-m-Y" }}
                onChange={(date) => onChange({ start_date: date[0] })}
              />
            </Col>
            <Col sm="2">
              <Flatpickr
                className="form-control"
                id="date"
                placeholder="End Date"
                value={params?.end_date ?? null}
                options={{ dateFormat: "d-m-Y" }}
                onChange={(date) => onChange({ end_date: date[0] })}
              />
            </Col>
            <Col sm="1"></Col>
            <Col sm="2">
              <Select
                placeholder="Filter By Status"
                isMulti
                options={store?.sortOptions}
                value={store?.searchOptions?.filter(
                  (item) => item?.value == params?.status
                )}
                onChange={(data) =>
                  onChange({ status: data?.map((item) => item?.value) })
                }
              />
            </Col>
            <Col sm="2">
              <Select
                placeholder="Filter By Store"
                isMulti
                options={store?.directionOptions}
                value={store?.directionOptions?.find(
                  (item) => item?.value == params?.store
                )}
                onChange={(data) =>
                  onChange({ store: data?.map((item) => item?.value) })
                }
              />
            </Col>
            <Col sm="2" className="d-flex justify-content-center">
              <Button color="primary" onClick={onSearch} disabled={loading}>
                {loading ? "Searching" : "Search"}
              </Button>
            </Col>
          </Row>
        </Card>
        <Card className="overflow-hidden">
          <div className="react-dataTable">
            <DataTable
              noHeader
              subHeader
              sortServer
              pagination
              responsive
              paginationServer
              columns={columns}
              customStyles={{
                cells: { style: { marginTop: 25, marginBottom: 25 } },
              }}
              //   onSort={handleSort}
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

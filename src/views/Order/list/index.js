import "@styles/react/libs/flatpickr/flatpickr.scss";
import "@styles/react/libs/react-select/_react-select.scss";
import "@styles/react/libs/tables/react-dataTable-component.scss";
import { Fragment, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { ChevronDown } from "react-feather";
import Flatpickr from "react-flatpickr";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { Button, Card, Col, Input, Row } from "reactstrap";
import {
  getAllData,
  getOperatorOptions,
  getSearchOptions,
  getStatusOptions,
  getStoreOptions,
  setParams,
  setSearchParams,
} from "./../store";
import { columns } from "./columns";

const index = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const store = useSelector((state) => state.orders);
  const [loading, setLoading] = useState(false);
  const params = store?.searchParams;

  useEffect(() => {
    if (store?.params) dispatch(getAllData());
  }, [store?.params]);

  useEffect(() => {
    dispatch(getOperatorOptions());
    dispatch(getSearchOptions());
    dispatch(getStatusOptions());
    dispatch(getStoreOptions());
  }, []);

  const onSearch = async () => {
    setLoading(true);
    await dispatch(getAllData());
    setLoading(false);
  };

  const onChange = (data) => {
    dispatch(setSearchParams(data));
  };

  const CustomHeader = () => {
    return (
      <div className="invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75">
        <Row>
          <Col sm="1"></Col>
          <Col sm="2" className="d-flex align-items-center border-primary">
            <div>Total Orders: {parseInt(store?.totalData?.total ?? 0)}</div>
          </Col>
          <Col sm="2" className="d-flex align-items-center border-primary">
            <div>
              Total Amount: $
              {parseFloat(store?.totalData?.money ?? 0).toFixed(2)}
            </div>
          </Col>
          <Col sm="2" className="d-flex align-items-center border-primary">
            <div>
              Average Amount: $
              {parseFloat(
                store?.totalData?.money
                  ? store?.totalData?.money / store?.totalData?.total
                  : 0
              ).toFixed(2)}
            </div>
          </Col>
          <Col sm="2" className="d-flex align-items-center border-primary">
            <div>
              Tax Total: ${parseFloat(store?.totalData?.tax ?? 0).toFixed(2)}
            </div>
          </Col>
          <Col sm="2" className="d-flex align-items-center border-primary">
            <div>
              Shipping Total: $
              {parseFloat(store?.totalData?.shipping ?? 0).toFixed(2)}
            </div>
          </Col>
          {/* <Col sm="2" className="d-flex justify-content-center">
            <Button color="primary" disabled={loading}>
              {loading ? "Searching" : "Create CSV Export#"}
            </Button>
          </Col> */}
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
                options={store?.operatorOptions}
                value={store?.operatorOptions?.find(
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
                options={store?.operatorOptions}
                value={store?.operatorOptions?.find(
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
                value={params?.start_date ? params?.start_date - 1 : null}
                options={{ dateFormat: "m-d-Y" }}
                onChange={(date) => {
                  let x = new Date(date[0]);
                  x.setDate(x.getDate() + 1);
                  onChange({ start_date: x });
                  // onChange({ start_date: date[0] });
                }}
              />
            </Col>
            <Col sm="2">
              <Flatpickr
                className="form-control"
                id="date"
                placeholder="End Date"
                value={params?.end_date ? params?.end_date - 1 : null}
                options={{ dateFormat: "m-d-y" }}
                onChange={(date) => {
                  let x = new Date(date[0]);
                  x.setDate(x.getDate() + 1);
                  onChange({ end_date: x });
                  // onChange({ end_date: date[0] });
                }}
              />
            </Col>
            <Col sm="3">
              <Select
                placeholder="Filter By Status"
                isMulti
                options={store?.statusOptions}
                value={store?.statusOptions?.find(
                  (item) => item?.value == params?.status
                )}
                onChange={(data) =>
                  onChange({ status: data?.map((item) => item?.value) })
                }
              />
            </Col>
            <Col sm="3">
              <Select
                placeholder="Filter By Store"
                isMulti
                options={store?.storeOptions}
                value={store?.storeOptions?.find(
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
              striped
              sortServer
              pagination
              responsive
              paginationServer
              pointerOnHover={true}
              onRowClicked={(row) => navigate(`/customer-order-edit/${row.id}`)}
              columns={columns}
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

import "@styles/react/apps/app-users.scss";
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
import { Button, Card, CardBody, Col, Input, Row } from "reactstrap";
import {
  getAllData,
  getRouteOptions,
  getStationOptions,
  getStatusOptions,
  getStoreOptions,
  setParams,
  setSearchParams,
} from "../store";
import { columns } from "./columns";

const index = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const store = useSelector((state) => state.batchList);
  const [loading, setLoading] = useState(false);
  const params = store?.searchParams;

  useEffect(() => {
    if (store?.params) dispatch(getAllData());
  }, [store?.params]);

  useEffect(() => {
    dispatch(getRouteOptions());
    dispatch(getStationOptions());
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
    const navigate = useNavigate();
    return (
      <div className="invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75">
        <Row>
          <Col xl="10">
            ({store?.data?.total ?? 0} Batches Found ) Total lines :
            {store?.cost?.count ?? 0} quantity :{store?.cost?.quantity ?? 0}
          </Col>
          <Col
            xl="2"
            className="d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1"
          >
            <div className="d-flex align-items-center table-header-actions">
              {/* <Button
                className="add-new-user"
                color="primary"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/inventory-add");
                }}
              >
                <PlusCircle size={14} /> Stock
              </Button> */}
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
        <Card className="px-1">
          <CardBody>
            <Row className="mb-1">
              <Col sm="3">
                <Select
                  options={store?.routeOptions}
                  placeholder="Route"
                  value={store?.routeOptions?.find(
                    (item) => item?.value == params?.route
                  )}
                  onChange={(e) => onChange({ route: e?.value })}
                />
              </Col>
              <Col sm="3">
                <Select
                  options={store?.stationOptions}
                  placeholder="Station"
                  value={store?.stationOptions?.find(
                    (item) => item?.value == params?.station
                  )}
                  onChange={(e) => onChange({ station: e?.value })}
                />
              </Col>
              <Col sm="3">
                <Flatpickr
                  className="form-control"
                  id="date"
                  placeholder="Last Scan Start date"
                  value={params?.start_date ?? null}
                  options={{ dateFormat: "d-m-Y" }}
                  onChange={(date) => onChange({ start_date: date[0] })}
                />
              </Col>
              <Col sm="3">
                <Flatpickr
                  className="form-control"
                  id="date"
                  placeholder="Last Scan End date"
                  value={params?.end_date ?? null}
                  options={{ dateFormat: "d-m-Y" }}
                  onChange={(date) => onChange({ end_date: date[0] })}
                />
              </Col>
            </Row>
            <Row className="mb-1">
              <Col sm="2">
                <Input
                  placeholder="User"
                  value={params?.filter_username}
                  onChange={(e) =>
                    onChange({ filter_username: e?.target?.value })
                  }
                />
              </Col>
              <Col sm="2">
                <Input
                  placeholder="Batch#"
                  value={params?.batch}
                  onChange={(e) => onChange({ batch: e?.target?.value })}
                />
              </Col>
              <Col sm="2">
                <Select
                  options={store?.statusOptions}
                  placeholder="Status"
                  value={store?.statusOptions?.find(
                    (item) => item?.value == params?.status
                  )}
                  onChange={(e) => onChange({ status: e?.value })}
                />
              </Col>
              <Col sm="6">
                <Select
                  className="react-select"
                  options={store?.storeOptions}
                  placeholder="Store"
                  isMulti
                  value={store?.storeOptions?.filter((item) =>
                    params?.store?.includes(item?.value)
                  )}
                  onChange={(data) =>
                    onChange({ store: data?.map((item) => item?.value) })
                  }
                />
              </Col>
            </Row>
            <Row>
              <Col sm="3">
                <Flatpickr
                  className="form-control"
                  id="date"
                  placeholder="Order Start date"
                  value={params?.order_start_date ?? null}
                  options={{ dateFormat: "d-m-Y" }}
                  onChange={(date) => onChange({ order_start_date: date[0] })}
                />
              </Col>
              <Col sm="3">
                <Flatpickr
                  className="form-control"
                  id="date"
                  placeholder="Order End date"
                  value={params?.order_end_date ?? null}
                  options={{ dateFormat: "d-m-Y" }}
                  onChange={(date) => onChange({ order_end_date: date[0] })}
                />
              </Col>
              <Col sm="6" className="d-flex align-items-end flex-column">
                <Button color="primary" onClick={onSearch} disabled={loading}>
                  {loading ? "Searching" : "Search"}
                </Button>
              </Col>
            </Row>
          </CardBody>
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
              sortIcon={<ChevronDown />}
              className="react-dataTable"
              paginationComponent={CustomPagination}
              data={store?.data?.data}
              subHeaderComponent={<CustomHeader />}
              onRowClicked={(row) => navigate(`/batch-list/${row?.batch_number}`)}
            />
          </div>
        </Card>
      </Fragment>
    </div>
  );
};
export default index;

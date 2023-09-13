import "@styles/react/libs/flatpickr/flatpickr.scss";
import "@styles/react/libs/react-select/_react-select.scss";
import "@styles/react/libs/tables/react-dataTable-component.scss";
import { Fragment, useEffect, useState } from "react";
import Flatpickr from "react-flatpickr";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { Button, Card, Col, Input, Row } from "reactstrap";
import {
    getAllData,
    getSearchOptions,
    getStatusOptions,
    getStoreOptions,
    setParams,
    setSearchParams,
} from "../store";
import ItemComponent from "./ItemComponent";

const index = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.graphicItemsList);
  const [loading, setLoading] = useState(false);
  const params = store?.searchParams;

  useEffect(() => {
    if (store?.params) dispatch(getAllData());
  }, [store?.params]);

  useEffect(() => {
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

  return (
    <div className="app-user-list">
      <Fragment>
        <Card className="p-2">
          <Row className="mb-1">
            <Col sm="3">
              <Input
                placeholder="Search for 1"
                value={params?.search_for_first}
                onChange={(e) =>
                  onChange({ search_for_first: e?.target?.value })
                }
              />
            </Col>
            <Col sm="3">
              <Select
                placeholder="Search in"
                options={store?.searchOptions}
                value={store?.searchOptions?.find(
                  (item) => item?.value == params?.search_in_first
                )}
                onChange={(e) => onChange({ search_in_first: e?.value })}
              />
            </Col>
            <Col sm="3">
              <Input
                placeholder="Search for 2"
                value={params?.search_for_second}
                onChange={(e) =>
                  onChange({ search_for_second: e?.target?.value })
                }
              />
            </Col>
            <Col sm="3">
              <Select
                placeholder="Search in"
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
                options={{ dateFormat: "m-d-Y" }}
                onChange={(date) => onChange({ start_date: date[0] })}
              />
            </Col>
            <Col sm="2">
              <Flatpickr
                className="form-control"
                id="date"
                placeholder="End Date"
                value={params?.end_date ?? null}
                options={{ dateFormat: "m-d-Y" }}
                onChange={(date) => onChange({ end_date: date[0] })}
              />
            </Col>
            <Col sm="2">
              <Flatpickr
                className="form-control"
                id="date"
                placeholder="Tracking Date"
                value={params?.tracking_date ?? null}
                options={{ dateFormat: "m-d-Y" }}
                onChange={(date) => onChange({ tracking_date: date[0] })}
              />
            </Col>

            <Col sm="2">
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
            <Col sm="2">
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
            <Col sm="1"></Col>
            <Col sm="1">
              <Button color="primary" onClick={onSearch} disabled={loading}>
                {loading ? "Searching" : "Search"}
              </Button>
            </Col>
          </Row>
        </Card>
        {store?.data?.length > 0 && (
          <Card className="px-1">
            <div className="d-flex justify-content-between">
              <div className="m-1">
                {store?.total?.count} Items found{" "}
                <small>(Total Quantity: {store?.total?.sum})</small>
              </div>
              <div className="m-1">
                {store?.total?.unassignedProductCount} products need routes /
                {store?.total?.unassignedOrderCount} unbatched items need routes
              </div>
            </div>
            <Row>
              {store?.data?.map((item) => {
                return (
                  <Col sm="2" className="p-1">
                    {ItemComponent(item)}
                  </Col>
                );
              })}
            </Row>
            <div className="d-flex justify-content-end">
              <ReactPaginate
                nextLabel=""
                pageCount={Number(Math.ceil(store?.total?.count / 48))}
                breakLabel="..."
                previousLabel=""
                pageRangeDisplayed={5}
                marginPagesDisplayed={2}
                forcePage={
                  store?.params?.page !== 0 ? store?.params?.page - 1 : 0
                }
                onPageChange={(page) =>
                  dispatch(setParams({ page: page.selected + 1 }))
                }
                activeClassName="active"
                pageClassName="page-item"
                breakClassName="page-item"
                nextLinkClassName="page-link"
                pageLinkClassName="page-link"
                nextClassName="page-item next"
                breakLinkClassName="page-link"
                previousLinkClassName="page-link"
                previousClassName="page-item prev"
                containerClassName="pagination react-paginate"
              />
            </div>
          </Card>
        )}
      </Fragment>
    </div>
  );
};
export default index;

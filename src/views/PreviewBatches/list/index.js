import "@styles/react/libs/flatpickr/flatpickr.scss";
import "@styles/react/libs/react-select/_react-select.scss";
import "@styles/react/libs/tables/react-dataTable-component.scss";
import { Fragment, useEffect, useState } from "react";
import Flatpickr from "react-flatpickr";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import {
  Button,
  Card,
  CardBody,
  Col,
  Input,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import {
  getAllData,
  getSearchInOptions,
  getSectionOptions,
  getStoreOptions,
  setActive,
  setSearchParams,
} from "../store";

const index = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.previewBatches);
  const [loading, setLoading] = useState(false);
  const params = store?.searchParams;

  var count = store?.data?.count - 1;
  let serial = store?.data?.serial - 1;

  useEffect(() => {
    onSearch();
  }, [store?.params, store?.active]);

  useEffect(() => {
    dispatch(getSearchInOptions());
    dispatch(getStoreOptions());
    dispatch(getSectionOptions());
  }, []);

  const onSearch = async () => {
    setLoading(true);
    await dispatch(getAllData());
    setLoading(false);
  };

  const onChange = (data) => {
    dispatch(setSearchParams(data));
  };

  const toggle = (tab) => {
    if (store?.active !== tab) {
      dispatch(setActive(tab));
    }
  };

  const CustomNavItem = ({ text, total = null, tab }) => {
    return (
      <NavItem>
        <NavLink
          active={store?.active === tab}
          onClick={() => {
            toggle(tab);
          }}
        >
          {text}
          {total != null ? ` (${total}) ` : null}
        </NavLink>
      </NavItem>
    );
  };

  return (
    <div className="app-user-list">
      <Fragment>
        <Card className="p-2">
          <Row className="mb-1">
            <Col sm="2">
              <Input
                type="text"
                id="search_for_first"
                name="search_for_first"
                placeholder="Search for"
                value={params?.search_for_first}
                onChange={(e) =>
                  onChange({ search_for_first: e?.target?.value })
                }
              />
            </Col>
            <Col sm="2">
              <Select
                className="react-select"
                classNamePrefix="select"
                placeholder="Search in"
                options={store?.searchInOptions}
                value={store?.searchInOptions?.find(
                  (item) => item?.value == params?.search_in_first
                )}
                onChange={(e) => onChange({ search_in_first: e?.value })}
              />
            </Col>
            <Col sm="2">
              <Select
                className="react-select"
                classNamePrefix="select"
                placeholder="Select Store"
                options={store?.storeOptions}
                value={store?.storeOptions?.find(
                  (item) => item?.value == params?.store
                )}
                onChange={(e) => onChange({ store: e?.value })}
              />
            </Col>
            <Col sm="2">
              <Select
                className="react-select"
                classNamePrefix="select"
                placeholder="Select Section"
                options={store?.sectionOptions}
                value={store?.sectionOptions?.find(
                  (item) => item?.value == params?.section
                )}
                onChange={(e) => onChange({ section: e?.value })}
              />
            </Col>
            <Col sm="2">
              <Flatpickr
                className="form-control"
                id="date"
                placeholder="Order Start Date"
                value={params?.start_date ?? null}
                options={{ dateFormat: "d-m-Y" }}
                onChange={(date) => onChange({ start_date: date[0] })}
              />
            </Col>
            <Col sm="2">
              <Flatpickr
                className="form-control"
                id="date"
                placeholder="Order End Date"
                value={params?.end_date ?? null}
                options={{ dateFormat: "d-m-Y" }}
                onChange={(date) => onChange({ end_date: date[0] })}
              />
            </Col>
          </Row>
          <Row className="mb-1">
            <Col sm="11"></Col>
            <Col sm="1" className="d-flex justify-content-end">
              <Button color="primary" onClick={onSearch} disabled={loading}>
                {loading ? "Searching" : "Search"}
              </Button>
            </Col>
          </Row>
        </Card>
        <Card>
          <CardBody>
            <Row>
              <Nav pills className="mb-2 orange">
                <CustomNavItem text="In Stock" tab="0" />
                <CustomNavItem text="Back Orders" tab="1" />
              </Nav>
              <TabContent activeTab={store?.active}>
                <TabPane tabId="0">
                  {loading ? (
                    <div className="text-center">
                      <h4>Loading...</h4>
                    </div>
                  ) : store?.data?.batch_routes?.length > 0 ? (
                    <span>
                      <Row>
                        <Col sm="2" className="p-1 border">
                          <b>Batch #</b>
                        </Col>
                        <Col sm="1" className="p-1 border">
                          <b>S.L #</b>
                        </Col>
                        <Col sm="1" className="p-1 border">
                          <b>Batch S.L #</b>
                        </Col>
                        <Col sm="2" className="border">
                          <b>
                            Item ID <br />
                            Order #
                          </b>
                        </Col>
                        <Col sm="3" className=" border">
                          <b>
                            Order date
                            <br />
                            Store
                          </b>
                        </Col>
                        <Col sm="1" className="p-1 border">
                          <b>SKU</b>
                        </Col>
                        <Col sm="2" className="p-1 border">
                          <b>Quantity</b>
                        </Col>
                      </Row>
                      {store?.data?.batch_routes?.map((batchRoute) => {
                        var rowSerial = 1;
                        count++;
                        return (
                          <div className="p-1 border">
                            <Row key={batchRoute.id}>
                              <Col sm="1" className="p-1 ">
                                {count}
                              </Col>
                              <Col sm="4" className="p-1 ">
                                Route: {batchRoute.batch_code} ={" "}
                                {batchRoute.batch_route_name}
                              </Col>
                              <Col sm="7" className="p-1 ">
                                Next station {">>>"} {batchRoute.next_station}
                                <hr />
                              </Col>
                            </Row>

                            {batchRoute?.items?.map((item) => {
                              serial++;
                              rowSerial++;
                              return (
                                <Row>
                                  <Col sm="2" className="p-1">
                                    <img
                                      src={item.item_thumb}
                                      alt="Item Thumbnail"
                                      height={60}
                                    />
                                  </Col>
                                  <Col sm="1" className="p-1">
                                    {serial}
                                  </Col>
                                  <Col sm="1" className="p-1">
                                    {rowSerial}
                                  </Col>
                                  <Col sm="2" className="p-1">
                                    ***{item.item_table_id}
                                    <br />
                                    <a
                                      href={`/customer-order-edit/${item.order_5p}`}
                                      target="_blank"
                                    >
                                      {item.short_order}
                                    </a>
                                  </Col>
                                  <Col sm="3" className="p-1">
                                    {item.order_date.substring(0, 10)}
                                    <br />
                                    {item.store_name}
                                  </Col>
                                  <Col sm="1" className="p-1">
                                    {item.item_code}
                                  </Col>
                                  <Col sm="2" className="p-1">
                                    {item.quantity}
                                  </Col>
                                </Row>
                              );
                            })}
                            <Row>
                              <Col sm="10" className="p-1"></Col>
                              <Col sm="2" className="p-1">
                                <span>
                                  {rowSerial - 1} of{" "}
                                  {batchRoute.batch_max_units} Max
                                </span>
                              </Col>
                            </Row>
                          </div>
                        );
                      })}
                    </span>
                  ) : (
                    <h4 className="text-center">No batches to create.</h4>
                  )}
                </TabPane>
                <TabPane tabId="1">
                  {loading ? (
                    <div className="text-center">
                      <h4>Loading...</h4>
                    </div>
                  ) : store?.data?.batch_routes?.length > 0 ? (
                    <span>
                      <Row>
                        <Col sm="2" className="p-1 border">
                          <b>Batch #</b>
                        </Col>
                        <Col sm="1" className="p-1 border">
                          <b>S.L #</b>
                        </Col>
                        <Col sm="1" className="p-1 border">
                          <b>Batch S.L #</b>
                        </Col>
                        <Col sm="2" className="border">
                          <b>
                            Item ID <br />
                            Order #
                          </b>
                        </Col>
                        <Col sm="3" className=" border">
                          <b>
                            Order date
                            <br />
                            Store
                          </b>
                        </Col>
                        <Col sm="1" className="p-1 border">
                          <b>SKU</b>
                        </Col>
                        <Col sm="2" className="p-1 border">
                          <b>Quantity</b>
                        </Col>
                      </Row>
                      {store?.data?.batch_routes?.map((batchRoute) => {
                        var rowSerial = 1;
                        count++;
                        return (
                          <div className="p-1 border">
                            <Row key={batchRoute.id}>
                              <Col sm="1" className="p-1 ">
                                {count}
                              </Col>
                              <Col sm="4" className="p-1 ">
                                Route: {batchRoute.batch_code} ={" "}
                                {batchRoute.batch_route_name}
                              </Col>
                              <Col sm="7" className="p-1 ">
                                Next station {">>>"} {batchRoute.next_station}
                                <hr />
                              </Col>
                            </Row>

                            {batchRoute?.items?.map((item) => {
                              serial++;
                              rowSerial++;
                              return (
                                <Row>
                                  <Col sm="2" className="p-1">
                                    <img
                                      src={item.item_thumb}
                                      alt="Item Thumbnail"
                                      height={60}
                                    />
                                  </Col>
                                  <Col sm="1" className="p-1">
                                    {serial}
                                  </Col>
                                  <Col sm="1" className="p-1">
                                    {rowSerial}
                                  </Col>
                                  <Col sm="2" className="p-1">
                                    ***{item.item_table_id}
                                    <br />
                                    <a
                                      href={`/customer-order-edit/${item.order_5p}`}
                                      target="_blank"
                                    >
                                      {item.short_order}
                                    </a>
                                  </Col>
                                  <Col sm="3" className="p-1">
                                    {item.order_date.substring(0, 10)}
                                    <br />
                                    {item.store_name}
                                  </Col>
                                  <Col sm="1" className="p-1">
                                    {item.item_code}
                                  </Col>
                                  <Col sm="2" className="p-1">
                                    {item.quantity}
                                  </Col>
                                </Row>
                              );
                            })}
                            <Row>
                              <Col sm="10" className="p-1"></Col>
                              <Col sm="2" className="p-1">
                                <span>
                                  {rowSerial - 1} of{" "}
                                  {batchRoute.batch_max_units} Max
                                </span>
                              </Col>
                            </Row>
                          </div>
                        );
                      })}
                    </span>
                  ) : (
                    <h4 className="text-center">No batches to create.</h4>
                  )}
                </TabPane>
              </TabContent>
            </Row>
          </CardBody>
        </Card>
      </Fragment>
    </div>
  );
};
export default index;

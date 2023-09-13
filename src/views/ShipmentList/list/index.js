import "@styles/react/libs/flatpickr/flatpickr.scss";
import "@styles/react/libs/react-select/_react-select.scss";
import moment from "moment";
import { Fragment, useEffect, useState } from "react";
import Flatpickr from "react-flatpickr";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Select from "react-select";
import { Button, Card, CardBody, Col, Input, Row, Spinner } from "reactstrap";
import RejectionModal from "../../BatchList/show/RejectModal";
import {
  getAllData,
  getSearchInOptions,
  getStoreOptions,
  packageReturned,
  setParams,
  setSearchParams,
  voidShipment,
} from "../store";

const index = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [rejectData, setRejectData] = useState(null);
  const toggle = () => setIsOpen(!isOpen);
  const [loading, setLoading] = useState(false);
  const store = useSelector((state) => state.shipmentLists);
  const { data, searchParams, params } = store;
  const { state } = useLocation();

  useEffect(() => {
    handleSearch();
  }, []);

  const handleSearch = async () => {
    setLoading(true);
    await dispatch(getAllData());
    setLoading(false);
  };

  const onChange = (data) => {
    dispatch(setSearchParams(data));
  };

  const onParamsChange = (data) => {
    dispatch(setParams(data));
  };

  const onAction = async (e, ship) => {
    const button = e?.value;
    let params = {};
    switch (button) {
      case "reprint":
        params = {
          unique_order_id: ship?.unique_order_id,
          search_for_first: ship?.shipping_id,
          search_in_first: "tracking_number",
        };
        await dispatch(getAllData(params));
        break;
      case "returned":
        params = {
          tracking_number: ship?.tracking_number,
        };
        if (
          confirm(
            "Are you sure you want to mark this package returned by carrier?"
          )
        ) {
          const res = await dispatch(packageReturned(params));
          if (res?.payload?.status == 201) {
            navigate("/customer-order-edit/" + res?.payload?.data?.order_id);
          }
        }
        break;
      case "void":
        params = {
          ship_id: ship?.id ?? null,
          order_number: ship?.order_number,
        };
        if (
          confirm(
            "Are you sure you want to void this shipment with the carrier?"
          )
        ) {
          const res = await dispatch(voidShipment(params));
          if (res?.payload?.status == 201) {
            navigate("/customer-order-edit/" + params?.order_number);
          }
        }
    }
  };

  useEffect(() => {
    dispatch(getSearchInOptions());
    dispatch(getStoreOptions());
  }, []);

  useEffect(() => {
    handleSearch();
  }, [params?.page]);

  const getTrackingUrl = (trackingNumber) => {
    if (trackingNumber) {
      if (trackingNumber.substr(0, 3) === "927" || trackingNumber[0] === "8") {
        // UPS
        return `https://wwwapps.ups.com/WebTracking/track?track=yes&trackNums=${trackingNumber}`;
      } else if (trackingNumber[0] === "L" || trackingNumber[0] === "U") {
        // USPS
        return `https://tools.usps.com/go/TrackConfirmAction?qtc_tLabels1=${trackingNumber}`;
      } else if (trackingNumber.substr(0, 3) === "937") {
        // DHL
        return `http://webtrack.dhlglobalmail.com/?trackingnumber=${trackingNumber}`;
      } else if (
        trackingNumber.substr(0, 2) === "94" ||
        trackingNumber.substr(0, 3) === "927"
      ) {
        // USPS
        return `https://tools.usps.com/go/TrackConfirmAction?tLabels=${trackingNumber}`;
      } else if (
        trackingNumber.substr(0, 1) === "2" ||
        trackingNumber.substr(0, 1) === "7"
      ) {
        // FedEx
        return `http://www.fedex.com/Tracking?tracknumbers=${trackingNumber}`;
      } else if (trackingNumber.substr(0, 2) === "1Z") {
        // FedEx
        return `http://wwwapps.ups.com/WebTracking/track?track=yes&trackNums=${trackingNumber}`;
      } else if (trackingNumber.substr(0, 2) === "42") {
        // DHL
        return `https://webtrack.dhlecs.com/?trackingnumber=${trackingNumber}`;
      } else {
        return "#";
      }
    }
  };

  return (
    <Fragment>
      <Card className="p-2">
        <Row className="mb-1">
          <Col sm="3">
            <Input
              placeholder="Search for 1"
              value={searchParams?.search_for_first}
              onChange={(e) => onChange({ search_for_first: e?.target?.value })}
            />
          </Col>
          <Col sm="3">
            <Select
              className="select-select"
              classNamePrefix="select"
              placeholder="Search in"
              options={store?.searchInOptions}
              value={store?.searchInOptions?.find(
                (item) => item?.value == searchParams?.search_in_first
              )}
              onChange={(e) => onChange({ search_in_first: e?.value })}
            />
          </Col>
          <Col sm="3">
            <Input
              placeholder="Search for 2"
              value={searchParams?.search_for_second}
              onChange={(e) =>
                onChange({ search_for_second: e?.target?.value })
              }
            />
          </Col>
          <Col sm="3">
            <Select
              className="select-select"
              classNamePrefix="select"
              placeholder="Search in"
              options={store?.searchInOptions}
              value={store?.searchInOptions?.find(
                (item) => item?.value == searchParams?.search_in_second
              )}
              onChange={(e) => onChange({ search_in_second: e?.value })}
            />
          </Col>
        </Row>
        <Row>
          <Col sm="3">
            <Flatpickr
              className="form-control"
              id="date"
              placeholder="Start Date"
              value={searchParams?.start_date ?? null}
              options={{ dateFormat: "m-d-Y" }}
              onChange={(date) => onChange({ start_date: date[0] })}
            />
          </Col>
          <Col sm="3">
            <Flatpickr
              className="form-control"
              id="date"
              placeholder="End Date"
              value={searchParams?.end_date ?? null}
              options={{ dateFormat: "m-d-Y" }}
              onChange={(date) => onChange({ end_date: date[0] })}
            />
          </Col>
          <Col sm="3">
            <Select
              className="select-select"
              classNamePrefix="select"
              placeholder="Filter By Store"
              isMulti
              options={store?.storeOptions}
              value={store?.storeOptions?.filter((item) =>
                searchParams?.store_id?.includes(item?.value)
              )}
              onChange={(data) =>
                onChange({ store_id: data?.map((item) => item?.value) })
              }
            />
          </Col>
          <Col sm="3" className="d-flex justify-content-center">
            <Button color="primary" onClick={handleSearch} disabled={loading}>
              {loading ? "Searching" : "Search"}
            </Button>
          </Col>
        </Row>
      </Card>
      <Card>
        <CardBody>
          {data?.ships?.data?.length > 0 ? (
            <div>
              <Row className="p-1 border">
                <Col md="2"></Col>
                <Col md="1">
                  <b> Order </b>
                </Col>
                <Col md="3">
                  <b> Shipment </b>
                </Col>
                <Col md="2">
                  <b> Ship Address</b>
                </Col>
                <Col md="1">
                  <b> Item</b>
                </Col>
                <Col md="2">
                  <b>Product Information</b>
                </Col>
                <Col md="1">
                  <b>Raw</b>
                </Col>
              </Row>
              {data?.ships?.data?.map((ship, index) => {
                if (ship?.items?.length > 0) {
                  const order = ship?.items[0]?.order;
                  return (
                    <Row key={index}>
                      <Col md="2" className="p-1 border">
                        <Select
                          className="select-select"
                          classNamePrefix="select"
                          name="rejection_reason"
                          options={[
                            { label: "Reprint Label", value: "reprint" },
                            { label: "Package Returned", value: "returned" },
                            { label: "Void Shipment", value: "void" },
                          ]}
                          onChange={(e) => onAction(e, ship)}
                        />
                      </Col>
                      <Col
                        md="1"
                        className="p-1 border d-flex align-items-center"
                      >
                        <div>
                          <Link
                            to={`/customer-order-edit/${order?.id}`}
                            target="_blank"
                            className="text-danger"
                          >
                            {order?.short_order}
                          </Link>
                          <br />
                          {ship?.unique_order_id}
                          <br />
                          {moment(ship?.transaction_datetime).format(
                            "dd-mm-yy"
                          )}
                          <br />
                          {moment(ship?.transaction_datetime).format("hh-mm")}
                        </div>
                      </Col>
                      <Col
                        md="3"
                        className="p-1 border d-flex align-items-center"
                      >
                        <div>
                          <Link
                            to={getTrackingUrl(ship?.shipping_id)}
                            target="_blank"
                            className="text-danger"
                          >
                            {ship?.shipping_id}
                          </Link>
                          <br />
                          {ship?.mail_class}
                          {ship?.tracking_type && (
                            <div>Tracking Type: {ship?.tracking_type}</div>
                          )}
                          {ship?.user && (
                            <div>Shipped By: {ship?.user?.username}</div>
                          )}
                        </div>
                      </Col>
                      <Col
                        md="2"
                        className="p-1 border d-flex align-items-center"
                      >
                        <div>
                          {order?.customer?.ship_full_name}
                          <br />
                          {order?.customer?.ship_company_name && (
                            <div>{order?.customer?.ship_company_name}</div>
                          )}
                          {order?.customer?.ship_address_1}
                          <br />
                          {order?.customer?.ship_address_2 && (
                            <div>{order?.customer?.ship_address_2}</div>
                          )}
                          {order?.customer?.ship_city},{" "}
                          {order?.customer?.ship_state}{" "}
                          {order?.customer?.ship_zip}
                          <br />
                          {order?.customer?.ship_country?.substr(0, 2) !=
                            "US" && <div>{order?.customer?.ship_country}</div>}
                        </div>
                      </Col>
                      <Col md="4">
                        {ship?.items?.map((item, index) => {
                          return (
                            <Row key={index} className="py-1 border">
                              <Col sm="4">
                                Item: {item?.id}
                                <br />
                                QTY: {item?.item_quantity}
                                <br />
                                {item?.batch?.batch_number && (
                                  <div>
                                    Batch:{" "}
                                    <Link
                                      to={`/batch-list/${item?.batch?.batch_number}`}
                                      target="_blank"
                                      className="text-danger"
                                    >
                                      {item?.batch?.batch_number}
                                    </Link>
                                  </div>
                                )}
                              </Col>
                              <Col sm="3">
                                <img
                                  src={item?.item_thumb}
                                  width={70}
                                  height={70}
                                />
                              </Col>
                              <Col sm="5">
                                {item?.item_description}
                                <br />
                                SKU:{" "}
                                <Link
                                  to={`/sku-product?search_for=${item?.item_code}&search_in=product_model`}
                                  target="_blank"
                                  className="text-danger"
                                >
                                  {item?.item_code}
                                </Link>
                                <br />
                                {item?.batch?.batch_number && (
                                  <Button
                                    color="danger"
                                    size="sm"
                                    onClick={() => {
                                      setRejectData({
                                        item_id: item?.id,
                                        origin: "SL",
                                      });
                                      toggle();
                                    }}
                                  >
                                    Reject
                                  </Button>
                                )}
                              </Col>
                            </Row>
                          );
                        })}
                      </Col>
                    </Row>
                  );
                }
              })}
              <ReactPaginate
                previousLabel={""}
                nextLabel={""}
                pageCount={params?.count || 1}
                activeClassName="active"
                forcePage={params?.page !== 0 ? params?.page - 1 : 0}
                onPageChange={(page) =>
                  onParamsChange({ page: page.selected + 1 })
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
            </div>
          ) : (
            <Row>
              <Col md="12">
                <h4 className="text-center">
                  {loading ? (
                    <span>
                      <Spinner size="sm" />
                      Data Loading
                    </span>
                  ) : (
                    "No Shipments Found!"
                  )}
                </h4>
              </Col>
            </Row>
          )}
        </CardBody>
      </Card>
      <RejectionModal isOpen={isOpen} toggle={toggle} data={rejectData} />
    </Fragment>
  );
};

export default index;

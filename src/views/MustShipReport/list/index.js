import "@styles/react/libs/react-select/_react-select.scss";
import moment from "moment";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Select from "react-select";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Spinner,
} from "reactstrap";
import {
  getAllData,
  getStatusOptions,
  getStoreOptions,
  setSearchParams,
} from "../store";

const index = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { data, searchParams, storeOptions, statusOptions } = useSelector(
    (state) => state.mustShipReport
  );

  useEffect(() => {
    dispatch(getStoreOptions());
    dispatch(getStatusOptions());
    handleSearch();
  }, []);

  const handleSearch = async () => {
    setLoading(true);
    await dispatch(getAllData());
    setLoading(false);
  };

  return (
    <Fragment>
      <Card>
        <CardHeader>
          <h4 className="card-title">Must Ship Report</h4>
        </CardHeader>
        <CardBody>
          <Row className="mb-1">
            <Col md="7"></Col>
            <Col md="3">
              <Select
                className="react-select"
                classNamePrefix="select"
                placeholder="Select Store"
                options={storeOptions}
                value={storeOptions?.find(
                  (obj) => obj.value === searchParams?.store_id
                )}
                onChange={(e) => {
                  dispatch(setSearchParams({ store_id: e?.value }));
                }}
                isDisabled={loading}
              />
            </Col>
            <Col md="2">
              <Button color="primary" onClick={handleSearch} disabled={loading}>
                {loading ? "Please Wait..." : "Filter by Store"}
              </Button>
            </Col>
          </Row>
          {data?.length > 0 ? (
            <div>
              {data?.map((order, index) => {
                return (
                  <div>
                    <Row key={index} className="bg-info">
                      <Col md="1" className="p-1 border">
                        Ship {moment(order?.ship_date).format("MMM-DD")}
                      </Col>
                      <Col md="2" className="p-1 border">
                        <Link
                          to={`/customer-order-edit/${order?.id}`}
                          className="text-danger"
                        >
                          {order?.short_order}
                        </Link>
                      </Col>
                      <Col md="5" className="p-1 border">
                        {order?.store
                          ? order?.store?.store_name
                          : `STORE ${order?.store_id} NOT FOUND`}
                      </Col>
                      <Col md="2" className="p-1 border">
                        {order?.customer
                          ? order?.customer?.ship_full_name
                          : `CUSTOMER NOT FOUND`}
                      </Col>
                      <Col md="2" className="p-1 border">
                        {statusOptions?.find(
                          (item) => item?.value == order?.order_status
                        ).label ?? "STATUS NOT FOUND"}
                      </Col>
                    </Row>
                    {order?.items?.map((item, index) => {
                      return (
                        <Row key={index}>
                          <Col md="1" className="p-1 border"></Col>
                          <Col md="2" className="p-1 border">
                            <img
                              src={item?.item_thumb}
                              alt='image'
                              width="50"
                            />
                          </Col>
                          <Col md="5" className="p-1 border">
                            {item?.item_description}
                          </Col>
                          <Col md="2" className="p-1 border">
                            {item?.batch_number != "0"
                              ? item?.batch_number
                              : "Unbatched"}
                          </Col>
                          <Col md="2" className="p-1 border">
                            {item?.batch &&
                            item?.batch?.station &&
                            item?.item_status == "production"
                              ? item?.batch?.station?.station_name +
                                " => " +
                                item?.batch?.station?.station_description
                              : item?.item_status}
                              <br />
                              Last Scan: {item?.batch?.change_date}
                          </Col>
                        </Row>
                      );
                    })}
                  </div>
                );
              })}
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
                    "No Data Found"
                  )}
                </h4>
              </Col>
            </Row>
          )}
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default index;

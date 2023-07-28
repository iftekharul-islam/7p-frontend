import "@styles/react/libs/flatpickr/flatpickr.scss";
import "@styles/react/libs/react-select/_react-select.scss";
import moment from "moment";
import { Fragment, useEffect, useState } from "react";
import Flatpickr from "react-flatpickr";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Input,
  Row,
  Spinner,
} from "reactstrap";
import { getAllData, getWAPData, setSearchParams } from "../store";

const index = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { data, searchParams } = useSelector((state) => state.WAP);

  useEffect(() => {
    handleSearch();
  }, []);

  const OpenBin = async () => {
    setLoading(true);
    const res = await dispatch(getWAPData());
    if (res?.payload) {
      navigate("/wap/bin");
    }
    setLoading(false);
  };

  const handleSearch = async () => {
    setLoading(true);
    await dispatch(getAllData());
    setLoading(false);
  };

  const onChange = (data) => {
    dispatch(setSearchParams(data));
  };

  return (
    <Fragment>
      <Card>
        <CardHeader>
          <h4 className="card-title">WAP</h4>
        </CardHeader>
        <CardBody>
          <Row className="mb-1">
            <Col md="1"></Col>
            <Col md="2">
              <Flatpickr
                className="form-control"
                options={{
                  dateFormat: "Y-m-d",
                }}
                value={searchParams?.end_date}
                onChange={(date) => {
                  onChange({ end_date: date[0] });
                }}
                placeholder="Older Than"
              />
            </Col>
            <Col md="2">
              <Button color="primary" onClick={handleSearch} disabled={loading}>
                {loading ? "Please Wait..." : "Search by Date"}
              </Button>
            </Col>
            <Col md="2"></Col>

            <Col md="2">
              <Input
                type="text"
                name="order_id"
                placeholder="Scan Label"
                value={searchParams?.store_id}
                onChange={(e) => onChange({ order_id: e?.target?.value })}
              />
            </Col>
            <Col md="2">
              <Button color="primary" onClick={OpenBin} disabled={loading}>
                {loading ? "Please Wait..." : "Open Bin"}
              </Button>
            </Col>
          </Row>
          {data?.bins?.length > 0 ? (
            <div>
              <Row>
                <Col md="1" className="p-1 border">
                  <b>Bin</b>
                </Col>
                <Col md="1" className="p-1 border">
                  <b> Status </b>
                </Col>
                <Col md="2" className="p-1 border">
                  <b> Last Item Added </b>
                </Col>
                <Col md="2" className="p-1 border">
                  <b> Store Order</b>
                </Col>
                <Col md="1" className="p-1 border">
                  <b> Order Date</b>
                </Col>
                <Col md="1" className="p-1 border">
                  <b> In Order</b>
                </Col>
                <Col md="1" className="p-1 border">
                  <b> In Bin</b>
                </Col>
                <Col md="1" className="p-1 border">
                  <b> Rejected</b>
                </Col>
                <Col md="2" className="p-1 border">
                  <b> Backorder</b>
                </Col>
              </Row>
              {data?.sorted_bins?.map((bin, index) => {
                if (
                  bin?.order?.shippable_items?.length == bin?.item_count &&
                  (bin?.order?.order_status == 4 ||
                    bin?.order?.order_status == 9)
                ) {
                  return (
                    <Row key={index}>
                      <Col md="1" className="p-1 border">
                        <Link to={`/wap/details/${bin?.id}`}>
                          {bin?.name}
                        </Link>
                      </Col>
                      <Col md="1" className="p-1 border text-danger">
                        Ready to Ship
                      </Col>
                      <Col md="2" className="p-1 border">
                        {bin?.last}
                      </Col>
                      <Col md="2" className="p-1 border">
                      <Link to={`/customer-order-edit/${bin?.order_id}`}>{bin?.order?.short_order}</Link>
                        {bin?.order?.store_id != "52053152" && (
                          <div>{bin?.order?.store_name}</div>
                        )}
                      </Col>
                      <Col md="1" className="p-1 border">
                        {moment(bin?.order?.order_date).format("YYYY-MM-DD")}
                      </Col>
                      <Col md="1" className="p-1 border">
                        {bin?.order?.shippable_items?.length}
                      </Col>
                      <Col md="1" className="p-1 border">
                        {bin?.item_count}
                      </Col>
                    </Row>
                  );
                }
              })}
              {data?.bins?.map((bin, index) => {
                if (
                  bin?.order?.shippable_items?.length > bin?.item_count &&
                  (bin?.order?.order_status != 4 ||
                    bin?.order?.order_status != 9)
                ) {
                  return (
                    <Row key={index}>
                      <Col md="1" className="p-1 border">
                      <Link to={`/wap/details/${bin?.id}`}>
                          {bin?.name}
                        </Link>
                      </Col>
                      <Col md="1" className="p-1 border text-danger">
                        {bin?.order?.order_status == 4 ||
                        bin?.order?.order_status == 9
                          ? "Incomplete"
                          : data?.status?.find(
                              (status) => status?.id == bin?.order?.order_status
                            )?.label}
                      </Col>
                      <Col md="2" className="p-1 border">
                        {bin?.last}
                      </Col>
                      <Col md="2" className="p-1 border">
                      <Link to={`/customer-order-edit/${bin?.order_id}`}>{bin?.order?.short_order}</Link>
                        {bin?.order?.store_id != "52053152" && (
                          <div>{bin?.order?.store_name}</div>
                        )}
                      </Col>
                      <Col
                        md="1"
                        className={
                          new Date(bin?.order?.order_date).getTime() <
                          new Date().setDate(new Date().getDate() - 7)
                            ? "p-1 border"
                            : "p-1 border text-danger"
                        }
                      >
                        {moment(bin?.order?.order_date).format("YYYY-MM-DD")}
                      </Col>
                      <Col md="1" className="p-1 border">
                        {bin?.order?.shippable_items?.length}
                      </Col>
                      <Col md="1" className="p-1 border">
                        {bin?.item_count}
                      </Col>
                      <Col md="1" className="p-1 border">
                        {bin.order.items.filter(
                          (item) => item.item_status === "rejected"
                        ).length > 0 &&
                          bin.order.items.filter(
                            (item) => item.item_status === "rejected"
                          ).length}
                      </Col>
                      <Col md="2" className="p-1 border">
                        {bin.order.items.filter(
                          (item) => item.item_status === "back order"
                        ).length > 0 &&
                          bin.order.items.filter(
                            (item) => item.item_status === "back order"
                          ).length}
                      </Col>
                    </Row>
                  );
                } else if (
                  bin?.order?.shippable_items?.length < bin?.item_count
                ) {
                  return (
                    <Row key={index}>
                      <Col md="1" className="p-1 border">
                      <Link to={`/wap/details/${bin?.id}`}>
                          {bin?.name}
                        </Link>
                      </Col>
                      <Col md="1" className="p-1 border">
                        ERROR
                      </Col>
                      <Col md="2" className="p-1 border"></Col>
                      <Col md="2" className="p-1 border">
                      <Link to={`/customer-order-edit/${bin?.order_id}`}>{bin?.order_id}</Link>
                        {bin?.order?.store_id != "52053152" && (
                          <div>{bin?.order?.store_name}</div>
                        )}
                      </Col>
                      <Col
                        md="1"
                        className={
                          new Date(bin?.order?.order_date).getTime() <
                          new Date().setDate(new Date().getDate() - 7)
                            ? "p-1 border"
                            : "p-1 border text-danger"
                        }
                      >
                        {moment(bin?.order?.order_date).format("YYYY-MM-DD")}
                      </Col>
                      <Col md="1" className="p-1 border">
                        {bin?.order?.shippable_items?.length}
                      </Col>
                      <Col md="1" className="p-1 border">
                        {bin?.item_count}
                      </Col>
                      <Col md="1" className="p-1 border">
                        {bin.order.items.filter(
                          (item) => item.item_status === "rejected"
                        ).length > 0 &&
                          bin.order.items.filter(
                            (item) => item.item_status === "rejected"
                          ).length}
                      </Col>
                      <Col md="2" className="p-1 border">
                        {bin.order.items.filter(
                          (item) => item.item_status === "back order"
                        ).length > 0 &&
                          bin.order.items.filter(
                            (item) => item.item_status === "back order"
                          ).length}
                      </Col>
                    </Row>
                  );
                }
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

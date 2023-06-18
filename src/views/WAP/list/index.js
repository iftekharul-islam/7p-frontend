import "@styles/react/libs/flatpickr/flatpickr.scss";
import "@styles/react/libs/react-select/_react-select.scss";
import { Fragment, useEffect, useState } from "react";
import Flatpickr from "react-flatpickr";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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
import { getAllData, setSearchParams } from "../store";

const index = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { data, searchParams } = useSelector((state) => state.WAP);
  console.log("🚀 ~ file: index.js:24 ~ index ~ data:", data?.sorted_bins?.length)

  useEffect(() => {
    handleSearch();
  }, []);

  const OpenBin = async () => {
    setLoading(true);
    const res = await dispatch(getShowData());
    if (res?.payload?.status) {
      navigate("/wap/details");
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
                        {bin?.name}
                      </Col>
                      <Col md="1" className="p-1 border">
                        Ready to Ship
                      </Col>
                      <Col md="2" className="p-1 border">
                        {bin?.last}
                      </Col>
                      <Col md="2" className="p-1 border">
                        {bin?.order?.short_order}
                      </Col>
                      <Col md="1" className="p-1 border">
                        {bin?.order?.order_date}
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
              <Row>
                <Col md="7"></Col>
                <Col md="3" className="p-1">
                  <b>Total</b>
                </Col>
                <Col md="2" className="p-1 d-flex justify-content-center">
                  <b>
                    {data?.bins?.reduce(function (prev, cur) {
                      return prev + cur?.total;
                    }, 0)}
                  </b>
                </Col>
              </Row>
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

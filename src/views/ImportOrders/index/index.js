import "@styles/react/libs/react-select/_react-select.scss";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Input,
  Row,
} from "reactstrap";
import { getOrderStoreOptions, getTrackingStoreOptions, importOrdersFile, importTrackingFile, importZakekeFile } from "../store";

const index = () => {
  const dispatch = useDispatch();
  const {orderStoreOptions, trackingStoreOptions} = useSelector((state) => state.imports);
  const [orderData, setOrderData] = useState({});
  console.log("🚀 ~ file: index.js:20 ~ index ~ orderData:", orderData)
  const [trackingData, setTrackingData] = useState({});
  const [zakekeData, setZakekeData] = useState({});

  const handleOrderFileChange = (e) => {
    setOrderData({...orderData, file:e.target.files[0]});
  };

  const onOrderStoreChange = (e) => {
    setOrderData({...orderData, store_id:e.value});
  };

  const handleTrackingFileChange = (e) => {
    setTrackingData({...trackingData, file:e.target.files[0]});
  };

  const onTrackingStoreChange = (e) => {
    setTrackingData({...trackingData, store_id:e.value});
  };

  const handleZakekeFileChange = (e) => {
    setZakekeData({file:e.target.files[0]});
  };

  const onOrderSubmit = () => {
    dispatch(importOrdersFile(orderData));
  };

  const onTrackingSubmit = () => {
    dispatch(importTrackingFile(trackingData));
  };

  const onZakekeSubmit = () => {
    dispatch(importZakekeFile(zakekeData));
  };

  useEffect(() => {
    dispatch(getOrderStoreOptions());
    dispatch(getTrackingStoreOptions());
  }, []);

  return (
    <Fragment>
      <Row>
        <Col sm="2"></Col>
        <Col sm="8">
          <Card className="m-2">
            <CardHeader>Upload Order File</CardHeader>
            <CardBody>
              <Row>
                <Col
                  sm="2"
                  className="d-flex align-items-center justify-content-end"
                >
                  Store:
                </Col>
                <Col sm="4">
                  <Select
                    className="React"
                    classNamePrefix="select"
                    name="color"
                    options={orderStoreOptions}
                    value={orderStoreOptions?.find((itm) => itm.value === orderData.store)}
                    onChange={onOrderStoreChange}
                  />
                </Col>
                <Col sm="4">
                  <Input type="file" name="file" accept=".csv" onChange={handleOrderFileChange}/>
                </Col>
                <Col sm="2">
                  <Button className="btn-icon d-flex" color="primary" onClick={onOrderSubmit}>
                    Import
                  </Button>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col sm="2"></Col>
      </Row>
      <Row>
        <Col sm="2"></Col>
        <Col sm="8">
          <Card className="m-2">
            <CardHeader>Import Tracking</CardHeader>
            <CardBody>
              <Row>
                <Col
                  sm="2"
                  className="d-flex align-items-center justify-content-end"
                >
                  Store:
                </Col>
                <Col sm="4">
                  <Select
                    className="React"
                    classNamePrefix="select"
                    name="color"
                    options={trackingStoreOptions}
                    value={trackingStoreOptions?.find((itm) => itm.value === trackingData.store)}
                    onChange={onTrackingStoreChange}
                  />
                </Col>
                <Col sm="4">
                  <Input type="file" name="file" accept=".csv" onChange={handleTrackingFileChange} />
                </Col>
                <Col sm="2">
                  <Button className="btn-icon d-flex" color="primary" onClick={onTrackingSubmit}>
                    Import
                  </Button>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col sm="2"></Col>
      </Row>
      <Row>
        <Col sm="2"></Col>
        <Col sm="8">
          <Card className="m-2">
            <CardHeader>Import Zakeke Orders</CardHeader>
            <CardBody>
              <Row>
                <Col sm="10">
                  <Input type="file" name="file" accept=".csv" onChange={handleZakekeFileChange}/>
                </Col>
                <Col sm="2">
                  <Button className="btn-icon d-flex" color="primary" onClick={onZakekeSubmit}>
                    Import
                  </Button>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col sm="2"></Col>
      </Row>
    </Fragment>
  );
};
export default index;

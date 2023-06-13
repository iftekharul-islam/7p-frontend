import moment from "moment";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Card, CardBody, Col, Row } from "reactstrap";

const Summary = () => {
  const {data} = useSelector((state) => state.createGraphics);
  console.log("🚀 ~ file: Summary.js:6 ~ Summary ~ store:", data)
  return (
    <Fragment>
      <Card>
        <CardBody>
          <Row className="border">
            <Col sm="4" className="border d-flex justify-content-center">
              {moment().format("MMM DD, YYYY, hh:mm A")}
            </Col>
            <Col sm="2" className="border d-flex justify-content-center">
              Totals
            </Col>
            <Col sm="3" className="border d-flex justify-content-center">
              Order Date Aging
            </Col>
            <Col sm="3" className="border d-flex justify-content-center">
              Scan Date Aging
            </Col>
          </Row>
          <Row>
            <Col sm="1" className="border d-flex justify-content-center">
              Station
            </Col>
            <Col sm="3" className="border d-flex justify-content-center">
              Description
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              lines
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              Qty
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              0-3
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              4-7
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              7+
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              0-3
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              4-7
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              7+
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Fragment>
  );
};
export default Summary;

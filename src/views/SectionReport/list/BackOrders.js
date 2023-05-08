import { useEffect, useState } from "react";
import { Col, Row } from "reactstrap";

const BackOrders = (pageData) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    if (pageData) setData(pageData?.backorders);
  }, [pageData]);

  return (
    <>
      <Row
        className="border d-flex justify-content-between bg-gradient"
        style={{ backgroundColor: "#dff0d8" }}
      >
        <Col sm="8">Back Orders</Col>
        <Col sm="4" className="d-flex justify-content-end">
          {parseFloat(
            (data?.reduce(
              (partialSum, item) => partialSum + item?.items_count,
              0
            ) /
              pageData?.total) *
              100
          ).toFixed(2)}
          %
        </Col>
      </Row>
      {data?.map((item, index) => (
        <Row key={index} className="border d-flex justify-content-between">
          <Col sm="4" className="border">
            {item?.section_name}
          </Col>
          <Col sm="1" className="border d-flex justify-content-center">
            {item?.lines_count}
          </Col>
          <Col sm="1" className="border d-flex justify-content-center">
            {item?.items_count}
          </Col>
          <Col sm="1" className="border d-flex justify-content-center">
            {item?.order_1}
          </Col>
          <Col sm="1" className="border d-flex justify-content-center">
            {item?.order_2}
          </Col>
          <Col sm="1" className="border d-flex justify-content-center">
            {item?.order_3}
          </Col>
          <Col sm="1" className="border d-flex justify-content-center">
            {item?.scan_1}
          </Col>
          <Col sm="1" className="border d-flex justify-content-center">
            {item?.scan_2}
          </Col>
          <Col sm="1" className="border d-flex justify-content-center">
            {item?.scan_3}
          </Col>
        </Row>
      ))}
      <Row className="border d-flex justify-content-between">
        <Col sm="4" className="border d-flex justify-content-end">
          Backorder SubTotals:
        </Col>
        <Col sm="1" className="border d-flex justify-content-center">
          {data?.reduce(
            (partialSum, item) => partialSum + item?.lines_count,
            0
          )}
        </Col>
        <Col sm="1" className="border d-flex justify-content-center">
          {data?.reduce(
            (partialSum, item) => partialSum + item?.items_count,
            0
          )}
        </Col>
        <Col sm="1" className="border d-flex justify-content-center">
          {data?.reduce((partialSum, item) => partialSum + item?.order_1, 0)}
        </Col>
        <Col sm="1" className="border d-flex justify-content-center">
          {data?.reduce((partialSum, item) => partialSum + item?.order_2, 0)}
        </Col>
        <Col sm="1" className="border d-flex justify-content-center">
          {data?.reduce((partialSum, item) => partialSum + item?.order_3, 0)}
        </Col>
        <Col sm="1" className="border d-flex justify-content-center">
          {data?.reduce((partialSum, item) => partialSum + item?.scan_1, 0)}
        </Col>
        <Col sm="1" className="border d-flex justify-content-center">
          {data?.reduce((partialSum, item) => partialSum + item?.scan_2, 0)}
        </Col>
        <Col sm="1" className="border d-flex justify-content-center">
          {data?.reduce((partialSum, item) => partialSum + item?.scan_3, 0)}
        </Col>
      </Row>
    </>
  );
};
export default BackOrders;

import "@styles/react/libs/react-select/_react-select.scss";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Select from "react-select";
import { Button, Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import { getAllData, getPrinterOptions } from "../store";

const index = () => {
  const dispatch = useDispatch();
  const { data, printerOptions } = useSelector((state) => state?.sentToPrinter);

  const [printer, setPrinter] = useState(null);

  useEffect(() => {
    dispatch(getAllData());
    dispatch(getPrinterOptions());
  }, []);

  const update = (e, itm, date) => {
    e.preventDefault();
    dispatch(getAllData({ printer: itm?.to_printer, date: date }));
  };

  return (
    <Fragment>
      <Card className="p-1">
        <CardHeader>
          <h4>Sent to Printer</h4>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="4">
              <Select
                className="react-select"
                classNamePrefix="react-select"
                options={printerOptions}
                value={printerOptions?.find((itm) => itm?.value === printer)}
                onChange={(e) => {
                  setPrinter(e?.value);
                }}
              />
            </Col>
            <Col sm="2">
              <Button
                color="primary"
                onClick={() => {
                  dispatch(getAllData({ printer: printer }));
                }}
              >
                Filter
              </Button>
            </Col>
          </Row>
          {data?.summary?.length > 0 && (
            <span>
              <Row className="mt-1">
                <Col sm="2" className="border py-1">
                  Sent To:
                </Col>
                <Col
                  sm="1"
                  className="border py-1 d-flex justify-content-center"
                >
                  0-3 days
                </Col>
                <Col
                  sm="1"
                  className="border py-1 d-flex justify-content-center"
                >
                  4-7 days
                </Col>
                <Col
                  sm="1"
                  className="border py-1 d-flex justify-content-center"
                >
                  7+ days
                </Col>
                <Col
                  sm="1"
                  className="border py-1 d-flex justify-content-center"
                >
                  Total
                </Col>
              </Row>
              {data?.summary?.map((itm, idx) => {
                return (
                  <Row key={idx}>
                    <Col sm="2" className="border py-1">
                      <Link onClick={(e) => update(e, itm, null)}>
                        {itm?.to_printer}
                      </Link>
                    </Col>
                    <Col
                      sm="1"
                      className="border py-1 d-flex justify-content-center"
                    >
                      <Link onClick={(e) => update(e, itm, 1)}>
                        {itm?.group_1}
                      </Link>
                    </Col>
                    <Col
                      sm="1"
                      className="border py-1 d-flex justify-content-center"
                    >
                      <Link onClick={(e) => update(e, itm, 2)}>
                        {itm?.group_2}
                      </Link>
                    </Col>
                    <Col
                      sm="1"
                      className="border py-1 d-flex justify-content-center"
                    >
                      <Link onClick={(e) => update(e, itm, 3)}>
                        {itm?.group_3}
                      </Link>
                    </Col>
                    <Col
                      sm="1"
                      className="border py-1 d-flex justify-content-center"
                    >
                      <Link onClick={(e) => update(e, itm, null)}>
                        {itm?.batch_count}
                      </Link>
                    </Col>
                  </Row>
                );
              })}
              <Row>
                <Col sm="2" className="border py-1">
                  Total
                </Col>
                <Col
                  sm="1"
                  className="border py-1 d-flex justify-content-center"
                >
                  {data?.summary?.reduce(function (prev, cur) {
                    return prev + cur.group_1;
                  }, 0)}
                </Col>
                <Col
                  sm="1"
                  className="border py-1 d-flex justify-content-center"
                >
                  {data?.summary?.reduce(function (prev, cur) {
                    return prev + cur.group_2;
                  }, 0)}
                </Col>
                <Col
                  sm="1"
                  className="border py-1 d-flex justify-content-center"
                >
                  {data?.summary?.reduce(function (prev, cur) {
                    return prev + cur.group_3;
                  }, 0)}
                </Col>
                <Col
                  sm="1"
                  className="border py-1 d-flex justify-content-center"
                >
                  {data?.summary?.reduce(function (prev, cur) {
                    return prev + cur.batch_count;
                  }, 0)}
                </Col>
              </Row>
            </span>
          )}
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default index;

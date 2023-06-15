import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Card, CardBody, CardHeader, Col, Row, Spinner } from "reactstrap";
import { getAllData } from "../store";

const index = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.printBatchSummaries);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    await dispatch(getAllData());
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Card>
      <CardHeader>
        <h4>Print Summaries</h4>
      </CardHeader>
      <CardBody>
        <Card>
          {loading ? (
            <span className="d-flex justify-content-center align-items-center">
              <span className="mx-1">
                <Spinner size="sm" />
              </span>
              Data Loading...
            </span>
          ) : (
            <span>
              <div className="border p-1">
                <h4>Batches in Production</h4>
                {data?.production?.length > 0 ? (
                  <span>
                    <Row>
                      <Col md="2" className="d-flex justify-content-start">
                        <b>Department</b>
                      </Col>
                      <Col md="3"></Col>
                      <Col md="3" className="d-flex justify-content-end">
                        <b>Production Station</b>
                      </Col>
                      <Col md="2" className="d-flex justify-content-end">
                        <b>Summaries to Print</b>
                      </Col>
                      <Col md="2"></Col>
                    </Row>
                    {data?.production?.map((batch, index) => (
                      <Row
                        key={index}
                        className={batch?.to_printer_date != null && "bg-info"}
                      >
                        <Col sm="2"></Col>
                      </Row>
                    ))}
                  </span>
                ) : (
                  <span className="d-flex justify-content-center align-items-center">
                    All production summaries printed
                  </span>
                )}
              </div>
              <br />
              <div className="border p-1">
                <h4 class="page-header">Batches in Graphics</h4>
                {data?.graphics?.length > 0 ? (
                  <span>
                    <Row>
                      <Col md="6" className="d-flex justify-content-start">
                        <b>Production Station</b>
                      </Col>
                      <Col md="3" className="d-flex justify-content-center">
                        <b>First order</b>
                      </Col>
                      <Col md="3" className="d-flex justify-content-end">
                        <b>Batches</b>
                      </Col>
                    </Row>
                    {data?.graphics?.map((row, index) => (
                      <span key={index}>
                        <hr />
                        <Row>
                          <Col md="6" className="d-flex justify-content-start">
                            {row?.production_station?.station_description}
                          </Col>
                          <Col md="3" className="d-flex justify-content-center">
                            {moment(row?.date).format("YYYY-MM-DD")}
                          </Col>
                          <Col md="3" className="d-flex justify-content-end">
                            <Link to="/print-sublimation">{row?.count}</Link>
                          </Col>
                        </Row>
                      </span>
                    ))}
                    <hr />
                    <Row>
                      <Col md="6"></Col>
                      <Col md="3" className="d-flex justify-content-end">
                        <b>Totol</b>
                      </Col>
                      <Col md="3" className="d-flex justify-content-end">
                        <b>
                          {data?.summary?.reduce(
                            (accumulator, row) => accumulator + row?.count,
                            0
                          )}
                        </b>
                      </Col>
                    </Row>
                  </span>
                ) : (
                  <span className="d-flex justify-content-center align-items-center">
                    All graphics summaries printed
                  </span>
                )}
              </div>
              <br />
              <div className="border p-1">
                <h4 class="page-header">Summaries printed today</h4>
                {data?.graphics?.length > 0 ? (
                  <span>
                    <Row>
                      <Col md="6" className="d-flex justify-content-start">
                        <b>Production Station</b>
                      </Col>
                      <Col md="3" className="d-flex justify-content-center">
                        <b>First order</b>
                      </Col>
                      <Col md="3" className="d-flex justify-content-end">
                        <b>Batches</b>
                      </Col>
                    </Row>
                    {data?.graphics?.map((row, index) => (
                      <span key={index}>
                        <hr />
                        <Row>
                          <Col md="6" className="d-flex justify-content-start">
                            {row?.production_station?.station_description}
                          </Col>
                          <Col md="3" className="d-flex justify-content-center">
                            {moment(row?.date).format("YYYY-MM-DD")}
                          </Col>
                          <Col md="3" className="d-flex justify-content-end">
                            <Link to="/print-sublimation">{row?.count}</Link>
                          </Col>
                        </Row>
                      </span>
                    ))}
                    <hr />
                    <Row>
                      <Col md="6"></Col>
                      <Col md="3" className="d-flex justify-content-end">
                        <b>Totol</b>
                      </Col>
                      <Col md="3" className="d-flex justify-content-end">
                        <b>
                          {data?.summary?.reduce(
                            (accumulator, row) => accumulator + row?.count,
                            0
                          )}
                        </b>
                      </Col>
                    </Row>
                  </span>
                ) : (
                  <span className="d-flex justify-content-center align-items-center">
                    No batch summaries printed today
                  </span>
                )}
              </div>
            </span>
          )}
        </Card>
      </CardBody>
    </Card>
  );
};

export default index;

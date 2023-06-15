import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Spinner,
} from "reactstrap";
import { getAllData, getPrintData } from "../store";

const index = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  const productionClick = async (e, batch, name) => {
    e.preventDefault();
    let params = {
      store: batch?.store_id,
      type: batch?.type,
    };
    if (name == "production") {
      params = {
        ...params,
        printed: "0",
        section: batch?.section_id,
        production_station: batch?.production_station_id,
      };
    } else if (name == "graphics") {
      params = {
        ...params,
        printed: "2",
        graphic_dir: batch?.graphic_dir,
      };
    }
    const res = await dispatch(getPrintData(params));
    if (res?.payload?.status == 200) {
      navigate("/print", { state: res?.payload?.data });
    }
  };

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
                      <Col md="2">
                        <b>Department</b>
                      </Col>
                      <Col md="2"></Col>
                      <Col md="3">
                        <b>Production Station</b>
                      </Col>
                      <Col md="2" className="d-flex justify-content-center">
                        <b>Summaries to Print</b>
                      </Col>
                      <Col md="3"></Col>
                    </Row>
                    {data?.production?.map((batch, index) => (
                      <span>
                        <hr />
                        <Row
                          key={index}
                          className={
                            batch?.to_printer_date != null && "bg-info"
                          }
                        >
                          <Col sm="2">
                            {batch?.section
                              ? batch?.section?.section_name
                              : "No Section"}
                            {batch?.type}
                          </Col>
                          <Col sm="2">{batch?.store?.store_name}</Col>

                          <Col sm="3">
                            {`${batch?.production_station?.station_name}=>${batch?.production_station?.station_description}`}
                          </Col>
                          <Col sm="2" className="d-flex justify-content-center">
                            {batch?.count}
                          </Col>
                          <Col sm="3" className="d-flex justify-content-start">
                            <Button
                              color="primary"
                              size="sm"
                              onClick={(e) =>
                                productionClick(e, batch, "production")
                              }
                            >
                              Print {batch?.count} for{" "}
                              {batch?.production_station?.station_name}
                            </Button>
                          </Col>
                        </Row>
                      </span>
                    ))}
                  </span>
                ) : (
                  <span className="d-flex justify-content-center align-items-center bg-info p-1">
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
                      <Col md="5" className="d-flex justify-content-start">
                        <b>Graphic Directory</b>
                      </Col>
                      <Col md="2"></Col>
                      <Col md="3" className="d-flex justify-content-center">
                        <b>Summaries to Print</b>
                      </Col>
                      <Col md="2"></Col>
                    </Row>
                    {data?.graphics?.map((batch, index) => (
                      <span key={index}>
                        <hr />
                        <Row>
                          <Col md="5" className="d-flex justify-content-start">
                            {batch?.graphic_dir} {batch?.type}
                          </Col>
                          <Col md="2">{batch?.store?.store_name}</Col>
                          <Col md="3" className="d-flex justify-content-center">
                            {batch?.count}
                          </Col>
                          <Col md="2" className="d-flex justify-content-start">
                            <Button
                              color="primary"
                              size="sm"
                              onClick={(e) =>
                                productionClick(e, batch, "graphics")
                              }
                            >
                              Print {batch?.count} in {batch?.graphic_dir}
                            </Button>
                          </Col>
                        </Row>
                      </span>
                    ))}
                  </span>
                ) : (
                  <span className="d-flex justify-content-center align-items-center bg-info p-1">
                    All graphics summaries printed
                  </span>
                )}
              </div>
              <br />
              <div className="border p-1">
                <h4 class="page-header">Summaries printed today</h4>
                {data?.today?.length > 0 ? (
                  <span>
                    <Row>
                      <Col md="2" className="d-flex justify-content-start">
                        <b>Department</b>
                      </Col>
                      <Col md="4" className="d-flex justify-content-start">
                        <b>First Production Station</b>
                      </Col>
                      <Col md="2" className="d-flex justify-content-center">
                        <b>Summaries Printed</b>
                      </Col>
                      <Col md="2" className="d-flex justify-content-start">
                        <b>Printed By</b>
                      </Col>
                      <Col md="2" className="d-flex justify-content-start">
                        <b>Print Time</b>
                      </Col>
                    </Row>
                    {data?.today?.map((batch, index) => (
                      <span key={index}>
                        <hr />
                        <Row>
                          <Col md="2" className="d-flex justify-content-start">
                            {batch?.section?.section_name}
                          </Col>
                          <Col md="4" className="d-flex justify-content-start">
                            {`${batch?.production_station?.station_name}=>${batch?.production_station?.station_description}`}
                          </Col>
                          <Col md="2" className="d-flex justify-content-center">
                            {batch?.count}
                          </Col>
                          <Col md="2" className="d-flex justify-content-start">
                            {batch?.summary_user?.username}
                          </Col>
                          <Col md="2" className="d-flex justify-content-start">
                            {batch?.summary_date}
                          </Col>
                        </Row>
                      </span>
                    ))}
                    <hr />
                  </span>
                ) : (
                  <span className="d-flex justify-content-center align-items-center bg-info p-1">
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

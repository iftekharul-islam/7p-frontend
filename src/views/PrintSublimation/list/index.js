import "@styles/react/libs/flatpickr/flatpickr.scss";
import "@styles/react/libs/react-select/_react-select.scss";
import moment from "moment";
import { useEffect, useState } from "react";
import Flatpickr from "react-flatpickr";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Select from "react-select";
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
import {
  getAllData,
  getAllQueues,
  getPrinterOptions,
  getStationsOptions,
  printAllSublimation,
  setSearchParams,
} from "../store";

const index = () => {
  const dispatch = useDispatch();
  const {
    data,
    queues,
    searchParams,
    printerOptions,
    typeOption,
    stationsOptions,
    storeOptions,
  } = useSelector((state) => state.printSublimations);
  const [loading, setLoading] = useState(false);

  const onChange = (data) => {
    dispatch(setSearchParams(data));
  };

  const getData = async () => {
    setLoading(true);
    await dispatch(getAllData());
    setLoading(false);
  };

  const getQueueData = async () => {
    await dispatch(getAllQueues());
  };

  const printAll = () => {
    dispatch(printAllSublimation());
  };

  const batchesClicked = async (production_station_id) => {
    await dispatch(
      setSearchParams({ production_station_id: [production_station_id] })
    );
    getData();
  };

  useEffect(() => {
    getData();
    dispatch(getPrinterOptions());
    dispatch(getStationsOptions());
    getQueueData();
  }, []);

  return (
    <Card>
      <CardHeader>
        <h4>Send Graphics to Printer</h4>
      </CardHeader>
      <CardBody>
        <Row className="mb-1">
          <Col md="7"></Col>
          <Col md="3">
            <Select
              className="react-select"
              classNamePrefix="select"
              options={printerOptions}
              value={printerOptions.find(
                (obj) => obj.value === searchParams?.printer
              )}
              onChange={(e) => {
                onChange({ printer: e?.value });
              }}
            />
          </Col>
          <Col md="2">
            <Button color="primary" onClick={printAll}>
              Print All
            </Button>
          </Col>
        </Row>
        <Card className="border rounded">
          <Row className="m-1">
            <Col md="1">
              <Input
                type="text"
                placeholder="Batch Number"
                value={searchParams?.select_batch}
                onChange={(e) => {
                  onChange({ ...searchParams, select_batch: e.target.value });
                }}
              />
            </Col>
            <Col md="1">
              <Select
                className="react-select"
                classNamePrefix="select"
                placeholder="Type"
                options={typeOption}
                value={typeOption.find(
                  (obj) => obj.value === searchParams?.type
                )}
                onChange={(e) => {
                  onChange({ type: e?.value });
                }}
              />
            </Col>
            <Col md="3">
              <Select
                className="react-select"
                classNamePrefix="select"
                placeholder="Select Section"
                isMulti
                options={stationsOptions}
                value={stationsOptions.filter((obj) =>
                  searchParams?.production_station_id?.includes(obj.value)
                )}
                onChange={(e) => {
                  onChange({
                    ...searchParams,
                    production_station_id: e?.map((obj) => obj.value),
                  });
                }}
              />
            </Col>
            <Col md="3">
              <Select
                className="react-select"
                classNamePrefix="select"
                placeholder="Select Store"
                isMulti
                options={storeOptions}
                value={storeOptions.filter((obj) =>
                  searchParams?.store_id?.includes(obj.value)
                )}
                onChange={(e) => {
                  onChange({
                    ...searchParams,
                    store_id: e?.map((obj) => obj.value),
                  });
                }}
              />
            </Col>
            <Col md="2">
              <Flatpickr
                className="form-control"
                placeholder="From"
                value={searchParams?.from_date ?? null}
                options={{ dateFormat: "d-m-Y" }}
                onChange={(date) => onChange({ from_date: date[0] })}
              />
            </Col>
            <Col md="2">
              <Flatpickr
                className="form-control"
                placeholder="To"
                value={searchParams?.to_date ?? null}
                options={{ dateFormat: "d-m-Y" }}
                onChange={(date) => onChange({ to_date: date[0] })}
              />
            </Col>
          </Row>
          <Row className="m-1 mt-0">
            <Col md="10">
              <Select
                className="react-select"
                classNamePrefix="select"
                placeholder="Mass set a printer"
                options={printerOptions}
                value={printerOptions.find(
                  (obj) => obj.value === searchParams?.set_printer
                )}
                onChange={(e) => {
                  onChange({ set_printer: e?.value });
                }}
              />
            </Col>
            <Col md="2">
              <Button color="primary" onClick={getData} disabled={loading}>
                {loading ? (
                  <span className="d-flex justify-content-center">
                    <Spinner size="sm" />
                    Wait...
                  </span>
                ) : (
                  "Show"
                )}
              </Button>
            </Col>
          </Row>
        </Card>
        <Card>
          {loading ? (
            <span className="d-flex justify-content-center align-items-center">
              <span className="mx-1">
                <Spinner size="sm" />
              </span>
              Data Loading...
            </span>
          ) : (
            <Row>
              <Col md="10">
                {data?.batches?.length > 0 ? (
                  <span>
                    <Row>
                      <h5>{data?.batches?.length} batches found</h5>
                      <hr />
                    </Row>
                    {data?.batches?.map((batch, index) => (
                      <span>
                        <Row
                          key={index}
                          className={
                            batch?.to_printer_date != null && "bg-info"
                          }
                        >
                          <Col sm="2">
                            <Link to={`/batch-list/${batch?.batch_number}`}>
                              <strong>{batch?.batch_number}-</strong>
                            </Link>
                            {batch?.items?.length > 1 && (
                              <span>{batch?.items?.length} Items-</span>
                            )}
                            {batch?.store_id && (
                              <strong className="text-danger">
                                {data?.stores?.find(
                                  (item) => item?.value == batch?.store_id
                                )?.label ?? null}
                              </strong>
                            )}
                          </Col>
                          <Col sm="1"></Col>
                          <Col sm="1">
                            <a href={`/batch-list/${batch?.batch_number}`}>
                              <img
                                src={batch?.items[0]?.item_thumb}
                                alt="print"
                                width="50px"
                                height="50px"
                              />
                            </a>
                          </Col>
                          <Col sm="3">
                            {batch?.type === "P" && (
                              <div>
                                <strong style={{ color: "red" }}>
                                  IN PRODUCTION:
                                </strong>
                              </div>
                            )}
                            {batch?.type === "Q" && (
                              <div>
                                <strong style={{ color: "red" }}>IN QC:</strong>
                              </div>
                            )}
                            {batch?.production_station ? (
                              <div>
                                Give to:{" "}
                                {batch?.production_station?.station_description}
                              </div>
                            ) : (
                              <div>
                                PRODUCTION STATION NOT FOUND:{" "}
                                {batch?.production_station_id}
                              </div>
                            )}
                            {batch?.status !== "active" && (
                              <div>
                                Batch Status:{" "}
                                <strong style={{ color: "red" }}>
                                  {batch?.status}
                                </strong>
                              </div>
                            )}
                            <br />
                            First Order Date:{" "}
                            {moment(batch?.min_order_date).format("DD-MM-YYYY")}
                          </Col>
                          <Col sm="1">
                            Graphic
                            <br />
                            QTY: {batch?.items[0]?.item_quantity}
                          </Col>
                          <Col sm="1">
                            {(batch?.graphic_found == "Found" ||
                              batch?.graphic_found == "Unknown") && (
                              <a
                                href="batches/view_graphic?batch_number=%s"
                                target="_blank"
                              >
                                View Graphics
                              </a>
                            )}
                          </Col>
                          <Col sm="2">
                            <div className="d-flex align-items-center">
                              <span>Scale: </span>
                              <Input  value="100%"/>
                            </div>
                            <div>
                              pdf <Input type="checkbox" />
                            </div>
                          </Col>
                          <Col sm="1">Rejects</Col>
                          <hr />
                        </Row>
                        {batch?.items?.map((item, index) => {
                          item?.rejections &&
                            item?.rejections?.map((reject, index) => {
                              return (
                                <Row key={index}>
                                  <Col sm="3"></Col>
                                  <Col sm="9">
                                    Item {item?.id} Rejected{" "}
                                    {reject?.created_at}
                                    by {reject?.user?.username}
                                    {reject?.rejection_reason_info &&
                                      "-" +
                                        reject?.rejection_reason_info
                                          ?.rejection_message}
                                    - {reject?.rejection_message}
                                  </Col>
                                </Row>
                              );
                            });
                        })}
                      </span>
                    ))}
                  </span>
                ) : data?.summary?.length > 0 ? (
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
                    {data?.summary?.map((row, index) => (
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
                            <Link
                              onClick={(e) => {
                                e.preventDefault();
                                batchesClicked(row?.production_station_id);
                              }}
                            >
                              {row?.count}
                            </Link>
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
                            (accumulator, row) =>
                              accumulator + parseInt(row?.count),
                            0
                          )}
                        </b>
                      </Col>
                    </Row>
                  </span>
                ) : (
                  <span className="d-flex justify-content-center align-items-center">
                    Nothing Found
                  </span>
                )}
              </Col>
              <Col md="2">
                {queues ? (
                  !Array.isArray(queues) ? (
                    <h5>{queues}</h5>
                  ) : (
                    queues?.map((queue, unit) => (
                      <Card key={index} className="mb-1">
                        <CardHeader>
                          <h5>{unit.replace("_", " ") + " " + queue?.TOTAL}</h5>
                        </CardHeader>
                        <CardBody>
                          <b>STAGED XML</b>
                          {queue?.STAGED_XML?.length > 0 ? (
                            queue?.STAGED_XML?.map((row, index) => (
                              <div key={index}>
                                {row} <br />
                              </div>
                            ))
                          ) : (
                            <div>
                              Nothing
                              <br />
                            </div>
                          )}

                          <b>HOT FOLDER</b>
                          {queue?.HOT_FOLDER?.length > 0 ? (
                            queue?.HOT_FOLDER?.map((row, index) => (
                              <div key={index}>
                                {row} <br />
                              </div>
                            ))
                          ) : (
                            <div>
                              Nothing
                              <br />
                            </div>
                          )}
                          <b>RIP_QUEUE</b>
                          {queue?.RIP_QUEUE?.length > 0 ? (
                            queue?.RIP_QUEUE?.map((row, index) => (
                              <div key={index}>
                                {row} <br />
                              </div>
                            ))
                          ) : (
                            <div>
                              Nothing
                              <br />
                            </div>
                          )}
                          <b>PRINT_QUEUE</b>
                          {queue?.PRINT_QUEUE?.length > 0 ? (
                            queue?.PRINT_QUEUE?.map((row, index) => (
                              <div key={index}>
                                {row} <br />
                              </div>
                            ))
                          ) : (
                            <div>
                              Nothing
                              <br />
                            </div>
                          )}
                        </CardBody>
                      </Card>
                    ))
                  )
                ) : (
                  <span className="d-flex justify-content-center align-items-center">
                    <Spinner size="sm" className="mx-1" />
                    QUEUE is loading...
                  </span>
                )}
              </Col>
            </Row>
          )}
        </Card>
      </CardBody>
    </Card>
  );
};

export default index;

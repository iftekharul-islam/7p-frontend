import "@styles/react/libs/flatpickr/flatpickr.scss";
import "@styles/react/libs/react-select/_react-select.scss";
import moment from "moment";
import { useEffect, useState } from "react";
import Flatpickr from "react-flatpickr";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
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
import ViewComponent from "./ViewComponent";

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
  const [params, setParams] = useSearchParams();
  const selectBatch = params.get("select_batch");

  const [loading, setLoading] = useState(false);

  const onChange = (data) => {
    dispatch(setSearchParams(data));
  };

  const setData = async (data) => {
    getData();
    await dispatch(setSearchParams({ select_batch: selectBatch }));
  };

  useEffect(() => {
    setData();
  }, [selectBatch]);

  const getData = async () => {
    setLoading(true);

    await dispatch(getAllData({ select_batch: selectBatch ?? null }));
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
                  <ViewComponent loading={loading} setLoading={setLoading} />
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

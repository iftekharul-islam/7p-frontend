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
  getPrinterOptions,
  getStationsOptions,
  setSearchParams,
} from "../store";

const index = () => {
  const dispatch = useDispatch();
  const {
    data,
    searchParams,
    printerOptions,
    typeOption,
    stationsOptions,
    storeOptions,
  } = useSelector((state) => state.printSublimations);
    console.log("🚀 ~ file: index.js:36 ~ index ~ data:", data?.batches[0])
  const [loading, setLoading] = useState(false);

  const onChange = (data) => {
    dispatch(setSearchParams(data));
  };

  const getData = async () => {
    setLoading(true);
    await dispatch(getAllData());
    setLoading(false);
  };

  const printAll = () => {
    console.log("print all");
  };

  useEffect(() => {
    // getData();
    dispatch(getPrinterOptions());
    dispatch(getStationsOptions());
  }, []);

  return (
    <Card>
      <CardHeader>
        <h4>Send Graphics to Printer</h4>
      </CardHeader>
      <CardBody>
        <Row className="mb-1">
          <Col md="9"></Col>
          <Col md="2">
            <Select
              className="react-select"
              classNamePrefix="select"
              options={printerOptions}
              value={printerOptions.find(
                (obj) => obj.value === searchParams?.printer
              )}
              onChange={(e) => {
                onChange({ ...searchParams, printer: e?.value });
              }}
            />
          </Col>
          <Col md="1">
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
                  onChange({ ...searchParams, type: e?.value });
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
                  searchParams?.section?.includes(obj.value)
                )}
                onChange={(e) => {
                  onChange({
                    ...searchParams,
                    section: e?.map((obj) => obj.value),
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
                id="date"
                placeholder="From"
                value={searchParams?.from_date ?? null}
                options={{ dateFormat: "d-m-Y" }}
                onChange={(date) => onChange({ from_date: date[0] })}
              />
            </Col>
            <Col md="2">
              <Flatpickr
                className="form-control"
                id="date"
                placeholder="To"
                value={searchParams?.to_date ?? null}
                options={{ dateFormat: "d-m-Y" }}
                onChange={(date) => onChange({ to_date: date[0] })}
              />
            </Col>
          </Row>
          <Row className="m-1 mt-0">
            <Col md="11">
              <Select
                className="react-select"
                classNamePrefix="select"
                placeholder="Mass set a printer"
                options={printerOptions}
                value={printerOptions.find(
                  (obj) => obj.value === searchParams?.set_printer
                )}
                onChange={(e) => {
                  onChange({ ...searchParams, set_printer: e?.value });
                }}
              />
            </Col>
            <Col md="1">
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
              <Col md="7">
                {data?.batches?.length > 0 ? (
                  <span>
                    <Row>
                      <h5>{data?.batches?.length} batches found</h5>
                    </Row>
                    {data?.batches?.map((batch, index) => (
                      <Row key={index} className={batch?.to_printer_date !=null && "bg-info"}>
                        <Col sm="2">
                          
                        </Col>
                        </Row>
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
                    Nothing Found
                  </span>
                )}
              </Col>
              <Col md="1"></Col>
              <Col md="4">
                {!Array.isArray(data?.queues) ? (
                  <h5>{data?.queues}</h5>
                ) : (
                  data?.queues?.map((queue, unit) => (
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

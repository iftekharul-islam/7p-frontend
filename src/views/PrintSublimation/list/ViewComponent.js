import Api from "@src/http";
import "@styles/react/libs/flatpickr/flatpickr.scss";
import "@styles/react/libs/react-select/_react-select.scss";
import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";
import { Button, Col, Form, Input, Row } from "reactstrap";
import { printSublimation } from "../store";

const ViewComponent = (loading, setLoading) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, printerOptions } = useSelector(
    (state) => state.printSublimations
  );
  const [printData, setPrintData] = useState([]);
  const [xmlUrl, setXmlUrl] = useState(null);
  const [xmlData, setXmlData] = useState(null);

  const fetchXML = async () => {
    try {
      const response = await Api.get(xmlUrl);
      setXmlData(response.data);
    } catch (error) {
      console.error("Error fetching XML:", error);
    }
  };
  useEffect(() => {
    if (xmlUrl) {
      fetchXML();
    }
  }, [xmlUrl]);

  useEffect(() => {
    if (data?.batches?.length > 0) {
      setPrintData(
        data?.batches?.map((batch) => {
          return { batch_number: batch?.batch_number };
        })
      );
    }
  }, [data?.batches]);

  const onChange = (batch, name, value) => {
    const targetData = printData?.find((item) => item?.batch_number == batch);
    const restData = printData?.filter((item) => item?.batch_number != batch);
    setPrintData([...restData, { ...targetData, [name]: value }]);
  };

  const handleMove = async (batch_number) => {
    onChange(batch_number, "loader", true);
    const data = printData?.find((item) => item?.batch_number == batch_number);
    if (data) {
      const res = await dispatch(printSublimation(data));
      if (res?.payload) {
        window.open(res?.payload, "_blank");
      }
    } else {
      alert("Please select Printer");
    }
    onChange(batch_number, "loader", false);
  };

  return (
    <span>
      <Row>
        <div>
          {xmlData ? (
            <a
              href={`data:text/xml;charset=utf-8,${encodeURIComponent(
                xmlData
              )}`}
              download="data.xml"
            >
              Download XML
            </a>
          ) : (
            <p>Loading XML...</p>
          )}
        </div>
        <h5>{data?.batches?.length} batches found</h5>
        <hr />
      </Row>
      {data?.batches?.map((batch, index) => (
        <span>
          <Row
            key={index}
            className={batch?.to_printer_date != null && "bg-info"}
          >
            <Col sm="3">
              <Link to={`/batch-list/${batch?.batch_number}`}>
                <strong>{batch?.batch_number}-</strong>
              </Link>
              {batch?.items?.length > 1 && (
                <span>{batch?.items?.length} Items-</span>
              )}
              {batch?.store_id && (
                <strong className="text-danger">
                  {data?.stores?.find((item) => item?.value == batch?.store_id)
                    ?.label ?? null}
                </strong>
              )}

              <div>
                {batch.route.csv_extension.toLowerCase().includes("soft") ? (
                  <div className="button-box print-group">
                    <Col lg="3">
                      <Input
                        type="hidden"
                        name="batch_number"
                        value={batch.batch_number}
                      />
                      <Input type="hidden" name="printer" value="SOFT-1" />
                      <Button
                        id={`move_${batch.batch_number}`}
                        className="btn btn-xs btn-primary"
                        onClick={() => handleMove(batch.batch_number, "SOFT-1")}
                      >
                        SOFT-1
                      </Button>
                    </Col>
                    <Col lg="3">
                      <Input
                        type="hidden"
                        name="batch_number"
                        value={batch.batch_number}
                      />
                      <Input type="hidden" name="printer" value="SOFT-2" />
                      <Button
                        id={`move_${batch.batch_number}`}
                        className="btn btn-xs btn-info"
                        onClick={() => handleMove(batch.batch_number, "SOFT-2")}
                      >
                        SOFT-2
                      </Button>
                    </Col>
                    <Col lg="3">
                      <Form
                        id={`move_form_${batch.batch_number}${
                          Math.floor(Math.random() * 90) + 10
                        }`}
                      >
                        <Input
                          type="hidden"
                          name="batch_number"
                          value={batch.batch_number}
                        />
                        <Input type="hidden" name="printer" value="SOFT-3" />
                        <Button
                          id={`move_${batch.batch_number}`}
                          className="btn btn-xs btn-primary"
                          onClick={() =>
                            handleMove(batch.batch_number, "SOFT-3")
                          }
                        >
                          SOFT-3
                        </Button>
                      </Form>
                    </Col>
                    <Col lg="3">
                      <Form
                        id={`move_form_${batch.batch_number}${
                          Math.floor(Math.random() * 90) + 10
                        }`}
                      >
                        <Input
                          type="hidden"
                          name="batch_number"
                          value={batch.batch_number}
                        />
                        <Input type="hidden" name="printer" value="EPSON-5" />
                        <Button
                          id={`move_${batch.batch_number}`}
                          className="btn btn-xs btn-warning"
                          onClick={() =>
                            handleMove(batch.batch_number, "EPSON-5")
                          }
                        >
                          EPSON-5
                        </Button>
                      </Form>
                    </Col>
                  </div>
                ) : batch.route.csv_extension.toLowerCase().includes("hard") ? (
                  <div className="button-box print-group">
                    <Col lg="4">
                      <Form
                        id={`move_form_${batch.batch_number}${
                          Math.floor(Math.random() * 90) + 10
                        }`}
                      >
                        <Input
                          type="hidden"
                          name="batch_number"
                          value={batch.batch_number}
                        />
                        <Input type="hidden" name="printer" value="HARD-1" />
                        <Button
                          id={`move_${batch.batch_number}`}
                          className="btn btn-xs btn-danger"
                          onClick={() =>
                            handleMove(batch.batch_number, "HARD-1")
                          }
                        >
                          Send to HARD-1
                        </Button>
                      </Form>
                    </Col>
                    <Col lg="4">
                      <Form
                        id={`move_form_${batch.batch_number}${
                          Math.floor(Math.random() * 90) + 10
                        }`}
                      >
                        <Input
                          type="hidden"
                          name="batch_number"
                          value={batch.batch_number}
                        />
                        <Input type="hidden" name="printer" value="HARD-2" />
                        <Button
                          id={`move_${batch.batch_number}`}
                          className="btn btn-xs btn-success"
                          onClick={() =>
                            handleMove(batch.batch_number, "HARD-2")
                          }
                        >
                          Send to HARD-2
                        </Button>
                      </Form>
                    </Col>
                    <Col lg="4">
                      <Form
                        id={`move_form_${batch.batch_number}${
                          Math.floor(Math.random() * 90) + 10
                        }`}
                      >
                        <Input
                          type="hidden"
                          name="batch_number"
                          value={batch.batch_number}
                        />
                        <Input type="hidden" name="printer" value="HARD-3" />
                        <Button
                          id={`move_${batch.batch_number}`}
                          className="btn btn-xs btn-danger"
                          onClick={() =>
                            handleMove(batch.batch_number, "HARD-3")
                          }
                        >
                          Send to HARD-3
                        </Button>
                      </Form>
                    </Col>
                  </div>
                ) : (
                  <div className="print-group">
                    <Col xs="12">
                      <Select
                        className="react-select"
                        classNamePrefix="select"
                        options={printerOptions}
                        onChange={(e) => {
                          onChange(batch?.batch_number, "printer", e?.value);
                        }}
                        placeholder="Select Printer"
                      />
                      <Button
                        color="primary"
                        onClick={() => handleMove(batch.batch_number)}
                      >
                        {printData?.find(
                          (item) => item?.batch_number == batch?.batch_number
                        )?.loader
                          ? "Loading"
                          : "Send"}
                      </Button>
                    </Col>
                  </div>
                )}
              </div>
            </Col>
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
                  <strong style={{ color: "red" }}>IN PRODUCTION:</strong>
                </div>
              )}
              {batch?.type === "Q" && (
                <div>
                  <strong style={{ color: "red" }}>IN QC:</strong>
                </div>
              )}
              {batch?.production_station ? (
                <div>
                  Give to: {batch?.production_station?.station_description}
                </div>
              ) : (
                <div>
                  PRODUCTION STATION NOT FOUND: {batch?.production_station_id}
                </div>
              )}
              {batch?.status !== "active" && (
                <div>
                  Batch Status:{" "}
                  <strong style={{ color: "red" }}>{batch?.status}</strong>
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
                <a href="batches/view_graphic?batch_number=%s" target="_blank">
                  View Graphics
                </a>
              )}
            </Col>
            <Col sm="2">
              <div className="d-flex align-items-center">
                <span>Scale: </span>
                <Input
                  onChange={(e) =>
                    onChange(batch?.batch_number, "scale", e?.target?.value)
                  }
                />
                %
              </div>
              <div>
                pdf{" "}
                <Input
                  type="checkbox"
                  //   checked={["5060", "3040"]?.includes(
                  //     batch?.items[0]?.child_sku?.substr(-4)
                  //   )}
                  onChange={(e) =>
                    onChange(batch?.batch_number, "pdf", e?.target?.checked)
                  }
                />
              </div>
            </Col>
            <Col sm="1">
              <div>Rejects</div>
              {batch?.items?.map((item, index) => {
                item?.rejections &&
                  item?.rejections?.map((reject, index) => {
                    return (
                      <Row key={index}>
                        <Col sm="3"></Col>
                        <Col sm="9">
                          Item {item?.id} Rejected {reject?.created_at}
                          by {reject?.user?.username}
                          {reject?.rejection_reason_info &&
                            "-" +
                              reject?.rejection_reason_info?.rejection_message}
                          - {reject?.rejection_message}
                        </Col>
                      </Row>
                    );
                  });
              })}
            </Col>
            <hr />
          </Row>
        </span>
      ))}
    </span>
  );
};
export default ViewComponent;

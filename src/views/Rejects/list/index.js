import "@styles/react/libs/flatpickr/flatpickr.scss";
import "@styles/react/libs/react-select/_react-select.scss";
import "@styles/react/libs/tables/react-dataTable-component.scss";
import moment from "moment";
import { Fragment, useEffect, useState } from "react";
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
} from "reactstrap";
import {
  getAllData,
  getDestinationOptions,
  getGraphicsStatusOptions,
  getReasonOptions,
  getSectionOptions,
  setSearchParams,
} from "../store";

const index = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.rejects);
  const [loading, setLoading] = useState(false);
  const params = store?.searchParams;

  useEffect(() => {
    dispatch(getSectionOptions());
    dispatch(getGraphicsStatusOptions());
    dispatch(getReasonOptions());
  }, []);

  useEffect(() => {
    dispatch(getAllData());
    dispatch(getDestinationOptions())
  }, [params]);

  const onSearch = async () => {
    setLoading(true);
    await dispatch(getAllData());
    setLoading(false);
  };

  const onChange = (data) => {
    dispatch(setSearchParams(data));
  };

  const updateOnClick = async (e, line) => {
    e.preventDefault();
    await dispatch(
      setSearchParams({
        graphic_status: line?.graphic_status,
        reason: line?.rejection_reason,
      })
    );
    onSearch();
  };

  const formatString = (json, separator = "\n", bold = 0) => {
    let pre = "";
    let post = "";

    if (bold === 1) {
      pre = '<strong style="font-size: 110%;">';
      post = "</strong>";
    }

    let formattedString = "";
    const jsonArray = JSON.parse(json);

    if (jsonArray) {
      for (const key in jsonArray) {
        let value = jsonArray[key];

        if (key !== "Confirmation_of_Order_Details" && key !== "couponcode") {
          if (value.includes("$") && bold === 1) {
            value = `<span style="font-size: 120%;">${value}</span>`;
          }
          formattedString += `${key.replaceAll(
            "_",
            " "
          )} = ${pre}${value}${post}${separator}`;
        }
        console.log(formattedString);
      }
    }

    return formattedString;
  };

  return (
    <div className="app-user-list">
      <Fragment>
        <Card className="px-1">
          <CardHeader>
            <h4 className="card-title">Process Rejects</h4>
          </CardHeader>
          <CardBody>
            <Row>
              <Col sm="2">
                <Input
                  placeholder="Batch Number"
                  value={params?.batch_number}
                  onChange={(e) => {
                    onChange({ batch_number: e?.target?.value });
                  }}
                />
              </Col>
              <Col sm="2">
                <Select
                  className="react-select"
                  classNamePrefix="select"
                  options={store?.sectionOptions}
                  placeholder="Select a Department"
                  value={store?.sectionOptions?.find(
                    (item) => item?.value == params?.section
                  )}
                  onChange={(e) => onChange({ section: e?.value })}
                  isClearable={true}
                />
              </Col>

              <Col sm="2">
                <Select
                  className="react-select"
                  classNamePrefix="select"
                  options={store?.graphic_statusOptions}
                  placeholder="Select Status"
                  value={store?.graphic_statusOptions?.find(
                    (item) => item?.value == params?.graphic_status
                  )}
                  onChange={(e) => onChange({ graphic_status: e?.value })}
                  isClearable={true}
                />
              </Col>

              <Col sm="3">
                <Select
                  className="react-select"
                  classNamePrefix="select"
                  options={store?.reasonOptions}
                  placeholder="Select a reason"
                  value={store?.reasonOptions?.find(
                    (item) => item?.value == params?.reason
                  )}
                  onChange={(e) => onChange({ reason: e?.value })}
                  isClearable={true}
                />
              </Col>
              <Col sm="1" className="d-flex align-items-start flex-column">
                <Button color="primary" onClick={onSearch} disabled={loading}>
                  {loading ? "Please Wait" : "Filter"}
                </Button>
              </Col>
              <Col sm="2" className="d-flex align-items-start flex-column">
                <Button color="primary" onClick={onSearch} disabled={loading}>
                  {loading ? "Please Wait" : "Send All to First Station"}
                </Button>
              </Col>
            </Row>
          </CardBody>
        </Card>

        {store?.data?.summary?.length > 0 ? (
          <span>
            <Card>
              <CardBody>
                <Row className="mb-1">
                  <Col sm="6">Type</Col>
                  <Col sm="5">Reason</Col>
                  <Col sm="1">Count</Col>
                </Row>
                {store?.data?.summary?.map((line, index) => (
                  <Row key={index} className="mb-1">
                    <Col sm="6">
                      {
                        store?.graphic_statusOptions?.find(
                          (item) => item?.value == line?.graphic_status
                        )?.label
                      }
                    </Col>
                    <Col sm="5">
                      {
                        store?.reasonOptions?.find(
                          (item) => item?.value == line?.rejection_reason
                        )?.label
                      }
                    </Col>
                    <Col sm="1">
                      <Link onClick={(e) => updateOnClick(e, line)}>
                        {line?.count}
                      </Link>
                    </Col>
                  </Row>
                ))}
                <Row className="mb-1">
                  <Col sm="8"></Col>
                  <Col sm="3">Total</Col>
                  <Col sm="1">
                    {store?.data?.summary?.reduce(
                      (a, b) => a + (b["count"] || 0),
                      0
                    )}
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </span>
        ) : store?.data?.batch_array?.length > 0 ? (
          <Card>
            <CardHeader>
              <h4>
                {store?.data?.total_items} found in{" "}
                {store?.data?.batch_array?.length} Batch/es
              </h4>
            </CardHeader>
            {/* TODO need to update with data format */}
            <CardBody>
              {store?.data?.batch_array?.map((batch, index) => (
                <span>
                  <Row className="mb-1 border rounded">
                    <Col sm="2">
                      <strong className="m-1">
                        <Link to={`/batch-list/${batch?.key}`}>
                          {batch?.key}
                        </Link>
                      </strong>
                      <div>
                        <Select
                          className="react-select m-1"
                          classNamePrefix="select"
                          placeholder="Send Batch to"
                          options={store?.destinationOptions}
                        />
                        <Button
                          color="primary"
                          className="m-1"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        >
                          Update Batch {batch?.key}
                        </Button>
                      </div>
                    </Col>
                    <Col sm="10">
                      {batch?.items?.length > 0 &&
                        batch?.items?.map((item, index) => (
                          <Row key={index} className="border rounded">
                            <Col sm="2">
                              <div>
                                <Link
                                  to={`/customer-order-edit/${item?.order?.id}`}
                                >
                                  {item?.order?.short_order}
                                </Link>
                              </div>
                              <div>
                                {moment(item?.order?.order_date).format(
                                  "DD MMM YYYY"
                                )}
                              </div>
                              <div>Item: {item?.id}</div>
                              {item?.item_quantity > 1 && (
                                <strong style={{ fontSize: "125%" }}>
                                  QTY: {item.item_quantity}
                                </strong>
                              )}
                              <br />
                              {item?.rejections?.length > 1 && (
                                <>
                                  <br />
                                  <strong style={{ color: "red" }}>
                                    Rejected {item?.rejections?.length} Times
                                  </strong>
                                  <br />
                                </>
                              )}
                              {item?.rejection && (
                                <a
                                  href={`/rejections/reprint?id=${item?.rejection?.id}`}
                                  className="btn btn-xs"
                                >
                                  Reprint Label
                                </a>
                              )}
                              {batch?.items?.length > 1 && (
                                <a
                                  href={`/rejections/split?item_id=${item.id}&batch_number=${item.batch_number}`}
                                  className="btn btn-xs"
                                >
                                  New Batch
                                </a>
                              )}
                            </Col>
                            <Col sm="2">
                              <a href={item?.item_url} target="_blank">
                                <img
                                  src={item?.item_thumb}
                                  height={200}
                                  width={150}
                                />
                              </a>
                            </Col>
                            <Col sm="4">
                              <div>
                                <div>{item.item_description}</div>
                                <p>SKU: {item.child_sku}</p>
                                {item.rejection ? (
                                  <div>
                                    <strong>
                                      {item.rejection.graphic_status}:
                                    </strong>
                                    {item.rejection.rejection_reason_info && (
                                      <span>
                                        {
                                          item.rejection.rejection_reason_info
                                            .rejection_message
                                        }
                                      </span>
                                    )}
                                    {item.rejection.rejection_message.length >
                                      0 && (
                                      <div>
                                        <strong>Note:</strong>{" "}
                                        {item.rejection.rejection_message}
                                      </div>
                                    )}
                                    <div>
                                      <strong>Rejected:</strong>{" "}
                                      {moment(item.rejection.created_at).format(
                                        "DD MMM YYYY"
                                      )}
                                      {item.rejection.from_station && (
                                        <span>
                                          {" "}
                                          from{" "}
                                          {
                                            item.rejection.from_station
                                              .station_name
                                          }
                                        </span>
                                      )}
                                      {item.rejection.user && (
                                        <span>
                                          {" "}
                                          by {item.rejection.user.username}
                                        </span>
                                      )}
                                    </div>
                                    {item.rejection.supervisor_message && (
                                      <div>
                                        <strong>Supervisor:</strong>{" "}
                                        {item.rejection.supervisor_message}
                                        <br />
                                      </div>
                                    )}
                                    <input
                                      type="text"
                                      name={`supervisor_message[${item.rejection.id}]`}
                                      className="supervisor_message form-control"
                                      style={{ minWidth: "200px" }}
                                      placeholder="Enter a message"
                                    />
                                  </div>
                                ) : (
                                  <p>- Reject information not found -</p>
                                )}
                              </div>
                            </Col>
                            <Col sm="4">{formatString(item?.item_option)}</Col>
                          </Row>
                        ))}
                    </Col>
                  </Row>
                </span>
              ))}
            </CardBody>
          </Card>
        ) : (
          <Card>
            <CardBody>
              <h4 className="d-flex align-items-center justify-content-center">
                No Rejects Found
              </h4>
            </CardBody>
          </Card>
        )}
      </Fragment>
    </div>
  );
};
export default index;

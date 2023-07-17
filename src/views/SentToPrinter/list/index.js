import "@styles/react/libs/react-select/_react-select.scss";
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
  Row,
  Spinner,
} from "reactstrap";
import { getAllData, getPrinterOptions } from "../store";

const index = () => {
  const dispatch = useDispatch();
  const { data, printerOptions, loading } = useSelector(
    (state) => state?.sentToPrinter
  );

  const [printer, setPrinter] = useState();

  useEffect(() => {
    dispatch(getAllData());
    dispatch(getPrinterOptions());
  }, []);

  const update = (e, itm, date) => {
    e.preventDefault();
    setPrinter(itm?.to_printer);
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
                isClearable
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
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Spinner size="sm" />
                    Filtering...
                  </>
                ) : (
                  "Filter"
                )}
              </Button>
            </Col>
          </Row>
          {data?.summary?.length > 0 ? (
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
          ) : data?.to_printer?.length > 0 ? (
            <span>
              <hr />
              <Row className="mt-1">
                <Col sm="3">
                  <Button
                    color="primary"
                    onClick={() => {
                      console.log("clicked");
                    }}
                  >
                    Reprint Selected Batches
                  </Button>
                </Col>
                <Col sm="3">
                  <Button
                    color="primary"
                    onClick={() => {
                      console.log("clicked");
                    }}
                  >
                    Export Selected Batches Again
                  </Button>
                </Col>
                <Col sm="1"></Col>
                <Col sm="5">
                  <h4>
                    {data?.to_printer?.length} Batches Found /{" "}
                    {data?.total_items} Item Lines
                  </h4>
                </Col>
              </Row>
              <hr />
              <Row className="mt-1">
                <Col sm="2">
                  <input type="checkbox" />
                  <b className="mx-1">Select All</b>
                </Col>
                <Col sm="1">
                  <b>Printed</b>
                </Col>
                <Col sm="1">
                  <b>First Order</b>
                </Col>
                <Col sm="1">
                  <b>Lines</b>
                </Col>
                <Col sm="2">
                  <b>Current Station</b>
                </Col>
                <Col sm="2">
                  <b>Date Sent/User</b>
                </Col>
                <Col sm="1"></Col>
                <Col sm="1"></Col>
                <Col sm="1"></Col>
              </Row>
              {data?.to_printer?.map((batch, idx) => (
                <span>
                  <hr />
                  <Row className="mt-1">
                    <Col sm="2">
                      <input type="checkbox" />
                      <span className="mx-1">
                        <a
                          href={`/batch-list/${batch?.batch_number}`}
                          target="_blank"
                        >
                          {batch?.batch_number}
                        </a>
                        {batch?.status !== "active" && (
                          <span>
                            (
                            {batch?.status?.charAt(0)?.toUpperCase() +
                              batch?.status?.slice(1)}
                            )
                          </span>
                        )}
                        <br />
                        {batch?.store && (
                          <span>{batch?.store?.store_name}</span>
                        )}
                        <br />
                        {batch?.summary_date ? "Summary Printed" : ""}
                      </span>
                    </Col>
                    <Col sm="1">
                      <div>
                        {batch?.to_printer !== "1" && (
                          <span>
                            {batch?.to_printer}
                            <br />
                          </span>
                        )}

                        {moment(batch?.to_printer_date).format("YYYY-MM-DD")}
                        <br />
                        {data?.batch_queue[batch?.batch_number]}
                      </div>
                    </Col>
                    <Col sm="1">
                      {moment(batch?.min_order_date).format("YYYY-MM-DD")}
                    </Col>
                    <Col sm="1">
                      {batch?.items_counts?.length > 0 &&
                        batch?.items_counts[0]?.count}
                    </Col>
                    <Col sm="2">
                      <span>
                        {batch?.station_name}
                        <br />
                        {batch?.station_description}
                      </span>
                    </Col>
                    <Col sm="2">
                      <span>
                        {batch?.to_printer_date}
                        <br />
                        {data?.scans[batch?.batch_number]}
                      </span>
                    </Col>
                    <Col sm="1">
                      {batch?.first_item ? (
                        <img
                          src={batch?.first_item?.item_thumb}
                          height={70}
                          width={70}
                        />
                      ) : (
                        "No Items"
                      )}
                    </Col>
                    <Col sm="1">
                      {batch?.days > 1 && `Printed ${batch?.days} Days Ago`}
                    </Col>
                    <Col sm="1">
                      <Button
                        color="primary"
                        onClick={() => {
                          console.log("clicked");
                        }}
                      >
                        Reprint {batch?.batch_number}
                      </Button>
                    </Col>
                  </Row>
                </span>
              ))}
            </span>
          ) : (
            <div className="text-center mt-5">No Data Found</div>
          )}
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default index;

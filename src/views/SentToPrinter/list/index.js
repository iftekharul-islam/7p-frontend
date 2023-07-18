import "@styles/react/libs/react-select/_react-select.scss";
import moment from "moment";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";
import { Button, Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import { exportBatchbulk, getAllData, getPrinterOptions, reprintBulk, reprintGraphic } from "../store";

const index = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, printerOptions, loading } = useSelector(
    (state) => state?.sentToPrinter
  );

  const [params, setParams] = useState({
    printer: null,
    date: null,
    batch_number: [],
  });

  const [loader, setLoader] = useState([]);

  const getData = () => {
    dispatch(
      getAllData(
        params?.printer
          ? { printer: params?.printer, date: params?.date }
          : null
      )
    );
  };

  useEffect(() => {
    getData();
  }, [params]);

  useEffect(() => {
    dispatch(getPrinterOptions());
  }, []);

  const onReprint = async (batch_number) => {
    setLoader([...loader, batch_number]);
    const res = await dispatch(reprintGraphic({ name: batch_number }));
    if (res?.payload?.status == 206) {
      navigate(`/print-sublimation?select_batch=${res?.payload?.select_batch}`);
    } else if (res?.payload?.status == 201) {
      getData();
    }
    setLoader(loader.filter((itm) => itm !== batch_number));
  };

  const onSelectedReprint = async (e) => {
    e.preventDefault();
    await dispatch(reprintBulk({ ...params, directory: "sublimation", force: "0" }));
    getData();
  };

  const onSelectedExport = async (e) => {
    e.preventDefault();
    await dispatch(exportBatchbulk({ ...params, directory: "sublimation", force: "0" }));
    getData();
  };

  const update = (e, printer, date) => {
    e.preventDefault();
    setParams({ printer: printer, date: date });
  };

  const selectAll = (e) => {
    e.preventDefault();
    if (e?.target?.checked) {
      setParams({
        ...params,
        batch_number: data?.to_printer?.map((itm) => itm?.batch_number),
      });
    } else {
      setParams({ ...params, batch_number: [] });
    }
  };

  const onChecked = (e, batch_number) => {
    e.preventDefault();
    let prev_batch = params?.batch_number ?? [];
    if (e?.target?.checked) {
      prev_batch = [...prev_batch, batch_number];
    } else {
      prev_batch = prev_batch.filter((itm) => itm !== batch_number);
    }
    setParams({
      ...params,
      batch_number: prev_batch,
    });
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
                value={printerOptions?.find(
                  (itm) => itm?.value === params?.printer
                )}
                onChange={(e) => {
                  setParams({ printer: e?.value, date: null });
                }}
              />
            </Col>
            {/* <Col sm="2">
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
            </Col> */}
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
                      <Link onClick={(e) => update(e, itm?.to_printer, null)}>
                        {itm?.to_printer}
                      </Link>
                    </Col>
                    <Col
                      sm="1"
                      className="border py-1 d-flex justify-content-center"
                    >
                      <Link onClick={(e) => update(e, itm?.to_printer, 1)}>
                        {itm?.group_1}
                      </Link>
                    </Col>
                    <Col
                      sm="1"
                      className="border py-1 d-flex justify-content-center"
                    >
                      <Link onClick={(e) => update(e, itm?.to_printer, 2)}>
                        {itm?.group_2}
                      </Link>
                    </Col>
                    <Col
                      sm="1"
                      className="border py-1 d-flex justify-content-center"
                    >
                      <Link onClick={(e) => update(e, itm?.to_printer, 3)}>
                        {itm?.group_3}
                      </Link>
                    </Col>
                    <Col
                      sm="1"
                      className="border py-1 d-flex justify-content-center"
                    >
                      <Link onClick={(e) => update(e, itm?.to_printer, null)}>
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
                  <Button color="primary" onClick={onSelectedReprint}>
                    Reprint Selected Batches
                  </Button>
                </Col>
                <Col sm="3">
                  <Button
                    color="primary"
                    onClick={onSelectedExport}
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
                  <input
                    type="checkbox"
                    checked={
                      params?.batch_number?.length === data?.to_printer?.length
                    }
                    onClick={selectAll}
                  />
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
                  <Row className="mt-1" key={idx}>
                    <Col sm="2">
                      <input
                        type="checkbox"
                        checked={params?.batch_number?.includes(
                          batch?.batch_number
                        )}
                        onClick={(e) => onChecked(e, batch?.batch_number)}
                      />
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
                        onClick={(e) => {
                          e.preventDefault();
                          onReprint(batch?.batch_number);
                        }}
                        disabled={loader?.includes(batch?.batch_number)}
                      >
                        {loader?.includes(batch?.batch_number)
                          ? "Please Wait"
                          : `Reprint ${batch?.batch_number}`}
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

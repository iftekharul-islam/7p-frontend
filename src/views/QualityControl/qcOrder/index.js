import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Card, CardBody, Col, Input, Row } from "reactstrap";
import RejectionModal from "../../BatchList/show/RejectModal";
import ShippingPanel from "../../WAP/view/ShippingPanel";
import {
  QCOrder,
  approvedItemApi,
  getOrder,
  getOrderData,
  getShowOrder,
  setSearchParams,
} from "../store";

const index = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const { orderData, batchData, searchParams } = useSelector(
    (state) => state?.qualityControls
  );

  // const {id,
  // batch
  // batch_number,
  // options,
  // label,
  // label_order,
  // // 'user' => $user,
  // reminder} = batchData ?? {};
  // console.log("🚀 ~ file: index.js:20 ~ index ~ batchData:", batchData)

  const {
    id,
    batch,
    batch_number,
    order,
    items,
    item_options,
    dest,
    thumbs,
    label,
    user,
  } = orderData ?? {};

  const [modalData, setModalData] = useState(null);
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  const { state } = useLocation(); 

  const getOrderDataList = async () => {
    setLoading(true);
    if (searchParams) {
      const res = await dispatch(getOrder(state ?? null));
      if (res?.payload?.status == 206) {
        getShowOrderList();
      }
    } else {
      navigate("/quality-control");
    }
    setLoading(false);
  };

  const getShowOrderList = async () => {
    setLoading(true);
    if (searchParams) {
      const res = await dispatch(getShowOrder());
      if (res?.payload?.status == 206) {
        getOrderDataList();
      }
    } else {
      navigate("/quality-control");
    }
    setLoading(false);
  };

  useEffect(() => {
    getOrderDataList();
  }, []);

  const handleSearch = async () => {
    const res = await dispatch(getOrderData());
    if (res?.payload) {
      getOrderDataList();
    }
  };

  const rejectItem = async (e, item_id) => {
    e.preventDefault();
    setModalData({ item_id, id, origin: "QC" });
    toggle();
  };

  const approvedItem = async () => {
    const params = {
      batch_number: batch?.batch_number,
      id,
      order_id: order?.id,
      origin: "QC",
      count: items?.length,
    };
    const res = await dispatch(approvedItemApi(params));
    if (res?.payload) {
      getOrderDataList();
    }
  };

  let count = 0;
  let orderValue = "start";

  const QCItems = async (e, order_5p) => {
    e.preventDefault();
    const res = await QCOrder({
      order_5p,
      id: batchData?.id,
      batch_number: batchData?.batch_number,
    });
    if (res?.payload) {
      getOrderDataList();
    }
  };

  return (
    <Fragment>
      <Card>
        <CardBody>
          <Row className="mb-1">
            <Col md="2">
              <Input
                type="text"
                placeholder="Enter Batch"
                value={searchParams?.batch_number}
                onChange={(e) =>
                  dispatch(setSearchParams({ batch_number: e?.target?.value }))
                }
              />
            </Col>
            <Col md="2">
              <Input
                type="text"
                placeholder="Enter Batch"
                value={searchParams?.user_barcode}
                onChange={(e) =>
                  dispatch(setSearchParams({ user_barcode: e?.target?.value }))
                }
              />
            </Col>
            <Col md="2">
              <Button color="primary" onClick={handleSearch} disabled={loading}>
                {loading ? "Please Wait..." : "Open Batch"}
              </Button>
            </Col>
          </Row>
          {batchData ? (
            <Row className="mt-2">
              <Col md="12">
                <h3>
                  Batch{" "}
                  <a href={`/batch-list/${batchData?.batch_number}`}>
                    {batchData?.batch?.batch_number}
                  </a>{" "}
                  -
                  {batchData?.batch?.status != "active" && (
                    <span style={{ color: "red" }}>
                      {batchData?.batch?.status}
                    </span>
                  )}
                </h3>
              </Col>
              <Col md="6">
                <strong>
                  QC in Progress by{" "}
                  {batchData?.batch?.scanned_in?.in_user?.username}
                </strong>{" "}
                - {batchData?.batch?.scanned_in?.in_date}
              </Col>
              <Col md="6">
                {batchData?.batch?.prev_station && (
                  <span>
                    {batchData?.batch?.prev_station?.station_description} -{" "}
                    {batchData?.batch?.change_date}
                  </span>
                )}
              </Col>
              <hr />

              {batchData?.batch?.items?.map((item) => {
                let rowspan = "";
                let btnText = "";
                if (
                  (order !== item?.order_5p || orderValue === "start") &&
                  count < item?.count
                ) {
                  if (item.count > 1) {
                    rowspan = `rowspan=${item.count} style="vertical-align: middle"`;
                    btnText = `QC ${item.count} Items`;
                  } else {
                    rowspan = "";
                    btnText = "QC Item";
                  }
                  count = 0;
                } else {
                  count++;
                }

                const thumb = ""; // You need to replace this with the logic to get the thumb

                return (
                  <Row key={item.order_5p} className="batch-row">
                    <Col {...(rowspan && { xs: "auto" })}>
                      {item?.order && (
                        <div>
                          Order{" "}
                          <a
                            href={`ustomer-order-edit/${item?.order?.id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {item?.order?.short_order}
                          </a>
                        </div>
                      )}
                    </Col>
                    <Col>
                      {item?.item_status === "production" ? (
                        <div>
                          <br />
                          <form
                            action={url}
                            method="post"
                            id={`order-form-${item.order_5p}`}
                          >
                            {/* Replace with appropriate hidden inputs */}
                            <input
                              type="hidden"
                              name="batch_number"
                              value={batchData.batch_number}
                            />
                            {/* Other hidden inputs */}
                            <Button onClick={(e) => QCItems(e, item?.order_5p)}>
                              {btnText}
                            </Button>
                          </form>
                        </div>
                      ) : item.item_status === "wap" ? (
                        <div>
                          <strong>WAP Bin {item.wap_item.bin.name}</strong>
                        </div>
                      ) : item.item_status === "shipped" ? (
                        <div>Shipped</div>
                      ) : (
                        <div>
                          <br />
                          {item.item_status}
                        </div>
                      )}
                    </Col>
                    <Col>
                      {batchData?.thumb && (
                        <img src={batchData?.thumb[0]} height="100" />
                      )}
                    </Col>
                    <Col>
                      <a
                        href={item?.item_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={item?.item_thumb} height="100" />
                      </a>
                    </Col>
                    <Col>
                      <div>
                        {item?.child_sku}
                        <br />
                        {item?.item_description}
                        <br />
                        {item?.item_quantity > 1 && (
                          <strong style={{ fontSize: "125%" }}>
                            QTY: {item?.item_quantity}
                          </strong>
                        )}
                      </div>
                    </Col>
                    <Col>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: batchData?.options[item?.id],
                        }}
                      />
                    </Col>
                  </Row>
                );
              })}
            </Row>
          ) : (
            <>
              <Row className="d-flex justify-content-between mb-2">
                <Col md="6">
                  <h2>
                    Order:{" "}
                    <b>
                      <a
                        href={`/customer-order-edit/${order?.id}`}
                        target="_blank"
                      >
                        {order?.short_order}
                      </a>
                    </b>
                  </h2>
                </Col>
                <Col md="6" className="d-flex justify-content-end">
                  <h2>
                    Batch:{" "}
                    <b>
                      <a href={`/batch-list/${batch_number}`} target="_blank">
                        {batch_number}
                      </a>
                    </b>
                  </h2>
                </Col>
              </Row>

              {items?.map((item, index) => (
                <Row className="border rounded mb-2 p-2">
                  <Col md="8">
                    <h4>
                      <b>
                        <a href={item?.item_url} target="_blank">
                          {item?.item_description}
                        </a>
                      </b>
                    </h4>
                  </Col>
                  <Col md="2" className="d-flex justify-content-center mb-1">
                    <Button
                      color="primary"
                      className="mr-1"
                      onClick={(e) => rejectItem(e, item?.id)}
                    >
                      Reject Item
                    </Button>
                  </Col>
                  <Col md="2" className="d-flex justify-content-center mb-1">
                    <Button color="primary" className="mr-1">
                      Set first-class
                    </Button>
                  </Col>
                  <hr />
                  <Col md="3">
                    <a href={item?.item_url} target="_blank">
                      <img src={item?.item_thumb} height="250" width="250" />
                    </a>
                  </Col>
                  <Col md="6">
                    {item?.child_sku}
                    <br />
                    Item: {item?.id}
                    <br />
                    {item?.item_quantity > 1 && (
                      <strong style="font-size: 125%;">
                        QTY: {item?.item_quantity}
                      </strong>
                    )}
                    <br />
                    <div className="mx-2">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: item_options[item?.id],
                        }}
                      />
                    </div>
                  </Col>
                  <Col md="3">
                    {thumbs[item?.id] && (
                      <img src={thumbs[item?.id][0]} width="250" height="250" />
                    )}
                  </Col>
                </Row>
              ))}
              {dest == "ship" ? (
                <Row>
                  <Col sm="1"></Col>
                  <Col sm="8">
                    <ShippingPanel data={orderData} origin="QC" items={orderData?.items} />
                  </Col>
                </Row>
              ) : (
                <Row>
                  <Col md="8"></Col>
                  <Col md="4">
                    <Button
                      color="primary"
                      className="mr-1"
                      onClick={approvedItem}
                    >
                      {items?.length > 1
                        ? items?.length + " Lines Approved by " + user?.username
                        : "Item Approved by " + user?.username}
                    </Button>
                  </Col>
                </Row>
              )}
            </>
          )}
        </CardBody>
      </Card>
      <RejectionModal isOpen={open} toggle={toggle} data={modalData} />
    </Fragment>
  );
};

export default index;

import "@styles/react/libs/flatpickr/flatpickr.scss";
import "@styles/react/libs/react-select/_react-select.scss";
import moment from "moment";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
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
  getWAPData,
  rejectWapItem,
  reprintWap,
  setSearchParams,
} from "../store";
import ShippingPanel from "./ShippingPanel";

const index = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { WAPData, searchParams } = useSelector((state) => state.WAP);
  const { bin, order, item_options, thumbs } = WAPData;

  useEffect(() => {
    if (!WAPData?.order) {
      navigate("/wap");
    }
  }, [WAPData]);

  const OpenBin = async (e, id, type) => {
    e.preventDefault();
    setLoading(true);
    const res = await dispatch(getWAPData({ [type]: id }));
    if (res?.payload) {
      navigate("/wap/bin");
    }
    setLoading(false);
  };

  const onChange = (data) => {
    dispatch(setSearchParams(data));
  };

  const rejectItem = async (item_id, bin_id, origin) => {
    await dispatch(
      rejectWapItem({
        item_id,
        bin_id,
        origin,
        s: document.getElementById("s")?.checked,
      })
    );
  };

  const reprintWapLabel = (e, item_id, bin_id) => {
    e.preventDefault();
    dispatch(reprintWap({ item_id, bin_id }));
  };

  return (
    <Fragment>
      <Card>
        <CardHeader>
          <h4 className="card-title">WAP</h4>
        </CardHeader>
        <CardBody>
          <Row className="mb-1">
            <Col md="7"></Col>
            <Col md="2">
              <Input
                type="text"
                name="order_id"
                placeholder="Scan Label"
                value={searchParams?.order_id}
                onChange={(e) => onChange({ order_id: e?.target?.value })}
              />
            </Col>
            <Col md="2">
              <Button
                color="primary"
                onClick={(e) => OpenBin(e, searchParams?.order_id, "order_id")}
                disabled={loading}
              >
                {loading ? "Please Wait..." : "Open Bin"}
              </Button>
            </Col>
          </Row>
          <Row>
            <Row>
              <Col sm="2"></Col>
              <Col sm="8">
                <ShippingPanel data={WAPData} />
              </Col>
              <Col sm="2"></Col>
            </Row>
          </Row>
          {order ? (
            <div>
              <Row>
                <Col md="3" className="p-1">
                  BIN <b>#{bin?.name}</b>
                </Col>
                <Col md="7" className="p-1">
                  Order{" "}
                  <b>
                    #
                    <Link to={`/customer-order-edit/${order?.id}`}>
                      {order?.short_order}
                    </Link>
                  </b>
                </Col>
                <Col md="2" className="p-1">
                  <small>
                    Order Date: {moment(order?.order_date).format("YYYY-MM-DD")}
                  </small>
                </Col>
              </Row>
              {order?.items
                ? order?.items?.map((item, index) => (
                    <Row key={index} className="border rounded mt-1">
                      <Col md="8" className="p-1">
                        <a href={item?.item_url} target="_blank">
                          {item?.item_description}
                        </a>
                      </Col>
                      <Col md="2" className="p-1">
                        {item?.item_status == "wap" && (
                          <Link
                            onClick={(e) =>
                              reprintWapLabel(e, item?.id, bin?.id)
                            }
                            className="btn btn-primary btn-sm"
                          >
                            Reprint WAP Label
                          </Link>
                        )}
                      </Col>
                      <Col md="2" className="p-1">
                        {item?.item_status == "wap" && item?.batch ? (
                          <span className="d-flex">
                            <Button
                              color="danger"
                              size="sm"
                              onClick={() =>
                                rejectItem(item?.id, bin?.id, "WP")
                              }
                            >
                              Reject from WAP
                            </Button>
                            <Input
                              type="checkbox"
                              id="s"
                              name="s"
                              value={item?.id}
                              defaultChecked
                            />
                          </span>
                        ) : item?.item_status == "rejected" ? (
                          <strong>
                            REJECTED {item?.rejections?.lenght} TIMES
                          </strong>
                        ) : (
                          <strong>{item?.item_status}</strong>
                        )}
                      </Col>

                      <Col md="12" className="p-1">
                        {item?.item_status == "wap" && item?.wap_item ? (
                          <small>
                            Added to Bin {item?.wap_item?.created_at}
                          </small>
                        ) : item?.item_status == "wap" ? (
                          <strong>WAP ITEM NOT FOUND</strong>
                        ) : (
                          <hr />
                        )}
                      </Col>
                      <Col md="3" className="p-1">
                        <a href={item?.item_url} target="_blank">
                          <img src={item?.item_thumb} height="200" />
                        </a>
                      </Col>
                      <Col md="6" className="p-1">
                        {item?.child_sku}
                        <br />
                        Item: {item?.id}
                        <br />
                        {item?.item_quantity > 1 && (
                          <strong>QTY: {item?.item_quantity}</strong>
                        )}
                        <ul>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: item_options[item?.id],
                            }}
                          />
                        </ul>
                        {/* {}</ul> */}
                      </Col>
                      <Col md="3" className="p-1">
                        {item?.item_status == "wap" &&
                        thumbs[item?.id]?.length > 0 ? (
                          <img
                            src={thumbs[item?.id][0]}
                            width={thumbs[item?.id][1]}
                            height={thumbs[item?.id][2]}
                          />
                        ) : item?.item_status == "production" &&
                          item?.batch_number != "0" ? (
                          <span>
                            <a
                              // className="btn btn-primary btn-sm"
                              className="link-info"
                              href={`/batch-list/${item?.batch_number}`}
                              target="_blank"
                            >
                              Batch {item?.batch_number}
                            </a>
                            {item?.batch && item?.batch?.station && (
                              <span>
                                {item?.batch?.station?.station_description}
                                <br />
                              </span>
                            )}
                            {item?.batch && (
                              <span>{item?.batch?.change_date}</span>
                            )}
                          </span>
                        ) : item?.item_status == "production" &&
                          item?.batch_number == "0" ? (
                          "Unbatched"
                        ) : item?.item_status == "rejected" ? (
                          <span>
                            <a
                              href={`/batch-list/${item?.batch_number}`}
                              target="_blank"
                            >
                              Batch {item?.batch_number}
                            </a>
                            {item?.rejections?.length > 0 &&
                              item?.rejections?.map((rejection, index) => (
                                <span key={index}>
                                  <br />
                                  <small>
                                    Rejected {rejection?.created_at}
                                    <br />
                                    {
                                      rejection?.rejection_reason_info
                                        ?.rejection_message
                                    }
                                  </small>
                                </span>
                              ))}
                          </span>
                        ) : item?.item_status == "back order" ? (
                          <a
                            href={`/batch-list/${item?.batch_number}`}
                            target="_blank"
                          >
                            Batch {item?.batch_number}
                          </a>
                        ) : item?.item_status == "shipped" ? (
                          item?.shipInfo ? (
                            <div>
                              {item?.shipInfo?.mail_class}
                              <br />
                              {item?.shipInfo?.shipping_id}
                            </div>
                          ) : (
                            "SHIPMENT NOT FOUND"
                          )
                        ) : (
                          ""
                        )}
                      </Col>
                    </Row>
                  ))
                : "No Items in Bin."}
            </div>
          ) : (
            <Row>
              <Col md="12">
                <h4 className="text-center">
                  {loading ? (
                    <span>
                      <Spinner size="sm" />
                      Data Loading
                    </span>
                  ) : (
                    "Bin Empty"
                  )}
                </h4>
              </Col>
            </Row>
          )}
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default index;

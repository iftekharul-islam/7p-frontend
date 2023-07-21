import "@styles/react/libs/flatpickr/flatpickr.scss";
import "@styles/react/libs/react-select/_react-select.scss";
import moment from "moment";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
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
import { getWAPData, setSearchParams } from "../store";

const index = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { WAPData, searchParams } = useSelector((state) => state.WAP);
  useEffect(async () => {
    setLoading(true);
    await dispatch(getWAPData(id));
    setLoading(false);
  }, []);

  const OpenBin = async () => {
    setLoading(true);
    const res = await dispatch(getShowData());
    if (res?.payload?.status) {
      // navigate("/wap/bin");
    }
    setLoading(false);
  };

  const onChange = (data) => {
    dispatch(setSearchParams(data));
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
                value={searchParams?.store_id}
                onChange={(e) => onChange({ order_id: e?.target?.value })}
              />
            </Col>
            <Col md="2">
              <Button color="primary" onClick={OpenBin} disabled={loading}>
                {loading ? "Please Wait..." : "Open Bin"}
              </Button>
            </Col>
          </Row>
          {WAPData?.order ? (
            <div>
              <Row>
                <Col md="3" className="p-1">
                  BIN <b>#{WAPData?.bin?.name}</b>
                </Col>
                <Col md="7" className="p-1">
                  Order{" "}
                  <b>
                    #
                    <Link to={`/customer-order-edit/${WAPData?.order?.id}`}>
                      {WAPData?.order?.short_order}
                    </Link>
                  </b>
                </Col>
                <Col md="2" className="p-1">
                  <small>
                    Order Date:{" "}
                    {moment(WAPData?.order?.order_date).format("YYYY-MM-DD")}
                  </small>
                </Col>
              </Row>
              {WAPData?.order?.items?.map((item, index) => (
                <Row key={index} className="border rounded mt-1">
                  <Col md="8" className="p-1">
                    <a href={item?.item_url}>{item?.item_description}</a>
                  </Col>
                  <Col md="2" className="p-1">
                    {item?.item_status == "wap" && (
                      <Link
                        to={`/wap/reprint?bin_id=${WAPData?.bin?.id}&item_id=${item?.id}`}
                        className="btn btn-default btn-sm"
                      >
                        Reprint WAP Label
                      </Link>
                    )}
                  </Col>
                  <Col md="2" className="p-1">
                    {/* {!! Form::open(['name' => 'reject-' . $item->id, 'url' => '/reject_item', 'method' => 'get', 'id' => 'reject-' . $item->id]) !!}
										{!! Form::hidden('item_id', $item->id, ['id' => 'item_id']) !!}
										{!! Form::hidden('bin_id', $bin->id, ['id' => 'bin_id']) !!}
										{!! Form::hidden('origin', 'WP', ['id' => 'origin']) !!}
										{!! Form::button('Reject from WAP' , ['id'=>'reject-' . $item->item_quantity, 'class' => 'btn btn-sm btn-danger']) !!}
										{!! Form::checkbox('s', $item->id, true) !!}
										{!! Form::close() !!} */}

                    {item?.item_status == "wap" && item?.batch ? (
                      <Button
                        color="danger"
                        size="sm"
                        onClick={() =>
                          rejectItem(item?.id, WAPData?.bin?.id, "WP")
                        }
                      >
                        Reject from WAP
                      </Button>
                    ) : item?.item_status == "rejected" ? (
                      <strong>REJECTED {item?.rejections?.lenght} TIMES</strong>
                    ) : (
                      <strong>{item?.item_status}</strong>
                    )}
                  </Col>

                  <Col md="12" className="p-1">
                    {item?.item_status == "wap" && item?.wap_item ? (
                      <small>Added to Bin {item?.wap_item?.created_at}</small>
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
                    <ul>{WAPData?.item_options[item?.id]}</ul>
                  </Col>
                  <Col md="3" className="p-1">
                    {item?.item_status == "wap" &&
                    WAPData?.thumbs[item?.id]?.length > 0 ? (
                      <img
                        src={WAPData?.thumbs[item?.id][0]}
                        width={WAPData?.thumbs[item?.id][1]}
                        height={WAPData?.thumbs[item?.id][2]}
                      />
                    ) : item?.item_status == "production" &&
                      item?.batch_number != "0" ? (
                      <span>
                        <a
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
                        {item?.batch && <span>{item?.batch?.change_date}</span>}
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
              ))}
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
                    "No Data Found"
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

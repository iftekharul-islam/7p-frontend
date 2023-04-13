import Repeater from "@components/repeater";
import "@styles/react/libs/flatpickr/flatpickr.scss";
import { Fragment, useEffect, useState } from "react";
import Flatpickr from "react-flatpickr";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { SlideDown } from "react-slidedown";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Form,
  Input,
  Label,
  Row,
  Spinner,
} from "reactstrap";
import { ReceiveOrder, getOrder } from "../store";

const index = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [sku, setSku] = useState([{}]);
  const [errors, setErrors] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const store = useSelector((state) => state.orders);

  const onSkuChange = (name, value, i) => {
    const updateData = sku?.map((item, index) => {
      if (i === index)
        if ((name = "new_received")) {
          return {
            ...item,
            new_received: value,
            balance_quantity: item?.quantity - item?.receive_quantity - value,
          };
        } else {
          return {
            ...item,
            [name]: value,
          };
        }
      else return item;
    });
    setSku(updateData);
  };

  useEffect(() => {
    dispatch(getOrder(id));
  }, []);

  useEffect(() => {
    setData(store?.order);
    const sku = store?.order?.products?.map((item) => {
      return {
        ...item,
        receive_date: item?.receive_date ?? new Date(),
        new_received: 0,
      };
    });
    setSku(sku);
  }, [store?.order]);

  const onSubmit = async () => {
    setLoading(true);
    const res = await dispatch(ReceiveOrder(sku));
    if (res?.payload?.status) {
      navigate("/purchase-order");
    } else {
      setErrors(res?.payload?.data?.errors);
    }
    setLoading(false);
  };

  return (
    <Fragment>
      <Row>
        <Form>
          <Col sm="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">
                  Receive Purchase Product- {data?.po_number}
                </CardTitle>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col sm="5">
                    <Row>
                      <Col sm="4">
                        <div>Vendor Name</div>
                        <div>Vendor Email</div>
                        <div>Phone Number</div>
                        <div>Zip Code</div>
                      </Col>
                      <Col sm="1">
                        <div>:</div>
                        <div>:</div>
                        <div>:</div>
                        <div>:</div>
                      </Col>
                      <Col sm="7">
                        <div>{data?.vendor?.vendor_name ?? "--"}</div>
                        <div>{data?.vendor?.email ?? "--"}</div>
                        <div>{data?.vendor?.phone_number ?? "--"}</div>
                        <div>{data?.vendor?.zip_code ?? "--"}</div>
                      </Col>
                    </Row>
                  </Col>
                  <Col sm="2">
                    <div>|</div>
                    <div>|</div>
                    <div>|</div>
                    <div>|</div>
                  </Col>
                  <Col sm="5">
                    <Row>
                      <Col sm="4">
                        <div>Date</div>
                        <div>Payment Method</div>
                        <div>Tracking</div>
                        <div>Notes</div>
                      </Col>
                      <Col sm="1">
                        <div>:</div>
                        <div>:</div>
                        <div>:</div>
                        <div>:</div>
                      </Col>
                      <Col sm="7">
                        <div>{data?.po_date ?? "--"}</div>
                        <div>{data?.payment_method ?? "--"}</div>
                        <div>{data?.tracking ?? "--"}</div>
                        <div>{data?.notes ?? "--"}</div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                {sku?.length > 0 && (
                  <>
                    <hr />
                    <CardBody>
                      <Row className="justify-content-between align-items-center">
                        <Col sm="2" className="d-flex justify-content-center">
                          <Label>Vendor SKU</Label>
                        </Col>
                        <Col sm="1" className="d-flex justify-content-center">
                          <Label>Stock#</Label>
                        </Col>
                        <Col sm="3" className="d-flex justify-content-center">
                          <Label>SKU</Label>
                        </Col>
                        <Col sm="1" className="d-flex justify-content-center">
                          <Label>Quantity</Label>
                        </Col>
                        <Col sm="2" className="d-flex justify-content-center">
                          <Label>Received Date</Label>
                        </Col>
                        <Col sm="1" className="d-flex justify-content-center">
                          <Label>Quantity Received</Label>
                        </Col>
                        <Col sm="1" className="d-flex justify-content-center">
                          <Label>Previously Received</Label>
                        </Col>
                        <Col sm="1" className="d-flex justify-content-center">
                          <Label>Balance</Label>
                        </Col>
                      </Row>
                      <Repeater count={sku?.length}>
                        {(i) => {
                          const Tag = i === 0 ? "div" : SlideDown;
                          return (
                            <Tag key={i}>
                              <Form>
                                <Row
                                  className={`justify-content-between align-items-center mt-${
                                    i == 0 ? "0" : "1"
                                  }`}
                                >
                                  <Col sm="2">
                                    <Input
                                      type="text"
                                      name="vendor_sku"
                                      id="vendor_sku"
                                      placeholder="SKU"
                                      value={sku[i]?.vendor_sku}
                                      disabled
                                    />
                                  </Col>
                                  <Col sm="1">
                                    <Input
                                      type="text"
                                      name="stock_no"
                                      id="stock_no"
                                      placeholder="Stock"
                                      value={sku[i]?.stock_no}
                                      disabled
                                    />
                                  </Col>
                                  <Col sm="3">
                                    <Input
                                      type="text"
                                      name="vendor_sku_name"
                                      id="vendor_sku_name"
                                      placeholder="SKU"
                                      value={sku[i]?.vendor_sku_name}
                                      disabled
                                    />
                                  </Col>
                                  <Col sm="1">
                                    <Input
                                      type="text"
                                      name="quantity"
                                      id="quantity"
                                      placeholder="Quantity"
                                      value={sku[i]?.quantity}
                                      disabled
                                    />
                                  </Col>
                                  <Col sm="2">
                                    <Flatpickr
                                      className="form-control"
                                      id="receive_date"
                                      name="receive_date"
                                      placeholder="Receive Date"
                                      value={sku[i]?.receive_date}
                                      onChange={(date) =>
                                        onSkuChange("receive_date", date, i)
                                      }
                                    />
                                  </Col>
                                  <Col sm="1">
                                    <Input
                                      type="number"
                                      name="new_received"
                                      id="new_received"
                                      placeholder="Quantity Received"
                                      value={sku[i]?.new_received}
                                      onChange={(e) =>
                                        onSkuChange(
                                          e?.target?.name,
                                          e?.target?.value,
                                          i
                                        )
                                      }
                                    />
                                  </Col>
                                  <Col sm="1">
                                    <Input
                                      type="text"
                                      name="receive_quantity"
                                      id="receive_quantity"
                                      placeholder="Previously Received"
                                      value={sku[i]?.receive_quantity}
                                      disabled
                                    />
                                  </Col>
                                  <Col sm="1">
                                    <Input
                                      type="text"
                                      name="balance_quantity"
                                      id="balance_quantity"
                                      placeholder="Balance"
                                      value={sku[i]?.balance_quantity}
                                      disabled
                                    />
                                  </Col>
                                </Row>
                              </Form>
                            </Tag>
                          );
                        }}
                      </Repeater>
                    </CardBody>
                    <hr />
                    <Row>
                      <Col sm="12" className="mt-1 d-flex justify-content-end">
                        <div className="d-flex">
                          <Button
                            className="me-1"
                            color="primary"
                            type="submit"
                            onClick={(e) => {
                              e.preventDefault();
                              onSubmit();
                            }}
                            disabled={loading}
                          >
                            {loading ? (
                              <>
                                <Spinner className="me-25" size="sm" />
                                Loading
                              </>
                            ) : (
                              "Receive Inventory"
                            )}
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </>
                )}
              </CardBody>
            </Card>
          </Col>
        </Form>
      </Row>
    </Fragment>
  );
};
export default index;

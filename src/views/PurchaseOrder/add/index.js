import Repeater from "@components/repeater";
import "@styles/react/libs/flatpickr/flatpickr.scss";
import { selectThemeColors } from "@utils";
import { Fragment, useEffect, useState } from "react";
import { Plus } from "react-feather";
import Flatpickr from "react-flatpickr";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";
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
import {
  AddPurchaseOrder,
  getAllProductByVendor,
  getAllVendors,
  getVendor,
} from "../store";

const index = () => {
  const [data, setData] = useState({ po_date: new Date(), grand_total: 0 });
  const [loading, setLoading] = useState(false);
  const [lock, setLock] = useState(false);
  const [sku, setSku] = useState([{}]);
  const [errors, setErrors] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const store = useSelector((state) => state.purchaseOrders);

  const onChange = (e) => {
    setData({
      ...data,
      [e.target?.name]: e.target?.value,
    });
  };

  const onDateChange = (name, date) => {
    setData({
      ...data,
      [name]: date,
    });
  };

  const onSkuSelectChange = (selectedItem, i) => {
    setLock(true);
    const data = store?.skuOptions?.find(
      (item) => item?.value === selectedItem?.value
    );
    const updateData = sku?.map((item, index) => {
      if (i === index)
        return {
          product_id: data?.data?.id,
          vendor_sku: data?.data?.vendor_sku,
          vendor_sku_name: data?.data?.vendor_sku_name,
          stock_no: data?.data?.stock_no,
          unit_price: data?.data?.unit_price,
          lead_time_days: data?.data?.lead_time_days,
          sub_total: 0,
          eta: new Date(),
        };
      else return item;
    });
    setSku(updateData);
  };

  const onSkuChange = (name, value, i) => {
    if (name == "unit_price") {
      const updateData = sku?.map((item, index) => {
        if (i === index) {
          const subTotal = (value ?? 0) * (item?.quantity ?? 0);
          return {
            ...item,
            [name]: value,
            sub_total: parseFloat(subTotal).toFixed(2),
          };
        } else return item;
      });
      setSku(updateData);
    } else if (name == "quantity") {
      const updateData = sku?.map((item, index) => {
        if (i === index) {
          const subTotal = (item?.unit_price ?? 0) * (value ?? 0);
          return {
            ...item,
            [name]: value,
            sub_total: parseFloat(subTotal).toFixed(2),
          };
        } else return item;
      });
      setSku(updateData);
    } else {
      const updateData = sku?.map((item, index) => {
        if (i === index)
          return {
            ...item,
            [name]: value,
          };
        else return item;
      });
      setSku(updateData);
    }
  };

  useEffect(() => {
    dispatch(getAllVendors());
  }, []);

  useEffect(() => {
    if (data?.vendor_id) {
      dispatch(getVendor(data?.vendor_id));
      setSku([{}]);
      dispatch(getAllProductByVendor(data?.vendor_id));
    }
  }, [data?.vendor_id]);

  useEffect(() => {
    setData({
      ...data,
      vendor_id: store?.vendor?.id,
      vendor_name: store?.vendor?.vendor_name,
      email: store?.vendor?.email,
      zip_code: store?.vendor?.zip_code,
      state: store?.vendor?.state,
      phone_number: store?.vendor?.phone_number,
    });
  }, [store?.vendor]);

  useEffect(() => {
    let grand_total = 0;
    sku.forEach((element) => {
      grand_total =
        parseFloat(grand_total) + parseFloat(element?.sub_total ?? 0);
    });
    setData({ ...data, grand_total: grand_total.toFixed(2) });
  }, [sku]);

  const increaseCount = () => {
    setSku([...sku, {}]);
  };

  const decreaseCount = (index) => {
    const data = sku?.filter((item, i) => i !== index);
    if (data?.length < 1) {
      setSku([{}]);
      setLock(false);
    } else {
      setSku(data);
    }
  };

  const onSubmit = async () => {
    setLoading(true);
    const res = await dispatch(AddPurchaseOrder({ ...data, skus: sku }));
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
                <CardTitle tag="h4">New Purchase Product</CardTitle>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col sm="4">
                    <Label className="form-label" for="po_date">
                      PO Date
                    </Label>
                    <Flatpickr
                      className="form-control"
                      id="po_date"
                      name="po_date"
                      placeholder="Purchase Order Date"
                      value={data?.po_date}
                      onChange={(date) => onDateChange("po_date", date)}
                    />
                    <small className="text-danger">{errors?.name}</small>
                  </Col>

                  <Col sm="4">
                    <Label className="form-label" for="payment_method">
                      Payment
                    </Label>
                    <Input
                      type="text"
                      name="payment_method"
                      id="payment_method"
                      placeholder="Payment Method"
                      value={data?.payment_method}
                      onChange={onChange}
                    />
                  </Col>
                  <Col sm="4"></Col>
                  <Col sm="4">
                    <Label className="form-label" for="vendor_id">
                      Vendor ID
                    </Label>
                    <Select
                      className="react-select"
                      classNamePrefix="select"
                      theme={selectThemeColors}
                      placeholder="Select Vendor"
                      options={store?.vendorOptions}
                      value={store?.vendorOptions?.find(
                        (item) => item?.value === data?.vendor_id
                      )}
                      onChange={(e) =>
                        onChange({
                          target: { name: "vendor_id", value: e?.value },
                        })
                      }
                      isClearable={false}
                      isDisabled={lock}
                    />
                    <small className="text-danger">
                      {errors?.phone_number}
                    </small>
                  </Col>
                  <Col sm="4">
                    <Label className="form-label" for="vendor_name">
                      Vendor
                    </Label>
                    <Input
                      type="text"
                      name="vendor_name"
                      id="vendor_name"
                      placeholder="Vendor's Name"
                      value={data?.vendor_name}
                      disabled
                    />
                  </Col>
                  <Col sm="4">
                    <Label className="form-label" for="email">
                      Email
                    </Label>
                    <Input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Vendor's Email"
                      value={data?.email}
                      disabled
                    />
                  </Col>
                  <Col sm="4">
                    <Label className="form-label" for="zip_code">
                      Zip Code
                    </Label>
                    <Input
                      type="text"
                      name="zip_code"
                      id="zip_code"
                      placeholder="Vendor's Zip Code"
                      value={data?.zip_code}
                      disabled
                    />
                  </Col>
                  <Col sm="4">
                    <Label className="form-label" for="state">
                      State
                    </Label>
                    <Input
                      type="text"
                      name="state"
                      id="state"
                      placeholder="Vendor's State"
                      value={data?.state}
                      disabled
                    />
                  </Col>
                  <Col sm="4">
                    <Label className="form-label" for="phone_number">
                      Phone
                    </Label>
                    <Input
                      type="text"
                      name="phone_number"
                      id="phone_number"
                      placeholder="Vendor's Phone Number"
                      value={data?.phone_number}
                      disabled
                    />
                  </Col>
                  <Col sm="12">
                    <Label className="form-label" for="notes">
                      Notes
                    </Label>
                    <Input
                      type="text"
                      name="notes"
                      id="notes"
                      placeholder="Notes"
                      value={data?.notes}
                      onChange={onChange}
                    />
                  </Col>
                </Row>
                {sku?.length > 0 && (
                  <>
                    <hr />
                    <CardBody>
                      <Row className="justify-content-between align-items-center">
                        <Col sm="1" className="d-flex justify-content-center">
                          <Label>Vendor SKU</Label>
                        </Col>
                        <Col sm="1" className="d-flex justify-content-center">
                          <Label>Stock</Label>
                        </Col>
                        <Col sm="3" className="d-flex justify-content-center">
                          <Label>SKU</Label>
                        </Col>
                        <Col sm="1" className="d-flex justify-content-center">
                          <Label>Quantity</Label>
                        </Col>
                        <Col sm="1" className="d-flex justify-content-center">
                          <Label>Price</Label>
                        </Col>
                        <Col sm="1" className="d-flex justify-content-center">
                          <Label>Subtotal</Label>
                        </Col>
                        <Col sm="1" className="d-flex justify-content-center">
                          <Label>Lead Time</Label>
                        </Col>
                        <Col sm="2" className="d-flex justify-content-center">
                          <Label>ETA</Label>
                        </Col>
                        <Col sm="1" className="d-flex justify-content-center">
                          <Label>Action</Label>
                        </Col>
                      </Row>
                      <Repeater count={sku?.length}>
                        {(i) => {
                          const Tag = i === 0 ? "div" : SlideDown;
                          return (
                            <Tag key={i}>
                              <Form>
                                <Row className="justify-content-between align-items-center mb-1">
                                  <Col sm="1">
                                    <Input
                                      type="text"
                                      name="vendor_sku"
                                      id="vendor_sku"
                                      placeholder="SKU"
                                      value={sku[i]?.vendor_sku}
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
                                      name="stock_no"
                                      id="stock_no"
                                      placeholder="Stock"
                                      value={sku[i]?.stock_no}
                                      disabled
                                    />
                                  </Col>
                                  <Col sm="3">
                                    <Select
                                      className="react-select"
                                      classNamePrefix="select"
                                      theme={selectThemeColors}
                                      placeholder="Select SKU"
                                      options={store?.skuOptions}
                                      value={store?.skuOptions?.find(
                                        (item) => item?.value === sku?.sku
                                      )}
                                      onChange={(e) => onSkuSelectChange(e, i)}
                                      isClearable={false}
                                    />
                                  </Col>
                                  <Col sm="1">
                                    <Input
                                      type="number"
                                      name="quantity"
                                      id="quantity"
                                      min={0}                                      
                                      placeholder="Quantity"
                                      value={sku[i]?.quantity}
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
                                      name="unit_price"
                                      id="unit_price"
                                      placeholder="Price"
                                      value={sku[i]?.unit_price}
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
                                      name="sub_total"
                                      id="sub_total"
                                      placeholder="Subtotal"
                                      value={sku[i]?.sub_total}
                                      disabled
                                    />
                                  </Col>
                                  <Col sm="1">
                                    <Input
                                      type="text"
                                      name="lead_time_days"
                                      id="lead_time_days"
                                      placeholder="Lead Time Days"
                                      value={sku[i]?.lead_time_days}
                                      disabled
                                    />
                                  </Col>
                                  <Col sm="2">
                                    <Flatpickr
                                      className="form-control"
                                      id="eta"
                                      name="eta"
                                      placeholder="ETA"
                                      value={sku[i]?.eta}
                                      onChange={(date) =>
                                        onSkuChange("eta", date, i)
                                      }
                                    />
                                  </Col>
                                  <Col sm="1">
                                    <Button
                                      className="me-1"
                                      color="danger"
                                      onClick={(e) => {
                                        e.preventDefault();
                                        decreaseCount(i);
                                      }}
                                    >
                                      <span className="align-middle ms-25">
                                        Delete
                                      </span>
                                    </Button>
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
                      <Col sm="9" className="mt-1">
                        <div className="d-flex">
                          <Button
                            className="me-1"
                            color="success"
                            onClick={(e) => {
                              e.preventDefault();
                              increaseCount();
                            }}
                          >
                            <Plus size={14} />
                            <span className="align-middle ms-25">Add New</span>
                          </Button>
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
                                Submiting
                              </>
                            ) : (
                              "Submit"
                            )}
                          </Button>
                        </div>
                      </Col>
                      <Col sm="3">Grand Total: {data?.grand_total}</Col>
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

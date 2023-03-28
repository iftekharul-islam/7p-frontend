import { Fragment, useEffect, useState } from "react";
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
import { selectThemeColors } from "@utils";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import {
  AddVendor,
  getAllProductByVendor,
  getAllVendors,
  getVendor,
} from "../store";
import { useNavigate } from "react-router-dom";
import Flatpickr from "react-flatpickr";
import { SlideDown } from "react-slidedown";
import Repeater from "@components/repeater";
import "react-slidedown/lib/slidedown.css";
import "@styles/react/libs/flatpickr/flatpickr.scss";
import { Plus } from "react-feather";

const index = () => {
  const [data, setData] = useState({ po_date: new Date() });
  const [lock, setLock] = useState(false);
  const [sku, setSku] = useState([]);
  const [errors, setErrors] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const store = useSelector((state) => state.orders);

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

  const onSkuSelectChange = (name, value, i) => {
    setLock(true);
    const data = store?.skuOptions?.find((item) => item?.value === value);
    const productData = {
      vendor_sku: data?.data?.vendor_sku,
      price: data?.data?.unit_price,
      lead_time_days: data?.data?.lead_time_days,
    };

    const updateData = sku?.map((item, index) => {
      if (i === index) return productData;
      else return item;
    });
    setSku(updateData);
  };

  const onSkuChange = (name, value, i) => {
    setLock(true);
    console.log("🚀 ~ file: index.js:50 ~ onSkuChange ~ i:", i);
    console.log("🚀 ~ file: index.js:50 ~ onSkuChange ~ value:", value);
    console.log("🚀 ~ file: index.js:50 ~ onSkuChange ~ name:", name);
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
    setData({ ...data, ...store?.vendor });
  }, [store?.vendor]);

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
    const res = await dispatch(AddVendor(data));
    if (res?.payload?.status) {
      navigate("/order");
    } else {
      setErrors(res?.payload?.data?.errors);
    }
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
                    <Label className="form-label" for="name">
                      Vendor
                    </Label>
                    <Input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Vendor's Name"
                      value={data?.name}
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
                                      name="phone_number"
                                      id="phone_number"
                                      placeholder="Vendor's Phone Number"
                                      value={sku[i]?.phone_number}
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
                                      name="phone_number"
                                      id="phone_number"
                                      placeholder="Vendor's Phone Number"
                                      value={data?.phone_number}
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
                                      onChange={(e) =>
                                        onSkuSelectChange("sku", e?.value, i)
                                      }
                                      isClearable={false}
                                    />
                                  </Col>
                                  <Col sm="1">
                                    <Input
                                      type="text"
                                      name="phone_number"
                                      id="phone_number"
                                      placeholder="Vendor's Phone Number"
                                      value={data?.phone_number}
                                    />
                                  </Col>
                                  <Col sm="1">
                                    <Input
                                      type="text"
                                      name="phone_number"
                                      id="phone_number"
                                      placeholder="Vendor's Phone Number"
                                      value={sku[i]?.price}
                                    />
                                  </Col>
                                  <Col sm="1">
                                    <Input
                                      type="text"
                                      name="phone_number"
                                      id="phone_number"
                                      placeholder="Vendor's Phone Number"
                                      value={data?.phone_number}
                                    />
                                  </Col>
                                  <Col sm="1">
                                    <Input
                                      type="text"
                                      name="phone_number"
                                      id="phone_number"
                                      placeholder="Vendor's Phone Number"
                                      value={data?.phone_number}
                                      disabled
                                    />
                                  </Col>
                                  <Col sm="2">
                                    <Flatpickr
                                      className="form-control"
                                      id="po_date"
                                      name="po_date"
                                      placeholder="Purchase Order Date"
                                      value={data?.po_date}
                                      onChange={(date) =>
                                        onDateChange("po_date", date)
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
                      <Col sm="12" className="mt-1">
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
                          >
                            Submit
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

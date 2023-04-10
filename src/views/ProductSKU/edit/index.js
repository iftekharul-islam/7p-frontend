import { selectThemeColors } from "@utils";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Select from "react-select";
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
} from "reactstrap";
import { UpdateProduct, getAllVendors, getProduct } from "../store";

const index = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [errors, setErrors] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const store = useSelector((state) => state.productskus);

  useEffect(() => {
    dispatch(getProduct(id));
    dispatch(getAllVendors());
  }, [id]);

  useEffect(() => {
    if (store?.product) {
      setData(store?.product);
    }
  }, [store?.product]);

  const onChange = (e) => {
    setData({
      ...data,
      [e.target?.name]: e.target?.value,
    });
  };

  const onSubmit = async () => {
    const res = await dispatch(UpdateProduct({ id, data }));
    if (res?.payload?.status) {
      navigate("/product");
    } else {
      setErrors(res?.payload?.data?.errors);
    }
  };

  return (
    <Fragment>
      <Row>
        <Form>
          <Col sm="6">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Edit Product</CardTitle>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col sm="12" className="">
                    <Label className="form-label" for="nameVertical">
                      Production category
                    </Label>
                    <Select
                      className="react-select"
                      classNamePrefix="select"
                      theme={selectThemeColors}
                      placeholder="Select Production category"
                      options={store?.stockOptions}
                      value={store?.stockOptions?.find(
                        (item) => item?.value === data?.stock_id
                      )}
                      onChange={onChange}
                      isClearable={false}
                    />
                    <small className="text-danger">{errors?.stock_id}</small>
                  </Col>
                  <Col sm="12">
                    <Label className="form-label" for="stock_name_discription">
                      Model(SKU)
                    </Label>
                    <Input
                      type="text"
                      name="stock_name_discription"
                      id="stock_name_discription"
                      placeholder="Name"
                      value={data?.stock_name_discription}
                    />
                    <small className="text-danger">{errors?.vendor_id}</small>
                  </Col>
                  <Col sm="12">
                    <Label className="form-label" for="sku_weight">
                      Product name
                    </Label>
                    <Input
                      type="text"
                      name="sku_weight"
                      id="sku_weight"
                      placeholder="SKU Weight"
                      value={data?.sku_weight}
                      onChange={onChange}
                    />
                  </Col>
                  <Col sm="12" className="">
                    <Label className="form-label" for="nameVertical">
                      Manufacture
                    </Label>
                    <Select
                      className="react-select"
                      classNamePrefix="select"
                      theme={selectThemeColors}
                      placeholder="Select Production category"
                      options={store?.stockOptions}
                      value={store?.stockOptions?.find(
                        (item) => item?.value === data?.stock_id
                      )}
                      onChange={onChange}
                      isClearable={false}
                    />
                    <small className="text-danger">{errors?.stock_id}</small>
                  </Col>
                  <Col sm="12">
                    <Label className="form-label" for="re_order_qty">
                      Product description
                    </Label>
                    <Input
                      type="textarea"
                      rows="4"
                      name="re_order_qty"
                      id="re_order_qty"
                      placeholder="Re-order QTY"
                      value={data?.re_order_qty}
                    />
                  </Col>
                  <hr className="mt-1" />

                  <Col sm="12">
                    <Label className="form-label" for="min_reorder">
                      ID
                    </Label>
                    <Input
                      type="text"
                      name="min_reorder"
                      id="min_reorder"
                      placeholder="Min order"
                      value={data?.min_reorder}
                    />
                  </Col>
                  <Col sm="12">
                    <Label className="form-label" for="adjusment">
                      Product URL
                    </Label>
                    <Input
                      type="text"
                      name="adjusment"
                      id="adjusment"
                      placeholder="Adjustment"
                      value={data?.adjusment}
                    />
                  </Col>
                  <Col sm="12">
                    <Label className="form-label" for="unit">
                      Thumb / Insert image
                    </Label>
                    <Input
                      type="text"
                      name="adjusment"
                      id="adjusment"
                      placeholder="Adjustment"
                      value={data?.adjusment}
                    />
                  </Col>
                  <hr className="mt-1" />

                  <Col sm="12">
                    <Label className="form-label" for="unit_qty">
                      Ship weight
                    </Label>
                    <Input
                      type="text"
                      name="unit_qty"
                      id="unit_qty"
                      placeholder="QTY"
                      value={data?.unit_qty}
                      onChange={onChange}
                    />
                  </Col>
                  <Col sm="12">
                    <Label className="form-label" for="unit_price">
                      Height
                    </Label>
                    <Input
                      type="text"
                      name="unit_price"
                      id="unit_price"
                      placeholder="Unit Price"
                      value={data?.unit_price}
                      onChange={onChange}
                    />
                  </Col>
                  <Col sm="12" className="mb-1">
                    <Label className="form-label" for="nameVertical">
                      Width
                    </Label>
                    <Input
                      type="text"
                      name="unit_price"
                      id="unit_price"
                      placeholder="Unit Price"
                      value={data?.unit_price}
                      onChange={onChange}
                    />
                  </Col>
                  <hr className="mt-1" />

                  <Col sm="12">
                    <Label className="form-label" for="vendor_sku">
                      UPC
                    </Label>
                    <Input
                      type="text"
                      name="vendor_sku"
                      id="vendor_sku"
                      placeholder="vendor_sku"
                      value={data?.vendor_sku}
                      onChange={onChange}
                    />
                  </Col>
                  <Col sm="12">
                    <Label className="form-label" for="vendor_sku_name">
                      ASIN
                    </Label>
                    <Input
                      type="text"
                      name="vendor_sku_name"
                      id="vendor_sku_name"
                      placeholder="SKU Name"
                      value={data?.vendor_sku_name}
                      onChange={onChange}
                    />
                  </Col>
                  <hr className="mt-1" />

                  <Col sm="12">
                    <Label className="form-label" for="lead_time_days">
                      Product price
                    </Label>
                    <Input
                      type="text"
                      name="lead_time_days"
                      id="lead_time_days"
                      placeholder="lead_time_days"
                      value={data?.lead_time_days}
                      onChange={onChange}
                    />
                  </Col>
                  <Col sm="12">
                    <Label className="form-label" for="lead_time_days">
                      Product sale price
                    </Label>
                    <Input
                      type="text"
                      name="lead_time_days"
                      id="lead_time_days"
                      placeholder="lead_time_days"
                      value={data?.lead_time_days}
                      onChange={onChange}
                    />
                  </Col>
                  <Col sm="12">
                    <Label className="form-label" for="lead_time_days">
                      Wholesale price
                    </Label>
                    <Input
                      type="text"
                      name="lead_time_days"
                      id="lead_time_days"
                      placeholder="lead_time_days"
                      value={data?.lead_time_days}
                      onChange={onChange}
                    />
                  </Col>
                  <Col sm="12" className="d-flex justify-content-between my-1">
                    <div className="form-check form-check-success">
                      <Input
                        type="checkbox"
                        name="show_header"
                        checked={data?.show_header}
                        onChange={(e) =>
                          onChange({
                            target: {
                              name: "show_header",
                              value: e?.target?.checked,
                            },
                          })
                        }
                      />
                      <Label
                        className="form-check-label"
                        for="success-checkbox"
                      >
                        Show Popup
                      </Label>
                    </div>
                  </Col>
                  <Col sm="12">
                    <Label className="form-label" for="re_order_qty">
                      Popup Message Note
                    </Label>
                    <Input
                      type="textarea"
                      rows="2"
                      name="re_order_qty"
                      id="re_order_qty"
                      placeholder="Re-order QTY"
                      value={data?.re_order_qty}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col sm="12" className="mt-1">
                    <div className="d-flex">
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
              </CardBody>
            </Card>
          </Col>
        </Form>
      </Row>
    </Fragment>
  );
};
export default index;

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
import { AddProduct, getAllStocks, getAllVendors } from "../store";
import { useNavigate } from "react-router-dom";
import { UserPlus } from "react-feather";

const index = () => {
  const [data, setData] = useState(null);
  const [errors, setErrors] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const store = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getAllStocks());
    dispatch(getAllVendors());
  }, []);

  const onChange = (e) => {
    setData({
      ...data,
      [e.target?.name]: e.target?.value,
    });
  };
  const onStockChange = (e) => {
    setData({
      ...data,
      ...e?.data,
      stock_no: e?.stock_no,
    });
  };

  const onSubmit = async () => {
    const res = await dispatch(AddProduct(data));
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
                <CardTitle tag="h4">New Product</CardTitle>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col sm="9" className="mb-1">
                    <Label className="form-label" for="nameVertical">
                      Stock
                    </Label>
                    <Select
                      className="react-select"
                      classNamePrefix="select"
                      theme={selectThemeColors}
                      placeholder="Select Stock"
                      options={store?.stockOptions}
                      value={store?.stockOptions?.find(
                        (item) => item?.value === data?.stock_id
                      )}
                      onChange={onStockChange}
                      isClearable={false}
                    />
                    <small className="text-danger">{errors?.stock_id}</small>
                  </Col>
                  <Col sm="3" className="mb-1">
                    <Label className="form-label" for="nameVertical"></Label>
                    <div>
                      <Button
                        color="primary"
                        onClick={(e) => {
                          e.preventDefault();
                          navigate("/inventory-add");
                        }}
                      >
                        <UserPlus size={14} /> Stock
                      </Button>
                    </div>
                  </Col>
                  <Col sm="12">
                    <Label className="form-label" for="stock_name_discription">
                      Name
                    </Label>
                    <Input
                      type="text"
                      name="stock_name_discription"
                      id="stock_name_discription"
                      placeholder="Name"
                      value={data?.stock_name_discription}
                      disabled
                    />
                  </Col>
                  <Col sm="12">
                    <Label className="form-label" for="sku_weight">
                      SKU Weight
                    </Label>
                    <Input
                      type="text"
                      name="sku_weight"
                      id="sku_weight"
                      placeholder="SKU Weight"
                      value={data?.sku_weight}
                      onChange={onChange}
                      disabled
                    />
                  </Col>
                  <Col sm="12">
                    <Label className="form-label" for="re_order_qty">
                      Re-order QTY
                    </Label>
                    <Input
                      type="text"
                      name="re_order_qty"
                      id="re_order_qty"
                      placeholder="Re-order QTY"
                      value={data?.re_order_qty}
                      disabled
                    />
                  </Col>
                  <Col sm="12">
                    <Label className="form-label" for="min_reorder">
                      Min order
                    </Label>
                    <Input
                      type="text"
                      name="min_reorder"
                      id="min_reorder"
                      placeholder="Min order"
                      value={data?.min_reorder}
                      disabled
                    />
                  </Col>
                  <Col sm="12">
                    <Label className="form-label" for="adjusment">
                      Adjustment
                    </Label>
                    <Input
                      type="text"
                      name="adjusment"
                      id="adjusment"
                      placeholder="Adjustment"
                      value={data?.adjusment}
                      disabled
                    />
                  </Col>

                  <Col sm="6">
                    <Label className="form-label" for="unit">
                      Unit
                    </Label>
                    <Select
                      className="react-select"
                      classNamePrefix="select"
                      theme={selectThemeColors}
                      placeholder="Select Stock"
                      options={store?.unitOptions}
                      value={store?.unitOptions?.find(
                        (item) => item?.value === data?.unit
                      )}
                      onChange={(e) =>
                        onChange({ target: { name: "unit", value: e.value } })
                      }
                      isClearable={false}
                    />                    
                  </Col>
                  <Col sm="6">
                    <Label className="form-label" for="unit_qty">
                      QTY
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
                      Unit Price
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
                  <hr className="mt-2" />
                  <Col sm="12" className="mb-1">
                    <Label className="form-label" for="nameVertical">
                      Vendor
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
                      onChange={(e) => {
                        onChange({
                          target: { value: e?.value, name: "vendor_id" },
                        });
                      }}
                      isClearable={false}
                    />
                    <small className="text-danger">{errors?.vendor_id}</small>
                  </Col>
                  <Col sm="12">
                    <Label className="form-label" for="vendor_sku">
                      Vendor Sku
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
                      SKU Name
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
                  <Col sm="12">
                    <Label className="form-label" for="lead_time_days">
                      Lead Time Days
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

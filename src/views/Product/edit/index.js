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
import { getAllVendors, getProduct, UpdateProduct } from "../store";
import { useNavigate, useParams } from "react-router-dom";

const index = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [errors, setErrors] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const store = useSelector((state) => state.products);

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
    const res = await dispatch(UpdateProduct({id, data}));
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
                  <Col sm="12" className="mb-1">
                    <Label className="form-label" for="nameVertical">
                      Stock
                    </Label>
                    <Input
                      type="text"
                      name="name"
                      id="name"
                      value={data?.stock?.stock_number}
                      disabled
                    />                  
                  </Col>
                  <Col sm="12">
                    <Label className="form-label" for="description">
                      Name/Description
                    </Label>
                    <Input
                      type="text"
                      name="description"
                      id="description"
                      value={data?.stock?.description}
                      disabled
                    />
                  </Col>                  

                  <Col sm="6">
                    <Label className="form-label" for="unit">
                      Unit
                    </Label>
                    <Input
                      type="text"
                      name="unit"
                      id="unit"
                      placeholder="unit"
                      value={data?.unit}
                      onChange={onChange}
                    />
                  </Col>
                  <Col sm="6">
                    <Label className="form-label" for="qty">
                      QTY
                    </Label>
                    <Input
                      type="text"
                      name="qty"
                      id="qty"
                      placeholder="qty"
                      value={data?.qty}
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
                      placeholder="unit_price"
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
                        (item) => item?.value === data?.vendor?.id
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
                    <Label className="form-label" for="sku_name">
                      Sku Name
                    </Label>
                    <Input
                      type="text"
                      name="sku_name"
                      id="sku_name"
                      placeholder="sku_name"
                      value={data?.sku_name}
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

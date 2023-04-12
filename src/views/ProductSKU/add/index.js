import { selectThemeColors } from "@utils";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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
import { AddProduct, getProductionCategoryOptions } from "../store";

const index = () => {
  const [data, setData] = useState(null);
  const [errors, setErrors] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const store = useSelector((state) => state.productskus);

  useEffect(() => {
    dispatch(getProductionCategoryOptions());
  }, []);

  const onChange = (e) => {
    setData({
      ...data,
      [e.target?.name]: e.target?.value,
    });
  };

  const onSubmit = async () => {
    const res = await dispatch(AddProduct(data));
    if (res?.payload?.status) {
      navigate("/sku-product");
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
                  <Col sm="12" className="">
                    <Label
                      className="form-label"
                      for="product_production_category"
                    >
                      Production category
                    </Label>
                    <Select
                      className="react-select"
                      classNamePrefix="select"
                      theme={selectThemeColors}
                      placeholder="Select Production category"
                      options={store?.productionCategoryOptions}
                      value={store?.productionCategoryOptions?.find(
                        (item) =>
                          item?.value === data?.product_production_category
                      )}
                      onChange={(e) =>
                        onChange({
                          target: {
                            name: "product_production_category",
                            value: e?.value,
                          },
                        })
                      }
                      isClearable={false}
                    />
                    <small className="text-danger">
                      {errors?.product_production_category}
                    </small>
                  </Col>
                  <Col sm="12">
                    <Label className="form-label" for="product_model">
                      Model(SKU)
                    </Label>
                    <Input
                      type="text"
                      name="product_model"
                      id="product_model"
                      placeholder="Enter Model(SKU)"
                      value={data?.product_model}
                      onChange={onChange}
                    />
                    <small className="text-danger">{errors?.product_model}</small>
                  </Col>
                  <Col sm="12">
                    <Label className="form-label" for="product_name">
                      Product name
                    </Label>
                    <Input
                      type="text"
                      name="product_name"
                      id="product_name"
                      placeholder="Enter Product name"
                      value={data?.product_name}
                      onChange={onChange}
                    />
                  </Col>
                  <Col sm="12">
                    <Label className="form-label" for="product_description">
                      Product description
                    </Label>
                    <Input
                      type="textarea"
                      rows="4"
                      name="product_description"
                      id="product_description"
                      placeholder="Enter Product description"
                      value={data?.product_description}
                      onChange={onChange}
                    />
                  </Col>
                  <hr className="mt-1" />

                  <Col sm="12">
                    <Label className="form-label" for="id_catalog">
                      ID
                    </Label>
                    <Input
                      type="text"
                      name="id_catalog"
                      id="id_catalog"
                      placeholder="Enter ID"
                      value={data?.id_catalog}
                      onChange={onChange}
                    />
                  </Col>
                  <Col sm="12">
                    <Label className="form-label" for="product_url">
                      Product URL
                    </Label>
                    <Input
                      type="text"
                      name="product_url"
                      id="product_url"
                      placeholder="Enter Product URL"
                      value={data?.product_url}
                      onChange={onChange}
                    />
                  </Col>
                  <Col sm="12">
                    <Label className="form-label" for="product_thumb">
                      Thumb / Insert image
                    </Label>
                    <Input
                      type="text"
                      name="product_thumb"
                      id="product_thumb"
                      placeholder="Enter Thumb / Insert image"
                      value={data?.product_thumb}
                      onChange={onChange}
                    />
                  </Col>
                  <hr className="mt-1" />

                  <Col sm="12">
                    <Label className="form-label" for="ship_weight">
                      Ship weight
                    </Label>
                    <Input
                      type="text"
                      name="ship_weight"
                      id="ship_weight"
                      placeholder="Enter Ship weight"
                      value={data?.ship_weight}
                      onChange={onChange}
                    />
                  </Col>
                  <Col sm="12">
                    <Label className="form-label" for="height">
                      Height
                    </Label>
                    <Input
                      type="number"
                      name="height"
                      id="height"
                      placeholder="Enter Height"
                      value={data?.height}
                      onChange={onChange}
                    />
                  </Col>
                  <Col sm="12" className="mb-1">
                    <Label className="form-label" for="width">
                      Width
                    </Label>
                    <Input
                      type="number"
                      name="width"
                      id="width"
                      placeholder="Enter Width"
                      value={data?.width}
                      onChange={onChange}
                    />
                  </Col>
                  <hr className="mt-1" />

                  <Col sm="12">
                    <Label className="form-label" for="product_upc">
                      UPC
                    </Label>
                    <Input
                      type="text"
                      name="product_upc"
                      id="product_upc"
                      placeholder="Enter UPC"
                      value={data?.product_upc}
                      onChange={onChange}
                    />
                  </Col>
                  <Col sm="12">
                    <Label className="form-label" for="product_asin">
                      ASIN
                    </Label>
                    <Input
                      type="text"
                      name="product_asin"
                      id="product_asin"
                      placeholder="Enter ASIN"
                      value={data?.product_asin}
                      onChange={onChange}
                    />
                  </Col>
                  <hr className="mt-1" />

                  <Col sm="12">
                    <Label className="form-label" for="product_price">
                      Product Price
                    </Label>
                    <Input
                      type="text"
                      name="product_price"
                      id="product_price"
                      placeholder="Enter Product Price"
                      value={data?.product_price}
                      onChange={onChange}
                    />
                  </Col>
                  <Col sm="12">
                    <Label className="form-label" for="product_sale_price">
                      Product Sale Price
                    </Label>
                    <Input
                      type="text"
                      name="product_sale_price"
                      id="product_sale_price"
                      placeholder="Enter Product Sale Price"
                      value={data?.product_sale_price}
                      onChange={onChange}
                    />
                  </Col>
                  <Col sm="12">
                    <Label className="form-label" for="product_wholesale_price">
                      Wholesale price
                    </Label>
                    <Input
                      type="text"
                      name="product_wholesale_price"
                      id="product_wholesale_price"
                      placeholder="Enter Wholesale Price"
                      value={data?.product_wholesale_price}
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

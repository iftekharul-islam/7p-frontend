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
import { AddProduct, AddStock, getAllStocks, getAllVendors } from "../store";
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

  const onSubmit = async () => {
    const res = await dispatch(AddStock(data));
    if (res?.payload?.status) {
      navigate("/product-add");
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
                <CardTitle tag="h4">New Stock</CardTitle>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col sm="12">
                    <Label className="form-label" for="stock_number">
                      Stock Number
                    </Label>
                    <Input
                      type="number"
                      name="stock_number"
                      id="stock_number"
                      placeholder="Stock Number"
                      value={data?.stock_number}
                      onChange={onChange}
                    />
                  </Col>
                  <small className="text-danger">{errors?.stock_number}</small>
                  <Col sm="12">
                    <Label className="form-label" for="description">
                      Description
                    </Label>
                    <Input
                      type="text"
                      name="description"
                      id="description"
                      placeholder="Description"
                      value={data?.description}
                      onChange={onChange}
                    />
                  </Col>

                  <Col sm="12">
                    <Label className="form-label" for="section_id">
                      Section
                    </Label>
                    <Select
                      className="react-select"
                      classNamePrefix="select"
                      theme={selectThemeColors}
                      placeholder="Select Section"
                      options={store?.sectionOptions}
                      value={store?.sectionOptions?.find(
                        (item) => item?.value === data?.section_id
                      )}
                      onChange={(e) => {
                        onChange({
                          target: { value: e?.value, name: "section_id" },
                        });
                      }}
                      isClearable={false}
                    />
                  </Col>

                  <Col sm="12">
                    <Label className="form-label" for="weight">
                      Weight
                    </Label>
                    <Input
                      type="number"
                      name="weight"
                      id="weight"
                      placeholder="Weight"
                      value={data?.weight}
                      onChange={onChange}
                    />
                  </Col>
                  <Col sm="12">
                    <Label className="form-label" for="order_quantity">
                      Order Quantity
                    </Label>
                    <Input
                      type="number"
                      name="order_quantity"
                      id="order_quantity"
                      placeholder="Order Quantity"
                      value={data?.order_quantity}
                      onChange={onChange}
                    />
                  </Col>

                  <Col sm="12">
                    <Label className="form-label" for="minimum_stock_quantity">
                      Minimum Stock Quantity
                    </Label>
                    <Input
                      type="number"
                      name="minimum_stock_quantity"
                      id="minimum_stock_quantity"
                      placeholder="Minimum Stock Quantity"
                      value={data?.minimum_stock_quantity}
                      onChange={onChange}
                    />
                  </Col>
                  <Col sm="12">
                    <Label className="form-label" for="last_cost">
                      Last Cost
                    </Label>
                    <Input
                      type="number"
                      name="last_cost"
                      id="last_cost"
                      placeholder="Last Cost"
                      value={data?.last_cost}
                      onChange={onChange}
                    />
                  </Col>
                  <Col sm="12">
                    <Label className="form-label" for="upc">
                    UPC
                    </Label>
                    <Input
                      type="text"
                      name="upc"
                      id="upc"
                      placeholder="UPC"
                      value={data?.upc}
                      onChange={onChange}
                    />
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
                    <Label className="form-label" for="bin">
                    BIN
                    </Label>
                    <Input
                      type="text"
                      name="bin"
                      id="bin"
                      placeholder="BIN"
                      value={data?.bin}
                      onChange={onChange}
                    />
                  </Col>
                  <Col sm="12">
                    <Label className="form-label" for="image_url">
                    Image Url
                    </Label>
                    <Input
                      type="text"
                      name="image_url"
                      id="image_url"
                      placeholder="Image Url"
                      value={data?.image_url}
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

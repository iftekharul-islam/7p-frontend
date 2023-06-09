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
import { getAllSections, getStock, UpdateStock } from "../store";
import { useNavigate, useParams } from "react-router-dom";

const index = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const [errors, setErrors] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const store = useSelector((state) => state.inventories);

  useEffect(() => {
    if (id) {
      dispatch(getStock(id));
    }
  }, [id]);

  useEffect(() => {
    if (store?.stock) {
      setData({ ...store?.stock });
    }
  }, [store?.stock]);

  useEffect(() => {
    dispatch(getAllSections());
  }, []);

  const onChange = (e) => {
    setData({
      ...data,
      [e.target?.name]: e.target?.value,
    });
  };

  const onSubmit = async () => {
    const res = await dispatch(UpdateStock({ id, data }));
    if (res?.payload?.status) {
      navigate("/inventory");
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
                    <Label className="form-label" for="stock_no_unique">
                      Stock Number
                    </Label>
                    <Input
                      type="number"
                      name="stock_no_unique"
                      id="stock_no_unique"
                      placeholder="Stock Number"
                      value={data?.stock_no_unique}
                      disabled
                    />
                  </Col>
                  <small className="text-danger">
                    {errors?.stock_no_unique}
                  </small>
                  <Col sm="12">
                    <Label className="form-label" for="stock_name_discription">
                      Discription
                    </Label>
                    <Input
                      type="text"
                      name="stock_name_discription"
                      id="stock_name_discription"
                      placeholder="Discription"
                      value={data?.stock_name_discription}
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
                    <Label className="form-label" for="sku_weight">
                      Weight
                    </Label>
                    <Input
                      type="number"
                      name="sku_weight"
                      id="sku_weight"
                      placeholder="Weight"
                      value={data?.sku_weight}
                      onChange={onChange}
                    />
                  </Col>
                  <Col sm="12">
                    <Label className="form-label" for="re_order_qty">
                      Order Quantity
                    </Label>
                    <Input
                      type="number"
                      name="re_order_qty"
                      id="re_order_qty"
                      placeholder="Order Quantity"
                      value={data?.re_order_qty}
                      onChange={onChange}
                    />
                  </Col>

                  <Col sm="12">
                    <Label className="form-label" for="min_reorder">
                      Minimum Stock Quantity
                    </Label>
                    <Input
                      type="number"
                      name="min_reorder"
                      id="min_reorder"
                      placeholder="Minimum Stock Quantity"
                      value={data?.min_reorder}
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
                    <Label className="form-label" for="wh_bin">
                      BIN
                    </Label>
                    <Input
                      type="text"
                      name="wh_bin"
                      id="wh_bin"
                      placeholder="BIN"
                      value={data?.wh_bin}
                      onChange={onChange}
                    />
                  </Col>
                  <Col sm="12">
                    <Label className="form-label" for="warehouse">
                      Image Url
                    </Label>
                    <Input
                      type="text"
                      name="warehouse"
                      id="warehouse"
                      placeholder="Image Url"
                      value={data?.warehouse}
                      onChange={onChange}
                    />
                  </Col>
                  <Col sm="12" className="d-flex">
                    <Input
                      type="checkbox"
                      name="dropship"
                      className="m-1"
                      checked={data?.dropship}
                      onChange={(e) =>
                        onChange({
                          target: {
                            name: "dropship",
                            value: e?.target?.checked,
                          },
                        })
                      }
                    />
                    <Label
                      for="warehouse"
                      className="form-label d-flex align-content-center flex-wrap"
                    >
                      Dropship
                    </Label>
                  </Col>
                  <Col sm="12">
                    <Label className="form-label" for="dropship_sku">
                      Dropship SKU
                    </Label>
                    <Input
                      type="text"
                      name="dropship_sku"
                      id="dropship_sku"
                      placeholder="Dropship SKU"
                      value={data?.dropship_sku}
                      onChange={onChange}
                    />
                  </Col>
                  <Col sm="12">
                    <Label className="form-label" for="dropship_cost">
                      Dropship Cost
                    </Label>
                    <Input
                      type="text"
                      name="dropship_cost"
                      id="dropship_cost"
                      placeholder="Dropship Cost"
                      value={data?.dropship_cost}
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

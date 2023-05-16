import { Fragment, useEffect, useState } from "react";
import { Save, Trash2 } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, CardBody, Col, Input, Label, Row } from "reactstrap";
import {
  addStoreItems,
  deleteStoreItems,
  getStoreItems,
  updateStoreItems
} from "../store";

const index = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [item, setItem] = useState(null);
  const store = useSelector((state) => state.stores);

  useEffect(() => {
    dispatch(getStoreItems(id));
  }, []);

  useEffect(() => {
    if (store?.store?.store_items) {
      setItem(store?.store?.store_items);
    }
  }, [store?.store]);

  const onChange = (e, i) => {
    const updateData = item?.map((item, index) => {
      if (i === index)
        return {
          ...item,
          [e.target?.name]: e.target?.value,
        };
      else return item;
    });
    setItem(updateData);
  };

  const onDataChange = (e, i) => {
    setData({
      ...data,
      [e.target?.name]: e.target?.value,
    });
  };

  const onSave = async () => {
    const res = await dispatch(
      addStoreItems({ ...data, store_id: store?.store?.store_id, reload_id:id })
    );
    if (res?.payload)
      setData({
        vendor_sku: "",
        description: "",
        parent_sku: "",
        child_sku: "",
        url: "",
        upc: "",
        custom: "",
        cost: "",
      });
  };

  const onUpdate =  (item) => {
    dispatch(
      updateStoreItems({ ...item, store_id: store?.store?.store_id, reload_id:id })
    );
  };

  const onDelete = (item) => {
    dispatch(
      deleteStoreItems({ id: item?.id, reload_id:id })
    )
  };
  return (
    <Fragment>
      <Card>
        <CardBody>
          <Row className="justify-content-between align-items-center">
            <Col sm="1" className="d-flex justify-content-center">
              <Label>Store SKU</Label>
            </Col>
            <Col sm="2" className="d-flex justify-content-center">
              <Label>Description</Label>
            </Col>
            <Col sm="1" className="d-flex justify-content-center">
              <Label>Cost</Label>
            </Col>
            <Col sm="2" className="d-flex justify-content-center">
              <Label>Parent SKU</Label>
            </Col>
            <Col sm="2" className="d-flex justify-content-center">
              <Label>Child SKU</Label>
            </Col>
            <Col sm="1" className="d-flex justify-content-center">
              <Label>URL</Label>
            </Col>
            <Col sm="1" className="d-flex justify-content-center">
              <Label>UPC</Label>
            </Col>
            <Col sm="1" className="d-flex justify-content-center">
              <Label>Custom</Label>
            </Col>
            <Col sm="1" className="d-flex justify-content-center">
              <Label>Action</Label>
            </Col>
          </Row>
          <Row className="justify-content-between align-items-center mt-1">
            <Col sm="1" className="d-flex justify-content-center">
              <Input
                type="text"
                name="vendor_sku"
                value={data?.vendor_sku}
                onChange={onDataChange}
              />
            </Col>
            <Col sm="2" className="d-flex justify-content-center">
              <Input
                type="text"
                name="description"
                value={data?.description}
                onChange={onDataChange}
              />
            </Col>
            <Col sm="1" className="d-flex justify-content-center">
              <Input
                type="number"
                name="cost"
                value={data?.cost}
                onChange={onDataChange}
              />
            </Col>
            <Col sm="2" className="d-flex justify-content-center">
              <Input
                type="text"
                name="parent_sku"
                value={data?.parent_sku}
                onChange={onDataChange}
              />
            </Col>
            <Col sm="2" className="d-flex justify-content-center">
              <Input
                type="text"
                name="child_sku"
                value={data?.child_sku}
                onChange={onDataChange}
              />
            </Col>
            <Col sm="1" className="d-flex justify-content-center">
              <Input
                type="text"
                name="url"
                value={data?.url}
                onChange={onDataChange}
              />
            </Col>
            <Col sm="1" className="d-flex justify-content-center">
              <Input
                type="text"
                name="upc"
                value={data?.upc}
                onChange={onDataChange}
              />
            </Col>
            <Col sm="1" className="d-flex justify-content-center">
              <Input
                type="text"
                name="custom"
                value={data?.custom}
                onChange={onDataChange}
              />
            </Col>
            <Col sm="1" className="d-flex justify-content-center">
              <Button
                color="primary"
                className="btn-icon"
                onClick={(e) => {
                  e.preventDefault();
                  onSave();
                }}
              >
                Add new
              </Button>
            </Col>
          </Row>
          {item?.map((item, i) => (
            <Row
              key={i}
              className="justify-content-between align-items-center mt-1"
            >
              <Col sm="1" className="d-flex justify-content-center">
                <Input
                  type="text"
                  name="vendor_sku"
                  value={item?.vendor_sku}
                  onChange={(e) => onChange(e, i)}
                />
              </Col>
              <Col sm="2" className="d-flex justify-content-center">
                <Input
                  type="text"
                  name="description"
                  value={item?.description}
                  onChange={(e) => onChange(e, i)}
                />
              </Col>
              <Col sm="1" className="d-flex justify-content-center">
                <Input
                  type="number"
                  name="cost"
                  value={item?.cost}
                  onChange={(e) => onChange(e, i)}
                />
              </Col>
              <Col sm="2" className="d-flex justify-content-center">
                <Input
                  type="text"
                  name="parent_sku"
                  value={item?.parent_sku}
                  onChange={(e) => onChange(e, i)}
                />
              </Col>
              <Col sm="2" className="d-flex justify-content-center">
                <Input
                  type="text"
                  name="child_sku"
                  value={item?.child_sku}
                  onChange={(e) => onChange(e, i)}
                />
              </Col>
              <Col sm="1" className="d-flex justify-content-center">
                <Input
                  type="text"
                  name="url"
                  value={item?.url}
                  onChange={(e) => onChange(e, i)}
                />
              </Col>
              <Col sm="1" className="d-flex justify-content-center">
                <Input
                  type="text"
                  name="upc"
                  value={item?.upc}
                  onChange={(e) => onChange(e, i)}
                />
              </Col>
              <Col sm="1" className="d-flex justify-content-center">
                <Input
                  type="text"
                  name="custom"
                  value={item?.custom}
                  onChange={(e) => onChange(e, i)}
                />
              </Col>
              <Col sm="1" className="d-flex justify-content-center">
                <Save
                  size={20}
                  className={`text-primary me-50`}
                  onClick={(e) => {
                    e.preventDefault();
                    onUpdate(item);
                  }}
                />
                <Trash2
                  size={20}
                  className={`text-danger me-50`}
                  onClick={(e) => {
                    e.preventDefault();
                    onDelete(item)
                  }}
                />
              </Col>
            </Row>
          ))}

          {/* <Repeater count={sku?.length}>
                        {(i) => {
                          const Tag = i === 0 ? "div" : SlideDown;
                          return (
                            <Tag key={i}>
                              <Form>
                                <Row className="justify-content-between align-items-center mb-1">
                                  <Col sm="2">
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
                                        (item) =>
                                          item?.value === sku[i]?.product_id
                                      )}
                                      onChange={(e) => onSkuSelectChange(e, i)}
                                      isClearable={false}
                                    />
                                  </Col>
                                  <Col sm="1">
                                    <Input
                                      type="text"
                                      name="new_quantity"
                                      id="new_quantity"
                                      placeholder="Quantity"
                                      value={sku[i]?.new_quantity}
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
                      </Repeater> */}
        </CardBody>
      </Card>
    </Fragment>
  );
};
export default index;

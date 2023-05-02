import "@styles/react/libs/flatpickr/flatpickr.scss";
import "@styles/react/libs/react-select/_react-select.scss";
import { selectThemeColors } from "@utils";
import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import AsyncSelect from "react-select/async";
import { Button, Col, Input, Row } from "reactstrap";
import { getProductOptions } from "../store";

const ProductList = (data, onChange, errors, setShowTracking, setItemTracking) => {
  const dispatch = useDispatch();

  const loadOptions = async (inputValue) => {
    let res = [];
    if (inputValue.length > 3) {
      res = await dispatch(getProductOptions(inputValue));
      return res?.payload;
    } else {
      return [];
    }
  };

  const handleInputChange = (newValue) => {
    const array = [...(data?.items ?? [])];
    array?.push({
      sku: newValue?.data?.product_model,
      id_catalog: newValue?.data?.id_catalog,
      item_description: newValue?.data?.product_name,
      item_thumb: newValue?.data?.product_thumb,
      item_unit_price: newValue?.data?.product_price,
      item_quantity: 1,
      is_new: true,
    });
    onChange({ target: { name: "items", value: array } });
  };

  const onItemChange = (e, index) => {
    const array = [...(data?.items ?? [])];
    array[index][e.target?.name] = e.target?.value;
    onChange({ target: { name: "items", value: array } });
  };

  useEffect(() => {
    const subtotal = parseFloat(
      data?.items.reduce(function (prev, cur) {
        return (
          parseFloat(prev) +
          parseFloat(cur?.item_unit_price) * parseFloat(cur?.item_quantity)
        );
      }, 0)
    ).toFixed(2);
    onChange({ target: { name: "subtotal", value: subtotal } });
  }, [data?.items]);

  const removeItem = (index) => {
    const array = [...(data?.items ?? [])];
    const filteredItems = array
      .slice(0, index)
      .concat(array.slice(index + 1, array?.length));
    onChange({ target: { name: "items", value: filteredItems } });
  };

  return (
    <Fragment>
      <Row className="rounded bg-secondary p-1 my-1 text-uppercase">
        <Col sm="1 text-light fw-bolder ">Image</Col>
        <Col sm="3 text-light fw-bolder">Name</Col>
        <Col sm="4 text-light fw-bolder">Description</Col>
        <Col sm="1 text-light fw-bolder">Quantity</Col>
        <Col sm="1 text-light fw-bolder">Price</Col>
        <Col sm="1 text-light fw-bolder">Total</Col>
        <Col sm="1 text-light fw-bolder">Action</Col>
      </Row>
      {data?.items?.map((item, index) => {
        return (
          <Row className="" key={index}>
            <Col sm="1">
              <img
                src={item?.item_thumb}
                alt={item?.child_sku}
                height="50"
                width="50"
              />
            </Col>
            <Col sm="3">
              <div>{item?.child_sku}</div>
              <div>{item?.item_description}</div>
            </Col>
            <Col sm="4">
              <Input
                type="text"
                Rows="1"
                name="options"
                id="options"
                placeholder="Click Here"
                value={item?.options}
                onChange={(e) => onItemChange(e, index)}
              />
            </Col>
            <Col sm="1">
              <Input
                type="number"
                name="item_quantity"
                id="item_quantity"
                placeholder="Item_quantity"
                value={item?.item_quantity}
                onChange={(e) => onItemChange(e, index)}
              />
            </Col>
            <Col sm="1">
              <Input
                type="number"
                name="item_unit_price"
                id="item_unit_price"
                placeholder="Price"
                value={parseFloat(item?.item_unit_price).toFixed(2)}
                onChange={(e) => onItemChange(e, index)}
              />
            </Col>
            <Col sm="1">
              <Input
                type="number"
                name="total_price"
                id="total_price"
                placeholder="Price"
                value={parseFloat(
                  item?.item_quantity * item?.item_unit_price
                ).toFixed(2)}
                disabled
              />
            </Col>
            <Col sm="1">
              {item?.is_new ? (
                <Button
                  color="danger"
                  onClick={(e) => {
                    e.preventDefault();
                    removeItem(index);
                  }}
                >
                  Delete
                </Button>
              ) : (
                <Button
                  color="success"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowTracking(true);
                    setItemTracking(item)
                  }}
                >
                  Tracking
                </Button>
              )}
            </Col>
            <hr />
          </Row>
        );
      })}
      <Row className="pt-2">
        <Col sm="2"></Col>
        <Col sm="8">
          <AsyncSelect
            isClearable={false}
            className="react-select"
            classNamePrefix="select"
            name="callback-react-select"
            loadOptions={loadOptions}
            value={null}
            onChange={handleInputChange}
            theme={selectThemeColors}
          />
        </Col>
        <Col sm="2"></Col>
      </Row>
    </Fragment>
  );
};
export default ProductList;

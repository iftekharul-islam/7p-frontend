import "@styles/react/libs/flatpickr/flatpickr.scss";
import "@styles/react/libs/react-select/_react-select.scss";
import { selectThemeColors } from "@utils";
import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Select from "react-select";
import AsyncSelect from "react-select/async";
import { Col, Input, Row } from "reactstrap";
import { DeleteItem, RestoreItem, getProductOptions } from "../store";
import ItemComponent from "./ItemComponent";

const ProductList = (
  data,
  onChange,
  errors,
  setShowTracking,
  setItemTracking
) => {
  const dispatch = useDispatch();
  const { id } = useParams();

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
    const array = data?.items?.map((item) => ({ ...item }));
    array?.push({
      item_id: newValue?.data?.item_id,
      child_sku: newValue?.data?.product_model,
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
    const array = data?.items?.map((item) => ({ ...item }));
    array[index][e.target?.name] = e.target?.value;
    onChange({ target: { name: "items", value: array } });
  };

  const onItemSelectChange = (e, name, index) => {
    const array = data?.items?.map((item) => ({ ...item }));
    array[index][name] = e.value;
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

  const deleteItem = (e, orderId, itemId) => {
    e.preventDefault();
    dispatch(DeleteItem({ id, orderId, itemId }));
  };

  const restoreItem = (e, orderId, itemId) => {
    e.preventDefault();
    dispatch(RestoreItem({ id, orderId, itemId }));
  };

  const formatString = (json, separator = "\n", bold = 0) => {
    let pre = "";
    let post = "";

    if (bold === 1) {
      pre = '<strong style="font-size: 110%;">';
      post = "</strong>";
    }

    let formattedString = "";
    const jsonArray = JSON.parse(json);

    if (jsonArray) {
      for (const key in jsonArray) {
        let value = jsonArray[key];

        if (key !== "Confirmation_of_Order_Details" && key !== "couponcode") {
          if (typeof value === String && value?.includes("$") && bold === 1) {
            value = `<span style="font-size: 120%;">${value}</span>`;
          }
          formattedString += `${key.replaceAll(
            "_",
            " "
          )} = ${pre}${value}${post}${separator}`;
        }
      }
    }

    return formattedString;
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
              <a href={item?.item_url ? item?.item_url : "#"} target="_blank">
                <img
                  src={item?.item_thumb}
                  alt={item?.child_sku}
                  height="100"
                  width="100"
                />
              </a>
              <div>
                {data?.store &&
                data?.store?.change_items === "1" &&
                item?.item_status !== "cancelled" &&
                item?.item_status !== "shipped" ? (
                  <Link
                    style={{ color: "gray" }}
                    className="delete-item"
                    onClick={(e) => deleteItem(e, data?.id, item?.id)}
                  >
                    Cancel
                  </Link>
                ) : data?.store &&
                  data?.store?.change_items === "1" &&
                  item?.item_status === "cancelled" ? (
                  <Link
                    style={{ color: "gray" }}
                    className="delete-item"
                    onClick={(e) => restoreItem(e, data?.id, item?.id)}
                  >
                    Restore
                  </Link>
                ) : null}
              </div>
            </Col>
            <Col sm="3">
              <div>
                <a href={item?.item_url ?? "#"} target="_blank">
                  {item?.item_description}
                </a>
              </div>
              <div>Item ID: {item?.id}</div>
              {item?.all_child_skus?.length > 0 &&
              (item?.parameter_option === null ||
                true ||
                item?.parameter_option?.batch_route_id === 115) ? (
                <Select
                  classNames="react-select"
                  classNamePrefix="select"
                  name="child_sku"
                  options={item?.all_child_skus?.map((sku) => ({
                    value: sku?.child_sku,
                    label: sku?.child_sku,
                  }))}
                  value={item?.all_child_skus
                    ?.map((sku) => ({
                      value: sku?.child_sku,
                      label: sku?.child_sku,
                    }))
                    ?.find((sku) => sku?.value === item?.child_sku)}
                  onChange={(e) => onItemSelectChange(e, 'child_sku', index)}
                />
              ) : (
                <Input
                  type="text"
                  name="child_sku"
                  className="child_sku"
                  value={item?.child_sku}
                  onChange={(e) => onItemChange(e, index)}
                />
              )}
              /
              <a
                style={{ color: "red" }}
                href={`/config-child-sku?search_for_first=${item?.item_code}&contains_first=in&search_in_first=parent_sku`}
                target="_blank"
              >
                {item?.item_code}
              </a>
            </Col>
            <Col sm="4">
              <Input
                type="textarea"
                Rows="1"
                name="options"
                id="options"
                placeholder="Click Here"
                value={formatString(item?.item_option)}
                rows="4"
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
              <ItemComponent
                item={item}
                setShowTracking={setShowTracking}
                setItemTracking={setItemTracking}
                carrier={data?.carrier}
              />
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

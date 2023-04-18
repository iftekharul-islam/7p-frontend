import "@styles/react/libs/flatpickr/flatpickr.scss";
import "@styles/react/libs/react-select/_react-select.scss";
import { selectThemeColors } from "@utils";
import { Fragment } from "react";
import { useDispatch } from "react-redux";
import AsyncSelect from "react-select/async";
import { Col, Input, Row } from "reactstrap";
import { getProductOptions } from "../store";

const ProductList = (data, onChange, errors) => {
  console.log("🚀 ~ file: ProductList.js:11 ~ ProductList ~ data:", data)
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
      desc: newValue?.data?.product_name,
      image: newValue?.data?.product_thumb,
      price: newValue?.data?.product_price,
      quantity: 1,
    });
    onChange({ target: { name: "items", value: array } });
  };

  const onItemChange = (e, index) => {
    const array = [...(data?.items ?? [])];
    array[index][e.target?.name] = e.target?.value;
    onChange({ target: { name: "items", value: array } });
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
              <img src={item?.image} alt={item?.sku} height="50" width="50" />
            </Col>
            <Col sm="3">
              <div>{item?.sku}</div>
              <div>{item?.desc}</div>
            </Col>
            <Col sm="4"></Col>
            <Col sm="1">
              <Input
                type="number"
                name="quantity"
                id="quantity"
                placeholder="Quantity"
                value={item?.quantity}
                onChange={(e) => onItemChange(e, index)}
              />
            </Col>
            <Col sm="1">
              <Input
                type="number"
                name="price"
                id="price"
                placeholder="Price"
                value={parseFloat(item?.price).toFixed(2)}
                onChange={(e) => onItemChange(e, index)}
              />
            </Col>
            <Col sm="1">
              <Input
                type="number"
                name="price"
                id="price"
                placeholder="Price"
                value={parseFloat(item?.quantity * item?.price).toFixed(2)}
                disabled
              />
            </Col>
            <Col sm="1">
              <i
                className="fa fa-trash"
                onClick={(e) => onItemChange(e, index)}
              />
            </Col>
            <hr />
          </Row>

          // <Row className="pt-1">
          //   <Col sm="1" className="d-flex align-items-center">
          //     <div className="form-check form-check-success">
          //       <Input
          //         type="checkbox"
          //         name="is_active"
          //         checked={parseInt(item?.line_item_field)}
          //         onChange={(e) =>
          //           onOptionChange(
          //             "line_item_field",
          //             e?.target?.checked ? "1" : "0",
          //             index
          //           )
          //         }
          //       />
          //     </div>
          //   </Col>
          //   <Col sm="2">
          //     <Input
          //       type="text"
          //       name="option_name"
          //       id="option_name"
          //       placeholder="Option Name"
          //       value={item?.option_name}
          //       onChange={(e) =>
          //         onOptionChange("option_name", e?.target?.value, index)
          //       }
          //     />
          //   </Col>
          //   <Col sm="2">
          //     <Select
          //       className="react-select"
          //       classNamePrefix="select"
          //       theme={selectThemeColors}
          //       placeholder="Select Category"
          //       options={catOption}
          //       value={catOption?.find(
          //         (itm) => itm?.value === item?.option_category
          //       )}
          //       onChange={(e) =>
          //         onOptionChange("option_category", e?.value, index)
          //       }
          //     />
          //   </Col>
          //   <Col sm="2">
          //     <Input
          //       type="text"
          //       name="value"
          //       id="value"
          //       placeholder="Value"
          //       value={item?.value}
          //       onChange={(e) =>
          //         onOptionChange("value", e?.target?.value, index)
          //       }
          //     />
          //   </Col>
          //   <Col sm="2">
          //     <Input
          //       type="text"
          //       name="width"
          //       id="width"
          //       placeholder="Width"
          //       value={item?.width}
          //       onChange={(e) =>
          //         onOptionChange("width", e?.target?.value, index)
          //       }
          //     />
          //   </Col>
          //   <Col sm="2">
          //     <Select
          //       className="react-select"
          //       classNamePrefix="select"
          //       theme={selectThemeColors}
          //       placeholder="Select Format"
          //       options={formatOption}
          //       value={formatOption?.find((itm) => itm?.value === item?.format)}
          //       onChange={(e) => onOptionChange("format", e?.value, index)}
          //     />
          //   </Col>
          //   <Col sm="1" className="d-flex align-items-center">
          //     <Link
          //       className="text-truncate text-capitalize align-middle"
          //       onClick={(e) => {
          //         e.preventDefault();
          //         positionUp(index);
          //       }}
          //     >
          //       <ArrowUp size={18} className={`text-primary me-50`} />
          //     </Link>
          //     <Link
          //       className="text-truncate text-capitalize align-middle"
          //       onClick={(e) => {
          //         e.preventDefault();
          //         positionDown(index);
          //       }}
          //     >
          //       <ArrowDown size={18} className={`text-primary me-50`} />
          //     </Link>
          //     <Link
          //       className="text-truncate text-capitalize align-middle"
          //       onClick={(e) => {
          //         e.preventDefault();
          //         removeItem(index);
          //       }}
          //     >
          //       <Trash2 size={18} className={`text-danger me-50`} />
          //     </Link>
          //   </Col>
          // </Row>
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

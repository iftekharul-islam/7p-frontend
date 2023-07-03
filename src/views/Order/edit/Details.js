import "@styles/react/libs/flatpickr/flatpickr.scss";
import "@styles/react/libs/react-select/_react-select.scss";
import { selectThemeColors } from "@utils";
import { Fragment, useEffect } from "react";
import Flatpickr from "react-flatpickr";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Select from "react-select";
import { Button, Col, Label, Row } from "reactstrap";
import {
  UpdateMethod,
  UpdateStore,
  getStatusOptions,
  getStoreOptions,
} from "../store";

const Details = (data, onChange, errors, batched) => {
  console.log("🚀 ~ file: Details.js:18 ~ Details ~ data:", data)
  const dispatch = useDispatch();
  const { id } = useParams();
  const store = useSelector((state) => state.orders);
  useEffect(() => {
    dispatch(getStoreOptions());
    dispatch(getStatusOptions());
  }, []);

  const onStoreChange = (e) => {
    dispatch(UpdateStore({ id, store_select: e?.value }));
    onChange({
      target: {
        name: "store_id",
        value: e?.value,
      },
    });
  };

  const onMethodChange = (e) => {
    dispatch(UpdateMethod({ id, shipping_method: e?.value }));
    onChange({
      target: {
        name: "shipping_method",
        value: e?.value,
      },
    });
  };

  const onShipChange = (e) => {
    dispatch(UpdateMethod({ id, ship_date: e[0] }));
    onChange({
      target: {
        name: "ship_date",
        value: e[0],
      },
    });
  };

  const onShipDateChange = (e) => {
    dispatch(UpdateMethod({ id, ship_date: e[0] }));
    onChange({
      target: {
        name: "ship_date",
        value: e[0],
      },
    });
  };
  return (
    <Fragment>
      <Row>
        <Col sm="4">
          <div>Order: {data?.order_id}</div>
          <div>Date: {data?.order_date}</div>
          {data?.purchase_order && <div>PO: {data?.purchase_order}</div>}
        </Col>
        <Col sm="4">
          <Label className="form-label" for="store">
            Store
          </Label>
          <Select
            className="react-select"
            classNamePrefix="select"
            theme={selectThemeColors}
            placeholder="Select Store"
            options={store?.storeOptions}
            value={store?.storeOptions?.find(
              (item) => item?.value === data?.store_id
            )}
            onChange={onStoreChange}
          />
        </Col>

        <Col sm="4">
          {/* <Label className="form-label" for="date">
            Status
          </Label>
          <Select
            className="react-select"
            classNamePrefix="select"
            theme={selectThemeColors}
            placeholder="Select Status"
            options={store?.statusOptions}
            value={store?.statusOptions?.find(
              (item) =>
                item?.value === data?.status_select ?? data?.order_status
            )}
            onChange={onShipChange}
            onChange={(e) =>
              onChange({
                target: {
                  name: "status_select",
                  value: e?.value,
                },
              })
            }
          /> */}
        </Col>
      </Row>
      <hr />
      <Row>
        <Col sm="2"></Col>
        <Col sm="4">
          <Label className="form-label" for="store">
            Ship Via
          </Label>
          <Select
            className="react-select"
            classNamePrefix="select"
            theme={selectThemeColors}
            placeholder="Ship Via"
            options={store?.shipOptions}
            value={store?.shipOptions?.find((item) => {
              if (data?.store?.change_method == "1" && data?.carrier != "MN") {
                return item?.value === `${data?.carrier}*${data?.method}`;
              } else if (data?.store?.change_method == "1") {
                return item?.value === `${data?.carrier}*`;
              } else {
                if (data?.carrier) {
                  return {
                    label: data?.carrier + data?.method,
                    value: data?.carrier + data?.method,
                  };
                } else {
                  item?.value === "";
                }
              }
            })}
            isDisabled={data?.store?.change_method == "1" ? false : true}
            onChange={onMethodChange}
          />
        </Col>
        <Col sm="4">
          <Label className="form-label" for="date">
            Ship By Date
          </Label>
          <Flatpickr
            className="form-control"
            id="date"
            placeholder="Select Date"
            value={data?.ship_date ?? null}
            options={{ dateFormat: "d-m-Y" }}
            onChange={onShipDateChange}
          />
        </Col>
        <Col sm="2" className="d-flex align-items-end">
          {data?.order_status != 12 && data?.order_status != 7 && (
            <div>
              {data?.carrier == "MN" &&
              data?.order_status != 12 &&
              data?.order_status != 7 ? (
                <Button color="info" onClick={(e) => e.preventDefault()}>
                  {order?.method != "" ? order?.method : "Manual Ship"}
                </Button>
              ) : data?.batched == 0 &&
                data?.order_status != 6 &&
                data?.order_status != 8 ? (
                <Button color="info" onClick={(e) => e.preventDefault()}>
                  Ship
                </Button>
              ) : (
                data?.order_status == 10 && (
                  <Button color="info" onClick={(e) => e.preventDefault()}>
                    Re-Ship Returned Package
                  </Button>
                )
              )}
            </div>
          )}
          {(data?.batched == 0 || data?.batched <= 2) && (
            <Button
              color="info"
              onClick={() => batched(data?.order?.id)}
            >
              Batch
            </Button>
          )}
        </Col>
      </Row>
    </Fragment>
  );
};
export default Details;

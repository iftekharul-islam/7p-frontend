import "@styles/react/libs/flatpickr/flatpickr.scss";
import "@styles/react/libs/react-select/_react-select.scss";
import { selectThemeColors } from "@utils";
import { Fragment, useEffect } from "react";
import Flatpickr from "react-flatpickr";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { Col, Input, Label, Row } from "reactstrap";
import { getStoreOptions } from "../store";

const Details = (data, onChange, errors) => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.manualOrders);
  useEffect(() => {
    dispatch(getStoreOptions());
  }, []);
  return (
    <Fragment>
      <Row>
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
              (item) => item?.value === data?.store
            )}
            onChange={(e) =>
              onChange({
                target: {
                  name: "store",
                  value: e?.value,
                },
              })
            }
          />
        </Col>
        <Col sm="4">
          <Label className="form-label" for="PO">
            PO Number
          </Label>
          <Input
            type="text"
            name="PO"
            id="PO"
            placeholder="Enter PO Number"
            value={data?.PO}
            onChange={onChange}
          />
        </Col>

        <Col sm="4">
          <Label className="form-label" for="date">
            Date
          </Label>
          <Flatpickr
            className="form-control"
            id="date"
            placeholder="Select Date"
            value={data?.start_date ?? null}
            options={{ dateFormat: "m-d-Y" }}
            onChange={(date) =>
              onChange({
                target: { name: "date", value: date[0] },
              })
            }
          />
        </Col>
      </Row>
    </Fragment>
  );
};
export default Details;

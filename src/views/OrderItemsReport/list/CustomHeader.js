import "@styles/react/libs/flatpickr/flatpickr.scss";
import "@styles/react/libs/react-select/_react-select.scss";
import "@styles/react/libs/tables/react-dataTable-component.scss";
import { useEffect, useState } from "react";
import Flatpickr from "react-flatpickr";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { Button, Col, Row } from "reactstrap";
import { getAllData, getStoreOptions, setSearchParams } from "../store";

const CustomHeader = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.orderItemsReports);
  const [loading, setLoading] = useState(false);
  const params = store?.searchParams;

  useEffect(() => {
    dispatch(getStoreOptions());
  }, []);
  const onSearch = async () => {
    setLoading(true);
    await dispatch(getAllData());
    setLoading(false);
  };
  const onChange = (data) => {
    dispatch(setSearchParams(data));
  };
  return (
    <Row className="mb-1">
      <Col sm="3">
        <Select
          placeholder="Select Store"
          options={store?.storeOptions}
          value={store?.storeOptions?.filter((item) =>
            params?.store_ids?.includes(item?.value)
          )}
          onChange={(data) =>
            onChange({ store_ids: data?.map((item) => item?.value) })
          }
          isMulti
        />
      </Col>
      <Col sm="3">
        <Flatpickr
          className="form-control"
          id="start_date"
          placeholder="Enter Start Date"
          value={params?.start_date ?? null}
          options={{ dateFormat: "d-m-Y" }}
          onChange={(date) => onChange({ start_date: date[0] })}
        />
      </Col>
      <Col sm="3">
        <Flatpickr
          className="form-control"
          id="end_date"
          placeholder="Enter End Date"
          value={params?.end_date ?? null}
          options={{ dateFormat: "d-m-Y" }}
          onChange={(date) => onChange({ end_date: date[0] })}
        />
      </Col>
      <Col sm="1">
        <Select
          placeholder="Results"
          options={store?.resultOptions}
          value={store?.resultOptions?.find(
            (item) => item?.value == params?.limit
          )}
          onChange={(data) => onChange({ limit: data?.value })}
        />
      </Col>
      <Col sm="2" className="justify-content-center">
        <Button color="primary" onClick={onSearch} disabled={loading}>
          {loading ? "Searching" : "Search"}
        </Button>
      </Col>
    </Row>
  );
};
export default CustomHeader;

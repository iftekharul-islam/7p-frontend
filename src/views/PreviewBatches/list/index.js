import "@styles/react/libs/flatpickr/flatpickr.scss";
import "@styles/react/libs/react-select/_react-select.scss";
import "@styles/react/libs/tables/react-dataTable-component.scss";
import { Fragment, useEffect, useState } from "react";
import Flatpickr from "react-flatpickr";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { Button, Card, CardBody, Col, Input, Row } from "reactstrap";
import {
  getAllData,
  getSearchInOptions,
  getSectionOptions,
  getStoreOptions,
  setSearchParams
} from "../store";

const index = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.previewBatches);
  const [loading, setLoading] = useState(false);
  const params = store?.searchParams;

  useEffect(() => {
    onSearch();
  }, [store?.params]);

  useEffect(() => {
    dispatch(getSearchInOptions());
    dispatch(getStoreOptions());
    dispatch(getSectionOptions());
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
    <div className="app-user-list">
      <Fragment>
        <Card className="p-2">
          <Row className="mb-1">
            <Col sm="2">
              <Input
                type="text"
                id="search_for_first"
                name="search_for_first"
                placeholder="Search for"
                value={params?.search_for_first}
                onChange={(e) =>
                  onChange({ search_for_first: e?.target?.value })
                }
              />
            </Col>
            <Col sm="2">
              <Select
                className="react-select"
                classNamePrefix="select"
                placeholder="Search in"
                options={store?.searchInOptions}
                value={store?.searchInOptions?.find(
                  (item) => item?.value == params?.search_in_first
                )}
                onChange={(e) => onChange({ search_in_first: e?.value })}
              />
            </Col>
            <Col sm="2">
              <Select
                className="react-select"
                classNamePrefix="select"
                placeholder="Select Store"
                options={store?.storeOptions}
                value={store?.storeOptions?.find(
                  (item) => item?.value == params?.store
                )}
                onChange={(e) => onChange({ store: e?.value })}
              />
            </Col>
            <Col sm="2">
              <Select
                className="react-select"
                classNamePrefix="select"
                placeholder="Select Section"
                options={store?.sectionOptions}
                value={store?.sectionOptions?.find(
                  (item) => item?.value == params?.section
                )}
                onChange={(e) => onChange({ section: e?.value })}
              />
            </Col>
            <Col sm="2">
              <Flatpickr
                className="form-control"
                id="date"
                placeholder="Order Start Date"
                value={params?.start_date ?? null}
                options={{ dateFormat: "d-m-Y" }}
                onChange={(date) => onChange({ start_date: date[0] })}
              />
            </Col>
            <Col sm="2">
              <Flatpickr
                className="form-control"
                id="date"
                placeholder="Order End Date"
                value={params?.end_date ?? null}
                options={{ dateFormat: "d-m-Y" }}
                onChange={(date) => onChange({ end_date: date[0] })}
              />
            </Col>
          </Row>
          <Row className="mb-1">
            <Col sm="11"></Col>
            <Col sm="1" className="d-flex justify-content-end">
              <Button color="primary" onClick={onSearch} disabled={loading}>
                {loading ? "Searching" : "Search"}
              </Button>
            </Col>
          </Row>
        </Card>
        <Card>
          <CardBody>Under Maintenance</CardBody>
        </Card>
      </Fragment>
    </div>
  );
};
export default index;

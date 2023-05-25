import "@styles/react/libs/flatpickr/flatpickr.scss";
import "@styles/react/libs/react-select/_react-select.scss";
import "@styles/react/libs/tables/react-dataTable-component.scss";
import { Fragment, useEffect, useState } from "react";
import Flatpickr from "react-flatpickr";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { Button, Card, Col, Row } from "reactstrap";
import {
    getAllData,
    getCompanyOptions,
    getManufactureOptions,
    getStoreOptions,
    setSearchParams,
} from "../store";

const index = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.sectionReports);
  const [loading, setLoading] = useState(false);
  const params = store?.searchParams;

  useEffect(() => {
    if (store?.params) dispatch(getAllData());
  }, [store?.params]);

  useEffect(() => {
    dispatch(getManufactureOptions());
    dispatch(getStoreOptions());
    dispatch(getCompanyOptions());
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
              <Flatpickr
                className="form-control"
                id="max_date"
                placeholder="Before"
                value={params?.max_date ?? null}
                options={{ dateFormat: "d-m-Y" }}
                onChange={(date) => onChange({ max_date: date[0] })}
              />
            </Col>
            <Col sm="2">
              <Select
                placeholder="Select Manufacture"
                options={store?.manufactureOptions}
                value={store?.manufactureOptions?.find(
                  (item) => item?.value == params?.manufacture_id
                )}
                onChange={(e) => onChange({ manufacture_id: e?.value })}
              />
            </Col>
            <Col sm="2">
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
            <Col sm="2">
              <Select
                placeholder="Select Company"
                options={store?.companyOptions}
                value={store?.companyOptions?.find(
                  (item) => item?.value == params?.company
                )}
                onChange={(e) => onChange({ company: e?.value })}
              />
            </Col>
            <Col sm="2">
            <Flatpickr
                className="form-control"
                id="date"
                placeholder="Start Date"
                value={params?.start_date ?? null}
                options={{ dateFormat: "d-m-Y" }}
                onChange={(date) => onChange({ start_date: date[0] })}
              />
            </Col>
            <Col sm="2">
            <Flatpickr
                className="form-control"
                id="date"
                placeholder="Start Date"
                value={params?.start_date ?? null}
                options={{ dateFormat: "d-m-Y" }}
                onChange={(date) => onChange({ start_date: date[0] })}
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
      </Fragment>
    </div>
  );
};
export default index;

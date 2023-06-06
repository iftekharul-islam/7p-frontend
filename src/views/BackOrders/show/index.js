import "@styles/react/apps/app-users.scss";
import "@styles/react/libs/flatpickr/flatpickr.scss";
import "@styles/react/libs/react-select/_react-select.scss";
import "@styles/react/libs/tables/react-dataTable-component.scss";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Input,
  Row,
} from "reactstrap";
import { getData, setSearchParams } from "../store";
import ShowBatch from "./ShowBatch";
import ShowStockno from "./ShowStockno";

const index = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { tab, data, searchParams, search_inOptions } = useSelector(
    (state) => state.backOrders
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!searchParams?.search_for && !searchParams?.search_in) {
      navigate("/back-orders");
    }
  }, [searchParams]);

  const onSearch = async () => {
    setLoading(true);
    await dispatch(getData());
    setLoading(false);
  };

  useEffect(async() => {
    onSearch()
  }, []);
  
  const onChange = (data) => {
    dispatch(setSearchParams(data));
  };

  return (
    <Fragment>
      <Card>
        <CardHeader>
          <h4 className="card-title">Back Orders</h4>
        </CardHeader>
        <CardBody>
          <Row className="mb-1">
            <Col sm="3">
              <Input
                placeholder="Scan"
                value={searchParams?.search_for}
                onChange={(e) => onChange({ search_for: e?.target?.value })}
              />
            </Col>
            <Col sm="3">
              <Select
                className="react-select"
                classNamePrefix="select"
                options={search_inOptions}
                value={search_inOptions?.find(
                  (item) => item?.value == searchParams?.search_in
                )}
                onChange={(e) => onChange({ search_in: e?.value })}
              />
            </Col>
            <Col sm="2">
              <Button
                color="primary"
                className="btn-primary"
                onClick={onSearch}
                disabled={loading}
              >
                {loading ? "Searching" : "Search"}
              </Button>
            </Col>
          </Row>
          <Row>
            {tab == "by_batch" ? (
              <ShowBatch data={data} />
            ) : (
              <ShowStockno data={data} />
            )}
          </Row>
        </CardBody>
      </Card>
    </Fragment>
  );
};
export default index;

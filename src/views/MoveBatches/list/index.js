import "@styles/react/libs/flatpickr/flatpickr.scss";
import "@styles/react/libs/react-select/_react-select.scss";
import "@styles/react/libs/tables/react-dataTable-component.scss";
import moment from "moment";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import {
  getAllData,
  getStationOptions,
  setSearchParams
} from "../store";

const index = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.moveBatches);
  const [loading, setLoading] = useState(false);
  const params = store?.searchParams;

  useEffect(() => {
    dispatch(getStationOptions());
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
        <Card className="px-1">
          <CardBody>
            <Row>
              <Col sm="2"></Col>
              <Col sm="3">
                <Input
                  placeholder="Find Batches (Comma Separated)"
                  value={params?.scan_batches}
                  onChange={(e) => {
                    onChange({ scan_batches: e?.target?.value });
                  }}
                  onBlur={() =>
                    onChange({ scan_batches: params?.scan_batches + "," })
                  }
                  onKeyDown={(e) => {
                    e?.key === "Enter" &&
                      onChange({ scan_batches: params?.scan_batches + "," });
                  }}
                />
              </Col>
              <Col sm="3">
                <Select
                  className="react-select"
                  classNamePrefix="select"
                  options={store?.stationOptions}
                  placeholder="View Batches in Station"
                  value={store?.stationOptions?.find(
                    (item) => item?.value == params?.station
                  )}
                  onChange={(e) => onChange({ station: e?.value })}
                  isClearable={true}
                />
              </Col>
              <Col sm="2" className="d-flex align-items-start flex-column">
                <Button color="primary" onClick={onSearch} disabled={loading}>
                  {loading ? "Please Wait" : "Search"}
                </Button>
              </Col>
            </Row>
          </CardBody>
        </Card>

        {store?.data?.station && (
          <Card>
            <CardBody>
              <h4 className="card-title">
                {store?.data?.station?.station_name} -{" "}
                {store?.data?.station?.station_description} -{" "}
                {store?.data?.batches?.length} Active Batch/es Found
              </h4>
            </CardBody>
          </Card>
        )}

        {store?.data?.batches?.length > 0 ? (
          <span>
            <Card>
              <CardBody>
                <Row>
                  <Col sm="3"></Col>
                  <Col sm="4">
                    <Select
                      className="react-select"
                      classNamePrefix="select"
                      options={store?.next_in_routeOptions}
                      placeholder="Select Route (To move to other stations)"
                      value={store?.next_in_routeOptions?.find(
                        (item) => item?.value == params?.route
                      )}
                      onChange={(e) => onChange({ route: e?.value })}
                    />
                  </Col>
                  <Col sm="2" className="d-flex align-items-start flex-column">
                    <Button
                      color="primary"
                      onClick={onSearch}
                      disabled={loading}
                    >
                      {loading ? "Please Wait" : "Filter"}
                    </Button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <Button color="primary" onClick={onSearch} disabled={loading}>
                  {loading ? "Please Wait" : "Filter"}
                </Button>
              </CardHeader>
              <CardBody>
                <Row className="mb-1">
                  <Col sm="1">
                    <Input
                      type="checkbox"
                      checked={params?.filter_status == "1"}
                      onChange={(e) =>
                        onChange({
                          filter_status: e?.target?.checked ? "1" : "0",
                        })
                      }
                    />
                  </Col>
                  <Col sm="1">Select All</Col>
                  <Col sm="1">Batch Date</Col>
                  <Col sm="2">Min. Order Date</Col>
                  <Col sm="2">Station</Col>
                  <Col sm="1">Next Station</Col>
                  <Col sm="1">Route</Col>
                  <Col sm="1">Line</Col>
                  <Col sm="2">Image</Col>
                </Row>
                {store?.data?.batches?.map((batch, index) => (
                  <Row>
                    <Col sm="1">
                      <Input
                        type="checkbox"
                        checked={params?.filter_status == "1"}
                        onChange={(e) =>
                          onChange({
                            filter_status: e?.target?.checked ? "1" : "0",
                          })
                        }
                      />
                    </Col>
                    <Col sm="1">
                      <a href="{{ url(sprintf('batches/details/%s',$batch->batch_number )) }}">
                        {batch?.batch_number}
                      </a>
                      <br />
                      {batch?.status.charAt(0).toUpperCase() +
                        batch?.status.slice(1)}
                    </Col>
                    <Col sm="1">
                      {moment(batch?.creation_date).format("dd MMM yyyy")}
                    </Col>
                    <Col sm="2">
                      {moment(batch?.min_order_date).format("dd MMM yyyy")}
                    </Col>
                    <Col sm="2">
                      {batch?.station?.station_name} -{" "}
                      {batch?.station?.station_description}
                    </Col>
                    {/* TODO update next_in_route after getting data */}
                    <Col sm="1">{next_in_route[batch?.batch_route_id]}</Col>
                    <Col sm="1">{batch?.route?.batch_code}</Col>
                    <Col sm="1">{batch?.itemsCount[0]?.count}</Col>
                    <Col sm="2">
                      <img
                        src={batch?.first_item?.item_thumbnail}
                        width="70"
                        height="70"
                      />
                      {batch?.first_item?.item_thumb}
                    </Col>
                  </Row>
                ))}
              </CardBody>
            </Card>
          </span>
        ) : (
          <Card>
            <CardBody>
              <h4 className="d-flex align-items-center justify-content-center">
                No movable batches found.
              </h4>
            </CardBody>
          </Card>
        )}
      </Fragment>
    </div>
  );
};
export default index;

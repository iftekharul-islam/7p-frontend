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
  setMoveParams,
  setSearchParams,
} from "../store";

const index = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.moveBatches);
  const [loading, setLoading] = useState(false);
  const params = store?.searchParams;

  useEffect(() => {
    dispatch(getStationOptions());
  }, []);

  const onSearch = async (params) => {
    setLoading(true);
    await dispatch(getAllData(params));
    setLoading(false);
  };

  const onChange = (data) => {
    dispatch(setSearchParams(data));
  };

  const selectChange = (e) => {
    dispatch(setMoveParams(e?.target?.value));
  };
  const selectAllChange = () => {
    dispatch(setMoveParams("all"));
  };

  const moveToNextStation = () => {
    onSearch({ task: "next", batch_number: store?.moveParams, route: null });
  };

  const moveToStation = () => {
    onSearch({ task: "move", batch_number: store?.moveParams, station: null });
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
                <Button
                  color="primary"
                  onClick={() => onSearch({})}
                  disabled={loading}
                >
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
                {((store?.data?.route && store?.data?.route != "all") ||
                  store?.data?.batches?.length == 1) &&
                store?.data?.stations_in_route?.length > 0 ? (
                  <Row>
                    <Col sm="3"></Col>
                    <Col sm="4">
                      <Select
                        className="react-select"
                        classNamePrefix="select"
                        options={store?.stations_in_routeOptions}
                        placeholder="Select Route (To move to other stations)"
                        value={store?.stations_in_routeOptions?.find(
                          (item) => item?.value == params?.route
                        )}
                        onChange={(e) => onChange({ station_change: e?.value })}
                      />
                    </Col>
                    <Col
                      sm="2"
                      className="d-flex align-items-start flex-column"
                    >
                      <Button
                        color="primary"
                        onClick={moveToStation}
                        disabled={loading}
                      >
                        {loading ? "Please Wait" : "Move to Station"}
                      </Button>
                    </Col>
                  </Row>
                ) : (
                  <Row>
                    <Col sm="3"></Col>
                    <Col sm="4">
                      <Select
                        className="react-select"
                        classNamePrefix="select"
                        options={store?.routes_in_stationOptions}
                        placeholder="Select Route (To move to other stations)"
                        value={store?.routes_in_stationOptions?.find(
                          (item) => item?.value == params?.route
                        )}
                        onChange={(e) => onChange({ route: e?.value })}
                      />
                    </Col>
                    <Col
                      sm="2"
                      className="d-flex align-items-start flex-column"
                    >
                      <Button
                        color="primary"
                        onClick={() => onSearch({})}
                        disabled={loading}
                      >
                        {loading ? "Please Wait" : "Filter"}
                      </Button>
                    </Col>
                  </Row>
                )}
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <Button
                  color="primary"
                  onClick={moveToNextStation}
                  disabled={loading}
                >
                  {loading ? "Please Wait" : "Move to Next Station"}
                </Button>
              </CardHeader>
              <CardBody>
                <Row className="mb-1">
                  <Col sm="1">
                    <Input
                      type="checkbox"
                      checked={store?.allChecked}
                      onChange={selectAllChange}
                    />
                  </Col>
                  <Col sm="1">
                    {store?.allChecked ? "UnCheck All" : "Check All"}
                  </Col>
                  <Col sm="1">Batch Date</Col>
                  <Col sm="2">Min. Order Date</Col>
                  <Col sm="2">Station</Col>
                  <Col sm="1">Next Station</Col>
                  <Col sm="1">Route</Col>
                  <Col sm="1">Line</Col>
                  <Col sm="2">Image</Col>
                  <hr />
                </Row>
                {store?.data?.batches?.map((batch, index) => (
                  <Row>
                    <Col sm="1">
                      <Input
                        type="checkbox"
                        value={batch?.batch_number}
                        checked={store?.moveParams?.includes(
                          batch?.batch_number
                        )}
                        onChange={selectChange}
                      />
                    </Col>
                    <Col sm="1">
                      <a href={`/batch-list/${batch?.batch_number}`}>
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
                    <Col sm="1">
                      {store?.data?.next_in_route[batch?.batch_route_id]}
                    </Col>
                    <Col sm="1">{batch?.route?.batch_code}</Col>
                    <Col sm="1">
                      {batch?.items_count?.length > 0 &&
                        batch?.items_count[0]?.count}
                    </Col>
                    <Col sm="2">
                      <img
                        src={batch?.first_item?.item_thumb}
                        width="70"
                        height="70"
                      />
                      <a href={batch?.first_item?.item_thumb} target="_blank">
                        {batch.first_item?.item_thumb}
                      </a>
                    </Col>
                    <hr />
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

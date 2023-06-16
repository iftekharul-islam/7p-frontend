import "@styles/react/libs/react-select/_react-select.scss";
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
  Spinner,
} from "reactstrap";
import {
  getAllData,
  getShowData,
  getStoreOptions,
  setSearchParams
} from "../store";
import { useNavigate } from "react-router-dom";

const index = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { data, searchParams, storeOptions } = useSelector(
    (state) => state.moveToQC
  );

  useEffect(() => {
    dispatch(getStoreOptions());
    handleSearch();
  }, []);

  const ShowBatch = async () => {
    setLoading(true);
    const res = await dispatch(getShowData());
    if (res?.payload?.status) {
      navigate("/move-to-qc/show");
    }
    setLoading(false);
  }

  const handleSearch = async () => {
    setLoading(true);
    await dispatch(getAllData());
    setLoading(false);
  };

  const onChange = (data) => {
    dispatch(setSearchParams(data));
  };

  return (
    <Fragment>
      <Card>
        <CardHeader>
          <h4 className="card-title">Move to Production</h4>
        </CardHeader>
        <CardBody>
          <Row className="mb-1">
            <Col md="3">
              <Input
                placeholder="Search for Second"
                value={searchParams?.scan_batches}
                onChange={(e) =>
                  onChange({ scan_batches: e?.target?.value })
                }
              />
            </Col>
            <Col md="2">
              <Button color="primary" onClick={ShowBatch} disabled={loading}>
                {loading ? "Please Wait..." : "Show Batch"}
              </Button>
            </Col>
            <Col md="1"></Col>

            <Col md="3">
              <Select
                className="react-select"
                classNamePrefix="select"
                placeholder="Filter by Store"
                isMulti
                options={storeOptions}
                value={storeOptions?.filter((item) =>
                  searchParams?.store_id?.includes(item?.value)
                )}
                onChange={(e) => {
                  onChange({ store_id: e?.map((item) => item?.value) });
                }}
                isDisabled={loading}
              />
            </Col>
            <Col md="2">
              <Button color="primary" onClick={handleSearch} disabled={loading}>
                {loading ? "Please Wait..." : "Filter by Store"}
              </Button>
            </Col>
          </Row>
          {data?.length > 0 ? (
            <div>
              <Row>
                <Col>
                  <h4>
                    {data.reduce(function (prev, cur) {
                      return prev + cur?.total;
                    }, 0)}{" "}
                    Batches to move to production
                  </h4>
                </Col>
              </Row>
              {data?.map((row, index) => {
                return (
                  <Row key={index}>
                    <Col md="3" className="p-1 border">
                      {row?.section?.section_name}
                    </Col>
                    <Col md="7" className="p-1 border">
                      {row?.production_station?.station_description}
                    </Col>
                    <Col
                      md="2"
                      className="p-1 border d-flex justify-content-center"
                    >
                      {row?.total}
                    </Col>
                  </Row>
                );
              })}
              <Row>
                <Col md="7"></Col>
                <Col md="3" className="p-1">
                  <b>Total</b>
                </Col>
                <Col md="2" className="p-1 d-flex justify-content-center">
                  <b>
                    {data.reduce(function (prev, cur) {
                      return prev + cur?.total;
                    }, 0)}
                  </b>
                </Col>
              </Row>
            </div>
          ) : (
            <Row>
              <Col md="12">
                <h4 className="text-center">
                  {loading ? (
                    <span>
                      <Spinner size="sm" />
                      Data Loading
                    </span>
                  ) : (
                    "No Data Found"
                  )}
                </h4>
              </Col>
            </Row>
          )}
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default index;

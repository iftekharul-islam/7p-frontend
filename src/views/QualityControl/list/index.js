import "@styles/react/libs/react-select/_react-select.scss";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
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
import { getAllData, getOrderData, setSearchParams } from "../store";

const index = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { data, searchParams } = useSelector((state) => state.qualityControls);

  const handleSearch = async () => {
    const res = await dispatch(getOrderData());
    if (res?.payload) {
      navigate("/quality-control/order");
    }
  };

  useEffect(() => {
    setLoading(true);
    dispatch(getAllData());
    setLoading(false);
  }, []);

  const listNavigate = async (e, section) => {
    e.preventDefault();
    navigate("/quality-control/list/" + section?.station_id);
  };

  return (
    <Fragment>
      <Card>
        <CardHeader>
          <h4 className="card-title">Must Ship Report</h4>
        </CardHeader>
        <CardBody>
          <Row className="mb-1">
            <Col md="2">
              <Input
                type="text"
                placeholder="Enter Batch"
                value={searchParams?.batch_number}
                onChange={(e) =>
                  dispatch(setSearchParams({ batch_number: e.target.value }))
                }
              />
            </Col>
            <Col md="2">
              <Input
                type="text"
                value={searchParams?.user_barcode}
                onChange={(e) =>
                  dispatch(setSearchParams({ user_barcode: e.target.value }))
                }
              />
            </Col>
            <Col md="2">
              <Button color="primary" onClick={handleSearch} disabled={loading}>
                {loading ? "Please Wait..." : "Open Batch"}
              </Button>
            </Col>
          </Row>
          {data?.totals?.length > 0 ? (
            <div>
              {data?.totals?.map((section, index) => {
                return (
                  <Row>
                    <Col md="2"></Col>
                    <Col md="8">
                      <Link to={`/quality-control/list/${section?.station_id}`}>
                        <Row key={index}>
                          <Col md="3" className="p-1 border">
                            {section?.section
                              ? section?.section?.section_name
                              : "Section not found"}
                          </Col>
                          <Col md="3" className="p-1 border">
                            {section?.station
                              ? section?.station?.station_name
                              : "Station not found"}
                          </Col>
                          <Col md="6" className="p-1 border">
                            {section?.count} Batch(es)
                          </Col>
                        </Row>
                      </Link>
                    </Col>
                    <Col md="2"></Col>
                  </Row>
                );
              })}
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
                    "No batches in station."
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

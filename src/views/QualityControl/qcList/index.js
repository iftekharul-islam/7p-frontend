import moment from "moment";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
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
import { getListData, setSearchParams } from "../store";

const index = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const { listData, searchParams } = useSelector(
    (state) => state?.qualityControls
  );

  useEffect(async () => {
    if (searchParams?.station_id) {
      setLoading(true);
      await dispatch(getListData());
      setLoading(false);
    } else {
      navigate("/quality-control");
    }
  }, [searchParams?.station_id]);

  const handleSearch = async () => {
    console.log("A");
  };

  return (
    <Fragment>
      <Card>
        <CardHeader>
          <h4 className="card-title">
            {loading ? (
              <span>
                Please Wait <Spinner size="sm" />
              </span>
            ) : (
              listData?.station?.station_description
            )}
          </h4>
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
                type="password"
                placeholder="Enter Batch"
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
          {listData?.batches?.length > 0 ? (
            <div>
              <Row>
                <Col md="2" className="p-1 border">
                  Batch
                </Col>
                <Col md="1" className="p-1 border">
                  First order
                </Col>
                <Col md="1" className="p-1 border">
                  Lines
                </Col>
                <Col md="3" className="p-1 border">
                  Last Scan
                </Col>
                <Col md="2" className="p-1 border"></Col>
                <Col md="3" className="p-1 border"></Col>
              </Row>
              {listData?.batches?.map((batch, index) => {
                return (
                  <Link
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(
                        setSearchParams({
                          batch_number: batch?.batch_number,
                        })
                      );
                    }}
                  >
                    <Row key={index}>
                      <Col md="2" className="p-1 border">
                        {batch?.batch_number}
                        {batch?.store && (
                          <>
                            <br />
                            {batch?.store?.store_name}
                          </>
                        )}
                      </Col>
                      <Col md="1" className="p-1 border">
                        {moment(batch?.min_order_date).format("YYYY-MM-DD")}
                      </Col>
                      <Col md="1" className="p-1 border">
                        {batch?.items_count ?? 0}
                      </Col>
                      <Col md="3" className="p-1 border">
                        {batch?.scanned_in &&
                          batch?.scanned_in?.station_id ==
                            batch?.station_id && (
                            <>
                              <strong>
                                QC in Progress by{" "}
                                {batch?.scanned_in?.in_user?.username}
                              </strong>
                              <br />
                            </>
                          )}
                        {batch?.change_date}
                      </Col>
                      {batch?.first_item ? (
                        <>
                          <Col md="2" className="p-1 border">
                            <img
                              src={batch?.first_item?.item_thumb}
                              width="70"
                              height="70"
                            />
                          </Col>
                          <Col md="3" className="p-1 border">
                            {batch?.first_item?.item_description}
                          </Col>
                        </>
                      ) : (
                        <Col md="5" className="p-1 border">
                          No Items
                        </Col>
                      )}
                    </Row>
                  </Link>
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

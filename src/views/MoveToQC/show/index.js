import "@styles/react/libs/react-select/_react-select.scss";
import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardBody, Col, Input, Row } from "reactstrap";
import { getShowData, setSearchParams } from "../store";

const index = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { showData, searchParams } = useSelector((state) => state.moveToQC);

  const ShowBatch = async () => {
    setLoading(true);
    const res = await dispatch(getShowData());
    if (!res?.payload?.status) {
      navigate("/move-to-qc");
    }
    setLoading(false);
  };

  const onChange = (data) => {
    dispatch(setSearchParams(data));
  };

  return (
    <Fragment>
      <Card>
        <CardBody>
          <Row className="mb-1">
            <Col md="3">
              <Input
                placeholder="Search for Second"
                value={searchParams?.scan_batches}
                onChange={(e) => onChange({ scan_batches: e?.target?.value })}
              />
            </Col>
            <Col md="2">
              <Button color="primary" onClick={ShowBatch} disabled={loading}>
                {loading ? "Please Wait..." : "Show Batch"}
              </Button>
            </Col>
            <Col md="7"></Col>
          </Row>
          {showData?.to_move && (
            <div>
              <Row>
                <Col md="3">
                  <h4>Batch {showData?.to_move?.batch_number}</h4>
                </Col>
                <Col md="6">
                  <h3>
                    Moved to {showData?.to_move?.station?.station_description}
                  </h3>
                </Col>
                <Col md="3">
                  {showData?.to_move?.summary_date ? (
                    <div>
                      <Button
                        color="primary"
                        onClick={() => console.log("Under developed")}
                      >
                        Print Summary
                      </Button>
                    </div>
                  ) : (
                    <div>
                      Summary Printed by{" "}
                      {showData?.to_move?.summary_user?.username} <br />
                      {showData?.to_move?.summary_date}
                    </div>
                  )}
                </Col>
              </Row>
              <hr />
            </div>
          )}
          {showData?.to_move?.items?.length > 0 && (
            <Row>
              {showData?.to_move?.items?.map((item, index) => {
                return (
                  <>
                    <Col md="1">
                      <span>
                        <img src={item?.item_thumb} width="90" height="90" />
                        <br />
                        Order# {item?.order?.short_order}
                        <br />
                        Sku# {showData?.to_move?.items[0]?.child_sku}
                      </span>
                    </Col>
                    <Col md="2">
                      {item?.item_quantity != 1 && (
                        <span>
                          <b>QTY: {item?.item_quantity}</b>
                          <br />
                        </span>
                      )}
                      <Button color="primary">Reject Item</Button>
                    </Col>
                    <Col md="3">
                      <Input type="textarea" row="4" />
                    </Col>
                  </>
                );
              })}
            </Row>
          )}
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default index;

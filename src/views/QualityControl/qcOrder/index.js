import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardBody, Col, Input, Row } from "reactstrap";
import { setSearchParams } from "../store";

const index = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const { searchParams } = useSelector((state) => state?.qualityControls);

  const getOrderData = async () => {
    setLoading(true);
    if (searchParams) {
      // const res = await dispatch(getOrder());
    } else {
      navigate("/quality-control");
    }

    setLoading(false);
  };
  useEffect(() => {
    getOrderData();
  }, [searchParams]);

  const handleSearch = async () => {
    console.log("A");
  };

  return (
    <Fragment>
      <Card>
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
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default index;

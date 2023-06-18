import "@styles/react/libs/flatpickr/flatpickr.scss";
import "@styles/react/libs/react-select/_react-select.scss";
import moment from "moment";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
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
import { getWAPData, setSearchParams } from "../store";

const index = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { WAPData, searchParams } = useSelector((state) => state.WAP);
  useEffect(async() => {
    setLoading(true);
    await dispatch(getWAPData(id));
    setLoading(false);
  }, []);

  const OpenBin = async () => {
    setLoading(true);
    const res = await dispatch(getShowData());
    if (res?.payload?.status) {
           // navigate("/wap/bin");
    }
    setLoading(false);
  };

  const onChange = (data) => {
    dispatch(setSearchParams(data));
  };

  return (
    <Fragment>
      <Card>
        <CardHeader>
          <h4 className="card-title">WAP</h4>
        </CardHeader>
        <CardBody>
          <Row className="mb-1">
            <Col md="7"></Col>  
            <Col md="2">
              <Input
                type="text"
                name="order_id"
                placeholder="Scan Label"
                value={searchParams?.store_id}
                onChange={(e) => onChange({ order_id: e?.target?.value })}
              />
            </Col>
            <Col md="2">
              <Button color="primary" onClick={OpenBin} disabled={loading}>
                {loading ? "Please Wait..." : "Open Bin"}
              </Button>
            </Col>
          </Row>
          {WAPData?.order == null ? (
            <div>
              <Row>
                <Col md="3" className="p-1">
                  BIN <b>#{WAPData?.bin?.name}</b>
                </Col>
                <Col md="7" className="p-1">
                  Order <b>#<Link to={`/customer-order-edit/${WAPData?.order?.id}`}>{WAPData?.order?.short_order}</Link></b>
                </Col>
                <Col md="2" className="p-1">
                  <small>Order Date: {moment(WAPData?.order?.order_date).format('YYYY-MM-DD')}</small>
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

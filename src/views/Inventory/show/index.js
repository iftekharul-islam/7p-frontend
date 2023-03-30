import { Fragment, useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Form,
  Input,
  Label,
  Row,
  Spinner,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { getVendor, UpdateVendor } from "../store";
import { useNavigate, useParams } from "react-router-dom";

const index = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [errors, setErrors] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const store = useSelector((state) => state.inventories);

  useEffect(() => {
    if (id) {
      dispatch(getVendor(id));
    }
  }, [id]);

  useEffect(() => {
    if (store?.vendor) {
      setData(store?.vendor);
    }
  }, [store?.vendor]);

  const onChange = (e) => {
    setData({
      ...data,
      [e.target?.name]: e.target?.value,
    });
  };

  const onSubmit = async () => {
    const res = await dispatch(UpdateVendor({ id, data }));
    if (res?.payload?.status) {
      navigate("/vendor");
    } else {
      setErrors(res?.payload?.data?.errors);
    }
  };

  return (
    <Fragment>
      <Row>
        <Form>
          <Col sm="8">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Vendor</CardTitle>
              </CardHeader>
            </Card>
            <Row>
              <Col sm="4">
                <Card className="align-items-center">
                  <CardBody className="d-flex justify-content-center">
                    <div className="me-25">
                      <img
                        className="rounded me-50"
                        src={data?.image}
                        alt="Generic placeholder image"
                        height="200"
                        width="200"
                      />
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="8">
                <Card className="p-2">
                  <Row className="mb-1">
                    <Col sm="4">
                      <h5>Name</h5>
                    </Col>
                    <Col sm="1">
                      <h5>:</h5>
                    </Col>
                    <Col sm="7">
                      <h5>{data?.vendor_name}</h5>
                    </Col>
                  </Row>
                  <Row className="mb-1">
                    <Col sm="4">
                      <h5>Zip Code</h5>
                    </Col>
                    <Col sm="1">
                      <h5>:</h5>
                    </Col>
                    <Col sm="7">
                      <h5>{data?.zip_code}</h5>
                    </Col>
                  </Row>
                  <Row className="mb-1">
                    <Col sm="4">
                      <h5>State</h5>
                    </Col>
                    <Col sm="1">
                      <h5>:</h5>
                    </Col>
                    <Col sm="7">
                      <h5>{data?.state}</h5>
                    </Col>
                  </Row>
                  <Row className="mb-1">
                    <Col sm="4">
                      <h5>Country</h5>
                    </Col>
                    <Col sm="1">
                      <h5>:</h5>
                    </Col>
                    <Col sm="7">
                      <h5>{data?.country}</h5>
                    </Col>
                  </Row>
                  <Row className="mb-1">
                    <Col sm="4">
                      <h5>Email</h5>
                    </Col>
                    <Col sm="1">
                      <h5>:</h5>
                    </Col>
                    <Col sm="7">
                      <h5>{data?.email}</h5>
                    </Col>
                  </Row>
                  <Row className="mb-1">
                    <Col sm="4">
                      <h5>Phone Number</h5>
                    </Col>
                    <Col sm="1">
                      <h5>:</h5>
                    </Col>
                    <Col sm="7">
                      <h5>{data?.phone_number}</h5>
                    </Col>
                  </Row>
                  <Row className="mb-1">
                    <Col sm="4">
                      <h5>Contact Person Name</h5>
                    </Col>
                    <Col sm="1">
                      <h5>:</h5>
                    </Col>
                    <Col sm="7">
                      <h5>{data?.contact_person_name}</h5>
                    </Col>
                  </Row>
                  <Row className="mb-1">
                    <Col sm="4">
                      <h5>Account Link</h5>
                    </Col>
                    <Col sm="1">
                      <h5>:</h5>
                    </Col>
                    <Col sm="7">
                      <h5>{data?.link}</h5>
                    </Col>
                  </Row>
                  <Row className="mb-1">
                    <Col sm="4">
                      <h5>Account Login</h5>
                    </Col>
                    <Col sm="1">
                      <h5>:</h5>
                    </Col>
                    <Col sm="7">
                      <h5>{data?.login_id}</h5>
                    </Col>
                  </Row>
                  <Row className="mb-1">
                    <Col sm="4">
                      <h5>Account Password</h5>
                    </Col>
                    <Col sm="1">
                      <h5>:</h5>
                    </Col>
                    <Col sm="7">
                      <h5>{data?.password}</h5>
                    </Col>
                  </Row>
                  <Row className="mb-1">
                    <Col sm="4">
                      <h5>Bank Info</h5>
                    </Col>
                    <Col sm="1">
                      <h5>:</h5>
                    </Col>
                    <Col sm="7">
                      <h5>{data?.bank_info}</h5>
                    </Col>
                  </Row>
                  <Row className="mb-1">
                    <Col sm="4">
                      <h5>Paypal Info</h5>
                    </Col>
                    <Col sm="1">
                      <h5>:</h5>
                    </Col>
                    <Col sm="7">
                      <h5>{data?.paypal_info}</h5>
                    </Col>
                  </Row>
                  <Row className="mb-1">
                    <Col sm="4">
                      <h5>Notes</h5>
                    </Col>
                    <Col sm="1">
                      <h5>:</h5>
                    </Col>
                    <Col sm="7">
                      <h5>{data?.notes}</h5>
                    </Col>
                  </Row>                  
                </Card>
              </Col>
            </Row>
          </Col>
        </Form>
      </Row>
    </Fragment>
  );
};
export default index;

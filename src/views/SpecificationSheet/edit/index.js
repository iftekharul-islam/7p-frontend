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
import {  getVendor, UpdateVendor } from "../store";
import { useNavigate, useParams } from "react-router-dom";

const index = () => {
  const {id} = useParams();
  const [data, setData] = useState(null);
  const [errors, setErrors] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const store = useSelector((state) => state.vendors);

  useEffect(() => {
    if(id) {
      dispatch(getVendor(id))
    }
  }, [id])

  useEffect(() => {
    if(store?.vendor) {
      setData(store?.vendor)
    }
  }, [store?.vendor])
  
  const onChange = (e) => {
    setData({
      ...data,
      [e.target?.name]: e.target?.value,
    });
  };

  const onSubmit = async () => {
    const res = await dispatch(UpdateVendor({id, data}));
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
          <Col sm="6">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Edit Vendor</CardTitle>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col sm="12" className="mb-1">
                    <Label className="form-label" for="image">
                      Image
                    </Label>
                    <Input
                      type="file"
                      name="image"
                      id="image"
                      placeholder="image"
                      // value={data?.image}
                      onChange={onChange}
                    />
                  </Col>
                  <Col sm="12">
                    <Label className="form-label" for="vendor_name">
                      Name
                    </Label>
                    <Input
                      type="text"
                      name="vendor_name"
                      id="vendor_name"
                      placeholder="Name"
                      value={data?.vendor_name}
                      onChange={onChange}
                    />
                    <small className="text-danger">{errors?.vendor_name}</small>
                  </Col>

                  <Col sm="12">
                    <Label className="form-label" for="zip_code">
                      Zip Code
                    </Label>
                    <Input
                      type="text"
                      name="zip_code"
                      id="zip_code"
                      placeholder="Zip Code"
                      value={data?.zip_code}
                      onChange={onChange}
                    />
                  </Col>
                  <Col sm="12">
                    <Label className="form-label" for="state">
                      State
                    </Label>
                    <Input
                      type="text"
                      name="state"
                      id="state"
                      placeholder="State"
                      value={data?.state}
                      onChange={onChange}
                    />
                  </Col>
                  <Col sm="12">
                    <Label className="form-label" for="country">
                      Country
                    </Label>
                    <Input
                      type="text"
                      name="country"
                      id="country"
                      placeholder="Country"
                      value={data?.country}
                      onChange={onChange}
                    />
                  </Col>
                  <Col sm="12">
                    <Label className="form-label" for="email">
                      Email
                    </Label>
                    <Input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Email"
                      value={data?.email}
                      onChange={onChange}
                    />
                     <small className="text-danger">{errors?.email}</small>
                  </Col>

                  <Col sm="12">
                    <Label className="form-label" for="phone_number">
                      Phone Number
                    </Label>
                    <Input
                      type="text"
                      name="phone_number"
                      id="phone_number"
                      placeholder="Phone Number"
                      value={data?.phone_number}
                      onChange={onChange}
                    />
                     <small className="text-danger">{errors?.phone_number}</small>
                  </Col>
                  <Col sm="12">
                    <Label className="form-label" for="contact_person_name">
                      Contact Person Name
                    </Label>
                    <Input
                      type="text"
                      name="contact_person_name"
                      id="contact_person_name"
                      placeholder="Contact Person Name"
                      value={data?.contact_person_name}
                      onChange={onChange}
                    />
                  </Col>
                  <Col sm="12">
                    <Label className="form-label" for="link">
                      Account Link
                    </Label>
                    <Input
                      type="text"
                      name="link"
                      id="link"
                      placeholder="Account Link"
                      value={data?.link}
                      onChange={onChange}
                    />
                  </Col>
                  <Col sm="12">
                    <Label className="form-label" for="login_id">
                      Account Login
                    </Label>
                    <Input
                      type="text"
                      name="login_id"
                      id="login_id"
                      placeholder="Account Login"
                      value={data?.login_id}
                      onChange={onChange}
                    />
                  </Col>
                  <Col sm="12">
                    <Label className="form-label" for="password">
                      Account Password
                    </Label>
                    <Input
                      type="text"
                      name="password"
                      id="password"
                      placeholder="Account Password"
                      value={data?.password}
                      onChange={onChange}
                    />
                  </Col>
                  <Col sm="12">
                    <Label className="form-label" for="bank_info">
                      Bank Info
                    </Label>
                    <Input
                      type="text"
                      name="bank_info"
                      id="bank_info"
                      placeholder="Bank Info"
                      value={data?.bank_info}
                      onChange={onChange}
                    />
                  </Col>
                  <Col sm="12">
                    <Label className="form-label" for="paypal_info">
                      Paypal Info
                    </Label>
                    <Input
                      type="text"
                      name="paypal_info"
                      id="paypal_info"
                      placeholder="Paypal Info"
                      value={data?.paypal_info}
                      onChange={onChange}
                    />
                  </Col>
                  <Col sm="12">
                    <Label className="form-label" for="notes">
                      Notes
                    </Label>
                    <Input
                      type="text"
                      name="notes"
                      id="notes"
                      placeholder="Notes"
                      value={data?.notes}
                      onChange={onChange}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col sm="12" className="mt-1">
                    <div className="d-flex">
                      <Button
                        className="me-1"
                        color="primary"
                        type="submit"
                        onClick={(e) => {
                          e.preventDefault();
                          onSubmit();
                        }}
                      >
                        Submit
                      </Button>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Form>
      </Row>
    </Fragment>
  );
};
export default index;

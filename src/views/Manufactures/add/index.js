import { Fragment, useState } from "react";
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
} from "reactstrap";
import { useDispatch } from "react-redux";
import { AddManufacture } from "../store";
import { useNavigate } from "react-router-dom";

const index = () => {
  const [data, setData] = useState(null);
  const [errors, setErrors] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChange = (e) => {
    setData({
      ...data,
      [e.target?.name]: e.target?.value,
    });
  };

  const onSubmit = async () => {
    const res = await dispatch(AddManufacture(data));
    if (res?.payload?.status) {
      navigate("/manufacture");
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
                <CardTitle tag="h4">New Production Categories</CardTitle>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col sm="12">
                    <Label className="form-label" for="name">
                    Name
                    </Label>
                    <Input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter Category Code"
                      value={data?.name}
                      onChange={onChange}
                    />
                    <small className="text-danger">
                      {errors?.production_category_code}
                    </small>
                  </Col>
                  <Col sm="12">
                    <Label className="form-label" for="description">
                    Description
                    </Label>
                    <Input
                      type="textarea"
                      name="description"
                      id="description"
                      placeholder="Enter Description"
                      value={data?.manufacture}
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

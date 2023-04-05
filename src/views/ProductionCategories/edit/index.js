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
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCategory, UpdateCategory } from "../store";
import { useNavigate, useParams } from "react-router-dom";

const index = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [errors, setErrors] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const store = useSelector((state) => state.categories);

  useEffect(() => {
    if (id) {
      dispatch(getCategory(id));
    }
  }, [id]);

  useEffect(() => {
    if (store?.category) {
      setData(store?.category);
    }
  }, [store?.category]);

  const onChange = (e) => {
    setData({
      ...data,
      [e.target?.name]: e.target?.value,
    });
  };

  const onSubmit = async () => {
    const res = await dispatch(UpdateCategory({ id, data }));
    if (res?.payload?.status) {
      navigate("/category");
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
                <CardTitle tag="h4">Edit Production Categories</CardTitle>
              </CardHeader>
              <CardBody>
              <Row>
                  <Col sm="12">
                    <Label className="form-label" for="production_category_code">
                    Category Code
                    </Label>
                    <Input
                      type="text"
                      name="production_category_code"
                      id="production_category_code"
                      placeholder="Enter Category Code"
                      value={data?.production_category_code}
                      onChange={onChange}
                    />
                    <small className="text-danger">
                      {errors?.production_category_code}
                    </small>
                  </Col>
                  <Col sm="12">
                    <Label className="form-label" for="production_category_description">
                    Description
                    </Label>
                    <Input
                      type="text"
                      name="production_category_description"
                      id="production_category_description"
                      placeholder="Enter Description"
                      value={data?.production_category_description}
                      onChange={onChange}
                    />
                  </Col>
                  <Col sm="12">
                    <Label className="form-label" for="production_category_display_order">
                    Display Order
                    </Label>
                    <Input
                      type="number"
                      name="production_category_display_order"
                      id="production_category_display_order"
                      placeholder="Enter Display Order"
                      value={data?.production_category_display_order}
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

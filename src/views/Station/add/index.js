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
import { selectThemeColors } from "@utils";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { AddStation, getSectionOption } from "../store";
import { useNavigate } from "react-router-dom";

const index = () => {
  const [data, setData] = useState(null);
  const [errors, setErrors] = useState(null);
  const store = useSelector((state) => state.stations);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getSectionOption());
  }, []);

  const onChange = (e) => {
    setData({
      ...data,
      [e.target?.name]: e.target?.value,
    });
  };

  const onSubmit = async () => {
    const res = await dispatch(AddStation(data));
    if (res?.payload?.status) {
      navigate("/station");
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
                <CardTitle tag="h4">New Station</CardTitle>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col sm="12">
                    <Label className="form-label" for="station_name">
                      Station Name
                    </Label>
                    <Input
                      type="text"
                      name="station_name"
                      id="station_name"
                      placeholder="Enter Station Name"
                      value={data?.station_name}
                      onChange={onChange}
                    />
                    <small className="text-danger">
                      {errors?.station_name}
                    </small>
                  </Col>
                  <Col sm="12">
                    <Label className="form-label" for="station_description">
                      Description
                    </Label>
                    <Input
                      type="text"
                      name="station_description"
                      id="station_description"
                      placeholder="Enter Station Description"
                      value={data?.station_description}
                      onChange={onChange}
                    />
                  </Col>

                  <Col sm="12">
                    <Label className="form-label" for="section">
                      Section
                    </Label>
                    <Select
                      className="react-select"
                      classNamePrefix="select"
                      theme={selectThemeColors}
                      placeholder="Select Section"
                      options={store?.sectionOption}
                      value={store?.sectionOption?.find(
                        (item) => item?.value === data?.section
                      )}
                      onChange={(e) =>
                        onChange({
                          target: { name: "section", value: e?.value },
                        })
                      }
                    />
                  </Col>
                  <Col sm="12">
                    <Label className="form-label" for="type">
                      Type
                    </Label>
                    <Select
                      className="react-select"
                      classNamePrefix="select"
                      theme={selectThemeColors}
                      placeholder="Select Type"
                      options={store?.typeOption}
                      value={store?.typeOption?.find(
                        (item) => item?.value === data?.type
                      )}
                      onChange={(e) =>
                        onChange({
                          target: { name: "type", value: e?.value },
                        })
                      }
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

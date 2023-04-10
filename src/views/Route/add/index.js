import { selectThemeColors } from "@utils";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
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
  Row
} from "reactstrap";
import { AddRoute, getStationOption } from "../store";

const index = () => {
  const [data, setData] = useState(null);
  const [errors, setErrors] = useState(null);
  const [station, setStation] = useState(null)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const store = useSelector((state) => state.routes);

  useEffect(() => {
    dispatch(getStationOption());
  }, []);

  const onChange = (e) => {
    setData({
      ...data,
      [e.target?.name]: e.target?.value,
    });
  };

  const onSubmit = async () => {
    const res = await dispatch(AddRoute(data));
    if (res?.payload?.status) {
      navigate("/route");
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
                <CardTitle tag="h4">New Route</CardTitle>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col sm="6">
                    <Col sm="12">
                      <Label className="form-label" for="batch_code">
                        Batch Code
                      </Label>
                      <Input
                        type="text"
                        name="batch_code"
                        id="batch_code"
                        placeholder="Enter Batch Code"
                        value={data?.batch_code}
                        onChange={onChange}
                      />
                      <small className="text-danger">{errors?.batch_code}</small>
                    </Col>
                    <Col sm="12">
                      <Label className="form-label" for="batch_route_name">
                        Batch Route Name
                      </Label>
                      <Input
                        type="text"
                        name="batch_route_name"
                        id="batch_route_name"
                        placeholder="Enter Batch Route Name"
                        value={data?.batch_route_name}
                        onChange={onChange}
                      />
                    </Col>
                    <Col sm="12">
                      <Label
                        className="form-label"
                        for="batch_max_units"
                      >
                        Batch Unit
                      </Label>
                      <Input
                        type="text"
                        name="batch_max_units"
                        id="batch_max_units"
                        placeholder="Batch Unit"
                        value={data?.batch_max_units}
                        onChange={onChange}
                      />
                    </Col>
                  </Col>
                  <Col sm="6">
                    <Col sm="12" className="mb-1">
                      <Label className="form-label" for="nameVertical">
                        Stations
                      </Label>
                      <Select
                        className="react-select"
                        classNamePrefix="select"
                        theme={selectThemeColors}
                        placeholder="Select Stations"
                        options={store?.stationOptions}
                        value={station}
                        onChange={(data) =>{
                          setStation(data)
                          onChange({
                            target: { name: "batch_stations", value: data?.map(item=> item?.value) },
                          })
                        }
                        }
                        isClearable={true}
                        isMulti
                      />
                      <small className="text-danger">{errors?.stock_id}</small>
                    </Col>
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

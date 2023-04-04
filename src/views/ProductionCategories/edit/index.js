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
import { getSectionOption, getStation, UpdateStation } from "../store";
import { selectThemeColors } from "@utils";
import Select from "react-select";
import { useNavigate, useParams } from "react-router-dom";

const index = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [errors, setErrors] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const store = useSelector((state) => state.stations);

  useEffect(() => {
    if (id) {
      dispatch(getStation(id));
      dispatch(getSectionOption());
    }
  }, [id]);

  useEffect(() => {
    if (store?.station) {
      setData(store?.station);
    }
  }, [store?.station]);

  const onChange = (e) => {
    setData({
      ...data,
      [e.target?.name]: e.target?.value,
    });
  };

  const onSubmit = async () => {
    const res = await dispatch(UpdateStation({ id, data }));
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
                <CardTitle tag="h4">Edit Section</CardTitle>
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
                    <Label className="form-label" for="station_status">
                    Status on the My Orders portal
                    </Label>
                    <Input
                      type="text"
                      name="station_status"
                      id="station_status"
                      placeholder="Enter Station Status"
                      value={data?.station_status}
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

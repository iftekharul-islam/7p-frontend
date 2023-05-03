import { selectThemeColors } from "@utils";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
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
import {
  UpdateRoute,
  getRoute,
  getStationOption,
  getTemplateOption,
} from "../store";

const index = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [station, setStation] = useState(null);
  const [errors, setErrors] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { route, stationOptions, nestingOption, templateOptions } = useSelector(
    (state) => state.routes
  );

  useEffect(() => {
    if (id) {
      dispatch(getRoute(id));
      dispatch(getStationOption());
      dispatch(getTemplateOption());
    }
  }, [id]);

  useEffect(() => {
    if (route) {
      setData(route);
      const data = route?.stations_list?.map((item) => {
        return {
          label: item?.station_name,
          value: item?.station_id,
        };
      });
      setStation(data);
    }
  }, [route]);

  const onChange = (e) => {
    setData({
      ...data,
      [e.target?.name]: e.target?.value,
    });
  };

  const onSubmit = async () => {
    const stationList = station?.map((item) => item?.value);
    const res = await dispatch(
      UpdateRoute({ id, data: { ...data, batch_stations: stationList } })
    );
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
          <Col sm="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Edit Route</CardTitle>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col sm="6">
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
                  <Col sm="6">
                    <Label className="form-label" for="batch_route_name">
                      Route Name
                    </Label>
                    <Input
                      type="text"
                      name="batch_route_name"
                      id="batch_route_name"
                      placeholder="Enter Route Name"
                      value={data?.batch_route_name}
                      onChange={onChange}
                    />
                  </Col>
                  <Col sm="6">
                    <Label className="form-label" for="summary_msg_1">
                      Summary Header 1
                    </Label>
                    <Input
                      type="text"
                      name="summary_msg_1"
                      id="summary_msg_1"
                      placeholder="Enter Summary Header 1"
                      value={data?.summary_msg_1}
                      onChange={onChange}
                    />
                  </Col>
                  <Col sm="6">
                    <Label className="form-label" for="summary_msg_2">
                      Summary Header 2
                    </Label>
                    <Input
                      type="text"
                      name="summary_msg_2"
                      id="summary_msg_2"
                      placeholder="Enter Summary Header 2"
                      value={data?.summary_msg_2}
                      onChange={onChange}
                    />
                  </Col>
                  <Col sm="6">
                    <Label className="form-label" for="batch_max_units">
                      Max Unit
                    </Label>
                    <Input
                      type="text"
                      name="batch_max_units"
                      id="batch_max_units"
                      placeholder="Enter Max Unit"
                      value={data?.batch_max_units}
                      onChange={onChange}
                    />
                  </Col>
                  <Col sm="6">
                    <Label className="form-label" for="csv_extension">
                      CSV Directory
                    </Label>
                    <Input
                      type="text"
                      name="csv_extension"
                      id="csv_extension"
                      placeholder="Enter CSV Directory"
                      value={data?.csv_extension}
                      onChange={onChange}
                    />
                  </Col>
                  <Col sm="6">
                    <Label className="form-label" for="export_dir">
                      File Extension:
                    </Label>
                    <Input
                      type="text"
                      name="export_dir"
                      id="export_dir"
                      placeholder="Enter File Extension"
                      value={data?.export_dir}
                      onChange={onChange}
                    />
                  </Col>
                  <Col sm="6">
                    <Label className="form-label" for="graphic_dir">
                      Graphic Directory
                    </Label>
                    <Input
                      type="text"
                      name="graphic_dir"
                      id="graphic_dir"
                      placeholder="Enter Graphic Directory"
                      value={data?.graphic_dir}
                      onChange={onChange}
                    />
                  </Col>
                  <Col sm="12">
                    <Label className="form-label" for="batch_code">
                      Options (Comma delimited)
                    </Label>
                    <Input
                      type="textarea"
                      name="batch_code"
                      rows="3"
                      id="batch_code"
                      placeholder="Enter Batch"
                      value={data?.batch_code}
                      onChange={onChange}
                    />
                  </Col>
                  <Col sm="6">
                    <Label className="form-label" for="batch_export_template">
                      Export template
                    </Label>
                    <Select
                      className="react-select"
                      classNamePrefix="select"
                      theme={selectThemeColors}
                      placeholder="Select Stations"
                      options={templateOptions}
                      value={templateOptions?.find(
                        (item) => item?.value == data?.export_template
                      )}
                      onChange={(data) => {
                        onChange({
                          target: {
                            name: "export_template",
                            value: data?.value,
                          },
                        });
                      }}
                      isClearable={false}
                    />
                  </Col>
                  <Col sm="6">
                    <Label className="form-label" for="nesting">
                      Nesting
                    </Label>
                    <Select
                      className="react-select"
                      classNamePrefix="select"
                      theme={selectThemeColors}
                      placeholder="Select Stations"
                      options={nestingOption}
                      value={nestingOption?.find(
                        (item) => item?.value == data?.nesting
                      )}
                      onChange={(data) => {
                        onChange({
                          target: {
                            name: "nesting",
                            value: data?.value,
                          },
                        });
                      }}
                      isClearable={false}
                    />
                  </Col>
                  <Col sm="12">
                    <Label className="form-label" for="batch_stations">
                      Stations
                    </Label>
                    <Select
                      className="react-select"
                      classNamePrefix="select"
                      theme={selectThemeColors}
                      placeholder="Select Stations"
                      options={stationOptions}
                      value={station}
                      onChange={(data) => {
                        setStation(data);
                      }}
                      isClearable={true}
                      isMulti
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
                        Update
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

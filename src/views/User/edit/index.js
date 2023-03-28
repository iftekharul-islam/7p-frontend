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
import {
  getAllPermits,
  getAllRoles,
  getAllSections,
  getAllStations,
  getAllVendors,
  getUser,
  UpdateUser,
} from "../store";
import { useNavigate, useParams } from "react-router-dom";

const index = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const store = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getAllRoles());
    dispatch(getAllVendors());
    // dispatch(getAllSections());
    // dispatch(getAllStations());
    // dispatch(getAllPermits());
  }, []);

  useEffect(() => {
    if (id) {
      dispatch(getUser(id));
    }
  }, [id]);

  useEffect(() => {
    if (store?.user) {
      setData({
        ...store?.user,
        role: store?.user?.roles[0]?.id,
      });
    }
  }, [store?.user]);

  const onChange = (e) => {
    setData({
      ...data,
      [e.target?.name]: e.target?.value,
    });
  };

  const onMultiChange = (name, data) => {
    setData({
      ...data,
      [name]: data,
    });
  };

  const onSubmit = async () => {
    setLoading(true)
    const res = await dispatch(UpdateUser(data));
    if (res?.payload?.status) {
      navigate("/user");
    } else {
      setErrors(res?.payload?.data?.errors);
    }
    setLoading(false)
  };

  return (
    <Fragment>
      <Row>
        <Col md="6" sm="12">
          <Form>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">New User</CardTitle>
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
                      placeholder="Name"
                      value={data?.name}
                      onChange={onChange}
                    />
                    <small className="text-danger">{errors?.name}</small>
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
                  <Col sm="12" className="mb-1">
                    <Label className="form-label" for="nameVertical">
                      Role
                    </Label>
                    <Select
                      className="react-select"
                      classNamePrefix="select"
                      theme={selectThemeColors}
                      placeholder="Select Role"
                      options={store?.roleOptions}
                      value={store?.roleOptions?.find(
                        (item) => item?.value === data?.role
                      )}
                      onChange={(e) =>
                        onChange({ target: { name: "role", value: e?.value } })
                      }
                      isClearable={false}
                    />
                  </Col>

                  <Col sm="12" className="mb-1">
                    <Label className="form-label" for="vendor_id">
                      Vendor
                    </Label>
                    <Select
                      className="react-select"
                      classNamePrefix="select"
                      theme={selectThemeColors}
                      placeholder="Select Vendor"
                      options={store?.vendorOptions}
                      value={store?.vendorOptions?.find(
                        (item) => item?.value === data?.vendor_id
                      )}
                      onChange={(e) =>
                        onChange({
                          target: { name: "vendor_id", value: e?.value },
                        })
                      }
                      isClearable={false}
                    />
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
                    <Label className="form-label" for="remote">
                      Remote
                    </Label>
                    <Input
                      type="text"
                      name="remote"
                      id="remote"
                      placeholder="Remote"
                      value={data?.remote}
                      onChange={onChange}
                    />
                  </Col>

                  <Col sm="12" className="mb-1">
                    <Label className="form-label" for="section_id">
                      Section
                    </Label>
                    <Select
                      className="react-select"
                      classNamePrefix="select"
                      theme={selectThemeColors}
                      placeholder="Select Section"
                      options={store?.sectionOptions}
                      value={store?.sectionOptions?.find(
                        (item) => item?.value === data?.section_id
                      )}
                      onChange={(e) =>
                        onChange({
                          target: { name: "section_id", value: e?.value },
                        })
                      }
                      isClearable={false}
                    />
                  </Col>
                  <Col sm="12" className="mb-1">
                    <Label className="form-label" for="station_id">
                      Station
                    </Label>
                    <Select
                      className="react-select"
                      classNamePrefix="select"
                      theme={selectThemeColors}
                      placeholder="Select Station"
                      options={store?.stationOptions}
                      value={store?.stationOptions?.find(
                        (item) => item?.value === data?.station_id
                      )}
                      onChange={(e) =>
                        onChange({
                          target: { name: "station_id", value: e?.value },
                        })
                      }
                      isClearable={false}
                    />
                  </Col>

                  <Col sm="12" className="mb-1">
                    <Label className="form-label" for="permit_manufactures">
                      Permit Manufactures
                    </Label>
                    <Select
                      className="react-select"
                      classNamePrefix="select"
                      theme={selectThemeColors}
                      isMulti
                      placeholder="Select Permit"
                      options={store?.permitOptions}
                      value={data?.permit_manufactures}
                      onChange={(e) => onMultiChange("permit_manufactures", e)}
                      isClearable={false}
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
                        disabled={loading}
                      >
                        {loading ? (
                          <>
                            <Spinner className="me-25" size="sm" />
                            Updating
                          </>
                        ) : (
                          "Update"
                        )}
                      </Button>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Form>
        </Col>
      </Row>
    </Fragment>
  );
};
export default index;

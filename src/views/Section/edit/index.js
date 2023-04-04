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
import {  getSection, UpdateSection } from "../store";
import { selectThemeColors } from "@utils";
import Select from "react-select";
import { useNavigate, useParams } from "react-router-dom";

const index = () => {
  const {id} = useParams();
  const [data, setData] = useState(null);
  const [errors, setErrors] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const store = useSelector((state) => state.sections);

  useEffect(() => {
    if(id) {
      dispatch(getSection(id))
    }
  }, [id])

  useEffect(() => {
    if(store?.section) {
      setData(store?.section)
    }
  }, [store?.section])
  
  const onChange = (e) => {
    setData({
      ...data,
      [e.target?.name]: e.target?.value,
    });
  };

  const onSubmit = async () => {
    const res = await dispatch(UpdateSection({id, data}));
    if (res?.payload?.status) {
      navigate("/section");
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
                    <Label className="form-label" for="section_name">
                      Name
                    </Label>
                    <Input
                      type="text"
                      name="section_name"
                      id="section_name"
                      placeholder="Name"
                      value={data?.section_name}
                      onChange={onChange}
                    />
                    <small className="text-danger">
                      {errors?.section_name}
                    </small>
                  </Col>

                  <Col sm="12">
                    <Label className="form-label" for="summaries">
                      Summaries
                    </Label>
                    <Select
                      className="react-select"
                      classNamePrefix="select"
                      theme={selectThemeColors}
                      placeholder="Select Summaries"
                      options={store?.summaryOption}
                      value={store?.summaryOption?.find(
                        (item) => item?.value === data?.summaries
                      )}
                      onChange={(e) =>
                        onChange({
                          target: { name: "summaries", value: e?.value },
                        })
                      }
                    />
                  </Col>
                  <Col sm="12">
                    <Label className="form-label" for="start_finish">
                      Buttons
                    </Label>
                    <Select
                      className="react-select"
                      classNamePrefix="select"
                      theme={selectThemeColors}
                      placeholder="Select Buttons"
                      options={store?.startFinishOption}
                      value={store?.startFinishOption?.find(
                        (item) => item?.value === data?.start_finish
                      )}
                      onChange={(e) =>
                        onChange({
                          target: { name: "start_finish", value: e?.value },
                        })
                      }
                    />
                  </Col>
                  <Col sm="12">
                    <Label className="form-label" for="same_user">
                      User Scan
                    </Label>
                    <Select
                      className="react-select"
                      classNamePrefix="select"
                      theme={selectThemeColors}
                      placeholder="Select User Scan"
                      options={store?.sameUserOption}
                      value={store?.sameUserOption?.find(
                        (item) => item?.value === data?.same_user
                      )}
                      onChange={(e) =>
                        onChange({
                          target: { name: "same_user", value: e?.value },
                        })
                      }
                    />
                  </Col>
                  <Col sm="12">
                    <Label className="form-label" for="print_label">
                      Labels
                    </Label>
                    <Select
                      className="react-select"
                      classNamePrefix="select"
                      theme={selectThemeColors}
                      placeholder="Select Labels"
                      options={store?.printLabelOption}
                      value={store?.printLabelOption?.find(
                        (item) => item?.value === data?.print_label
                      )}
                      onChange={(e) =>
                        onChange({
                          target: { name: "print_label", value: e?.value },
                        })
                      }
                    />
                  </Col>

                  <Col sm="12">
                    <Label className="form-label" for="inventory">
                      Picking
                    </Label>
                    <Select
                      className="react-select"
                      classNamePrefix="select"
                      theme={selectThemeColors}
                      placeholder="Select Picking"
                      options={store?.inventoryOption}
                      value={store?.inventoryOption?.find(
                        (item) => item?.value === data?.inventory
                      )}
                      onChange={(e) =>
                        onChange({
                          target: { name: "inventory", value: e?.value },
                        })
                      }
                    />
                  </Col>
                  <Col sm="12">
                    <Label className="form-label" for="inv_control">
                      Inventory
                    </Label>
                    <Select
                      className="react-select"
                      classNamePrefix="select"
                      theme={selectThemeColors}
                      placeholder="Select Inventory"
                      options={store?.invControlOption}
                      value={store?.invControlOption?.find(
                        (item) => item?.value === data?.inv_control
                      )}
                      onChange={(e) =>
                        onChange({
                          target: { name: "inv_control", value: e?.value },
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

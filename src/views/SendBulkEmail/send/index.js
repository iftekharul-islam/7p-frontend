import "@styles/react/libs/react-select/_react-select.scss";
import { selectThemeColors } from "@utils";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  Row,
} from "reactstrap";
import { getEmailTemplateOptions, sendEmail } from "../store";

const index = () => {
  const [data, setData] = useState(null);
  const [errors, setErrors] = useState(null);
  const [success, setSuccess] = useState(null);
  const store = useSelector((state) => state.bulkEmails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmailTemplateOptions());
  }, []);

  const onChange = (e) => {
    setData({
      ...data,
      [e.target?.name]: e.target?.value,
    });
  };

  const onSubmit = async () => {
    const res = await dispatch(sendEmail(data));
    if (res?.payload?.status) {
      setErrors(res?.payload?.error);
      setSuccess(res?.payload?.success);
    } else {
      setErrors(res?.payload?.error);
    }
  };

  return (
    <Fragment>
      <Row>
        <Form>
          <Col sm="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Send Bulk emails</CardTitle>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col sm="4">
                    <Row>
                      <Col sm="12">
                        <Label className="form-label" for="message_type">
                          Order IDs Type
                        </Label>
                        <Select
                          className="react-select"
                          classNamePrefix="select"
                          theme={selectThemeColors}
                          placeholder="Select Order IDs Type"
                          options={store?.typeOptions}
                          value={store?.typeOptions?.find(
                            (item) => item?.value === data?.id_type
                          )}
                          onChange={(e) =>
                            onChange({
                              target: {
                                name: "id_type",
                                value: e?.value,
                              },
                            })
                          }
                        />
                      </Col>
                      <Col sm="12">
                        <Label className="form-label" for="message_title">
                          {data?.id_type != "5p" && "Short"} Order IDs (Comma
                          separated)
                        </Label>
                        <Input
                          type="textarea"
                          name="order_ids"
                          Rows="5"
                          id="order_ids"
                          placeholder={`Enter ${
                            data?.id_type != "5p"
                              ? "Short Order IDs"
                              : "Order IDs"
                          }`}
                          value={data?.order_ids}
                          onChange={onChange}
                        />
                      </Col>
                      <Col sm="12">
                        <Label className="form-label" for="template">
                          Email Template
                        </Label>
                        <Select
                          className="react-select"
                          classNamePrefix="select"
                          theme={selectThemeColors}
                          placeholder="Select Email Template"
                          options={store?.templateOptions}
                          value={store?.templateOptions?.find(
                            (item) => item?.value === data?.template
                          )}
                          onChange={(e) =>
                            onChange({
                              target: {
                                name: "template",
                                value: e?.value,
                              },
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
                            Send
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col sm="1"></Col>
                  {errors && (
                    <Col sm="3">
                      <Col sm="12">
                        <h4 className="text-danger">Errors</h4>
                        <hr className="text-danger" />
                      </Col>
                      {errors?.map((error, index) => (
                        <Col sm="12" key={index}>
                          <p className="text-danger">{error}</p>
                        </Col>
                      ))}
                    </Col>
                  )}
                  <Col sm="1"></Col>
                  {success && (
                    <Col sm="3">
                      <Col sm="12">
                        <h4 className="text-success">Success</h4>
                        <hr className="text-success" />
                      </Col>
                      {success?.map((error, index) => (
                        <Col sm="12" key={index}>
                          <p className="text-success">{error}</p>
                        </Col>
                      ))}
                    </Col>
                  )}
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

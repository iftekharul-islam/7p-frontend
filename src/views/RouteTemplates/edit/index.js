import { selectThemeColors } from "@utils";
import { Fragment, useEffect, useState } from "react";
import { ArrowDown, ArrowUp, Trash2 } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
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
import { UpdateTemplate, getTemplate } from "../store";

const index = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [options, setOptions] = useState(null);
  const [errors, setErrors] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { template, repeatedOption, delimitedOption, formatOption, catOption } =
    useSelector((state) => state.templates);

  useEffect(() => {
    if (id) {
      dispatch(getTemplate(id));
    }
  }, [id]);

  useEffect(() => {
    if (template) {
      setData(template);
      setOptions(template?.options);
    }
  }, [template]);

  const onChange = (e) => {
    setData({
      ...data,
      [e.target?.name]: e.target?.value,
    });
  };

  const onOptionChange = (name, value, index) => {
    const data = options?.map((item, i) => {
      if (i == index) {
        return { ...item, [name]: value };
      } else {
        return item;
      }
    });
    setOptions(data);
  };

  const removeItem = (index) => {
    const data = options?.filter((item, i) => i != index);
    setOptions(data);
  };

  const addItem = () => {
    const data = [...options];
    data?.push({
      format: "1",
      line_item_field: "1",
      option_category: "FIX",
      option_name: "",
      value: "",
      width: "",
    });
    setOptions(data);
  };

  const positionUp = (index) => {
    const data = [];
    options?.forEach((item, i) => {
      if (i + 1 == index) {
        data?.push(options[i + 1]);
        data?.push(options[i]);
      } else if (i != index) {
        data?.push(options[i]);
      }
    });
    setOptions(data);
  };

  const positionDown = (index) => {
    const data = [];
    options?.forEach((item, i) => {
      if (i == index) {
        data?.push(options[i + 1]);
        data?.push(options[i]);
      } else if (i - 1 != index) {
        data?.push(options[i]);
      }
    });
    setOptions(data);
  };

  const onSubmit = async () => {
    const res = await dispatch(
      UpdateTemplate({ id, data: { ...data, options: options } })
    );
    if (res?.payload?.status) {
      navigate("/template");
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
                <CardTitle tag="h4">Edit Section</CardTitle>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col sm="12">
                    <Label className="form-label" for="template_name">
                      Template Name
                    </Label>
                    <Input
                      type="text"
                      name="template_name"
                      id="template_name"
                      placeholder="Template Name"
                      value={data?.template_name}
                      onChange={onChange}
                    />
                  </Col>

                  <Col sm="6">
                    <Label className="form-label" for="repeated_fields">
                      Repeated Fields
                    </Label>
                    <Select
                      className="react-select"
                      classNamePrefix="select"
                      theme={selectThemeColors}
                      placeholder="Select Fields"
                      options={repeatedOption}
                      value={repeatedOption?.find(
                        (item) => item?.value === data?.repeated_fields
                      )}
                      onChange={(e) =>
                        onChange({
                          target: { name: "repeated_fields", value: e?.value },
                        })
                      }
                    />
                  </Col>
                  <Col sm="6">
                    <Label className="form-label" for="delimited_char">
                      Delimited char
                    </Label>
                    <Select
                      className="react-select"
                      classNamePrefix="select"
                      theme={selectThemeColors}
                      placeholder="Select Delimited char"
                      options={delimitedOption}
                      value={delimitedOption?.find(
                        (item) => item?.value === data?.delimited_char
                      )}
                      onChange={(e) =>
                        onChange({
                          target: { name: "delimited_char", value: e?.value },
                        })
                      }
                    />
                  </Col>
                  <Col sm="3"></Col>
                  <Col sm="6" className="d-flex justify-content-between mt-1">
                    <div className="form-check form-check-success">
                      <Input
                        type="checkbox"
                        name="show_header"
                        checked={data?.show_header}
                        onChange={(e) =>
                          onChange({
                            target: {
                              name: "show_header",
                              value: e?.target?.checked,
                            },
                          })
                        }
                      />
                      <Label
                        className="form-check-label"
                        for="success-checkbox"
                      >
                        Show Header
                      </Label>
                    </div>
                    <div className="form-check form-check-success">
                      <Input
                        type="checkbox"
                        name="break_kits"
                        checked={data?.break_kits}
                        onChange={(e) =>
                          onChange({
                            target: {
                              name: "break_kits",
                              value: e?.target?.checked,
                            },
                          })
                        }
                      />
                      <Label
                        className="form-check-label"
                        for="success-checkbox"
                      >
                        Break kits
                      </Label>
                    </div>
                    <div className="form-check form-check-success">
                      <Input
                        type="checkbox"
                        name="is_active"
                        checked={data?.is_active}
                        onChange={(e) =>
                          onChange({
                            target: {
                              name: "is_active",
                              value: e?.target?.checked,
                            },
                          })
                        }
                      />
                      <Label
                        className="form-check-label"
                        for="success-checkbox"
                      >
                        Active
                      </Label>
                    </div>
                  </Col>
                  <Col sm="3"></Col>
                </Row>
                <Row className="rounded bg-secondary p-2 mt-1 text-uppercase">
                  <Col sm="1 text-light fw-bolder ">Line</Col>
                  <Col sm="2 text-light fw-bolder">Name</Col>
                  <Col sm="2 text-light fw-bolder">Cat</Col>
                  <Col sm="2 text-light fw-bolder">Value</Col>
                  <Col sm="2 text-light fw-bolder">Width</Col>
                  <Col sm="2 text-light fw-bolder">Format</Col>
                  <Col sm="1 text-light fw-bolder">Action</Col>
                </Row>
                {options?.map((item, index) => {
                  return (
                    <Row className="pt-1">
                      <Col sm="1" className="d-flex align-items-center">
                        <div className="form-check form-check-success">
                          <Input
                            type="checkbox"
                            name="is_active"
                            checked={parseInt(item?.line_item_field)}
                            onChange={(e) =>
                              onOptionChange(
                                "line_item_field",
                                e?.target?.checked ? "1" : "0",
                                index
                              )
                            }
                          />
                        </div>
                      </Col>
                      <Col sm="2">
                        <Input
                          type="text"
                          name="option_name"
                          id="option_name"
                          placeholder="Option Name"
                          value={item?.option_name}
                          onChange={(e) =>
                            onOptionChange(
                              "option_name",
                              e?.target?.value,
                              index
                            )
                          }
                        />
                      </Col>
                      <Col sm="2">
                        <Select
                          className="react-select"
                          classNamePrefix="select"
                          theme={selectThemeColors}
                          placeholder="Select Category"
                          options={catOption}
                          value={catOption?.find(
                            (itm) => itm?.value === item?.option_category
                          )}
                          onChange={(e) =>
                            onOptionChange("option_category", e?.value, index)
                          }
                        />
                      </Col>
                      <Col sm="2">
                        <Input
                          type="text"
                          name="value"
                          id="value"
                          placeholder="Value"
                          value={item?.value}
                          onChange={(e) =>
                            onOptionChange("value", e?.target?.value, index)
                          }
                        />
                      </Col>
                      <Col sm="2">
                        <Input
                          type="text"
                          name="width"
                          id="width"
                          placeholder="Width"
                          value={item?.width}
                          onChange={(e) =>
                            onOptionChange("width", e?.target?.value, index)
                          }
                        />
                      </Col>
                      <Col sm="2">
                        <Select
                          className="react-select"
                          classNamePrefix="select"
                          theme={selectThemeColors}
                          placeholder="Select Format"
                          options={formatOption}
                          value={formatOption?.find(
                            (itm) => itm?.value === item?.format
                          )}
                          onChange={(e) =>
                            onOptionChange("format", e?.value, index)
                          }
                        />
                      </Col>
                      <Col sm="1" className="d-flex align-items-center">
                        <Link
                          className="text-truncate text-capitalize align-middle"
                          onClick={(e) => {
                            e.preventDefault();
                            positionUp(index);
                          }}
                        >
                          <ArrowUp size={18} className={`text-primary me-50`} />
                        </Link>
                        <Link
                          className="text-truncate text-capitalize align-middle"
                          onClick={(e) => {
                            e.preventDefault();
                            positionDown(index);
                          }}
                        >
                          <ArrowDown
                            size={18}
                            className={`text-primary me-50`}
                          />
                        </Link>
                        <Link
                          className="text-truncate text-capitalize align-middle"
                          onClick={(e) => {
                            e.preventDefault();
                            removeItem(index);
                          }}
                        >
                          <Trash2 size={18} className={`text-danger me-50`} />
                        </Link>
                      </Col>
                    </Row>
                  );
                })}
                <Row>
                  <Col sm="12" className="mt-1">
                    <div className="d-flex">
                      <Button
                        className="me-1"
                        color="success"
                        type="submit"
                        onClick={(e) => {
                          e.preventDefault();
                          addItem();
                        }}
                      >
                        Add Item
                      </Button>
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

import "@styles/react/libs/react-select/_react-select.scss";
import { selectThemeColors } from "@utils";
import { Fragment, useEffect, useState } from "react";
import { Trash2 } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Select from "react-select";
import {
  Button,
  Card,
  CardBody,
  Col,
  Form,
  Input,
  Label,
  Row,
} from "reactstrap";
import {
  getMakeSampleDataOptions,
  getVendorsOptions,
  nextTab,
  prevTab,
  setSpecificationData,
} from "../store";

const ProductInstruction = () => {
  const dispatch = useDispatch();
  const [options, setOptions] = useState([{}]);
  const { active, specificationData, productionCategoriesOptions } = useSelector(
    (state) => state.productspecifications
  );

  const onChange = (data) => {
    dispatch(setSpecificationData(data));
  };

  const onImageChange = (e) => {
    onChange({ [e?.target?.name]: e?.target?.files[0] });
  };

  useEffect(() => {
    dispatch(getMakeSampleDataOptions());
    dispatch(getVendorsOptions());
  }, []);

  useEffect(() => {
    if(specificationData){
      setOptions(specificationData?.special_note)
    }
  }, [specificationData])

  useEffect(() => {
    dispatch(setSpecificationData({ special_note_arr: options }));
  }, [active]);

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
    data?.push({});
    setOptions(data);
  };

  return (
    <Fragment>
      <Row>
        <Form>
          <Col sm="12">
            <Card>
              <CardBody>
                <Row>
                  <Col sm="3" className="mb-1">
                    <Label className="form-label" for="production_category_id">
                      Production category
                    </Label>
                    <Select
                      className="react-select"
                      classNamePrefix="select"
                      theme={selectThemeColors}
                      placeholder="Select Status"
                      options={productionCategoriesOptions}
                      value={productionCategoriesOptions?.find(
                        (item) =>
                          item?.value == specificationData?.production_category_id
                      )}
                      onChange={(e) =>
                        onChange({ production_category_id: e?.value })
                      }
                    />
                  </Col>
                  <Col sm="3" className="mb-1">
                    <Label
                      className="form-label"
                      for="production_image_location"
                    >
                      Production image location
                    </Label>
                    <Input
                      type="text"
                      name="production_image_location"
                      id="production_image_location"
                      placeholder="Enter  Product Weight"
                      value={specificationData?.production_image_location}
                      onChange={(e) =>
                        onChange({
                          production_image_location: e?.target?.value,
                        })
                      }
                    />
                  </Col>
                  <Col sm="3" className="mb-1">
                    <Label className="form-label" for="art_work_location">
                      Art work image location
                    </Label>
                    <Input
                      type="text"
                      name="art_work_location"
                      id="art_work_location"
                      placeholder="Enter  Length"
                      value={specificationData?.art_work_location}
                      onChange={(e) =>
                        onChange({ art_work_location: e?.target?.value })
                      }
                    />
                  </Col>
                  <Col sm="3" className="mb-1">
                    <Label className="form-label" for="product_details_file">
                      Product details file
                    </Label>
                    <Input
                      type="file"
                      name="product_details_file"
                      onChange={onImageChange}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col sm="1"></Col>
                  <Col sm="4">
                    <Col sm="12" className="mb-1">
                      <h4>Production Settings</h4>
                      <hr />
                    </Col>
                    <Col sm="12" className="mb-1">
                      <Label className="form-label" for="temperature">
                        Temperature
                      </Label>
                      <Input
                        type="text"
                        name="temperature"
                        id="temperature"
                        placeholder="Enter Temperature"
                        value={specificationData?.temperature}
                        onChange={(e) =>
                          onChange({ temperature: e?.target?.value })
                        }
                      />
                    </Col>
                    <Col sm="12" className="mb-1">
                      <Label className="form-label" for="dwell_time">
                        Dwell time
                      </Label>
                      <Input
                        type="text"
                        name="dwell_time"
                        id="dwell_time"
                        placeholder="Enter Dwell time"
                        value={specificationData?.dwell_time}
                        onChange={(e) =>
                          onChange({ dwell_time: e?.target?.value })
                        }
                      />
                    </Col>
                    <Col sm="12" className="mb-1">
                      <Label className="form-label" for="pressure">
                        Pressure
                      </Label>
                      <Input
                        type="text"
                        name="pressure"
                        id="pressure"
                        placeholder="Enter Pressure"
                        value={specificationData?.pressure}
                        onChange={(e) =>
                          onChange({ pressure: e?.target?.value })
                        }
                      />
                    </Col>
                    <Col sm="12" className="mb-1">
                      <Label className="form-label" for="run_time">
                        Run Time
                      </Label>
                      <Input
                        type="text"
                        name="run_time"
                        id="run_time"
                        placeholder="Enter Run Time"
                        value={specificationData?.run_time}
                        onChange={(e) =>
                          onChange({ run_time: e?.target?.value })
                        }
                      />
                    </Col>
                  </Col>
                  <Col sm="2"></Col>
                  <Col sm="4">
                    <Col sm="12" className="mb-1">
                      <h4>Personalization Details</h4>
                      <hr />
                    </Col>
                    <Col sm="12" className="mb-1">
                      <Label className="form-label" for="type">
                        Type
                      </Label>
                      <Input
                        type="text"
                        name="type"
                        id="type"
                        placeholder="Enter Type"
                        value={specificationData?.type}
                        onChange={(e) => onChange({ type: e?.target?.value })}
                      />
                    </Col>
                    <Col sm="12" className="mb-1">
                      <Label className="form-label" for="font">
                        Font
                      </Label>
                      <Input
                        type="text"
                        name="font"
                        id="font"
                        placeholder="Enter Font"
                        value={specificationData?.font}
                        onChange={(e) => onChange({ font: e?.target?.value })}
                      />
                    </Col>
                    <Col sm="12" className="mb-1">
                      <Label className="form-label" for="variation_name">
                        Variation name
                      </Label>
                      <Input
                        type="text"
                        name="variation_name"
                        id="variation_name"
                        placeholder="Enter Variation name"
                        value={specificationData?.variation_name}
                        onChange={(e) =>
                          onChange({ variation_name: e?.target?.value })
                        }
                      />
                    </Col>
                    <Col sm="12" className="mb-1">
                      <Label className="form-label" for="details">
                        Details
                      </Label>
                      <Input
                        type="text"
                        name="details"
                        id="details"
                        placeholder="Enter Details"
                        value={specificationData?.details}
                        onChange={(e) =>
                          onChange({ details: e?.target?.value })
                        }
                      />
                    </Col>
                  </Col>
                </Row>
                <hr />
                <div>
                  {options?.map((item, index) => {
                    return (
                      <Row key={index}>
                        <Col sm="1"></Col>
                        <Col
                          sm="10"
                          className="p-1 mb-1 border border-primary rounded"
                        >
                          <Row>
                            <Col sm="4">
                              <Input
                                type="text"
                                name="special_note"
                                id="special_note"
                                placeholder="Special Notes for Product Options"
                                value={item?.special_note}
                                onChange={(e) =>
                                  onOptionChange(
                                    "special_note",
                                    e?.target?.value,
                                    index
                                  )
                                }
                              />
                            </Col>
                            <Col sm="4">
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
                            <Col sm="3">
                              <Input
                                type="text"
                                name="details"
                                id="details"
                                placeholder="Details"
                                value={item?.details}
                                onChange={(e) =>
                                  onOptionChange(
                                    "details",
                                    e?.target?.value,
                                    index
                                  )
                                }
                              />
                            </Col>
                            <Col sm="1" className="d-flex align-items-center">
                              <Link
                                className="text-truncate text-capitalize align-middle"
                                onClick={(e) => {
                                  e.preventDefault();
                                  removeItem(index);
                                }}
                              >
                                <Trash2
                                  size={24}
                                  className={`text-danger me-50`}
                                />
                              </Link>
                            </Col>
                          </Row>
                        </Col>
                        <Col sm="1"></Col>
                      </Row>
                    );
                  })}
                  <Row>
                    <Col sm="10"></Col>
                    <Col sm="2" className="mt-1">
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
                      </div>
                    </Col>
                  </Row>
                </div>
                <Row>
                  <Col sm="12">
                    <div className="d-flex justify-content-between table-header-actions mx-4 mt-2">
                      <Button
                        className="add-new-user"
                        color="primary"
                        onClick={(e) => {
                          e.preventDefault();
                          dispatch(prevTab());
                        }}
                      >
                        Previous
                      </Button>
                      <Button
                        className="add-new-user"
                        color="primary"
                        onClick={(e) => {
                          e.preventDefault();
                          dispatch(nextTab());
                        }}
                      >
                        Next
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
export default ProductInstruction;

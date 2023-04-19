import "@styles/react/libs/react-select/_react-select.scss";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  Col,
  Form,
  Input,
  Label,
  Row,
  Spinner,
} from "reactstrap";
import {
  UpdateSpecifiction,
  getMakeSampleDataOptions,
  getVendorsOptions,
  prevTab,
  resetSpecificationData,
  setSpecificationData,
} from "../store";

const FinancialInfo = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [options, setOptions] = useState([{}]);
  const [loading, setLoading] = useState(false);
  const { active, specificationData } = useSelector(
    (state) => state.productspecifications
  );

  const onChange = (data) => {
    dispatch(setSpecificationData(data));
  };

  const onLaborChange = (value, index) => {
    let labor_expense_cost_variation = [
      ...specificationData?.labor_expense_cost_variation,
    ];
    labor_expense_cost_variation[index] = value;
    onChange({ labor_expense_cost_variation });
  };

  const onDeliveryChange = (value, index) => {
    let delivery_cost_variation = [
      ...specificationData?.delivery_cost_variation,
    ];
    delivery_cost_variation[index] = value;
    onChange({ delivery_cost_variation });
  };

  useEffect(() => {
    dispatch(getMakeSampleDataOptions());
    dispatch(getVendorsOptions());
  }, []);

  useEffect(() => {
    if (specificationData?.content_cost_info) {
      setOptions(Object.values(specificationData?.content_cost_info));
    }
  }, [specificationData?.content_cost_info]);

  useEffect(() => {
    var cost_variation_1_total = options
      .reduce(function (prev, cur) {
        return parseFloat(prev) + parseFloat(cur?.variation_1 ?? 0);
      }, 0)
      .toFixed(2);
    var cost_variation_2_total = options
      .reduce(function (prev, cur) {
        return parseFloat(prev) + parseFloat(cur?.variation_2 ?? 0);
      }, 0)
      .toFixed(2);
    var cost_variation_3_total = options
      .reduce(function (prev, cur) {
        return parseFloat(prev) + parseFloat(cur?.variation_3 ?? 0);
      }, 0)
      .toFixed(2);
    var cost_variation_4_total = options
      .reduce(function (prev, cur) {
        return parseFloat(prev) + parseFloat(cur?.variation_4 ?? 0);
      }, 0)
      .toFixed(2);
    onChange({
      cost_variation_1_total,
      cost_variation_2_total,
      cost_variation_3_total,
      cost_variation_4_total,
    });
  }, [options]);

  useEffect(() => {
    onChange({
      sum_of_cost_variation_1: (
        parseFloat(specificationData?.cost_variation_1_total ?? 0) +
        parseFloat(specificationData?.labor_expense_cost_variation[0] ?? 0) +
        parseFloat(specificationData?.delivery_cost_variation[0] ?? 0)
      ).toFixed(2),
    });
  }, [
    specificationData?.cost_variation_1_total,
    specificationData?.labor_expense_cost_variation[0],
    specificationData?.delivery_cost_variation[0],
  ]);

  useEffect(() => {
    onChange({
      sum_of_cost_variation_2: (
        parseFloat(specificationData?.cost_variation_2_total ?? 0) +
        parseFloat(specificationData?.labor_expense_cost_variation[1] ?? 0) +
        parseFloat(specificationData?.delivery_cost_variation[1] ?? 0)
      ).toFixed(2),
    });
  }, [
    specificationData?.cost_variation_2_total,
    specificationData?.labor_expense_cost_variation[1],
    specificationData?.delivery_cost_variation[1],
  ]);

  useEffect(() => {
    onChange({
      sum_of_cost_variation_3: (
        parseFloat(specificationData?.cost_variation_3_total ?? 0) +
        parseFloat(specificationData?.labor_expense_cost_variation[2] ?? 0) +
        parseFloat(specificationData?.delivery_cost_variation[2] ?? 0)
      ).toFixed(2),
    });
  }, [
    specificationData?.cost_variation_3_total,
    specificationData?.labor_expense_cost_variation[2],
    specificationData?.delivery_cost_variation[2],
  ]);

  useEffect(() => {
    onChange({
      sum_of_cost_variation_4: (
        parseFloat(specificationData?.cost_variation_4_total ?? 0) +
        parseFloat(specificationData?.labor_expense_cost_variation[3] ?? 0) +
        parseFloat(specificationData?.delivery_cost_variation[3] ?? 0)
      ).toFixed(2),
    });
  }, [
    specificationData?.cost_variation_4_total,
    specificationData?.labor_expense_cost_variation[3],
    specificationData?.delivery_cost_variation[3],
  ]);

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

  const onSubmit = async () => {
    setLoading(true);
    const res = await dispatch(
      UpdateSpecifiction({ id, data: {...specificationData, cost_variation: options} })
    );
    if (res?.payload?.status) {
      dispatch(resetSpecificationData());
      navigate("/specification-product");
    }
    setLoading(false);
  };

  return (
    <Fragment>
      <Row>
        <Form>
          <Col sm="12">
            <Card>
              <CardBody>
                <Row>
                  <Col sm="1" className="mb-1">
                    <Label className="form-label">Qty pcs</Label>
                  </Col>
                  <Col sm="2" className="mb-1">
                    <Label className="form-label" for="1">
                      1
                    </Label>
                  </Col>
                  <Col sm="2" className="mb-1">
                    <Label className="form-label" for="10">
                      10
                    </Label>
                  </Col>
                  <Col sm="2" className="mb-1">
                    <Label className="form-label" for="100">
                      100
                    </Label>
                  </Col>
                  <Col sm="2" className="mb-1">
                    <Label className="form-label" for="1000">
                      1000
                    </Label>
                  </Col>
                  <Col sm="2" className="mb-1">
                    <Label className="form-label" for="10000">
                      10000
                    </Label>
                  </Col>
                </Row>
                <Row>
                  <Col sm="1" className="mb-1">
                    <Label className="form-label">Cost, $</Label>
                  </Col>
                  <Col sm="2" className="mb-1">
                    <Label className="form-label" for="cost_of_1">
                      <Input
                        type="number"
                        name="cost_of_1"
                        id="cost_of_1"
                        value={specificationData?.cost_of_1}
                        onChange={(e) =>
                          onChange({ cost_of_1: e?.target?.value })
                        }
                      />
                    </Label>
                  </Col>
                  <Col sm="2" className="mb-1">
                    <Label className="form-label" for="cost_of_10">
                      <Input
                        type="number"
                        name="cost_of_10"
                        id="cost_of_10"
                        value={specificationData?.cost_of_10}
                        onChange={(e) =>
                          onChange({ cost_of_10: e?.target?.value })
                        }
                      />
                    </Label>
                  </Col>
                  <Col sm="2" className="mb-1">
                    <Label className="form-label" for="cost_of_100">
                      <Input
                        type="number"
                        name="cost_of_100"
                        id="cost_of_100"
                        value={specificationData?.cost_of_100}
                        onChange={(e) =>
                          onChange({ cost_of_100: e?.target?.value })
                        }
                      />
                    </Label>
                  </Col>
                  <Col sm="2" className="mb-1">
                    <Label className="form-label" for="cost_of_1000">
                      <Input
                        type="number"
                        name="cost_of_1000"
                        id="cost_of_1000"
                        value={specificationData?.cost_of_1000}
                        onChange={(e) =>
                          onChange({ cost_of_1000: e?.target?.value })
                        }
                      />
                    </Label>
                  </Col>
                  <Col sm="2" className="mb-1">
                    <Label className="form-label" for="cost_of_10000">
                      <Input
                        type="number"
                        name="cost_of_10000"
                        id="cost_of_10000"
                        value={specificationData?.cost_of_10000}
                        onChange={(e) =>
                          onChange({ cost_of_10000: e?.target?.value })
                        }
                      />
                    </Label>
                  </Col>
                </Row>

                <Row className="rounded bg-secondary p-1 mb-1 text-capitilize">
                  <Col sm="1 text-light fw-bolder"></Col>
                  <Col sm="3 text-light fw-bolder ">Part Name</Col>
                  <Col sm="1 text-light fw-bolder">Variation 1</Col>
                  <Col sm="1 text-light fw-bolder">Variation 2</Col>
                  <Col sm="1 text-light fw-bolder">Variation 3</Col>
                  <Col sm="1 text-light fw-bolder">Variation 4</Col>
                  <Col sm="2 text-light fw-bolder">Supplier Name</Col>
                  <Col sm="1 text-light fw-bolder">Action</Col>
                </Row>
                <div>
                  {options?.map((item, index) => {
                    return (
                      <Row
                        key={index}
                        className="border color-primary rounded py-1"
                      >
                        <Col
                          sm="1"
                          className="d-flex align-items-center justify-content-end"
                        >
                          {" "}
                          #{index + 1}
                        </Col>
                        <Col sm="3">
                          <Input
                            type="text"
                            name="parts_name"
                            id="parts_name"
                            placeholder="Parts Name"
                            value={item?.parts_name}
                            onChange={(e) =>
                              onOptionChange(
                                "parts_name",
                                e?.target?.value,
                                index
                              )
                            }
                          />
                        </Col>
                        <Col sm="1">
                          <Input
                            type="number"
                            name="variation_1"
                            id="variation_1"
                            placeholder="Cost"
                            value={item?.variation_1}
                            onChange={(e) =>
                              onOptionChange(
                                "variation_1",
                                e?.target?.value,
                                index
                              )
                            }
                          />
                        </Col>
                        <Col sm="1">
                          <Input
                            type="number"
                            name="variation_2"
                            id="variation_2"
                            placeholder="Cost"
                            value={item?.variation_2}
                            onChange={(e) =>
                              onOptionChange(
                                "variation_2",
                                e?.target?.value,
                                index
                              )
                            }
                          />
                        </Col>
                        <Col sm="1">
                          <Input
                            type="number"
                            name="variation_3"
                            id="variation_3"
                            placeholder="Cost"
                            value={item?.variation_3}
                            onChange={(e) =>
                              onOptionChange(
                                "variation_3",
                                e?.target?.value,
                                index
                              )
                            }
                          />
                        </Col>
                        <Col sm="1">
                          <Input
                            type="number"
                            name="variation_4"
                            id="variation_4"
                            placeholder="Cost"
                            value={item?.variation_4}
                            onChange={(e) =>
                              onOptionChange(
                                "variation_4",
                                e?.target?.value,
                                index
                              )
                            }
                          />
                        </Col>
                        <Col sm="2">
                          <Input
                            type="text"
                            name="supplier_name"
                            id="supplier_name"
                            placeholder="Supplier Name"
                            value={item?.supplier_name}
                            onChange={(e) =>
                              onOptionChange(
                                "supplier_name",
                                e?.target?.value,
                                index
                              )
                            }
                          />
                        </Col>
                        <Col sm="1">
                          <Button
                            className="me-1"
                            color="danger"
                            type="submit"
                            onClick={(e) => {
                              e.preventDefault();
                              removeItem(index);
                            }}
                          >
                            Remove
                          </Button>
                        </Col>
                      </Row>
                    );
                  })}
                </div>
                <Row className="border color-primary rounded py-1">
                  <Col sm="1"></Col>
                  <Col sm="3" className="d-flex align-items-center">
                    <Label>Total (SUM), $:</Label>
                  </Col>
                  <Col sm="1">
                    <Input
                      type="number"
                      name="cost_variation_1_total"
                      id="cost_variation_1_total"
                      placeholder="0"
                      value={specificationData?.cost_variation_1_total}
                      disabled
                    />
                  </Col>
                  <Col sm="1">
                    <Input
                      type="number"
                      name="cost_variation_2_total"
                      id="cost_variation_2_total"
                      placeholder="0"
                      value={specificationData?.cost_variation_2_total}
                      disabled
                    />
                  </Col>
                  <Col sm="1">
                    <Input
                      type="number"
                      name="cost_variation_3_total"
                      id="cost_variation_3_total"
                      placeholder="0"
                      value={specificationData?.cost_variation_3_total}
                      disabled
                    />
                  </Col>
                  <Col sm="1">
                    <Input
                      type="number"
                      name="cost_variation_4_total"
                      id="cost_variation_4_total"
                      placeholder="0"
                      value={specificationData?.cost_variation_4_total}
                      disabled
                    />
                  </Col>
                  <Col sm="2">
                    <Button
                      className="me-1"
                      color="success"
                      type="submit"
                      onClick={(e) => {
                        e.preventDefault();
                        addItem();
                      }}
                    >
                      Add New Row
                    </Button>
                  </Col>
                </Row>
                <Row className="border color-primary rounded py-1">
                  <Col sm="1"></Col>
                  <Col sm="3" className="d-flex align-items-center">
                    <Label>Delivery to us, $</Label>
                  </Col>
                  <Col sm="1">
                    <Input
                      type="number"
                      value={specificationData?.delivery_cost_variation[0]}
                      onChange={(e) => onDeliveryChange(e?.target?.value, 0)}
                    />
                  </Col>
                  <Col sm="1">
                    <Input
                      type="number"
                      value={specificationData?.delivery_cost_variation[1]}
                      onChange={(e) => onDeliveryChange(e?.target?.value, 1)}
                    />
                  </Col>
                  <Col sm="1">
                    <Input
                      type="number"
                      value={specificationData?.delivery_cost_variation[2]}
                      onChange={(e) => onDeliveryChange(e?.target?.value, 2)}
                    />
                  </Col>
                  <Col sm="1">
                    <Input
                      type="number"
                      value={specificationData?.delivery_cost_variation[3]}
                      onChange={(e) => onDeliveryChange(e?.target?.value, 3)}
                    />
                  </Col>
                </Row>
                <Row className="border color-primary rounded py-1">
                  <Col sm="1"></Col>
                  <Col sm="3" className="d-flex align-items-center">
                    <Label>
                      Labor Expense to complete Production Process, $
                    </Label>
                  </Col>
                  <Col sm="1">
                    <Input
                      type="number"
                      value={specificationData?.labor_expense_cost_variation[0]}
                      onChange={(e) => onLaborChange(e?.target?.value, 0)}
                    />
                  </Col>
                  <Col sm="1">
                    <Input
                      type="number"
                      value={specificationData?.labor_expense_cost_variation[1]}
                      onChange={(e) => onLaborChange(e?.target?.value, 1)}
                    />
                  </Col>
                  <Col sm="1">
                    <Input
                      type="number"
                      value={specificationData?.labor_expense_cost_variation[2]}
                      onChange={(e) => onLaborChange(e?.target?.value, 2)}
                    />
                  </Col>
                  <Col sm="1">
                    <Input
                      type="number"
                      value={specificationData?.labor_expense_cost_variation[3]}
                      onChange={(e) => onLaborChange(e?.target?.value, 3)}
                    />
                  </Col>
                </Row>
                <Row className="mt-1">
                  <Col sm="3"></Col>
                  <Col
                    sm="3"
                    className="d-flex align-items-center justify-content-end"
                  >
                    Total Cost Variation 1
                  </Col>
                  <Col sm="3">
                    <Input
                      type="number"
                      name="variation_4"
                      id="variation_4"
                      placeholder="0"
                      value={specificationData?.sum_of_cost_variation_1}
                      disabled
                    />
                  </Col>
                  <Col sm="3"></Col>
                </Row>
                <Row className="mt-1">
                  <Col sm="3"></Col>
                  <Col
                    sm="3"
                    className="d-flex align-items-center justify-content-end"
                  >
                    Total Cost Variation 2
                  </Col>
                  <Col sm="3">
                    <Input
                      type="number"
                      name="variation_4"
                      id="variation_4"
                      placeholder="0"
                      value={specificationData?.sum_of_cost_variation_2}
                      disabled
                    />
                  </Col>
                  <Col sm="3"></Col>
                </Row>
                <Row className="mt-1">
                  <Col sm="3"></Col>
                  <Col
                    sm="3"
                    className="d-flex align-items-center justify-content-end"
                  >
                    Total Cost Variation 3
                  </Col>
                  <Col sm="3">
                    <Input
                      type="number"
                      name="variation_4"
                      id="variation_4"
                      placeholder="0"
                      value={specificationData?.sum_of_cost_variation_3}
                      disabled
                    />
                  </Col>
                  <Col sm="3"></Col>
                </Row>
                <Row className="mt-1">
                  <Col sm="3"></Col>
                  <Col
                    sm="3"
                    className="d-flex align-items-center justify-content-end"
                  >
                    Total Cost Variation 4
                  </Col>
                  <Col sm="3">
                    <Input
                      type="number"
                      name="variation_4"
                      id="variation_4"
                      placeholder="0"
                      value={specificationData?.sum_of_cost_variation_4}
                      disabled
                    />
                  </Col>
                  <Col sm="3"></Col>
                </Row>
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
                        color="success"
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
          </Col>
        </Form>
      </Row>
    </Fragment>
  );
};
export default FinancialInfo;

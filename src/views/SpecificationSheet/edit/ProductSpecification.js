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
  getProductionCategoriesOptions,
  getVendorsOptions,
  nextTab,
  prevTab,
  setSpecificationData,
} from "../store";

const ProductSpecification = () => {
  const dispatch = useDispatch();
  const [options, setOptions] = useState([{}]);
  const { specificationData, makeSampleDataOptions, vendorOptions, active } =
  useSelector((state) => state.productspecifications);

  const onChange = (data) => {
    dispatch(setSpecificationData(data));
  };

  useEffect(() => {
    if(specificationData){
      setOptions(specificationData?.spec_table_data)
    }
  }, [specificationData])
  

  useEffect(() => {
    dispatch(getMakeSampleDataOptions());
    dispatch(getVendorsOptions());
    dispatch(getProductionCategoriesOptions());
  }, []);

  useEffect(() => {
    onChange({ spec_table_data: options })
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
                    <Label className="form-label" for="make_sample">
                      Make sample?
                    </Label>
                    <Select
                      className="react-select"
                      classNamePrefix="select"
                      theme={selectThemeColors}
                      placeholder="Select Status"
                      options={makeSampleDataOptions}
                      value={makeSampleDataOptions?.find(
                        (item) => item?.value == specificationData?.make_sample
                      )}
                      onChange={(e) => onChange({ make_sample: e?.value })}
                    />
                  </Col>
                  <Col sm="1"></Col>

                  <Col sm="3" className="mb-1">
                    <Label className="form-label" for="product_weight">
                      Product Weight (lb)
                    </Label>
                    <Input
                      type="number"
                      name="product_weight"
                      id="product_weight"
                      placeholder="Enter Product Weight"
                      value={specificationData?.product_weight}
                      onChange={(e) =>
                        onChange({ product_weight: e?.target?.value })
                      }
                    />
                  </Col>
                  <Col sm="1" className="mb-1"></Col>

                  <Col sm="3" className="mb-1">
                    <Label className="form-label" for="product_length">
                      Length (in)
                    </Label>
                    <Input
                      type="number"
                      name="product_length"
                      id="product_length"
                      placeholder="Enter  Length"
                      value={specificationData?.product_length}
                      onChange={(e) =>
                        onChange({ product_length: e?.target?.value })
                      }
                    />
                  </Col>
                  <Col sm="1" className="mb-1"></Col>

                  <Col sm="3" className="mb-1">
                    <Label className="form-label" for="product_width">
                      Width (in)
                    </Label>
                    <Input
                      type="number"
                      name="product_width"
                      id="product_width"
                      placeholder="Enter  Width"
                      value={specificationData?.product_width}
                      onChange={(e) =>
                        onChange({ product_width: e?.target?.value })
                      }
                    />
                  </Col>
                  <Col sm="1" className="mb-1"></Col>
                  <Col sm="3" className="mb-1">
                    <Label className="form-label" for="product_height">
                      Height (in)
                    </Label>
                    <Input
                      type="number"
                      name="product_height"
                      id="productproduct_height_description"
                      placeholder="Enter  Height"
                      value={specificationData?.product_height}
                      onChange={(e) =>
                        onChange({ product_height: e?.target?.value })
                      }
                    />
                  </Col>
                  <Col sm="1" className="mb-1"></Col>
                  <Col sm="3" className="mb-1">
                    <Label className="form-label" for="packaging_type_name">
                      Packaging Type Name
                    </Label>
                    <Input
                      type="text"
                      name="packaging_type_name"
                      id="packaging_type_name"
                      placeholder="Enter  Packaging Type Name"
                      value={specificationData?.packaging_type_name}
                      onChange={(e) =>
                        onChange({ packaging_type_name: e?.target?.value })
                      }
                    />
                  </Col>
                  <Col sm="1" className="mb-1"></Col>
                  <Col sm="3" className="mb-1">
                    <Label className="form-label" for="packaging_size">
                      Packaging size LxWxH (in)
                    </Label>
                    <Input
                      type="text"
                      name="packaging_size"
                      id="packaging_size"
                      placeholder="Enter  Packaging size LxWxH"
                      value={specificationData?.packaging_size}
                      onChange={(e) =>
                        onChange({ packaging_size: e?.target?.value })
                      }
                    />
                  </Col>
                  <Col sm="1" className="mb-1"></Col>
                  <Col sm="3" className="mb-1">
                    <Label className="form-label" for="packaging_weight">
                      Packaging Weight (lb)
                    </Label>
                    <Input
                      type="number"
                      name="packaging_weight"
                      id="packaging_weight"
                      placeholder="Enter  ackaging Weight"
                      value={specificationData?.packaging_weight}
                      onChange={(e) =>
                        onChange({ packaging_weight: e?.target?.value })
                      }
                    />
                  </Col>
                  <Col sm="1" className="mb-1"></Col>
                  <Col sm="3" className="mb-1">
                    <Label className="form-label" for="total_weight">
                      Total Weight
                    </Label>
                    <Input
                      type="number"
                      name="total_weight"
                      id="total_weight"
                      placeholder="Enter  Total Weight"
                      value={specificationData?.total_weight}
                      onChange={(e) =>
                        onChange({ total_weight: e?.target?.value })
                      }
                    />
                  </Col>
                  <Col sm="1" className="mb-1"></Col>
                </Row>
                <hr />
                <div>
                  {options?.map((item, index) => {
                    return (
                      <Row
                        key={index}
                        className="p-1 mb-1 border border-primary rounded"
                      >
                        <Col sm="1" className="d-flex align-items-center">{index+1}</Col>
                        <Col sm="2">
                          <Input
                            type="text"
                            className="mb-1"
                            name="part_name"
                            id="part_name"
                            placeholder="Part Name"
                            value={item?.part_name}
                            onChange={(e) =>
                              onOptionChange(
                                "part_name",
                                e?.target?.value,
                                index
                              )
                            }
                          />
                          <Input
                            type="text"
                            name="sku"
                            id="sku"
                            placeholder="Product SKU"
                            value={item?.sku}
                            onChange={(e) =>
                              onOptionChange("sku", e?.target?.value, index)
                            }
                          />
                        </Col>
                        <Col sm="2">
                          <Select
                            className="react-select mb-1"
                            classNamePrefix="select"
                            theme={selectThemeColors}
                            placeholder="Select a vendor"
                            options={vendorOptions}
                            value={vendorOptions?.find(
                              (itm) => itm?.value === parseInt(item?.option_category)
                            )}
                            onChange={(e) =>
                              onOptionChange("option_category", e?.value, index)
                            }
                          />
                          <Input
                            type="text"
                            name="url"
                            id="url"
                            placeholder="Product URL"
                            value={item?.url}
                            onChange={(e) =>
                              onOptionChange("url", e?.target?.value, index)
                            }
                          />
                        </Col>
                        <Col sm="2">
                          <Input
                            type="text"
                            className="mb-1"
                            name="material"
                            id="material"
                            placeholder="Material"
                            value={item?.material}
                            onChange={(e) =>
                              onOptionChange(
                                "material",
                                e?.target?.value,
                                index
                              )
                            }
                          />
                          <Input
                            type="text"
                            name="size"
                            id="size"
                            placeholder="Size"
                            value={item?.size}
                            onChange={(e) =>
                              onOptionChange("size", e?.target?.value, index)
                            }
                          />
                        </Col>
                        <Col sm="2">
                          <Input
                            type="text"
                            className="mb-1"
                            name="color"
                            id="color"
                            placeholder="Color"
                            value={item?.color}
                            onChange={(e) =>
                              onOptionChange("color", e?.target?.value, index)
                            }
                          />
                          <Input
                            type="text"
                            name="type"
                            id="type"
                            placeholder="Type"
                            value={item?.type}
                            onChange={(e) =>
                              onOptionChange("type", e?.target?.value, index)
                            }
                          />
                        </Col>
                        <Col sm="2">
                          <Input
                            type="number"
                            className="mb-1"
                            name="price"
                            id="price"
                            placeholder="Price"
                            value={item?.price}
                            onChange={(e) =>
                              onOptionChange("price", e?.target?.value, index)
                            }
                          />
                          <Input
                            type="text"
                            className="mb-1"
                            name="note"
                            id="note"
                            placeholder="Note"
                            value={item?.note}
                            onChange={(e) =>
                              onOptionChange("note", e?.target?.value, index)
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
                            <Trash2 size={24} className={`text-danger me-50`} />
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
export default ProductSpecification;

import "@styles/react/libs/react-select/_react-select.scss";
import { selectThemeColors } from "@utils";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  getStatusesOptions,
  getWebImageStatusOptions,
  nextTab,
  prevTab,
  setSpecificationData,
} from "../store";

const GeneralInfo = () => {
  const [errors, setErrors] = useState(null);
  const dispatch = useDispatch();
  const { specificationData, statusesOptions, webImageStatusOptions } =
    useSelector((state) => state.productspecifications);

  useEffect(() => {
    dispatch(getStatusesOptions());
    dispatch(getWebImageStatusOptions());
  }, []);

  const onChange = (data) => {
    dispatch(setSpecificationData(data));
  };
  const onImageChange = (e) => {
    dispatch(setSpecificationData({ [e?.target?.name]: e?.target?.files }));
  };

  return (
    <Fragment>
      <Row>
        <Form>
          <Col sm="12">
            <Card>
              <CardBody>
                <Row>
                  <Col sm="4" className="mb-1">
                    <Label className="form-label" for="status">
                      Status
                    </Label>
                    <Select
                      className="react-select"
                      classNamePrefix="select"
                      theme={selectThemeColors}
                      placeholder="Select Status"
                      options={statusesOptions}
                      value={statusesOptions?.find(
                        (item) => item?.value == specificationData?.status
                      )}
                      onChange={(e) => onChange({ status: e?.value })}
                    />
                  </Col>
                  <Col sm="8"></Col>
                  <Col sm="4" className="mb-1">
                    <Label className="form-label" for="web_image_status">
                      Web image status
                    </Label>
                    <Select
                      className="react-select"
                      classNamePrefix="select"
                      theme={selectThemeColors}
                      placeholder="Select Web image status"
                      options={webImageStatusOptions}
                      value={webImageStatusOptions?.find(
                        (item) =>
                          item?.value == specificationData?.web_image_status
                      )}
                      onChange={(e) => onChange({ web_image_status: e?.value })}
                    />
                  </Col>
                  <Col sm="8"></Col>

                  <Col sm="4" className="mb-1">
                    <Label className="form-label" for="product_images">
                      Product Image
                    </Label>
                    <Input
                      type="file"
                      name="product_images"
                      onChange={onImageChange}
                      multiple
                    />
                  </Col>
                  <Col sm="8" className="mb-1"></Col>

                  <Col sm="4" className="mb-1">
                    <Label className="form-label" for="product_name">
                      Product Name
                    </Label>
                    <Input
                      type="text"
                      name="product_name"
                      id="product_name"
                      placeholder="Product Name"
                      value={specificationData?.product_name}
                      onChange={(e) =>
                        onChange({ product_name: e?.target?.value })
                      }
                    />
                  </Col>
                  <Col sm="8" className="mb-1"></Col>

                  <Col sm="4" className="mb-1">
                    <Label className="form-label" for="name">
                      Product SKU
                    </Label>
                    <Input
                      type="text"
                      name="sku"
                      id="sku"
                      placeholder="Product SKU"
                      value={specificationData?.sku}
                      onChange={(e) => onChange({ sku: e?.target?.value })}
                    />
                  </Col>
                  <Col sm="4" className="mb-1">
                    <Label className="form-label" for="previous_sku">
                      .
                    </Label>
                    <Input
                      type="text"
                      name="previous_sku"
                      id="previous_sku"
                      placeholder="Enter previous SKU to copy or leave empty"
                      value={specificationData?.previous_sku}
                      onChange={(e) =>
                        onChange({ previous_sku: e?.target?.value })
                      }
                    />
                  </Col>
                  <Col sm="2" className="mb-1"></Col>

                  <Col sm="4" className="mb-1">
                    <Label className="form-label" for="name">
                      Product Description
                    </Label>
                    <Input
                      type="textarea"
                      rows="3"
                      name="product_description"
                      id="product_description"
                      placeholder="Product Description"
                      value={specificationData?.product_description}
                      onChange={(e) =>
                        onChange({ product_description: e?.target?.value })
                      }
                    />
                  </Col>
                  <Col sm="8" className="mb-1"></Col>
                  <Col sm="4" className="mb-1">
                    <Label className="form-label" for="name">
                      General Note
                    </Label>
                    <Input
                      type="textarea"
                      rows="3"
                      name="general_note"
                      id="general_note"
                      placeholder="General Note"
                      value={specificationData?.product_general_note}
                      onChange={(e) =>
                        onChange({ product_general_note: e?.target?.value })
                      } 
                    />
                  </Col>
                  <Col sm="8" className="mb-1"></Col>
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
export default GeneralInfo;

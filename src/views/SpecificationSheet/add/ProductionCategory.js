import "@styles/react/libs/react-select/_react-select.scss";
import { selectThemeColors } from "@utils";
import { Fragment, useEffect } from "react";
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
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {
  getProductionCategoriesOptions,
  getSkus,
  nextTab,
  setSpecificationData,
} from "../store";

const ProductionCategory = () => {
  const dispatch = useDispatch();
  const { specificationData, productionCategoriesOptions } = useSelector(
    (state) => state.productspecifications
  );

  useEffect(() => {
    dispatch(getProductionCategoriesOptions());
  }, []);

  const onChange = (data) => {
    dispatch(setSpecificationData(data));
  };

  const onNext = (e) => {
    e.preventDefault();
    if (specificationData?.production_category_id) {
      dispatch(getSkus({'production_category': specificationData?.production_category_id, 'gift-wrap':specificationData?.gift_wrap}));
      dispatch(nextTab());
    } else {
      const MySwal = withReactContent(Swal)
      MySwal.fire({
        position: 'top-end',
        icon: 'error',
        title: "Please Select Product Category",
        showConfirmButton: false,
        timer: 1500
      })
    }
  };

  return (
    <Fragment>
      <Row>
        <Form>
          <Col sm="12">
            <Card>
              <CardBody>
                <Row>
                  <Col sm="12" className="mb-1">
                    <Label className="form-label" for="image">
                      Production category
                    </Label>
                    <Select
                      className="react-select"
                      classNamePrefix="select"
                      theme={selectThemeColors}
                      placeholder="Select Production category"
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
                  <Col sm="12" className="d-flex justify-content-between my-1">
                    <div className="form-check form-check-success">
                      <Input
                        type="checkbox"
                        name="gift_wrap"
                        checked={specificationData?.show_header}
                        onChange={(e) =>
                          onChange({ "gift_wrap": e?.target?.checked })
                        }
                      />
                      <Label
                        className="form-check-label"
                        for="success-checkbox"
                      >
                        Gift wrapped?
                      </Label>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col sm="12">
                    <div className="d-flex justify-content-end table-header-actions mx-4 mt-2">
                      <Button
                        className="add-new-user"
                        color="primary"
                        onClick={onNext}
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
export default ProductionCategory;

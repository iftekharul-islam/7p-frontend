import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Select from "react-select";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Input,
  Label,
  Row,
} from "reactstrap";
import { getBatchRouteOptions, getChildData, setChildData, updateChildSku } from "../store";

const index = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {id} = useParams();
  const { childData, mixingOptions, batchRouteOptions, sure3dOptions, bypassOption } = useSelector(
    (state) => state?.configchildskus
  );

  useEffect(() => {
    dispatch(getBatchRouteOptions());
    dispatch(getChildData(id));
  }, []);

  const handleChange = async (name, value) => {
    await updateData({ [name]: value });
  };

  const updateData = (payload) => {
    dispatch(setChildData(payload));
  };

  const UpdateChildSKU = async () => {
    const res = await dispatch(updateChildSku());
    if (res?.payload) {
      const params = {
        search_for_first: childData?.child_sku,
        search_in_first: "child_sku",
      };
      const u = new URLSearchParams(params).toString();
      navigate("/config-child-sku?" + u, { replace: true });
    }
  };

  return (
    <Fragment>
      <Card>
        <CardHeader>
          <h4 className="card-title">Add Child SKU</h4>
        </CardHeader>
        <CardBody>
          <Row className="mt-1">
            <Col sm="2"></Col>
            <Col
              sm="2"
              className="d-flex align-items-center justify-content-end"
            >
              <Label>Allow Mixing :</Label>
            </Col>
            <Col sm="4">
              <Select
                className="react-select"
                classNamePrefix="select"
                name="allow_mixing"
                options={mixingOptions}
                value={mixingOptions?.find(
                  (item) => item?.value == childData?.allow_mixing
                )}
                onChange={(e) => handleChange("allow_mixing", e.value)}
              />
            </Col>
          </Row>
          <Row className="mt-1">
            <Col sm="2"></Col>
            <Col
              sm="2"
              className="d-flex align-items-center justify-content-end"
            >
              <Label>Batch route :</Label>
            </Col>
            <Col sm="4">
              <Select
                className="react-select"
                classNamePrefix="select"
                name="batch_route_id"
                options={batchRouteOptions}
                value={batchRouteOptions?.find(
                  (item) => item.value === childData?.batch_route_id
                )}
                onChange={(e) => handleChange("batch_route_id", e.value)}
              />
            </Col>
          </Row>
          <Row className="mt-1">
            <Col sm="2"></Col>
            <Col
              sm="2"
              className="d-flex align-items-center justify-content-end"
            >
              <Label>ID Catalog :</Label>
            </Col>
            <Col sm="4">
              <Input
                type="text"
                name="id_catalog"
                value={childData?.id_catalog}
                onChange={(e) => handleChange("id_catalog", e.target.value)}
              />
            </Col>
          </Row>
          <Row className="mt-1">
            <Col sm="2"></Col>
            <Col
              sm="2"
              className="d-flex align-items-center justify-content-end"
            >
              <Label>Parent SKU :</Label>
            </Col>
            <Col sm="4">
              <Input
                type="text"
                name="parent_sku"
                value={childData?.parent_sku}
                onChange={(e) => handleChange("parent_sku", e.target.value)}
              />
            </Col>
          </Row>
          <Row className="mt-1">
            <Col sm="2"></Col>
            <Col
              sm="2"
              className="d-flex align-items-center justify-content-end"
            >
              <Label>Child SKU :</Label>
            </Col>
            <Col sm="4">
              <Input
                type="text"
                name="child_sku"
                value={childData?.child_sku}
                onChange={(e) => handleChange("child_sku", e.target.value)}
              />
            </Col>
          </Row>
          <Row className="mt-1">
            <Col sm="2"></Col>
            <Col
              sm="2"
              className="d-flex align-items-center justify-content-end"
            >
              <Label>Graphic SKU :</Label>
            </Col>
            <Col sm="4">
              <Input
                type="text"
                name="graphic_sku"
                value={childData?.graphic_sku}
                onChange={(e) => handleChange("graphic_sku", e.target.value)}
              />
            </Col>
          </Row>
          <Row className="mt-1">
            <Col sm="2"></Col>
            <Col
              sm="2"
              className="d-flex align-items-center justify-content-end"
            >
              <Label>Sure3d :</Label>
            </Col>
            <Col sm="4">
              <Select
                className="react-select"
                classNamePrefix="select"
                name="allow_mixing"
                options={sure3dOptions}
                value={sure3dOptions?.find(
                  (item) => item?.value === childData?.sure3d
                )}
                onChange={(e) => handleChange("sure3d", e.value)}
              />
            </Col>
          </Row><Row className="mt-1">
            <Col sm="2"></Col>
            <Col
              sm="2"
              className="d-flex align-items-center justify-content-end"
            >
              <Label>Bypass Options :</Label>
            </Col>
            <Col sm="4">
              <Select
                className="react-select"
                classNamePrefix="select"
                name="allow_mixing"
                options={bypassOption}
                value={bypassOption?.find(
                  (item) => item?.value == childData?.bypass_option
                )}
                onChange={(e) => handleChange("bypass_option", e.value)}
              />
            </Col>
          </Row>
          <Row className="mt-1">
            <Col sm="4"></Col>
            <Col sm="4">
              <Button color="primary" onClick={UpdateChildSKU}>
                Update child SKU
              </Button>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default index;

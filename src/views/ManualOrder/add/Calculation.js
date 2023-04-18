import "@styles/react/libs/flatpickr/flatpickr.scss";
import "@styles/react/libs/react-select/_react-select.scss";
import { Fragment, useEffect } from "react";
import { Button, Col, Input, Row } from "reactstrap";

const Calculation = (data, onChange, onSubmit, errors) => {
  useEffect(() => {
    onChange({
      target: {
        name: "total",
        value: parseFloat(
          parseFloat(data?.subtotal ?? 0) -
            parseFloat(data?.coupon_value ?? 0) +
            parseFloat(data?.gift_wrap_cost ?? 0) +
            parseFloat(data?.shipping_charge ?? 0) +
            parseFloat(data?.insurance ?? 0) +
            parseFloat(data?.adjustments ?? 0) +
            parseFloat(data?.tax_charge ?? 0)
        ).toFixed(2),
      },
    });
  }, [
    data?.subtotal,
    data?.coupon_value,
    data?.gift_wrap_cost,
    data?.shipping_charge,
    data?.insurance,
    data?.adjustments,
    data?.tax_charge,
  ]);
  return (
    <Fragment>
      <Row className="pt-2">
        <Col sm="7"></Col>
        <Col sm="5">
          <Row>
            <Col
              sm="4"
              className="d-flex align-self-center justify-content-end"
            >
              Subtotal:
            </Col>
            <Col sm="4"></Col>
            <Col sm="4">
              <Input
                type="number"
                name="subtotal"
                id="subtotal"
                value={data?.subtotal ?? 0}
                disabled
              />
            </Col>
          </Row>
          <Row>
            <Col
              sm="4"
              className="d-flex align-self-center justify-content-end"
            >
              Coupon-discount:
            </Col>
            <Col sm="4">
              <Input
                type="text"
                name="coupon_id"
                id="coupon_id"
                placeholder="Coupon id"
                value={data?.coupon_id}
                onChange={onChange}
              />
            </Col>
            <Col sm="4">
              <Input
                type="number"
                name="coupon_value"
                id="coupon_value"
                value={data?.coupon_value ?? 0}
                onChange={onChange}
              />
            </Col>
          </Row>
          <Row>
            <Col
              sm="4"
              className="d-flex align-self-center justify-content-end"
            >
              Gift Wrap:
            </Col>
            <Col sm="4"></Col>
            <Col sm="4">
              <Input
                type="number"
                name="gift_wrap_cost"
                id="gift_wrap_cost"
                value={data?.gift_wrap_cost ?? 0}
                onChange={onChange}
              />
            </Col>
          </Row>
          <Row>
            <Col
              sm="4"
              className="d-flex align-self-center justify-content-end"
            >
              Shipping:
            </Col>
            <Col sm="4"></Col>
            <Col sm="4">
              <Input
                type="number"
                name="shipping_charge"
                id="shipping_charge"
                value={data?.shipping_charge ?? 0}
                onChange={onChange}
              />
            </Col>
          </Row>
          <Row>
            <Col
              sm="4"
              className="d-flex align-self-center justify-content-end"
            >
              Insurance:
            </Col>
            <Col sm="4"></Col>
            <Col sm="4">
              <Input
                type="number"
                name="insurance"
                id="insurance"
                value={data?.insurance ?? 0}
                onChange={onChange}
              />
            </Col>
          </Row>
          <Row>
            <Col
              sm="4"
              className="d-flex align-self-center justify-content-end"
            >
              Adjustments:
            </Col>
            <Col sm="4"></Col>
            <Col sm="4">
              <Input
                type="number"
                name="adjustments"
                id="adjustments"
                value={data?.adjustments ?? 0}
                onChange={onChange}
              />
            </Col>
          </Row>
          <Row>
            <Col
              sm="4"
              className="d-flex align-self-center justify-content-end"
            >
              Tax:
            </Col>
            <Col sm="4"></Col>
            <Col sm="4">
              <Input
                type="number"
                name="tax_charge"
                id="tax_charge"
                value={data?.tax_charge ?? 0}
                onChange={onChange}
              />
            </Col>
          </Row>
          <Row>
            <Col
              sm="4"
              className="d-flex align-self-center justify-content-end"
            >
              Total:
            </Col>
            <Col sm="4"></Col>
            <Col sm="4">
              <Input
                type="number"
                name="total"
                id="total"
                value={data?.total ?? 0}
                disabled
              />
            </Col>
          </Row>
          <Row>
            <Col sm="12" className="mt-1">
              <div className="d-flex justify-content-end">
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
        </Col>
      </Row>
    </Fragment>
  );
};
export default Calculation;

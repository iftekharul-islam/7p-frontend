import "@styles/react/libs/flatpickr/flatpickr.scss";
import "@styles/react/libs/react-select/_react-select.scss";
import { Fragment, useEffect } from "react";
import { Eye, Mail } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { Col, Input, Label, Row } from "reactstrap";
import { getShipOptions } from "../store";

const Address = (data, onChange, errors, setShowMail) => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.manualOrders);
  useEffect(() => {
    dispatch(getShipOptions());
  }, []);

  return (
    <Fragment>
      <Row className="pt-2">
        <Col sm="5">
          <Row>
            <Col sm="12">
              <h4>Ship To</h4>
              <hr />
            </Col>
            <Col sm="4">
              <Label className="form-label" for="ship_full_name">
                Full Name
              </Label>
              <Input
                type="text"
                name="ship_full_name"
                id="ship_full_name"
                placeholder="Enter Full Name"
                value={data?.ship_full_name}
                onChange={onChange}
              />
            </Col>
            <Col sm="4">
              <Label className="form-label" for="ship_company_name">
                Company
              </Label>
              <Input
                type="text"
                name="ship_company_name"
                id="ship_company_name"
                placeholder="Enter Company"
                value={data?.ship_company_name}
                onChange={onChange}
              />
            </Col>
            <Col sm="4">
              <Label className="form-label" for="ship_address_1">
                Street
              </Label>
              <Input
                type="text"
                name="ship_address_1"
                id="ship_address_1"
                placeholder="Enter Street"
                value={data?.ship_address_1}
                onChange={onChange}
              />
            </Col>
            <Col sm="4">
              <Label className="form-label" for="ship_first_name">
                First/Last
              </Label>
              <Input
                type="text"
                name="ship_first_name"
                id="ship_first_name"
                placeholder="Enter First"
                value={data?.ship_first_name}
                onChange={onChange}
              />
            </Col>
            <Col sm="4">
              <Label className="form-label" for="ship_last_name">
                .
              </Label>
              <Input
                type="text"
                name="ship_last_name"
                id="ship_last_name"
                placeholder="Enter Last"
                value={data?.ship_last_name}
                onChange={onChange}
              />
            </Col>

            <Col sm="4">
              <Label className="form-label" for="ship_address_2">
                Line 2
              </Label>
              <Input
                type="text"
                name="ship_address_2"
                id="ship_address_2"
                placeholder="Enter Line 2"
                value={data?.ship_address_2}
                onChange={onChange}
              />
            </Col>
            <Col sm="4">
              <Label className="form-label" for="ship_city">
                City
              </Label>
              <Input
                type="text"
                name="ship_city"
                id="ship_city"
                placeholder="Enter City"
                value={data?.ship_city}
                onChange={onChange}
              />
            </Col>
            <Col sm="4">
              <Label className="form-label" for="ship_state">
                State
              </Label>
              <Input
                type="text"
                name="ship_state"
                id="ship_state"
                placeholder="State"
                value={data?.ship_state}
                onChange={onChange}
              />
            </Col>
            <Col sm="4">
              <Label className="form-label" for="ship_zip">
                ZipCode
              </Label>
              <Input
                type="text"
                name="ship_zip"
                id="ship_zip"
                placeholder="Enter ZipCode"
                value={data?.ship_zip}
                onChange={onChange}
              />
            </Col>
            <Col sm="4">
              <Label className="form-label" for="ship_country">
                Country
              </Label>
              <Input
                type="text"
                name="ship_country"
                id="ship_country"
                placeholder="Enter Country"
                value={data?.ship_country}
                onChange={onChange}
              />
            </Col>
            <Col sm="4">
              <Label className="form-label" for="ship_phone">
                Phone
              </Label>
              <Input
                type="text"
                name="ship_phone"
                id="ship_phone"
                placeholder="Enter Phone"
                value={data?.ship_phone}
                onChange={onChange}
              />
            </Col>
          </Row>
        </Col>
        <Col sm="2"></Col>
        <Col sm="5">
          <Row>
            <Col sm="12">
              <h4>Bill To</h4>
              <hr />
            </Col>
            <Col sm="4">
              <Label className="form-label" for="bill_full_name">
                Full Name
              </Label>
              <Input
                type="text"
                name="bill_full_name"
                id="bill_full_name"
                placeholder="Enter Full Name"
                value={data?.bill_full_name}
                onChange={onChange}
              />
            </Col>
            <Col sm="4">
              <Label className="form-label" for="bill_company_name">
                Company
              </Label>
              <Input
                type="text"
                name="bill_company_name"
                id="bill_company_name"
                placeholder="Enter Company"
                value={data?.bill_company_name}
                onChange={onChange}
              />
            </Col>
            <Col sm="4">
              <Label className="form-label" for="bill_address_2">
                Line 2
              </Label>
              <Input
                type="text"
                name="bill_address_2"
                id="bill_address_2"
                placeholder="Enter Line 2"
                value={data?.bill_address_2}
                onChange={onChange}
              />
            </Col>
            <Col sm="4">
              <Label className="form-label" for="bill_first_name">
                First/Last
              </Label>
              <Input
                type="text"
                name="bill_first_name"
                id="bill_first_name"
                placeholder="Enter First"
                value={data?.bill_first_name}
                onChange={onChange}
              />
            </Col>
            <Col sm="4">
              <Label className="form-label" for="bill_last_name">
                .
              </Label>
              <Input
                type="text"
                name="bill_last_name"
                id="bill_last_name"
                placeholder="Enter Last"
                value={data?.bill_last_name}
                onChange={onChange}
              />
            </Col>
            <Col sm="4">
              <Label className="form-label" for="bill_address_1">
                Street
              </Label>
              <Input
                type="text"
                name="bill_address_1"
                id="bill_address_1"
                placeholder="Enter Street"
                value={data?.bill_address_1}
                onChange={onChange}
              />
            </Col>

            <Col sm="4">
              <Label className="form-label" for="bill_city">
                City
              </Label>
              <Input
                type="text"
                name="bill_city"
                id="bill_city"
                placeholder="Enter City"
                value={data?.bill_city}
                onChange={onChange}
              />
            </Col>
            <Col sm="4">
              <Label className="form-label" for="bill_state">
                State
              </Label>
              <Input
                type="text"
                name="bill_state"
                id="bill_state"
                placeholder="State"
                value={data?.bill_state}
                onChange={onChange}
              />
            </Col>
            <Col sm="4">
              <Label className="form-label" for="bill_zip">
                ZipCode
              </Label>
              <Input
                type="text"
                name="bill_zip"
                id="bill_zip"
                placeholder="Enter ZipCode"
                value={data?.bill_zip}
                onChange={onChange}
              />
            </Col>
            <Col sm="4">
              <Label className="form-label" for="bill_country">
                Country
              </Label>
              <Input
                type="text"
                name="bill_country"
                id="bill_country"
                placeholder="Enter Country"
                value={data?.bill_country}
                onChange={onChange}
              />
            </Col>
            <Col sm="4">
              <Label className="form-label" for="bill_phone">
                Phone
              </Label>
              <Input
                type="text"
                name="bill_phone"
                id="bill_phone"
                placeholder="Enter Phone"
                value={data?.bill_phone}
                onChange={onChange}
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <hr />
      <Row className="pt-1">
        <Col sm="2" className="d-flex align-items-center">
          <Label className="form-label" for="bill_email">
            Email
          </Label>
        </Col>
        <Col sm="3">
          <Input
            type="text"
            name="bill_email"
            id="bill_email"
            placeholder="Enter Email"
            value={data?.customer?.bill_email}
            onChange={onChange}
          />
        </Col>
        <Col sm="2" className="d-flex align-items-center">
          <div
            onClick={(e) => {
              setShowMail(true);
              e.preventDefault();
            }}
          >
            <Mail size={20} className="mx-1" />
          </div>
          |
          <Eye size={20} className="mx-1" />
        </Col>
      </Row>
      <Row className="pt-1">
        <Col sm="2" className="d-flex align-items-center">
          <Label className="form-label" for="order_comments">
            Customer comment
          </Label>
        </Col>
        <Col sm="3">
          <Input
            type="text"
            name="order_comments"
            id="order_comments"
            placeholder="Enter Customer comment"
            value={data?.order_comments}
            onChange={onChange}
          />
        </Col>
      </Row>
      <Row className="pt-1">
        <Col sm="2" className="d-flex align-items-center">
          <Label className="form-label" for="ship_message">
            Shipper Message
          </Label>
        </Col>
        <Col sm="3">
          <Input
            type="textarea"
            name="ship_message"
            id="ship_message"
            placeholder="Enter Shipper Message"
            value={data?.ship_message}
            onChange={onChange}
          />
        </Col>
      </Row>
    </Fragment>
  );
};
export default Address;

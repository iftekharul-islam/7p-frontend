import React, { useState } from "react";
import { PlusCircle } from "react-feather";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Col, Input, Label, Row } from "reactstrap";
import { ShipItem, badAddressQC, badAddressWAP } from "../store";

const ShippingPanel = ({ data, selected = [], origin, items = null }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { bin, order, item_options, thumbs, batch, id } = data ?? {};
  if (!items) items = bin?.items;
  const [weight, setWeight] = useState([{ pounds: 0, ounces: 0 }]);
  const addWeight = () => {
    setWeight([...weight, { pounds: 0, ounces: 0 }]);
  };

  let btnClass = null;
  let url = null;
  let btnText = null;
  const user = JSON.parse(localStorage.getItem("userData"));
  const shippingMethods = {
    "": "DEFAULT SHIPPING",
    "*": "DEFAULT SHIPPING",
    "MN*": "MANUAL SHIPPING",
    "US*FIRST_CLASS": "USPS FIRST_CLASS",
    "US*PRIORITY": "USPS PRIORITY",
    "US*EXPRESS": "USPS EXPRESS",
    "UP*S_GROUND": "UPS GROUND",
    "UP*S_3DAYSELECT": "UPS 3DAYSELECT",
    "UP*S_AIR_2DAY": "UPS AIR_2DAY",
    "UP*S_AIR_2DAYAM": "UPS AIR_2DAYAM",
    "UP*S_AIR_1DAYSAVER": "UPS AIR_1DAYSAVER",
    "UP*S_AIR_1DAY": "UPS AIR_1DAY",
    "UP*S_SUREPOST": "UPS SUREPOST",
    "FX*_SMART_POST": "FEDEX SMARTPOST",
    "FX*_GROUND_HOME_DELIVERY": "FEDEX GROUND_HOME_DELIVERY",
    "FX*_FEDEX_GROUND": "FEDEX GROUND",
    "FX*_FEDEX_2_DAY": "FEDEX 2_DAY",
    "FX*_FEDEX_EXPRESS_SAVER": "FEDEX EXPRESS_SAVER",
    "FX*_STANDARD_OVERNIGHT": "FEDEX STANDARD_OVERNIGHT",
    "FX*_PRIORITY_OVERNIGHT": "FEDEX PRIORITY_OVERNIGHT",
    "DL*_SMARTMAIL_PARCEL_EXPEDITED_MAX": "DHL SMARTMAIL PARCEL EXPEDITED MAX",
    "DL*_SMARTMAIL_PARCEL_EXPEDITED": "DHL SMARTMAIL PARCEL EXPEDITED",
    "DL*_SMARTMAIL_PARCEL_GROUND": "DHL SMARTMAIL PARCEL GROUND",
    "DL*_SMARTMAIL_PARCEL_PLUS_EXPEDITED":
      "DHL SMARTMAIL PARCEL PLUS EXPEDITED",
    "DL*_SMARTMAIL_PARCEL_PLUS_GROUND": "DHL SMARTMAIL PARCEL PLUS GROUND",
    "DL*_PARCEL_INTERNATIONAL_DIRECT": "DHL PARCEL INTERNATIONAL DIRECT",
    "EN*USFC": "ENDCIA USPS FIRST CLASS",
    "EN*USPM": "ENDCIA USPS PRIORITY",
    "EN*USCG": "ENDCIA USPS GROUND",
  };

  // TODO - Add logic for for access
  // order.store && order.store.qc === '0' || (user.accesses.some((access) => access.page === 'ship_order'))
  if (order?.store && order?.store?.qc === "0") {
    btnClass = "success";
    url = "/shipping/ship_items";
    if (order?.carrier === "MN") {
      btnText = order?.method;
      btnClass = "info";
      url = "/ship_order/ship_items";
    } else if (items?.length > 1) {
      btnText = `${items?.length} Lines Approved by ${user?.username}`;
    } else {
      btnText = `Approved by ${user?.username}`;
    }

    if (order?.shippable_items?.length !== items?.length) {
      btnText = `Partial Ship ${btnText}`;
      btnClass = "primary";
      url = "/ship_order/ship_items";
    }
  } else {
    btnText = "Ship by Supervisor";
    btnClass = "danger";
    url = "";
  }

  const badAddress = async (e) => {
    e.preventDefault();
    if (origin == "QC") {
      const res = await dispatch(
        badAddressQC({
          action: "address",
          batch_number: batch?.batch_number,
          id,
          order_id: order?.id,
          origin: "QC",
          count: items?.length,
        })
      );
    } else {
      const res = await dispatch(badAddressWAP({ order_id: order?.id }));
    }
  };

  const changeWeght = (e, index) => {
    const { name, value } = e.target;
    const list = [...weight];
    list[index][name] = value;
    setWeight(list);
  };

  const submitFL = async (e, location) => {
    e.preventDefault();
    const pounds = weight?.map((w) => w.pounds);
    const ounces = weight?.map((w) => w.ounces);
    const shipItem = await dispatch(
      ShipItem({
        batch_number: batch?.batch_number,
        id: id ?? null,
        bin: bin?.id,
        order_id: order?.id,
        origin: origin ?? null,
        location,
        count: items?.length,
        "selected-items-json": JSON?.stringify(selected),
        pounds,
        ounces,
      })
    );
  };

  return (
    <Row className="border rounded p-1">
      {order?.carrier != null && order?.carrier !== "MN" && (
        <Col sm="12" className="panel-header">
          <h4>
            <strong>
              <u>
                Ship By {shippingMethods[order?.carrier + "*" + order?.method]}
              </u>
            </strong>
          </h4>
        </Col>
      )}

      <Row className="panel-body">
        <Col sm="4" className="col-xs-12 col-sm-4 col-md-2">
          {order?.carrier != null ? (
            <>
              {order?.carrier === "FX" && (
                <img src="/assets/images/fedex.jpg" alt="FedEx" />
              )}
              {order?.carrier === "UP" &&
                !order.method.includes("MAIL_INNOVATIONS") && (
                  <img src="/assets/images/ups.jpg" alt="UPS" />
                )}
              {order?.carrier === "US" && (
                <img src="/assets/images/usps.jpg" alt="USPS" />
              )}
            </>
          ) : (
            <strong>Ship to:</strong>
          )}
        </Col>

        <Col sm="4" className="col-xs-12 col-sm-8 col-md-5">
          <div>{order?.customer?.ship_full_name}</div>
          <div>
            {order?.customer?.ship_company_name &&
              order?.customer?.ship_company_name}
          </div>
          <div>{order?.customer?.ship_address_1}</div>
          <div>
            {order?.customer?.ship_address_2 && order?.customer?.ship_address_2}
          </div>
          <div>
            {order?.customer?.ship_city}, {order?.customer?.ship_state}{" "}
            {order?.customer?.ship_zip}
          </div>
          <div>
            {order?.customer?.ship_country.substring(0, 2) !== "US" &&
              order?.customer?.ship_country}
          </div>

          <Button
            color="primary"
            size="sm"
            className="btn-xs"
            onClick={badAddress}
          >
            Bad Address
          </Button>
        </Col>

        <Col
          sm="4"
          className="col-xs-12 col-sm-12 col-md-5"
          style={{ textAlign: "right", padding: 0 }}
        >
          {weight?.map((itm, index) => (
            <Row>
              <Col sm="4">
                {index == 0 &&
                  (order?.carrier === "US" ? (
                    <label style={{ color: "red" }}>*Weight:</label>
                  ) : (
                    <label>Weight:</label>
                  ))}
              </Col>
              <Col sm="4">
                {index == 0 && <Label>lbs</Label>}
                <Input
                  type="number"
                  name="pounds"
                  style={{ width: "100px" }}
                  min="0"
                  defaultValue={0}
                  value={itm.pounds}
                  onChange={(e) => changeWeght(e, index)}
                />
              </Col>
              <Col sm="4">
                {index == 0 && <Label>oz</Label>}
                <Input
                  type="number"
                  name="ounces"
                  style={{ width: "100px" }}
                  min="0"
                  defaultValue={0}
                  value={itm.ounces}
                  onChange={(e) => changeWeght(e, index)}
                />
              </Col>
            </Row>
          ))}
          <Row>
            <Col sm="6"></Col>
            <Col sm="6" className="mt-1">
              <Button onClick={addWeight}>
                <PlusCircle /> Weight
              </Button>
            </Col>
          </Row>
          <Row>
            <Button
              type="submit"
              name="submitButton"
              value="fl"
              className={`pull-right btn btn-lg btn-${btnClass}`}
              style={{ marginTop: "5px" }}
              onClick={(e) => submitFL(e, "FL")}
            >
              {btnText} (FL)
            </Button>
          </Row>
          <Row>
            <Button
              type="submit"
              name="submitButton"
              value="ny"
              className="pull-right btn btn-lg btn-warning"
              style={{ marginTop: "5px" }}
              onClick={(e) => submitFL(e, "NY")}
            >
              {btnText} (NY)
            </Button>
          </Row>
        </Col>
      </Row>
    </Row>
  );
};

export default ShippingPanel;

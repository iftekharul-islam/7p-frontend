import { Fragment, useEffect } from "react";

import { Card, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
// import ViewBatches from "./ViewBatches";
import { useDispatch, useSelector } from "react-redux";
import { getAllData, setActive } from "../store";
import Backorders from "./Backorders";
import BadAddress from "./BadAddress";
import CSRejects from "./CSRejects";
import Incompatible from "./Incompatible";
import OtherHolds from "./OtherHolds";
import PaymentHolds from "./PaymentHolds";
import ReturnedShipments from "./ReturnedShipments";
import ShippingHolds from "./ShippingHolds";
import UpdateLog from "./UpdateLog";

const index = () => {
  const dispatch = useDispatch();
  const { active } = useSelector((state) => state?.customerServices);
  const { total } = useSelector((state) => state?.customerServices);

  const toggle = (tab) => {
    if (active !== tab) {
      dispatch(setActive(tab));
    }
  };

  useEffect(() => {
    dispatch(getAllData({ tab: active }));
  }, [active]);

  const customNavItem = (text, total, tab) => {
    return (
      <NavItem>
        <NavLink
          active={active === tab}
          onClick={() => {
            toggle(tab);
          }}
        >
          {text}
          {total != null ? `(${total})` : null}
        </NavLink>
      </NavItem>
    );
  };

  return (
    <Fragment>
      <Card className="p-1">
        <Nav pills className="mb-2 orange">
          {customNavItem("Bad Addresses", total?.address ?? 0, "address")}
          {customNavItem("CS Rejects", total?.rejects ?? 0, "rejects")}
          {customNavItem("Backorders", total?.backorder ?? 0, "backorder")}
          {customNavItem("Returned Shipments", total?.reship ?? 0, "reship")}
          {customNavItem(
            "Incompatible",
            total?.incompatible ?? 0,
            "incompatible"
          )}
          {customNavItem("Payment Holds", total?.payment ?? 0, "payment")}
          {customNavItem("Shipping Holds", total?.shipping ?? 0, "shipping")}
          {customNavItem("Other Holds", total?.other ?? 0, "other")}
          {customNavItem("Update Log", null, "updates")}
        </Nav>

        <TabContent activeTab={active}>
          <TabPane tabId="address">
            <BadAddress />
          </TabPane>
          <TabPane tabId="backorder">
            <CSRejects />
          </TabPane>
          <TabPane tabId="rejects">
            <Backorders />
          </TabPane>
          <TabPane tabId="reship">
            <ReturnedShipments />
          </TabPane>
          <TabPane tabId="incompatible">
            <Incompatible />
          </TabPane>
          <TabPane tabId="payment">
            <PaymentHolds />
          </TabPane>
          <TabPane tabId="shipping">
            <ShippingHolds />
          </TabPane>
          <TabPane tabId="other">
            <OtherHolds />
          </TabPane>
          <TabPane tabId="updates">
            <UpdateLog />
          </TabPane>
        </TabContent>
      </Card>
    </Fragment>
  );
};
export default index;

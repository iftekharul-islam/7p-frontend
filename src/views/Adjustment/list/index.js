import { Fragment, useState } from "react";

import { TabContent, TabPane, Nav, NavItem, NavLink, Card } from "reactstrap";
import ViewAdjustment from "./ViewAdjustment";
import AdjustInventory from "./AdjustInventory";
import ProductionRejects from "./ProductionRejects";
import { setActive } from "../store";
import { useDispatch, useSelector } from "react-redux";

const index = () => {
  const dispatch = useDispatch()
  const {active} = useSelector(state=> state?.adjustments) 

  const toggle = (tab) => {
    if (active !== tab) {
      dispatch(setActive(tab))
    }
  };

  return (
    <Fragment>
      <Card className="p-1">
        <Nav pills className='mb-2 orange'>
          <NavItem>
            <NavLink
              active={active === "1"}
              onClick={() => {
                toggle("1");
              }}
            >
              View Adjustment
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              active={active === "2"}
              onClick={() => {
                toggle("2");
              }}
            >
              Adjust Inventory
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              active={active === "3"}
              onClick={() => {
                toggle("3");
              }}
            >
              Production Rejects
            </NavLink>
          </NavItem>
        </Nav>

        <TabContent activeTab={active}>
          <TabPane tabId="1">
            <ViewAdjustment />
          </TabPane>
          <TabPane tabId="2">
            <AdjustInventory />
          </TabPane>
          <TabPane tabId="3">
            <ProductionRejects />
          </TabPane>
        </TabContent>
      </Card>
    </Fragment>
  );
};
export default index;

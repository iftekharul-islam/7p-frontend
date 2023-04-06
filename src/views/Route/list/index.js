import { Fragment, useState } from "react";

import { TabContent, TabPane, Nav, NavItem, NavLink, Card } from "reactstrap";
// import ViewBatches from "./ViewBatches";
import { setActive } from "../store";
import { useDispatch, useSelector } from "react-redux";
import ViewBatches from "./ViewBatches";

const index = () => {
  const dispatch = useDispatch()
  const {active} = useSelector(state=> state?.routes) 

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
              Batches
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              active={active === "2"}
              onClick={() => {
                toggle("2");
              }}
            >
              Export/Import
            </NavLink>
          </NavItem>          
        </Nav>

        <TabContent activeTab={active}>
          <TabPane tabId="1">
            <ViewBatches />
          </TabPane>
          <TabPane tabId="2">
            Under Maintenance
          </TabPane>
        </TabContent>
      </Card>
    </Fragment>
  );
};
export default index;

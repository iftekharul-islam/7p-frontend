import { Fragment, useEffect } from "react";

import { Card, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
// import ViewBatches from "./ViewBatches";
import { useDispatch, useSelector } from "react-redux";
import { getAllData, setActive } from "../store";
import ExportedWaitingForGraphics from "./ExportedWaitingForGraphics";
import GraphicsError from "./GraphicsError";
import Manual from "./Manual";
import Summary from "./Summary";
import ToExport from "./ToExport";

const index = () => {
  const dispatch = useDispatch();
  const { data, active, total } = useSelector(
    (state) => state?.createGraphics
  );

  const toggle = (tab) => {
    if (active !== tab) {
      dispatch(setActive(tab));
    }
  };

  useEffect(() => {
    dispatch(getAllData({ tab: active }));
  }, [active]);

  const CustomNavItem = ({text, total, tab}) => {
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
          <CustomNavItem text="Summary" tab="summary" />
          <CustomNavItem text="To Export" total={total?.rejects ?? 0} tab="toexports" />
          <CustomNavItem text="Exported Waiting for Graphics" total={total?.backorder ?? 0} tab="exported_waiting_for_graphics" />
          <CustomNavItem text="Graphics Error" total={total?.reship ?? 0} tab="graphics_error" />
          <CustomNavItem text="Manual" total={total?.incompatible ?? 0} tab="manual" />         
        </Nav>

        <TabContent activeTab={active}>
          <TabPane tabId="summary">
            <Summary data={data} />
          </TabPane>
          <TabPane tabId="toexports">
            <ToExport data={data} />
          </TabPane>
          <TabPane tabId="exported_waiting_for_graphics">
            <ExportedWaitingForGraphics />
          </TabPane>
          <TabPane tabId="graphics_error">
            <GraphicsError />
          </TabPane>
          <TabPane tabId="manual">
            <Manual />
          </TabPane>
        </TabContent>
      </Card>
    </Fragment>
  );
};
export default index;

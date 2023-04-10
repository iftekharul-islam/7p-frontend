import { Fragment } from "react";
import { useSelector } from "react-redux";
import {
  Card,
  CardHeader,
  CardTitle,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";
import FinancialInfo from "./FinancialInfo";
import GeneralInfo from "./GeneralInfo";
import ProductInstruction from "./ProductInstruction";
import ProductSpecification from "./ProductSpecification";
import ProductionCategory from "./ProductionCategory";
import SpecialNote from "./SpecialNote";

const index = () => {
  const { active } = useSelector((state) => state?.productspecifications);

  return (
    <Fragment>
      <Card className="p">
        <CardHeader>
          <CardTitle tag="h4">New Product specifications</CardTitle>
        </CardHeader>
        <Nav pills className="mx-2 orange">
          <NavItem>
            <NavLink active={active === 1}>Production category</NavLink>
          </NavItem>
          <NavItem>
            <NavLink active={active === 2}>General info</NavLink>
          </NavItem>
          <NavItem>
            <NavLink active={active === 3}>Product specification</NavLink>
          </NavItem>
          <NavItem>
            <NavLink active={active === 4}>Product instruction</NavLink>
          </NavItem>
          <NavItem>
            <NavLink active={active === 5}>Special Note</NavLink>
          </NavItem>
          <NavItem>
            <NavLink active={active === 6}>Financial info</NavLink>
          </NavItem>
        </Nav>
        </Card>
        <Card className="p-1">

        <TabContent activeTab={active}>
          <TabPane tabId={1}>
            <ProductionCategory />
          </TabPane>
          <TabPane tabId={2}>
            <GeneralInfo />
          </TabPane>
          <TabPane tabId={3}>
            <ProductSpecification />
          </TabPane>
          <TabPane tabId={4}>
            <ProductInstruction />
          </TabPane>
          <TabPane tabId={5}>
            <SpecialNote />
          </TabPane>
          <TabPane tabId={6}>
            <FinancialInfo />
          </TabPane>
        </TabContent>
      </Card>
    </Fragment>
  );
};
export default index;

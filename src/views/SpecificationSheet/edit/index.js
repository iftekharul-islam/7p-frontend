import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
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
import { getSpecifiction } from "../store";
import FinancialInfo from "./FinancialInfo";
import GeneralInfo from "./GeneralInfo";
import ProductInstruction from "./ProductInstruction";
import ProductSpecification from "./ProductSpecification";

const index = () => {
  const {id} = useParams()
  const dispatch = useDispatch();
  const { active } = useSelector((state) => state?.productspecifications);

  useEffect(() => {
    if (id) {
      dispatch(getSpecifiction(id));
    }
  }, [id]);
  return (
    <Fragment>
      <Card className="p">
        <CardHeader>
          <CardTitle tag="h4">New Product specifications</CardTitle>
        </CardHeader>
        <Nav pills className="mx-2 orange">
          <NavItem>
            <NavLink active={active === 1}>General info</NavLink>
          </NavItem>
          <NavItem>
            <NavLink active={active === 2}>Product specification</NavLink>
          </NavItem>
          <NavItem>
            <NavLink active={active === 3}>Product instruction</NavLink>
          </NavItem>
          <NavItem>
            <NavLink active={active === 4}>Financial info</NavLink>
          </NavItem>
        </Nav>
        </Card>
        <Card className="p-1">

        <TabContent activeTab={active}>
          <TabPane tabId={1}>
            <GeneralInfo />
          </TabPane>
          <TabPane tabId={2}>
            <ProductSpecification />
          </TabPane>
          <TabPane tabId={3}>
            <ProductInstruction />
          </TabPane>
          <TabPane tabId={4}>
            <FinancialInfo />
          </TabPane>
        </TabContent>
      </Card>
    </Fragment>
  );
};
export default index;

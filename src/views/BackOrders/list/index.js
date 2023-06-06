import "@styles/react/apps/app-users.scss";
import "@styles/react/libs/flatpickr/flatpickr.scss";
import "@styles/react/libs/react-select/_react-select.scss";
import "@styles/react/libs/tables/react-dataTable-component.scss";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Input,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import { getAllData, setActive, setSearchParams } from "../store";
import DataList from "./DataList";

const index = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const store = useSelector((state) => state.backOrders);
  const { allData, active } = store;
  const params = store?.searchParams;

  useEffect(() => {
    if (store?.params) dispatch(getAllData());
  }, [store?.params]);

  const onSearch = async () => {
    navigate('/back-orders/show')
  };

  const onChange = (data) => {
    dispatch(setSearchParams(data));
  };

  const toggle = (tab) => {
    if (active !== tab) {
      dispatch(setActive(tab));
    }
  };

  const CustomNavItem = ({ text, total = null, tab }) => {
    return (
      <NavItem>
        <NavLink
          active={active === tab}
          onClick={() => {
            toggle(tab);
          }}
        >
          {text}
          {total != null ? ` (${total}) ` : null}
        </NavLink>
      </NavItem>
    );
  };

  return (
    <Fragment>
      <Card>
        <CardHeader>
          <h4 className="card-title">Back Orders</h4>
        </CardHeader>
        <CardBody>
          <Row className="mb-1">
            <Col sm="3">
              <Input
                placeholder="Scan"
                value={params?.search_for}
                onChange={(e) => onChange({ search_for: e?.target?.value })}
              />
            </Col>
            <Col sm="3">
              <Select
                className="react-select"
                classNamePrefix="select"
                options={store?.search_inOptions}
                value={store?.search_inOptions?.find(
                  (item) => item?.value == params?.search_in
                )}
                onChange={(e) => onChange({ search_in: e?.value })}
              />
            </Col>
            <Col sm="2">
              <Button
                color="primary"
                className="btn-primary"
                onClick={onSearch}
              >
                Search
              </Button>
            </Col>
          </Row>
          <Row>
            <Nav pills className="mb-2 orange">
              <CustomNavItem
                text="Backordered Items"
                total={allData?.batched?.length}
                tab="summary"
              />
              <CustomNavItem
                text="Unbatched Backorders"
                total={allData?.unbatched?.length}
                tab="toexports"
              />
            </Nav>

            <TabContent activeTab={active}>
              <TabPane tabId="summary">
                <DataList
                  data={allData?.batched}
                  stocks={allData?.stock_nos}
                />
              </TabPane>
              <TabPane tabId="toexports">
                <DataList
                  data={allData?.unbatched}
                  stocks={allData?.stock_nos}
                />
              </TabPane>
            </TabContent>
          </Row>
        </CardBody>
      </Card>
    </Fragment>
  );
};
export default index;

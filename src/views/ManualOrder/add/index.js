import "@styles/react/libs/flatpickr/flatpickr.scss";
import "@styles/react/libs/react-select/_react-select.scss";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Form,
  Row,
} from "reactstrap";
import { AddOrder } from "../store";
import Address from "./Address";
import Calculation from "./Calculation";
import Details from "./Details";
import ProductList from "./ProductList";

const index = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.manualOrders);
  const [data, setData] = useState({ items: [] });
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    if (store?.stock) {
      setData({ ...store?.stock, stock_no_unique: null });
    }
  }, [store?.stock]);

  const onChange = (e) => {
    setData({
      ...data,
      [e.target?.name]: e.target?.value,
    });
  };

  const onSubmit = async () => {
    const res = await dispatch(AddOrder(data));
    if (res?.payload?.status) {
      setData({ items: [] });
      setTimeout(() => window.location.reload(), 1500);
    } else {
      setErrors(res?.payload?.data?.errors);
    }
  };

  return (
    <Fragment>
      <Row>
        <Form>
          <Col sm="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">New Manual Order</CardTitle>
              </CardHeader>
              <CardBody>
                {Details(data, onChange, errors)}
                {Address(data, onChange, errors)}
                {ProductList(data, onChange, errors)}
                {Calculation(data, onChange, onSubmit, errors)}
              </CardBody>
            </Card>
          </Col>
        </Form>
      </Row>
    </Fragment>
  );
};
export default index;

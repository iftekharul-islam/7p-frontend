import "@styles/react/libs/flatpickr/flatpickr.scss";
import "@styles/react/libs/react-select/_react-select.scss";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Form,
  Row,
} from "reactstrap";
import { EditOrder, getOrder } from "../store";
import Address from "./Address";
import Calculation from "./Calculation";
import Details from "./Details";
import ProductList from "./ProductList";

const index = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const store = useSelector((state) => state.orders);
  const [data, setData] = useState({ items: [] });
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    dispatch(getOrder(id))
  }, [id])
  
  useEffect(() => {
    if (store?.order) {
      setData({...data, ...store?.order});
    }
  }, [store?.order])

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
    const res = await dispatch(EditOrder(data));
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
                <CardTitle tag="h4">Edit Order</CardTitle>
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

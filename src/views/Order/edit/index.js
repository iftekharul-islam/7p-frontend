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
import { BatchedOrder, EditOrder, getOrder } from "../store";
import Address from "./Address";
import Calculation from "./Calculation";
import Details from "./Details";
import MailModal from "./MailModal";
import ProductList from "./ProductList";
import TrackingModal from "./TrackingModal";

const index = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const store = useSelector((state) => state.orders);
  const [showMail, setShowMail] = useState(false)
  const [showTracking, setShowTracking] = useState(false)
  const [itemTracking, setItemTracking] = useState(null)
  const [data, setData] = useState({ items: [] });
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    dispatch(getOrder(id))
  }, [id])
  
  useEffect(() => {
    if (store?.order) {
      setData(store?.order);
    }
  }, [store?.order])

  const onChange = (e) => {
    setData({
      ...data,
      [e.target?.name]: e.target?.value,
    });
  };

  const onSubmit = async () => {
    const res = await dispatch(EditOrder({data, id}));
    if (res?.payload?.status) {
      dispatch(getOrder(id))
    } else {
      setErrors(res?.payload?.data?.errors);
    }
  };

  const batched = async(orderId) => {
    const res = await dispatch(BatchedOrder(id));
    if (res?.payload?.status) {
      dispatch(getOrder(id))
    }
  }


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
                {Details(data, onChange, errors, batched)}
                {Address(data, onChange, errors, setShowMail)}
                {ProductList(data, onChange, errors, setShowTracking, setItemTracking)}
                {Calculation(data, onChange, onSubmit, errors)}
                {TrackingModal(showTracking, setShowTracking, itemTracking, data?.id, data?.short_order)}
                {MailModal(showMail, setShowMail, data)}
              </CardBody>
            </Card>
          </Col>
        </Form>
      </Row>
    </Fragment>
  );
};
export default index;

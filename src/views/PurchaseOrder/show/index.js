import { Fragment, useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Form,
  Row,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { getOrder } from "../store";
import { useParams } from "react-router-dom";
import ProductTable from "./ProductTable";

const index = () => {
  const { id } = useParams();
  const [data, setData] = useState({ grand_total: 0 });
  const [sku, setSku] = useState([{}]);
  const dispatch = useDispatch();
  const store = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(getOrder(id));
  }, []);

  useEffect(() => {
    setData({ ...data, ...store?.order });
    const sku = store?.order?.products?.map((item) => {
      return { ...item, unit_price: item?.price };
    });
    setSku(sku);
  }, [store?.order]);

  useEffect(() => {
    let grand_total = 0;
    sku?.forEach((element) => {
      grand_total =
        parseFloat(grand_total) + parseFloat(element?.sub_total ?? 0);
    });
    setData({ ...data, grand_total: grand_total.toFixed(2) });
  }, [sku]);

  return (
    <Fragment>
      <Row>
        <Form>
          <Col sm="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">
                  Purchase Product - {data?.po_number}
                </CardTitle>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col sm="5">
                    <Row>
                      <Col sm="4">
                        <div>Vendor Name</div>
                        <div>Vendor Email</div>
                        <div>Phone Number</div>
                        <div>Zip Code</div>
                      </Col>
                      <Col sm="1">
                        <div>:</div>
                        <div>:</div>
                        <div>:</div>
                        <div>:</div>
                      </Col>
                      <Col sm="7">
                        <div>{data?.vendor?.vendor_name ?? "--"}</div>
                        <div>{data?.vendor?.email ?? "--"}</div>
                        <div>{data?.vendor?.phone_number ?? "--"}</div>
                        <div>{data?.vendor?.zip_code ?? "--"}</div>
                      </Col>
                    </Row>
                  </Col>
                  <Col sm="2">
                    <div>|</div>
                    <div>|</div>
                    <div>|</div>
                    <div>|</div>
                  </Col>
                  <Col sm="5">
                    <Row>
                      <Col sm="4">
                        <div>Date</div>
                        <div>Payment Method</div>
                        <div>Tracking</div>
                        <div>Notes</div>
                      </Col>
                      <Col sm="1">
                        <div>:</div>
                        <div>:</div>
                        <div>:</div>
                        <div>:</div>
                      </Col>
                      <Col sm="7">
                        <div>{data?.po_date ?? "--"}</div>
                        <div>{data?.payment_method ?? "--"}</div>
                        <div>{data?.tracking ?? "--"}</div>
                        <div>{data?.notes ?? "--"}</div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <ProductTable data={sku} total={data?.grand_total}/>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Form>
      </Row>
    </Fragment>
  );
};
export default index;

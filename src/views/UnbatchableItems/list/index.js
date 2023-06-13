import "@styles/react/libs/flatpickr/flatpickr.scss";
import "@styles/react/libs/react-select/_react-select.scss";
import "@styles/react/libs/tables/react-dataTable-component.scss";
import moment from "moment";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Row,
} from "reactstrap";
import { getAllData } from "../store";

const index = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.unbatchableItems);

  useEffect(() => {
    dispatch(getAllData());
  }, []);

  return (
    <div className="app-user-list">
      <Fragment>
        <Card>
          <CardHeader>
            <CardTitle tag="h4">Unbatchable Items</CardTitle>
          </CardHeader>
          <CardBody>
            {store?.data?.length > 0 ? (
              <div>
                <h6>{store?.data?.length} Items found</h6>
                {store?.data?.map((item, index) => {
                  console.log(
                    "🚀 ~ file: index.js:31 ~ {store?.data?.map ~ item:",
                    item
                  );
                  return (
                    <Row key={index}>
                      <Col sm="2" className="border">
                        <div>{item?.hold}</div>
                        {item?.parameter_option && (
                          <span>
                            <div>Child SKU doen not exist in 5P</div>
                            <Button color="primary">Add Child SKU</Button>
                          </span>
                        )}
                        {item?.route && <div>Needs Route</div>}
                        {item?.stock_no && <div>Needs Stock Number</div>}
                        {item?.qty_av && <div>Insufficient Inventory</div>}
                      </Col>
                      <Col sm="2" className="border">
                        <div>
                          <strong>
                            <u>
                              {item?.item?.order?.customer?.ship_full_name
                                ? item?.item?.order?.customer?.ship_full_name
                                : item?.item?.order?.customer?.bill_full_name}
                            </u>
                          </strong>
                        </div>
                        <div>Item# {item?.item?.item_table_id}</div>
                        <div>
                          Order#
                          <Link
                            to={`/customer-order-edit/${item?.item?.order_5p}`}
                          >
                            {item?.item?.order?.short_order}
                          </Link>
                        </div>
                        {item?.item?.store_id != "52053152" && (
                          <div>
                            {item?.item?.store_id
                              ? item?.item?.store?.store_name
                              : `STORE: ${item?.item?.store_id} NOT FOUND`}
                          </div>
                        )}
                        <div>
                          {moment(item?.item?.order?.order_date).format("MM/DD/YYYY")}
                        </div>
                      </Col>
                      <Col sm="1" className="border">
                        <img src={item?.item?.item_thumb} width={70} height={70} />
                      </Col>
                      <Col sm="2" className="border">
                        <div>{item?.item?.item_description}</div>
                        <div>SKU: {item?.item?.child_sku}</div>
                        <div>QTY: {item?.item?.item_quantity}</div>
                      </Col>
                      <Col sm="3" className="border">
                        {item?.item_option}
                      </Col>
                      <Col sm="2" className="border">
                        <div>
                          Order Status:
                          {
                            store?.statusOptions?.find(
                              (status) =>
                                status?.value == item?.item?.order?.order_status
                            )?.label
                          }
                        </div>
                        <div>Item Status: {item?.item?.item_status}</div>
                        {item?.item?.order?.coupon_id && (
                          <div>{item?.item?.order?.coupon_id}</div>
                        )}
                        {item?.item?.order?.promotion_id && (
                          <div>{item?.item?.order?.promotion_id}</div>
                        )}
                      </Col>
                    </Row>
                  );
                })}
              </div>
            ) : (
              <h6>No Items found</h6>
            )}
          </CardBody>
        </Card>
      </Fragment>
    </div>
  );
};
export default index;

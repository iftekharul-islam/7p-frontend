import "@styles/react/libs/flatpickr/flatpickr.scss";
import "@styles/react/libs/react-select/_react-select.scss";
import "@styles/react/libs/tables/react-dataTable-component.scss";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardBody, CardHeader, CardTitle, Row } from "reactstrap";
import { getAllData } from "../store";

const index = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.UnbatchableItems);

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
                {store?.data?.map((item, index) => (
                  <Row key={index}>
                    <Col sm="2">
                      <div>{item?.hold}</div>
                      {!item?.route && <div>Needs Route</div>}
                      {!item?.stock_no && <div>Needs Stock Number</div>}
                      {!item?.qty_av && <div>Insufficient Inventory</div>}
                    </Col>
                    <Col sm="2">
                      <div>
                        <strong>
                          <u>
                            {item?.order?.customer?.ship_full_name
                              ? item?.order?.customer?.ship_full_name
                              : item?.order?.customer?.bill_full_name}
                          </u>
                        </strong>
                      </div>
                      <div>Item# {item?.item_table_id}</div>
                      <div>Order# {item?.order?.order_no}</div>
                      {item?.store_id != "52053152" && (
                        <div>
                          {item?.store_id
                            ? item?.store?.store_name
                            : `STORE: ${item?.store_id} NOT FOUND`}
                        </div>
                      )}
                      <div>
                        {moment(item?.order?.order_date).format("MM/DD/YYYY")}
                      </div>
                    </Col>
                    <Col sm="2">
                      <img src={item?.item_thumb} width={70} height={70} />
                    </Col>
                    <Col sm="3">
                      <div>{item?.item_description}</div>
                      <div>SKU: {item?.child_sku}</div>
                      <div>QTY: {item?.item_quantity}</div>
                    </Col>
                    <Col sm="3">
                      <div>
                        Order Status:{" "}
                        {
                          store?.statusOptions?.find(
                            (status) =>
                              status?.value == item?.order?.order_status
                          )?.label
                        }
                      </div>
                      <div>Item Status: {item?.item_status}</div>
                      {item?.order?.coupon_id && (
                        <div>{item?.order?.coupon_id}</div>
                      )}
                      {item?.order?.promotion_id && (
                        <div>{item?.order?.promotion_id}</div>
                      )}
                    </Col>
                  </Row>
                ))}
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

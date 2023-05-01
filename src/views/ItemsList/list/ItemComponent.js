import moment from "moment";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";

const ItemComponent = (item, store) => {
  return (
    <Row className="p-1 border">
      <Col sm="2">
        <div>
          <u>
            <strong>
              {item?.order && item?.order?.customer
                ? !empty(item?.order?.customer?.ship_full_name)
                  ? item?.order?.customer?.ship_full_name
                  : item?.order?.customer?.bill_full_name
                : "CUSTOMER NOT FOUND"}
            </strong>
          </u>
        </div>
        <div>Item#{item?.id}</div>

        <Link to={`/customer-order-edit/${item?.order_5p}`}>
          <div>
            {item?.order ? item?.order?.short_order : "ORDER NOT FOUND"}
          </div>
        </Link>

        <div>{moment(item?.order?.order_date).format("YYYY-MM-DD")}</div>
      </Col>
      <Col sm="2">
        <img src={item?.item_thumb} height={120} />
      </Col>
      <Col sm="2">
        {item?.item_description}
        <br />
        SKU: {item?.child_sku}
        <br />
        QTY: {item?.item_quantity}
      </Col>
      <Col sm="2">{item?.item_option}</Col>
      <Col sm="2">
        <div>
          Item Status: {item?.item_status}
          {item?.order != null ?? (
            <div>
              <div>
                Order Status:
                {
                  store?.statusOptions?.map(
                    (item) => item?.value == item?.order?.order_status
                  )?.label
                }
              </div>
              <div>{item?.order?.coupon_id ?? ""}</div>
              <div>{item?.order?.promotion_id ?? ""}</div>
            </div>
          )}
        </div>
      </Col>
      <Col sm="2">
        <div>
          {item?.item_status == "shipped" ? (
            <div>
              {item?.shipInfo && (
                <div>
                  {item?.shipInfo?.shipping_id} <br />{" "}
                  {item?.shipInfo?.transaction_datetime}
                </div>
              )}
              {item?.tracking_number && <div>{item?.tracking_number}</div>}
              {item?.order && item?.order?.customer && (
                <div>Ship State: {item?.order?.customer?.ship_state} </div>
              )}
            </div>
          ) : item?.item_status == "wap" ? (
            <div>
              {item?.wap_item ? (
                <div>
                  WAP Bin {item?.wap_item?.bin?.name} <br /> Added:
                  {item?.wap_item?.created_at}
                </div>
              ) : (
                "WAP - Bin not found"
              )}
            </div>
          ) : item?.batch_number != "0" ? (
            <div>
              {item?.batch && (
                <div>
                  Status: {item?.batch?.status ?? "N/A"} <br /> Last Scan:{" "}
                  {item?.batch?.change_date ?? "N/A"}
                </div>
              )}
              {item?.batch_number && <div>Batch # {item?.batch_number}</div>}
              {item?.batch?.station && (
                <div>
                  Station: {item?.batch?.station?.station_name ?? "N/A"}{" "}
                  {item?.batch?.station?.station_description ?? "N/A"}
                </div>
              )}
              {
                <div>
                  ***Last Scan: <br />
                  {item?.batch?.change_date ?? "N/A"}{" "}
                </div>
              }
            </div>
          ) : (
            "Unbatched"
          )}
        </div>
      </Col>
    </Row>
  );
};

export default ItemComponent;

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, CardBody, Col, Input, Row } from "reactstrap";

const Table = () => {
  const { showData } = useSelector((state) => state.batchList);
  return (
    <CardBody>
      <Row>
        <Col md="1" className="p-1 border"></Col>
        <Col md="3" className="p-1 border">
          <b>Order</b>
        </Col>
        <Col md="2" className="p-1 border"></Col>
        <Col md="3" className="p-1 border">
          <b>Product</b>
        </Col>
        <Col md="3" className="p-1 border">
          <b>Options</b>
        </Col>
      </Row>
      {showData?.batch?.items?.map((item) => {
        return (
            <span>
          <Row className="p-1 border">
            <Col md="1">
              <Button color="primary">Reject</Button>
            </Col>
            <Col md="3">
              Order:{" "}
              <Link to={`/customer-order-edit/${item?.order?.id}`}>
                {item?.order?.short_order}
              </Link>
              <br />
              Date : {item?.order?.order_date}
              <br />
              Store: {item?.order?.store?.store_name}
              <br />
              Re Download Graphic: {item?.id}
              <br />
              {showData?.batch?.station?.type == "Q" && (
                <Button color="primary">Upload {item?.id} Graphic</Button>
              )}
            </Col>
            <Col md="2"></Col>
            <Col md="3">
              {item?.child_sku}
              <br />
              {item?.item_description}
              <br />
              Item# {item?.id}
              <br />
              {item?.item_quantity === 1 ? (
                <span>QTY: {item?.item_quantity}</span>
              ) : (
                <strong>QTY: {item?.item_quantity}</strong>
              )}
              <br />
              {item.spec_sheet && (
                <div>
                  <a
                    href={`/products_specifications/${item.spec_sheet.id}`}
                    target="_blank"
                  >
                    Production Instruction
                  </a>
                  <br />
                </div>
              )}
              {item.supervisor_message && (
                <div>
                  {item.supervisor_message}
                  <br />
                </div>
              )}
              {item.tracking_number && (
                <div style={{ color: "red" }}>TRK# {item.tracking_number}</div>
              )}
            </Col>
            <Col md="3">
              <Input
                type="textarea"
                Rows="5"
                value={item?.item_option}
                disabled={true}
              />
            </Col>
          </Row>
          {item?.rejections?.length && item?.rejections?.map((reject) => {
              console.log("A");
              return (
                <Row className="p-1 border">
                  <Col md={2}></Col>
                  <Col md={8}>
                    Item {item.id} Rejected {reject.created_at} by{" "}
                    {reject.user.username}
                    {reject.rejection_reason_info &&
                      ` - ${reject.rejection_reason_info.rejection_message}`}
                    - {reject.rejection_message}
                  </Col>
                </Row>
              );
            })}
          </span>
        );
      })}
    </CardBody>
  );
};

export default Table;

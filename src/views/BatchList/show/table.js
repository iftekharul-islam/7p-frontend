import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, CardBody, Col, Input, Row } from "reactstrap";

const Table = ({ handleClose, setRejectData, handleRejectClose }) => {
  const dispatch = useDispatch();
  const { showData } = useSelector((state) => state.batchList);

  const handleUpload = () => {
    handleClose();
  };

  const handleReject = (data) => {
    setRejectData(data);
    handleRejectClose();
  };

  const formatString = (json, separator = "\n", bold = 0) => {
    let pre = "";
    let post = "";

    if (bold === 1) {
      pre = '<strong style="font-size: 110%;">';
      post = "</strong>";
    }

    let formattedString = "";
    const jsonArray = JSON.parse(json);

    if (jsonArray) {
      for (const key in jsonArray) {
        let value = jsonArray[key];

        if (key !== "Confirmation_of_Order_Details" && key !== "couponcode") {
          if (value.includes("$") && bold === 1) {
            value = `<span style="font-size: 120%;">${value}</span>`;
          }
          formattedString += `${key.replaceAll(
            "_",
            " "
          )} = ${pre}${value}${post}${separator}`;
        }
        console.log(formattedString);
      }
    }

    return formattedString;
  };
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
                {item?.item_status === "production" ||
                item?.item_status === "wap" ||
                item?.item_status === "back order" ? (
                  <Button
                    color="primary"
                    onClick={() =>
                      handleReject({
                        id: showData?.batch_number,
                        item_id: item?.id,
                        origin: "BD",
                      })
                    }
                  >
                    Reject {item?.item_status == "wap" ? " from Wap" : ""}
                  </Button>
                ) : (
                  <span>
                    {item.item_status.charAt(0).toUpperCase() +
                      item.item_status.slice(1)}
                  </span>
                )}
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
                  <Button color="primary" onClick={handleUpload}>
                    Upload {item?.id} Graphic
                  </Button>
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
                  <div style={{ color: "red" }}>
                    TRK# {item.tracking_number}
                  </div>
                )}
              </Col>
              <Col md="3">
                <Input
                  type="textarea"
                  Rows="5"
                  value={formatString(item?.item_option)}
                  disabled={true}
                />
              </Col>
            </Row>
            {item?.rejections?.length &&
              item?.rejections?.map((reject) => {
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

import { Fragment } from "react";
import { Button, Col, Row } from "reactstrap";

const ShowStockno = ({ data }) => {
  return (
    <Fragment className="mt-1">
      {data?.length > 0 ? (
        <div>
          <Row>
            <Col md="5" className="border py-1">
              <b>Stock Number</b>
            </Col>
            <Col md="1" className="border py-1">
              <b>Quantity</b>
            </Col>
            <Col md="2" className="border py-1">
              <b>Current Status </b>
            </Col>
            <Col md="2" className="border py-1">
              <b>Location</b>
            </Col>
            <Col md="2" className="border py-1">
              <b>Action</b>
            </Col>
          </Row>
          {data?.map((item, index) => {
            return (
              <Row key={index}>
                <Col md="5" className="border py-1">
                  <span className="d-flex">
                    <span >
                      {item?.warehouse && (
                        <img
                          src={item?.warehouse}
                          alt="item"
                          className="img-fluid"
                          width="50"
                          height="50"
                        />
                      )}
                    </span>
                    <span className="px-1">
                      {item?.stock_no_unique}
                      <br />
                      {item?.stock_name_discription}
                    </span>
                  </span>
                </Col>
                <Col md="1" className="border py-1">
                  {item?.qty}
                </Col>
                <Col md="2" className="border py-1">
                  {item?.item_status}
                </Col>
                <Col md="2" className="border py-1">
                  {item?.station_id != null
                    ? item?.station_description
                    : "Unbatched"}
                </Col>
                <Col md="2" className="border py-1">
                  {item?.Buttonitem_status == "production" ? (
                    <Button color="primary" size="sm">
                      Back Order Items
                    </Button>
                  ) : item?.Buttonitem_status == "back order" ? (
                    <Button color="primary" size="sm">
                      Mark Arrived
                    </Button>
                  ) : (
                    "UNRECOGNIZED STATUS"
                  )}
                </Col>
              </Row>
            );
          })}
        </div>
      ) : (
        <div className="alert alert-danger text-center py-1 ">
          No items Found
        </div>
      )}
    </Fragment>
  );
};

export default ShowStockno;

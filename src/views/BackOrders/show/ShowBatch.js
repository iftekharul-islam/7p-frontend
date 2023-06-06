import { Fragment } from "react";
import { Button, Col, Input } from "reactstrap";

const ShowBatch = ({ data }) => {
  return (
    <Fragment>
      {data?.length > 0 ? (
        <div>
          {data?.map((batch, index) => {
            return (
              <div>
                <h3>{batch?.batch_number}</h3>
                <Row>
                  <Col md="1"></Col>
                  <Col md="2" className="border py-1">
                    <b>
                      Batch Status:
                      <br />
                      Current Station:
                      <br />
                      Graphic:
                    </b>
                  </Col>
                  <Col md="4" className="border py-1">
                    {batch?.status}
                    <br />
                    {batch?.station?.station_name +
                      "=>" +
                      batch?.station?.station_description}
                    <br />
                    {batch?.graphic_found}
                  </Col>
                </Row>
                {batch?.status != "empty" && batch?.status != "complete" ? (
                  <Row>
                    {batch?.status == "back order" && (
                      <div>
                        <Col md="2">
                          <Button
                            color="primary"
                            className="btn-primary"
                            onClick={() => {
                              // dispatch(setBatch(batch));
                            }}
                          >
                            Release Back Order
                          </Button>
                        </Col>
                        {batch?.section_id == 6 &&
                          batch?.graphic_found == "Found" &&
                          batch?.summary_date == null && (
                            <Col md="2">
                              <Button
                                color="primary"
                                className="btn-primary"
                                onClick={() => {
                                  // dispatch(setBatch(batch));
                                }}
                              >
                                Release Back Order
                              </Button>
                            </Col>
                          )}
                      </div>
                    )}
                  </Row>
                ) : (
                  <div>
                    <Button
                      color="primary"
                      className="btn-primary"
                      onClick={() => {
                        // dispatch(setBatch(batch));
                      }}
                    >
                      Back Order Selected Items
                    </Button>
                  </div>
                )}
                <Row>
                  <Col md="2">
                    {batch?.status != "back order" ? (
                      <div>
                        <Input
                          type="checkbox"
                          onChange={() => {
                            // dispatch(setBatch(batch));
                          }}
                        />
                        Select all
                      </div>
                    ) : null}
                  </Col>
                  <Col md="2" className="border py-1">
                    Item
                  </Col>
                  <Col md="2" className="border py-1">
                    Quantity
                  </Col>
                  <Col md="2" className="border py-1">
                    Image
                  </Col>
                  <Col md="2" className="border py-1">
                    Product
                  </Col>
                </Row>
                {batch?.items?.map((item, index) => {
                  return (
                    <Row key={index}>
                      <Col md="1">
                        {batch?.item_status != "back production" && (
                          <Input
                            type="checkbox"
                            onChange={() => {
                              // dispatch(setBatch(batch));
                            }}
                          />
                        )}
                      </Col>
                      <Col md="1" className="border py-1">
                        {item?.order
                          ? item?.order?.short_order
                          : item?.order_id}
                        5p Order: {item?.order_5p}
                      </Col>
                      <Col md="2" className="border py-1">
                        {item?.id}
                        Status: {item?.item_status}
                      </Col>
                      <Col md="2" className="border py-1">
                        {item?.quantity}
                      </Col>
                      <Col md="2" className="border py-1">
                        <img src={item?.item_thumb} height={50} alt="image" />
                      </Col>
                      <Col md="2" className="border py-1">
                        {item?.item_description}
                        <br />
                        {item?.child_sku}
                      </Col>
                    </Row>
                  );
                })}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="alert alert-danger text-center py-1 ">
          No Batch Found
        </div>
      )}
    </Fragment>
  );
};

export default ShowBatch;

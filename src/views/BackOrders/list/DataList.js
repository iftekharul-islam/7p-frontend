import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { Button, Col, Row } from "reactstrap";
import { setParams } from "../store";

const DataList = ({ data, stocks }) => {
  const dispatch = useDispatch();
  return (
    <Fragment>
      {data?.length > 0 ? (
        <div className="mx-1">
          <Row>
            <Col md="7" className="border py-1"></Col>
            <Col md="5" className="border py-1 d-flex justify-content-center">
              Inventory Quantity
            </Col>
          </Row>
          <Row>
            <Col md="1" className="border py-1">
              <b>Stock#</b>
            </Col>
            <Col md="2" className="border py-1">
              <b>Batches</b>
            </Col>
            <Col md="1" className="border py-1">
              <b>Image</b>
            </Col>
            <Col md="3" className="border py-1">
              <b>Description</b>
            </Col>
            <Col md="1" className="border py-1">
              <b>On Hand</b>
            </Col>
            <Col md="1" className="border py-1">
              <b>Allocated</b>
            </Col>
            <Col md="1" className="border py-1">
              <b>Expected</b>
            </Col>
            <Col md="1" className="border py-1">
              <b>Available</b>
            </Col>
            <Col md="1" className="border py-1">
              <b>Back Order</b>
            </Col>
          </Row>
          {stocks?.map((stock, index) => {
            if (stock != "ToBeAssigned" && stock != null) {
              const first_item = data?.find(
                (item) => item?.stock_no_unique == stock
              );
              const stock_purchase = data?.filter(
                (item) => item?.stock_no == stock
              );

              if (first_item) {
                return (
                  <Row key={index}>
                    <Col md="1" className="border py-1">
                      {first_item?.stock_no_unique}
                    </Col>
                    <Col md="2" className="border py-1">
                      Demo
                    </Col>
                    <Col md="1" className="border py-1">
                      <img
                        src={first_item?.warehouse}
                        alt="warehouse"
                        height="50"
                      />
                    </Col>
                    <Col md="3" className="border py-1">
                      {first_item?.stock_name_discription}
                    </Col>
                    <Col md="1" className="border py-1">
                      {first_item?.qty_on_hand}
                    </Col>
                    <Col md="1" className="border py-1">
                      {first_item?.qty_alloc}
                    </Col>
                    <Col md="1" className="border py-1">
                      {first_item?.qty_exp}
                      {stock_purchase?.map((purchase, index) => {
                        return (
                          <div key={index}>
                            ETA: {purchase?.eta ? purchase?.eta : "N/A"}
                          </div>
                        );
                      })}
                    </Col>
                    <Col md="1" className="border py-1">
                      {first_item?.qty_av}
                    </Col>
                    <Col md="1" className="border py-1">
                      {data.reduce((accumulator, currentObject) => {
                        if (currentObject.stock_no_unique == stock) {
                          return accumulator + currentObject.item_quantity;
                        }
                        return accumulator;
                      }, 0)}
                      {first_item?.batch_number != 0 && (
                        <Button
                          color="primary"
                          size="sm"
                          onClick={dispatch(setParams({ stock_no: stock }))}
                        >
                          Arrived
                        </Button>
                      )}
                    </Col>
                  </Row>
                );
              }
            } else {
              const items = data
                ?.filter((item) => item.stock_no_unique === stock)
                ?.reduce((groupedItems, currentItem) => {
                  const itemCode = currentItem.item_code;
                  if (!groupedItems[itemCode]) {
                    groupedItems[itemCode] = [];
                  }
                  groupedItems[itemCode].push(currentItem);
                  return groupedItems;
                }, {});

              return items.map((item, index) => {
                return (
                  <Row className="lines" key={index}>
                    <Col>{stock}</Col>
                    <Col md="2" xs="6" lg="2">
                      {
                        data
                          .filter(
                            (item) =>
                              item?.stock_no_unique === stock &&
                              item?.item_code === item[0]?.item_code
                          )
                          .map((item) => item?.batch_number)
                          .filter((batch) => batch !== "0")
                          .filter(
                            (batch, index, self) =>
                              self.indexOf(batch) === index
                          ).length
                      }
                    </Col>
                    <Col md="1" xs="6" lg="1" height="40">
                      <img
                        src={item[0]?.item_thumb}
                        alt="item_thumbnail"
                        height="40"
                      />
                    </Col>
                    <Col md="4" xs="12" lg="4" className="pl-3">
                      {`${itemCode}\n${item[0]?.item_description}`}
                    </Col>
                    <Col md="2" xs="6" lg="1" className="text-right">
                      {item?.reduce((sum, item) => sum + item.item_quantity, 0)}
                      {item[0]?.batch_number != "0" && (
                        <Button
                          color="primary"
                          size="sm"
                          onClick={dispatch(setParams({ item_code: stock }))}
                        >
                          Arrived
                        </Button>
                      )}
                    </Col>
                  </Row>
                );
              });
            }
          })}
        </div>
      ) : (
        <div className="d-flex justify-content-center">No Back Orders</div>
      )}
    </Fragment>
  );
};
export default DataList;

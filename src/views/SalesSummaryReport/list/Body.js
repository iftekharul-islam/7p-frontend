import Prism from "prismjs";
import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "react-feather";
import { useSelector } from "react-redux";
import { Col, Collapse, Row } from "reactstrap";

const Body = (data) => {
  const store = useSelector((state) => state.salesSummaryReports);
  const [collapse, setCollapse] = useState(null);

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const toggle = (section) => {
    if (collapse === section) setCollapse(null);
    else setCollapse(section);
  };

  return (
    <>
      {data?.sales?.length > 0 ? (
        <>
          <Row>
            <Col sm="2" className="border d-flex justify-content-center">
              Store
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              Total
            </Col>
            <Col sm="1" className="border d-flex justify-content-center"></Col>
            <Col sm="1" className="border d-flex justify-content-center">
              Orders
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              Avg Order
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              Shipping
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              Total - Shipping
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              Items
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              Shipped
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              % Shipped
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              Avg Days to Ship
            </Col>
          </Row>
          {data?.sales?.map((sale, index) => {
            return (
              <>
                <Row key={index}>
                  <Col sm="2" className="border">
                    {sale == collapse ? (
                      <ChevronUp
                        size={24}
                        onClick={(e) => {
                          e.preventDefault();
                          toggle(sale);
                        }}
                      />
                    ) : (
                      <ChevronDown
                        size={24}
                        onClick={(e) => {
                          e.preventDefault();
                          toggle(sale);
                        }}
                      />
                    )}
                    {store?.storeOptions?.find(
                      (itm) => itm?.value == sale?.store_id
                    )?.label ?? "Store not found"}
                  </Col>
                  <Col sm="1" className="border d-flex justify-content-center">
                    ${parseFloat(sale?.order_total).toFixed(2)}
                  </Col>
                  <Col sm="1" className="border d-flex justify-content-center">
                    {data?.total_amount > 0
                      ? parseFloat(
                          (parseInt(sale?.order_total) /
                            parseInt(data?.total_amount)) *
                            100
                        ).toFixed(2)
                      : "-"}
                    %
                  </Col>
                  <Col sm="1" className="border d-flex justify-content-center">
                    {parseInt(sale?.order_count)}
                  </Col>
                  <Col sm="1" className="border d-flex justify-content-center">
                    $
                    {data?.order_count > 0
                      ? parseFloat(
                          parseInt(sale?.order_total) /
                            parseInt(sale?.order_count)
                        ).toFixed(2)
                      : "-"}
                  </Col>
                  <Col sm="1" className="border d-flex justify-content-center">
                    ${parseFloat(sale?.shipping_total).toFixed(2)}
                  </Col>
                  <Col sm="1" className="border d-flex justify-content-center">
                    $
                    {parseFloat(
                      parseFloat(sale?.order_total) -
                        parseFloat(sale?.shipping_total)
                    ).toFixed(2)}
                  </Col>

                  <Col sm="1" className="border d-flex justify-content-center">
                    {sale?.item?.reduce(
                      (partialSum, item) =>
                        partialSum + parseInt(item?.item_qty),
                      0
                    )}
                  </Col>
                  <Col sm="1" className="border d-flex justify-content-center">
                    {sale?.item?.reduce(
                      (partialSum, item) =>
                        partialSum + parseInt(item?.shipped),
                      0
                    )}
                  </Col>
                  <Col sm="1" className="border d-flex justify-content-center">
                    {parseFloat(
                      (parseInt(
                        sale?.item?.reduce(
                          (partialSum, item) =>
                            partialSum + parseInt(item?.shipped),
                          0
                        )
                      ) /
                        parseInt(
                          sale?.item?.reduce(
                            (partialSum, item) =>
                              partialSum + parseInt(item?.item_qty),
                            0
                          )
                        )) *
                        100
                    ).toFixed(2)}
                    %
                  </Col>
                  <Col sm="1" className="border d-flex justify-content-center">
                    {parseFloat(
                      parseInt(
                        sale?.item?.reduce(
                          (partialSum, item) =>
                            partialSum + parseInt(item?.ship_days),
                          0
                        )
                      ) /
                        parseInt(
                          sale?.item?.reduce(
                            (partialSum, item) =>
                              partialSum + parseInt(item?.shipped),
                            0
                          )
                        )
                    ).toFixed(2)}
                  </Col>
                  <Collapse isOpen={sale === collapse}>
                    {sale?.item?.map((list, index) => {
                      return (
                        <Row style={{ backgroundColor: "#F5F5F5" }}>
                          <Col
                            sm="6"
                            className="border d-flex justify-content-center"
                          >
                            {list?.header}
                          </Col>
                          <Col
                            sm="2"
                            className="border d-flex justify-content-center"
                          >
                            (
                            {parseFloat(
                              (parseInt(list?.item_qty) /
                                parseInt(
                                  sale?.item?.reduce(
                                    (partialSum, item) =>
                                      partialSum + parseInt(item?.item_qty),
                                    0
                                  )
                                )) *
                                100
                            ).toFixed(2)}
                            %)
                          </Col>
                          <Col
                            sm="1"
                            className="border d-flex justify-content-center"
                          >
                            {list?.item_qty}
                          </Col>
                          <Col
                            sm="1"
                            className="border d-flex justify-content-center"
                          >
                            {list?.shipped}
                          </Col>
                          <Col
                            sm="1"
                            className="border d-flex justify-content-center"
                          >
                            {parseFloat(
                              (parseInt(list?.shipped) /
                                parseInt(list?.item_qty)) *
                                100
                            ).toFixed(2)}
                            %
                          </Col>
                          <Col
                            sm="1"
                            className="border d-flex justify-content-center"
                          >
                            {parseFloat(
                              parseInt(list?.ship_days) /
                                parseInt(list?.shipped)
                            ).toFixed(2) ?? "-"}
                          </Col>
                        </Row>
                      );
                    })}
                  </Collapse>
                </Row>
              </>
            );
          })}

          <Row className="mb-1">
            <Col sm="2" className="border d-flex justify-content-center">
              Total:
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              $
              {parseFloat(
                data?.sales?.reduce(
                  (partialSum, item) =>
                    partialSum + parseFloat(item?.order_total),
                  0
                )
              ).toFixed(2)}
            </Col>
            <Col sm="1" className="border d-flex justify-content-center"></Col>
            <Col sm="1" className="border d-flex justify-content-center">
              {data?.sales?.reduce(
                (partialSum, item) => partialSum + parseInt(item?.order_count),
                0
              )}
            </Col>
            <Col sm="1" className="border d-flex justify-content-center"></Col>
            <Col sm="1" className="border d-flex justify-content-center">
              $
              {parseFloat(
                data?.sales?.reduce(
                  (partialSum, item) =>
                    partialSum + parseFloat(item?.shipping_total),
                  0
                )
              ).toFixed(2)}
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              $
              {parseFloat(
                data?.sales?.reduce(
                  (partialSum, item) =>
                    partialSum +
                    parseFloat(item?.order_total) -
                    parseFloat(item?.shipping_total),
                  0
                )
              ).toFixed(2)}
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              {data.sales.reduce((accumulator, sale) => {
                sale.item.forEach((item) => {
                  if (item.shipped) {
                    accumulator += parseInt(item.item_qty);
                  }
                });
                return accumulator;
              }, 0)}
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              {data.sales.reduce((accumulator, sale) => {
                sale.item.forEach((item) => {
                  if (item.shipped) {
                    accumulator += parseInt(item.shipped);
                  }
                });
                return accumulator;
              }, 0)}
            </Col>
            <Col sm="2" className="border d-flex justify-content-center"></Col>
          </Row>
        </>
      ) : (
        <span className="d-flex justify-content-center">No data Found</span>
      )}
    </>
  );
};
export default Body;

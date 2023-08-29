import Prism from "prismjs";
import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "react-feather";
import { useSelector } from "react-redux";
import { Col, Collapse, Row } from "reactstrap";

const Body = (data) => {
  const store = useSelector((state) => state.shipDateReports);
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
      {data?.shipped_today?.length > 0 ? (
        <>
          <Row style={{backgroundColor: '#fcf8e3'}}>
            <Col sm="3" className="border d-flex justify-content-center"></Col>
            <Col sm="2" className="border d-flex justify-content-center">
              Items Shipped
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              Qty Shipped
            </Col>
            <Col sm="2" className="border d-flex justify-content-center">
              Average Days to Ship
            </Col>
            <Col sm="2" className="border d-flex justify-content-center">
              Max Days to Ship
            </Col>
            <Col sm="2" className="border d-flex justify-content-center">
              Percentage of Total
            </Col>
          </Row>
          {data?.sections?.map((section, index) => {
            const section_ship = data?.shipped_today?.filter(
              (ship) => ship?.section_num == section?.value
            );
            return (
              <>
                {section_ship?.length > 0 && (
                  <Row key={index}>
                    <Col sm="3" className="border">
                      {section == collapse ? (
                        <ChevronUp
                          size={24}
                          onClick={(e) => {
                            e.preventDefault();
                            toggle(section);
                          }}
                        />
                      ) : (
                        <ChevronDown
                          size={24}
                          onClick={(e) => {
                            e.preventDefault();
                            toggle(section);
                          }}
                        />
                      )}
                      {section?.label}
                    </Col>
                    <Col
                      sm="2"
                      className="border d-flex justify-content-center"
                    >
                      {section_ship?.reduce(
                        (partialSum, item) =>
                          partialSum + parseInt(item?.ship_count),
                        0
                      )}
                    </Col>
                    <Col
                      sm="1"
                      className="border d-flex justify-content-center"
                    >
                      {section_ship?.reduce(
                        (partialSum, item) =>
                          partialSum + parseInt(item?.item_quantity),
                        0
                      )}
                    </Col>
                    <Col
                      sm="2"
                      className="border d-flex justify-content-center"
                    >
                      {parseFloat(
                        section_ship?.reduce(
                          (partialSum, item) =>
                            partialSum + parseInt(item?.diff),
                          0
                        ) /
                          section_ship?.reduce(
                            (partialSum, item) =>
                              partialSum + parseInt(item?.ship_count),
                            0
                          )
                      ).toFixed(1)}
                    </Col>
                    <Col
                      sm="2"
                      className="border d-flex justify-content-center"
                    >
                      {parseFloat(
                        Math.max(...section_ship.map((o) => o.maxdays))
                      ).toFixed(1)}
                    </Col>
                    <Col
                      sm="2"
                      className="border d-flex justify-content-center"
                    >
                      {parseFloat(
                        (section_ship?.reduce(
                          (partialSum, item) =>
                            partialSum + parseInt(item?.ship_count),
                          0
                        ) /
                          data?.shipped_today?.reduce(
                            (partialSum, item) =>
                              partialSum + parseInt(item?.ship_count),
                            0
                          )) *
                          100
                      ).toFixed(2)}
                      %
                    </Col>

                    <Collapse isOpen={section === collapse}>
                      {section_ship?.map((ship, index) => {
                        return (
                          <Row style={{ backgroundColor: "#F5F5F5" }}>
                            <Col sm="3" className="border">
                              {store?.storeOptions?.find(
                                (itm) => itm?.value == ship?.store_id
                              )?.label ?? "Store not Found"}
                            </Col>
                            <Col
                              sm="2"
                              className="border d-flex justify-content-center"
                            >
                              {ship?.ship_count}
                            </Col>
                            <Col
                              sm="1"
                              className="border d-flex justify-content-center"
                            >
                              {ship?.item_quantity}
                            </Col>
                            <Col
                              sm="2"
                              className="border d-flex justify-content-center"
                            >
                              {parseFloat(ship?.avgdays).toFixed(1)}
                            </Col>
                            <Col
                              sm="2"
                              className="border d-flex justify-content-center"
                            >
                              {parseFloat(ship?.maxdays).toFixed(1)}
                            </Col>
                            <Col
                              sm="2"
                              className="border d-flex justify-content-center"
                            >
                              {parseFloat(
                                (ship?.ship_count /
                                  section_ship?.reduce(
                                    (partialSum, item) =>
                                      partialSum + parseInt(item?.ship_count),
                                    0
                                  )) *
                                  100
                              ).toFixed(2)}
                              %
                            </Col>
                          </Row>
                        );
                      })}
                    </Collapse>
                  </Row>
                )}
              </>
            );
          })}

          <Row className="mb-1" style={{backgroundColor: '#fcf8e3'}}>
            <Col sm="3" className="border d-flex justify-content-center">
              Total Shipped:
            </Col>
            <Col sm="2" className="border d-flex justify-content-center">
              {data?.shipped_today?.reduce(
                (partialSum, item) => partialSum + parseInt(item?.ship_count),
                0
              )}
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              {data?.shipped_today?.reduce(
                (partialSum, item) =>
                  partialSum + parseInt(item?.item_quantity),
                0
              )}
            </Col>
            <Col sm="2" className="border d-flex justify-content-center">
              {parseFloat(
                data?.shipped_today?.reduce(
                  (partialSum, item) => partialSum + parseInt(item?.diff),
                  0
                ) /
                  data?.shipped_today?.reduce(
                    (partialSum, item) =>
                      partialSum + parseInt(item?.ship_count),
                    0
                  )
              ).toFixed(1)}
            </Col>
            <Col sm="2" className="border d-flex justify-content-center"></Col>
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

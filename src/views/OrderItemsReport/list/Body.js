import Prism from "prismjs";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Col, Row } from "reactstrap";

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
          <Row style={{ backgroundColor: "#f7eaea" }}>
            <Col sm="6" className="border d-flex justify-content-center">
              Product
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              Items
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              Shipped
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              Shipped
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              Average Days to Ship
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              Max Days to Ship
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              Rejects
            </Col>
          </Row>
          {data?.items?.map((item, index) => {
            return (
              <>
                <Row key={index}>
                  <Col sm="1" className="border">
                    <img src={item?.product_thumb} height={60} />
                  </Col>
                  <Col sm="2" className="border">
                    {item?.item_code}
                  </Col>
                  <Col sm="3" className="border">
                    {item?.product_name}
                  </Col>
                  <Col sm="1" className="border d-flex justify-content-center">
                    {item?.item_qty}
                  </Col>
                  <Col sm="1" className="border d-flex justify-content-center">
                    {item?.shipped}
                  </Col>
                  <Col sm="1" className="border d-flex justify-content-center">
                    {paseFloat(
                      (parseInt(item?.shipped) / parseInt(item?.item_qty)) * 100
                    ).toFixed(2)}
                    %
                  </Col>
                  <Col sm="1" className="border d-flex justify-content-center">
                    {parseInt(item?.ship_day) / parseInt(item?.shipped)}
                  </Col>
                  <Col sm="1" className="border d-flex justify-content-center">
                    {item?.maxdays}
                  </Col>
                  <Col sm="1" className="border d-flex justify-content-center">
                    {item?.rejects?.count}
                  </Col>
                </Row>
              </>
            );
          })}
        </>
      ) : (
        <span className="d-flex justify-content-center">No data Found</span>
      )}
    </>
  );
};
export default Body;

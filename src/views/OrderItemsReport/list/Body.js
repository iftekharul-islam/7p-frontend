import Prism from "prismjs";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";

const Body = (data) => {
  const store = useSelector((state) => state.shipDateReports);
  const [collapse, setCollapse] = useState(null);
  const params = store?.searchParams;

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const toggle = (section) => {
    if (collapse === section) setCollapse(null);
    else setCollapse(section);
  };

  return (
    <>
      {data?.items?.length > 0 ? (
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
              Average Days
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              Max Days
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
                    <Link to={`/items-list?search_for_first=${item?.item_code}&search_in_first=item_code&store=${data?.store_str}&start_date=${params?.start_date}&end_date=${params?.end_date}`} target="_blank">{item?.item_qty}</Link>
                  </Col>
                  <Col sm="1" className="border d-flex justify-content-center">
                  <Link to={`/items-list?search_for_first=${item?.item_code}&search_in_first=item_code&store=${data?.store_str}&start_date=${params?.start_date}&end_date=${params?.end_date}&status=2`} target="_blank">{item?.shipped}</Link>
                  </Col>
                  <Col sm="1" className="border d-flex justify-content-center">
                    {item?.shipped > 0 && item?.item_qty > 0 ? (
                      <>
                        {parseFloat(
                          (parseInt(item?.shipped) / parseInt(item?.item_qty)) *
                            100
                        ).toFixed(2)}
                        %
                      </>
                    ) : (
                      <>--</>
                    )}
                  </Col>
                  <Col sm="1" className="border d-flex justify-content-center">
                    {item?.shipped > 0 ? (
                      parseFloat(
                        parseInt(item?.ship_days) / parseInt(item?.shipped)
                      ).toFixed(1)
                    ) : (
                      <>--</>
                    )}
                  </Col>
                  <Col sm="1" className="border d-flex justify-content-center">
                    {parseFloat(item?.maxdays).toFixed(1)}
                  </Col>
                  <Col sm="1" className="border d-flex justify-content-center">
                    {data?.rejects?.find(
                      (reject) => reject?.item_code == item?.item_code
                    )?.count ?? "--"}
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

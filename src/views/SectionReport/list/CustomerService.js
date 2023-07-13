import { Col, Row } from "reactstrap";

const CustomerService = (data) => {
  return (
    <>
      <Row
        className="border d-flex justify-content-between bg-gradient"
        style={{ backgroundColor: "#dff0d8" }}
      >
        <Col sm="8">Customer Service</Col>
        <Col sm="4" className="d-flex justify-content-end">
          {parseFloat(
            ((data?.CS_rejects?.reduce(
              (partialSum, item) => partialSum + parseInt(item?.items_count),
              0
            ) +
              data?.CS?.reduce(
                (partialSum, item) => partialSum + parseInt(item?.items_count),
                0
              )) /
              data?.total) *
              100
          ).toFixed(2)}
          %
        </Col>
      </Row>
      {data?.CS?.map((item, index) => (
        <Row key={index} className="border d-flex justify-content-between">
          <Col sm="4" className="border">
            {
              data?.order_statuses?.find(
                (itm) => parseInt(itm?.value) == parseInt(item?.order_status)
              ).label
            }
            ({item?.orders_count} orders)
          </Col>
          <Col sm="1" className="border d-flex justify-content-center">
            {item?.lines_count}
          </Col>
          <Col sm="1" className="border d-flex justify-content-center">
            {item?.items_count}
          </Col>
          <Col sm="1" className="border d-flex justify-content-center">
            {item?.order_1}
          </Col>
          <Col sm="1" className="border d-flex justify-content-center">
            {item?.order_2}
          </Col>
          <Col sm="1" className="border d-flex justify-content-center">
            {item?.order_3}
          </Col>
          <Col sm="3" className="border"></Col>
        </Row>
      ))}
      {data?.items?.map((summary) => {
        if (["S-Wait_for_Pic", "S-GGR-INDIA"].includes(summary?.station_name)) {
          const section = summary?.section_id;
          const section_name = summary?.section_name;

          let first = [];
          let second = [];

          if (summary?.station_name === "S-Wait_for_Pic") {
            first = [
              summary?.lines_count,
              summary?.items_count,
              summary?.order_1,
              summary?.order_2,
              summary?.order_3,
            ];
          } else {
            second = [
              summary?.lines_count,
              summary?.items_count,
              summary?.order_1,
              summary?.order_2,
              summary?.order_3,
            ];
          }

          return (
            <Row
              key={summary?.station_id}
              className="border d-flex justify-content-between"
            >
              <Col sm="4" className="border">
                {summary?.station_name}
              </Col>
              <Col sm="1" className="border d-flex justify-content-center">
                {summary?.lines_count}
              </Col>
              <Col sm="1" className="border d-flex justify-content-center">
                {summary?.items_count}
              </Col>
              <Col sm="1" className="border d-flex justify-content-center">
                {summary?.order_1}
              </Col>
              <Col sm="1" className="border d-flex justify-content-center">
                {summary?.order_2}
              </Col>
              <Col sm="1" className="border d-flex justify-content-center">
                {summary?.order_3}
              </Col>
              <Col sm="3" className="border"></Col>
            </Row>
          );
        }
        return null;
      })}
      {data?.CS_rejects?.map((item, index) => (
        <Row key={index} className="border d-flex justify-content-between">
          <Col sm="4" className="border">
            {
              data?.order_statuses?.find(
                (itm) => parseInt(itm?.value) == parseInt(item?.graphic_status)
              ).label
            }
            ({item?.orders_count} orders)
          </Col>
          <Col sm="1" className="border d-flex justify-content-center">
            {item?.lines_count}
          </Col>
          <Col sm="1" className="border d-flex justify-content-center">
            {item?.items_count}
          </Col>
          <Col sm="1" className="border d-flex justify-content-center">
            {item?.order_1}
          </Col>
          <Col sm="1" className="border d-flex justify-content-center">
            {item?.order_2}
          </Col>
          <Col sm="1" className="border d-flex justify-content-center">
            {item?.order_3}
          </Col>
          <Col sm="3" className="border"></Col>
        </Row>
      ))}
      <Row className="border d-flex justify-content-between">
        <Col sm="4" className="border d-flex justify-content-end">
          Customer Service SubTotals:
        </Col>
        <Col sm="1" className="border d-flex justify-content-center">
          {parseInt(
            data?.CS?.reduce(
              (partialSum, item) => partialSum + parseInt(item?.lines_count),
              0
            )
          ) +
            parseInt(
              data?.CS_rejects?.reduce(
                (partialSum, item) => partialSum + parseInt(item?.lines_count),
                0
              )
            ) +
            parseInt(
              data?.items?.reduce(
                (partialSum, item) => partialSum + parseInt(item?.lines_count),
                0
              )
            )}
        </Col>
        <Col sm="1" className="border d-flex justify-content-center">
          {parseInt(
            data?.CS?.reduce(
              (partialSum, item) => partialSum + parseInt(item?.items_count),
              0
            )
          ) +
            parseInt(
              data?.CS_rejects?.reduce(
                (partialSum, item) => partialSum + parseInt(item?.items_count),
                0
              )
            ) +
            parseInt(
              data?.items?.reduce(
                (partialSum, item) => partialSum + parseInt(item?.items_count),
                0
              )
            )}
        </Col>
        <Col sm="1" className="border d-flex justify-content-center">
          {parseInt(
            data?.CS?.reduce(
              (partialSum, item) => partialSum + parseInt(item?.order_1),
              0
            )
          ) +
            parseInt(
              data?.CS_rejects?.reduce(
                (partialSum, item) => partialSum + parseInt(item?.order_1),
                0
              )
            ) +
            parseInt(
              data?.items?.reduce(
                (partialSum, item) => partialSum + parseInt(item?.order_1),
                0
              )
            )}
        </Col>
        <Col sm="1" className="border d-flex justify-content-center">
          {parseInt(
            data?.CS?.reduce(
              (partialSum, item) => partialSum + parseInt(item?.order_2),
              0
            )
          ) +
            parseInt(
              data?.CS_rejects?.reduce(
                (partialSum, item) => partialSum + parseInt(item?.order_2),
                0
              )
            ) +
            parseInt(
              data?.items?.reduce(
                (partialSum, item) => partialSum + parseInt(item?.order_2),
                0
              )
            )}
        </Col>
        <Col sm="1" className="border d-flex justify-content-center">
          {parseInt(
            data?.CS?.reduce(
              (partialSum, item) => partialSum + parseInt(item?.order_3),
              0
            )
          ) +
            parseInt(
              data?.CS_rejects?.reduce(
                (partialSum, item) => partialSum + parseInt(item?.order_3),
                0
              )
            ) +
            parseInt(
              data?.items?.reduce(
                (partialSum, item) => partialSum + parseInt(item?.order_3),
                0
              )
            )}
        </Col>
        <Col sm="3" className="border"></Col>
      </Row>
    </>
  );
};
export default CustomerService;

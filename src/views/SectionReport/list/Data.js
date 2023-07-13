import { Col, Row } from "reactstrap";
const Data = ({
  CS,
  CS_rejects,
  WAP,
  backorders,
  date,
  graphic_statuses,
  items,
  now,
  order_statuses,
  qc,
  rejected_today,
  rejects,
  section_totals,
  sections,
  shipped_today,
  store_link,
  total,
  unbatched,
}) => {
  let first = [];
  let second = [];
  let section = "start";
  let section_name = null;
  let avg_sum = 0;
  return (
    <div>
      {(CS?.length > 0 || CS_rejects?.length > 0) && (
        <span>
          <Row
            className="border d-flex justify-content-between bg-gradient"
            style={{ backgroundColor: "#dff0d8" }}
          >
            <Col sm="8">Customer Service</Col>
            <Col sm="4" className="d-flex justify-content-end">
              {parseFloat(
                ((CS_rejects?.reduce(
                  (partialSum, item) =>
                    partialSum + parseInt(item?.items_count),
                  0
                ) +
                  CS?.reduce(
                    (partialSum, item) =>
                      partialSum + parseInt(item?.items_count),
                    0
                  )) /
                  total) *
                  100
              ).toFixed(2)}
              %
            </Col>
          </Row>
          {CS?.map((service, index) => (
            <Row key={index} className="border d-flex justify-content-between">
              <Col sm="4" className="border">
                {
                  order_statuses?.find(
                    (itm) =>
                      parseInt(itm?.value) == parseInt(service?.order_status)
                  ).label
                }
                ({service?.orders_count} orders)
              </Col>
              <Col sm="1" className="border d-flex justify-content-center">
                {service?.lines_count}
              </Col>
              <Col sm="1" className="border d-flex justify-content-center">
                {service?.items_count}
              </Col>
              <Col sm="1" className="border d-flex justify-content-center">
                {service?.order_1}
              </Col>
              <Col sm="1" className="border d-flex justify-content-center">
                {service?.order_2}
              </Col>
              <Col sm="1" className="border d-flex justify-content-center">
                {service?.order_3}
              </Col>
              <Col sm="3" className="border"></Col>
            </Row>
          ))}
          {items?.map((summary) => {
            if (
              ["S-Wait_for_Pic", "S-GGR-INDIA"].includes(summary?.station_name)
            ) {
              section = summary?.section_id;
              section_name = summary?.section_name;

              if (summary?.station_name === "S-Wait_for_Pic") {
                first[1] = [summary?.lines_count];
                first[2] = [summary?.items_count];
                first[3] = [summary?.order_1];
                first[4] = [summary?.order_2];
                first[5] = [summary?.order_3];
              } else {
                second[1] = [summary?.lines_count];
                second[2] = [summary?.items_count];
                second[3] = [summary?.order_1];
                second[4] = [summary?.order_2];
                second[5] = [summary?.order_3];
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
          {CS_rejects?.map((service, index) => (
            <Row key={index} className="border d-flex justify-content-between">
              <Col sm="4" className="border">
                {
                  order_statuses?.find(
                    (itm) =>
                      parseInt(itm?.value) == parseInt(service?.graphic_status)
                  ).label
                }
              </Col>
              <Col sm="1" className="border d-flex justify-content-center">
                {service?.lines_count}
              </Col>
              <Col sm="1" className="border d-flex justify-content-center">
                {service?.items_count}
              </Col>
              <Col sm="1" className="border d-flex justify-content-center">
                {service?.order_1}
              </Col>
              <Col sm="1" className="border d-flex justify-content-center">
                {service?.order_2}
              </Col>
              <Col sm="1" className="border d-flex justify-content-center">
                {service?.order_3}
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
                CS?.reduce(
                  (partialSum, item) =>
                    partialSum + parseInt(item?.lines_count),
                  0
                )
              ) +
                parseInt(
                  CS_rejects?.reduce(
                    (partialSum, item) =>
                      partialSum + parseInt(item?.lines_count),
                    0
                  )
                ) +
                parseInt(first[1]) +
                parseInt(second[1])}
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              {parseInt(
                CS?.reduce(
                  (partialSum, item) =>
                    partialSum + parseInt(item?.items_count),
                  0
                )
              ) +
                parseInt(
                  CS_rejects?.reduce(
                    (partialSum, item) =>
                      partialSum + parseInt(item?.items_count),
                    0
                  )
                ) +
                parseInt(first[2]) +
                parseInt(second[2])}
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              {parseInt(
                CS?.reduce(
                  (partialSum, item) => partialSum + parseInt(item?.order_1),
                  0
                )
              ) +
                parseInt(
                  CS_rejects?.reduce(
                    (partialSum, item) => partialSum + parseInt(item?.order_1),
                    0
                  )
                ) +
                parseInt(first[3]) +
                parseInt(second[3])}
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              {parseInt(
                CS?.reduce(
                  (partialSum, item) => partialSum + parseInt(item?.order_2),
                  0
                )
              ) +
                parseInt(
                  CS_rejects?.reduce(
                    (partialSum, item) => partialSum + parseInt(item?.order_2),
                    0
                  )
                ) +
                parseInt(first[4]) +
                parseInt(second[4])}
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              {parseInt(
                CS?.reduce(
                  (partialSum, item) => partialSum + parseInt(item?.order_3),
                  0
                )
              ) +
                parseInt(
                  CS_rejects?.reduce(
                    (partialSum, item) => partialSum + parseInt(item?.order_3),
                    0
                  )
                ) +
                parseInt(first[5]) +
                parseInt(second[5])}
            </Col>
            <Col sm="3" className="border"></Col>
          </Row>
        </span>
      )}

      {CS?.backorders > 0 && (
        <span>
          <Row
            className="border d-flex justify-content-between bg-gradient"
            style={{ backgroundColor: "#dff0d8" }}
          >
            <Col sm="8">Back Orders</Col>
            <Col sm="4" className="d-flex justify-content-end">
              {parseFloat(
                (backorders?.reduce(
                  (partialSum, item) =>
                    partialSum + parseInt(item?.items_count),
                  0
                ) /
                  total) *
                  100
              ).toFixed(2)}
              %
            </Col>
          </Row>
          {backorders?.map((backorder, index) => (
            <Row key={index} className="border d-flex justify-content-between">
              <Col sm="4" className="border">
                {backorder?.section_name}
              </Col>
              <Col sm="1" className="border d-flex justify-content-center">
                {backorder?.lines_count}
              </Col>
              <Col sm="1" className="border d-flex justify-content-center">
                {backorder?.items_count}
              </Col>
              <Col sm="1" className="border d-flex justify-content-center">
                {backorder?.order_1}
              </Col>
              <Col sm="1" className="border d-flex justify-content-center">
                {backorder?.order_2}
              </Col>
              <Col sm="1" className="border d-flex justify-content-center">
                {backorder?.order_3}
              </Col>
              <Col sm="1" className="border d-flex justify-content-center">
                {backorder?.scan_1}
              </Col>
              <Col sm="1" className="border d-flex justify-content-center">
                {backorder?.scan_2}
              </Col>
              <Col sm="1" className="border d-flex justify-content-center">
                {backorder?.scan_3}
              </Col>
            </Row>
          ))}
          <Row className="border d-flex justify-content-between">
            <Col sm="4" className="border d-flex justify-content-end">
              Backorder SubTotals:
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              {backorders?.reduce(
                (partialSum, item) => partialSum + parseInt(item?.lines_count),
                0
              )}
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              {backorders?.reduce(
                (partialSum, item) => partialSum + parseInt(item?.items_count),
                0
              )}
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              {backorders?.reduce(
                (partialSum, item) => partialSum + parseInt(item?.order_1),
                0
              )}
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              {backorders?.reduce(
                (partialSum, item) => partialSum + parseInt(item?.order_2),
                0
              )}
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              {backorders?.reduce(
                (partialSum, item) => partialSum + parseInt(item?.order_3),
                0
              )}
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              {backorders?.reduce(
                (partialSum, item) => partialSum + parseInt(item?.scan_1),
                0
              )}
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              {backorders?.reduce(
                (partialSum, item) => partialSum + parseInt(item?.scan_2),
                0
              )}
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              {backorders?.reduce(
                (partialSum, item) => partialSum + parseInt(item?.scan_3),
                0
              )}
            </Col>
          </Row>
        </span>
      )}

      {rejects?.length > 0 && (
        <span>
          <Row
            className="border d-flex justify-content-between bg-gradient"
            style={{ backgroundColor: "#dff0d8" }}
          >
            <Col sm="8">Rejects</Col>
            <Col sm="4" className="d-flex justify-content-end">
              {parseFloat(
                (rejects?.reduce(
                  (partialSum, item) =>
                    partialSum + parseInt(item?.items_count),
                  0
                ) /
                  total) *
                  100
              ).toFixed(2)}
              %
            </Col>
          </Row>
          {rejects?.map((reject, index) => (
            <Row key={index} className="border d-flex justify-content-between">
              <Col sm="2" className="border">
                {reject?.section_name}
              </Col>
              <Col sm="2" className="border d-flex justify-content-between">
                {
                  graphic_statuses?.find(
                    (itm) =>
                      parseInt(itm?.value) == parseInt(reject?.graphic_status)
                  ).label
                }
              </Col>
              <Col sm="1" className="border d-flex justify-content-center">
                {reject?.lines_count}
              </Col>
              <Col sm="1" className="border d-flex justify-content-center">
                {reject?.items_count}
              </Col>
              <Col sm="1" className="border d-flex justify-content-center">
                {reject?.order_1}
              </Col>
              <Col sm="1" className="border d-flex justify-content-center">
                {reject?.order_2}
              </Col>

              <Col sm="1" className="border d-flex justify-content-center">
                {reject?.order_3}
              </Col>
              <Col sm="1" className="border d-flex justify-content-center">
                {reject?.scan_1}
              </Col>
              <Col sm="1" className="border d-flex justify-content-center">
                {reject?.scan_2}
              </Col>
              <Col sm="1" className="border d-flex justify-content-center">
                {reject?.scan_3}
              </Col>
            </Row>
          ))}
          <Row className="border d-flex justify-content-between">
            <Col sm="4" className="border d-flex justify-content-end">
              Rejects SubTotals:
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              {rejects?.reduce(
                (partialSum, item) => partialSum + parseInt(item?.lines_count),
                0
              )}
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              {rejects?.reduce(
                (partialSum, item) => partialSum + parseInt(item?.items_count),
                0
              )}
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              {rejects?.reduce(
                (partialSum, item) => partialSum + parseInt(item?.order_1),
                0
              )}
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              {rejects?.reduce(
                (partialSum, item) => partialSum + parseInt(item?.order_2),
                0
              )}
            </Col>

            <Col sm="1" className="border d-flex justify-content-center">
              {rejects?.reduce(
                (partialSum, item) => partialSum + parseInt(item?.order_3),
                0
              )}
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              {rejects?.reduce(
                (partialSum, item) => partialSum + parseInt(item?.scan_1),
                0
              )}
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              {rejects?.reduce(
                (partialSum, item) => partialSum + parseInt(item?.scan_2),
                0
              )}
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              {rejects?.reduce(
                (partialSum, item) => partialSum + parseInt(item?.scan_3),
                0
              )}
            </Col>
          </Row>
        </span>
      )}

      {items?.length > 0 && (
        <span>
          {items?.map((summary) => (
            <span>
              {section != summary?.section_id && (
                <span>
                  {section != "start" && (
                    <Row
                      key={summary?.station_id}
                      className="border d-flex justify-content-between"
                    >
                      <Col sm="4" className="border d-flex justify-content-end">
                        {section_name} SubTotals:
                      </Col>
                      <Col
                        sm="1"
                        className="border d-flex justify-content-center"
                      >
                        {items
                          ?.filter((item) => item?.section_id == section)
                          ?.reduce(
                            (partialSum, item) =>
                              partialSum + parseInt(item?.lines_count),

                            0
                          )}
                      </Col>
                      <Col
                        sm="1"
                        className="border d-flex justify-content-center"
                      >
                        {items
                          ?.filter((item) => item?.section_id == section)
                          ?.reduce(
                            (partialSum, item) =>
                              partialSum + parseInt(item?.items_count),
                            0
                          )}
                      </Col>
                      <Col
                        sm="1"
                        className="border d-flex justify-content-center"
                      >
                        {items
                          ?.filter((item) => item?.section_id == section)
                          ?.reduce(
                            (partialSum, item) =>
                              partialSum + parseInt(item?.order_1),
                            0
                          )}
                      </Col>
                      <Col
                        sm="1"
                        className="border d-flex justify-content-center"
                      >
                        {items
                          ?.filter((item) => item?.section_id == section)
                          ?.reduce(
                            (partialSum, item) =>
                              partialSum + parseInt(item?.order_2),
                            0
                          )}
                      </Col>
                      <Col
                        sm="1"
                        className="border d-flex justify-content-center"
                      >
                        {items
                          ?.filter((item) => item?.section_id == section)
                          ?.reduce(
                            (partialSum, item) =>
                              partialSum + parseInt(item?.order_3),
                            0
                          )}
                      </Col>
                      <Col
                        sm="1"
                        className="border d-flex justify-content-center"
                      >
                        {items
                          ?.filter((item) => item?.section_id == section)
                          ?.reduce(
                            (partialSum, item) =>
                              partialSum + parseInt(item?.scan_1),
                            0
                          )}
                      </Col>
                      <Col
                        sm="1"
                        className="border d-flex justify-content-center"
                      >
                        {items
                          ?.filter((item) => item?.section_id == section)
                          ?.reduce(
                            (partialSum, item) =>
                              partialSum + parseInt(item?.scan_2),
                            0
                          )}
                      </Col>
                      <Col
                        sm="1"
                        className="border d-flex justify-content-center"
                      >
                        {items
                          ?.filter((item) => item?.section_id == section)
                          ?.reduce(
                            (partialSum, item) =>
                              partialSum + parseInt(item?.scan_3),
                            0
                          )}
                      </Col>
                    </Row>
                  )}
                  <div hidden>{(section = summary?.section_id)}</div>
                  <div hidden>{(section_name = summary?.section_name)}</div>
                  <Row
                    key={summary?.station_id}
                    className="border d-flex justify-content-between bg-gradient"
                    style={{ backgroundColor: "#dff0d8" }}
                  >
                    <Col sm="9" className="border">
                      {summary?.section_id == 0
                        ? "Unbatched"
                        : summary?.section_name}
                    </Col>
                    <Col sm="3" className="border d-flex justify-content-end">
                      {parseFloat(
                        (items
                          ?.filter(
                            (item) => item?.section_id == summary?.section_id
                          )
                          ?.reduce(
                            (partialSum, item) =>
                              partialSum + parseInt(item?.items_count),
                            0
                          ) /
                          total) *
                          100
                      ).toFixed(2)}
                      %
                    </Col>
                  </Row>
                </span>
              )}
              {["S-Wait_for_Pic", "S-GGR-INDIA"].includes(
                summary?.station_name
              ) && (
                <Row
                  key={summary?.station_id}
                  className="border d-flex justify-content-between"
                >
                  <Col sm="2" className="border">
                    {summary?.station_name}
                  </Col>
                  <Col sm="2" className="border">
                    {summary?.station_description}
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
                  <Col sm="1" className="border d-flex justify-content-center">
                    {summary?.scan_1}
                  </Col>
                  <Col sm="1" className="border d-flex justify-content-center">
                    {summary?.scan_2}
                  </Col>
                  <Col sm="1" className="border d-flex justify-content-center">
                    {summary?.scan_3}
                  </Col>
                </Row>
              )}
            </span>
          ))}
          <Row className="border d-flex justify-content-between">
            <Col sm="4" className="border d-flex justify-content-end">
              {section == 0
                ? "Unassigned SubTotals:"
                : section_name + " SubTotals:"}
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              {items
                ?.filter((item) => item?.section_id == section)
                ?.reduce(
                  (partialSum, item) =>
                    partialSum + parseInt(item?.lines_count),
                  0
                )}
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              {items
                ?.filter((item) => item?.section_id == section)
                ?.reduce(
                  (partialSum, item) =>
                    partialSum + parseInt(item?.items_count),
                  0
                )}
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              {items
                ?.filter((item) => item?.section_id == section)
                ?.reduce(
                  (partialSum, item) => partialSum + parseInt(item?.order_1),
                  0
                )}
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              {items
                ?.filter((item) => item?.section_id == section)
                ?.reduce(
                  (partialSum, item) => partialSum + parseInt(item?.order_2),
                  0
                )}
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              {items
                ?.filter((item) => item?.section_id == section)
                ?.reduce(
                  (partialSum, item) => partialSum + parseInt(item?.order_3),
                  0
                )}
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              {items
                ?.filter((item) => item?.section_id == section)
                ?.reduce(
                  (partialSum, item) => partialSum + parseInt(item?.scan_1),
                  0
                )}
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              {items
                ?.filter((item) => item?.section_id == section)
                ?.reduce(
                  (partialSum, item) => partialSum + parseInt(item?.scan_2),
                  0
                )}
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              {items
                ?.filter((item) => item?.section_id == section)
                ?.reduce(
                  (partialSum, item) => partialSum + parseInt(item?.scan_3),
                  0
                )}
            </Col>
          </Row>
        </span>
      )}

      {unbatched && (
        <span>
          <Row className="border d-flex justify-content-between">
            <Col sm="4" className="border d-flex justify-content-end">
              Unbatched
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              {unbatched?.lines_count}
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              {unbatched?.items_count}
            </Col>

            <Col sm="1" className="border d-flex justify-content-center">
              {unbatched?.order_1}
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              {unbatched?.order_2}
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              {unbatched?.order_3}
            </Col>
            <Col sm="3" className="border d-flex justify-content-center"></Col>
          </Row>
        </span>
      )}

      {items?.length > 0 && (
        <span>
          <Row className="border d-flex justify-content-between">
            <Col sm="4" className="border d-flex justify-content-end">
              Production Totals:
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              {items?.reduce(
                (partialSum, item) => partialSum + parseInt(item?.lines_count),
                0
              ) +
                rejects?.reduce(
                  (partialSum, item) =>
                    partialSum + parseInt(item?.lines_count),
                  0
                ) +
                parseInt(unbatched?.lines_count)}
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              {items?.reduce(
                (partialSum, item) => partialSum + parseInt(item?.items_count),
                0
              ) +
                rejects?.reduce(
                  (partialSum, item) =>
                    partialSum + parseInt(item?.items_count),
                  0
                ) +
                parseInt(unbatched?.items_count)}
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              {items?.reduce(
                (partialSum, item) => partialSum + parseInt(item?.order_1),
                0
              ) +
                rejects?.reduce(
                  (partialSum, item) => partialSum + parseInt(item?.order_1),
                  0
                ) +
                parseInt(unbatched?.order_1)}
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              {items?.reduce(
                (partialSum, item) => partialSum + parseInt(item?.order_2),
                0
              ) +
                rejects?.reduce(
                  (partialSum, item) => partialSum + parseInt(item?.order_2),
                  0
                ) +
                parseInt(unbatched?.order_2)}
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              {items?.reduce(
                (partialSum, item) => partialSum + parseInt(item?.order_3),
                0
              ) +
                rejects?.reduce(
                  (partialSum, item) => partialSum + parseInt(item?.order_3),
                  0
                ) +
                parseInt(unbatched?.order_3)}
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              {items?.reduce(
                (partialSum, item) => partialSum + parseInt(item?.scan_1),
                0
              ) +
                rejects?.reduce(
                  (partialSum, item) => partialSum + parseInt(item?.scan_1),
                  0
                )}
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              {items?.reduce(
                (partialSum, item) => partialSum + parseInt(item?.scan_2),
                0
              ) +
                rejects?.reduce(
                  (partialSum, item) => partialSum + parseInt(item?.scan_2),
                  0
                )}
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              {items?.reduce(
                (partialSum, item) => partialSum + parseInt(item?.scan_3),
                0
              ) +
                rejects?.reduce(
                  (partialSum, item) => partialSum + parseInt(item?.scan_3),
                  0
                )}
            </Col>
          </Row>
        </span>
      )}

      {qc?.length > 0 && (
        <span>
          <Row
            className="border d-flex justify-content-between bg-gradient"
            style={{ backgroundColor: "#dff0d8" }}
          >
            <Col sm="8">Quality Control</Col>
            <Col sm="4" className="d-flex justify-content-end">
              {parseFloat(
                (qc?.reduce(
                  (partialSum, item) =>
                    partialSum + parseInt(item?.items_count),
                  0
                ) /
                  total) *
                  100
              ).toFixed(2)}
              %
            </Col>
          </Row>
          {qc?.map((station, index) => (
            <Row key={index} className="border d-flex justify-content-between">
              <Col sm="2" className="border">
                {station?.station_name}
              </Col>
              <Col sm="2" className="border">
                {station?.station_description}
              </Col>
              <Col sm="1" className="border d-flex justify-content-center">
                {station?.lines_count}
              </Col>
              <Col sm="1" className="border d-flex justify-content-center">
                {station?.items_count}
              </Col>
              <Col sm="1" className="border d-flex justify-content-center">
                {station?.order_1}
              </Col>
              <Col sm="1" className="border d-flex justify-content-center">
                {station?.order_2}
              </Col>
              <Col sm="1" className="border d-flex justify-content-center">
                {station?.order_3}
              </Col>
              <Col sm="1" className="border d-flex justify-content-center">
                {station?.scan_1}
              </Col>
              <Col sm="1" className="border d-flex justify-content-center">
                {station?.scan_2}
              </Col>
              <Col sm="1" className="border d-flex justify-content-center">
                {station?.scan_3}
              </Col>
            </Row>
          ))}
          <Row className="border d-flex justify-content-between">
            <Col sm="4" className="border d-flex justify-content-end">
              Quality Control SubTotals:
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              {qc?.reduce(
                (partialSum, item) => partialSum + parseInt(item?.lines_count),
                0
              )}
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              {qc?.reduce(
                (partialSum, item) => partialSum + parseInt(item?.items_count),
                0
              )}
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              {qc?.reduce(
                (partialSum, item) => partialSum + parseInt(item?.order_1),
                0
              )}
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              {qc?.reduce(
                (partialSum, item) => partialSum + parseInt(item?.order_2),
                0
              )}
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              {qc?.reduce(
                (partialSum, item) => partialSum + parseInt(item?.order_3),
                0
              )}
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              {qc?.reduce(
                (partialSum, item) => partialSum + parseInt(item?.scan_1),
                0
              )}
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              {qc?.reduce(
                (partialSum, item) => partialSum + parseInt(item?.scan_2),
                0
              )}
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              {qc?.reduce(
                (partialSum, item) => partialSum + parseInt(item?.scan_3),
                0
              )}
            </Col>
          </Row>
        </span>
      )}

      {WAP && (
        <span>
          <Row className="border d-flex justify-content-between">
            <Col sm="4" className="border d-flex justify-content-end">
              WAP
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              {WAP?.lines_count}
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              {WAP?.items_count}
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              {WAP?.order_1}
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              {WAP?.order_2}
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              {WAP?.order_3}
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              {WAP?.scan_1}
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              {WAP?.scan_2}
            </Col>
            <Col sm="1" className="border d-flex justify-content-center">
              {WAP?.scan_3}
            </Col>
          </Row>
        </span>
      )}

      <Row
        className="border d-flex justify-content-between bg-gradient"
        style={{ backgroundColor: "#dff0d8" }}
      >
        <Col>.</Col>
      </Row>

      <Row className="border d-flex justify-content-between">
        <Col sm="4" className="border d-flex justify-content-end">
          Totals:
        </Col>
        <Col sm="1" className="border d-flex justify-content-center">
          {items?.reduce(
            (partialSum, item) => partialSum + parseInt(item?.lines_count),
            0
          ) +
            backorders?.reduce(
              (partialSum, item) => partialSum + parseInt(item?.lines_count),
              0
            ) +
            rejects?.reduce(
              (partialSum, item) => partialSum + parseInt(item?.lines_count),
              0
            ) +
            CS_rejects?.reduce(
              (partialSum, item) => partialSum + parseInt(item?.lines_count),
              0
            ) +
            CS?.reduce(
              (partialSum, item) => partialSum + parseInt(item?.lines_count),
              0
            ) +
            qc?.reduce(
              (partialSum, item) => partialSum + parseInt(item?.lines_count),
              0
            ) +
            parseInt(unbatched?.lines_count) +
            parseInt(WAP?.lines_count)}
        </Col>
        <Col sm="1" className="border d-flex justify-content-center">
          {items?.reduce(
            (partialSum, item) => partialSum + parseInt(item?.items_count),
            0
          ) +
            backorders?.reduce(
              (partialSum, item) => partialSum + parseInt(item?.items_count),
              0
            ) +
            rejects?.reduce(
              (partialSum, item) => partialSum + parseInt(item?.items_count),
              0
            ) +
            CS_rejects?.reduce(
              (partialSum, item) => partialSum + parseInt(item?.items_count),
              0
            ) +
            CS?.reduce(
              (partialSum, item) => partialSum + parseInt(item?.items_count),
              0
            ) +
            qc?.reduce(
              (partialSum, item) => partialSum + parseInt(item?.items_count),
              0
            ) +
            parseInt(unbatched?.items_count) +
            parseInt(WAP?.items_count)}
        </Col>
        <Col sm="1" className="border d-flex justify-content-center">
          {items?.reduce(
            (partialSum, item) => partialSum + parseInt(item?.order_1),
            0
          ) +
            backorders?.reduce(
              (partialSum, item) => partialSum + parseInt(item?.order_1),
              0
            ) +
            rejects?.reduce(
              (partialSum, item) => partialSum + parseInt(item?.order_1),
              0
            ) +
            CS_rejects?.reduce(
              (partialSum, item) => partialSum + parseInt(item?.order_1),
              0
            ) +
            CS?.reduce(
              (partialSum, item) => partialSum + parseInt(item?.order_1),
              0
            ) +
            qc?.reduce(
              (partialSum, item) => partialSum + parseInt(item?.order_1),
              0
            ) +
            parseInt(unbatched?.order_1) +
            parseInt(WAP?.order_1)}
        </Col>
        <Col sm="1" className="border d-flex justify-content-center">
          {items?.reduce(
            (partialSum, item) => partialSum + parseInt(item?.order_2),
            0
          ) +
            backorders?.reduce(
              (partialSum, item) => partialSum + parseInt(item?.order_2),
              0
            ) +
            rejects?.reduce(
              (partialSum, item) => partialSum + parseInt(item?.order_2),
              0
            ) +
            CS_rejects?.reduce(
              (partialSum, item) => partialSum + parseInt(item?.order_2),
              0
            ) +
            CS?.reduce(
              (partialSum, item) => partialSum + parseInt(item?.order_2),
              0
            ) +
            qc?.reduce(
              (partialSum, item) => partialSum + parseInt(item?.order_2),
              0
            ) +
            parseInt(unbatched?.order_2) +
            parseInt(WAP?.order_2)}
        </Col>
        <Col sm="1" className="border d-flex justify-content-center">
          {items?.reduce(
            (partialSum, item) => partialSum + parseInt(item?.order_3),
            0
          ) +
            backorders?.reduce(
              (partialSum, item) => partialSum + parseInt(item?.order_3),
              0
            ) +
            rejects?.reduce(
              (partialSum, item) => partialSum + parseInt(item?.order_3),
              0
            ) +
            CS_rejects?.reduce(
              (partialSum, item) => partialSum + parseInt(item?.order_3),
              0
            ) +
            CS?.reduce(
              (partialSum, item) => partialSum + parseInt(item?.order_3),
              0
            ) +
            qc?.reduce(
              (partialSum, item) => partialSum + parseInt(item?.order_3),
              0
            ) +
            parseInt(unbatched?.order_3) +
            parseInt(WAP?.order_3)}
        </Col>
        <Col sm="1" className="border d-flex justify-content-center">
          {items?.reduce(
            (partialSum, item) => partialSum + parseInt(item?.scan_1),
            0
          ) +
            backorders?.reduce(
              (partialSum, item) => partialSum + parseInt(item?.scan_1),
              0
            ) +
            rejects?.reduce(
              (partialSum, item) => partialSum + parseInt(item?.scan_1),
              0
            ) +
            qc?.reduce(
              (partialSum, item) => partialSum + parseInt(item?.scan_1),
              0
            )}
        </Col>
        <Col sm="1" className="border d-flex justify-content-center">
          {items?.reduce(
            (partialSum, item) => partialSum + parseInt(item?.scan_2),
            0
          ) +
            backorders?.reduce(
              (partialSum, item) => partialSum + parseInt(item?.scan_2),
              0
            ) +
            rejects?.reduce(
              (partialSum, item) => partialSum + parseInt(item?.scan_2),
              0
            ) +
            qc?.reduce(
              (partialSum, item) => partialSum + parseInt(item?.scan_2),
              0
            )}
        </Col>
        <Col sm="1" className="border d-flex justify-content-center">
          {items?.reduce(
            (partialSum, item) => partialSum + parseInt(item?.scan_3),
            0
          ) +
            backorders?.reduce(
              (partialSum, item) => partialSum + parseInt(item?.scan_3),
              0
            ) +
            rejects?.reduce(
              (partialSum, item) => partialSum + parseInt(item?.scan_3),
              0
            ) +
            qc?.reduce(
              (partialSum, item) => partialSum + parseInt(item?.scan_3),
              0
            )}
        </Col>
      </Row>

      <Row className="border d-flex justify-content-between">
        <Col sm="4" className="border d-flex justify-content-center">
          Items Shipped Today:
        </Col>
        <Col sm="2" className="border d-flex justify-content-center">
          Average Days to Ship
        </Col>
        <Col sm="2" className="border d-flex justify-content-center">
          Percentage of Total
        </Col>
        <Col sm="4" className="border d-flex justify-content-center"></Col>
      </Row>

      {shipped_today?.length > 0 && (
        <span>
          {shipped_today?.map((ship, index) => (
            <Row key={index} className="border d-flex justify-content-between">
              <Col sm="2" className="border d-flex justify-content-center">
                {ship?.station_name}
              </Col>
              <Col sm="2" className="border d-flex justify-content-center">
                {ship?.count}
              </Col>
              <Col sm="2" className="border d-flex justify-content-center">
                {parseFloat(ship?.avgdays).toFixed(2)}
              </Col>
              <Col sm="2" className="border d-flex justify-content-center">
                {shipped_today?.reduce(
                  (partialSum, item) => partialSum + parseInt(item?.count),
                  0
                ) > 0 && (
                  <span>
                    {parseFloat(
                      (ship?.count /
                        shipped_today?.reduce(
                          (partialSum, item) =>
                            partialSum + parseInt(item?.count),
                          0
                        )) *
                        100
                    ).toFixed(2)}
                    %
                  </span>
                )}
              </Col>
              <Col
                sm="4"
                className="border d-flex justify-content-center"
              ></Col>
              <div hidden>
                {(avg_sum = avg_sum + parseInt(ship?.avgdays) * parseInt(ship?.count))}
              </div>
            </Row>
          ))}
        </span>
      )}

      <Row className="border d-flex justify-content-between">
        <Col sm="4" className="border d-flex justify-content-end">
          Total Shipped:
        </Col>
        <Col sm="2" className="border d-flex justify-content-center">
          {shipped_today?.reduce(
            (partialSum, item) => partialSum + parseInt(item?.count),
            0
          )}
        </Col>
        <Col sm="2" className="border d-flex justify-content-center">
          {parseFloat(
            avg_sum /
              parseInt(shipped_today?.reduce(
                (partialSum, item) => partialSum + parseInt(item?.count),
                0
              ))
          ).toFixed(2)}
        </Col>
        <Col sm="4" className="border d-flex justify-content-center"></Col>
      </Row>

      <Row
        className="border d-flex justify-content-between bg-gradient"
        style={{ backgroundColor: "#dff0d8" }}
      >
        <Col>.</Col>
      </Row>
    </div>
  );
};

export default Data;

import { useEffect, useState } from "react";

const Rest = (pageData) => {
  let section = null;
  let sectionName = null;
  const [items, setItems] = useState(null);
  const [rejects, setRejects] = useState(null);
  const [total, setTotal] = useState(null);
  useEffect(() => {
    if (pageData) {
      setItems(pageData?.items);
      setRejects(pageData?.rejects);
      setTotal(pageData?.total);
    }
  }, [pageData]);

  return (
    // <div>
    //   {items?.length > 0 && (
    //     <>
    //       {items?.map((summary, index) => (
    //         <Fragment key={index}>
    //           {section !== summary.section_id && (
    //             <>
    //               {section !== "start" && (
    //                 <Row>
    //                   <Col sm="4" className="border d-flex justify-content-end">{summary?.section_name} SubTotals: </Col>
    //                   <Col sm="1" className="border d-flex justify-content-center">
    //                     {items
    //                       ?.filter((item) => item.section_id === section)
    //                       ?.reduce((sum, item) => sum + parseInt(item?.lines_count), 0)
    //                       ?.toLocaleString()}
    //                   </Col>
    //                   <Col sm="1" className="border d-flex justify-content-center">
    //                     {items
    //                       ?.filter((item) => item.section_id === section)
    //                       ?.reduce((sum, item) => sum + parseInt(item?.items_count), 0)
    //                       ?.toLocaleString()}
    //                   </Col>
    //                   <Col className="totalborder">
    //                     {items
    //                       ?.filter((item) => item.section_id === section)
    //                       ?.reduce((sum, item) => sum + parseInt(item.order_1), 0)
    //                       ?.toLocaleString()}
    //                   </Col>
    //                   <Col className="total">
    //                     {items
    //                       ?.filter((item) => item.section_id === section)
    //                       ?.reduce((sum, item) => sum + item.order_2, 0)
    //                       .toLocaleString()}
    //                   </Col>
    //                   <Col className="total">
    //                     {items
    //                       .filter((item) => item.section_id === section)
    //                       ?.reduce((sum, item) => sum + item.order_3, 0)
    //                       .toLocaleString()}
    //                   </Col>
    //                   <Col className="totalborder">
    //                     {items
    //                       .filter((item) => item.section_id === section)
    //                       ?.reduce((sum, item) => sum + item.scan_1, 0)
    //                       .toLocaleString()}
    //                   </Col>
    //                   <Col className="total">
    //                     {items
    //                       .filter((item) => item.section_id === section)
    //                       ?.reduce((sum, item) => sum + item.scan_2, 0)
    //                       .toLocaleString()}
    //                   </Col>
    //                   <Col className="total">
    //                     {items
    //                       .filter((item) => item.section_id === section)
    //                       ?.reduce((sum, item) => sum + item.scan_3, 0)
    //                       .toLocaleString()}
    //                   </Col>
    //                 </Row>
    //               )}
    //               {(section = summary.section_id)}
    //               {(sectionName = summary.section_name)}

    //               <Row className="success">
    //                 {summary.section_id === "0" ? (
    //                   <Col colspan="9">Unassigned</Col>
    //                 ) : (
    //                   <Col colspan="9">{summary.section_name}</Col>
    //                 )}
    //                 <Col align="right">
    //                   {`${(
    //                     (items
    //                       .filter((item) => item.section_id === section)
    //                       ?.reduce((sum, item) => sum + item.items_count, 0) /
    //                       total) *
    //                     100
    //                   ).toFixed(2)}%`}
    //                 </Col>
    //               </Row>
    //             </>
    //           )}
    //           {!["S-Wait_for_Pic", "S-GGR-INDIA"].includes(
    //             summary.station_name
    //           ) && (
    //             <Row className="lines">
    //               <Col>
    //                 <a
    //                   href={`/production/status_detail?station=${summary.station_id}`}
    //                   target="_blank"
    //                 >
    //                   {summary.station_name}
    //                 </a>
    //               </Col>
    //               <Col>{summary.station_description}</Col>
    //               <Col className="data">
    //                 <form method="post" action="/move_next" target="_blank">
    //                   <input
    //                     type="hidden"
    //                     name="station"
    //                     value={summary.station_id}
    //                   />
    //                   <input
    //                     type="submit"
    //                     className="remove_button_css"
    //                     value={summary.lines_count.toLocaleString()}
    //                   />
    //                 </form>
    //               </Col>
    //               <Col className="data">
    //                 {summary.items_count.toLocaleString()}
    //               </Col>
    //               <Col className="databorder">
    //                 {summary.order_1.toLocaleString()}
    //               </Col>
    //               <Col className="data">{summary.order_2.toLocaleString()}</Col>
    //               <Col className="data">{summary.order_3.toLocaleString()}</Col>
    //               <Col className="databorder">
    //                 {summary.scan_1.toLocaleString()}
    //               </Col>
    //               <Col className="data">{summary.scan_2.toLocaleString()}</Col>
    //               <Col className="data">{summary.scan_3.toLocaleString()}</Col>
    //             </Row>
    //           )}
    //         </Fragment>
    //       ))}

    //       <Row>
    //         <Col></Col>
    //         {section === "0" ? (
    //           <Col align="right">Unassigned SubTotals:</Col>
    //         ) : (
    //           <Col align="right">{sectionName} SubTotals: ------</Col>
    //         )}
    //         <Col className="total">
    //           {items
    //             .filter((item) => item.section_id === section)
    //             ?.reduce((sum, item) => sum + item.lines_count, 0)
    //             .toLocaleString()}
    //         </Col>
    //         <Col className="total">
    //           {items
    //             .filter((item) => item.section_id === section)
    //             ?.reduce((sum, item) => sum + item.items_count, 0)
    //             .toLocaleString()}
    //         </Col>
    //         <Col className="totalborder">
    //           {items
    //             .filter((item) => item.section_id === section)
    //             ?.reduce((sum, item) => sum + item.order_1, 0)
    //             .toLocaleString()}
    //         </Col>
    //         <Col className="total">
    //           {items
    //             .filter((item) => item.section_id === section)
    //             ?.reduce((sum, item) => sum + item.order_2, 0)
    //             .toLocaleString()}
    //         </Col>
    //         <Col className="total">
    //           {items
    //             .filter((item) => item.section_id === section)
    //             ?.reduce((sum, item) => sum + item.order_3, 0)
    //             .toLocaleString()}
    //         </Col>
    //         <Col className="totalborder">
    //           {items
    //             .filter((item) => item.section_id === section)
    //             ?.reduce((sum, item) => sum + item.scan_1, 0)
    //             .toLocaleString()}
    //         </Col>
    //         <Col className="total">
    //           {items
    //             .filter((item) => item.section_id === section)
    //             ?.reduce((sum, item) => sum + item.scan_2, 0)
    //             .toLocaleString()}
    //         </Col>
    //         <Col className="total">
    //           {items
    //             .filter((item) => item.section_id === section)
    //             ?.reduce((sum, item) => sum + item.scan_3, 0)
    //             .toLocaleString()}
    //         </Col>
    //       </Row>
    //     </>
    //   )}

    //   <tfoot>
    //     <Row className="success">
    //       <Col colspan={10} height={30}></Col>
    //     </Row>
    //     <Row className="total_footer">
    //       <Col></Col>
    //       <Col align="right">
    //         <strong>Production SubTotals:</strong>
    //       </Col>
    //       <Col className="total">
    //         {(
    //           items?.reduce((sum, item) => sum + item.lines_count, 0) +
    //           rejects?.reduce((sum, reject) => sum + reject.lines_count, 0)
    //         ).toLocaleString()}
    //       </Col>
    //       <Col className="total">
    //         {(
    //           items?.reduce((sum, item) => sum + item.items_count, 0) +
    //           rejects?.reduce((sum, reject) => sum + reject.items_count, 0)
    //         ).toLocaleString()}
    //       </Col>
    //       <Col className="totalborder">
    //         {(
    //           items?.reduce((sum, item) => sum + item.order_1, 0) +
    //           rejects?.reduce((sum, reject) => sum + reject.order_1, 0)
    //         ).toLocaleString()}
    //       </Col>
    //       <Col className="total">
    //         {(
    //           items?.reduce((sum, item) => sum + item.order_2, 0) +
    //           rejects?.reduce((sum, reject) => sum + reject.order_2, 0)
    //         ).toLocaleString()}
    //       </Col>
    //       <Col className="total">
    //         {(
    //           items?.reduce((sum, item) => sum + item.order_3, 0) +
    //           rejects?.reduce((sum, reject) => sum + reject.order_3, 0)
    //         ).toLocaleString()}
    //       </Col>
    //       <Col className="totalborder">
    //         {(
    //           items?.reduce((sum, item) => sum + item.scan_1, 0) +
    //           rejects?.reduce((sum, reject) => sum + reject.scan_1, 0)
    //         ).toLocaleString()}
    //       </Col>
    //       <Col className="total">
    //         {(
    //           items?.reduce((sum, item) => sum + item.scan_2, 0) +
    //           rejects?.reduce((sum, reject) => sum + reject.scan_2, 0)
    //         ).toLocaleString()}
    //       </Col>
    //       <Col className="total">
    //         {(
    //           items?.reduce((sum, item) => sum + item.scan_3, 0) +
    //           rejects?.reduce((sum, reject) => sum + reject.scan_3, 0)
    //         ).toLocaleString()}
    //       </Col>
    //     </Row>
    //   </tfoot>
    // </div>
    <div></div>
  );
};
export default Rest;

import { useSelector } from "react-redux";
import { CardBody, Col, Row } from "reactstrap";

const Details = () => {
  const { showData } = useSelector((state) => state.batchList);
  return (
    <CardBody>
      <Row className="p-1 pt-0">
        <Col md="1">
          <b>**Route:</b>{" "}
        </Col>
        <Col md="9">
          {showData?.batch?.route && (
            <span>
              <span>
                {showData?.batch?.route?.batch_code}/
                {showData?.batch?.route?.batch_route_name}
                {" => "}
                {showData?.stations}
              </span>
            </span>
          )}
        </Col>
        <Col md="2">
          {showData?.batch?.route?.template ? (
            <span>
              {showData?.batch?.route?.template?.template_name} Template
            </span>
          ) : (
            <span>No Template</span>
          )}
        </Col>
      </Row>
      <Row className="p-1 pt-0">
        <Col md="1">
          <b>Created:</b>
        </Col>
        <Col md="3">{showData?.batch?.creation_date}</Col>
        <Col md="1">
          <b>Last Scan:</b>
        </Col>
        <Col md="3">
          {showData?.last_scan?.date
            ? showData?.last_scan?.date + " by " + showData?.last_scan?.username
            : showData?.batch?.change_date}
        </Col>
        <Col md="1">
          <b>Station:</b>
        </Col>
        <Col md="3">
          {showData?.batch?.station
            ? showData?.batch?.station?.station_name +
              " => " +
              showData?.batch?.station?.station_description
            : "Station Not Found"}
        </Col>
      </Row>
      <Row className="p-1 pt-0">
        <Col md="1">
          <b>Export:</b>
        </Col>
        <Col md="3">
          {showData?.batch?.export_date ? (
            showData?.batch?.export_count == 1 ? (
              <span>
                Exported {showData?.batch?.export_count} time{" "}
                {showData?.batch?.export_date}
              </span>
            ) : (
              <span>
                Exported {showData?.batch?.export_count} times Last export{" "}
                {showData?.batch?.export_date}
              </span>
            )
          ) : (
            "Not Exported"
          )}
        </Col>
        <Col md="4">{showData?.batch?.csv_found != 0 && "CSV File Found"}</Col>
      </Row>
      <Row className="p-1 pt-0">
        <Col md="1">
          <b>Summary:</b>
        </Col>
        {showData?.batch?.summary_date ? (
          <Col md="6">
            <Row>
              <Col md="6">Printed {showData?.batch?.summary_date}</Col>
              <Col md="6">
                {showData?.batch?.summary_count} printed - last by{" "}
                {showData?.batch?.summary_user?.username}
              </Col>
            </Row>
          </Col>
        ) : (
          <Col md="6">Not Printed</Col>
        )}
      </Row>
      <Row className="p-1 pt-0">
        <Col md="1">
          <b>Graphic:</b>
        </Col>
        <Col md="3">{showData?.batch?.graphic_found}</Col>
        {showData?.batch?.to_printer != "0" && (
          <Col md="4">
            <Row>
              <Col md="3">
                <b>Printed:</b>
              </Col>
              <Col md="9">
                {showData?.batch?.to_printer} -{" "}
                {showData?.batch?.to_printer_date}
              </Col>
            </Row>
          </Col>
        )}
      </Row>
      {showData?.related?.length > 0 && (
        <Row className="p-1 pt-0">
          <Col md="1">
            <b>Related:</b>
          </Col>
          <Col md="3">
            {showData?.related?.map((item) => {
              return <span>{item} </span>;
            })}
          </Col>
        </Row>
      )}
    </CardBody>
  );
};

export default Details;

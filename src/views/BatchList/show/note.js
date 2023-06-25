import moment from "moment";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Button, CardBody, Col, Input, Row } from "reactstrap";

const Note = () => {
  const [value, setValue] = useState("");
  const { showData } = useSelector((state) => state.batchList);
  const AddNote = () => {
    console.log(value);
  };
  return (
    <CardBody>
      <Row>
        <Col md="2" className="p-1 border">
          <b>Note</b>
        </Col>
        <Col md="1" className="p-1 border">
          <b>Date</b>
        </Col>
        <Col md="2" className="p-1 border">
        <b>User</b>
        </Col>
        <Col md="1" className="p-1 border">
          <b>Station</b>
        </Col>
        <Col md="2" className="p-1 border">
          <b>Station</b>
        </Col>
        <Col md="2" className="p-1 border">
          <b>Scan In</b>
        </Col>
        <Col md="2" className="p-1 border">
          <b>Scan Out</b>
        </Col>
      </Row>
      <Row>
        <Col md="6">
          {showData?.notes?.map((scan) => {
            return (
              <span>
                <Row className="p-1">
                  <Col md="4">{scan?.note}</Col>
                  <Col md="2">{moment(scan?.created_at).format('DD MM YYYY')}</Col>
                  <Col md="4">{scan?.user?.username}</Col>
                  <Col md="2">{scan?.station?.station_name}</Col>
                </Row>
              </span>
            );
          })}
        </Col>
        <Col md="6">
          {showData?.scans?.map((scan) => {
            return (
              <span>
                <Row className="p-1">
                  <Col md="4">{scan?.station?.station_name}</Col>
                  <Col md="4">
                    {scan?.in_user?.username} {scan?.in_date}
                  </Col>
                  <Col md="4">
                    {scan?.out_user &&
                      scan.out_user.username + " " + scan.out_date}
                  </Col>
                </Row>
              </span>
            );
          })}
        </Col>
      </Row>
      <Row>
        <Col md="4">
          <Input
            type="textarea"
            name="note"
            id="note"
            placeholder="Enter Note"
            value={value}
            onChange={(e) => {setValue(e.target.value)}}
          />
        </Col>
        <Col md="2">
          <Button color="primary" onClick={AddNote}>
            Add Note
          </Button>
        </Col>
      </Row>
    </CardBody>
  );
};

export default Note;

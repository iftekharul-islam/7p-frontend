import React, { useState } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const RejectionModal = ({
  isOpen,
  toggle,
  handleUpload,
  rejectData,
  setRejectData,
}) => {
  const [rejectQty, setRejectQty] = useState(1);
  const [reasonToReject, setReasonToReject] = useState("");
  const [messageToReject, setMessageToReject] = useState("");

  const handleReject = () => {
    handleUpload();
  };

  const handleChange = (name, value) => {
    setRejectData({ ...rejectData, [name]: value });
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle} className="modal-lg">
      <ModalHeader toggle={toggle}>Reject Information</ModalHeader>
      <ModalBody>
        <h5>Inventory</h5>
        <div className="btn-group" data-toggle="buttons">
          <label className="btn btn-default btn-lg" style={{ width: "280px" }}>
            <span className="glyphicon glyphicon-trash" />
            <input type="radio" name="scrap" /> Defective Item Produced
          </label>

          <label className="btn btn-default btn-lg" style={{ width: "280px" }}>
            <input type="radio" name="scrap" /> Nothing Produced
          </label>
        </div>

        <hr />

        <div className="btn-group" data-toggle="buttons">
          <h5>Graphic</h5>
          <label className="btn btn-default btn-lg" style={{ width: "180px" }}>
            <span className="glyphicon glyphicon-print" />
            <input type="radio" name="graphic_status" /> Print Again
          </label>

          <label className="btn btn-default btn-lg" style={{ width: "180px" }}>
            <span className="glyphicon glyphicon-pencil" />
            <input type="radio" name="graphic_status" /> Edit Graphic
          </label>

          <label className="btn btn-default btn-lg" style={{ width: "205px" }}>
            <span className="glyphicon glyphicon-envelope" />
            <input type="radio" name="graphic_status" /> Contact Customer
          </label>
        </div>

        <hr />

        <div className="form-group" id="qty_group">
          Quantity to Reject:{" "}
          <input
            type="number"
            id="reject_qty"
            value={rejectQty}
            min="1"
            onChange={(e) => setRejectQty(e.target.value)}
          />
        </div>

        <div className="form-group">
          <select
            id="reason-to-reject"
            className="form-control"
            value={reasonToReject}
            onChange={(e) => setReasonToReject(e.target.value)}
          >
            <option value="">Select a reason to reject</option>
            {/* Add your options here */}
          </select>
        </div>

        <div className="form-group">
          <textarea
            id="message-to-reject"
            rows={2}
            className="form-control"
            placeholder="More Information"
            value={messageToReject}
            onChange={(e) => setMessageToReject(e.target.value)}
          />
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="default" onClick={toggle} className="btn-lg modal-close">
          Close
        </Button>
        <Button color="danger" onClick={handleReject} className="btn-lg">
          Reject
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default RejectionModal;

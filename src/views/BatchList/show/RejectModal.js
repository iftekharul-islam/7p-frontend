import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import { getRejectOptions, rejectBatch } from "../store";

const RejectionModal = ({ isOpen, toggle, data }) => {
  const dispatch = useDispatch();
  const { rejectOptions } = useSelector((state) => state.batchList);
  const [rejectData, setRejectData] = useState(null);

  const handleChange = (name, value) => {
    setRejectData({ ...rejectData, [name]: value });
  };
  const onRadioChange = (e) => {
    handleChange(e.target.name, e.target.value);
  };

  const handleReject = async () => {
    const res = dispatch(rejectBatch(rejectData));
    if (res?.payload == 201) {
      setRejectShow(!rejectShow);
      getBatchData();
    }
  };

  useEffect(() => {
    dispatch(getRejectOptions());
    setRejectData({ id:data?.id, item_id: data?.item_id, origin: "BD", title: "Batch view" });
  }, [data]);

  return (
    <Modal isOpen={isOpen} toggle={toggle} className="modal-lg">
      <ModalHeader toggle={toggle}>Reject Information</ModalHeader>
      <ModalBody>
        <h5>Inventory</h5>
        <div className="btn-group" data-toggle="buttons">
          <label className="btn btn-default btn-lg" style={{ width: "280px" }}>
            <span className="glyphicon glyphicon-trash" />
            <Input
              type="radio"
              name="scrap"
              value="1"
              onChange={onRadioChange}
            />{" "}
            Defective Item Produced
          </label>

          <label className="btn btn-default btn-lg" style={{ width: "280px" }}>
            <Input
              type="radio"
              name="scrap"
              value="0"
              onChange={onRadioChange}
            />{" "}
            Nothing Produced
          </label>
        </div>

        <hr />

        <div className="btn-group" data-toggle="buttons">
          <h5>Graphic</h5>
          <label className="btn btn-default btn-lg" style={{ width: "180px" }}>
            <span className="glyphicon glyphicon-print" />
            <Input
              type="radio"
              name="graphic_status"
              value="1"
              onChange={onRadioChange}
            />{" "}
            Print Again
          </label>

          <label className="btn btn-default btn-lg" style={{ width: "180px" }}>
            <span className="glyphicon glyphicon-pencil" />
            <Input
              type="radio"
              name="graphic_status"
              value="2"
              onChange={onRadioChange}
            />{" "}
            Edit Graphic
          </label>

          <label className="btn btn-default btn-lg" style={{ width: "205px" }}>
            <span className="glyphicon glyphicon-envelope" />
            <Input
              type="radio"
              name="graphic_status"
              value="4"
              onChange={onRadioChange}
            />{" "}
            Contact Customer
          </label>
        </div>

        <hr />

        <div className="form-group" id="qty_group">
          Quantity to Reject:{" "}
          <Input
            type="number"
            id="reject_qty"
            name="reject_qty"
            value={rejectData?.reject_qty}
            min="1"
            onChange={onRadioChange}
          />
        </div>

        <div className="form-group">
          <Select
            className="select"
            classNamePrefix="react-select"
            name="rejection_reason"
            options={rejectOptions}
            value={rejectOptions?.find(
              (item) => item.value === rejectData?.reasonToReject
            )}
            onChange={(e) => handleChange("rejection_reason", e.value)}
          >
            <option value="">Select a reason to reject</option>
            {/* Add your options here */}
          </Select>
        </div>

        <div className="form-group">
          <Input
            type="textarea"
            id="rejection_message"
            rows={2}
            className="form-control"
            placeholder="More Information"
            name="rejection_message"
            value={rejectData?.rejection_message}
            onChange={onRadioChange}
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

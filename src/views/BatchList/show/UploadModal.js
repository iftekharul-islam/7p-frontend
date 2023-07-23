import React from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Modal,
} from "reactstrap";
import { FileUpload } from "../store";

const UploadModal = ({ show, handleClose, handleUpload, uploadData }) => {
  const dispatch = useDispatch();

  const handleImageChange = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      handleUpload({
        ...uploadData,
        upload_file: file,
      });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!uploadData?.upload_file) {
      alert("Please select a file to upload");
    } else {
      await dispatch(FileUpload(uploadData));
      handleClose();
    }
  };

  return (
    <Modal isOpen={show} toggle={handleClose} className="modal-lg">
      <Card>
        <CardHeader closeButton>
          <CardTitle>Upload a Graphic</CardTitle>
        </CardHeader>
        <CardBody>
          <p>Upload a graphic to the Archive directory.</p>
          <Input
            type="file"
            className="form-control"
            onChange={handleImageChange}
          />
        </CardBody>
        <CardFooter>
          <Button className="success" onClick={handleSubmit}>
            Upload
          </Button>
          <Button className="secondary mx-1" onClick={handleClose}>
            Close
          </Button>
        </CardFooter>
      </Card>
    </Modal>
  );
};

export default UploadModal;

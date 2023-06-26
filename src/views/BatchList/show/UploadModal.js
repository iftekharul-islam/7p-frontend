import React from 'react';
import { Button, Card, CardBody, CardFooter, CardHeader, CardTitle, Modal } from 'reactstrap';

const UploadModal = ({ show, handleClose, handleUpload }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpload(e.target.elements.upload_file.files[0]);
    handleClose();
  };

  return (
    <Modal isOpen={show} toggle={handleClose} className="modal-lg">
      <Card>
      <CardHeader closeButton>
        <CardTitle>Upload a Graphic</CardTitle>
      </CardHeader>
      <CardBody>
        <p>Upload a graphic to the Archive directory.</p>
        <form name="track" onSubmit={handleSubmit} method="post" encType="multipart/form-data">
          <input type="hidden" name="item_id" id="upload_item_id" />
          <input type="hidden" name="batch_number" id="upload_batch_number" />
          <input type="file" name="upload_file" className="form-control" />
        </form>
      </CardBody>
      <CardFooter>
        <Button className="success" onClick={handleSubmit}>Upload</Button>
        <Button className="secondary mx-1" onClick={handleClose}>Close</Button>
      </CardFooter>
      </Card>
    </Modal>
  );
};

export default UploadModal;

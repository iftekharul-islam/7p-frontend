import {
    Button,
    Input,
    Label,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
} from "reactstrap";
const MailModal = (visible, setVisible, data) => {
  return (
    <div>
      <Modal
        isOpen={visible}
        toggle={() => setVisible(!visible)}
        className="modal-dialog-centered"
      >
        <ModalHeader toggle={() => setVisible(!visible)}>
          Enter Tracking Number
        </ModalHeader>
        <ModalBody>
          <div className="mb-2">
            <Label className="form-label" for="email">
              Ship Via
            </Label>
            <Input type="email" id="email" placeholder="Email Address" />
          </div>
          <div className="mb-2">
            <Label className="form-label" for="password">
              Tracking Number
            </Label>
            <Input type="password" id="password" placeholder="Password" />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => setVisible(!visible)}>
            Ship Item
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
export default MailModal;

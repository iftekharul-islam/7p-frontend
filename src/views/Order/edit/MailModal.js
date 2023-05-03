import "@styles/react/libs/editor/editor.scss";
import "@styles/react/libs/react-select/_react-select.scss";
import { selectThemeColors } from "@utils";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import {
  Button,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import { getEmailTypeOptions, sendEmail } from "../store";
const MailModal = (visible, setVisible, data) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  useEffect(() => {
    if (editorState) {
      const html = draftToHtml(convertToRaw(editorState.getCurrentContent()));
      setEmail({ ...email, message: html });
    }
  }, [editorState]);
  const dispatch = useDispatch();
  const store = useSelector((state) => state.orders);
  const [email, setEmail] = useState(null);
  useEffect(() => {
    setEmail({
      order_5p: data?.id,
      recipient: data?.customer?.bill_email,
      subject: `Order ${data?.short_order}`,
      message_types: 0,
      message: "",
    });
  }, [data]);

  useEffect(() => {
    dispatch(getEmailTypeOptions());
  }, []);

  useEffect(() => {
    dispatch(getEmailTypeOptions());
  }, []);

  return (
    <div>
      <Modal
        isOpen={visible}
        toggle={() => setVisible(!visible)}
        className="modal-dialog-centered modal-lg"
        fullscreen="sm"
      >
        <ModalHeader toggle={() => setVisible(!visible)}>
          Send email to customer
        </ModalHeader>
        <ModalBody>
          <div>
            <Label className="form-label" for="email">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              value={email?.recipient}
              onChange={(e) =>
                setEmail({ ...email, recipient: e?.target?.value })
              }
              placeholder="Email Address"
            />
          </div>
          <div>
            <Label className="form-label" for="email">
              Type
            </Label>
            <Select
              className="react-select"
              classNamePrefix="select"
              theme={selectThemeColors}
              placeholder="Select Type"
              options={store?.emailTypeOptions}
              value={store?.emailTypeOptions?.find(
                (item) => item?.value === email?.message_types
              )}
              onChange={(e) => setEmail({ ...email, message_types: e?.value })}
            />
          </div>
          <div>
            <Label className="form-label" for="email">
              Subject
            </Label>
            <Input
              type="text"
              id="text"
              value={email?.subject}
              onChange={(e) => setEmail({ ...email, subject: e?.target?.value })}
              placeholder="Enter Subject"
            />
          </div>
          <div>
            <Editor
              editorState={editorState}
              onEditorStateChange={(data) => setEditorState(data)}
              wrapperClassName="wrapper-class"
              editorClassName="editor-class"
              toolbarClassName="toolbar-class"
            />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={(e) => {
            e.preventDefault();
            dispatch(sendEmail(email));
            setVisible(!visible)}
            }>
            Send
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
export default MailModal;

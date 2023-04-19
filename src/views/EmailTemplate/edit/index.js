import "@styles/react/libs/editor/editor.scss";
import {
  EditorState,
  convertToRaw
} from "draft-js";
import { stateFromHTML } from 'draft-js-import-html';
import draftToHtml from "draftjs-to-html";
import { Fragment, useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Form,
  Input,
  Label,
  Row,
} from "reactstrap";

import {
  UpdateTemplate,
  getEmailTemplateKeywords,
  getTemplate
} from "../store";

const index = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [errors, setErrors] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const store = useSelector((state) => state.emailTemplate);

  const [value, setValue] = useState(EditorState.createEmpty());

  useEffect(() => {
    dispatch(getEmailTemplateKeywords());
    if (id) {
      dispatch(getTemplate(id));
    }
  }, [id]);

  useEffect(() => {
    if (store?.template) {
      setData(store?.template);
      if (store?.template?.message) {
        const contentState = stateFromHTML(store?.template?.message);
        const editorState = EditorState.createWithContent(contentState);
        setValue(editorState);
      }
    }
  }, [store?.template]);

  const onChange = (e) => {
    setData({
      ...data,
      [e.target?.name]: e.target?.value,
    });
  };

  const onSubmit = async () => {
    const res = await dispatch(UpdateTemplate({ id, data }));
    if (res?.payload?.status) {
      navigate("/email-template");
    } else {
      setErrors(res?.payload?.data?.errors);
    }
  };

  return (
    <Fragment>
      <Row>
        <Form>
          <Col sm="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Edit Email Template</CardTitle>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col sm="5">
                    <Row>
                      <Col sm="12">
                        <Label className="form-label" for="message_type">
                          Message type
                        </Label>
                        <Input
                          type="text"
                          name="message_type"
                          id="message_type"
                          placeholder="Enter Message Type"
                          value={data?.message_type}
                          onChange={onChange}
                        />
                        <small className="text-danger">
                          {errors?.message_type}
                        </small>
                      </Col>
                      <Col sm="12">
                        <Label className="form-label" for="message_title">
                          Message subject
                        </Label>
                        <Input
                          type="text"
                          name="message_title"
                          id="message_title"
                          placeholder="Enter Message Subject"
                          value={data?.message_title}
                          onChange={onChange}
                        />
                      </Col>
                      <Col sm="12">
                        <Label className="form-label" for="message">
                          Message template
                        </Label>
                        <Editor
                          editorState={value}
                          onEditorStateChange={(data) => {
                            setValue(data);
                            onChange({
                              target: {
                                name: "message",
                                value: draftToHtml(
                                  convertToRaw(data?.getCurrentContent())
                                ),
                              },
                            });
                          }}
                          placeholder="Enter Message template"
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col sm="12" className="mt-1">
                        <div className="d-flex">
                          <Button
                            className="me-1"
                            color="primary"
                            type="submit"
                            onClick={(e) => {
                              e.preventDefault();
                              onSubmit();
                            }}
                          >
                            Submit
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col sm="7">
                    <Row>
                      <Col sm="12">
                        <h4>email template keywords</h4>
                      </Col>
                      {store?.emailTemplateKeywords?.map((item, index) => {
                        return (
                          <Col sm="6">
                            <p key={index}>{item}</p>
                          </Col>
                        );
                      })}
                    </Row>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Form>
      </Row>
    </Fragment>
  );
};
export default index;

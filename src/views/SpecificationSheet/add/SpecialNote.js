import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { Button, Card, CardBody, Col, Form, Input, Label, Row } from "reactstrap";
import { nextTab, prevTab, setSpecificationData } from "../store";

const SpecialNote = () => {
  const dispatch = useDispatch();

  const onChange = (data) => {
    dispatch(setSpecificationData(data));
  };

  return (
    <Fragment>
      <Row>
        <Form>
          <Col sm="12">
            <Card>
              <CardBody>
                <Row>
                  <Col sm="4">
                    <Label className="form-label" for="product_note">
                      Product Note
                    </Label>
                    <Input
                      type="textarea"
                      name="product_note"
                      Rows="5"
                      id="product_note"
                      placeholder="Product Note"
                      onChange={(e) => onChange({ [e.target.name]: e.target.value })}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col sm="12">
                    <div className="d-flex justify-content-between table-header-actions mx-4 mt-2">
                      <Button
                        className="add-new-user"
                        color="primary"
                        onClick={(e) => {
                          e.preventDefault();
                          dispatch(prevTab());
                        }}
                      >
                        Previous
                      </Button>
                      <Button
                        className="add-new-user"
                        color="primary"
                        onClick={(e) => {
                          e.preventDefault();
                          dispatch(nextTab());
                        }}
                      >
                        Next
                      </Button>
                    </div>
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
export default SpecialNote;

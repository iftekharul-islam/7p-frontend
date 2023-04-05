import { Fragment, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { PlusCircle } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Card,
  Col,
  Form,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from "reactstrap";
import { columns } from "./columns";
import { AddTemplate, getAllData } from "../store";
import "@styles/react/libs/tables/react-dataTable-component.scss";

const index = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.templates);

  useEffect(() => {
    dispatch(getAllData());
  }, []);

  const [addShow, setAddShow] = useState(false);
  const [data, setData] = useState(null);
  const [errors, setErrors] = useState(null);

  const onChange = (e) => {
    setData({
      ...data,
      [e.target?.name]: e.target?.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault()
    const res = await dispatch(AddTemplate(data));
    if (res?.payload?.status) {
      setAddShow(false)
    } else {
      setErrors(res?.payload?.data?.errors);
    }
  };

  const CustomHeader = () => {
    return (
      <div className="invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75">
        <Row>
          <Col xl="10"></Col>
          <Col
            xl="2"
            className="d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1"
          >
            <div className="d-flex align-items-center table-header-actions">
              <Button
                className="add-new-user"
                color="primary"
                onClick={(e) => {
                  e.preventDefault();
                  setAddShow(true);
                }}
              >
                <PlusCircle size={14} /> Route Template
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    );
  };


  return (
    <div className="app-user-list">
      <Fragment>
        <Card className="overflow-hidden">
          <div className="react-dataTable">
            <DataTable
              subHeader
              responsive
              columns={columns}
              className="react-dataTable"
              data={store.data}
              subHeaderComponent={<CustomHeader />}
            />
          </div>
        </Card>
      </Fragment>

      <Modal
        isOpen={addShow}
        toggle={() => setAddShow(!addShow)}
        className="modal-dialog-centered modal-lg"
      >
        <ModalHeader
          className="bg-transparent"
          toggle={() => setAddShow(!addShow)}
        ></ModalHeader>
        <ModalBody className="px-2 pb-2">
          <Form onSubmit={onSubmit}>
          <Row>
            <Col sm="12">
              <Label className="form-label" for="template_name">
                Template Name
              </Label>
              <Input
                type="text"
                name="template_name"
                id="template_name"
                placeholder="Enter Rejection message"
                autoFocus
                value={data?.template_name}
                onChange={onChange}
              />
              <small className="text-danger">{errors?.template_name}</small>
            </Col>
          </Row>
          <Row>
            <Col sm="12" className="mt-1">
              <div className="d-flex justify-content-center">
                <Button
                  className="me-1"
                  color="primary"
                  type="submit"
                >
                  Submit
                </Button>
              </div>
            </Col>
          </Row>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};
export default index;

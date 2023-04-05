import { Edit, Trash2 } from "react-feather";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Col, Modal, ModalBody, ModalHeader, Row } from "reactstrap";
import { DeleteTemplate } from "../store";


const renderAction = (row) => {
  const dispatch = useDispatch();
  const [deleteItem, setDeleteItem] = useState(null);
  const [deleteShow, setDeleteShow] = useState(false);

  const onSubmitDelete = (e) => {
    e.preventDefault();
    dispatch(DeleteTemplate(deleteItem.id));
    setDeleteShow(!deleteShow);
  };

  return (
    <div className="column-action">
      <Link
        className="text-truncate text-capitalize align-middle"
        to={`/template-edit/${row.id}`}
      >
        <Edit size={18} className={`text-danger me-50`} />
      </Link>
      <Link
        className="text-truncate text-capitalize align-middle"
        onClick={(e) => {
          e.preventDefault();
          setDeleteItem(row);
          setDeleteShow(true);
        }}
      >
        <Trash2 size={18} className={`text-danger me-50`} />
      </Link>

      <Modal
        isOpen={deleteShow}
        toggle={() => setDeleteShow(!deleteShow)}
        className="modal-dialog-centered modal-lg"
      >
        <ModalHeader
          className="bg-transparent"
          toggle={() => setDeleteShow(!deleteShow)}
        ></ModalHeader>
        <ModalBody className="px-2 pb-2">
          <div className="text-center mb-4">
            <h1>Are you sure to delete?</h1>
          </div>
          <Row tag="form" onSubmit={onSubmitDelete}>
            <Col className="text-center mt-2" xs={12}>
              <Button type="submit" color="danger" className="me-1">
                Confirm
              </Button>
              <Button
                // type="reset"
                outline
                onClick={() => setDeleteShow(!deleteShow)}
              >
                Cancel
              </Button>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </div>
  );
};

export const columns = [
  {
    name: "",
    sortable: false,
    minWidth: "20px",
    sortField: "template_name",
    selector: (row) => row.template_name,
    cell: (row) => <span className="fw-bolder"></span>,
  },
  {
    name: "Template Name",
    sortable: false,
    minWidth: "320px",
    sortField: "template_name",
    selector: (row) => row.template_name,
    cell: (row) => <span className="fw-bolder">{row.template_name}</span>,
  },
  {
    name: "",
    sortable: false,
    minWidth: "320px",
    sortField: "rejection_message",
    selector: (row) => row.rejection_message,
    cell: (row) => <span className="fw-bolder"></span>,
  },
  {
    name: "Status",
    minWidth: "60px",
    selector: (row) => row.is_active,
    cell: (row) => <span>{row?.is_active ? 'Active' : 'Deactive'}</span>,
  },
  {
    name: "Actions",
    minWidth: "40px",
    cell: (row) => renderAction(row),
  },
  // {
  //   name: "",
  //   sortable: false,
  //   minWidth: "320px",
  //   sortField: "rejection_message",
  //   selector: (row) => row.rejection_message,
  //   cell: (row) => <span className="fw-bolder"></span>,
  // },
];

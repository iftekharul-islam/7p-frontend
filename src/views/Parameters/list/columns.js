import { ArrowDown, ArrowUp, Trash2 } from "react-feather";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Col, Modal, ModalBody, ModalHeader, Row } from "reactstrap";
import { DeleteParameter, sortOrderReason } from "../store";

const renderAction = (row) => {
  const dispatch = useDispatch();
  const [deleteItem, setDeleteItem] = useState(null);
  const [deleteShow, setDeleteShow] = useState(false);

  const onSubmitDelete = (e) => {
    e.preventDefault();
    dispatch(DeleteParameter(deleteItem.id));
    setDeleteShow(!deleteShow);
  };

  const onSort = (direction) => {
    dispatch(sortOrderReason({ direction, id: row?.id }));
  };
  return (
    <div className="column-action">
      <Link
        className="text-truncate text-capitalize align-middle"
        onClick={(e) => {
          e.preventDefault();
          onSort("up");
        }}
      >
        <ArrowUp size={18} className={`text-primary me-50`} />
      </Link>
      <Link
        className="text-truncate text-capitalize align-middle"
        onClick={(e) => {
          e.preventDefault();
          onSort("down");
        }}
      >
        <ArrowDown size={18} className={`text-primary me-50`} />
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
    sortField: "rejection_message",
    selector: (row) => row.rejection_message,
    cell: (row) => <span className="fw-bolder"></span>,
  },
  {
    name: "Parameters",
    sortable: false,
    minWidth: "320px",
    sortField: "parameter_value",
    selector: (row) => row.parameter_value,
    cell: (row) => <span className="fw-bolder">{row.parameter_value}</span>,
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
    name: "Actions",
    minWidth: "100px",
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

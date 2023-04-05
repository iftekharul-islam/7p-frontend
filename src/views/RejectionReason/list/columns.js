import { ArrowDown, ArrowUp, Trash2 } from "react-feather";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Col, Modal, ModalBody, ModalHeader, Row } from "reactstrap";
import { DeleteReason, sortOrderReason } from "../store";

const renderSort = (row, index) => {
  const dispatch = useDispatch();
  const {data} = useSelector(state => state.reasons)

  const onSort = (direction) => {
    dispatch(sortOrderReason({ direction, id: row?.id }));
  };
  return (
    <div className="column-action">
      {index > 0 && (
        <Link
          className="text-truncate text-capitalize align-middle"
          onClick={(e) => {
            e.preventDefault();
            onSort("up");
          }}
        >
          <ArrowUp size={18} className={`text-primary me-50`} />
        </Link>
      )}
      {index < data?.length-1 && (
        <Link
          className="text-truncate text-capitalize align-middle"
          onClick={(e) => {
            e.preventDefault();
            onSort("down");
          }}
        >
          <ArrowDown size={18} className={`text-primary me-50`} />
        </Link>
      )}
    </div>
  );
};

const renderAction = (row) => {
  const dispatch = useDispatch();
  const [deleteItem, setDeleteItem] = useState(null);
  const [deleteShow, setDeleteShow] = useState(false);

  const onSubmitDelete = (e) => {
    e.preventDefault();
    dispatch(DeleteReason(deleteItem.id));
    setDeleteShow(!deleteShow);
  };

  return (
    <div className="column-action">
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
    name: "Rejection Message",
    sortable: false,
    minWidth: "320px",
    sortField: "rejection_message",
    selector: (row) => row.rejection_message,
    cell: (row) => <span className="fw-bolder">{row.rejection_message}</span>,
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
    name: "Sorting",
    minWidth: "60px",
    cell: (row, index) => renderSort(row, index),
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

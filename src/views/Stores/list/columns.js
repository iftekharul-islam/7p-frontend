import { useState } from "react";
import { ArrowDown, ArrowUp, Edit, Eye, EyeOff, Menu } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Button,
  Col,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
  UncontrolledTooltip,
} from "reactstrap";
import { UpdateVisibility, sortStore } from "../store";

const renderSort = (row, index) => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.stores);

  const onSort = (direction) => {
    dispatch(sortStore({ direction, id: row?.id }));
  };
  return (
    <div className="column-action">
      {index > 0 ? (
        <>
          <Link
            className="text-truncate text-capitalize align-middle"
            onClick={(e) => {
              e.preventDefault();
              onSort("up");
            }}
            id={`up-${row.id}`}
          >
            <ArrowUp size={18} className={`text-primary me-50`} />
          </Link>
          <UncontrolledTooltip placement="top" target={`up-${row.id}`}>
            Move Up
          </UncontrolledTooltip>
        </>
      ) : (
        <span className="text-truncate text-capitalize align-middle text-white">
          aaa
        </span>
      )}
      {index < data?.length - 1 && (
        <>
          <Link
            className="text-truncate text-capitalize align-middle"
            onClick={(e) => {
              e.preventDefault();
              onSort("down");
            }}
            id={`down-${row.id}`}
          >
            <ArrowDown size={18} className={`text-primary me-50`} />
          </Link>
          <UncontrolledTooltip placement="top" target={`down-${row.id}`}>
            Move Up
          </UncontrolledTooltip>
        </>
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
    // dispatch(DeleteReason(deleteItem.id));
    setDeleteShow(!deleteShow);
  };

  const updateVisibility = (id) => {
    dispatch(UpdateVisibility(id));
  };

  return (
    <div className="column-action">
      <Link
        className="text-truncate text-capitalize align-middle"
        onClick={(e) => {
          e.preventDefault();
          updateVisibility(row?.id);
        }}
        id={`view-${row.id}`}
      >
        {row?.invisible == "0" ? (
          <Eye size={18} className={`text-danger me-50`} />
        ) : (
          <EyeOff size={18} className={`text-danger me-50`} />
        )}
      </Link>
      <Link
        className="text-truncate text-capitalize align-middle"
        onClick={(e) => {
          e.preventDefault();
          setDeleteItem(row);
          setDeleteShow(true);
        }}
        id={`edit-${row.id}`}
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
        id={`map-${row.id}`}
      >
        <Menu size={18} className={`text-danger me-50`} />
        {row?.store_items?.length > 0 && `(${row?.store_items?.length})`}
      </Link>

      <UncontrolledTooltip placement="top" target={`view-${row.id}`}>
        {row?.invisible == "0" ? "Hide Store" : "Show Store"}
      </UncontrolledTooltip>
      <UncontrolledTooltip placement="top" target={`map-${row.id}`}>
        Map Store Items
      </UncontrolledTooltip>
      <UncontrolledTooltip placement="top" target={`edit-${row.id}`}>
        Edit
      </UncontrolledTooltip>
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
    name: "Store Name",
    sortable: false,
    minWidth: "30px",
    sortField: "store_name",
    selector: (row) => row.store_name,
    cell: (row) => <span className="fw-bolder">{row.store_name}</span>,
  },
  {
    name: "ID",
    sortable: false,
    minWidth: "120px",
    sortField: "store_id",
    selector: (row) => row.store_id,
    cell: (row) => <span className="fw-bolder">{row.store_id}</span>,
  },
  {
    name: "Company",
    sortable: false,
    minWidth: "180px",
    sortField: "company",
    selector: (row) => row.company,
    cell: (row) => <span className="fw-bolder">{row.company}</span>,
  },
  {
    name: "Sorting",
    minWidth: "60px",
    cell: (row, index) => renderSort(row, index),
  },
  {
    name: "Actions",
    minWidth: "120px",
    cell: (row) => renderAction(row),
  },
];

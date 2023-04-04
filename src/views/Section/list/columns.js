import { useState } from "react";
import { Edit, Eye, Trash2 } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Col, Modal, ModalBody, ModalHeader, Row } from "reactstrap";
import { DeleteSection } from "../store";

const renderAction = (row) => {
  const dispatch = useDispatch();
  const [deleteItem, setDeleteItem] = useState(null);
  const [deleteShow, setDeleteShow] = useState(false);

  const onSubmitDelete = (e) => {
    e.preventDefault();
    dispatch(DeleteSection(deleteItem.id));
    setDeleteShow(!deleteShow);
  };

  return (
    <div className="column-action">
      <Link
        className="text-truncate text-capitalize align-middle"
        to={`/section-edit/${row.id}`}
      >
        <Edit size={18} className={`text-primary me-50`} />
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
    name: "Section Name",
    sortable: false,
    minWidth: "180px",
    sortField: "section_name",
    selector: (row) => row.section_name,
    cell: (row) => <span className="fw-bolder">{row.section_name}</span>,
  },
  {
    name: "Summaries",
    sortable: false,
    minWidth: "220px",
    sortField: "summaries",
    selector: (row) => row.summaries,
    cell: (row) => {
      const { summaryOption } = useSelector((state) => state.sections);
      return (
        <span>
          {summaryOption?.find((item) => item?.value == row.summaries)?.label}
        </span>
      );
    },
  },
  {
    name: "Buttons",
    sortable: false,
    minWidth: "100px",
    sortField: "start_finish",
    selector: (row) => row.start_finish,
    cell: (row) => {
      const { startFinishOption } = useSelector((state) => state.sections);
      return (
        <span>
          {startFinishOption?.find((item) => item?.value == row.start_finish)?.label}
        </span>
      );
    },
  },
  {
    name: "User Scan",
    sortable: false,
    minWidth: "220px",
    sortField: "same_user",
    selector: (row) => row.same_user,
    cell: (row) => {
      const { sameUserOption } = useSelector((state) => state.sections);
      return (
        <span>
          {sameUserOption?.find((item) => item?.value == row.same_user)?.label}
        </span>
      );
    },
  },
  {
    name: "Labels",
    sortable: false,
    minWidth: "120px",
    sortField: "print_label",
    selector: (row) => row.print_label,
    cell: (row) => {
      const { printLabelOption } = useSelector((state) => state.sections);
      return (
        <span>
          {printLabelOption?.find((item) => item?.value == row.print_label)?.label}
        </span>
      );
    },
  },
  {
    name: "Picking",
    sortable: false,
    minWidth: "120px",
    sortField: "inventory",
    selector: (row) => row.inventory,
    cell: (row) => {
      const { inventoryOption } = useSelector((state) => state.sections);
      return (
        <span>
          {inventoryOption?.find((item) => item?.value == row.inventory)?.label}
        </span>
      );
    },
  },
  {
    name: "Inventory",
    sortable: false,
    minWidth: "120px",
    sortField: "inv_control",
    selector: (row) => row.inv_control,
    cell: (row) => {
      const { invControlOption } = useSelector((state) => state.sections);
      return (
        <span>
          {invControlOption?.find((item) => item?.value == row.inv_control)?.label}
        </span>
      );
    },
  },
  {
    name: "Actions",
    minWidth: "100px",
    cell: (row) => renderAction(row),
  },
];

import { useState } from "react";
import { Edit, Eye, Trash2 } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Col, Modal, ModalBody, ModalHeader, Row } from "reactstrap";
import { DeleteCategories } from "../store";

const renderAction = (row) => {
  const dispatch = useDispatch();
  const [deleteItem, setDeleteItem] = useState(null);
  const [deleteShow, setDeleteShow] = useState(false);

  const onSubmitDelete = (e) => {
    e.preventDefault();
    dispatch(DeleteCategories(deleteItem.id));
    setDeleteShow(!deleteShow);
  };

  return (
    <div className="column-action">
      <Link
        className="text-truncate text-capitalize align-middle"
        to={`/category-edit/${row.id}`}
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
    name: "Category Code",
    sortable: false,
    minWidth: "120px",
    sortField: "production_category_code",
    selector: (row) => row.production_category_code,
    cell: (row) => <span>{row.production_category_code}</span>,
  },
  {
    name: "category description",
    sortable: false,
    minWidth: "300px",
    sortField: "production_category_description",
    selector: (row) => row.production_category_description,
    cell: (row) => <span>{row.production_category_description}</span>,
  },
  {
    name: "category display order",
    sortable: false,
    minWidth: "60px",
    sortField: "production_category_display_order",
    selector: (row) => row.production_category_display_order,
    cell: (row) => <span>{row.production_category_display_order ?? 0}</span>,
  },
  {
    name: "Actions",
    minWidth: "100px",
    cell: (row) => renderAction(row),
  },
];

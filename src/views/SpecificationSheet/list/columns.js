import { useState } from "react";
import { Edit, Printer, Trash2 } from "react-feather";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Col, Modal, ModalBody, ModalHeader, Row } from "reactstrap";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { DeleteSpecifiction } from "../store";

const renderAction = (row) => {
  const dispatch = useDispatch();
  const [deleteItem, setDeleteItem] = useState(null);
  const [deleteShow, setDeleteShow] = useState(false);

  const onSubmitDelete = (e) => {
    e.preventDefault();
    dispatch(DeleteSpecifiction(deleteItem.id));
    setDeleteShow(!deleteShow);
  };

  return (
    <div className="column-action">
      <Link
        className="text-truncate text-capitalize align-middle"
        to={`/specification-product-edit/${row.id}`}
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
      <Link
        className="text-truncate text-capitalize align-middle"
        onClick={(e) => {
          e.preventDefault();
          const MySwal = withReactContent(Swal);
          MySwal.fire({
            position: "top-end",
            icon: "error",
            title: "This feature is not available yet",
            showConfirmButton: false,
            timer: 1500,
          });
        }}
      >
        <Printer size={18} className={`text-danger me-50`} />
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
    name: "Product Spec name",
    sortable: false,
    minWidth: "540px",
    sortField: "product_description",
    selector: (row) => row.product_description,
    cell: (row) => <span className="fw-bolder">{row.product_description}</span>,
  },
  {
    name: "Production category",
    sortable: false,
    minWidth: "180px",
    sortField: "production_category",
    selector: (row) => row?.production_category,
    cell: (row) => <span>{row.production_category}</span>,
  },
  {
    name: "SKU",
    sortable: false,
    minWidth: "120px",
    sortField: "product_sku",
    selector: (row) => row.product_sku,
    cell: (row) => <span>{row?.product_sku}</span>,
  },
  {
    name: "Web image status",
    sortable: false,
    minWidth: "120px",
    sortField: "web_image_status",
    selector: (row) => row.web_image_status,
    cell: (row) => <span>{row?.web_image_status}</span>,
  },
  {
    name: "Actions",
    minWidth: "120px",
    cell: (row) => renderAction(row),
  },
];

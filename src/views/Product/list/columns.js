import { useState } from "react";
import { Edit, Trash2 } from "react-feather";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Col, Modal, ModalBody, ModalHeader, Row } from "reactstrap";
import { DeleteProduct } from "../store";

const renderAction = (row) => {
  const dispatch = useDispatch()
  const [deleteItem, setDeleteItem] = useState(null);
  const [deleteShow, setDeleteShow] = useState(false);

  const onSubmitDelete = (e) => {
    e.preventDefault()
    dispatch(DeleteProduct(deleteItem.id))
    setDeleteShow(!deleteShow)
  }
  
  return (
    <div className="column-action">
      <Link
        className="text-truncate text-capitalize align-middle"
        to={`/product-edit/${row.id}`}
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
    name: "Stock",
    sortable: true,
    minWidth: "120px",
    sortField: "stock_no",
    selector: (row) => row?.stock_no,
    cell: (row) => (
      <div>
        <div>
          <span className="fw-bolder">{row?.stock_no}</span>
        </div>
        <div>
          <span>{row?.inventory?.stock_name_discription}</span>
        </div>
      </div>
    ),
  },
  {
    name: "Price",
    sortable: false,
    minWidth: "120px",
    sortField: "price",
    selector: (row) => row.unit_price,
    cell: (row) => (
      <div>
        <div>
          <span className="fw-bolder">${row.unit_price}</span>
        </div>
        <div>
          <span className="fw-bolder">
            {row.unit_qty}-{row.unit}
          </span>
        </div>
      </div>
    ),
  },
  {
    name: "Vendor",
    sortable: false,
    minWidth: "320px",
    sortField: "vendor",
    selector: (row) => row.vendor,
    cell: (row) => (
      <div>
        <div>
          <span className="fw-bolder">{row?.vendor?.vendor_name}:</span>
          <span> {row?.vendor_sku}</span>
        </div>
        <div>
          <span>{row?.vendor_sku_name}</span>
        </div>
      </div>
    ),
  },
  {
    name: "Lead Time",
    sortable: true,
    minWidth: "100px",
    sortField: "lead_time_days",
    selector: (row) => row.lead_time_days,
    cell: (row) => (
      <span className="text-capitalize">{row?.lead_time_days}</span>
    ),
  },
  {
    name: "Actions",
    minWidth: "100px",
    cell: (row) => renderAction(row),
  },
];

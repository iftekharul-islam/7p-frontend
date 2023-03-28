import moment from "moment";
import { useState } from "react";
import { Edit, Eye, Trash2 } from "react-feather";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Col, Modal, ModalBody, ModalHeader, Row } from "reactstrap";
import { DeleteVendor } from "../store";

const renderAction = (row) => {

  const dispatch = useDispatch()
  const [deleteItem, setDeleteItem] = useState(null);
  const [deleteShow, setDeleteShow] = useState(false);

  const onSubmitDelete = (e) => {
    e.preventDefault()
    dispatch(DeleteVendor(deleteItem.id))
    setDeleteShow(!deleteShow)
  }

  return (
    <div className="column-action">
      <Link
        className="text-truncate text-capitalize align-middle"
        to={`/vendor-view/${row.id}`}
      >
        <Eye size={18} className={`text-primary me-50`} />
      </Link>
      <Link
        className="text-truncate text-capitalize align-middle"
        to={`/vendor-edit/${row.id}`}
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
  )
}

export const columns = [
  {
    name: "Purchase Order",
    sortable: false,
    minWidth: "100px",
    sortField: "id",
    selector: (row) => row.po_number,
    cell: (row) => <span className="fw-bolder">{row.po_number}</span>
  },{
    name: "Date",
    sortable: false,
    minWidth: "120px",
    sortField: "name",
    selector: (row) => row.po_date,
    cell: (row) => <span className="fw-bolder">{moment(row.po_date).format("DD MMM YYYY")}</span>
  },
  {
    name: "Vendor",
    sortable: false,
    minWidth: "180px",
    sortField: "email",
    selector: (row) => row.email,
    cell: (row) => <span className="fw-bolder">{row.vendor?.name}</span>
  },
  {
    name: "Products",
    sortable: false,
    minWidth: "100px",
    sortField: "phone_number",
    selector: (row) => row.phone_number,
    cell: (row) => <span className="text-capitalize">6</span>
  },
  {
    name: "Balance",
    sortable: false,
    minWidth: "100px",
    sortField: "phone_number",
    selector: (row) => row.phone_number,
    cell: (row) => <span className="text-capitalize">6</span>
  },
  {
    name: "Tracking",
    sortable: false,
    minWidth: "100px",
    sortField: "phone_number",
    selector: (row) => row.phone_number,
    cell: (row) => <span className="text-capitalize">{row?.tracking}</span>
  },
  {
    name: "Actions",
    minWidth: "100px",
    cell: (row) => renderAction(row)
  }
]

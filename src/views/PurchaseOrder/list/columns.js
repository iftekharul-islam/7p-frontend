import moment from "moment";
import { useState } from "react";
import { CheckCircle, Edit, Eye, Printer, Send, Trash2 } from "react-feather";
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
import { DeleteOrder } from "../store";

const renderAction = (row) => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.purchaseOrders);
  const [deleteItem, setDeleteItem] = useState(null);
  const [deleteShow, setDeleteShow] = useState(false);

  const onSubmitDelete = (e) => {
    e.preventDefault();
    dispatch(DeleteOrder(deleteItem.id));
    setDeleteShow(!deleteShow);
  };

  return (
    <div className="column-action">
      {store?.params?.status == 1 ? (
        <>
          <Link
            className="text-truncate text-capitalize align-middle"
            to={`/purchase-order-view/${row.id}`}
            id={`view-${row.id}`}
          >
            <Eye size={18} className={`text-primary me-50`} />
          </Link>
          <Link
            className="text-truncate text-capitalize align-middle"
            to={`/purchase-order-edit/${row.id}`}
            id={`edit-${row.id}`}
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
            id={`delete-${row.id}`}
          >
            <Trash2 size={18} className={`text-danger me-50`} />
          </Link>
          <Link
            className="text-truncate text-capitalize align-middle"
            to={`/purchase-order-receive/${row.id}`}
            id={`receive-${row.id}`}
          >
            <CheckCircle size={18} className={`text-danger me-50`} />
          </Link>
          <Link
            className="text-truncate text-capitalize align-middle"
            onClick={(e) => {
              e.preventDefault();
            }}
            id={`print-${row.id}`}
          >
            <Printer size={18} className={`text-danger me-50`} />
          </Link>
          <Link
            className="text-truncate text-capitalize align-middle"
            onClick={(e) => {
              e.preventDefault();
            }}
            id={`send-${row.id}`}
          >
            <Send size={18} className={`text-danger me-50`} />
          </Link>

          <UncontrolledTooltip placement="top" target={`view-${row.id}`}>
            Preview Order
          </UncontrolledTooltip>
          <UncontrolledTooltip placement="top" target={`edit-${row.id}`}>
            Edit Order
          </UncontrolledTooltip>
          <UncontrolledTooltip placement="top" target={`delete-${row.id}`}>
            Delete Order
          </UncontrolledTooltip>
          <UncontrolledTooltip placement="top" target={`receive-${row.id}`}>
            Receive Order
          </UncontrolledTooltip>
          <UncontrolledTooltip placement="top" target={`print-${row.id}`}>
            Print Order
          </UncontrolledTooltip>
          <UncontrolledTooltip placement="top" target={`send-${row.id}`}>
            Send Order
          </UncontrolledTooltip>
        </>
      ) : (
        <>
          <Link
            className="text-truncate text-capitalize align-middle"
            onClick={(e) => {
              e.preventDefault();
            }}
            id={`print-${row.id}`}
          >
            <Printer size={18} className={`text-danger me-50`} />
          </Link>
          <UncontrolledTooltip placement="top" target={`print-${row.id}`}>
            Print Order
          </UncontrolledTooltip>
        </>
      )}

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
    name: "Purchase Order",
    sortable: false,
    minWidth: "100px",
    sortField: "po_number",
    selector: (row) => row.po_number,
    cell: (row) => (
      <Link
        className="text-truncate text-capitalize align-middle"
        to={`/order-view/${row.id}`}
      >
        <span className="fw-bolder">{row.po_number}</span>
      </Link>
    ),
  },
  {
    name: "Date",
    sortable: false,
    minWidth: "120px",
    sortField: "po_date",
    selector: (row) => row.po_date,
    cell: (row) => (
      <span className="fw-bolder">
        {moment(row.po_date).format("DD MMM YYYY")}
      </span>
    ),
  },
  {
    name: "Vendor",
    sortable: false,
    minWidth: "180px",
    sortField: "vendor_name",
    selector: (row) => row.vendor_name,
    cell: (row) => (
      <Link
        className="text-truncate text-capitalize align-middle"
        to={`/vendor-view/${row?.vendor?.id}`}
      >
        <span className="fw-bolder">{row.vendor?.vendor_name}</span>
      </Link>
    ),
  },
  {
    name: "Products",
    sortable: false,
    minWidth: "100px",
    sortField: "total_products",
    selector: (row) => row.total_products,
    cell: (row) => (
      <span className="text-capitalize">{row?.total_products}</span>
    ),
  },
  {
    name: "Balance",
    sortable: false,
    minWidth: "100px",
    sortField: "total_balance",
    selector: (row) => row.total_balance,
    cell: (row) => (
      <span className="text-capitalize">{row?.total_balance}</span>
    ),
  },
  {
    name: "Tracking",
    sortable: false,
    minWidth: "100px",
    sortField: "tracking",
    selector: (row) => row.tracking,
    cell: (row) => <span className="text-capitalize">{row?.tracking}</span>,
  },
  {
    name: "Actions",
    minWidth: "100px",
    cell: (row) => renderAction(row),
  },
];

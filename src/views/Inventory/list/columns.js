import { useState } from "react";
import { Edit, Eye, Trash2 } from "react-feather";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Col, Input, Modal, ModalBody, ModalHeader, Row } from "reactstrap";
import { DeleteVendor } from "../store";

const renderAction = (row) => {
  const dispatch = useDispatch();
  const [deleteItem, setDeleteItem] = useState(null);
  const [deleteShow, setDeleteShow] = useState(false);

  const onSubmitDelete = (e) => {
    e.preventDefault();
    dispatch(DeleteVendor(deleteItem.id));
    setDeleteShow(!deleteShow);
  };

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
  );
};

export const columns = [
  {
    name: "Image",
    sortable: false,
    minWidth: "60px",
    sortField: "warehouse",
    selector: (row) => row.warehouse,
    cell: (row) => <img src={row.warehouse} height="50" width="50" />,
  },
  {
    name: "Inventory Item",
    sortable: false,
    minWidth: "320px",
    sortField: "stock_no",
    selector: (row) => row.stock_no_unique,
    cell: (row) => (
      <div>
        <div>
          {row?.stock_no_unique} : {row?.stock_name_discription}
        </div>
        <small>{row?.section?.section_name}</small>
        <div>Action Button</div>
      </div>
    ),
  },
  {
    name: "Bin",
    sortable: false,
    minWidth: "220px",
    sortField: "email",
    selector: (row) => row.wh_bin,
    cell: (row) => (
      <div>
        <Input
          type="text"
          name="vendor_name"
          id="vendor_name"
          placeholder="Name"
          value={row?.wh_bin}
          // onChange={onChange}
        />
        <Button
          className="me-1"
          color="primary"
          type="submit"
          // onClick={(e) => {
          //   e.preventDefault();
          //   onSubmit();
          // }}
        >
          Submit
        </Button>
      </div>
    ),
  },
  {
    name: "Phone",
    sortable: false,
    minWidth: "220px",
    sortField: "phone_number",
    selector: (row) => row.phone_number,
    cell: (row) => <span className="text-capitalize">{row?.phone_number}</span>,
  },
  {
    name: "Actions",
    minWidth: "100px",
    cell: (row) => renderAction(row),
  },
];

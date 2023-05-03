import moment from "moment";
import { CheckSquare, XCircle } from "react-feather";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { UncontrolledTooltip } from "reactstrap";
import { updateAdjustInventoryData } from "../store";

const renderAction = (row) => {
  const dispatch = useDispatch();

  const onUpdate = (term) => {
    const qData = {
      rejection_id: row?.id,
      action: term,
    };
    dispatch(updateAdjustInventoryData(qData));
  };

  return (
    <>
      <Link
        className="text-truncate text-capitalize align-middle"
        to='/'
        onClick={(e) => {
          e.preventDefault();
          onUpdate("scrap");
        }}
        id={`adjust-${row.id}`}
      >
        <CheckSquare size={18} className={`text-primary me-50`} />
        <UncontrolledTooltip placement="top" target={`adjust-${row.id}`}>
          Adjust Inventory
        </UncontrolledTooltip>
      </Link>
      <Link
        className="text-truncate text-capitalize align-middle"
        to='/'
        onClick={(e) => {
          e.preventDefault();
          onUpdate("ignore");
        }}
        id={`ignore-${row.id}`}
      >
        <XCircle size={18} className={`text-primary me-50`} />
        <UncontrolledTooltip placement="top" target={`ignore-${row.id}`}>
          Ignore
        </UncontrolledTooltip>
      </Link>
    </>
  );
};
export const productionRejectscolumns = [
  {
    name: "Date",
    sortable: false,
    minWidth: "180px",
    sortField: "created_at",
    selector: (row) => row?.created_at,
    cell: (row) => (
      <span>{moment(row?.created_at).format("YYYY-MM-DD hh:mm:ss")}</span>
    ),
  },
  {
    name: "Stock Number",
    sortable: false,
    minWidth: "150px",
    sortField: "stock_no_unique",
    selector: (row) => row?.item?.inventoryunit,
    cell: (row) => (
      <span>
        {row?.item?.inventoryunit?.map((item) => {
          return <div>{item?.stock_no_unique}</div>;
        })}
      </span>
    ),
  },
  {
    name: "Item ID",
    sortable: false,
    minWidth: "100px",
    sortField: "item_id",
    selector: (row) => row.item_id,
    cell: (row) => <span>{row?.item_id ?? "--"}</span>,
  },
  {
    name: "Status",
    sortable: false,
    minWidth: "100px",
    sortField: "graphic_status",
    selector: (row) => row.graphic_status,
    cell: (row) => (
      <span className="text-capitalize">{row?.graphic_status}</span>
    ),
  },
  {
    name: "Reason",
    minWidth: "150px",
    sortField: "rejection_message",
    selector: (row) => row.rejection_message,
    cell: (row) => (
      <span className="text-capitalize">
        {row?.rejection_reason_info?.rejection_message}
      </span>
    ),
  },
  {
    name: "Message",
    minWidth: "300px",
    sortField: "rejection_message",
    selector: (row) => row.rejection_message,
    cell: (row) => (
      <span className="text-capitalize">{row?.rejection_message ?? "--"}</span>
    ),
  },
  {
    name: "User",
    minWidth: "100px",
    sortField: "user",
    selector: (row) => row.user,
    cell: (row) => <span className="text-capitalize">{row?.user?.name}</span>,
  },
  {
    name: "Quantity",
    minWidth: "100px",
    sortField: "reject_qty",
    selector: (row) => row.reject_qty,
    cell: (row) => <span className="text-capitalize">{row?.reject_qty}</span>,
  },
  {
    name: "Action",
    minWidth: "100px",
    sortField: "user",
    selector: (row) => row,
    cell: (row) => renderAction(row),
  },
];

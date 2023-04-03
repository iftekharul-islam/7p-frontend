import moment from "moment";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setActive } from "../store";

export const viewAdjustmentcolumns = [
  {
    name: "Date",
    sortable: false,
    minWidth: "120px",
    sortField: "created_at",
    selector: (row) => row?.created_at,
    cell: (row) => (
      <span>{moment(row?.created_at).format("YYYY-MM-DD hh:mm:ss")}</span>
    ),
  },
  {
    name: "Stock Number",
    sortable: false,
    minWidth: "120px",
    sortField: "stock_no_unique",
    selector: (row) => row.stock_no_unique,
    cell: (row) => {
      const dispatch = useDispatch();
      return (
        <Link
          to={`/adjustment?qStockNumber=${row.stock_no_unique}`}
          onClick={() => dispatch(setActive("2"))}
        >
          <span>{row.stock_no_unique}</span>
        </Link>
      );
    },
  },
  {
    name: "Description",
    sortable: false,
    minWidth: "320px",
    sortField: "inventory",
    selector: (row) => row.inventory,
    cell: (row) => (
      <span>
        {row?.inventory?.stock_name_discription ?? "Inventory not found"}:
      </span>
    ),
  },
  {
    name: "Quantity",
    sortable: true,
    minWidth: "100px",
    sortField: "quantity",
    selector: (row) => row.quantity,
    cell: (row) => <span className="text-capitalize">{row?.quantity}</span>,
  },
  {
    name: "Type",
    minWidth: "150px",
    sortField: "type",
    selector: (row) => row.type,
    cell: (row) => <span className="text-capitalize">{row?.type}</span>,
  },
  {
    name: "Note",
    minWidth: "300px",
    sortField: "note",
    selector: (row) => row.note,
    cell: (row) => <span className="text-capitalize">{row?.note}</span>,
  },
  {
    name: "User",
    minWidth: "100px",
    sortField: "user",
    selector: (row) => row.user,
    cell: (row) => <span className="text-capitalize">{row?.user?.name}</span>,
  },
];

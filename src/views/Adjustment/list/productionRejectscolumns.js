import moment from "moment";

export const productionRejectscolumns = [
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
    minWidth: "150px",
    sortField: "stock_no_unique",
    selector: (row) => row?.item?.inventoryunit,
    cell: (row) =>
    // { [...row?.item?.inventoryunit].map((listValue, index) => {
    //   return (
    //       <span key={index}>{listValue?.stock_no_unique}</span>
    //   )
    // }) }
        <span>{row?.item?.inventoryunit[0].stock_no_unique}</span>
        // <span>{row?.item?.inventoryunit[1].stock_no_unique}</span>
  },
  {
    name: "Item ID",
    sortable: false,
    minWidth: "100px",
    sortField: "item_id",
    selector: (row) => row.item_id,
    cell: (row) => (
      <span>
        {row?.item_id ?? "--"}
      </span>
    ),
  },
  {
    name: "Status",
    sortable: true,
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
    sortField: "type",
    selector: (row) => row.rejection_message,
    cell: (row) => (
      <span className="text-capitalize">{row?.rejection_reason_info?.rejection_message}</span>
    ),
  },
  {
    name: "Message",
    minWidth: "300px",
    sortField: "note",
    selector: (row) => row.rejection_message,
    cell: (row) => (
      <span className="text-capitalize">{row?.rejection_message ?? '--'}</span>
    ),
  },
  {
    name: "User",
    minWidth: "100px",
    sortField: "user",
    selector: (row) => row.user,
    cell: (row) => (
      <span className="text-capitalize">{row?.user?.name}</span>
    ),
  },
  {
    name: "Quantity",
    minWidth: "100px",
    sortField: "user",
    selector: (row) => row.reject_qty,
    cell: (row) => (
        <span className="text-capitalize">{row?.reject_qty}</span>
    ),
  },
];

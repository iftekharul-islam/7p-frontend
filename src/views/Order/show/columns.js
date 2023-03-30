export const columns = [
  {
    name: "SKU",
    sortable: false,
    minWidth: "120px",
    sortField: "vendor_sku",
    selector: (row) => row.vendor_sku,
    cell: (row) => <span>{row.vendor_sku}</span>,
  },
  {
    name: "Stock#",
    sortable: false,
    minWidth: "120px",
    sortField: "stock_no",
    selector: (row) => row.stock_no,
    cell: (row) => <span>{row.stock_no}</span>,
  },
  {
    name: "Product",
    sortable: false,
    minWidth: "300px",
    sortField: "vendor_sku_name",
    selector: (row) => row.vendor_sku_name,
    cell: (row) => (
      <span className={row.vendor_sku_name == "Grand Total" ? "fw-bolder" : ""}>
        {row.vendor_sku_name}
      </span>
    ),
  },
  {
    name: "Quantity",
    sortable: false,
    minWidth: "120px",
    sortField: "quantity",
    selector: (row) => row.quantity,
    cell: (row) => <span className="text-capitalize">{row?.quantity}</span>,
  },
  {
    name: "Price",
    sortable: false,
    minWidth: "80px",
    sortField: "price",
    selector: (row) => row.price,
    cell: (row) => <span className="text-capitalize">{row?.price}</span>,
  },
  {
    name: "Subtotal",
    sortable: false,
    minWidth: "120px",
    sortField: "sub_total",
    selector: (row) => row.sub_total,
    cell: (row) => <span className="text-capitalize">{parseFloat(row?.sub_total)?.toFixed(2)}</span>,
  },
  {
    name: "Eta",
    sortable: false,
    minWidth: "120px",
    sortField: "eta",
    selector: (row) => row.eta,
    cell: (row) => <span className="text-capitalize">{row?.eta}</span>,
  },
  {
    name: "	Date Received",
    sortable: false,
    minWidth: "150px",
    sortField: "receive_date",
    selector: (row) => row.receive_date,
    cell: (row) => <span className="text-capitalize">{row?.receive_date}</span>,
  },
  {
    name: "Received",
    sortable: false,
    minWidth: "100px",
    sortField: "sub_total",
    selector: (row) => row.receive_quantity,
    cell: (row) => (
      <span className="text-capitalize">{row?.receive_quantity}</span>
    ),
  },
  {
    name: "Balance",
    sortable: false,
    minWidth: "100px",
    sortField: "sub_total",
    selector: (row) => row.balance_quantity,
    cell: (row) => (
      <span className="text-capitalize">{row?.balance_quantity}</span>
    ),
  },
];

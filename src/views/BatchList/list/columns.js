import moment from "moment";

export const columns = [
  {
    name: "Batch",
    sortable: false,
    minWidth: "100px",
    sortField: "warehouse",
    selector: (row) => row.warehouse,
    cell: (row) => (
      <div>
        <div>{row?.batch_number}</div>
        <small>
          {row?.status !== "active" && (
            <>
              <br />(
              {row?.status.charAt(0).toUpperCase() + row?.status.slice(1)})
            </>
          )}
          {row?.store && (
            <>
              <br />
              {row?.store?.store_name}
            </>
          )}
        </small>
      </div>
    ),
  },
  {
    name: "First Order",
    sortable: false,
    minWidth: "100px",
    sortField: "min_order_date",
    selector: (row) => row.min_order_date,
    cell: (row) => <div>{moment(row.min_order_date).format("YYYY-MM-DD")}</div>,
  },
  {
    name: "Lines",
    sortable: false,
    minWidth: "50px",
    sortField: "itemsCount",
    selector: (row) => row.itemsCount,
    cell: (row) => (
      <div> {row.items_counts?.length > 0 && row.items_counts[0].count}</div>
    ),
  },
  {
    name: "Current Station",
    sortable: false,
    minWidth: "200px",
    sortField: "qty_on_hand",
    selector: (row) => row.qty_on_hand,
    cell: (row) => <div>{row?.station?.station_name} <br /> {row?.station?.station_description}</div>,
  },
  {
    name: "Last Scan",
    sortable: false,
    minWidth: "150px",
    sortField: "change_date",
    selector: (row) => row.change_date,
    cell: (row) => <div>{row?.change_date}</div>,
  },
  {
    name: "Image",
    sortable: false,
    minWidth: "75px",
    sortField: "qty_alloc",
    selector: (row) => row.qty_alloc,
    cell: (row) => (
      <div>
        <img src={row?.first_item?.item_thumb} width="70" />
      </div>
    ),
  },
  {
    name: "Child SKU",
    sortable: false,
    minWidth: "120px",
    sortField: "qty_av",
    selector: (row) => row.qty_av,
    cell: (row) => <div>{row?.first_item?.child_sku ?? "No Items"}</div>,
  },
];

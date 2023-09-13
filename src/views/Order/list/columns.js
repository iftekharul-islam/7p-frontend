import moment from "moment";
import { useSelector } from "react-redux";

export const columns = [
  {
    name: "Order/PO",
    sortable: false,
    minWidth: "200px",
    sortField: "warehouse",
    selector: (row) => row.warehouse,
    cell: (row) => (
      <div>
        <div>{row?.short_order}</div>
        <div>#{row?.purchase_order}</div>
      </div>
    ),
  },
  {
    name: "Date",
    sortable: false,
    minWidth: "280px",
    sortField: "store",
    selector: (row) => row.store,
    cell: (row) => (
      <div>
        <div>
          {row?.store
            ? row?.store?.company > 0
              ? row?.store?.company[0]
              : row?.store?.store_name
            : "STORE NOT FOUND"}
        </div>
        <div>{moment(row?.order_date).format("YYYY-MM-DD hh:mm:ss a")}</div>
      </div>
    ),
  },
  {
    name: "Customer",
    sortable: false,
    minWidth: "240px",
    sortField: "customer",
    selector: (row) => row.customer,
    cell: (row) => (
      <div>
        <div>{row?.customer ? row?.customer?.ship_full_name : "#"}</div>
        <div>
          {row?.customer
            ? `${row?.customer?.ship_state},${row?.customer?.ship_country}`
            : "#"}
        </div>
      </div>
    ),
  },
  {
    name: "Items",
    sortable: false,
    minWidth: "60px",
    sortField: "item_count",
    selector: (row) => row.item_count,
    cell: (row) => <div>{row?.item_count ?? 0}</div>,
  },
  {
    name: "Subtotal",
    sortable: false,
    minWidth: "120px",
    sortField: "items",
    selector: (row) => row.items,
    cell: (row) => (
      <div>
        $
        {parseFloat(
          row?.items.reduce(function (prev, cur) {
            return parseFloat(prev) + parseFloat(cur?.item_total_price);
          }, 0)
        ).toFixed(2)}
      </div>
    ),
  },
  {
    name: "Discount",
    sortable: false,
    minWidth: "120px",
    sortField: "promotion_value",
    selector: (row) => row.promotion_value,
    cell: (row) => (
      <div>
        $
        {parseFloat(
          parseFloat(row?.promotion_value ?? 0) +
            parseFloat(row?.coupon_value ?? 0)
        ).toFixed(2)}
      </div>
    ),
  },
  {
    name: "Shipping",
    sortable: false,
    minWidth: "120px",
    sortField: "shipping_charge",
    selector: (row) => row.shipping_charge,
    cell: (row) => (
      <div>${parseFloat(row?.shipping_charge ?? 0).toFixed(2)}</div>
    ),
  },
  {
    name: "Tax",
    sortable: false,
    minWidth: "120px",
    sortField: "tax_charge",
    selector: (row) => row.tax_charge,
    cell: (row) => <div>${parseFloat(row?.tax_charge ?? 0).toFixed(2)}</div>,
  },
  {
    name: "Total",
    sortable: false,
    minWidth: "120px",
    sortField: "item_count",
    selector: (row) => row.item_count,
    cell: (row) => {
      const diff =
        parseFloat(
          row?.items.reduce(function (prev, cur) {
            return parseFloat(prev) + parseFloat(cur?.item_total_price);
          }, 0)
        ) -
        (parseFloat(row?.promotion_value ?? 0) +
          parseFloat(row?.coupon_value ?? 0)) +
        parseFloat(row?.shipping_charge ?? 0) +
        parseFloat(row?.tax_charge ?? 0) -
        parseFloat(row?.total ?? 0);
      return (
        <div className={diff != 0 && `text-danger`}>
          ${parseFloat(row?.total ?? 0).toFixed(2)}
        </div>
      );
    },
  },
  {
    name: "Status",
    sortable: false,
    minWidth: "180px",
    sortField: "order_status",
    selector: (row) => row.order_status,
    cell: (row) => {
      const store = useSelector((state) => state.orders);
      return (
        <div>
          <div>
            {
              store?.statusOptions?.find(
                (item) => item?.value == row?.order_status
              )?.label
            }
          </div>
          <div>
            {row?.carrier} {row?.method}
          </div>
        </div>
      );
    },
  },
  {
    name: "Coupon",
    sortable: false,
    minWidth: "180px",
    sortField: "item_count",
    selector: (row) => row.item_count,
    cell: (row) => (
      <div>
        {row?.promotion_id} {row?.coupon_id}
      </div>
    ),
  },
];

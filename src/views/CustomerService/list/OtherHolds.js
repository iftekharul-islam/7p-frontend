import "@styles/react/libs/tables/react-dataTable-component.scss";
import moment from "moment";
import DataTable from "react-data-table-component";
import { useDispatch } from "react-redux";
import { Button, Card } from "reactstrap";
import { actionButton } from "../store";

const OtherHolds = ({ data }) => {
  const dispatch = useDispatch();
  const columns = [
    {
      name: "Order",
      minWidth: "120px",
      selector: (row) => row?.short_order,
      cell: (row) => (
        <div>
          <div>{row?.short_order}</div>
          <div>
            {row?.total == 0
              ? "Zero Payment"
              : row?.total < 0
              ? "Low Payment"
              : null}
          </div>
        </div>
      ),
    },
    {
      name: "Order Date",
      minWidth: "80px",
      selector: (row) => row?.order_date,
      cell: (row) => <div>{moment(row?.order_date).format("DD-MM-YYYY")}</div>,
    },
    {
      name: "Store",
      minWidth: "120px",
      selector: (row) => row?.store,
      cell: (row) => (
        <div>
          {row?.store?.store_id != 52053152 ? row?.store?.store_name : null}
        </div>
      ),
    },
    {
      name: "Hold Reason",
      minWidth: "150px",
      selector: (row) => row?.hold_reason,
      cell: (row) => (
        <div>
          {row?.hold_reason &&
            row?.hold_reason?.note_text.replace("OH: Reason - ", "")}
        </div>
      ),
    },
    {
      name: "Customer Name",
      minWidth: "120px",
      selector: (row) => row?.customer,
      cell: (row) => (
        <div>
          {row?.customer?.ship_first_name} {row?.customer?.ship_last_name}
        </div>
      ),
    },
    {
      name: "Items",
      minWidth: "300px",
      selector: (row) => row?.items,
      cell: (row) => {
        row?.items?.map((item) => {
          return (
            <div>
              {item?.child_sku} - {row?.item_description}
            </div>
          );
        });
      },
    },
    {
      name: "Action",
      minWidth: "240px",
      selector: (row) => row?.id,
      cell: (row) => {
        return (
          <div>
            <Button
              className="btn btn-info"
              onClick={() => {
                dispatch(actionButton({tab:'other', order_5p: row?.id, }))
              }}
            >
              Release Other Hold
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <Card className="overflow-hidden">
      <div className="react-dataTable">
        <DataTable
striped
          responsive
          columns={columns}
          className="react-dataTable"
          data={data}
        />
      </div>
    </Card>
  );
};
export default OtherHolds;

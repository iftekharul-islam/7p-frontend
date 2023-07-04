import "@styles/react/libs/tables/react-dataTable-component.scss";
import moment from "moment";
import DataTable from "react-data-table-component";
import { Card } from "reactstrap";

const Backorders = ({data}) => {  
  const columns = [
    {
      name: "Order",
      minWidth: "20px",
      selector: (row) => row?.qty,
      cell: (row) => <div>{row?.qty}</div>,
    },
    {
      name: "Date",
      minWidth: "300px",
      selector: (row) => row?.stock_name_discription,
      cell: (row) => <div>{row?.stock_name_discription}</div>,
    },
    {
      name: "Customer",
      minWidth: "120px",
      selector: (row) => row?.min_date,
      cell: (row) => <div>{moment(row?.min_date).format('DD-MM-YYYY')}</div>,
    },
    {
      name: "Item",
      minWidth: "120px",
      selector: (row) => row?.stock_no_unique,
      cell: (row) => <div>{row?.stock_no_unique}</div>,
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
export default Backorders;

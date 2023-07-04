import "@styles/react/libs/react-select/_react-select.scss";
import "@styles/react/libs/tables/react-dataTable-component.scss";
import { Fragment } from "react";
import DataTable from "react-data-table-component";
import { Card } from "reactstrap";
import { columns } from "./columns";

const ProductTable = ({ data, total }) => {
  const tablData = [];
  data?.forEach((element) => {
    tablData?.push(element);
  });
  tablData?.push({ vendor_sku_name: "Grand Total", sub_total: total });
  return (
    <div className="app-user-list">
      <Fragment>
        <Card className="overflow-hidden">
          <div className="react-dataTable">
            <DataTable
striped
              subHeader
              responsive
              columns={columns}
              className="react-dataTable"
              data={tablData}
            />
          </div>
        </Card>
      </Fragment>
    </div>
  );
};
export default ProductTable;

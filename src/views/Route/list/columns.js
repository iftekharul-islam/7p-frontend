import { Edit } from "react-feather";
import { Link } from "react-router-dom";
import { Input } from "reactstrap";

const renderAction = (row) => {
  return (
    <div className="column-action">
      <Link
        className="text-truncate text-capitalize align-middle"
        to={`/route-edit/${row.id}`}
      >
        <Edit size={18} className={`text-danger me-50`} />
      </Link>
    </div>
  );
};

export const columns = [
  {
    name: "Batch Code",
    sortable: false,
    minWidth: "150px",
    sortField: "template_name",
    selector: (row) => row?.batch_code,
    cell: (row) => <span className="fw-bolder">{row?.batch_code}</span>,
  },
  {
    name: "Route Name",
    sortable: false,
    minWidth: "240px",
    sortField: "batch_route_name",
    selector: (row) => row.batch_route_name,
    cell: (row) => (
      <div>
        <div className="fw-bolder">{row?.batch_route_name}</div>
        <div>
          <div className="fw-bolder">Summary Header 1:</div>{" "}
          {row?.summary_msg_1}
        </div>
        <div>
          <div className="fw-bolder">Summary Header 2:</div>{" "}
          {row?.summary_msg_2}
        </div>
      </div>
    ),
  },
  {
    name: "Max Unit",
    sortable: false,
    minWidth: "80px",
    sortField: "batch_max_units",
    selector: (row) => row?.batch_max_units,
    cell: (row) => <span className="fw-bolder">{row?.batch_max_units}</span>,
  },
  {
    name: "Stations",
    minWidth: "150px",
    selector: (row) => row.stations_list,
    cell: (row) => (
      <span>
        {row?.stations_list?.map((item) => {
          return <div>{item?.station_name}</div>;
        })}
      </span>
    ),
  },
  {
    name: "template",
    sortable: false,
    minWidth: "140px",
    sortField: "export_template",
    selector: (row) => row?.template,
    cell: (row) => (
      <span className="fw-bolder">{row?.template?.template_name ?? '--'}</span>
    ),
  },
  {
    name: "Nesting",
    sortable: false,
    minWidth: "80px",
    sortField: "nesting",
    selector: (row) => row?.nesting,
    cell: (row) => (
      <span className="fw-bolder">{row?.nesting ? "Yes" : "No"}</span>
    ),
  },
  {
    name: "Route Name",
    sortable: false,
    minWidth: "240px",
    sortField: "csv_extension",
    selector: (row) => row.csv_extension,
    cell: (row) => (
      <div>
        <div>
          <div className="fw-bolder">CSV Directory:</div> {row?.csv_extension}
        </div>
        <div>
          <div className="fw-bolder">File Extension:</div> {row?.export_dir}
        </div>
        <div>
          <div className="fw-bolder">Graphic Directory:</div> {row?.graphic_dir}
        </div>
      </div>
    ),
  },
  {
    name: "Route Name",
    sortable: false,
    minWidth: "180px",
    sortField: "batch_route_name",
    selector: (row) => row.batch_route_name,
    cell: (row) => (
      <div>
        <Input
          type="textarea"
          columns={3}
          value={row?.batch_options}
          disabled
        />
      </div>
    ),
  },
  {
    name: "Actions",
    minWidth: "40px",
    cell: (row) => renderAction(row),
  },
  // {
  //   name: "",
  //   sortable: false,
  //   minWidth: "320px",
  //   sortField: "rejection_message",
  //   selector: (row) => row.rejection_message,
  //   cell: (row) => <span className="fw-bolder"></span>,
  // },
];

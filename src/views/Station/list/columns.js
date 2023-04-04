import { Edit } from "react-feather";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const renderAction = (row) => {
  return (
    <div className="column-action">
      <Link
        className="text-truncate text-capitalize align-middle"
        to={`/station-edit/${row.id}`}
      >
        <Edit size={18} className={`text-primary me-50`} />
      </Link>      
    </div>
  );
};

export const columns = [
  {
    name: "Station Name",
    sortable: false,
    minWidth: "240px",
    sortField: "station_name",
    selector: (row) => row.station_name,
    cell: (row) => <span className="fw-bolder">{row.station_name}</span>,
  },
  {
    name: "Station description",
    sortable: false,
    minWidth: "300px",
    sortField: "station_description",
    selector: (row) => row.station_description,
    cell: (row) => <span>{row.station_description}</span>,
  },
  {
    name: "Status on the My Orders portal",
    sortable: false,
    minWidth: "360px",
    sortField: "station_status",
    selector: (row) => row.station_status,
    cell: (row) => <span>{row.station_status}</span>,
  },
  {
    name: "Section",
    sortable: false,
    minWidth: "120px",
    sortField: "same_user",
    selector: (row) => row.section_info,
    cell: (row) => <span>{row.section_info?.section_name}</span>,
  },
  {
    name: "Type",
    sortable: false,
    minWidth: "120px",
    sortField: "type",
    selector: (row) => row.type,
    cell: (row) => {
      const { typeOption } = useSelector((state) => state.stations);
      return (
        <span>
          {
            typeOption?.find((item) => item?.value == row.type)
              ?.label
          }
        </span>
      );
    },
  },
  {
    name: "Actions",
    minWidth: "100px",
    cell: (row) => renderAction(row),
  },
];

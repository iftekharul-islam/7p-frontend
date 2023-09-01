import "@styles/react/libs/react-select/_react-select.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { Col, Row } from "reactstrap";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { exportBatch, reprintGraphic } from "../store";

const BatchHeader = ({ getBatchData }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { showData } = useSelector((state) => state.batchList);
  const [actionOptions, setActionOptions] = useState([]);

  useEffect(() => {
    const { batch, batch_number } = showData;
    setActionOptions([
      {
        value: 1,
        type: "link",
        isActive: false,
        label:
          batch?.summary_count == 0 ? "Print batch Summary" : "Reprint Summary",
      },
      {
        value: 1,
        type: "link",
        isActive: false,
        label: "Print Dymo Label",
      },
      {
        value: 1,
        type: "export",
        params: { batch_number, force: 0, format: "CSV" },
        isActive: true,
        label: "Export",
      },
      {
        value: 1,
        type: "export",
        params: { batch_number, force: 1, format: "CSV" },
        isActive: true,
        label: "Force Export",
      },
      {
        value: 1,
        type: "export",
        params: { batch_number, force: 2, format: "CSV" },
        isActive: true,
        label: "Send to Manual",
      },
      {
        value: 1,
        type: "export",
        params: { batch_number, force: 1, format: "XLS" },
        isActive: true,
        label: "Export as XLS",
      },
      batch?.graphic_found && {
        value: 1,
        type: "function",
        functionName: getGraphic,
        isActive: true,
        label: "Get Graphic from Archive",
      },
      batch?.status == "active" &&
        batch?.status == "back order" &&
        batch?.items?.filter((item) => item.item_status === "production")
          ?.length == batch?.items?.length && {
          value: 1,
          type: "function",
          isActive: false,
          label: "Reject Batch",
        },
      (batch?.status == "active" || batch?.status == "back order") && {
        value: 1,
        type: "link",
        isActive: false,
        label: "Release Items",
      },
    ]);
  }, [showData]);

  const actionClick = (e) => {
    const { isActive, type, params, functionName } = e;
    if (isActive) {
      if (type == "export") {
        ExportBatch(params);
      } else if (type == "function") {
        functionName();
      }
    } else {
      const MySwal = withReactContent(Swal);
      MySwal.fire({
        position: "top-end",
        icon: "error",
        title: "This action is under development ",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const ExportBatch = async (params) => {
    await dispatch(exportBatch(params));
  };

  const getGraphic = async () => {
    const params = {
      name: showData?.batch?.batch_number,
      directory: showData?.batch?.route?.graphic_dir,
      goto: showData?.batch?.section_id == 6 ? "print_sublimation" : "",
    };
    const res = await dispatch(reprintGraphic(params));
    if (res?.payload?.status == 206) {
      navigate(`/print-sublimation?select_batch=${res?.payload?.select_batch}`);
    } else {
      getBatchData();
    }
  };

  return (
    <Row className="p-1 d-flex justify-content-between">
      <Col sm="5">
        <h4 className="card-title">
          Batch: {showData?.batch_number}{" "}
          {showData?.batch?.store &&
            "(" + showData?.batch?.store?.store_name + ")"}
        </h4>
      </Col>
      <Col sm="3">
        <Select
          className="react-select"
          classNamePrefix="select"
          name="batchNote"
          placeholder="Action"
          options={actionOptions?.filter((option) => option)}
          value={{
            value: "action",
            label: "Action",
          }}
          onChange={(e) => actionClick(e)}
        />
      </Col>
    </Row>
  );
};

export default BatchHeader;

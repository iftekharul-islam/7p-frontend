import "@styles/react/libs/flatpickr/flatpickr.scss";
import "@styles/react/libs/react-select/_react-select.scss";
import "@styles/react/libs/tables/react-dataTable-component.scss";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "reactstrap";
import { getAllData } from "../store";
import Body from "./Body";
import CustomHeader from "./CustomHeader";

const index = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.salesSummaryReports);

  useEffect(() => {
    if (store?.params) dispatch(getAllData());
  }, [store?.params]);

  return (
    <div className="app-user-list">
      <Fragment>
        <Card className="p-2">{CustomHeader()}</Card>
        <Card className="p-2">{Body(store?.data)}</Card>
      </Fragment>
    </div>
  );
};
export default index;

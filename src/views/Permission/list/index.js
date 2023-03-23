import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Badge } from "reactstrap";
import { getAllData } from "../store";

const index = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.permissions);
  useEffect(() => {
    dispatch(getAllData());
  }, []);
  return (
    <div className="app-user-list">
      {store?.data?.map((item) => {
        <Badge pill color="light-primary" className="me-1">
          {item}
        </Badge>;
      })}
    </div>
  );
};
export default index;

// ** Dropdowns Imports
import { useEffect, useState } from "react";
import { CheckSquare } from "react-feather";
import { useDispatch } from "react-redux";
import { getUserTasks } from "../../../../redux/navbar";
import UserDropdown from "./UserDropdown";

const NavbarUser = () => {
  const dispatch = useDispatch();
  const [taskData, setTaskData] = useState({});

  const [userData, setuserData] = useState(null);
  useEffect(() => {
    setuserData(JSON.parse(localStorage.getItem("userData") ?? null));
  }, []);

  const getData = async () => {
    const res = await dispatch(getUserTasks());
    setTaskData(res?.payload);
  };

  useEffect(() => {
    if (userData) {
      getData();
    }
  }, [userData]);

  return (
    <ul className="nav navbar-nav align-items-center ms-auto">
      <div className={taskData?.unread > 0 ? "blinking" : ""}>
        <a href="/tasks">
          <CheckSquare
            size={22}
            className="me-75"
            color={taskData?.unread > 0 ? "red" : "black"}
          />
          {taskData?.unread > 0 ? (
            <span className="text-danger">
              {taskData?.unread} NEW TASK{taskData?.unread > 1 ? "S" : ""}
            </span>
          ) : taskData?.all_msg > 0 ? (
            <span>
              {taskData?.all_msg} TASK{taskData?.all_msg > 1 ? "S" : ""}
            </span>
          ) : null}
        </a>
      </div>
      <UserDropdown />
    </ul>
  );
};
export default NavbarUser;

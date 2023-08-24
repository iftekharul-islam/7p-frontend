import "@styles/react/libs/flatpickr/flatpickr.scss";
import "@styles/react/libs/react-select/_react-select.scss";
import "@styles/react/libs/tables/react-dataTable-component.scss";
import { Fragment, useEffect, useState } from "react";
import { Check, Edit } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Input,
  Row,
} from "reactstrap";
import {
  getAllData,
  getSearchInOption,
  getUserOptions,
  setSearchParams,
} from "../store";

const index = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.tasks);
  const { searchParams } = store;
  const [loading, setLoading] = useState(false);
  let classVariable = "";

  useEffect(() => {
    dispatch(getUserOptions());
    dispatch(getSearchInOption());
  }, []);

  const onSearch = async () => {
    setLoading(true);
    await dispatch(getAllData());
    setLoading(false);
  };

  const onChange = (data) => {
    dispatch(setSearchParams(data));
  };

  return (
    <div className="app-user-list">
      <Fragment>
        <Card className="px-1">
          <CardHeader>
            <h4 className="card-title">Search Tasks</h4>
            <Button
              color="primary"
              onClick={(e) => {
                e.preventDefault();
                console.log("Add new Task");
              }}
            >
              New Task
            </Button>
          </CardHeader>
          <CardBody>
            <Row className="border p-1">
              <Col sm="2">
                <Select
                  className="react-select"
                  classNamePrefix="select"
                  options={store?.taskStatusOptions}
                  placeholder="Task Status"
                  value={store?.taskStatusOptions?.find(
                    (item) => item?.value == searchParams?.status
                  )}
                  onChange={(e) => onChange({ status: e?.value })}
                  isClearable={true}
                />
              </Col>

              <Col sm="3">
                <Select
                  className="react-select"
                  classNamePrefix="select"
                  options={store?.userOptions}
                  placeholder="Assigned To"
                  value={store?.userOptions?.find(
                    (item) => item?.value == searchParams?.user_id
                  )}
                  onChange={(e) => onChange({ user_id: e?.value })}
                  isClearable={true}
                />
              </Col>
              <Col sm="3">
                <Select
                  className="react-select"
                  classNamePrefix="select"
                  options={store?.userOptions}
                  placeholder="Created By"
                  value={store?.userOptions?.find(
                    (item) => item?.value == searchParams?.create_user_id
                  )}
                  onChange={(e) => onChange({ create_user_id: e?.value })}
                  isClearable={true}
                />
              </Col>
              <Col sm="1">
                <Input
                  placeholder="Search For"
                  value={searchParams?.search_for}
                  onChange={(e) => {
                    onChange({ search_for: e?.target?.value });
                  }}
                />
              </Col>
              <Col sm="2">
                <Select
                  className="react-select"
                  classNamePrefix="select"
                  options={store?.searchInOption}
                  placeholder="Search In"
                  value={store?.searchInOption?.find(
                    (item) => item?.value == searchParams?.search_in
                  )}
                  onChange={(e) => onChange({ search_in: e?.value })}
                  isClearable={true}
                />
              </Col>
              <Col sm="1" className="d-flex justify-content-end">
                <Button
                  color="primary"
                  onClick={onSearch}
                  disabled={loading}
                  className="w-full"
                >
                  {loading ? "Please Wait" : "Filter"}
                </Button>
              </Col>
            </Row>
          </CardBody>
        </Card>
        <Card className="p-2">TODO - nned to Add Create Form</Card>
        <Card>
          <CardBody>
            {store?.data?.tasks?.map((task, index) => (
              <Row key={index} className="p-1 border rounded mb-1">
                <Col sm="1" className="d-flex justify-content-end">
                  <Edit ize={18} className={`text-info me-50`} />
                  <Check ize={18} className={`text-success me-50`} />
                </Col>
                <Col sm="2">
                  {task?.msg_read != "2" ? (
                    <strong>*Task {task?.id}</strong>
                  ) : (
                    <span>Task {task?.id}</span>
                  )}
                  <br />
                  {task?.due_date &&
                    task?.due_date != "0000-00-00" &&
                    task?.due_date <= new Date() && (
                      <strong className="text-danger">
                        Due {task?.due_date}
                      </strong>
                    )}
                  {task?.due_date && task?.due_date != "0000-00-00" && (
                    <span>Due {task?.due_date}</span>
                  )}
                </Col>
                <Col sm="2">
                  {!task?.assigned_user ? (
                    <span>USER NOT FOUND</span>
                  ) : task?.status == "O" ? (
                    <strong>{task?.assigned_user?.username}</strong>
                  ) : task?.status == "C" ? (
                    <span>{task?.assigned_user?.username}</span>
                  ) : (
                    <span>Unrecognized status</span>
                  )}
                </Col>
                <Col sm="4">
                  <div className="alert-info mb-1 p-1 rounded">
                    <div>{task?.text}</div>
                    <div>
                      {task?.create_user ? (
                        <span>- {task?.create_user?.username}</span>
                      ) : (
                        <span>USER NOT FOUND</span>
                      )}
                      <span>{task?.created_at}</span>
                    </div>
                  </div>
                  {task?.notes?.map((note, index) => {
                    if (classVariable == "alert-warning") {
                      classVariable = "alert-success";
                    } else {
                      classVariable = "alert-warning";
                    }
                    return (
                      <div key={index} className={`mb-1 ${classVariable} p-1`}>
                        <div >
                          {note?.ext == null ? (
                            <div>{note?.text}</div>
                          ) : (
                            <a
                              download={note?.text}
                              href={`/assets/attachments/${note.text}`}
                            >
                              {["gif", "jpg", "png", "jpeg"]?.includes(
                                note?.ext
                              ) ? (
                                <img
                                  src={`/assets/attachments/${note?.text}`}
                                  className="Image"
                                />
                              ) : (
                                <span>Download {note?.ext}</span>
                              )}
                            </a>
                          )}
                        </div>
                        <div>
                          {note?.user ? (
                            <span>- {note?.user?.username}</span>
                          ) : (
                            <span>USER NOT FOUND</span>
                          )}
                          <span>{note?.created_at}</span>
                        </div>
                      </div>
                    );
                  })}
                </Col>
              </Row>
            ))}
          </CardBody>
        </Card>
      </Fragment>
    </div>
  );
};
export default index;

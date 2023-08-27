import "@styles/react/libs/flatpickr/flatpickr.scss";
import "@styles/react/libs/react-select/_react-select.scss";
import "@styles/react/libs/tables/react-dataTable-component.scss";
import { Fragment, useEffect, useState } from "react";
import { Check, Edit } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import Select from "react-select";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Input,
  Row,
  Spinner,
} from "reactstrap";
import {
  createNewTask,
  deleteTask,
  getAllData,
  getSearchInOption,
  getUserOptions,
  setNewTask,
  setSearchParams,
  updateTasks,
} from "../store";

const index = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isCreate, setIsCreate] = useState(false);
  const [isEdit, setIsEdit] = useState(null);
  const store = useSelector((state) => state.tasks);
  const { searchParams, newTask } = store;
  const [loading, setLoading] = useState(false);
  let classVariable = "";

  useEffect(() => {
    dispatch(getUserOptions());
    dispatch(getSearchInOption());
  }, []);

  const [URLParams, setURLParams] = useSearchParams();
  useEffect(() => {
    if (URLParams) {
      let params = {};
      URLParams?.forEach((value, key) => {
        if (value != "null") {
          params = { ...params, [key]: value };
        }
      });
      onChange(params);
      onSearch();
    }
  }, [URLParams]);

  const onSearch = async () => {
    setLoading(true);
    await dispatch(getAllData());
    setLoading(false);
  };

  const onChange = (data) => {
    dispatch(setSearchParams(data));
  };

  const onChangeNewTask = (data) => {
    dispatch(setNewTask(data));
  };

  const onDeleteTask = async (id) => {
    await dispatch(deleteTask(id));
  };

  const createTask = async (e) => {
    e?.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("user", newTask?.user);
    formData.append("text", newTask?.text);
    formData.append("due_date", newTask?.due_date);
    formData.append("attachment", newTask?.attachment);
    formData.append("search_in", newTask?.search_in);
    formData.append("associate_with", newTask?.associate_with);
    const res = await dispatch(createNewTask(formData));
    if (res?.payload?.status == 201) {
      navigate("/tasks?task_id=" + res?.payload?.params?.task_id, {
        replace: true,
      });
    }
    setLoading(false);
  };

  const updateTask = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("reassign", newTask?.reassign);
    formData.append("note_text", newTask?.note_text);
    formData.append("attach", newTask?.attach);
    const res = await dispatch(updateTasks({ data: formData, id: isEdit }));
    if (res?.payload?.status == 201) {
      navigate("/tasks?task_id=" + res?.payload?.params?.task_id, {
        replace: true,
      });
    }
    setLoading(false);
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
                setIsCreate(!isCreate);
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
        {isCreate && (
          <Card className="p-2">
            <CardHeader>
              <h4 className="card-title">Create Task</h4>
            </CardHeader>
            <CardBody>
              <Row className="border rounded p-1">
                <Col sm="8">
                  <Row className="mb-1">
                    <Col sm="4">
                      <Select
                        className="react-select"
                        classNamePrefix="select"
                        options={store?.userOptions}
                        placeholder="For"
                        value={store?.userOptions?.find(
                          (item) => item?.value == newTask?.user
                        )}
                        onChange={(e) => onChangeNewTask({ user: e?.value })}
                        isClearable={true}
                      />
                    </Col>
                    <Col sm="8">
                      <Input
                        type="text"
                        placeholder="Task"
                        value={newTask?.text}
                        onChange={(e) =>
                          onChangeNewTask({ text: e?.target?.value })
                        }
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col sm="4">
                      <Input
                        type="date"
                        placeholder="Due Date"
                        value={newTask?.due_date}
                        onChange={(e) =>
                          onChangeNewTask({ due_date: e?.target?.value })
                        }
                      />
                    </Col>
                    <Col sm="8">
                      <Input
                        type="file"
                        placeholder="Attachment"
                        onChange={(e) =>
                          onChangeNewTask({ attachment: e?.target?.files[0] })
                        }
                      />
                    </Col>
                  </Row>
                </Col>
                <Col sm="3">
                  {store?.data?.array ? (
                    <div>
                      <a href={store?.data?.array[2]} target="_blank">
                        {store?.data?.array[3]}
                      </a>
                      <br />
                      {store?.data?.array[4]} <br /> {store?.data?.array[5]}
                    </div>
                  ) : (
                    <Row>
                      <Col sm="12" className="mb-1">
                        <Select
                          className="react-select"
                          classNamePrefix="select"
                          placeholder="Search In"
                          options={store?.searchInOption}
                          value={newTask?.search_in}
                          onChange={(e) =>
                            onChangeNewTask({ search_in: e?.target?.value })
                          }
                        />
                      </Col>
                      <Col sm="12">
                        <Input
                          type="text"
                          placeholder="Search For"
                          value={newTask?.associate_with}
                          onChange={(e) =>
                            onChangeNewTask({
                              associate_with: e?.target?.value,
                            })
                          }
                        />
                      </Col>
                    </Row>
                  )}
                </Col>
                <Col sm="1" className="d-flex align-items-center">
                  <Button
                    color="primary"
                    onClick={createTask}
                    disabled={loading}
                  >
                    {loading ? "Please Wait" : "Create"}
                  </Button>
                </Col>
              </Row>
            </CardBody>
          </Card>
        )}
        <Card>
          <CardBody>
            {store?.data?.tasks?.length > 0 ? (
              store?.data?.tasks?.map((task, index) => (
                <span>
                  <Row key={index} className="p-1 border rounded mb-1">
                    <Col sm="1" className="d-flex justify-content-end">
                      <Edit
                        ize={18}
                        className={`text-info me-50`}
                        onClick={() => setIsEdit(task?.id)}
                      />
                      <Check
                        ize={18}
                        className={`text-success me-50`}
                        onClick={() => onDeleteTask(task?.id)}
                      />
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
                          <div
                            key={index}
                            className={`mb-1 ${classVariable} p-1`}
                          >
                            <div>
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
                              <span> - {note?.created_at}</span>
                            </div>
                          </div>
                        );
                      })}
                    </Col>
                  </Row>
                  {isEdit == task?.id && (
                    <Row className="border rounded p-1">
                      <Col sm="3">
                        <Select
                          className="react-select"
                          classNamePrefix="select"
                          options={store?.userOptions}
                          placeholder="Reassign"
                          value={store?.userOptions?.find(
                            (item) => item?.value == task?.reassign
                          )}
                          onChange={(e) =>
                            onChangeNewTask({ reassign: e?.value })
                          }
                          isClearable={true}
                        />
                      </Col>
                      <Col sm="4">
                        <Input
                          type="text"
                          placeholder="Add Note"
                          value={newTask?.note_text}
                          onChange={(e) =>
                            onChangeNewTask({ note_text: e?.target?.value })
                          }
                        />
                      </Col>
                      <Col sm="3">
                        <Input
                          type="file"
                          placeholder="Attachment"
                          onChange={(e) =>
                            onChangeNewTask({
                              attach: e?.target?.files[0],
                            })
                          }
                        />
                      </Col>
                      <Col sm="2" className="d-flex align-items-center">
                        <Button
                          color="primary"
                          onClick={updateTask}
                          disabled={loading}
                        >
                          {loading ? "Please Wait" : "Create"}
                        </Button>
                      </Col>
                    </Row>
                  )}
                </span>
              ))
            ) : (
              <div className="text-center">
                {loading ? (
                  <>
                    <Spinner size="sm" />
                    Please Wait
                  </>
                ) : (
                  "No Data Found"
                )}
              </div>
            )}
          </CardBody>
        </Card>
      </Fragment>
    </div>
  );
};
export default index;

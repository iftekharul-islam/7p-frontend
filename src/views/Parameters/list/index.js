import { Fragment, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { ChevronDown, PlusCircle } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Card,
  Col,
  Form,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from "reactstrap";
import { columns } from "./columns";
import { AddParameter, getAllData } from "../store";
import ReactPaginate from "react-paginate";
import "@styles/react/libs/react-select/_react-select.scss";
import "@styles/react/libs/tables/react-dataTable-component.scss";
import { DebounceInput } from "react-debounce-input";

const index = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.parameters);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState(null);

  useEffect(() => {
    dispatch(getAllData({ page: currentPage, q: search }));
  }, [currentPage, search]);

  const [addShow, setAddShow] = useState(false);
  const [data, setData] = useState(null);
  const [errors, setErrors] = useState(null);

  const onChange = (e) => {
    setData({
      ...data,
      [e.target?.name]: e.target?.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault()
    const res = await dispatch(AddParameter(data));
    if (res?.payload?.status) {
      setAddShow(false)
    } else {
      setErrors(res?.payload?.data?.errors);
    }
  };

  const CustomHeader = () => {
    return (
      <div className="invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75">
        <Row>
          <Col xl="6"></Col>
          <Col
            xl="4"
            className="d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1"
          >
            <div className="d-flex align-items-center table-header-actions">
              <DebounceInput
                className="form-control"
                color="primary"
                debounceTimeout={300}
                // autoFocus
                placeholder="Search by Parameters"
                value={search}
                onChange={(e) => {
                  e.preventDefault();
                  setSearch(e.target.value);
                }}
              />
            </div>
          </Col>
          <Col
            xl="2"
            className="d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1"
          >
            <div className="d-flex align-items-center table-header-actions">
              <Button
                className="add-new-user"
                color="primary"
                onClick={(e) => {
                  e.preventDefault();
                  setAddShow(true);
                }}
              >
                <PlusCircle size={14} /> Parameter
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    );
  };

  const CustomPagination = () => {
    const count = Number(Math.ceil(store.total / 10));

    return (
      <ReactPaginate
        previousLabel={""}
        nextLabel={""}
        pageCount={count || 1}
        activeClassName="active"
        forcePage={currentPage !== 0 ? currentPage - 1 : 0}
        onPageChange={(page) => setCurrentPage(page.selected + 1)}
        pageClassName={"page-item"}
        nextLinkClassName={"page-link"}
        nextClassName={"page-item next"}
        previousClassName={"page-item prev"}
        previousLinkClassName={"page-link"}
        pageLinkClassName={"page-link"}
        containerClassName={
          "pagination react-paginate justify-content-end my-2 pe-1"
        }
      />
    );
  };

  return (
    <div className="app-user-list">
      <Fragment>
        <Card className="overflow-hidden">
          <div className="react-dataTable">
            <DataTable
              noHeader
              subHeader
              sortServer
              pagination
              responsive
              paginationServer
              columns={columns}
              //   onSort={handleSort}
              sortIcon={<ChevronDown />}
              className="react-dataTable"
              paginationComponent={CustomPagination}
              data={store.data}
              subHeaderComponent={<CustomHeader />}
            />
          </div>
        </Card>
      </Fragment>

      <Modal
        isOpen={addShow}
        toggle={() => setAddShow(!addShow)}
        className="modal-dialog-centered modal-lg"
      >
        <ModalHeader
          className="bg-transparent"
          toggle={() => setAddShow(!addShow)}
        ></ModalHeader>
        <ModalBody className="px-2 pb-2">
          <Form onSubmit={onSubmit}>
          <Row>
            <Col sm="12">
              <Label className="form-label" for="parameter_value">
                Parameter Name
              </Label>
              <Input
                type="text"
                name="parameter_value"
                id="parameter_value"
                placeholder="Enter Parameter Name"
                autoFocus
                value={data?.parameter_value}
                onChange={onChange}
              />
              <small className="text-danger">{errors?.parameter_value}</small>
            </Col>
          </Row>
          <Row>
            <Col sm="12" className="mt-1">
              <div className="d-flex justify-content-center">
                <Button
                  className="me-1"
                  color="primary"
                  type="submit"
                >
                  Submit
                </Button>
              </div>
            </Col>
          </Row>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};
export default index;

import '@styles/react/libs/react-select/_react-select.scss';
import '@styles/react/libs/tables/react-dataTable-component.scss';
import { Fragment, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { ChevronDown, UserPlus } from "react-feather";
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Card, Col, Row } from "reactstrap";
import { getAllData } from "./../store/index";
import { columns } from "./columns";


const index = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.users);
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    dispatch(getAllData({page: currentPage}));
  }, [currentPage]);

  const CustomHeader = () => {
    const navigate = useNavigate();
    return (
      <div className="invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75">
        <Row>
          <Col xl="9"></Col>
          <Col
            xl="3"
            className="d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1"
          >
            <div className="d-flex align-items-center table-header-actions">
              <Button className="add-new-user" color="primary" onClick={e=>{
                e.preventDefault()
                navigate('/user-add')
              }}>
                <UserPlus size={14} /> User
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    );
  };

  const CustomPagination = () => {
    const count = Number(Math.ceil(store.total / 10))

    return (
      <ReactPaginate
        previousLabel={''}
        nextLabel={''}
        pageCount={count || 1}
        activeClassName='active'
        forcePage={currentPage !== 0 ? currentPage - 1 : 0}
        onPageChange={page => setCurrentPage(page.selected + 1)}
        pageClassName={'page-item'}
        nextLinkClassName={'page-link'}
        nextClassName={'page-item next'}
        previousClassName={'page-item prev'}
        previousLinkClassName={'page-link'}
        pageLinkClassName={'page-link'}
        containerClassName={'pagination react-paginate justify-content-end my-2 pe-1'}
      />
    )
  }

  return (
    <div className="app-user-list">
      <Fragment>
        <Card className="overflow-hidden">
          <div className="react-dataTable">
            <DataTable
striped
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
    </div>
  );
};
export default index;

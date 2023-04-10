
import "@styles/react/libs/tables/react-dataTable-component.scss";
import { selectThemeColors } from "@utils";
import { Fragment, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { ChevronDown, PlusCircle } from "react-feather";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { Button, Card, Col, Input, Row } from "reactstrap";
import {
  getAllData,
  getMakeSampleDataOptions,
  getProductionCategoriesOptions,
  getSearchableFieldsOptions,
  getStatusesOptions,
  getWebImageStatusOptions,
} from "../store";
import { columns } from "./columns";

const index = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.productspecifications);
  const [currentPage, setCurrentPage] = useState(1);

  const [params, setParams] = useState(null);

  const onChange = (e) => {
    setParams({
      ...params,
      ...e,
    });
  };

  useEffect(() => {
    dispatch(getSearchableFieldsOptions());
    dispatch(getProductionCategoriesOptions());
    dispatch(getWebImageStatusOptions());
    dispatch(getMakeSampleDataOptions());
    dispatch(getStatusesOptions());
  }, []);

  useEffect(() => {
    dispatch(getAllData({ page: currentPage, ...params }));
  }, [currentPage]);

  const search = () => {
    dispatch(getAllData({ page: currentPage, ...params }));
  };

  const reset = () => {
    setParams({
      search_for_1: "",
      search_in_1: null,
      search_for_2: "",
      search_in_2: null,
      production_category: null,
      status: null,
      web_image_status: null,
      make_sample: null,
    });
  };

  const CustomHeader = () => {
    const navigate = useNavigate();
    return (
      <div className="invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75">
        <Row>
          <Col xl="10"></Col>
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
                  navigate("/specification-product-add");
                }}
              >
                <PlusCircle size={14} /> Product Specification
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
        <Card className="p-2">
          <Row className="mb-1">
            <Col sm="3">
              <Input
                placeholder="Search for 1"
                name="search_for_1"
                value={params?.search_for_1}
                onChange={(e) =>
                  onChange({ [e?.target?.name]: e?.target?.value })
                }
              />
            </Col>
            <Col sm="3">
              <Select
                className="react-select"
                classNamePrefix="select"
                theme={selectThemeColors}
                placeholder="Search in 1"
                options={store?.searchableFieldsOptions}
                value={store?.searchableFieldsOptions?.find(
                  (item) => item?.value == params?.search_in_1
                )}
                onChange={(e) => onChange({ search_in_1: e?.value })}
              />
            </Col>
            <Col sm="3">
              <Input
                placeholder="Search for 2"
                name="search_for_2"
                value={params?.search_for_fourth}
                onChange={(e) =>
                  onChange({ [e?.target?.name]: e?.target?.value })
                }
              />
            </Col>
            <Col sm="3">
              <Select
                className="react-select"
                classNamePrefix="select"
                theme={selectThemeColors}
                placeholder="Search in 2"
                options={store?.searchableFieldsOptions}
                value={store?.searchableFieldsOptions?.find(
                  (item) => item?.value == params?.search_in_2
                )}
                onChange={(e) => onChange({ search_in_2: e?.value })}
              />
            </Col>
          </Row>
          <Row className="mb-1">
            <Col sm="3">
              <Select
                className="react-select"
                classNamePrefix="select"
                theme={selectThemeColors}
                placeholder="Search in production category"
                options={store?.productionCategoriesOptions}
                value={store?.productionCategoriesOptions?.find(
                  (item) => item?.value == params?.production_category
                )}
                onChange={(e) => onChange({ production_category: e?.value })}
              />
            </Col>
            <Col sm="3">
              <Select
                className="react-select"
                classNamePrefix="select"
                theme={selectThemeColors}
                placeholder="Search in status"
                options={store?.statusesOptions}
                value={store?.statusesOptions?.find(
                  (item) => item?.value == params?.status
                )}
                onChange={(e) => onChange({ status: e?.value })}
              />
            </Col>
            <Col sm="3">
              <Select
                className="react-select"
                classNamePrefix="select"
                theme={selectThemeColors}
                placeholder="Search in web image status"
                options={store?.webImageStatusOptions}
                value={store?.webImageStatusOptions?.find(
                  (item) => item?.value == params?.web_image_status
                )}
                onChange={(e) => onChange({ web_image_status: e?.value })}
              />
            </Col>
            <Col sm="3">
              <Select
                className="react-select"
                classNamePrefix="select"
                theme={selectThemeColors}
                placeholder="Search in Make sample"
                options={store?.makeSampleDataOptions}
                value={store?.makeSampleDataOptions?.find(
                  (item) => item?.value == params?.make_sample
                )}
                onChange={(e) => onChange({ make_sample: e?.value })}
              />
            </Col>
          </Row>
          <Row>
            <Col sm="9"></Col>
            <Col sm="3">
              <div className="d-flex justify-content-between table-header-actions mx-4">
                <Button
                  className="add-new-user"
                  color="primary"
                  onClick={(e) => {
                    e.preventDefault();
                    reset();
                  }}
                >
                  Reset
                </Button>
                <Button
                  className="add-new-user"
                  color="primary"
                  onClick={(e) => {
                    e.preventDefault();
                    search();
                  }}
                >
                  Search
                </Button>
              </div>
            </Col>
          </Row>
        </Card>
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
    </div>
  );
};
export default index;

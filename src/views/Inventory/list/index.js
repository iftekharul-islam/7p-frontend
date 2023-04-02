import { Fragment, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { ChevronDown, PlusCircle } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Col, Input, Row } from "reactstrap";
import { columns } from "./columns";
import {
  getAllData,
  getAllVendors,
  setParams,
  setSearchParams,
} from "./../store/index";
import { useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import "@styles/react/libs/react-select/_react-select.scss";
import "@styles/react/libs/tables/react-dataTable-component.scss";
import Select from "react-select";

const index = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.inventories);
  const params = store?.searchParams;

  useEffect(() => {
    if (store?.params) dispatch(getAllData());
  }, [store?.params]);

  useEffect(() => {
    dispatch(getAllVendors());
  }, []);

  const onSearch = () => {
    dispatch(getAllData());
  };

  const onChange = (data) => {
    dispatch(setSearchParams(data));
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
                  navigate("/inventory-add");
                }}
              >
                <PlusCircle size={14} /> Stock
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
        forcePage={store?.params?.page !== 0 ? store?.params?.page - 1 : 0}
        onPageChange={(page) =>
          dispatch(setParams({ page: page.selected + 1 }))
        }
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
            <Col sm="2">
              <Input
                placeholder="Search for 1"
                value={params?.search_for_first}
                onChange={(e) =>
                  onChange({ search_for_first: e?.target?.value })
                }
              />
            </Col>
            <Col sm="2">
              <Select
                options={store?.inOptions}
                value={store?.inOptions?.find(
                  (item) => item?.value == params?.operator_first
                )}
                onChange={(e) => onChange({ operator_first: e?.value })}
              />
            </Col>
            <Col sm="2">
              <Select
                options={store?.searchOptions}
                value={store?.searchOptions?.find(
                  (item) => item?.value == params?.search_in_first
                )}
                onChange={(e) => onChange({ search_in_first: e?.value })}
              />
            </Col>
            <Col sm="2">
              <Input
                placeholder="Search for 2"
                value={params?.search_for_second}
                onChange={(e) =>
                  onChange({ search_for_second: e?.target?.value })
                }
              />
            </Col>
            <Col sm="2">
              <Select
                options={store?.inOptions}
                value={store?.inOptions?.find(
                  (item) => item?.value == params?.operator_second
                )}
                onChange={(e) => onChange({ operator_second: e?.value })}
              />
            </Col>
            <Col sm="2">
              <Select
                options={store?.searchOptions}
                value={store?.searchOptions?.find(
                  (item) => item?.value == params?.search_in_second
                )}
                onChange={(e) => onChange({ search_in_second: e?.value })}
              />
            </Col>
          </Row>
          <Row className="mb-1">
            <Col sm="2">
              <Input
                placeholder="Search for 3"
                value={params?.search_for_third}
                onChange={(e) =>
                  onChange({ search_for_third: e?.target?.value })
                }
              />
            </Col>
            <Col sm="2">
              <Select
                options={store?.inOptions}
                value={store?.inOptions?.find(
                  (item) => item?.value == params?.operator_third
                )}
                onChange={(e) => onChange({ operator_third: e?.value })}
              />
            </Col>
            <Col sm="2">
              <Select
                options={store?.searchOptions}
                value={store?.searchOptions?.find(
                  (item) => item?.value == params?.search_in_third
                )}
                onChange={(e) => onChange({ search_in_third: e?.value })}
              />
            </Col>
            <Col sm="2">
              <Input
                placeholder="Search for 4"
                value={params?.search_for_fourth}
                onChange={(e) =>
                  onChange({ search_for_fourth: e?.target?.value })
                }
              />
            </Col>
            <Col sm="2">
              <Select
                options={store?.inOptions}
                value={store?.inOptions?.find(
                  (item) => item?.value == params?.operator_fourth
                )}
                onChange={(e) => onChange({ operator_fourth: e?.value })}
              />
            </Col>
            <Col sm="2">
              <Select
                options={store?.searchOptions}
                value={store?.searchOptions?.find(
                  (item) => item?.value == params?.search_in_fourth
                )}
                onChange={(e) => onChange({ search_in_fourth: e?.value })}
              />
            </Col>
          </Row>
          <Row>
            <Col sm="2">
              <Select
                placeholder="Select Vendor"
                options={store?.vendorOptions}
                value={store?.vendorOptions?.find(
                  (item) => item?.value == params?.vendor_id
                )}
                onChange={(e) => onChange({ vendor_id: e?.value })}
              />
            </Col>
            <Col sm="4">
              <Select
                placeholder="Select Sections"
                isMulti
                options={store?.sectionOptions}
                value={store?.sectionOptions?.find(
                  (item) => item?.value == params?.operator_fourth
                )}
                onChange={(e) => onChange({ section_ids: e?.value })}
              />
            </Col>
            <Col sm="2">
              <Select
                placeholder="Sort By"
                options={store?.sortOptions}
                value={store?.searchOptions?.find(
                  (item) => item?.value == params?.sort_by
                )}
                onChange={(e) => onChange({ sort_by: e?.value })}
              />
            </Col>
            <Col sm="2">
              <Select
                options={store?.directionOptions}
                value={store?.directionOptions?.find(
                  (item) => item?.value == params?.sorted
                )}
                onChange={(e) => onChange({ sorted: e?.value })}
              />
            </Col>
            <Col sm="2" className="d-flex align-items-end flex-column">
              <Button color="primary" onClick={onSearch}>
                Search
              </Button>
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
              customStyles={{
                cells: { style: { marginTop: 25, marginBottom: 25 } },
              }}
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

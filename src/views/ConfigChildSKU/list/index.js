import "@styles/react/libs/flatpickr/flatpickr.scss";
import "@styles/react/libs/react-select/_react-select.scss";
import "@styles/react/libs/tables/react-dataTable-component.scss";
import { Fragment, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { ChevronDown, PlusCircle } from "react-feather";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import Select from "react-select";
import { Button, Card, CardBody, Col, Input, Row } from "reactstrap";
import {
  getAllData,
  getBatchRouteOptions,
  getStockWithImageOptions,
  setParams,
  setSearchParams,
} from "../store";
import { columns } from "./columns";

const index = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.configchildskus);
  const [loading, setLoading] = useState(false);
  const params = store?.searchParams;

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
    }
  }, [URLParams]);

  useEffect(() => {
    if (store?.params) onSearch();
  }, [store?.params]);

  useEffect(() => {
    dispatch(getBatchRouteOptions());
    dispatch(getStockWithImageOptions());
  }, []);

  const onSearch = async () => {
    setLoading(true);
    await dispatch(getAllData());
    setLoading(false);
  };

  const onChange = async (data) => {
    await dispatch(setSearchParams(data));
  };

  const CustomHeader = () => {
    const navigate = useNavigate();
    return (
      <div className="invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75">
        <Row>
          <Col xl="10">
            {store?.total} items found costing: $
            {store?.cost?.cost?.toFixed(2) ?? 0}
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
        <Card className="px-1">
          <CardBody>
            <Row className="mb-1">
              <Col sm="2">
                <Input
                  placeholder="Search for First"
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
                    (item) => item?.value == params?.contains_first
                  )}
                  onChange={(e) => onChange({ contains_first: e?.value })}
                />
              </Col>
              <Col sm="2">
                <Select
                  options={store?.searchOptions}
                  placeholder="Search in"
                  value={store?.searchOptions?.find(
                    (item) => item?.value == params?.search_in_first
                  )}
                  onChange={(e) => onChange({ search_in_first: e?.value })}
                />
              </Col>
              <Col sm="2">
                <Input
                  placeholder="Search for Second"
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
                    (item) => item?.value == params?.contains_second
                  )}
                  onChange={(e) => onChange({ contains_second: e?.value })}
                />
              </Col>
              <Col sm="2">
                <Select
                  options={store?.searchOptions}
                  placeholder="Search in"
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
                  placeholder="Search for Third"
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
                    (item) => item?.value == params?.contains_third
                  )}
                  onChange={(e) => onChange({ contains_third: e?.value })}
                />
              </Col>
              <Col sm="2">
                <Select
                  options={store?.searchOptions}
                  placeholder="Search in"
                  value={store?.searchOptions?.find(
                    (item) => item?.value == params?.search_in_third
                  )}
                  onChange={(e) => onChange({ search_in_third: e?.value })}
                />
              </Col>
              <Col sm="2">
                <Input
                  placeholder="Search for Fourth"
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
                    (item) => item?.value == params?.contains_fourth
                  )}
                  onChange={(e) => onChange({ contains_fourth: e?.value })}
                />
              </Col>
              <Col sm="2">
                <Select
                  options={store?.searchOptions}
                  placeholder="Search in"
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
                  placeholder="Show"
                  options={store?.showOptions}
                  value={store?.showOptions?.find(
                    (item) => item?.value == params?.active
                  )}
                  onChange={(e) => onChange({ active: e?.value })}
                />
              </Col>
              <Col sm="2">
                <Select
                  placeholder="Select SKU status"
                  options={store?.skuOptions}
                  value={store?.skuOptions?.find(
                    (item) => item?.value == params?.sku_status
                  )}
                  onChange={(e) => onChange({ sku_status: e?.value })}
                />
              </Col>
              <Col sm="4">
                <Select
                  placeholder="Select Route"
                  options={store?.batchRouteOptions}
                  value={store?.batchRouteOptions?.find(
                    (item) => item?.value == params?.batch_route_id
                  )}
                  onChange={(e) => onChange({ batch_route_id: e?.value })}
                />
              </Col>
              <Col sm="2">
                <Select
                  placeholder="Select Graphic Type"
                  options={store?.typeOptions}
                  value={store?.typeOptions?.find(
                    (item) => item?.value == params?.sure3d
                  )}
                  onChange={(e) => onChange({ sure3d: e?.value })}
                />
              </Col>
              <Col sm="2" className="d-flex align-items-end flex-column">
                <Button color="primary" onClick={onSearch} disabled={loading}>
                  {loading ? "Searching" : "Search"}
                </Button>
              </Col>
            </Row>
          </CardBody>
        </Card>
        <Card className="px-1">
          <CardBody>
            <Row className="mb-1">
              <Col sm="2">
                <Select
                  placeholder="Allow Mixing"
                  options={store?.mixingOptions}
                  value={store?.mixingOptions?.find(
                    (item) => item?.value == params?.allow_mixing_update
                  )}
                  onChange={(e) => onChange({ allow_mixing_update: e?.value })}
                />
              </Col>
              <Col sm="4">
                <Select
                  placeholder="Select Route"
                  options={store?.batchRouteOptions}
                  value={store?.batchRouteOptions?.find(
                    (item) => item?.value == params?.batch_route_id_update
                  )}
                  onChange={(e) =>
                    onChange({ batch_route_id_update: e?.value })
                  }
                />
              </Col>
              <Col sm="2">
                <Input
                  placeholder="Graphic SKU"
                  value={params?.graphic_sku_update}
                  onChange={(e) =>
                    onChange({ graphic_sku_update: e?.target?.value })
                  }
                />
              </Col>
              <Col sm="2">
                <Select
                  placeholder="Graphic SKU"
                  options={store?.typeOptions}
                  value={store?.typeOptions?.find(
                    (item) => item?.value == params?.sure3d_update
                  )}
                  onChange={(e) => onChange({ sure3d_update: e?.value })}
                />
              </Col>
              <Col sm="2">
                <Input
                  type="number"
                  placeholder="Frame Size"
                  value={params?.frame_size_update}
                  onChange={(e) =>
                    onChange({ frame_size_update: e?.target?.value })
                  }
                />
              </Col>
            </Row>
            <Row className="mb-1">
              <Col
                sm="2"
                className="d-flex align-items-center justify-content-end"
              >
                <h4>Stock Numbers:</h4>
              </Col>
              <Col sm="6">
                <Select
                  placeholder="Select a Stock Numbers"
                  options={store?.stockwithImageOptions}
                  formatOptionLabel={({ label, image }) => {
                    return (
                      <div className="d-flex">
                        <img src={image} style={{ width: 50, height: 50 }} />
                        <div className="d-flex align-self-center px-2">
                          {label}
                        </div>
                      </div>
                    );
                  }}
                  value={store?.stockwithImageOptions?.find(
                    (item) => item?.value == params?.stock_select
                  )}
                  onChange={(e) => onChange({ stock_select: e?.value })}
                />
              </Col>
              <Col sm="1"></Col>
              <Col sm="2" className="d-flex align-items-end flex-column">
                <Button color="primary" onClick={onSearch} disabled={loading}>
                  {loading ? "Updating" : "Update Selected SKUs"}
                </Button>
              </Col>
            </Row>
          </CardBody>
        </Card>

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

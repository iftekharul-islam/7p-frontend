import "@styles/react/libs/flatpickr/flatpickr.scss";
import "@styles/react/libs/react-select/_react-select.scss";
import "@styles/react/libs/tables/react-dataTable-component.scss";
import { Fragment, useEffect, useState } from "react";
import {
  Copy,
  DivideCircle,
  Edit,
  Image,
  PlusCircle,
  Send,
} from "react-feather";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Select from "react-select";
import {
  Button,
  Card,
  CardBody,
  Col,
  Input,
  Row,
  UncontrolledTooltip,
} from "reactstrap";
import {
  getAllData,
  getBatchRouteOptions,
  getStockWithImageOptions,
  setParams,
  setSearchParams,
} from "../store";

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
      <div className="invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75 px-2">
        <Row>
          <Col xl="3 d-flex align-items-center">
            {store?.data?.total} Child SKUs found
          </Col>
          <Col sm="2 d-flex align-items-center" className="d-flex">
            <Input type="checkbox" />
            Select All Child SKUs
          </Col>
          <Col sm="2 d-flex align-items-center justify-content-end">
            Bypass options:
          </Col>
          <Col sm="2">
            <Select
              options={[
                { value: "1", label: "Yes" },
                { value: "0", label: "No" },
              ]}
              value={store?.inOptions?.find(
                (item) => item?.value == params?.contains_first
              )}
              onChange={(e) => onChange({ contains_first: e?.value })}
            />
          </Col>
          <Col sm="1"></Col>
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
                  navigate("/config-child-sku-add");
                }}
              >
                <PlusCircle size={14} /> New Child SKU
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    );
  };

  const CustomPagination = () => {
    const count = Number(Math.ceil(store?.data?.total / 10));

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
                        {/* <img src={image} style={{ width: 50, height: 50 }} /> */}
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

        <Card>
          <CustomHeader />
          {store?.data?.data?.length > 0 ? (
            <div>
              {store?.data?.data?.map((option, index) => {
                return (
                  <div className="m-1 p-1 border">
                    <Row>
                      <Col sm="2" className="d-flex">
                        <Input type="checkbox" className="mx-2" />
                        <Link
                          className="text-truncate text-capitalize align-middle"
                          to={`/config-child-sku-edit/${option.unique_row_value}`}
                          id={`edit-${option?.id}`}
                        >
                          <Edit size={18} className={`text-primary me-50`} />
                        </Link>
                        <UncontrolledTooltip target={`edit-${option?.id}`}>
                          Edit
                        </UncontrolledTooltip>
                        <Link
                          className="text-truncate text-capitalize align-middle"
                          to={`/inventory-edit/${option.id}`}
                          id={`create-sku-${option?.id}`}
                        >
                          <DivideCircle
                            size={18}
                            className={`text-primary me-50`}
                          />
                        </Link>
                        <UncontrolledTooltip
                          target={`create-sku-${option?.id}`}
                        >
                          Create child SKUs
                        </UncontrolledTooltip>
                        <Link
                          className="text-truncate text-capitalize align-middle"
                          to={option?.product?.product_url}
                          target="_blank"
                          id={`image-${option?.id}`}
                        >
                          <Image size={18} className={`text-primary me-50`} />
                        </Link>
                        <UncontrolledTooltip target={`image-${option?.id}`}>
                          View on Web
                        </UncontrolledTooltip>
                        <Link
                          className="text-truncate text-capitalize align-middle"
                          to={`/config-child-sku-add?id=${option.unique_row_value}`}
                          target="_blank"
                          id={`copy-${option?.id}`}
                        >
                          <Copy size={18} className={`text-primary me-50`} />
                        </Link>
                        <UncontrolledTooltip target={`copy-${option?.id}`}>
                          Duplicate
                        </UncontrolledTooltip>
                        <Link
                          className="text-truncate text-capitalize align-middle"
                          to={`/inventory-edit/${option.id}`}
                          id={`task-${option?.id}`}
                        >
                          <Send size={18} className={`text-primary me-50`} />
                        </Link>
                        <UncontrolledTooltip target={`task-${option?.id}`}>
                          Edit
                        </UncontrolledTooltip>
                      </Col>
                      <Col sm="10">
                        <div className="mx-5">
                          <h5>
                            <a
                              href={
                                "config-child-sku?search_for_first=" +
                                option?.parent_sku +
                                "&search_in_first=parent_sku"
                              }
                              className="text-danger"
                            >
                              {option?.product
                                ? option?.product?.product_name
                                : "PRODUCT NOT FOUND"}
                            </a>
                            :{" "}
                            <a
                              href={
                                "items-list?search_for_first=" +
                                option?.child_sku +
                                "&search_in_first=parent_sku"
                              }
                              className="text-danger"
                            >
                              {option?.child_sku}
                            </a>
                          </h5>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm="1"></Col>
                      <Col sm="1">
                        {option?.product && option?.product?.product_thumb ? (
                          <img
                            src={option?.product?.product_thumb}
                            alt="img"
                            width={100}
                            height={100}
                          />
                        ) : (
                          "N/A"
                        )}
                      </Col>
                      <Col sm="2">
                        {option?.inventoryunit_relation?.map(
                          (inventoryunit) => {
                            return (
                              <span>
                                {inventoryunit?.stock_no_unique !=
                                "ToBeAssigned" ? (
                                  <div>
                                    <Row>
                                      <Col sm="3">
                                        {inventoryunit?.inventory &&
                                          inventoryunit?.inventory?.warehouse !=
                                            "" && (
                                            <img
                                              src={
                                                inventoryunit?.inventory
                                                  ?.warehouse
                                              }
                                              alt="img"
                                              height={40}
                                            />
                                          )}
                                      </Col>
                                      <Col sm="9">
                                        <a
                                          href={
                                            "/inventories?search_for_first=" +
                                            inventoryunit?.stock_no_unique +
                                            "&search_in_first=stock_no_unique"
                                          }
                                          target="_blank"
                                          className="text-danger"
                                        >
                                          {inventoryunit?.stock_no_unique}
                                        </a>
                                        {inventoryunit?.unit_qty != 1 && (
                                          <div>x {inventoryunit?.unit_qty}</div>
                                        )}
                                      </Col>
                                    </Row>
                                  </div>
                                ) : (
                                  <div>{inventoryunit?.stock_no_unique}</div>
                                )}
                              </span>
                            );
                          }
                        )}
                      </Col>
                      <Col sm="1">
                        Mix:
                        <Select
                          className="react-select"
                          classNamePrefix="select"
                          options={[
                            { value: "1", label: "Yes" },
                            { value: "0", label: "No" },
                          ]}
                          onChange={(e) =>
                            onChange({ allow_mixing_update: e?.value })
                          }
                        />
                      </Col>
                      <Col sm="2">
                        Route:
                        <Select
                          className="react-select"
                          classNamePrefix="select"
                          options={[
                            { value: "1", label: "Yes" },
                            { value: "0", label: "No" },
                          ]}
                          value={{
                            value: option?.allow_mixing,
                            label: option?.allow_mixing == 1 ? "Yes" : "No",
                          }}
                        />
                      </Col>
                      <Col sm="2">
                        Graphic SKU:
                        <Select
                          className="react-select"
                          classNamePrefix="select"
                          options={[
                            { value: "1", label: "Yes" },
                            { value: "0", label: "No" },
                          ]}
                          onChange={(e) =>
                            onChange({ allow_mixing_update: e?.value })
                          }
                        />
                      </Col>
                      <Col sm="2">
                        <Row>
                          <Col sm="6">Template:</Col>
                          <Col sm="6">
                            {option?.design?.template == "1"
                              ? "Found"
                              : "Not Found"}
                          </Col>
                        </Row>
                        <Row>
                          <Col sm="6">Settings:</Col>
                          <Col sm="6">
                            {option?.design?.xml == "1" ? "Found" : "Not Found"}
                          </Col>
                        </Row>
                        <Row>
                          <Col sm="6">Use Sure3d:</Col>
                          <Col sm="6">
                            {" "}
                            <Input type="checkbox" />
                          </Col>
                        </Row>
                        <Row className="d-flex align-items-center">
                          <Col sm="6">Orientation:</Col>
                          <Col sm="6">
                            <Select
                              className="react-select"
                              classNamePrefix="select"
                              options={[
                                { value: "0", label: "portrait" },
                                { value: "1", label: "landscape" },
                              ]}
                              value={{
                                value: option?.allow_mixing,
                                label: option?.allow_mixing == 1 ? "Yes" : "No",
                              }}
                              onChange={(e) =>
                                onChange({ allow_mixing_update: e?.value })
                              }
                            />
                          </Col>
                        </Row>
                        <Row className="d-flex  align-items-center">
                          <Col sm="6">Frame Size:</Col>
                          <Col sm="6">
                            {" "}
                            <Input
                              type="number"
                              name="frame_size_update"
                              onChange={(e) =>
                                onChange({
                                  frame_size_update: e?.target?.value,
                                })
                              }
                            />
                          </Col>
                        </Row>
                        <Row>
                          <Col sm="6">Mirror:</Col>
                          <Col sm="6">
                            {" "}
                            <Input
                              type="checkbox"
                              onChange={(e) =>
                                onChange({ fs_: e?.target?.checked })
                              }
                            />
                          </Col>
                        </Row>
                      </Col>
                      <Col sm="1">
                        <Button color="primary">Update</Button>
                      </Col>
                    </Row>
                  </div>
                );
              })}
              <CustomPagination />
            </div>
          ) : (
            <div className="d-flex align-items-center justify-content-center">
              No Data Found
            </div>
          )}
        </Card>
      </Fragment>
    </div>
  );
};
export default index;

import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { Button, Card, Col, Input, Row } from "reactstrap";
import {
    getAdjustInventoryData,
    updateAdjustInventoryData,
} from "../store/index";

import "@styles/react/libs/react-select/_react-select.scss";
import "@styles/react/libs/tables/react-dataTable-component.scss";
import { DebounceInput } from "react-debounce-input";
import { adjustInventorycolumns } from "./adjustInventorycolumns";

const AdjustInventory = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("qStockNumber");
  const store = useSelector((state) => state.adjustments);
  const [search, setSearch] = useState(q ?? null);

  const AdjustInventory = store?.AdjustInventory ?? null;
  const [data, setData] = useState({
    count_note: "Quantity on Hand adjusted",
    adjust_note: "Manual Inventory Adjustment",
  });

  const onChange = (e) => {
    setData({ ...data, [e?.target?.name]: e?.target?.value });
  };

  useEffect(() => {
    dispatch(getAdjustInventoryData({ q: search }));
  }, [search]);

  const onUpdate = (term) => {
    let qData = null;
    if (term == "count") {
      qData = {
        count_stock_no: AdjustInventory?.stock_no_unique,
        count_note: data?.count_note,
        count_quantity: data?.count_quantity,
      };
    } else {
      qData = {
        count_stock_no: AdjustInventory?.stock_no_unique,
        adjust_note: data?.adjust_note,
        adjust_quantity: data?.adjust_quantity,
      };
    }
    dispatch(updateAdjustInventoryData(qData));
  };

  const CustomHeader = () => {
    return (
      <div className="w-100">
        <Row>
          <Col
            xl="2"
            className="d-flex align-items-end align-content-center flex-wrap"
          >
            <div>Search by Stock Number</div>
          </Col>
          <Col
            xl="3"
            className="d-flex align-items-sm-start justify-content-xl-start justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1"
          >
            <div className="d-flex align-items-center table-header-actions w-100">
              <DebounceInput
                className="form-control"
                color="primary"
                debounceTimeout={300}
                autoFocus
                placeholder="Search Here"
                value={search}
                onChange={(e) => {
                  e.preventDefault();
                  setSearch(e.target.value);
                }}
              />
            </div>
          </Col>
          <Col xl="7"></Col>
        </Row>
      </div>
    );
  };

  return (
    <div className="react-dataTable">
      <CustomHeader />
      <hr />
      {AdjustInventory && (
        <>
          <Card className="my-1">
            <Row>
              <Col sm="2" className="d-flex align-items-center flex-column">
                <img
                  src={AdjustInventory?.warehouse}
                  height="100"
                  width="100"
                />
              </Col>
              <Col sm="10">
                <Row>
                  <h2>
                    {AdjustInventory?.stock_no_unique}:{" "}
                    {AdjustInventory?.stock_name_discription}
                  </h2>
                </Row>
                <hr />
                <Row>
                  <small>Bin: {AdjustInventory?.wh_bin}</small>
                </Row>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col sm="2"></Col>
              <Col sm="2" className="d-flex align-items-center">
                <table className="table table-bordered">
                  <tr>
                    <td>Purchases</td>
                    <td>{AdjustInventory?.total_purchase}</td>
                  </tr>
                  <tr>
                    <td>Sales</td>
                    <td>{AdjustInventory?.total_sale}</td>
                  </tr>
                  <tr>
                    <td>Quantity On Hand</td>
                    <td>{AdjustInventory?.qty_on_hand}</td>
                  </tr>
                  <tr>
                    <td>Allocated</td>
                    <td>{AdjustInventory?.qty_alloc}</td>
                  </tr>
                  <tr>
                    <td>Expected</td>
                    <td>{AdjustInventory?.qty_exp}</td>
                  </tr>
                  <tr>
                    <td>Available</td>
                    <td>{AdjustInventory?.qty_av}</td>
                  </tr>
                </table>
              </Col>
              <Col sm="2"></Col>
              <Col sm="6">
                <Row className="pb-2">
                  <p>Update Quantity on Hand:</p>
                  <Row className="d-flex">
                    <Col sm="2">
                      <Input
                        type="number"
                        name="count_quantity"
                        value={data?.count_quantity}
                        onChange={onChange}
                      />
                    </Col>
                    <Col sm="2" className="d-flex align-items-center">
                      Note:
                    </Col>
                    <Col sm="6">
                      <Input
                        type="text"
                        name="count_note"
                        value={data?.count_note}
                        onChange={onChange}
                      />
                    </Col>
                    <Col sm="2">
                      <Button onClick={() => onUpdate("count")}>Update</Button>
                    </Col>
                  </Row>
                </Row>
                <Row>
                  <p>Add or subtract units:</p>
                  <Row className="d-flex">
                    <Col sm="2">
                      <Input
                        type="number"
                        name="adjust_quantity"
                        value={data?.adjust_quantity}
                        onChange={onChange}
                      />
                    </Col>
                    <Col sm="2" className="d-flex align-items-center">
                      Note:
                    </Col>
                    <Col sm="6">
                      <Input
                        type="text"
                        name="adjust_note"
                        value={data?.adjust_note}
                        onChange={onChange}
                      />
                    </Col>
                    <Col sm="2">
                      <Button onClick={() => onUpdate("adjust")}>Update</Button>
                    </Col>
                  </Row>
                </Row>
              </Col>
            </Row>
          </Card>
          <hr />
          <DataTable
striped
            subHeader
            responsive
            columns={adjustInventorycolumns}
            className="react-dataTable"
            data={AdjustInventory?.adjustments}
          />
        </>
      )}
    </div>
  );
};
export default AdjustInventory;

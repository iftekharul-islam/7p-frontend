import "@styles/react/libs/flatpickr/flatpickr.scss";
import "@styles/react/libs/react-select/_react-select.scss";
import { Fragment, useEffect, useState } from "react";
import Flatpickr from "react-flatpickr";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Select from "react-select";
import { Button, Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import { exportQuickbooks, exportQuickbooksCSV, getExportData, getOrderStoreOptions } from "../store";

const index = () => {
  const dispatch = useDispatch();
  const { exportData, orderStoreOptions } = useSelector(
    (state) => state.exports
  );
  const [qbData, setQbData] = useState({});
  const [csvData, setCsvData] = useState({});

  const onQuickbooksChange = (e) => {
    setQbData({ ...qbData, [e?.target?.name]: e.target.value });
  };

  const onCsvChange = (e) => {
    setCsvData({ ...csvData, [e?.target?.name]: e.target.value });
  };

  useEffect(() => {
    dispatch(getOrderStoreOptions());
    dispatch(getExportData());
  }, []);

  const exportqb = () => {
    dispatch(exportQuickbooks(qbData));
  };

  const exportqbcsv = () => {
    dispatch(exportQuickbooksCSV(qbData));
  };

  

  return (
    <Fragment>
      <Row>
        <Col sm="1"></Col>
        <Col sm="10">
          <Card className="m-2">
            <CardHeader>
              <h4>Create Quickbooks Export by Date</h4>
            </CardHeader>
            <CardBody>
              <Row>
                <Col sm="4">
                  <Select
                    className="React"
                    classNamePrefix="select"
                    name="color"
                    options={orderStoreOptions}
                    value={orderStoreOptions?.find(
                      (itm) => itm.value === qbData.store
                    )}
                    onChange={(e) =>
                      onQuickbooksChange({
                        target: {
                          name: "store_ids",
                          value: e?.map((item) => item?.value),
                        },
                      })
                    }
                    isMulti
                  />
                </Col>
                <Col sm="3">
                  <Flatpickr
                    className="form-control"
                    id="date"
                    placeholder="End Date"
                    value={qbData?.start_date ?? null}
                    options={{ dateFormat: "d-m-Y" }}
                    onChange={(date) =>
                      onQuickbooksChange({
                        target: { name: "start_date", value: date[0] },
                      })
                    }
                  />
                </Col>
                <Col sm="3">
                  <Flatpickr
                    className="form-control"
                    id="date"
                    placeholder="End Date"
                    value={qbData?.end_date ?? null}
                    options={{ dateFormat: "d-m-Y" }}
                    onChange={(date) =>
                      onQuickbooksChange({
                        target: { name: "end_date", value: date[0] },
                      })
                    }
                  />
                </Col>
                <Col sm="2">
                  <Button
                    className="btn-icon d-flex"
                    color="primary"
                    onClick={exportqb}
                  >
                    Create
                  </Button>
                </Col>
              </Row>
            </CardBody>
          </Card>
          <Card className="m-2">
            <CardHeader>
              <h4>Billing CSV Export by Date (Max select 15 Days)</h4>
            </CardHeader>
            <CardBody>
              <Row>
                <Col sm="4">
                  <Select
                    className="React"
                    classNamePrefix="select"
                    name="color"
                    options={orderStoreOptions}
                    value={orderStoreOptions?.find(
                      (itm) => itm.value === csvData.store
                    )}
                    onChange={(e) =>
                      onCsvChange({
                        target: {
                          name: "store_ids",
                          value: e?.map((item) => item?.value),
                        },
                      })
                    }
                    isMulti
                  />
                </Col>
                <Col sm="3">
                  <Flatpickr
                    className="form-control"
                    id="date"
                    placeholder="End Date"
                    value={csvData?.start_date ?? null}
                    options={{ dateFormat: "d-m-Y" }}
                    onChange={(date) =>
                      onCsvChange({
                        target: { name: "start_date", value: date[0] },
                      })
                    }
                  />
                </Col>
                <Col sm="3">
                  <Flatpickr
                    className="form-control"
                    id="date"
                    placeholder="End Date"
                    value={csvData?.end_date ?? null}
                    options={{ dateFormat: "d-m-Y" }}
                    onChange={(date) =>
                      onCsvChange({
                        target: { name: "end_date", value: date[0] },
                      })
                    }
                  />
                </Col>
                <Col sm="2">
                  <Button
                    className="btn-icon d-flex"
                    color="primary"
                    onClick={exportqbcsv}
                  >
                    Create CSV
                  </Button>
                </Col>
              </Row>
            </CardBody>
          </Card>

          {exportData?.csv_summary?.length > 0 && (
            <Card className="m-2">
              <CardHeader>
                <h4>Shipment Upload Files</h4>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col sm="8" className="border p-1">
                    Store
                  </Col>
                  <Col sm="4" className="border p-1">
                    Shipment Count
                  </Col>
                </Row>
                {exportData?.csv_summary?.map((item, index) => (
                  <Row>
                    <Col sm="8" className="border px-1">
                      {item?.store_name}
                    </Col>
                    <Col sm="4" className="border px-1">
                      <Link
                        to={`/transfer/export/details/${item?.store_id}/csv`}
                      >
                        {item?.count}
                      </Link>
                    </Col>
                  </Row>
                ))}
              </CardBody>
            </Card>
          )}
          {exportData?.dropship?.length > 0 && (
            <Card className="m-2">
              <CardHeader>
                <h4>Drop Ship Order Files</h4>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col sm="8" className="border p-1">
                    Store
                  </Col>
                  <Col sm="4" className="border p-1">
                    Shipment Count
                  </Col>
                </Row>
                {exportData?.dropship?.map((item, index) => (
                  <Row>
                    <Col sm="8" className="border px-1">
                      {item?.NAME}
                    </Col>
                    <Col sm="4" className="border px-1">
                      <Link
                        to={`/transfer/export/details/${item?.store_id}/csv?dropship=true`}
                      >
                        {item?.COUNT}
                      </Link>
                    </Col>
                  </Row>
                ))}
              </CardBody>
            </Card>
          )}
          {exportData?.qb_summary?.length > 0 && (
            <Card className="m-2">
              <CardHeader>
                <h4>Quickbooks Exports</h4>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col sm="8" className="border p-1">
                    Store
                  </Col>
                  <Col sm="4" className="border p-1">
                    Shipment Count
                  </Col>
                </Row>
                {exportData?.qb_summary?.map((item, index) => (
                  <Row>
                    <Col sm="8" className="border px-1">
                      {item?.store_name}
                    </Col>
                    <Col sm="4" className="border px-1">
                      <Link
                        to={`/transfer/export/details/${item?.store_id}/qb`}
                      >
                        {item?.count}
                      </Link>
                    </Col>
                  </Row>
                ))}
              </CardBody>
            </Card>
          )}
        </Col>
        <Col sm="1"></Col>
      </Row>
    </Fragment>
  );
};
export default index;

import "@styles/react/libs/flatpickr/flatpickr.scss";
import "@styles/react/libs/react-select/_react-select.scss";
import "@styles/react/libs/tables/react-dataTable-component.scss";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
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
  getGraphicsStatusOptions,
  getReasonOptions,
  getSectionOptions,
  setSearchParams,
} from "../store";

const index = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.rejects);
  const [loading, setLoading] = useState(false);
  const params = store?.searchParams;

  useEffect(() => {
    dispatch(getSectionOptions());
    dispatch(getGraphicsStatusOptions());
    dispatch(getReasonOptions());
  }, []);

  useEffect(() => {
    dispatch(getAllData());
  }, [params]);

  const onSearch = async () => {
    setLoading(true);
    await dispatch(getAllData());
    setLoading(false);
  };

  const onChange = (data) => {
    dispatch(setSearchParams(data));
  };

  const updateOnClick = async (e, line) => {
    e.preventDefault();
    await dispatch(
      setSearchParams({
        graphic_status: line?.graphic_status,
        reason: line?.rejection_reason,
      })
    );
    onSearch();
  };

  return (
    <div className="app-user-list">
      <Fragment>
        <Card className="px-1">
          <CardHeader>
            <h4 className="card-title">Process Rejects</h4>
          </CardHeader>
          <CardBody>
            <Row>
              <Col sm="2">
                <Input
                  placeholder="Batch Number"
                  value={params?.batch_number}
                  onChange={(e) => {
                    onChange({ batch_number: e?.target?.value });
                  }}
                />
              </Col>
              <Col sm="2">
                <Select
                  className="react-select"
                  classNamePrefix="select"
                  options={store?.sectionOptions}
                  placeholder="Select a Department"
                  value={store?.sectionOptions?.find(
                    (item) => item?.value == params?.section
                  )}
                  onChange={(e) => onChange({ section: e?.value })}
                  isClearable={true}
                />
              </Col>

              <Col sm="2">
                <Select
                  className="react-select"
                  classNamePrefix="select"
                  options={store?.graphic_statusOptions}
                  placeholder="Select Status"
                  value={store?.graphic_statusOptions?.find(
                    (item) => item?.value == params?.graphic_status
                  )}
                  onChange={(e) => onChange({ graphic_status: e?.value })}
                  isClearable={true}
                />
              </Col>

              <Col sm="3">
                <Select
                  className="react-select"
                  classNamePrefix="select"
                  options={store?.reasonOptions}
                  placeholder="Select a reason"
                  value={store?.reasonOptions?.find(
                    (item) => item?.value == params?.reason
                  )}
                  onChange={(e) => onChange({ reason: e?.value })}
                  isClearable={true}
                />
              </Col>
              <Col sm="1" className="d-flex align-items-start flex-column">
                <Button color="primary" onClick={onSearch} disabled={loading}>
                  {loading ? "Please Wait" : "Filter"}
                </Button>
              </Col>
              <Col sm="2" className="d-flex align-items-start flex-column">
                <Button color="primary" onClick={onSearch} disabled={loading}>
                  {loading ? "Please Wait" : "Send All to First Station"}
                </Button>
              </Col>
            </Row>
          </CardBody>
        </Card>

        {store?.data?.summary?.length > 0 ? (
          <span>
            <Card>
              <CardBody>
                <Row className="mb-1">
                  <Col sm="6">Type</Col>
                  <Col sm="5">Reason</Col>
                  <Col sm="1">Count</Col>
                </Row>
                {store?.data?.summary?.map((line, index) => (
                  <Row key={index} className="mb-1">
                    <Col sm="6">
                      {
                        store?.graphic_statusOptions?.find(
                          (item) => item?.value == line?.graphic_status
                        )?.label
                      }
                    </Col>
                    <Col sm="5">
                      {
                        store?.reasonOptions?.find(
                          (item) => item?.value == line?.rejection_reason
                        )?.label
                      }
                    </Col>
                    <Col sm="1">
                      <Link onClick={(e) => updateOnClick(e, line)}>
                        {line?.count}
                      </Link>
                    </Col>
                  </Row>
                ))}
                <Row className="mb-1">
                  <Col sm="8"></Col>
                  <Col sm="3">Total</Col>
                  <Col sm="1">
                    {store?.data?.summary?.reduce(
                      (a, b) => a + (b["count"] || 0),
                      0
                    )}
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </span>
        ) : store?.data?.batch_array?.length > 0 ? (
          <Card>
            <CardHeader>
              <h4>
                {store?.data?.total_items} found in {store?.data?.batch_array?.length}{" "}
                Batch/es
              </h4>
            </CardHeader>
            {/* TODO need to update with data format */}
            <CardBody>
              {store?.data?.batch_array?.map((batch, index) => (
                <span>
                  <Row>
                    <Col sm="12"></Col>
                  </Row>
                  {batch?.items?.length > 0 && batch?.items?.map((item, index) => (
                    <Row key={index} className="mb-1">
                      <Col sm="2">Test
                        <Link to={`/customer-order-edit/${item?.order?.id}`}>
                          {item?.order?.short_order}
                        </Link>
                        </Col>
                    </Row>
                  ))}
                </span>
              ))}
            </CardBody>
          </Card>
        ) : (
          <Card>
            <CardBody>
              <h4 className="d-flex align-items-center justify-content-center">
                No Rejects Found
              </h4>
            </CardBody>
          </Card>
        )}
      </Fragment>
    </div>
  );
};
export default index;

import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardBody, Col, Input, Row } from "reactstrap";
import RejectionModal from "../../BatchList/show/RejectModal";
import ShippingPanel from "../../WAP/view/ShippingPanel";
import { getOrder, getShowOrder, setSearchParams } from "../store";

const index = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const { orderData, batchData, searchParams } = useSelector(
    (state) => state?.qualityControls
  );

  const {
    id,
    batch,
    batch_number,
    order,
    items,
    item_options,
    dest,
    thumbs,
    label,
    user,
  } = orderData ?? {};

  const [modalData, setModalData] = useState(null);
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  const getOrderDataList = async () => {
    setLoading(true);
    if (searchParams) {
      const res = await dispatch(getOrder());
      if (res?.payload?.status == 206) {
        getShowOrderList();
      }
    } else {
      navigate("/quality-control");
    }
    setLoading(false);
  };

  const getShowOrderList = async () => {
    setLoading(true);
    if (searchParams) {
      const res = await dispatch(getShowOrder());
      if (res?.payload?.status == 206) {
        getOrderDataList();
      }
    } else {
      navigate("/quality-control");
    }
    setLoading(false);
  };

  useEffect(() => {
    getOrderDataList();
  }, []);

  const handleSearch = async () => {
    console.log("A");
  };

  const rejectItem = async (e, item_id) => {
    e.preventDefault();
    setModalData({item_id, id, origin: 'QC'})
    toggle();
  }

  return (
    <Fragment>
      <Card>
        <CardBody>
          <Row className="mb-1">
            <Col md="2">
              <Input
                type="text"
                placeholder="Enter Batch"
                value={searchParams?.batch_number}
                onChange={(e) =>
                  dispatch(setSearchParams({ batch_number: e?.target?.value }))
                }
              />
            </Col>
            <Col md="2">
              <Input
                type="text"
                placeholder="Enter Batch"
                value={searchParams?.user_barcode}
                onChange={(e) =>
                  dispatch(setSearchParams({ user_barcode: e?.target?.value }))
                }
              />
            </Col>
            <Col md="2">
              <Button color="primary" onClick={handleSearch} disabled={loading}>
                {loading ? "Please Wait..." : "Open Batch"}
              </Button>
            </Col>
          </Row>
          <Row className="d-flex justify-content-between mb-2">
            <Col md="6">
              <h2>
                Order:{" "}
                <b>
                  <a href={`/customer-order-edit/${order?.id}`} target="_blank">
                    {order?.short_order}
                  </a>
                </b>
              </h2>
            </Col>
            <Col md="6" className="d-flex justify-content-end">
              <h2>
                Batch:{" "}
                <b>
                  <a href={`/batch-list/${batch_number}`} target="_blank">
                    {batch_number}
                  </a>
                </b>
              </h2>
            </Col>
          </Row>

          {items?.map((item, index) => (
            <Row className="border rounded mb-2 p-2">
              <Col md="8">
                <h4>
                  <b>
                    <a href={item?.item_url} target="_blank">
                      {item?.item_description}
                    </a>
                  </b>
                </h4>
              </Col>
              <Col md="2" className="d-flex justify-content-center">
                <Button color="primary" className="mr-1" onClick={e=>rejectItem(e,item?.id)}>
                  Reject Item
                </Button>
              </Col>
              <Col md="2" className="d-flex justify-content-center">
                <Button color="primary" className="mr-1">
                  Set first-class
                </Button>
              </Col>
              <hr />
              <Col md="3">
                <a href={item?.item_url} target="_blank">
                  <img src={item?.item_thumb} height="250" width="250" />
                </a>
              </Col>
              <Col md="6">
                {item?.child_sku}
                <br />
                Item: {item?.id}
                <br />
                {item?.item_quantity > 1 && (
                  <strong style="font-size: 125%;">
                    QTY: {item?.item_quantity}
                  </strong>
                )}
                <br />
                <div className="mx-2">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: item_options[item?.id],
                    }}
                  />
                </div>
              </Col>
              <Col md="3">
                {thumbs[item?.id] && (
                  <img src={thumbs[item?.id][0]} width="250" height="250" />
                )}
              </Col>
            </Row>
          ))}
          {dest == "ship" ? (
            <Row>
              <Col sm="1"></Col>
              <Col sm="8">
              <ShippingPanel data={orderData} origin="QC"/>
              </Col>
            </Row>
          ) : (
            <Row>
              <Col md="8"></Col>
              <Col md="4">
                <Button color="primary" className="mr-1">
                  {items?.length > 1
                    ? items?.length + " Lines Approved by " + user?.name
                    : "Item Approved by " + user?.name}
                </Button>
              </Col>
            </Row>
          )}
        </CardBody>
      </Card>
      <RejectionModal isOpen={open} toggle={toggle} data={modalData} />
    </Fragment>
  );
};

export default index;

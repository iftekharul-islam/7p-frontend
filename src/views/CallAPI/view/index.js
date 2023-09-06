import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Input,
  Row,
} from "reactstrap";
import { CallAPI } from "../store";

const index = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.callAPIs);
  const [api, setApi] = useState("");

  const callApi = async () => {
    await dispatch(CallAPI(api));
  };

  useEffect(() => {
    if (data?.link) {
      window.open(data?.link, "_blank");
    }
  }, [data]);
  
  return (
    <Fragment>
      <Card>
        <CardHeader>
          <h1>Call API</h1>
        </CardHeader>
        <CardBody>
          <p>This is a sample page for calling API.</p>
          <Row>
            <Col md="4">
              <Row>
                <Col md="10">
                  <Input
                    type="text"
                    placeholder="Provide your link here"
                    value={api}
                    onChange={(e) => setApi(e?.target?.value)}
                  />
                </Col>
                <Col md="2">
                  <Button color="primary" onClick={callApi}>
                    Call
                  </Button>
                </Col>
              </Row>
              <Row className="mt-2">
                <h4>API List</h4>
                <li>
                  <Link
                    onClick={(e) => {
                      e.preventDefault();
                      setApi("getshopifyorder?orderid=");
                    }}
                  >
                    Get Shopify Order
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={(e) => {
                      e.preventDefault();
                      setApi("initial_token_generate_request");
                    }}
                  >
                    Initial Token Generate Request
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={(e) => {
                      e.preventDefault();
                      setApi("generate_shopify_token?hmac=");
                    }}
                  >
                    Generate Shopify Token
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={(e) => {
                      e.preventDefault();
                      setApi("getShopifyorderbyordernumber?orderno=");
                    }}
                  >
                    Get Shopify Order by Order Number
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={(e) => {
                      e.preventDefault();
                      setApi("synorderbydate?created_at_min=2023-08-01&created_at_max=2023-09-02");
                    }}
                  >
                    Sync Order by Date
                  </Link>
                </li>
              </Row>
            </Col>
            <Col md="8">
              {data && (
                <Col md="12">
                  <Card style={{ height: 600 }}>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                  </Card>
                </Col>
              )}
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default index;

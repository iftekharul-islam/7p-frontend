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

  const [list, setList] = useState([
    { name: "Get Shopify Order", api: "getshopifyorder?orderid=", type: "api" },
    { name: "Shopify Order", api: "shopify-order/{id}", type: "api" },
    {
      name: "Shopify Thumb",
      api: "shopify-thumb/{order_id}/{item_id}",
      type: "api",
    },
    {
      name: "Update Shopify Thumb",
      api: "update-shopify-thumb/{order_id}/{item_id}",
      type: "api",
    },
    {
      name: "Initial Token Generate Request",
      api: "initial_token_generate_request",
      type: "api",
    },
    {
      name: "Generate Shopify Token",
      api: "generate_shopify_token?hmac=",
      type: "api",
    },
    {
      name: "Get Shopify Order by Order Number",
      api: "getShopifyorderbyordernumber?orderno=",
      type: "api",
    },
    {
      name: "Sync Order by Date",
      api: "synorderbydate?created_at_min=2023-08-01&created_at_max=2023-09-02",
      type: "api",
    },
    {
      name: "Sync Order between Id",
      api: "synOrderBetweenId?since_id_from=5108045709475&since_id_to=5108174323875&limit=10",
      type: "api",
    },
    {
      name: "Import Ship Station",
      api: "import/ship-station",
      type: "download",
    },
    {
      name: "Get Coupon Products",
      api: "getcouponproducts?term=",
      type: "download",
    },
  ]);

  const callApi = async () => {
    if (api?.type == "api") {
      await dispatch(CallAPI(api));
    } else if (api?.type == "download") {
      window.open("https://7papi.monogramonline.com/" + api?.api, "_blank");
    }
  };

  useEffect(() => {
    if (data?.link) {
      window.open(data?.link, "_blank");
    }
  }, [data?.link]);

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
                    value={api?.api}
                    onChange={(e) => setApi({ ...api, api: e?.target?.value })}
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
                {list?.map((item, index) => (
                  <li key={index}>
                    <Link
                      onClick={(e) => {
                        e.preventDefault();
                        setApi(item);
                      }}
                    >
                      {item?.name}
                    </Link>
                  </li>
                ))}
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

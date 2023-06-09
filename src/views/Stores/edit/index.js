import { selectThemeColors } from "@utils";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Select from "react-select";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Form,
  Input,
  Label,
  Row,
} from "reactstrap";
import {
  UpdateStore,
  getBatchOptions,
  getCompanyOptions,
  getConfirmOptions,
  getInputOptions,
  getQCOptions,
  getStore
} from "../store";

const index = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState(null);
  const store = useSelector((state) => state.stores);

  useEffect(() => {
    dispatch(getCompanyOptions());
    dispatch(getInputOptions());
    dispatch(getBatchOptions());
    dispatch(getConfirmOptions());
    dispatch(getQCOptions());
    dispatch(getStore(id));
  }, []);

  useEffect(() => {
    if (store?.store) {
      setData(store?.store);
    }
  }, [store?.store]);

  const onChange = (e) => {
    setData({
      ...data,
      [e.target?.name]: e.target?.value,
    });
  };
  const onSelectChange = (name, value) => {
    setData({
      ...data,
      [name]: value,
    });
  };
  const onCheckboxChange = (e) => {
    setData({
      ...data,
      [e.target?.name]: e.target?.checked,
    });
  };

  const onSubmit = async () => {
    const res = await dispatch(UpdateStore({id, data}));
    if (res?.payload?.status) {
      navigate("/stores");
    }
  };

  return (
    <Fragment>
      <Form>
        <Card>
          <CardHeader>
            <CardTitle tag="h4">Update Store</CardTitle>
          </CardHeader>
          <CardBody>
            <Row>
              <Col sm="4">
                <Label className="form-label" for="store_name">
                  Name
                </Label>
                <Input
                  type="text"
                  name="store_name"
                  id="store_name"
                  placeholder="Name"
                  value={data?.store_name}
                  onChange={onChange}
                  disabled
                />
              </Col>
              <Col sm="4">
                <Label className="form-label" for="store_id">
                  ID
                </Label>
                <Input
                  type="text"
                  name="store_id"
                  id="store_id"
                  placeholder="ID"
                  value={data?.store_id}
                  onChange={onChange}
                />
              </Col>
              <Col sm="4">
                <Label className="form-label" for="nameVertical">
                  Company
                </Label>
                <Select
                  className="react-select"
                  classNamePrefix="select"
                  theme={selectThemeColors}
                  placeholder="Select Company"
                  options={store?.companyOptions}
                  value={store?.companyOptions?.find(
                    (item) => item?.value === parseInt(data?.company)
                  )}
                  onChange={(e) => onSelectChange("company", e.value)}
                  isClearable={false}
                />
              </Col>
            </Row>
            <Row>
              <Col sm="4">
                <Label className="form-label" for="email">
                  E-mail
                </Label>
                <Input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="E-mail"
                  value={data?.email}
                  onChange={onChange}
                />
              </Col>
              <Col sm="4">
                <Label className="form-label" for="class_name">
                  Class Name
                </Label>
                <Input
                  type="text"
                  name="class_name"
                  id="class_name"
                  placeholder="Class Name"
                  value={data?.class_name}
                  onChange={onChange}
                />
              </Col>
              <Col sm="4">
                <Label className="form-label" for="input">
                  Data Input
                </Label>
                <Select
                  className="react-select"
                  classNamePrefix="select"
                  theme={selectThemeColors}
                  placeholder="Select Data Input"
                  options={store?.inputOptions}
                  value={store?.inputOptions?.find(
                    (item) => item?.value === parseInt(data?.input)
                  )}
                  onChange={(e) => onSelectChange("input", e.value)}
                  isClearable={false}
                />
              </Col>
            </Row>
            <hr />
            <Row>
              <Col sm="4">
                <Label className="form-label" for="change_items">
                  Order Items Changeable
                </Label>
                <Select
                  className="react-select"
                  classNamePrefix="select"
                  theme={selectThemeColors}
                  placeholder="Select..."
                  options={store?.changeItemsOptions}
                  value={store?.changeItemsOptions?.find(
                    (item) => item?.value === parseInt(data?.change_items)
                  )}
                  onChange={(e) => onSelectChange("change_items", e.value)}
                  isClearable={false}
                />
              </Col>
              <Col sm="4">
                <Label className="form-label" for="batch">
                  Batch Items
                </Label>
                <Select
                  className="react-select"
                  classNamePrefix="select"
                  theme={selectThemeColors}
                  placeholder="Select Batch Items"
                  options={store?.batchOptions}
                  value={store?.batchOptions?.find(
                    (item) => item?.value === parseInt(data?.batch)
                  )}
                  onChange={(e) => onSelectChange("batch", e.value)}
                  isClearable={false}
                />
              </Col>
              <Col sm="4">
                <Label className="form-label" for="qc">
                  Quality Control
                </Label>
                <Select
                  className="react-select"
                  classNamePrefix="select"
                  theme={selectThemeColors}
                  placeholder="Select Quality Control"
                  options={store?.qcOptions}
                  value={store?.qcOptions?.find(
                    (item) => item?.value === parseInt(data?.qc)
                  )}
                  onChange={(e) => onSelectChange("qc", e.value)}
                  isClearable={false}
                />
              </Col>
            </Row>

            <Row>
              <Col sm="4">
                <Label className="form-label" for="confirm">
                  Order Confirmation
                </Label>
                <Select
                  className="react-select"
                  classNamePrefix="select"
                  theme={selectThemeColors}
                  placeholder="Select Order Confirmation"
                  options={store?.confirmOptions}
                  value={store?.confirmOptions?.find(
                    (item) => item?.value === parseInt(data?.confirm)
                  )}
                  onChange={(e) => onSelectChange("confirm", e.value)}
                  isClearable={false}
                />
              </Col>
              <Col sm="4">
                <Label className="form-label" for="ship">
                  Shipping Notification
                </Label>
                <Select
                  className="react-select"
                  classNamePrefix="select"
                  theme={selectThemeColors}
                  placeholder="Select Shipping Notification"
                  options={store?.confirmOptions}
                  value={store?.confirmOptions?.find(
                    (item) => item?.value === parseInt(data?.ship)
                  )}
                  onChange={(e) => onSelectChange("ship", e.value)}
                  isClearable={false}
                />
              </Col>
              <Col sm="4">
                <Label className="form-label" for="qb_export">
                  QuickBooks Export
                </Label>
                <Select
                  className="react-select"
                  classNamePrefix="select"
                  theme={selectThemeColors}
                  placeholder="Select QuickBooks Export"
                  options={store?.qbOptions}
                  value={store?.qbOptions?.find(
                    (item) => item?.value === parseInt(data?.qb_export)
                  )}
                  onChange={(e) => onSelectChange("qb_export", e.value)}
                  isClearable={false}
                />
              </Col>
            </Row>
            <hr />
            {data?.confirm > 1 && (
              <>
                <Row>
                  <Col sm="12">
                    <Label className="form-label" for="ship_method">
                      Notification Banner Image URL
                    </Label>
                    <Input
                      type="text"
                      name="ship_banner_image"
                      id="ship_banner_image"
                      placeholder="Notification Banner Image URL"
                      value={data?.ship_banner_image}
                      onChange={onChange}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col sm="12">
                    <Label className="form-label" for="ship_banner_url">
                      Banner Image Link
                    </Label>
                    <Input
                      type="text"
                      name="ship_banner_url"
                      id="ship_banner_url"
                      placeholder="Banner Image Link"
                      value={data?.ship_banner_url}
                      onChange={onChange}
                    />
                  </Col>
                </Row>
                <hr />
              </>
            )}
            <Row>
              <Col sm="4">
                <Label className="form-label" for="ship_name">
                  Return Address
                </Label>
                <Input
                  type="text"
                  name="ship_name"
                  id="ship_name"
                  placeholder="Return Address"
                  value={data?.ship_name}
                  onChange={onChange}
                />
              </Col>
              <Col sm="4">
                <Label className="form-label" for="validate_addresses">
                  Validate Addresses
                </Label>
                <Select
                  className="react-select"
                  classNamePrefix="select"
                  theme={selectThemeColors}
                  placeholder="Select Validate Addresses"
                  options={store?.multiOptions}
                  value={store?.multiOptions?.find(
                    (item) => item?.value === parseInt(data?.validate_addresses)
                  )}
                  onChange={(e) =>
                    onSelectChange("validate_addresses", e.value)
                  }
                  isClearable={false}
                />
              </Col>
              <Col sm="4">
                <Label className="form-label" for="multi_carton">
                  Multiple Package Shipping
                </Label>
                <Select
                  className="react-select"
                  classNamePrefix="select"
                  theme={selectThemeColors}
                  placeholder="Select Multiple Package Shipping"
                  options={store?.multiOptions}
                  value={store?.multiOptions?.find(
                    (item) => item?.value === parseInt(data?.multi_carton)
                  )}
                  onChange={(e) => onSelectChange("multi_carton", e.value)}
                  isClearable={false}
                />
              </Col>
            </Row>
            <Row>
              <Col sm="4">
                <Label className="form-label" for="address1">
                  Address 1
                </Label>
                <Input
                  type="text"
                  name="address1"
                  id="address1"
                  placeholder="Address 1"
                  value={data?.address1}
                  onChange={onChange}
                />
              </Col>
              <Col sm="4">
                <Label className="form-label" for="change_method">
                  Change Shipping Method
                </Label>
                <Select
                  className="react-select"
                  classNamePrefix="select"
                  theme={selectThemeColors}
                  placeholder="Select Change Shipping Method"
                  options={store?.multiOptions}
                  value={store?.multiOptions?.find(
                    (item) => item?.value === parseInt(data?.change_method)
                  )}
                  onChange={(e) => onSelectChange("change_method", e.value)}
                  isClearable={false}
                />
              </Col>
              <Col sm="4" className="">
                <Label className="form-label" for="ups_type">
                  UPS
                </Label>
                <Select
                  className="react-select"
                  classNamePrefix="select"
                  theme={selectThemeColors}
                  placeholder="Select UPS"
                  options={store?.upsOptions}
                  value={store?.upsOptions?.find(
                    (item) => item?.value === parseInt(data?.ups_type)
                  )}
                  onChange={(e) => onSelectChange("ups_type", e.value)}
                  isClearable={false}
                />
              </Col>
            </Row>
            <Row>
              <Col sm="4">
                <Label className="form-label" for="address2">
                  Address 2
                </Label>
                <Input
                  type="text"
                  name="address2"
                  id="address2"
                  placeholder="Address 2"
                  value={data?.address2}
                  onChange={onChange}
                />
              </Col>
              <Col sm="4">
                <Label className="form-label" for="ship_label">
                  Additional Shipping Label
                </Label>
                <Select
                  className="react-select"
                  classNamePrefix="select"
                  theme={selectThemeColors}
                  placeholder="Select Additional Shipping Label"
                  options={store?.multiOptions}
                  value={store?.multiOptions?.find(
                    (item) => item?.value === parseInt(data?.ship_label)
                  )}
                  onChange={(e) => onSelectChange("ship_label", e.value)}
                  isClearable={false}
                />
              </Col>
              <Col sm="4">
                <Input
                  type="text"
                  name="ups_account"
                  id="ups_account"
                  placeholder="Leave blank to use house account"
                  value={data?.ups_account}
                  onChange={onChange}
                />
              </Col>
            </Row>
            <Row>
              <Col sm="4">
                <Label className="form-label" for="city_state_zip">
                  City/State/Zip
                </Label>
                <Row>
                  <Col sm="6">
                    <Input
                      type="text"
                      name="city"
                      id="city"
                      placeholder="City"
                      value={data?.city}
                      onChange={onChange}
                    />
                  </Col>
                  <Col sm="3">
                    <Input
                      type="text"
                      name="state"
                      id="state"
                      placeholder="State"
                      value={data?.state}
                      onChange={onChange}
                    />
                  </Col>
                  <Col sm="3">
                    <Input
                      type="text"
                      name="zip"
                      id="zip"
                      placeholder="Zip"
                      value={data?.zip}
                      onChange={onChange}
                    />
                  </Col>
                </Row>
              </Col>
              <Col sm="4">
                <Label className="form-label" for="packing_list">
                  Packing List
                </Label>
                <Select
                  className="react-select"
                  classNamePrefix="select"
                  theme={selectThemeColors}
                  placeholder="Select Packing List"
                  options={store?.listOptions}
                  value={store?.listOptions?.find(
                    (item) => item?.value === parseInt(data?.packing_list)
                  )}
                  onChange={(e) => onSelectChange("packing_list", e.value)}
                  isClearable={false}
                />
              </Col>
              <Col sm="4" className="">
                <Label className="form-label" for="fedex_type">
                  FedEx
                </Label>
                <Select
                  className="react-select"
                  classNamePrefix="select"
                  theme={selectThemeColors}
                  placeholder="Select FedEx"
                  options={store?.upsOptions}
                  value={store?.upsOptions?.find(
                    (item) => item?.value === parseInt(data?.fedex_type)
                  )}
                  onChange={(e) => onSelectChange("fedex_type", e.value)}
                  isClearable={false}
                />
              </Col>
            </Row>
            <Row>
              <Col sm="4">
                <Row>
                  <Col sm="12">
                    <Label className="form-label" for="phone">
                      Phone Number
                    </Label>
                    <Input
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="Phone Number"
                      value={data?.phone}
                      onChange={onCheckboxChange}
                    />
                  </Col>
                  <Col sm="12">
                    <Input
                      type="checkbox"
                      id="dropship"
                      name="dropship"
                      checked={data?.dropship}
                      onChange={onCheckboxChange}
                    />
                    <Label className="form-check-label" for="success-checkbox">
                      Dropship Qualifier
                    </Label>
                  </Col>
                  <Col sm="12">
                    <Input
                      type="checkbox"
                      id="dropship_tracking"
                      name="dropship_tracking"
                      checked={data?.dropship_tracking}
                      onChange={onChange}
                    />
                    <Label className="form-check-label" for="success-checkbox">
                      Dropship Tracking Import
                    </Label>
                  </Col>
                </Row>
              </Col>

              <Col sm="4"> </Col>
              <Col sm="4">
                <Row>
                  <Col sm="12">
                    <Input
                      type="text"
                      name="fedex_account"
                      id="fedex_account"
                      placeholder={
                        data?.fedex_type == "P"
                          ? "Account"
                          : "Leave blank to use house account"
                      }
                      value={data?.fedex_account}
                      onChange={onChange}
                    />
                  </Col>
                  {data?.fedex_type == "P" && (
                    <>
                      <Col sm="12">
                        <Input
                          type="text"
                          name="fedex_key"
                          id="fedex_pfedex_keyassword"
                          placeholder="Key"
                          value={data?.fedex_key}
                          onChange={onChange}
                        />
                      </Col>
                      <Col sm="12">
                        <Input
                          type="text"
                          name="fedex_password"
                          id="fedex_password"
                          placeholder="Password"
                          value={data?.fedex_password}
                          onChange={onChange}
                        />
                      </Col>
                      <Col sm="12">
                        <Input
                          type="text"
                          name="fedex_meter"
                          id="fedex_meter"
                          placeholder="Meter"
                          value={data?.fedex_meter}
                          onChange={onChange}
                        />
                      </Col>
                    </>
                  )}
                </Row>
              </Col>
            </Row>
            <Row>
              <Col sm="12" className="mt-1">
                <div className="d-flex">
                  <Button
                    className="me-1"
                    color="primary"
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault();
                      onSubmit();
                    }}
                  >
                    Update
                  </Button>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Form>
    </Fragment>
  );
};
export default index;

import { Fragment, useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import {
  UpdateManufacturePermission,
  getManufacturePermission
} from "../store";
import { useNavigate, useParams } from "react-router-dom";

const index = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const store = useSelector((state) => state.manufactures);

  useEffect(() => {
    if (id) {
      dispatch(getManufacturePermission(id));
    }
  }, [id]);

  useEffect(() => {
    if (store?.manufacturePermission) {
      setData(store?.manufacturePermission);
    }
  }, [store?.manufacturePermission]);

  const onChange = (e) => {
    const carryData = data?.map((item) => {
      if (item?.id == e?.target?.id) {
        return { ...item, [e?.target?.name]: e?.target.checked };
      } else return item;
    });
    setData(carryData);
  };

  const selectAll = (e) => {
    const carryData = data?.map((item) => {
      return { ...item, access: e?.target.checked };
    });
    setData(carryData);
  };

  const onSubmit = async () => {
    const res = await dispatch(UpdateManufacturePermission({ id, data }));
    if (res?.payload?.status) {
      navigate("/manufacture");
    }
  };

  return (
    <Fragment>
      <Row>
        <Form>
          <Col sm="6">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Manufacture Permissions</CardTitle>
              </CardHeader>
              <CardBody>
                <Row>
                  {data?.map((item) => {
                    return (
                      <Col sm="12">
                        <div className="form-check form-check-success">
                          <Input
                            type="checkbox"
                            id={item?.id}
                            name="access"
                            checked={item?.access}
                            onChange={onChange}
                          />
                          <Label
                            className="form-check-label"
                            for="success-checkbox"
                          >
                            {item?.name}
                          </Label>
                        </div>
                      </Col>
                    );
                  })}
                  <Col sm="12" className="mt-2">
                    <div className="form-check form-check-success">
                      <Input
                        type="checkbox"
                        name="access"
                        defaultChecked={false}
                        onChange={selectAll}
                      />
                      <Label
                        className="form-check-label"
                        for="success-checkbox"
                      >
                        Select/Deselect All Permissions
                      </Label>
                    </div>
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
                        Update Permission
                      </Button>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Form>
      </Row>
    </Fragment>
  );
};
export default index;

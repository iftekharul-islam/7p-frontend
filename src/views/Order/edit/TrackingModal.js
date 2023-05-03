import "@styles/react/libs/react-select/_react-select.scss";
import { selectThemeColors } from "@utils";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import {
  Button,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import { getShippingMethodOptions, updateTracking } from "../store";
const TrackingModal = (visible, setVisible, item, order_id, short_order) => {
  const dispatch = useDispatch();
  const [data, setData] = useState(null)
  useEffect(() => {
    setData({
      track_item_id: item?.id,
      track_order_id: order_id,
      track_shopify_order_id: short_order,
      track_shopify_item_line_id: item?.item_id,
      track_shopify_item_quantity: `#${item?.item_id}`,
      method: "",
      track_number: '',
    });
  }, [item]);
  const store = useSelector((state) => state.orders);
  useEffect(() => {
    dispatch(getShippingMethodOptions());
  }, []);
  return (
    <div>
      <Modal
        isOpen={visible}
        toggle={() => setVisible(!visible)}
        className="modal-dialog-centered"
      >
        <ModalHeader toggle={() => setVisible(!visible)}>
          Enter Tracking Number
        </ModalHeader>
        <ModalBody>
          <div>
            <Label className="form-label" for="email">
              Ship Via
            </Label>
            <Select
              className="react-select"
              classNamePrefix="select"
              theme={selectThemeColors}
              placeholder="Select Type"
              options={store?.shippingMethodOptions}
              value={store?.shippingMethodOptions?.find(
                (item) => item?.value === data?.method
              )}
              onChange={(e) => setData({ ...data, method: e?.value })}
            />
          </div>
          <div>
            <Label className="form-label" for="email">
              Tracking Number
            </Label>
            <Input
              type="text"
              id="text"
              value={data?.subject}
              onChange={(e) => setData({ ...data, track_number: e?.target?.value })}
              placeholder="Enter Tracking Number"
            />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={(e) => {
            e.preventDefault();
            dispatch(updateTracking(data));
            setVisible(!visible)}
            }>
            Ship Item
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
export default TrackingModal;

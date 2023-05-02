import moment from "moment";
import { Link } from "react-router-dom";

const ItemComponent = (item) => {
  return (
    <div className="border">
      <img src={item?.item_thumb} height={100} />
      <div>
        <u>
          <strong>
            {item?.order && item?.order?.customer
              ? !empty(item?.order?.customer?.ship_full_name)
                ? item?.order?.customer?.ship_full_name
                : item?.order?.customer?.bill_full_name
              : "CUSTOMER NOT FOUND"}
          </strong>
        </u>
      </div>
      <div>Item#{item?.id}</div>

      <Link to={`/customer-order-edit/${item?.order_5p}`}>
        <div>{item?.order ? item?.order?.short_order : "ORDER NOT FOUND"}</div>
      </Link>

      <div>{moment(item?.order?.order_date).format('YYYY-MM-DD')}</div>
    </div>
  );
};

export default ItemComponent;

import React from "react";

function getTrackingUrl(trackingNumber) {
  if (trackingNumber[0]) {
    if (trackingNumber.substring(0, 3) === "927" || trackingNumber[0] === "8") {
      // UPS
      return `https://wwwapps.ups.com/WebTracking/track?track=yes&trackNums=${trackingNumber}`;
    } else if (trackingNumber[0] === "L" || trackingNumber[0] === "U") {
      // USPS
      return `https://tools.usps.com/go/TrackConfirmAction?qtc_tLabels1=${trackingNumber}`;
    } else if (trackingNumber.substring(0, 3) === "937") {
      // DHL
      return `http://webtrack.dhlglobalmail.com/?trackingnumber=${trackingNumber}`;
    } else if (
      trackingNumber.substring(0, 2) === "94" ||
      trackingNumber.substring(0, 3) === "927"
    ) {
      // USPS
      return `https://tools.usps.com/go/TrackConfirmAction?tLabels=${trackingNumber}`;
    } else if (trackingNumber[0] === "2" || trackingNumber[0] === "7") {
      // Fedex
      return `http://www.fedex.com/Tracking?tracknumbers=${trackingNumber}`;
    } else if (trackingNumber.substring(0, 2) === "1Z") {
      // Fedex
      return `http://wwwapps.ups.com/WebTracking/track?track=yes&trackNums=${trackingNumber}`;
    } else if (trackingNumber.substring(0, 2) === "42") {
      // DHL
      return `https://webtrack.dhlecs.com/?trackingnumber=${trackingNumber}`;
    } else {
      return "#";
    }
  }
}

function ItemComponent({ item, setShowTracking, setItemTracking, carrier }) {
  const redoItem = (id, qty) => {
    console.log("redo item");
  };
  return (
    <span>
      {item?.item_status === "production" ? (
        item?.batch ? (
          <p>
            View batch:
            <a href={`/batch-list/${item?.batch_number}`} target="_blank">
              {item?.batch_number}
            </a>
            {item?.batch?.station && (
              <>
                <br />
                <span>
                  {item?.batch?.station?.station_name}{" "}
                  {item?.batch?.station?.station_description}
                </span>
                <br />
                {item?.batch?.change_date}
              </>
            )}
          </p>
        ) : item?.batch_number !== "0" ? (
          <p>No Batch Record</p>
        ) : (
          <p>Unbatched</p>
        )
      ) : item?.item_status === "wap" ? (
        item?.wap_item ? (
          <>
            <p>
              WAP Bin{" "}
              <a
                href={`/wap/details/${item?.wap_item?.bin_id}`}
                target="_blank"
              >
                {item?.wap_item?.bin.name}
              </a>
            </p>
            <p>Added:</p>
            <p>{item?.wap_item?.created_at}</p>
          </>
        ) : (
          <p>WAP BIN: NOT FOUND</p>
        )
      ) : item?.item_status === "rejected" && item?.rejection ? (
        item?.rejection.graphic_status !== "Redo Item" ? (
          <>
            <p>Rejected</p>
            <a href={`/batch-list/${item?.batch_number}`} target="_blank">
              {item?.batch_number}
            </a>
            {item?.rejection?.rejection_reason_info && (
              <>
                <br />
                {item?.rejection?.rejection_reason_info?.rejection_message}
              </>
            )}
            <br />
            {item?.rejection?.rejection_message}
            <br />
            {item?.rejection?.created_at}
          </>
        ) : (
          <>
            <p>Redo</p>
            <a href={`/batch-list/${item?.batch_number}`} target="_blank">
              {item?.batch_number}
            </a>
            {item?.rejection?.rejection_reason_info && (
              <>
                <br />
                {item?.rejection?.rejection_reason_info?.rejection_message}
              </>
            )}
            <br />
            {item?.rejection.rejection_message}
            <br />
            {item?.rejection.created_at}
          </>
        )
      ) : item?.item_status === "rejected" && !item?.rejection ? (
        <p>REJECTED BUT NO REJECTION RECORD</p>
      ) : item?.item_status === "back order" ? (
        (() => {
          let eta = 0;
          if (item?.inventoryunit) {
            item?.inventoryunit.forEach((unit) => {
              if (unit.open_po && unit.open_po.eta > eta) {
                eta = unit.open_po.eta;
              }
            });
          }
          return (
            <>
              <p>Back Order</p>
              {!item?.batch && <p>Unbatched</p>}
              {eta > 0 && <p>ETA: {eta}</p>}
            </>
          );
        })()
      ) : (
        item?.item_status !== "shipped" && (
          <>
            <p>{item?.item_status}</p>
            {item?.batch && (
              <>
                <a href={`/batch-list/${item?.batch_number}`} target="_blank">
                  {item?.batch_number}
                </a>
                <br />
                {item?.batch.change_date}
              </>
            )}
          </>
        )
      )}
      {item?.ship_info && item?.ship_info?.tracking_number ? (
        <>
          <a
            href={`/shipping?search_for_first=${item?.ship_info.unique_order_id}&search_in_first=unique_order_id`}
          >
            Shipped
          </a>{" "}
          on{" "}
          {new Date(
            item?.ship_info.postmark_date || Date.now()
          ).toLocaleDateString()}
          <br />
          {!item?.ship_info.mail_class.toLowerCase().includes("innovation") && (
            <>
              {item?.ship_info.mail_class}
              <br />
            </>
          )}
          <a href={getTrackingUrl(item?.ship_info.shipping_id)} target="_blank">
            Trk# {item?.ship_info.shipping_id}
          </a>
          <br />
          {item?.batch && (
            <>
              <a href={`/batch-list/${item?.batch_number}`} target="_blank">
                Batch {item?.batch_number}
              </a>
              <br />
            </>
          )}
          <br />
          <button
            id="redo-item"
            onClick={() => redoItem(item?.id, item?.item_quantity)}
            className="btn btn-xs btn-danger"
          >
            Redo Item
          </button>
        </>
      ) : item?.item_status === "shipped" && item?.tracking_number !== null ? (
        <a href={getTrackingUrl(item?.tracking_number)} target="_blank">
          Trk# {item?.tracking_number}
        </a>
      ) : item?.item_status !== "shipped" &&
        item?.item_status !== "cancelled" &&
        carrier !== "MN" ? (
        <>
          <button
            id="shipitem"
            onClick={(e) => {
              e.preventDefault();
              setShowTracking(true);
              setItemTracking(item);
            }}
            className="btn btn-xs btn-success"
          >
            Enter Tracking
          </button>
        </>
      ) : null}
    </span>
  );
}

export default ItemComponent;

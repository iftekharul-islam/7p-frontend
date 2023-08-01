import React from 'react';

const ShippingPanel = ({ order, label, show_ship, bin, batch, id, items }) => {
  const origin = 'WAP'; // Replace with actual origin value if needed

  const setLocation = (location) => {
    try {
      var items = document.getElementById("allItems").value;
      document.getElementById("selected-items-json").value = items;
    } catch (e) {}
    document.getElementById("location").value = location;
  };

  const addPackage = () => {
    var row = (
      <tr>
        <td></td>
        <td>
          <input
            id="pounds[]"
            style={{ width: '50px' }}
            min="0"
            name="pounds[]"
            type="number"
            value="0"
          />
        </td>
        <td>lbs</td>
        <td>
          <input
            id="ounces[]"
            style={{ width: '50px' }}
            min="0"
            name="ounces[]"
            type="number"
            value="0"
          />
        </td>
        <td>ozs</td>
        <td></td>
      </tr>
    );
    var parent = document.querySelector('table#packages');
    parent.appendChild(row);
  };

  const notificationItems = [
    'SB11306',
    'SB11305',
    'SB11304',
    'SB11301',
    'SB11253',
    'SB11117',
    'SB11107',
    'SB10953',
    'SB9051',
  ];
  const showPackingNotification =
    items.length > 0 && notificationItems.includes(items[0].item_code);

  return (
    <div className="col-xs-12">
      <div className="col-xs-1"></div>
      <div className="col-xs-9">
        {order.order_status === 4 || order.order_status === 11 ? (
          <>
            {label == null || show_ship === '1' ? (
              <>
                {origin === 'QC' ? (
                  <>
                    {/* QC Origin specific content */}
                    {!! Form::open({
                      url: 'shipping/add_wap',
                      name: 'approve',
                      method: 'post',
                      id: 'approve',
                    })}
                    {!! Form::hidden('action', 'address', { id: 'action' })}
                    {!! Form::hidden('batch_number', batch.batch_number, { id: 'batch_number' })}
                    {!! Form::hidden('id', id, { id: 'id' })}
                    {!! Form::hidden('order_id', order.id, { id: 'order_id' })}
                    {!! Form::hidden('origin', 'QC', { id: 'origin' })}
                    {!! Form::hidden('count', items.length, { id: 'count' })}
                    <button
                      id="address"
                      className="btn btn-primary btn-xs"
                      onClick={() => {
                        document.getElementById('address').disabled = true;
                        document.getElementById('approve').submit();
                      }}
                    >
                      Bad Address
                    </button>
                    {!! Form::close() !!}
                  </>
                ) : origin === 'WAP' ? (
                  <>
                    {/* WAP Origin specific content */}
                    {/* Replace with WAP-specific logic */}
                  </>
                ) : null}
                {/* Common content for both QC and WAP origins */}
                {!! Form::open({
                  url: url,
                  method: 'post',
                })}
                <table className="table table-condensed borderless" id="packages">
                  {/* Add table rows here */}
                </table>
                <br />
                <br />
                {!! Form::hidden('batch_number', batch.batch_number, { id: 'batch_number' })}
                {!! Form::hidden('id', id, { id: 'id' })}
                {!! Form::hidden('order_id', order.id, { id: 'order_id' })}
                {!! Form::hidden('selected-items-json', '', { id: 'selected-items-json' })}
                {!! Form::hidden('origin', origin, { id: 'origin' })}
                {!! Form::hidden('location', 'FL', { id: 'location' })}
                {!! Form::hidden('count', items.length, { id: 'count' })}
                <button
                  value="fl"
                  name="submitButton"
                  className={`pull-right btn btn-lg btn-${btn_class}`}
                  id="focus-btn"
                  style={{ marginTop: '5px' }}
                  onClick={() => {
                    setLocation('FL');
                    document.getElementById('focus-btn').disabled = true;
                    document.querySelector('form').submit();
                  }}
                >
                  {btn_text} (FL)
                </button>
                <button
                  value="ny"
                  name="submitButton"
                  className="pull-right btn btn-lg btn-warning"
                  id="focus-btn"
                  style={{ marginTop: '5px' }}
                  onClick={() => {
                    setLocation('NY');
                    document.getElementById('focus-btn').disabled = true;
                    document.querySelector('form').submit();
                  }}
                >
                  {btn_text} (NY)
                </button>
                {!! Form::close() !!}
              </>
            ) : null}
          </>
        ) : label != null ? (
          <>
            {/* Label is not null */}
            <input
              type="button"
              value="Reprint Shipping Label"
              className="btn btn-lg"
              onClick={() => sendLabel()} // Implement sendLabel function if required
            />
            <br />
            <br />
          </>
        ) : null}
      </div>
      {showPackingNotification && (
        <div className="modal fade" id="packingNotificationForm" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div className="modal-dialog modal-sm" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                <h4 className="modal-title" id="myModalLabel">Packing Notification</h4>
              </div>
              <div className="modal-body">
                <div>Please Insert Pillow.</div>
                <div>Inserte la almohada.</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShippingPanel;

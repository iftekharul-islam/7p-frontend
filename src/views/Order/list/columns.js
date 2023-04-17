import moment from "moment";
import { useState } from "react";
import {
  Copy,
  DollarSign,
  Edit,
  List,
  Printer,
  Send,
  ShoppingCart,
  Star,
  Trash2,
} from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Button,
  Col,
  Collapse,
  Input,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
  UncontrolledTooltip,
} from "reactstrap";
import { DeleteInventory, UpdateBinQty } from "../store";

const renderAction = (row) => {
  const dispatch = useDispatch();
  const [deleteItem, setDeleteItem] = useState(null);
  const [deleteShow, setDeleteShow] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const onSubmitDelete = (e) => {
    e.preventDefault();
    dispatch(DeleteInventory(deleteItem.id));
    setDeleteShow(!deleteShow);
  };

  const printLabel = (stockno, bin, desc, url) => {
    try {
      var labelXml =
        '<?xml version="1.0" encoding="utf-8"?>\
                 <DieCutLabel Version="8.0" Units="twips">\
                <PaperOrientation>Landscape</PaperOrientation>\
                <Id>Address</Id>\
                <PaperName>30252 Address</PaperName>\
                <DrawCommands/>\
                <ObjectInfo>\
                   <TextObject>\
                      <Name>Stock_label</Name>\
                      <ForeColor Alpha="255" Red="0" Green="0" Blue="0" />\
                      <BackColor Alpha="0" Red="255" Green="255" Blue="255" />\
                      <LinkedObjectName />\
                      <Rotation>Rotation0</Rotation>\
                      <IsMirrored>False</IsMirrored>\
                      <IsVariable>False</IsVariable>\
                      <GroupID>-1</GroupID>\
                      <IsOutlined>False</IsOutlined>\
                      <HorizontalAlignment>Left</HorizontalAlignment>\
                      <VerticalAlignment>Top</VerticalAlignment>\
                      <TextFitMode>ShrinkToFit</TextFitMode>\
                      <UseFullFontHeight>True</UseFullFontHeight>\
                      <Verticalized>False</Verticalized>\
                      <StyledText>\
                         <Element>\
                            <String xml:space="preserve">Stock#</String>\
                            <Attributes>\
                               <Font Family="Arial" Size="11" Bold="False" Italic="False" Underline="False" Strikeout="False" />\
                               <ForeColor Alpha="255" Red="0" Green="0" Blue="0" HueScale="100" />\
                            </Attributes>\
                         </Element>\
                      </StyledText>\
                   </TextObject>\
                   <Bounds X="331" Y="74" Width="764" Height="270" />\
                </ObjectInfo>\
                <ObjectInfo>\
                   <TextObject>\
                      <Name>Bin_label</Name>\
                      <ForeColor Alpha="255" Red="0" Green="0" Blue="0" />\
                      <BackColor Alpha="0" Red="255" Green="255" Blue="255" />\
                      <LinkedObjectName />\
                      <Rotation>Rotation0</Rotation>\
                      <IsMirrored>False</IsMirrored>\
                      <IsVariable>False</IsVariable>\
                      <GroupID>-1</GroupID>\
                      <IsOutlined>False</IsOutlined>\
                      <HorizontalAlignment>Left</HorizontalAlignment>\
                      <VerticalAlignment>Top</VerticalAlignment>\
                      <TextFitMode>ShrinkToFit</TextFitMode>\
                      <UseFullFontHeight>True</UseFullFontHeight>\
                      <Verticalized>False</Verticalized>\
                      <StyledText>\
                         <Element>\
                            <String xml:space="preserve">Bin#</String>\
                            <Attributes>\
                               <Font Family="Arial" Size="11" Bold="False" Italic="False" Underline="False" Strikeout="False" />\
                               <ForeColor Alpha="255" Red="0" Green="0" Blue="0" HueScale="100" />\
                            </Attributes>\
                         </Element>\
                      </StyledText>\
                   </TextObject>\
                   <Bounds X="1872" Y="72" Width="509" Height="270" />\
                </ObjectInfo>\
                <ObjectInfo>\
                   <TextObject>\
                      <Name>Stock_no</Name>\
                      <ForeColor Alpha="255" Red="0" Green="0" Blue="0" />\
                      <BackColor Alpha="0" Red="255" Green="255" Blue="255" />\
                      <LinkedObjectName />\
                      <Rotation>Rotation0</Rotation>\
                      <IsMirrored>False</IsMirrored>\
                      <IsVariable>False</IsVariable>\
                      <GroupID>-1</GroupID>\
                      <IsOutlined>False</IsOutlined>\
                      <HorizontalAlignment>Left</HorizontalAlignment>\
                      <VerticalAlignment>Top</VerticalAlignment>\
                      <TextFitMode>ShrinkToFit</TextFitMode>\
                      <UseFullFontHeight>True</UseFullFontHeight>\
                      <Verticalized>False</Verticalized>\
                      <StyledText>\
                         <Element>\
                            <String xml:space="preserve">STOCKNO</String>\
                            <Attributes>\
                               <Font Family="Arial" Size="11" Bold="True" Italic="False" Underline="False" Strikeout="False" />\
                               <ForeColor Alpha="255" Red="0" Green="0" Blue="0" HueScale="100" />\
                            </Attributes>\
                         </Element>\
                      </StyledText>\
                   </TextObject>\
                   <Bounds X="1053" Y="72" Width="734" Height="270" />\
                </ObjectInfo>\
                <ObjectInfo>\
                   <TextObject>\
                      <Name>Bin</Name>\
                      <ForeColor Alpha="255" Red="0" Green="0" Blue="0" />\
                      <BackColor Alpha="0" Red="255" Green="255" Blue="255" />\
                      <LinkedObjectName />\
                      <Rotation>Rotation0</Rotation>\
                      <IsMirrored>False</IsMirrored>\
                      <IsVariable>False</IsVariable>\
                      <GroupID>-1</GroupID>\
                      <IsOutlined>False</IsOutlined>\
                      <HorizontalAlignment>Left</HorizontalAlignment>\
                      <VerticalAlignment>Top</VerticalAlignment>\
                      <TextFitMode>ShrinkToFit</TextFitMode>\
                      <UseFullFontHeight>True</UseFullFontHeight>\
                      <Verticalized>False</Verticalized>\
                      <StyledText>\
                         <Element>\
                            <String xml:space="preserve">BIN</String>\
                            <Attributes>\
                               <Font Family="Arial" Size="11" Bold="True" Italic="False" Underline="False" Strikeout="False" />\
                               <ForeColor Alpha="255" Red="0" Green="0" Blue="0" HueScale="100" />\
                            </Attributes>\
                         </Element>\
                      </StyledText>\
                   </TextObject>\
                   <Bounds X="2386" Y="72" Width="1050" Height="270" />\
                </ObjectInfo>\
                <ObjectInfo>\
                   <BarcodeObject>\
                      <Name>Barcode</Name>\
                      <ForeColor Alpha="255" Red="0" Green="0" Blue="0" />\
                      <BackColor Alpha="0" Red="255" Green="255" Blue="255" />\
                      <LinkedObjectName />\
                      <Rotation>Rotation0</Rotation>\
                      <IsMirrored>False</IsMirrored>\
                      <IsVariable>True</IsVariable>\
                      <GroupID>-1</GroupID>\
                      <IsOutlined>False</IsOutlined>\
                      <Text>12345</Text>\
                      <Type>Code39</Type>\
                      <Size>Medium</Size>\
                      <TextPosition>None</TextPosition>\
                      <TextFont Family="Arial" Size="8" Bold="False" Italic="False" Underline="False" Strikeout="False" />\
                      <CheckSumFont Family="Arial" Size="8" Bold="False" Italic="False" Underline="False" Strikeout="False" />\
                      <TextEmbedding>None</TextEmbedding>\
                      <ECLevel>0</ECLevel>\
                      <HorizontalAlignment>Left</HorizontalAlignment>\
                      <QuietZonesPadding Left="0" Top="0" Right="0" Bottom="0" />\
                   </BarcodeObject>\
                   <Bounds X="331" Y="435" Width="2910" Height="720" />\
                </ObjectInfo>\
                <ObjectInfo>\
                   <ImageObject>\
                      <Name>Stock_Image</Name>\
                      <ForeColor Alpha="255" Red="0" Green="0" Blue="0" />\
                      <BackColor Alpha="0" Red="255" Green="255" Blue="255" />\
                      <LinkedObjectName />\
                      <Rotation>Rotation0</Rotation>\
                      <IsMirrored>False</IsMirrored>\
                      <IsVariable>False</IsVariable>\
                      <GroupID>-1</GroupID>\
                      <IsOutlined>False</IsOutlined>\
                      <Image></Image>\
                      <ScaleMode>Uniform</ScaleMode>\
                      <BorderWidth>0</BorderWidth>\
                      <BorderColor Alpha="255" Red="0" Green="0" Blue="0" />\
                      <HorizontalAlignment>Center</HorizontalAlignment>\
                      <VerticalAlignment>Center</VerticalAlignment>\
                   </ImageObject>\
                   <Bounds X="3378" Y="57" Width="1440" Height="1435" />\
                </ObjectInfo>\
                <ObjectInfo>\
                   <TextObject>\
                      <Name>Description</Name>\
                      <ForeColor Alpha="255" Red="0" Green="0" Blue="0" />\
                      <BackColor Alpha="0" Red="255" Green="255" Blue="255" />\
                      <LinkedObjectName />\
                      <Rotation>Rotation0</Rotation>\
                      <IsMirrored>False</IsMirrored>\
                      <IsVariable>False</IsVariable>\
                      <GroupID>-1</GroupID>\
                      <IsOutlined>False</IsOutlined>\
                      <HorizontalAlignment>Left</HorizontalAlignment>\
                      <VerticalAlignment>Top</VerticalAlignment>\
                      <TextFitMode>ShrinkToFit</TextFitMode>\
                      <UseFullFontHeight>True</UseFullFontHeight>\
                      <Verticalized>False</Verticalized>\
                      <StyledText>\
                         <Element>\
                            <String xml:space="preserve">DESCRIPTION</String>\
                            <Attributes>\
                               <Font Family="Arial" Size="11" Bold="True" Italic="False" Underline="False" Strikeout="False" />\
                               <ForeColor Alpha="255" Red="0" Green="0" Blue="0" HueScale="100" />\
                            </Attributes>\
                         </Element>\
                      </StyledText>\
                   </TextObject>\
                   <Bounds X="331" Y="1208" Width="3617" Height="285" />\
                </ObjectInfo>\
                 </DieCutLabel>';

      var label = dymo.label.framework.openLabelXml(labelXml);

      // set label text
      label.setObjectText("Description", desc);
      label.setObjectText("Stock_no", stockno);
      label.setObjectText("Bin", bin);
      label.setObjectText("Barcode", stockno);
      label.setObjectText("Url", url);

      // var myURI = dymo.label.framework.loadImageAsPngBase64(url);

      // label.setObjectText("Stock_Image",myURI);

      var printerName = get_printer();

      label.print(printerName);
    } catch (e) {
      alert(e.message || e);
    }
  };

  return (
    <div className="column-action">
      <>
        <Link
          className="text-truncate text-capitalize align-middle"
          to={`/inventory-edit/${row.id}`}
          id={`edit-${row?.id}`}
        >
          <Edit size={18} className={`text-primary me-50`} />
        </Link>
        <UncontrolledTooltip target={`edit-${row?.id}`}>
          Edit
        </UncontrolledTooltip>
      </>
      <>
        <Link
          className="text-truncate text-capitalize align-middle"
          to={`/inventory-add?id=${row.id}`}
          id={`duplicate-${row?.id}`}
        >
          <Copy size={18} className={`text-primary me-50`} />
        </Link>
        <UncontrolledTooltip target={`duplicate-${row?.id}`}>
          Duplicate
        </UncontrolledTooltip>
      </>
      <>
        <Link
          className="text-truncate text-capitalize align-middle"
          to="/"
          onClick={(e) => {
            e.preventDefault();
            printLabel(
              row?.stock_no_unique,
              row?.wh_bin,
              row?.stock_name_discription,
              row?.warehouse
            );
          }}
          id={`print-${row?.id}`}
        >
          <Printer size={18} className={`text-primary me-50`} />
        </Link>
        <UncontrolledTooltip target={`print-${row?.id}`}>
          Print Label
        </UncontrolledTooltip>
      </>
      <>
        <Link
          className="text-truncate text-capitalize align-middle"
          onClick={(e) => {
            e.preventDefault();
            setDeleteItem(row);
            setDeleteShow(true);
          }}
          id={`delete-${row?.id}`}
        >
          <Trash2 size={18} className={`text-danger me-50`} />
        </Link>
        <UncontrolledTooltip target={`delete-${row?.id}`}>
          Delete
        </UncontrolledTooltip>
      </>
      <>
        <Link
          className="text-truncate text-capitalize align-middle"
          to={`/product?q=${row.stock_no_unique}`}
          id={`vendor-${row?.id}`}
        >
          <ShoppingCart size={18} className={`text-primary me-50`} />
        </Link>
        <UncontrolledTooltip target={`vendor-${row?.id}`}>
          Vendor Information
        </UncontrolledTooltip>
      </>
      <>
        <Link
          className="text-truncate text-capitalize align-middle"
          to={`/order?q=${row.stock_no_unique}`}
          id={`po-${row?.id}`}
        >
          <DollarSign size={18} className={`text-primary me-50`} />
        </Link>
        <UncontrolledTooltip target={`po-${row?.id}`}>
          View Purchase Orders
        </UncontrolledTooltip>
      </>
      <>
        <Link
          className="text-truncate text-capitalize align-middle"
          to={`/adjustment?q=${row.stock_no_unique}`}
          id={`adjustment-${row?.id}`}
        >
          <Star size={18} className={`text-primary me-50`} />
        </Link>
        <UncontrolledTooltip target={`adjustment-${row?.id}`}>
          View Adjustments
        </UncontrolledTooltip>
      </>
      <>
        <Link
          className="text-truncate text-capitalize align-middle"
          to="/"
          onClick={(e) => {
            e.preventDefault();
            toggle();
          }}
          id={`skus-${row?.id}`}
        >
          <List size={18} className={`text-primary me-50`} />
        </Link>
        <UncontrolledTooltip target={`skus-${row?.id}`}>
          View Assigned Child SKUs ({row?.inventory_unit_relation?.length})
        </UncontrolledTooltip>
      </>
      <>
        <Link
          className="text-truncate text-capitalize align-middle"
          to={`/stock-edit/${row.id}`}
          id={`task-${row?.id}`}
        >
          <Send size={18} className={`text-primary me-50`} />
        </Link>
        <UncontrolledTooltip target={`task-${row?.id}`}>
          Task
        </UncontrolledTooltip>
      </>

      <div>
        <Collapse isOpen={isOpen}>
          <div>
            {row?.inventory_unit_relation?.map((itm) => {
              return <div>{itm?.child_sku}</div>;
            })}
          </div>
        </Collapse>
      </div>

      <Modal
        isOpen={deleteShow}
        toggle={() => setDeleteShow(!deleteShow)}
        className="modal-dialog-centered modal-lg"
      >
        <ModalHeader
          className="bg-transparent"
          toggle={() => setDeleteShow(!deleteShow)}
        ></ModalHeader>
        <ModalBody className="px-2 pb-2">
          <div className="text-center mb-4">
            <h1>Are you sure to delete?</h1>
          </div>
          <Row tag="form" onSubmit={onSubmitDelete}>
            <Col className="text-center mt-2" xs={12}>
              <Button type="submit" color="danger" className="me-1">
                Confirm
              </Button>
              <Button
                // type="reset"
                outline
                onClick={() => setDeleteShow(!deleteShow)}
              >
                Cancel
              </Button>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </div>
  );
};

const BIN = (row) => {
  const dispatch = useDispatch();
  const [bin, setBin] = useState(row?.wh_bin);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(UpdateBinQty({ id: row.id, wh_bin: bin }));
  };

  return (
    <div>
      <Input
        type="text"
        className="mb-1"
        name="wh_bin"
        id="wh_bin"
        placeholder="Bin"
        value={bin}
        onChange={(e) => setBin(e?.target?.value)}
      />
      <Button className="me-1" color="primary" type="submit" onClick={onSubmit}>
        Update
      </Button>
    </div>
  );
};

const OnHand = (row) => {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(row?.qty_on_hand);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(UpdateBinQty({ id: row.id, qty_on_hand: qty }));
  };

  return (
    <div>
      <Input
        type="text"
        className="mb-1"
        name="qty_on_hand"
        id="qty_on_hand"
        placeholder="QTY"
        value={qty}
        onChange={(e) => setQty(e?.target?.value)}
      />
      <Button className="me-1" color="primary" type="submit" onClick={onSubmit}>
        Update
      </Button>
    </div>
  );
};

export const columns = [
  {
    name: "Order/PO",
    sortable: false,
    minWidth: "200px",
    sortField: "warehouse",
    selector: (row) => row.warehouse,
    cell: (row) => (
      <div>
        <div>
          <Link to={`/order-view/${row.id}`}>{row?.short_order}</Link>
        </div>
        <div>
          <Link to={`/order-view/${row.id}`}>{row?.purchase_order}</Link>
        </div>
      </div>
    ),
  },
  {
    name: "Date",
    sortable: false,
    minWidth: "280px",
    sortField: "store",
    selector: (row) => row.store,
    cell: (row) => (
      <div>
        <div>
          {row?.store
            ? row?.store?.company > 0
              ? row?.store?.company[0]
              : row?.store?.store_name
            : "STORE NOT FOUND"}
        </div>
        <div>{moment(row?.order_date).format("YYYY-MM-DD HH:MM:ss a")}</div>
      </div>
    ),
  },
  {
    name: "Customer",
    sortable: false,
    minWidth: "240px",
    sortField: "customer",
    selector: (row) => row.customer,
    cell: (row) => (
      <div>
        <div>{row?.customer ? row?.customer?.ship_full_name : "#"}</div>
        <div>
          {row?.customer
            ? `${row?.customer?.ship_state},${row?.customer?.ship_country}`
            : "#"}
        </div>
      </div>
    ),
  },
  {
    name: "Items",
    sortable: false,
    minWidth: "60px",
    sortField: "item_count",
    selector: (row) => row.item_count,
    cell: (row) => <div>{row?.item_count ?? 0}</div>,
  },
  {
    name: "Subtotal",
    sortable: false,
    minWidth: "120px",
    sortField: "items",
    selector: (row) => row.items,
    cell: (row) => (
      <div>
        $
        {parseFloat(
          row?.items.reduce(function (prev, cur) {
            return parseFloat(prev) + parseFloat(cur?.item_total_price);
          }, 0)
        ).toFixed(2)}
      </div>
    ),
  },
  {
    name: "Discount",
    sortable: false,
    minWidth: "120px",
    sortField: "promotion_value",
    selector: (row) => row.promotion_value,
    cell: (row) => (
      <div>
        $
        {parseFloat(
          parseFloat(row?.promotion_value ?? 0) +
            parseFloat(row?.coupon_value ?? 0)
        ).toFixed(2)}
      </div>
    ),
  },
  {
    name: "Shipping",
    sortable: false,
    minWidth: "120px",
    sortField: "shipping_charge",
    selector: (row) => row.shipping_charge,
    cell: (row) => (
      <div>${parseFloat(row?.shipping_charge ?? 0).toFixed(2)}</div>
    ),
  },
  {
    name: "Tax",
    sortable: false,
    minWidth: "120px",
    sortField: "tax_charge",
    selector: (row) => row.tax_charge,
    cell: (row) => <div>${parseFloat(row?.tax_charge ?? 0).toFixed(2)}</div>,
  },
  {
    name: "Total",
    sortable: false,
    minWidth: "120px",
    sortField: "item_count",
    selector: (row) => row.item_count,
    cell: (row) => {
      const diff =
        parseFloat(
          row?.items.reduce(function (prev, cur) {
            return parseFloat(prev) + parseFloat(cur?.item_total_price);
          }, 0)
        ) -
        (parseFloat(row?.promotion_value ?? 0) +
          parseFloat(row?.coupon_value ?? 0)) +
        parseFloat(row?.shipping_charge ?? 0) +
        parseFloat(row?.tax_charge ?? 0) -
        parseFloat(row?.total ?? 0);
      return (
        <div className={diff != 0 && `text-danger`}>
          ${parseFloat(row?.total ?? 0).toFixed(2)}
        </div>
      );
    },
  },
  {
    name: "Status",
    sortable: false,
    minWidth: "180px",
    sortField: "order_status",
    selector: (row) => row.order_status,
    cell: (row) => {
      const store = useSelector((state) => state.orders);
      return (
        <div>
          <div>
            {
              store?.statusOptions?.find(
                (item) => item?.value == row?.order_status
              )?.label
            }
          </div>
          <div>
            {row?.carrier} {row?.method}
          </div>
        </div>
      );
    },
  },
  {
    name: "Coupon",
    sortable: false,
    minWidth: "180px",
    sortField: "item_count",
    selector: (row) => row.item_count,
    cell: (row) => (
      <div>
        {row?.promotion_id} {row?.coupon_id}
      </div>
    ),
  },
];

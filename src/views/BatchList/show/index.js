import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Card, CardHeader } from "reactstrap";
import { getData } from "../store";
import RejectModal from "./RejectModal";
import UploadModal from "./UploadModal";
import Details from "./details";
import Note from "./note";
import Table from "./table";

const index = () => {
  const { id } = useParams();
  const [batchNote, setBatchNote] = useState(null);
  const dispatch = useDispatch();
  const { showData } = useSelector((state) => state.batchList);
  const [loading, setLoading] = useState(false);

  const getBatchData = async () => {
    setLoading(true);
    if (id) await dispatch(getData({ id, batchNote }));
    setBatchNote("");
    setLoading(false);
  };

  useEffect(() => {
    getBatchData();
  }, []);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(!show);

  const handleUpload = () => {
    setShow(!show);
  };

  const [rejectShow, setRejectShow] = useState(false);
  const handleRejectClose = () => setRejectShow(!rejectShow);
  const [rejectData, setRejectData] = useState(null);  
  const [uploadData, setUploadData] = useState(null);  

  return (
    <Fragment>
      <Card>
        <CardHeader>
          <h4 className="card-title">
            Batch: {showData?.batch_number}{" "}
            {showData?.batch?.store &&
              "(" + showData?.batch?.store?.store_name + ")"}
          </h4>
        </CardHeader>
        <Details />
        <Table
          handleClose={handleClose}
          setUploadData={setUploadData}
          setRejectData={setRejectData}
          handleRejectClose={handleRejectClose}
        />
        <Note
          batchNote={batchNote}
          setBatchNote={setBatchNote}
          onClick={getBatchData}
        />
      </Card>

      <UploadModal
        show={show}
        handleClose={handleClose}
        uploadData={uploadData}
        handleUpload={setUploadData}
      />
      <RejectModal
        isOpen={rejectShow}
        toggle={handleRejectClose}
        data={rejectData}
      />
    </Fragment>
  );
};

export default index;

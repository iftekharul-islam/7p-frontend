import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Card, CardHeader } from "reactstrap";
import { getData } from "../store";
import Details from "./details";
import Note from "./note";
import Table from "./table";

const index = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { showData } = useSelector((state) => state.batchList);
  const [loading, setLoading] = useState(false);

  const getBatchData = async () => {
    setLoading(true);
    if (id) await dispatch(getData(id));
    setLoading(false);
  };

  useEffect(() => {
    getBatchData();
  }, []);

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
        <Table />
        <Note />

      </Card>
    </Fragment>
  );
};

export default index;

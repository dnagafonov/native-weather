import React, { useEffect } from "react";
import TablePage from "./table-page";
import { connect } from "react-redux";
import { historySelector } from "../../redux/selectors";
import TablePageEmpty from "./table-page-empty";

function TablePageContainer({ history }) {
  useEffect(() => {}, []);
  if (!history.length) return <TablePageEmpty />;
  return <TablePage history={history} />;
}

const mapState = (state) => ({
  history: historySelector(state),
});

export default connect(mapState)(TablePageContainer);

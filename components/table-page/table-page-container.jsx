import React, { useEffect } from "react";
import TablePage from "./table-page";
import { connect } from "react-redux";
import { historySelector } from "../../redux/selectors";
import TablePageEmpty from "./table-page-empty";
import { clearHistory } from "../../redux/actions/actions";

function TablePageContainer({ history, clearHistory }) {
  if (!history.length) return <TablePageEmpty />;
  return <TablePage history={history} clearHistory={clearHistory} />;
}

const mapState = (state) => ({
  history: historySelector(state),
});

export default connect(mapState, { clearHistory })(TablePageContainer);

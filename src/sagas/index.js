import { all, fork } from "redux-saga/effects";

import units from "./units";

export default function* rootSaga() {
  yield all([
    fork(units)
  ]);
}
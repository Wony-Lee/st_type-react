import { getUserProfileAsync, GET_USER_PROFILE } from "./actions";
import { takeEvery } from "redux-saga/effects";
import { getUserProfile } from "../../api/github";
import createAsyncActionSaga from "../../lib/createAsyncSaga";

const getUserProfileSaga = createAsyncActionSaga(
    getUserProfileAsync,
    getUserProfile
);

export function* githubSaga() {
    yield takeEvery(GET_USER_PROFILE, getUserProfileSaga);
}

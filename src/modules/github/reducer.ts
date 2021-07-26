import { createReducer } from "typesafe-actions";
import {
    asyncState,
    createAsyncReducer,
    transformToArray,
} from "../../lib/reducerUtils";
import { getUserProfileAsync } from "./actions";
import { GitHubAction, githubState } from "./types";

const initialState: githubState = {
    userProfile: asyncState.initial(),
};

const github = createReducer<githubState, GitHubAction>(
    initialState
).handleAction(
    transformToArray(getUserProfileAsync),
    createAsyncReducer(getUserProfileAsync, "userProfile")
);

export default github;

import * as actions from "./actions";

import { ActionType } from "typesafe-actions";
import { GithubProfile } from "../../api/github";
import { AsyncState } from "../../lib/reducerUtils";

export type GitHubAction = ActionType<typeof actions>;
export type githubState = {
    userProfile: AsyncState<GithubProfile, Error>;
};

import * as actions from "./actions";

import { ActionType } from "typesafe-actions";
import { GithubProfile } from "../../api/github";

export type GitHubAction = ActionType<typeof actions>;
export type githubState = {
    userProfile: {
        loading: boolean;
        data: GithubProfile | null;
        error: Error | null;
    };
};

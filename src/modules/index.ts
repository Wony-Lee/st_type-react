// combineReducers 를 통해서 rootReducer 를 만들자
import { combineReducers } from "redux";
// 아까 만든 counter 로 불러오자.
import counter from "./counter";

// rootReducer에 counter 를 담아준다.
const rootReducer = combineReducers({
    counter,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;

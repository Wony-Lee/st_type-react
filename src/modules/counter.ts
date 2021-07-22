// typesafe-actions 를 import 해준다.
import { createAction, ActionType, createReducer } from "typesafe-actions";

const INCRAESE = "counter/INCRAESE";
const DECREASE = "counter/DECREASE";
const INCREASE_BY = "counter/INCREASE_BY";

// 만들었던것을 createAction으로 만든다.
// payload 가 특정값을 있다고하면 제네릭을 넣어주면된다.
// 하지만 지금은 특정값이 존재하지않기때문에 생략한다.
export const increase = createAction(INCRAESE)();
export const decrease = createAction(DECREASE)();
export const increase_by = createAction(INCREASE_BY)<number>();

type CounterState = {
    count: number;
};

const initialState: CounterState = {
    count: 0,
};

const actions = { increase, decrease, increase_by };

type CounterAction = ActionType<typeof actions>;

// createReducer를 사용하면 reducer 에서 관리하는 update 함수들을 하나하나 관리하는 방식으로 만들어 줄 수 있다.
const counter = createReducer<CounterState, CounterAction>(initialState, {
    [INCRAESE]: (state) => ({ count: state.count + 1 }),
    [DECREASE]: (state) => ({ count: state.count - 1 }),
    [INCREASE_BY]: (state, action) => ({ count: state.count + action.payload }),
});

export default counter;

import { ActionType, createReducer, createAction } from "typesafe-actions";

export const increase = createAction("counter/INCRAESE")();
export const decrease = createAction("counter/DECREASE")();
export const increaseBy = createAction("counter/INCREASE_BY")<number>();

type CounterState = {
    count: number;
};

const initialState: CounterState = {
    count: 0,
};

const actions = { increase, decrease, increaseBy };

type CounterAction = ActionType<typeof actions>;

// 메서드 체이닝 방식으로 구현
const counter = createReducer<CounterState, CounterAction>(initialState)
    .handleAction(increase, (state) => ({ count: state.count + 1 }))
    .handleAction(decrease, (state) => ({ count: state.count - 1 }))
    .handleAction(increaseBy, (state, action) => ({
        count: state.count + action.payload,
    }));
export default counter;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Counter from "../components/Counter";
import { RootState } from "../modules";
import { decrease, increase, increaseBy } from "../modules/counter";

// Props 를 따로 받아올 건 아니기때문에 Props의 type은 전달해주지 않아도 된다.
function CounterContainer() {
    // useSelector 로 상태값을 조회하고, Dispatch 해준다.
    const count = useSelector((state: RootState) => state.counter.count);
    const dispatch = useDispatch();

    const onIncrease = () => {
        dispatch(increase());
    };
    const onDecrease = () => {
        dispatch(decrease());
    };
    const onIncreaseBy = (diff: number) => {
        dispatch(increaseBy(diff));
    };

    return (
        <Counter
            count={count}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onIncreaseBy={onIncreaseBy}
        />
    );
}

export default CounterContainer;

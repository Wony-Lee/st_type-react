import React from "react";

// 해당 컴포넌트에서 사용할 props를 만들어주자.
type CounterProps = {
    count: number;
    onIncrease: () => void;
    onDecrease: () => void;
    // diff 파라미터를 받아와서 아무것도 반환하지않음.
    onIncreaseBy: (diff: number) => void;
};

// Props 로 받아오고, 타입은 CounterProps
function Counter({
    count,
    onIncrease,
    onDecrease,
    onIncreaseBy,
}: CounterProps) {
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
            <button onClick={() => onIncreaseBy(5)}>+5</button>
        </div>
    );
}

export default Counter;

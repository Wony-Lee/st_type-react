import React, { useReducer } from "react";

// useReducer를 불러와서 Action 함수를 만들자. type INCREASE , DECREASE 를 만들어주자.
type Action = { type: "INCREASE" } | { type: "DECREASE" };

// reducer 함수를 만들어주자.
function reducer(state: number, action: Action): number {
    // switch 문을 사용하여 type 을 만들어주자.
    switch (action.type) {
        case "INCREASE":
            return state + 1;
        case "DECREASE":
            return state - 1;
        default:
            throw new Error("Unhandled action type");
    }
}

function Counter() {
    // reducer를 불러오자.
    const [count, dispatch] = useReducer(reducer, 0);
    // dispatch 를 불러와서 type을 호출하자.
    const onIncrease = () => dispatch({ type: "INCREASE" });
    const onDecrease = () => dispatch({ type: "DECREASE" });
    return (
        <>
            <div>
                <h1>
                    {/* count를 보여준다 */}
                    {count}
                </h1>
                <div>
                    <button onClick={onIncrease}>+</button>
                    <button onClick={onDecrease}>-</button>
                </div>
            </div>
        </>
    );
}

export default Counter;

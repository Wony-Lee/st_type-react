import React, { useState } from "react";

function Counter() {
    // 타입을 명시하기 위해서 제네릭을 썼지만 생략해도 된다. 자동으로 타입추론을 해준다.
    const [count, setCount] = useState<number>(0);
    // onClick 함수 count 를 +1 해준다.
    const onIncrease = () => setCount(count + 1);
    // onClick 함수 count 를 -1 해준다.
    const onDecrease = () => setCount(count - 1);
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

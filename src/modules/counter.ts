const INCRAESE = "counter/INCRAESE" as const;
const DECREASE = "counter/DECREASE" as const;
const INCREASE_BY = "counter/INCREASE_BY" as const;

// 주의할 점 increase 에 마우스 커서를 대보면 action 생성함수의 type이 string 으로 되어있음.
// 이렇게 되면 reducer 를 작성할 때 typescript 의 type을 유추할 수 없음.
// 이 때 코드를 조금만 수정해주면 된다. 위에 as const 를 넣어주면 된다.
export const increase = () => ({ type: INCRAESE });
export const decrease = () => ({ type: DECREASE });
// diff 라는 값을 payload 로 받아오고, 타입은 number 로 선언
export const increase_by = (diff: number) => ({
    type: INCREASE_BY,
    payload: diff,
});

// 리듀서를 작성할 때에는 상태에 대한 타입을 만들어줘야한다.
type CounterState = {
    count: number;
};

// 리듀서를 구현하기전에 초기 상태를 구현
const initialState: CounterState = {
    count: 0,
};

// returnType 유틸타입이 있는데, 이것을 사용해서 특정 함수의 결과물을 받아 올 수 있다.
type ConterAction =
    | ReturnType<typeof increase>
    | ReturnType<typeof decrease>
    | ReturnType<typeof increase_by>;

function counter(
    state: CounterState = initialState,
    action: ConterAction
): CounterState {
    // 여기서 리듀서를 구현해주자.
    switch (action.type) {
        case INCRAESE:
            return {
                count: state.count + 1,
            };
        case DECREASE:
            return {
                count: state.count - 1,
            };
        case INCREASE_BY:
            return {
                count: state.count + action.payload,
            };
        default:
            return state;
    }
}

export default counter;

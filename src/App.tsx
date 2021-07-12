import React from "react";
import Counter from "./counter";
import Greetings from "./Greetings";
import MyForm from "./MyForm";
import ReducerSample from "./ReducerSample";

function App() {
    // Greetings 에 넘겨줘야하는 함수를 생성
    const onClick = (name: string) => {
        console.log(name);
    };

    // MyForm에 넘겨줘야하는 함수를 생성
    const onSubmit = (form: { name: string; description: string }) => {
        console.log(form);
    };
    return (
        <div>
            <Greetings name="Hello" onClick={onClick} />
            <Counter />
            <MyForm onSubmit={onSubmit} />
            <ReducerSample />
        </div>
    );
}

export default App;

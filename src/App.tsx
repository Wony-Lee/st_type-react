import React from "react";
import Counter from "./counter";
import Greetings from "./Greetings";
import MyForm from "./MyForm";
import ReducerSample from "./ReducerSample";
import { SampleProvider } from "./SampleContext";
import CounterContainer from "./containers/CounterContainer";
import TodoApp from "./containers/TodoApp";
import GithubProfileLoader from "./containers/GithubProfileLoader";
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
            <SampleProvider>
                <ReducerSample />
            </SampleProvider>
            <CounterContainer />
            <TodoApp />
            <GithubProfileLoader />
        </div>
    );
}

export default App;

import React from "react";
import Counter from "./counter";
import Greetings from "./Greetings";
import MyForm from "./MyForm";

function App() {
    const onClick = (name: string) => {
        console.log(name);
    };
    const onSubmit = (form: { name: string; description: string }) => {
        console.log(form);
    };
    return (
        <div>
            <Greetings name="Hello" onClick={onClick} />
            <Counter />
            <MyForm onSubmit={onSubmit} />
        </div>
    );
}

export default App;

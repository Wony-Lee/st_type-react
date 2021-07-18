import React, { useState } from "react";

type MyFormProps = {
    // onSubmit을 가져옴 form 의 값을 파라미터로 가져옴. 객체 안에 name, description이 string이며, 결과값은 void
    onSubmit: (form: { name: string; description: string }) => void;
};
// MyForm 컴포넌트를 생성하며, MyFormProps를 받아옴.
function MyForm({ onSubmit }: MyFormProps) {
    // useState 를 통해서 Form의 상태를 관리 또 한 상태를 자동으로 유추해주기때문에 제네릭이 필요없음.
    const [form, setForm] = useState({
        name: "",
        description: "",
    });

    // 비구조화 할당을 해줌.
    const { name, description } = form;

    // 이벤트객체를 확인해서 복사 붙여넣기 한 것.
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };
    // 마찬가지임.
    const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        // 새로고침 방지함수
        e.preventDefault();
        onSubmit(form);
        setForm({
            name: "",
            description: "",
        });
    };
    return (
        <>
            <form onSubmit={handlerSubmit}>
                <input name="name" value={name} onChange={onChange} />
                <input
                    name="description"
                    value={description}
                    onChange={onChange}
                />
                <button type="submit">등록</button>
            </form>
        </>
    );
}

export default MyForm;

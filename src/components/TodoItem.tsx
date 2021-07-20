import React, { CSSProperties } from "react";
import { Todo } from "../modules/todos";

type todoItemProps = {
    todo: Todo;
    onToggle: (id: number) => void;
    onRemove: (id: number) => void;
};

function TodoItem({ todo, onToggle, onRemove }: todoItemProps) {
    const handleToggle = () => onToggle(todo.id);
    const hnadleRemove = () => onRemove(todo.id);

    const textStyle: CSSProperties = {
        textDecoration: todo.done ? "line-through" : "none",
    };
    const removeStyle: CSSProperties = {
        color: "red",
        marginLeft: 0,
    };

    return (
        <li>
            <span onClick={handleToggle} style={textStyle}>
                {todo.text}
            </span>
            <span onClick={hnadleRemove} style={removeStyle}>
                (X)
            </span>
        </li>
    );
}

export default TodoItem;

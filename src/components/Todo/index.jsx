import { useState } from "react";
import * as C from "./styles"

export default function Todo({
    todo,
    toggleComplete,
    handleDelete,
    handleEdit
}) {
    const [newTitle, setNewTitle] = useState(todo.title);
    const handleChange = (e) => {
        e.preventDefault();
        if (todo.complete === true){
            setNewTitle(todo.title);
        } else {
            todo.title = "";
            setNewTitle(e.target.value);
        }
    };

    return(
        <C.Container>
            <C.Input 
                type="text" 
                value={todo.title === "" ? newTitle : todo.title}
                onChange={handleChange}
            />
            <div>
                <C.Button
                    onClick={() => toggleComplete(todo)}
                >
                    feito
                </C.Button>
                <C.ButtonX
                    onClick={() => handleDelete(todo.id)}
                >
                    X
                </C.ButtonX>
            </div>
        </C.Container>
    )
}

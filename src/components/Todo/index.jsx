import { useState } from "react";

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
        <div>
            <input 
                type="text" 
                value={todo.title === "" ? newTitle : todo.title}
                onChange={handleChange}
            />
            <div>
                <button
                    onClick={() => toggleComplete(todo)}
                >
                    feito
                </button>
                <button
                    onClick={() => handleDelete(todo.id)}
                >
                    X
                </button>
            </div>
        </div>
    )
}

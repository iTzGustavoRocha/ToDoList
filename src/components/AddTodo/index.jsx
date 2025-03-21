import react from "react"
import { db } from "../../firebaseConfig"
import { collection, addDoc } from "firebase/firestore"

export function AddTodo() {
    const [title, setTitle] = react.useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (title !== "") {
            await addDoc(collection(db, "todos"), {
                title,
                completed: false,
            });
            setTitle("");
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    type="text"
                    placeholder="Enter todo..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <button>
                    Add
                </button>
            </div>
        </form>
    )
}

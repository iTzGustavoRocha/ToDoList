<<<<<<< HEAD
import react from 'react'
import GlobalStyle from './styles/global'
import RoutesApp from './routes'

function App() {

  return (
    <>
      <RoutesApp />
      <GlobalStyle />
    </>
  );
};

export default App;
=======
import  { useEffect, useState} from "react";
import Login from "./components/Login";
import Logout from "./components/Logout";
import { auth } from "./firebaseConfig";
import {AddTodo} from "./components/AddTodo";
import Todo from "./components/Todo";
import {
    collection,
    query,
    onSnapshot,
    doc,
    updateDoc,
    deleteDoc,
    QuerySnapshot,
} from "firebase/firestore";
import { db } from "./firebaseConfig";

import GlobalStyle from "./styles/global"
import Header from "./components/Header";


function App() {
    const [user, setUser] = useState(null);
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const q = query(collection(db, "todos"));
        const unsub = onSnapshot(q, (QuerySnapshot) => {
            let todosArray = [];
            QuerySnapshot.forEach((doc) => {
                todosArray.push({ ...doc.data(), id: doc.id});
            });
            setTodos(todosArray);
        });
        return () => unsub();
    }, []);

    const handleEdit = async (todo) => {
        await updateDoc(doc(db, "todos", todos.id), { title: title});
    };

    const toggleComplete = async (todo) => {
        await updateDoc(doc(db, "todos", todo.id),{
            completed: !todo.completed
        });
    };

    const handleDelete = async (id) => {
        await deleteDoc(doc(db, "todos", id));
    };

    useEffect(() => {
        auth.onAuthStateChanged(setUser);
    }, []);
    return (
       <>
        <Header />
        {user ? (
                    <>
                        <Logout user={user} />
                        <div>
                            <AddTodo />
                        </div>
                        <div>
                            {todos.map((todo) => (
                                <Todo 
                                    key={todo.id}
                                    todo={todo}
                                    toggleComplete={toggleComplete}
                                    handleDelete={handleDelete}
                                    handleEdit={handleEdit}
                                />
                            ))}
                        </div>
                    </>
                ) : (
                        <Login/>
                    )}
        <GlobalStyle />
       </>
       

    );
};

export default App;

>>>>>>> b95a66e (commit inicial)

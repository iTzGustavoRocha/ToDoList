import { auth } from "../../firebaseConfig"
import { signOut } from "firebase/auth"
import React from "react"

function Logout ({ user }) {
    return (
        <>
            <h2>Olá, {user.displayName}</h2>
            <button onClick={() => signOut(auth)} >sair</button>
        </>
    );
};

export default Logout;
import { auth } from "../../firebaseConfig"
import { signOut } from "firebase/auth"
import React from "react"
import * as C from "./styles"

function Logout ({ user }) {
    return (
        <>
            <C.Title>Olá, {user.displayName}</C.Title>
            <C.Button onClick={() => signOut(auth)} >sair</C.Button>
        </>
    );
};

export default Logout;
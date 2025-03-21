import React from 'react';
import { auth } from '../../firebaseConfig';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import * as C from "./styles"

function Login(){
    const loginGoogle = async () => {
        const provider = new GoogleAuthProvider();

        try{
            const result = await signInWithPopup(auth, provider)
            console.log("Usuario logado: ",result.user);
        
        } catch (error) {
            console.log("Erro ao logar", error);
        }
    };

    return (
        <C.Container>
            <h2>Login</h2>
            <C.Button onClick={loginGoogle}>entrar com o google</C.Button>
        </C.Container>
    );
}

export default Login;
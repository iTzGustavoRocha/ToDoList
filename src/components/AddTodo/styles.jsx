import styled from "styled-components"

export const Input =styled.input`
    outline: none;
    border-radius: 5px;
    padding: 5px 10px;
    border: 1px solid #ccc;
    background: #32323c;
    color: #fff;
`;

export const Container = styled.div`
    justify-content: center;
    margin: 20px auto;
    
    
    border-radius: 5px;
    display: flex;
    padding: 15px 0px;
    gap: 10px;

    @media (max-width: 750px){
        display: grid;
    }
`;

export const Button = styled.button`
    color: white;
    background: #00875f;
    padding:10px;
    border-radius: 6px;
    border-style: none;
    font-weight: 600;
    transition: all 0.2s linear;
    cursor: pointer;
    
    

    &:hover{
        background: #00b37e;
    }
    
    

`;
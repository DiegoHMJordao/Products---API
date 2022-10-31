import styled, {css} from "styled-components";

export const AvisoStyle = styled.div`
    position:fixed;
    top:5%;
    left:45%;
    background-color:#fff;
    height:10rem;
    z-index:4;
    display:none;
    justify-content:center;
    align-items:center;
    border-radius:8px;

    p{
        margin:0 1rem ;
        color:white;
    }

    >svg:first-child{
        position:absolute;
        top:0;
        right:0;
        cursor: pointer;
    }

    ${ 
        ( { alert } ) => alert && css`
        display:flex;
        `
    }

`
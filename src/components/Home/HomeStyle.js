import styled from "styled-components";

export const HomeStyle = styled.section `
    background-color:#5c6e6e;
    text-align:center;
    height:auto;
    max-width:100%;
    width:100%;
    display:flex;
    justify-content:center;
    position: relative;
    ul{
        width:69%;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
    } 
    li {
        display:flex;
        flex-direction:column;      
        margin: 1rem 0;
        width: 15rem;
        height: 25rem;
        box-shadow: 0 0 3px black;                 
        position: relative;
        background-color:#e1ce8a;
        opacity:0.9;
        transition:200ms;
        cursor: pointer;
        &:hover{
            box-shadow:0 0 20px white;
        }
    }
    img{
        height:12rem;
        margin-bottom:1rem;
    }
    content{
        padding:0 1rem;  
    }
    h3,span{
        line-height:2;
        color:#bd1b43;
        font-weight:500;
    }
    p:last-child{
        color:black;
    }
    span{
        font-size:1.25rem;
    }
    button{
        margin:1rem 0;
        border:none;
        padding: 1rem 2rem;
        opacity:0.8;
        color:white;
        background-color:#333e50;
        position:absolute;
        bottom: 0;
        left:3.44rem;
        cursor: pointer;
        transition:700ms;
        &:hover{
            opacity:1;            
            border-radius:8px;
        }
    }
    @media (min-width:760px) {
        justify-content:flex-end;
        ul{
            flex-direction:row;
            flex-wrap:wrap;
        }
        li{
            margin: 0.8rem;
        }
    }
    @media (min-width:1080px){
        justify-content:flex-end;
    }
`

export const FilterDiv = styled.div`
    position:absolute;
    display:block;
    justify-content:flex-start;
    align-items:baseline;
    top: 1rem;
    left: 2rem;
    width: 15rem;
    height: 44rem;
    background-color:#e7d9b4;
    border-radius:8px;
    h3{
        color:black;
        font-weight: bold;
    }
    ul{
        display:flex;
        flex-direction:column;
        justify-content:flex-start;
        border-bottom:1px solid black;
        align-items:baseline;
        width:100%;
    }
    li{
        display:flex;
        flex-direction:row;
        justify-content:flex-start;
        width:auto;
        height:auto;
        box-shadow:none;
        background-color:inherit;
        align-items:center;
        &:hover{
            box-shadow:none;
        }
    }
    input{
        margin-right: 0.5rem;
    }
    button{
        left:4rem;
    }
    
@media(max-width:759px) {
    display:none;
}
    
`
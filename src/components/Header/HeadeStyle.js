import styled from 'styled-components'

export const HeaderStyle = styled.header`
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
    background-color: rgba(49,49,50,1);
    color: rgba(255,255,255,1);
    max-width:100%;
    width:100%;
    ul{
        display:flex;
        justify-content:center;
        align-items:center;
    }
    li {
        padding: 0 1rem;
        cursor: pointer;
        opacity:0.8;
        padding:1rem;
        &:hover {
            opacity:1;
        }
    }
    >svg{
        display:none;
        cursor: pointer;
    }
    @media (max-width: 960px){
        justify-content:flex-start;
        nav {
            display:none;
        }
        >svg{
            display:block;
            margin-left:1rem;
        }       
    }
`